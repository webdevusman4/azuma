"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, CalendarCheck, House, Layers, UserRound } from "lucide-react";
import { BOOK_HREF } from "@/lib/site";
import s from "./home.module.css";

const TABS = [
  { label: "Home", href: "/", Icon: House },
  { label: "Services", href: "/services", Icon: Layers },
  { label: "About", href: "/about", Icon: UserRound },
  { label: "Insights", href: "/insights", Icon: BookOpen },
] as const;

/** Floating glass tab bar for phones (HiScale pattern), with the consultation as the last, highlighted tab. */
export default function TabBar() {
  const path = usePathname() ?? "/";
  return (
    <nav className={`${s.tabbar} ${s.glass}`} aria-label="Sections">
      {TABS.map(({ label, href, Icon }) => {
        const current = href === "/" ? path === "/" : path === href || path.startsWith(href + "/");
        return (
          <Link key={href} href={href} aria-current={current ? "page" : undefined}>
            <Icon size={21} strokeWidth={current ? 2.4 : 2} aria-hidden="true" />
            {label}
          </Link>
        );
      })}
      <Link href={BOOK_HREF} data-book="">
        <CalendarCheck size={21} strokeWidth={2.2} aria-hidden="true" />
        Book
      </Link>
    </nav>
  );
}
