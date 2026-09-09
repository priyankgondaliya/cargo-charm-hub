import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";

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
  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-brand text-mist/80 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-2 text-xs">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-3.5" /> Cargo Centre, Shoreham Road, Heathrow TW6 3UA
            </span>
            <span className="inline-flex items-center gap-2">
              <Mail className="size-3.5" /> hello@veloraair.co.uk
            </span>
          </div>
          <span className="inline-flex items-center gap-2 font-semibold text-mist">
            <Phone className="size-3.5" /> +44 (0)20 8069 4410
          </span>
        </div>
      </div>

      <div className="px-4 pt-3 md:px-6">
        <nav className="glass mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/60 px-5 py-3 shadow-[var(--shadow-soft)]">
          <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <div className="grid size-10 place-items-center rounded-xl bg-brand font-display text-lg font-bold text-mist">
              V
            </div>
            <span className="font-display text-lg font-semibold leading-none tracking-tight text-brand">
              Velora Air
              <span className="mt-0.5 block text-[10px] font-medium uppercase tracking-[0.18em] text-ink/50">
                Airfreight &amp; Courier
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-7 text-sm font-medium text-ink/70 lg:flex">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="transition hover:text-accent-blue"
                activeProps={{ className: "text-accent-blue" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <Link
            to="/contact"
            className="hidden rounded-xl bg-accent-blue px-5 py-2.5 text-sm font-semibold text-mist shadow-[var(--shadow-accent)] transition hover:-translate-y-0.5 lg:inline-block"
          >
            Get a quote
          </Link>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-xl border border-white/60 text-brand transition hover:bg-white/60 lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>

        {open && (
          <div className="glass mx-auto mt-3 flex max-w-7xl flex-col gap-1 rounded-2xl border border-white/60 p-3 shadow-[var(--shadow-soft)] lg:hidden">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-ink/80 transition hover:bg-white/60 hover:text-accent-blue"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-xl bg-accent-blue px-4 py-3 text-center text-sm font-semibold text-mist shadow-[var(--shadow-accent)]"
            >
              Get a quote
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative z-10 mt-20 bg-brand text-mist/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <div className="font-display text-xl font-semibold text-mist">Velora Air</div>
          <p className="mt-3 text-sm leading-relaxed">
            An independent UK airfreight forwarder and courier network, moving urgent cargo and
            parcels from Heathrow, Birmingham and Manchester to over 140 countries.
          </p>
        </div>
        <div>
          <div className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-mist">
            Company
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition hover:text-mint">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-mist">
            Services
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Express air freight</li>
            <li>Same-day courier</li>
            <li>Customs clearance</li>
            <li>ETSF bonded warehousing</li>
            <li>E-commerce fulfilment</li>
            <li>Sea &amp; road freight</li>
          </ul>
        </div>
        <div>
          <div className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-mist">
            Get in touch
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Cargo Centre, Shoreham Road, Heathrow TW6 3UA</li>
            <li>+44 (0)20 8069 4410</li>
            <li>hello@veloraair.co.uk</li>
            <li>Ops desk open 24/7</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 px-6 py-6 text-xs sm:flex-row">
          <span>© 2026 Velora Air Logistics Ltd. Registered in England &amp; Wales.</span>
          <span>IATA · BIFA · AEO(F) · ISO 9001 accredited</span>
        </div>
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
    <section className="mx-auto max-w-7xl px-6 pb-4 pt-12">
      <div className="rise glass rounded-3xl border border-white/60 p-8 shadow-[var(--shadow-soft)] md:p-12">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue">
          {eyebrow}
        </span>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-brand md:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/70">{copy}</p>
      </div>
    </section>
  );
}

export function Backdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="drift absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full bg-glow/40 blur-3xl" />
      <div
        className="drift absolute top-1/3 -right-40 h-[560px] w-[560px] rounded-full bg-accent-blue/25 blur-3xl"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="drift absolute bottom-0 left-1/4 h-[420px] w-[420px] rounded-full bg-mint/25 blur-3xl"
        style={{ animationDelay: "-11s" }}
      />
    </div>
  );
}
