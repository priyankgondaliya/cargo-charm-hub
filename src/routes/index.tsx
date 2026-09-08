import { createFileRoute } from "@tanstack/react-router";
import { Plane, Ship, Truck } from "lucide-react";
import portNight from "@/assets/port-night.jpg";
import depotDawn from "@/assets/depot-dawn.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Velora Logistics — Air, Sea & Road Freight Across the UK" },
      {
        name: "description",
        content:
          "Velora moves air, sea and road freight across 140 countries with live tracking, UK depots and same-day quotes.",
      },
      { property: "og:title", content: "Velora Logistics — Freight That Moves With You" },
      {
        property: "og:description",
        content:
          "Air, sea, road and 3PL freight across the UK and Europe, with live tracking on every shipment.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  {
    icon: Plane,
    tint: "bg-accent-blue/10",
    title: "Air freight",
    copy: "Priority next-day lanes across Europe and Asia with customs handled end to end.",
  },
  {
    icon: Ship,
    tint: "bg-mint/15",
    title: "Ocean freight",
    copy: "FCL and LCL on scheduled trade lanes, optimised for cost without losing speed.",
  },
  {
    icon: Truck,
    tint: "bg-glow/15",
    title: "Road & 3PL",
    copy: "Managed warehousing, last-mile and bonded storage under one accountable partner.",
  },
];

const steps = [
  { n: "01", t: "Book", c: "Give us the lane, pallet count and window. Rate confirmed in GBP." },
  { n: "02", t: "Collect", c: "A driver arrives in the booked slot and seals the load at origin." },
  { n: "03", t: "Transit", c: "Live GPS with checkpoint scans and an ETA you can share." },
  { n: "04", t: "Deliver", c: "Signed proof of delivery back in your inbox within the hour." },
];

const lanes = [
  "London → Glasgow",
  "Leeds → Rotterdam",
  "Bristol → Dublin",
  "Manchester → Frankfurt",
  "Dover → Antwerp",
  "Birmingham → Paris",
];

