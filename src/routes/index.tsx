import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, ShieldCheck, Globe2, Boxes, Leaf } from "lucide-react";
import portNight from "@/assets/port-night.jpg";
import courierVan from "@/assets/courier-van.jpg";
import warehouse from "@/assets/warehouse.jpg";
import depotDawn from "@/assets/depot-dawn.jpg";
import {
  brand,
  modes,
  services,
  stats,
  steps,
  testimonials,
  faqs,
  lanes,
  industries,
  hubs,
  corridors,
  capabilities,
  caseStudies,
  serviceLevels,
  credentials,
} from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${brand.name} — Air, Sea, Road & Local Freight from the UK` },
      {
        name: "description",
        content:
          "Independent UK freight forwarder for air, sea, road and local delivery. FCL and LCL ocean, express air cargo, trucking, same-day couriers, customs clearance and bonded warehousing.",
      },
      { property: "og:title", content: `${brand.name} — Air, Sea, Road & Local Freight` },
      {
        property: "og:description",
        content:
          "From a same-day parcel to a full container. Air, sea, road and local logistics with in-house customs and 24/7 operations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="mx-auto max-w-7xl px-6 pt-10">
      <section className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rise">
          <span className="glass inline-flex items-center gap-2 rounded-full border border-white/60 px-4 py-1.5 text-xs font-medium text-ink/80">
            <span className="size-2 rounded-full bg-mint" /> Air · Sea · Road · Local
          </span>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.02] tracking-tight text-brand md:text-6xl">
            Freight that moves by air, sea, road and the last mile.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink/70">
            {brand.name} is an independent UK forwarder. We do not just take cargo from A to B —
            we design the lane around your business, clear it in-house and deliver door to door in
            over 140 countries.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-brand px-7 py-3.5 text-sm font-semibold text-mist shadow-[var(--shadow-lift)] transition hover:-translate-y-0.5"
            >
              Get a quote <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/services"
              className="glass rounded-xl border border-white/60 px-7 py-3.5 text-sm font-semibold text-brand transition hover:-translate-y-0.5"
            >
              See our services
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.l} className="glass rounded-2xl border border-white/60 p-4">
                <div className="font-display text-3xl font-bold text-brand">{s.v}</div>
                <div className="mt-1 text-xs font-medium text-ink/60">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <img
            src={portNight}
            alt="Night view of a deep-sea container terminal with gantry cranes and stacked boxes"
            width={1600}
            height={1000}
            className="floaty aspect-[16/11] w-full rounded-3xl border border-white/60 object-cover shadow-[var(--shadow-lift)]"
          />
          <div className="glass-dark absolute -bottom-6 left-6 right-6 rounded-2xl border border-white/20 p-5 shadow-[var(--shadow-lift)]">
            <div className="text-xs font-medium uppercase tracking-[0.15em] text-mist/50">
              Live consignment
            </div>
            <div className="mt-1 font-display text-base font-semibold text-mist">
              LE-44108 · FXT → LOS · 1 × 40HC
            </div>
            <div className="mt-3 flex items-center gap-3 text-sm text-mist/80">
              <span className="size-2.5 rounded-full bg-mint" /> On vessel · Inland clearance booked
            </div>
          </div>
        </div>
      </section>

      <div className="glass mt-20 overflow-hidden rounded-2xl border border-white/60 py-3">
        <div className="marquee flex w-max whitespace-nowrap">
          {[...lanes, ...lanes].map((lane, i) => (
            <span key={i} className="px-8 text-sm font-medium tracking-wide text-ink/55">
              {lane}
            </span>
          ))}
        </div>
      </div>

      <section className="mt-16">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue">
            Every mode
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand md:text-4xl">
            One account. Air, water, truck and local.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-ink/70">
            Choose the mode that fits the clock and the budget — or let us combine them. The same
            coordinator books the flight, the vessel, the truck and the last mile.
          </p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {modes.map((m) => (
            <Link
              key={m.slug}
              to="/services"
              hash={m.slug}
              className="glass rounded-3xl border border-white/60 p-7 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:border-accent-blue/40"
            >
              <div className="grid size-12 place-items-center rounded-xl bg-accent-blue/10">
                <m.icon className="size-6 text-accent-blue" strokeWidth={1.75} />
              </div>
              <div className="mt-4 font-display text-lg font-semibold text-brand">{m.title}</div>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{m.copy}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-4 md:grid-cols-3">
        {[
          {
            icon: Clock,
            t: "Collected in 60 minutes",
            c: "A dedicated courier is with you within the hour across London, and same day nationwide for parcels, pallets and full loads.",
          },
          {
            icon: ShieldCheck,
            t: "Customs handled in-house",
            c: "Our own CDS brokers file at airports and ports, then clear inland so cargo is not paying quay rent or ramp storage.",
          },
          {
            icon: Globe2,
            t: "Bespoke, not one-size-fits-all",
            c: "We listen first, then design air, sea, road or a mix around your product, your legislation and your cost.",
          },
        ].map((f) => (
          <div
            key={f.t}
            className="glass rounded-3xl border border-white/60 p-7 shadow-[var(--shadow-soft)] transition hover:-translate-y-1"
          >
            <div className="grid size-12 place-items-center rounded-xl bg-accent-blue/10">
              <f.icon className="size-6 text-accent-blue" strokeWidth={1.75} />
            </div>
            <div className="mt-4 font-display text-lg font-semibold text-brand">{f.t}</div>
            <p className="mt-2 text-sm leading-relaxed text-ink/65">{f.c}</p>
          </div>
        ))}
      </section>

      <section className="mt-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue">
              What we do
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand md:text-4xl">
              From a small parcel to a full container.
            </h2>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent-blue"
          >
            All services <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.slug}
              className="glass rounded-3xl border border-white/60 p-7 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:border-accent-blue/40"
            >
              <div className="grid size-12 place-items-center rounded-xl bg-mint/15">
                <s.icon className="size-6 text-brand" strokeWidth={1.75} />
              </div>
              <div className="mt-4 font-display text-lg font-semibold text-brand">{s.title}</div>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{s.copy}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {s.points.map((p) => (
                  <li
                    key={p}
                    className="rounded-full border border-white/70 bg-white/60 px-3 py-1 text-xs font-medium text-ink/70"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <div className="glass grid gap-8 rounded-3xl border border-white/60 p-8 shadow-[var(--shadow-soft)] lg:grid-cols-2 lg:items-center">
          <img
            src={courierVan}
            alt="Courier loading parcels into a delivery van on a UK street"
            width={1600}
            height={1000}
            loading="lazy"
            className="aspect-[16/10] w-full rounded-2xl border border-white/60 object-cover"
          />
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue">
              Local & last mile
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-brand md:text-4xl">
              The first and last mile, run by us.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-ink/70">
              International freight only works if someone collects it and someone delivers it. Our
              own vans cover same-day London, nationwide next-day and timed store drops — so one
              company is accountable from your dock to the consignee&apos;s.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div>
                <div className="font-display text-3xl font-bold text-brand">60</div>
                <div className="mt-1 text-xs font-medium text-ink/60">Minute collection</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-brand">85</div>
                <div className="mt-1 text-xs font-medium text-ink/60">Vans &amp; couriers</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-brand">24/7</div>
                <div className="mt-1 text-xs font-medium text-ink/60">Ops desk</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="glass grid gap-8 rounded-3xl border border-white/60 p-8 shadow-[var(--shadow-soft)] lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue">
              Road & truck
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-brand md:text-4xl">
              Full loads, part loads and UK pallets.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-ink/70">
              FTL and LTL across the UK and Europe, overnight pallet distribution, and dedicated
              vehicles from a courier van to a low-loader. Transit times are set to your dock, not
              a generic trunking timetable.
            </p>
            <Link
              to="/services"
              hash="road"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-blue"
            >
              Explore road freight <ArrowRight className="size-4" />
            </Link>
          </div>
          <img
            src={depotDawn}
            alt="Trucks on the loading bays of a UK distribution warehouse"
            width={1600}
            height={1000}
            loading="lazy"
            className="aspect-[16/10] w-full rounded-2xl border border-white/60 object-cover lg:order-none"
          />
        </div>
      </section>

      <section className="mt-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue">
              UK network
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand md:text-4xl">
              Airports, ports and depots. One account.
            </h2>
          </div>
          <Link to="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-accent-blue">
            About our network <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {hubs.map((h) => (
            <div
              key={h.code}
              className="glass rounded-3xl border border-white/60 p-7 shadow-[var(--shadow-soft)] transition hover:-translate-y-1"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="font-display text-xl font-bold text-brand">{h.name}</div>
                <span className="rounded-full bg-accent-blue/10 px-3 py-1 text-xs font-semibold text-accent-blue">
                  {h.code}
                </span>
              </div>
              <div className="mt-3 text-sm font-semibold text-ink/80">{h.focus}</div>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{h.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <h2 className="font-display text-3xl font-bold tracking-tight text-brand md:text-4xl">
          How a shipment moves
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink/70">
          Four clear stages from rate to POD — whether the cargo flies, sails or rolls — with live
          status your customers can follow.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="glass rounded-3xl border border-white/60 p-7 shadow-[var(--shadow-soft)] transition hover:-translate-y-1"
            >
              <div className="grid size-10 place-items-center rounded-full border border-accent-blue/40 font-display text-sm font-semibold text-accent-blue">
                {s.n}
              </div>
              <div className="mt-4 font-display text-lg font-semibold text-brand">{s.t}</div>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{s.c}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <div className="glass rounded-3xl border border-white/60 p-8 shadow-[var(--shadow-soft)] lg:p-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue">
                Trade corridors
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand md:text-4xl">
                Lanes we tender every week.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-ink/65">
              Scheduled ocean, air and road capacity on the corridors UK shippers use most — with
              charters and dedicated trucks when the calendar gets tight.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {corridors.map((c) => (
              <div
                key={`${c.from}-${c.to}`}
                className="rounded-2xl border border-white/70 bg-white/50 p-6 transition hover:-translate-y-1 hover:bg-white/70"
              >
                <div className="flex items-center gap-2 font-display text-base font-semibold text-brand">
                  <span>{c.from}</span>
                  <ArrowRight className="size-4 shrink-0 text-accent-blue" />
                  <span>{c.to}</span>
                </div>
                <p className="mt-2 text-sm text-ink/60">{c.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue">
            Special handling
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand md:text-4xl">
            When the cargo is not ordinary.
          </h2>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c) => (
            <div
              key={c.title}
              className="glass rounded-3xl border border-white/60 p-6 shadow-[var(--shadow-soft)] transition hover:-translate-y-1"
            >
              <div className="font-display text-lg font-semibold text-brand">{c.title}</div>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{c.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <div className="glass grid gap-8 rounded-3xl border border-white/60 p-8 shadow-[var(--shadow-soft)] lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue">
              Warehousing & fulfilment
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-brand md:text-4xl">
              35,000 sq ft, inland of the ports.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-ink/70">
              ETSF temporary storage, pick-and-pack, container stuffing and airline build-up under
              the same roof as the ops desk. Pull boxes off the quay, clear inland and feed stores
              without another contractor in the middle.
            </p>
            <Link
              to="/services"
              hash="warehousing"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-blue"
            >
              Explore warehousing <ArrowRight className="size-4" />
            </Link>
          </div>
          <img
            src={warehouse}
            alt="Warehouse team palletising freight for onward air, sea and road distribution"
            width={1600}
            height={1000}
            loading="lazy"
            className="aspect-[16/10] w-full rounded-2xl border border-white/60 object-cover"
          />
        </div>
      </section>

      <section className="mt-20">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue">
            Service levels
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand md:text-4xl">
            Pick the clock your freight needs.
          </h2>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {serviceLevels.map((s) => (
            <div
              key={s.name}
              className="glass rounded-3xl border border-white/60 p-7 shadow-[var(--shadow-soft)] transition hover:-translate-y-1"
            >
              <div className="font-display text-xl font-bold text-brand">{s.name}</div>
              <div className="mt-2 text-sm font-semibold text-accent-blue">{s.window}</div>
              <ul className="mt-5 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-ink/65">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-mint" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue">
              Industries we serve
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand md:text-4xl">
              Cargo with a deadline attached.
            </h2>
          </div>
          <Link
            to="/industries"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent-blue"
          >
            All industries <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((i) => (
            <div
              key={i.title}
              className="glass rounded-2xl border border-white/60 p-6 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:border-accent-blue/50"
            >
              <div className="font-display text-base font-semibold text-brand">{i.title}</div>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{i.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue">
            Results
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand md:text-4xl">
            Outcomes on real lanes.
          </h2>
        </div>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {caseStudies.map((c) => (
            <article
              key={c.title}
              className="glass flex flex-col rounded-3xl border border-white/60 p-6 shadow-[var(--shadow-soft)] transition hover:-translate-y-1"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-accent-blue">
                {c.sector}
              </span>
              <h3 className="mt-3 font-display text-xl font-bold text-brand">{c.title}</h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/65">{c.copy}</p>
              <div className="mt-6 border-t border-white/60 pt-4 font-display text-sm font-semibold text-mint">
                {c.result}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <div className="glass grid gap-8 rounded-3xl border border-white/60 p-8 shadow-[var(--shadow-soft)] lg:grid-cols-[auto_1fr] lg:items-center lg:p-12">
          <div className="flex size-20 items-center justify-center rounded-2xl bg-mint/15">
            <Leaf className="size-10 text-mint" strokeWidth={1.5} />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue">
              Responsible freight
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-brand md:text-4xl">
              Sea and road where the clock allows. Air when it does not.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink/70">
              We favour ocean, short-sea and road consolidation when the deadline permits, and can
              provide lane-level carbon estimates for your ESG reporting — without turning every
              urgent AOG into a lecture.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue">
            Credentials
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand md:text-4xl">
            Ready for your vendor pack.
          </h2>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {credentials.map((c) => (
            <div
              key={c}
              className="glass inline-flex items-center gap-2 rounded-2xl border border-white/60 px-5 py-3 text-sm font-semibold text-brand shadow-[var(--shadow-soft)]"
            >
              <Boxes className="size-4 text-accent-blue" strokeWidth={1.75} />
              {c}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <div className="relative overflow-hidden rounded-3xl border border-white/40 bg-brand px-8 py-14 text-center shadow-[var(--shadow-lift)] lg:px-16">
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent-blue/40 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-mint/25 blur-3xl" />
          <h2 className="relative font-display text-3xl font-bold tracking-tight text-mist md:text-4xl">
            Need a rate on air, sea or road today?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-base leading-relaxed text-mist/75">
            Send weight, dimensions and destination — our desk returns an all-in GBP quote the same
            working day, with the mode that actually fits.
          </p>
          <Link
            to="/contact"
            className="relative mt-8 inline-flex items-center gap-2 rounded-xl bg-accent-blue px-7 py-3.5 text-sm font-semibold text-mist shadow-[var(--shadow-accent)] transition hover:-translate-y-0.5"
          >
            Get a same-day quote
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <section className="mt-20">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue">
            What clients say
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand md:text-4xl">
            Trusted on the tightest deadlines.
          </h2>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="glass flex flex-col rounded-3xl border border-white/60 p-6 shadow-[var(--shadow-soft)] transition hover:-translate-y-1"
            >
              <blockquote className="flex-1 text-sm leading-relaxed text-ink/75">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 border-t border-white/60 pt-4">
                <div className="font-display text-sm font-semibold text-brand">{t.name}</div>
                <div className="mt-0.5 text-xs text-ink/55">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <h2 className="font-display text-3xl font-bold tracking-tight text-brand md:text-4xl">
          Questions, answered
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {faqs.map((f) => (
            <div key={f.q} className="glass rounded-2xl border border-white/60 p-6">
              <div className="font-display text-base font-semibold text-brand">{f.q}</div>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <div className="rounded-3xl bg-brand p-10 text-center shadow-[var(--shadow-lift)] md:p-14">
          <h2 className="font-display text-3xl font-bold tracking-tight text-mist md:text-4xl">
            Tell us the cargo. We will pick the mode.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-mist/70">
            Send us the weight, dimensions and destination. Our desk quotes the same working day —
            air, sea, road or a combination, booked on one account.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="rounded-xl bg-accent-blue px-7 py-3.5 text-sm font-semibold text-mist shadow-[var(--shadow-accent)] transition hover:-translate-y-0.5"
            >
              Request a quote
            </Link>
            <Link
              to="/tracking"
              className="rounded-xl border border-white/25 px-7 py-3.5 text-sm font-semibold text-mist transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              Track a shipment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
