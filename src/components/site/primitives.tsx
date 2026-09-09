import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8", className)}>{children}</div>
  );
}

export function Section({
  tone = "white",
  className,
  innerClassName,
  children,
  id,
}: {
  tone?: "white" | "mist" | "navy";
  className?: string;
  innerClassName?: string;
  children: ReactNode;
  id?: string;
}) {
  const tones = {
    white: "bg-white text-ink",
    mist: "bg-mist text-ink",
    navy: "bg-navy text-white",
  };
  return (
    <section id={id} className={cn(tones[tone], className)}>
      <Container className={cn("py-16 md:py-20 lg:py-24", innerClassName)}>{children}</Container>
    </section>
  );
}

export function Eyebrow({
  children,
  className,
  light = false,
}: {
  children: ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <span
      className={cn(
        "text-[11px] font-semibold uppercase tracking-[0.18em]",
        light ? "text-amber" : "text-accent-blue",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function SectionTitle({
  children,
  className,
  light = false,
}: {
  children: ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <h2
      className={cn(
        "max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight md:text-[2.35rem]",
        light ? "text-white" : "text-navy",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export function Body({
  children,
  className,
  light = false,
}: {
  children: ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <p
      className={cn(
        "max-w-2xl text-base leading-relaxed",
        light ? "text-navy-muted" : "text-subtle",
        className,
      )}
    >
      {children}
    </p>
  );
}

export const btnCta =
  "inline-flex items-center justify-center gap-2 rounded-lg bg-amber px-6 py-3 text-sm font-semibold text-navy shadow-[var(--shadow-accent)] transition duration-200 hover:bg-[#e09308] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2";

export const btnNavy =
  "inline-flex items-center justify-center gap-2 rounded-lg bg-navy px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-[#132a44] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2";

export const btnOutline =
  "inline-flex items-center justify-center gap-2 rounded-lg border border-line bg-white px-6 py-3 text-sm font-semibold text-navy transition duration-200 hover:border-navy/25 hover:bg-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2";

export const btnOutlineOnDark =
  "inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-transparent px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-navy";

export const cardClass =
  "rounded-xl border border-line bg-white p-6 shadow-[0_1px_2px_rgba(11,31,51,0.04)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]";

export function IconBadge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "grid size-11 place-items-center rounded-lg bg-accent-blue/10 text-accent-blue",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function CtaBand({
  title,
  copy,
  children,
}: {
  title: string;
  copy: string;
  children: ReactNode;
}) {
  return (
    <Section tone="navy" className="navy-grid">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-navy-muted">{copy}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">{children}</div>
      </div>
    </Section>
  );
}