function Index() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-mist">
      <div className="pointer-events-none absolute inset-0">
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

      {/* nav */}
      <header className="relative z-20 mx-auto max-w-7xl px-6 pt-6">
        <nav className="glass flex items-center justify-between rounded-2xl border border-white/60 px-6 py-4 shadow-[var(--shadow-soft)]">
          <div className="flex items-center gap-3">
            <div className="grid size-10 place-items-center rounded-xl bg-brand font-display text-lg font-bold text-mist">
              V
            </div>
            <span className="font-display text-lg font-semibold tracking-tight text-brand">Velora</span>
          </div>
          <div className="hidden items-center gap-8 text-sm font-medium text-ink/70 md:flex">
            <a href="#solutions" className="transition hover:text-accent-blue">Solutions</a>
            <a href="#network" className="transition hover:text-accent-blue">Network</a>
            <a href="#process" className="transition hover:text-accent-blue">Tracking</a>
            <a href="#quote" className="transition hover:text-accent-blue">Contact</a>
          </div>
          <a
            href="#quote"
            className="rounded-xl bg-accent-blue px-5 py-2.5 text-sm font-semibold text-mist shadow-[var(--shadow-accent)] transition hover:-translate-y-0.5"
          >
            Get a quote
          </a>
        </nav>
      </header>

      {/* hero */}
      <main className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-14">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rise">
            <span className="glass inline-flex items-center gap-2 rounded-full border border-white/60 px-4 py-1.5 text-xs font-medium text-ink/80">
              <span className="size-2 rounded-full bg-mint" /> Real-time global logistics
            </span>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.02] tracking-tight text-brand md:text-6xl">
              Freight that moves as fast as your business.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/70">
              Velora orchestrates air, sea and road freight across 140 countries — with live tracking
              and a single pane of glass for every shipment.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#quote"
                className="rounded-xl bg-brand px-7 py-3.5 text-sm font-semibold text-mist shadow-[var(--shadow-lift)] transition hover:-translate-y-0.5"
              >
                Start shipping
              </a>
              <a
                href="#network"
                className="glass rounded-xl border border-white/60 px-7 py-3.5 text-sm font-semibold text-brand transition hover:-translate-y-0.5"
              >
                Explore the network
              </a>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-4">
              <div className="glass rounded-2xl border border-white/60 p-4">
                <div className="font-display text-3xl font-bold text-brand">140</div>
                <div className="mt-1 text-xs font-medium text-ink/60">Countries served</div>
              </div>
              <div className="glass rounded-2xl border border-white/60 p-4">
                <div className="font-display text-3xl font-bold text-accent-blue">98.6%</div>
                <div className="mt-1 text-xs font-medium text-ink/60">On-time delivery</div>
              </div>
              <div className="glass rounded-2xl border border-white/60 p-4">
                <div className="font-display text-3xl font-bold text-mint">2.4M</div>
                <div className="mt-1 text-xs font-medium text-ink/60">Shipments / yr</div>
              </div>
            </div>
          </div>

          {/* tracking glass card */}
          <div className="relative">
            <div className="glass-dark floaty rounded-3xl border border-white/40 p-6 shadow-[var(--shadow-lift)]">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-medium uppercase tracking-[0.15em] text-mist/50">
                    Live shipment
                  </div>
                  <div className="mt-1 font-display text-lg font-semibold text-mist">
                    VL-88231 · Rotterdam → Manchester
                  </div>
                </div>
                <span className="rounded-full bg-mint/20 px-3 py-1 text-xs font-semibold text-mint">
                  In transit
                </span>
              </div>
              <img
                src={portNight}
                alt="Aerial view of an illuminated container port at night"
                width={1024}
                height={640}
                className="mt-5 aspect-[16/10] w-full rounded-2xl object-cover outline-1 -outline-offset-1 outline-white/10"
              />
              <div className="mt-5 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="size-2.5 rounded-full bg-mint" />
                  <span className="text-sm text-mist/85">Departed Rotterdam port</span>
                  <span className="ml-auto text-xs text-mist/50">04:12</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="size-2.5 rounded-full bg-glow" />
                  <span className="text-sm text-mist/85">Clearance at Dover</span>
                  <span className="ml-auto text-xs text-mist/50">11:48</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="size-2.5 rounded-full border border-white/40" />
                  <span className="text-sm text-mist/50">Arriving Manchester DC</span>
                  <span className="ml-auto text-xs text-mist/40">19:30</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* lane marquee */}
        <div className="mt-14 overflow-hidden rounded-2xl border border-white/60 glass py-3">
          <div className="marquee flex w-max whitespace-nowrap">
            {[...lanes, ...lanes].map((lane, i) => (
              <span
                key={i}
                className="px-8 text-sm font-medium tracking-wide text-ink/55"
              >
                {lane}
              </span>
            ))}
          </div>
        </div>

        {/* services */}
        <section id="solutions" className="mt-16">
          <div className="glass rounded-3xl border border-white/60 p-8 shadow-[var(--shadow-soft)]">
            <div className="flex items-end justify-between gap-4">
              <h2 className="font-display text-2xl font-bold tracking-tight text-brand">
                Modes we move for you
              </h2>
              <span className="hidden text-sm text-ink/50 sm:block">
                Air · Sea · Road · Warehousing
              </span>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="rounded-2xl border border-white/70 bg-white/50 p-6 transition hover:-translate-y-1 hover:bg-white/70"
                >
                  <div className={`grid size-12 place-items-center rounded-xl ${s.tint}`}>
                    <s.icon className="size-6 text-brand" strokeWidth={1.75} />
                  </div>
                  <div className="mt-4 font-display text-lg font-semibold text-brand">{s.title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">{s.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* network */}
        <section id="network" className="mt-16">
          <div className="glass grid gap-8 rounded-3xl border border-white/60 p-8 shadow-[var(--shadow-soft)] lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue">
                Our network
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-brand md:text-4xl">
                Fifteen UK depots, wired into one dispatch desk.
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-ink/70">
                A pallet booked in Leeds clears for Rotterdam on the same run. Our control room is
                staffed around the clock, so every lane has a person behind it.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div>
                  <div className="font-display text-4xl font-bold text-brand">15</div>
                  <div className="mt-1 text-xs font-medium text-ink/60">UK depots</div>
                </div>
                <div>
                  <div className="font-display text-4xl font-bold text-brand">620</div>
                  <div className="mt-1 text-xs font-medium text-ink/60">Vehicles</div>
                </div>
                <div>
                  <div className="font-display text-4xl font-bold text-brand">24/7</div>
                  <div className="mt-1 text-xs font-medium text-ink/60">Control desk</div>
                </div>
              </div>
            </div>
            <img
              src={depotDawn}
              alt="Lorries at the loading bays of a UK distribution centre at dawn"
              width={1280}
              height={800}
              loading="lazy"
              className="aspect-[16/10] w-full rounded-2xl border border-white/60 object-cover"
            />
          </div>
        </section>

        {/* process */}
        <section id="process" className="mt-16">
          <div className="glass rounded-3xl border border-white/60 p-8 shadow-[var(--shadow-soft)]">
            <h2 className="font-display text-2xl font-bold tracking-tight text-brand">
              How a load moves
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s) => (
                <div
                  key={s.n}
                  className="rounded-2xl border border-white/70 bg-white/50 p-6 transition hover:-translate-y-1 hover:bg-white/70"
                >
                  <div className="grid size-10 place-items-center rounded-full border border-accent-blue/40 font-display text-sm font-semibold text-accent-blue">
                    {s.n}
                  </div>
                  <div className="mt-4 font-display text-lg font-semibold text-brand">{s.t}</div>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">{s.c}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* quote */}
        <section id="quote" className="mt-16">
          <div className="glass grid gap-10 rounded-3xl border border-white/60 p-8 shadow-[var(--shadow-soft)] lg:grid-cols-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue">
                Get a rate
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-brand md:text-4xl">
                Tell us the lane. We'll quote it today.
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-ink/70">
                Rates come back the same working day in GBP, with no hidden handling fees.
              </p>
              <div className="mt-8 space-y-1 text-sm text-ink/70">
                <p>Unit 4, Dockside Works, London SE1 3QD</p>
                <p>020 7946 0128</p>
                <p>dispatch@velora.co.uk</p>
              </div>
            </div>
            <form className="grid gap-3" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  className="rounded-xl border border-white/70 bg-white/60 px-4 py-3 text-sm text-brand outline-none transition placeholder:text-ink/45 focus:border-accent-blue"
                  placeholder="Company"
                />
                <input
                  className="rounded-xl border border-white/70 bg-white/60 px-4 py-3 text-sm text-brand outline-none transition placeholder:text-ink/45 focus:border-accent-blue"
                  placeholder="Contact name"
                />
              </div>
              <input
                className="rounded-xl border border-white/70 bg-white/60 px-4 py-3 text-sm text-brand outline-none transition placeholder:text-ink/45 focus:border-accent-blue"
                placeholder="Email or phone"
              />
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  className="rounded-xl border border-white/70 bg-white/60 px-4 py-3 text-sm text-brand outline-none transition placeholder:text-ink/45 focus:border-accent-blue"
                  placeholder="From (city or postcode)"
                />
                <input
                  className="rounded-xl border border-white/70 bg-white/60 px-4 py-3 text-sm text-brand outline-none transition placeholder:text-ink/45 focus:border-accent-blue"
                  placeholder="To (city or postcode)"
                />
              </div>
              <textarea
                rows={3}
                className="resize-none rounded-xl border border-white/70 bg-white/60 px-4 py-3 text-sm text-brand outline-none transition placeholder:text-ink/45 focus:border-accent-blue"
                placeholder="Pallet count, weight and date window"
              />
              <button
                type="submit"
                className="mt-1 rounded-xl bg-accent-blue px-6 py-3.5 text-sm font-semibold text-mist shadow-[var(--shadow-accent)] transition hover:-translate-y-0.5"
              >
                Request my quote
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/60 bg-white/40">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-6 py-8 text-sm text-ink/60 sm:flex-row">
          <span className="font-display font-semibold text-brand">Velora Freight Ltd</span>
          <span>© 2026 Velora. Registered in England &amp; Wales.</span>
        </div>
      </footer>
    </div>
  );
}
