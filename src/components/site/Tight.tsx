import s from "./site.module.css";

/**
 * Plus Jakarta Sans gives . , and - generous side bearings, which read as gaps at display sizes with tight tracking.
 * Wrapping them in a span lets CSS pull them in. Use for large headings only.
 */
export function Tight({ children }: { children: string }) {
  return (
    <>
      {children.split(/([.,-])/).map((part, i) =>
        part === "." || part === "," ? (
          <span key={i} className={s.punct}>{part}</span>
        ) : part === "-" ? (
          <span key={i} className={s.dash}>{part}</span>
        ) : (
          part
        ),
      )}
    </>
  );
}
