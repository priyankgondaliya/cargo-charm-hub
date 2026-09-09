import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { brand, footerServices } from "@/data/site";
import { BrandLockup, LogoMark } from "@/components/site/Logo";
import { Container, btnCta } from "@/components/site/primitives";
import { cn } from "@/lib/utils";

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/tracking", label: "Track" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-white transition-shadow duration-300",
        scrolled ? "border-line shadow-[0_8px_24px_rgba(11,31,51,0.06)]" : "border-line",
      )}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60] focus:rounded-lg focus:bg-amber focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-navy"
      >
        Skip to content
      </a>

      <div className="hidden border-b border-white/10 bg-navy text-navy-muted md:block">
        <Container className="flex items-center justify-between gap-6 py-2 text-xs">
          <div className="flex min-w-0 items-center gap-6">
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-3.5 shrink-0 text-accent-blue" aria-hidden="true" />
              <span className="truncate">{brand.address}</span>
            </span>
            <a
              href={`mailto:${brand.email}`}
              className="inline-flex items-center gap-2 transition hover:text-white"
            >
              <Mail className="size-3.5 shrink-0 text-accent-blue" aria-hidden="true" />
              {brand.email}
            </a>
          </div>
          <a
            href={brand.phoneHref}
            className="inline-flex shrink-0 items-center gap-2 font-semibold text-white transition hover:text-amber"
          >
            <Phone className="size-3.5" aria-hidden="true" /> {brand.phone}
          </a>
        </Container>
      </div>

      <Container className="flex h-16 items-center justify-between gap-4 sm:h-[4.25rem]">
        <Link
          to="/"
          className="flex items-center"
          onClick={() => setOpen(false)}
          aria-label="LogiEdge Consulting home"
        >
          <BrandLockup />
        </Link>

        <nav
          className="hidden items-center gap-1 text-sm font-medium text-subtle lg:flex"
          aria-label="Primary"
        >
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="relative px-3 py-2 transition hover:text-navy"
              activeProps={{
                className:
                  "text-navy after:absolute after:inset-x-3 after:bottom-0 after:h-0.5 after:bg-accent-blue",
              }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/contact" className={cn(btnCta, "hidden lg:inline-flex")}>
            Get a Quote
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-lg border border-line text-navy transition hover:bg-mist lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </Container>

      {open && (
        <div id="mobile-nav" className="border-t border-line bg-white lg:hidden">
          <Container className="flex flex-col gap-1 py-3">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-navy transition hover:bg-mist"
                activeProps={{ className: "bg-mist font-semibold text-navy" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className={cn(btnCta, "mt-2")}>
              Get a Quote
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative z-10 bg-navy text-navy-muted">
      <Container className="grid gap-10 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <LogoMark variant="onDark" className="size-10 shrink-0" />
            <div>
              <div className="font-display text-xl font-bold leading-none tracking-tight text-white">
                Logi<span className="text-amber">Edge</span>
              </div>
              <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-navy-muted">
                Consulting
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            An independent UK freight forwarder moving cargo by air, sea, road and local delivery —
            from a same-day parcel to a full container — through Heathrow, Birmingham, Manchester
            and the UK&apos;s deep-sea ports.
          </p>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-white">
            Company
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-white">
            Services
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            {footerServices.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-white">
            Get in touch
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            <li>{brand.address}</li>
            <li>
              <a href={brand.phoneHref} className="transition hover:text-white">
                {brand.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${brand.email}`} className="transition hover:text-white">
                {brand.email}
              </a>
            </li>
            <li>Ops desk open 24/7</li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col justify-between gap-2 py-5 text-xs sm:flex-row">
          <span>© 2026 {brand.legal}. All rights reserved.</span>
          <span>IATA · BIFA · AEO(F) · ISO 9001 accredited</span>
        </Container>
      </div>
    </footer>
  );
}

export function PageHero({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <section className="relative overflow-hidden navy-grid">
      <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden="true">
        <svg viewBox="0 0 800 240" className="h-full w-full" preserveAspectRatio="xMaxYMid slice">
          <path
            d="M40 180 Q 220 40 420 120 T 780 70"
            fill="none"
            stroke="#155EEF"
            strokeOpacity="0.35"
            strokeWidth="1.25"
            strokeDasharray="5 8"
            className="route-dash"
          />
          <circle cx="40" cy="180" r="4" fill="#F59E0B" />
          <circle cx="780" cy="70" r="4" fill="#155EEF" />
        </svg>
      </div>
      <Container className="relative py-14 md:py-20">
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber">
          {eyebrow}
        </span>
        <h1 className="mt-4 max-w-3xl font-display text-3xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-navy-muted md:text-lg">
          {copy}
        </p>
      </Container>
    </section>
  );
}
