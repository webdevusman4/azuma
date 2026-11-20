"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import createGlobe from "cobe";
import { MapPin } from "lucide-react";
import { REGIONS } from "@/lib/site";
import s from "./site.module.css";

const cityId = (name: string) => "c-" + name.toLowerCase().replace(/[^a-z]+/g, "-");
// cobe's projection: longitude/latitude to the globe's phi/theta.
const toAngles = (lat: number, lng: number): [number, number] => [Math.PI - ((lng * Math.PI) / 180 - Math.PI / 2), (lat * Math.PI) / 180];
const wrap = (a: number) => Math.atan2(Math.sin(a), Math.cos(a));

const MARKERS = REGIONS.flatMap((r) => r.cities.map((c) => ({ location: [c.lat, c.lng] as [number, number], size: 0.045, id: cityId(c.name) })));
// A network of routes between the regions we work across.
const HUBS: [number, number][] = [[40.71, -74.01], [43.65, -79.38], [51.51, -0.13], [25.2, 55.27], [24.86, 67.0], [1.35, 103.82]];
const ARCS = [[0, 1], [0, 2], [2, 3], [3, 4], [4, 5], [0, 4]].map(([a, b]) => ({ from: HUBS[a], to: HUBS[b] }));

/**
 * Rotating globe with the cities Azuma serves. Regions cycle on their own; clicking one turns the globe to it,
 * dragging spins it. City labels float on the globe where CSS anchor positioning is supported.
 * Static (no spin, no cycling) for reduced-motion users.
 */
export default function WorldGlobe() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const target = useRef(toAngles(...REGIONS[0].focus));
  const held = useRef(0); // auto-cycle ticks to skip after the user interacts
  const drag = useRef<{ x: number; phi: number } | null>(null);

  // Rotate toward the active region.
  useEffect(() => {
    target.current = toAngles(...REGIONS[active].focus);
  }, [active]);

  // Auto-cycle regions.
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setInterval(() => {
      if (drag.current) return;
      if (held.current > 0) {
        held.current -= 1;
        return;
      }
      setActive((n) => (n + 1) % REGIONS.length);
    }, 4200);
    return () => clearInterval(t);
  }, []);

  // Create the globe when it comes near the viewport; only animate while it is visible.
  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let globe: ReturnType<typeof createGlobe> | null = null;
    let raf = 0;
    let visible = false;
    let [phi, theta] = target.current;
    phi -= 0.8;

    const canvas = document.createElement("canvas");
    canvas.className = s.globeCanvas;
    canvas.setAttribute("aria-hidden", "true");
    mount.appendChild(canvas);

    const size = () => Math.max(280, mount.offsetWidth);
    let last = performance.now();
    const loop = (now = performance.now()) => {
      if (!globe) return;
      // Time-based easing: reaches the target in the same time on fast and slow devices.
      const dt = Math.min(0.1, (now - last) / 1000);
      last = now;
      const k = reduce ? 1 : 1 - Math.exp(-dt / 0.35);
      const [tp, tt] = target.current;
      if (!drag.current) {
        phi += wrap(tp - phi) * k + (reduce ? 0 : dt * 0.04);
        theta += (tt * 0.55 - theta) * k;
      }
      globe.update({ phi, theta });
      if (visible && !reduce) raf = requestAnimationFrame(loop);
    };
    const start = () => {
      if (!globe) {
        const w = size();
        globe = createGlobe(canvas, {
          devicePixelRatio: Math.min(2, window.devicePixelRatio || 1),
          width: w * 2,
          height: w * 2,
          phi,
          theta,
          dark: 1,
          diffuse: 1.25,
          mapSamples: 16000,
          mapBrightness: 5.5,
          mapBaseBrightness: 0.04,
          baseColor: [0.18, 0.32, 0.36],
          markerColor: [0.55, 0.88, 0.88],
          glowColor: [0.2, 0.42, 0.45],
          markers: MARKERS,
          arcs: ARCS,
          arcColor: [0.89, 0.65, 0.18],
          arcWidth: 0.5,
          arcHeight: 0.28,
          markerElevation: 0.01,
          opacity: 0.95,
        });
        canvas.style.opacity = "1";
      }
      cancelAnimationFrame(raf);
      last = performance.now();
      raf = requestAnimationFrame(loop);
    };
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible) start();
    }, { rootMargin: "200px" });
    io.observe(mount);

    const onResize = () => globe?.update({ width: size() * 2, height: size() * 2 });
    const onDown = (e: PointerEvent) => {
      drag.current = { x: e.clientX, phi };
      held.current = 2;
      canvas.setPointerCapture(e.pointerId);
    };
    const onMove = (e: PointerEvent) => {
      if (!drag.current) return;
      phi = drag.current.phi + (e.clientX - drag.current.x) / 180;
      if (reduce) globe?.update({ phi });
    };
    const onUp = () => {
      if (drag.current) target.current = [phi, target.current[1]];
      drag.current = null;
    };
    window.addEventListener("resize", onResize);
    canvas.addEventListener("pointerdown", onDown);
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerup", onUp);
    canvas.addEventListener("pointercancel", onUp);

    // Reduced motion: still re-render once when the user picks a region.
    const kick = () => {
      if (reduce && globe) loop();
    };
    window.addEventListener("azuma-globe-kick", kick);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("azuma-globe-kick", kick);
      globe?.destroy();
      mount.replaceChildren();
    };
  }, []);

  const pick = (i: number) => {
    held.current = 3;
    setActive(i);
    requestAnimationFrame(() => window.dispatchEvent(new Event("azuma-globe-kick")));
  };

  const region = REGIONS[active];
  return (
    <div className={s.globeGrid}>
      <div className={s.regionList} role="tablist" aria-label="Regions we serve">
        {REGIONS.map((r, i) => (
          <button
            key={r.id}
            type="button"
            role="tab"
            aria-selected={i === active}
            className={s.region}
            onClick={() => pick(i)}
          >
            <span className={s.regionName}>
              <MapPin size={16} aria-hidden="true" />
              {r.name}
            </span>
            <span className={s.regionCities}>{r.cities.map((c) => c.name).join(" · ")}</span>
          </button>
        ))}
      </div>

      <div className={s.globeStage}>
        <div className={s.globeHalo} aria-hidden="true" />
        <div ref={mountRef} className={s.globeMount} title="Drag to spin" />
        {/* Labels for the active region's cities, anchored to the globe's markers (CSS anchor positioning). */}
        <div key={region.id} className={s.cityLabels} aria-hidden="true">
          {region.cities.filter((c) => region.labels.includes(c.name)).map((c) => {
            const id = cityId(c.name);
            const style = { positionAnchor: `--cobe-${id}` } as CSSProperties;
            return (
              <span key={id} className={s.cityLabel} style={style}>
                {c.name}
              </span>
            );
          })}
        </div>
        <p className={s.globeNow} aria-live="polite">
          <span>Now showing</span>
          <b>{region.name}</b>
        </p>
      </div>
    </div>
  );
}
