"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { SERVICES, SITE } from "@/lib/site";
import s from "./site.module.css";

type State = "idle" | "sending" | "sent" | "error";

/**
 * Consultation request form. On Netlify it posts to Netlify Forms (registered in public/__forms.html), so
 * submissions land in the Netlify dashboard and can be emailed to info@. If posting fails (another host,
 * offline), the visitor is shown the email and WhatsApp alternatives instead of losing their message.
 */
export default function ContactForm() {
  const [state, setState] = useState<State>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setState("sending");
    try {
      const body = new URLSearchParams(new FormData(form) as unknown as Record<string, string>).toString();
      const res = await fetch("/__forms.html", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setState("sent");
    } catch {
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div className={`${s.formDone} ${s.glass}`} role="status">
        <CheckCircle2 size={44} aria-hidden="true" />
        <h3>Thank you. We&apos;ve got your request.</h3>
        <p>We&apos;ll be in touch shortly to set up your consultation.</p>
      </div>
    );
  }

  return (
    <form className={`${s.form} ${s.glass}`} name="consultation" onSubmit={onSubmit} aria-describedby="form-note">
      <input type="hidden" name="form-name" value="consultation" />
      <p className={s.hp} aria-hidden="true">
        <label>Leave this empty <input name="bot-field" tabIndex={-1} autoComplete="off" /></label>
      </p>
      <div className={s.row2}>
        <label>
          <span>Full name</span>
          <input name="name" required autoComplete="name" placeholder="Your name" />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" required autoComplete="email" placeholder="you@company.com" />
        </label>
      </div>
      <div className={s.row2}>
        <label>
          <span>Phone or WhatsApp <em>(optional)</em></span>
          <input name="phone" type="tel" autoComplete="tel" placeholder="+1 (555) 000-0000" />
        </label>
        <label>
          <span>Service</span>
          <select name="service" defaultValue="">
            <option value="">Not sure yet</option>
            {SERVICES.map((x) => (
              <option key={x.slug} value={x.name}>{x.name}</option>
            ))}
          </select>
        </label>
      </div>
      <label>
        <span>How can we help?</span>
        <textarea name="message" required rows={5} placeholder="A few lines about your business and what you need." />
      </label>
      <button className={`${s.btn} ${s.btnN} ${s.submit}`} type="submit" disabled={state === "sending"}>
        <Send size={18} aria-hidden="true" />
        {state === "sending" ? "Sending…" : "Request a free consultation"}
      </button>
      <p id="form-note" className={s.formNote} role={state === "error" ? "alert" : undefined}>
        {state === "error" ? (
          <>Sorry, that didn&apos;t send. Please email <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">message us on WhatsApp</a>.</>
        ) : (
          <>Free and no obligation. Prefer to talk now? Call or WhatsApp us.</>
        )}
      </p>
    </form>
  );
}
