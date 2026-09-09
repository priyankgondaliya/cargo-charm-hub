import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, ShieldCheck, Globe2 } from "lucide-react";
import airCargo from "@/assets/air-cargo.jpg";
import courierVan from "@/assets/courier-van.jpg";
import { services, stats, steps, testimonials, faqs, lanes, industries } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Velora Air — Airfreight & Courier Services from Heathrow" },
      {
        name: "description",
        content:
          "UK airfreight forwarder and courier network. Express air cargo, same-day couriers, customs clearance and bonded warehousing from Heathrow, Birmingham and Manchester.",
      },
      { property: "og:title", content: "Velora Air — Airfreight & Courier from Heathrow" },
      {
        property: "og:description",
        content:
          "Express air cargo, same-day couriers, CDS customs clearance and ETSF bonded warehousing to 140+ countries.",
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
      {/* hero */}
      <section className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rise">
          <span className="glass inline-flex items-center gap-2 rounded-full border border-white/60 px-4 py-1.5 text-xs font-medium text-ink/80">
            <span className="size-2 rounded-full bg-mint" /> Heathrow · Birmingham · Manchester
          </span>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.02] tracking-tight text-brand md:text-6xl">
            Airfreight and couriers that catch the next flight out.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink/70">
            Velora Air is an independent UK freight forwarder. We collect within the hour, screen and
            build up your cargo airside, clear it through customs in-house and deliver door to door
            in over 140 countries.
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
            src={airCargo}
            alt="Cargo pallets being loaded onto a freighter aircraft at dusk"
            width={1600}
            height={1000}
            className="floaty aspect-[16/11] w-full rounded-3xl border border-white/60 object-cover shadow-[var(--shadow-lift)]"
          />
          <div className="glass-dark absolute -bottom-6 left-6 right-6 rounded-2xl border border-white/20 p-5 shadow-[var(--shadow-lift)]">
            <div className="text-xs font-medium uppercase tracking-[0.15em] text-mist/50">
              Live consignment
            </div>
            <div className="mt-1 font-display text-base font-semibold text-mist">
              VL-88231 · LHR → DXB · 640 kg
            </div>
            <div className="mt-3 flex items-center gap-3 text-sm text-mist/80">
              <span className="size-2.5 rounded-full bg-mint" /> Departed 04:12 · Cleared Dubai 19:30
            </div>
          </div>
        </div>
      </section>

      {/* lane marquee */}
      <div className="glass mt-20 overflow-hidden rounded-2xl border border-white/60 py-3">
        <div className="marquee flex w-max whitespace-nowrap">
          {[...lanes, ...lanes].map((lane, i) => (
            <span key={i} className="px-8 text-sm font-medium tracking-wide text-ink/55">
              {lane}
            </span>
          ))}
        </div>
      </div>

      {/* why us */}
      <section className="mt-16 grid gap-4 md:grid-cols-3">
        {[
          {
            icon: Clock,
            t: "Collected in 60 minutes",
            c: "A dedicated courier is with you within the hour across London, and same day nationwide.",
          },
          {
            icon: ShieldCheck,
            t: "Customs handled in-house",
            c: "Our own CDS brokers file the entries, so nothing waits on a third party at the border.",
          },
          {
            icon: Globe2,
            t: "One desk, every mode",
            c: "Air, sea, road and fulfilment on one account, with one person answering the phone.",
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

      {/* services */}
      <section className="mt-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue">
              What we do
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand md:text-4xl">
              From one envelope to a full charter.
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

      {/* courier band */}
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
              Courier division
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-brand md:text-4xl">
              The first and last mile, run by us.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-ink/70">
              Airfreight only works if the parcel reaches the aircraft. Our own fleet of vans and
              onboard couriers covers collection, airport delivery, import distribution and returns —
              so a single company is accountable from your desk to the consignee's.
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

      {/* process */}
      <section className="mt-20">
        <h2 className="font-display text-3xl font-bold tracking-tight text-brand md:text-4xl">
          How a shipment flies
        </h2>
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

      {/* industries preview */}
      <section className="mt-20">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue">
            Sectors we fly for
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand md:text-4xl">
            Cargo that cannot wait.
          </h2>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.slice(0, 6).map((i) => (
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

      {/* testimonials */}
      <section className="mt-20">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue">
            What clients say
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand md:text-4xl">
            Trusted on the tightest deadlines.
          </h2>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
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

      {/* faq */}
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

      {/* cta */}
      <section className="mt-20">
        <div className="rounded-3xl bg-brand p-10 text-center shadow-[var(--shadow-lift)] md:p-14">
          <h2 className="font-display text-3xl font-bold tracking-tight text-mist md:text-4xl">
            Need it there tomorrow morning?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-mist/70">
            Send us the weight, dimensions and destination. Our desk quotes the same working day —
            and books the next available flight.
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
