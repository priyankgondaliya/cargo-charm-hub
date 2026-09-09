import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, ShieldCheck, Globe2, Boxes, Leaf } from "lucide-react";
import airCargo from "@/assets/air-cargo.jpg";
import courierVan from "@/assets/courier-van.jpg";
import warehouse from "@/assets/warehouse.jpg";
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
import {
  Body,
  Container,
  CtaBand,
  Eyebrow,
  IconBadge,
  Section,
  SectionTitle,
  btnCta,
  btnOutlineOnDark,
  cardClass,
} from "@/components/site/primitives";
import { NetworkMap, RouteLine } from "@/components/site/NetworkMap";
import { cn } from "@/lib/utils";

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
    <div>
      <section className="relative min-h-[34rem] overflow-hidden bg-navy md:min-h-[40rem] lg:min-h-[44rem]">
        <img
          src={airCargo}
          alt="Wide-body cargo aircraft being loaded at dawn"
          width={1600}
          height={1000}
          className="absolute inset-0 h-full w-full object-cover object-[62%_center]"
        />
        <div className="absolute inset-0 bg-navy/78" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/35" />
        <Container className="relative grid items-center gap-10 py-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:py-24">
          <div className="fade-up min-w-0">
            <span className="inline-flex items-center gap-2 border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-navy-muted">
              <span className="size-1.5 rounded-full bg-success" aria-hidden="true" />
              Air · Sea · Road · Local
            </span>
            <h1 className="mt-6 max-w-xl font-display text-[2.15rem] font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.35rem]">
              Freight that moves by air, sea, road and the last mile.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-navy-muted md:text-lg">
              {brand.name} is an independent UK forwarder. We do not just take cargo from A to B —
              we design the lane around your business, clear it in-house and deliver door to door in
              over 140 countries.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/contact" className={btnCta}>
                Get a Quote <ArrowRight className="size-4" />
              </Link>
              <Link to="/services" className={btnOutlineOnDark}>
                See Our Services
              </Link>
            </div>
          </div>

          <aside className="fade-up min-w-0 rounded-xl border border-white/12 bg-navy/80 p-6 lg:w-full lg:justify-self-end">
            <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-navy-muted">
              Live consignment
            </div>
            <div className="mt-2 font-display text-lg font-bold text-white">LE-44108</div>
            <div className="mt-1 text-sm text-navy-muted">1 × 40HC</div>
            <div className="mt-6">
              <RouteLine
                origin="FXT"
                destination="LOS"
                status="On vessel · Inland clearance booked"
                progress={62}
                dark
              />
            </div>
          </aside>
        </Container>
      </section>

      <section className="border-b border-line bg-white">
        <Container className="grid grid-cols-2 gap-y-8 py-10 sm:py-12 lg:grid-cols-4 lg:gap-0">
          {stats.map((s, i) => (
            <div
              key={s.l}
              className={cn(
                "px-0 lg:px-8",
                i > 0 && "lg:border-l lg:border-line",
                i % 2 === 1 && "border-l border-line pl-6 sm:pl-8 lg:pl-8",
                i < 2 && "max-lg:pb-2",
              )}
            >
              <div className="font-display text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
                {s.v}
              </div>
              <div className="mt-2 text-sm font-medium text-subtle">{s.l}</div>
            </div>
          ))}
        </Container>
      </section>

      <div className="overflow-hidden border-b border-line bg-mist py-3.5">
        <div className="marquee flex w-max whitespace-nowrap">
          {[...lanes, ...lanes].map((lane, i) => (
            <span key={i} className="px-8 text-sm font-medium tracking-wide text-subtle">
              {lane}
            </span>
          ))}
        </div>
      </div>

      <Section tone="white">
        <Eyebrow>Every mode</Eyebrow>
        <SectionTitle className="mt-3">One account. Air, water, truck and local.</SectionTitle>
        <Body className="mt-3">
          Choose the mode that fits the clock and the budget — or let us combine them. The same
          coordinator books the flight, the vessel, the truck and the last mile.
        </Body>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {modes.map((m) => (
            <Link key={m.slug} to="/services" hash={m.slug} className={cardClass}>
              <IconBadge>
                <m.icon className="size-5" strokeWidth={1.75} />
              </IconBadge>
              <div className="mt-5 font-display text-lg font-bold text-navy">{m.title}</div>
              <p className="mt-2 text-sm leading-relaxed text-subtle">{m.copy}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="mist">
        <div className="grid gap-10 md:grid-cols-3 md:gap-0">
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
          ].map((f, i) => (
            <div key={f.t} className={cn("md:px-8", i > 0 && "md:border-l md:border-line")}>
              <IconBadge>
                <f.icon className="size-5" strokeWidth={1.75} />
              </IconBadge>
              <h3 className="mt-5 font-display text-lg font-bold text-navy">{f.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-subtle">{f.c}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Eyebrow>What we do</Eyebrow>
            <SectionTitle className="mt-3">From a small parcel to a full container.</SectionTitle>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent-blue hover:text-navy"
          >
            All services <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.slug} className={cardClass}>
              <IconBadge>
                <s.icon className="size-5" strokeWidth={1.75} />
              </IconBadge>
              <h3 className="mt-5 font-display text-lg font-bold text-navy">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-subtle">{s.copy}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {s.points.map((p) => (
                  <li
                    key={p}
                    className="border border-line bg-mist px-2.5 py-1 text-xs font-medium text-subtle"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="mist">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <img
            src={courierVan}
            alt="Courier loading parcels into a delivery van on a UK street"
            width={1600}
            height={1000}
            loading="lazy"
            className="aspect-[16/10] w-full rounded-xl object-cover"
          />
          <div>
            <Eyebrow>Local & last mile</Eyebrow>
            <SectionTitle className="mt-4">The first and last mile, run by us.</SectionTitle>
            <Body className="mt-4">
              International freight only works if someone collects it and someone delivers it. Our
              own vans cover same-day London, nationwide next-day and timed store drops — so one
              company is accountable from your dock to the consignee&apos;s.
            </Body>
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-line pt-6">
              <div>
                <div className="font-display text-3xl font-extrabold text-navy">60</div>
                <div className="mt-1 text-xs font-medium text-subtle">Minute collection</div>
              </div>
              <div>
                <div className="font-display text-3xl font-extrabold text-navy">85</div>
                <div className="mt-1 text-xs font-medium text-subtle">Vans &amp; couriers</div>
              </div>
              <div>
                <div className="font-display text-3xl font-extrabold text-navy">24/7</div>
                <div className="mt-1 text-xs font-medium text-subtle">Ops desk</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="navy" className="navy-grid">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow light>Road & truck</Eyebrow>
            <SectionTitle light className="mt-4">
              Full loads, part loads and UK pallets.
            </SectionTitle>
            <Body light className="mt-4">
              FTL and LTL across the UK and Europe, overnight pallet distribution, and dedicated
              vehicles from a courier van to a low-loader. Transit times are set to your dock, not a
              generic trunking timetable.
            </Body>
            <Link
              to="/services"
              hash="road"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-amber hover:text-white"
            >
              Explore road freight <ArrowRight className="size-4" />
            </Link>
          </div>
          <ul className="space-y-0 border-t border-white/10">
            {["FTL & LTL", "UK pallet network", "EU groupage"].map((item) => (
              <li
                key={item}
                className="flex items-center justify-between border-b border-white/10 py-4 text-sm font-medium text-white"
              >
                {item}
                <span className="size-1.5 rounded-full bg-amber" aria-hidden="true" />
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="white">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Eyebrow>UK network</Eyebrow>
            <SectionTitle className="mt-3">Airports, ports and depots. One account.</SectionTitle>
          </div>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent-blue hover:text-navy"
          >
            About our network <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {hubs.map((h) => (
            <div key={h.code} className="bg-white p-7">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-display text-xl font-bold text-navy">{h.name}</h3>
                <span className="text-xs font-bold tracking-wider text-accent-blue">{h.code}</span>
              </div>
              <div className="mt-3 text-sm font-semibold text-ink">{h.focus}</div>
              <p className="mt-2 text-sm leading-relaxed text-subtle">{h.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="mist">
        <SectionTitle>How a shipment moves</SectionTitle>
        <Body className="mt-3">
          Four clear stages from rate to POD — whether the cargo flies, sails or rolls — with live
          status your customers can follow.
        </Body>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.n} className="relative">
              <div className="font-display text-sm font-bold text-accent-blue">{s.n}</div>
              {i < steps.length - 1 && (
                <div className="absolute top-2 left-10 hidden h-px w-[calc(100%-1.5rem)] bg-line lg:block" />
              )}
              <h3 className="mt-3 font-display text-lg font-bold text-navy">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-subtle">{s.c}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="navy" className="navy-grid">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow light>Trade corridors</Eyebrow>
            <SectionTitle light className="mt-3">
              Lanes we tender every week.
            </SectionTitle>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-navy-muted">
            Scheduled ocean, air and road capacity on the corridors UK shippers use most — with
            charters and dedicated trucks when the calendar gets tight.
          </p>
        </div>
        <div className="mt-8 overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">
          <NetworkMap className="h-auto w-full" />
        </div>
        <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {corridors.map((c) => (
            <div key={`${c.from}-${c.to}`} className="bg-navy/80 p-5">
              <div className="flex items-center gap-2 font-display text-sm font-semibold text-white">
                <span>{c.from}</span>
                <ArrowRight className="size-3.5 shrink-0 text-amber" />
                <span>{c.to}</span>
              </div>
              <p className="mt-2 text-sm text-navy-muted">{c.note}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <div className="max-w-2xl">
          <Eyebrow>Special handling</Eyebrow>
          <SectionTitle className="mt-3">When the cargo is not ordinary.</SectionTitle>
        </div>
        <div className="mt-10 grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c) => (
            <div key={c.title} className="border-t border-line pt-5">
              <h3 className="font-display text-lg font-bold text-navy">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-subtle">{c.copy}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="mist">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow>Warehousing & fulfilment</Eyebrow>
            <SectionTitle className="mt-4">35,000 sq ft, inland of the ports.</SectionTitle>
            <Body className="mt-4">
              ETSF temporary storage, pick-and-pack, container stuffing and airline build-up under
              the same roof as the ops desk. Pull boxes off the quay, clear inland and feed stores
              without another contractor in the middle.
            </Body>
            <Link
              to="/services"
              hash="warehousing"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-blue hover:text-navy"
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
            className="aspect-[16/10] w-full rounded-xl object-cover"
          />
        </div>
      </Section>

      <Section tone="white">
        <Eyebrow>Service levels</Eyebrow>
        <SectionTitle className="mt-3">Pick the clock your freight needs.</SectionTitle>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {serviceLevels.map((s) => (
            <div key={s.name} className={cardClass}>
              <h3 className="font-display text-xl font-bold text-navy">{s.name}</h3>
              <div className="mt-2 text-sm font-semibold text-accent-blue">{s.window}</div>
              <ul className="mt-5 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-subtle">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent-blue" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="mist">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Eyebrow>Industries we serve</Eyebrow>
            <SectionTitle className="mt-3">Cargo with a deadline attached.</SectionTitle>
          </div>
          <Link
            to="/industries"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent-blue hover:text-navy"
          >
            All industries <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((i) => (
            <div key={i.title}>
              <h3 className="font-display text-base font-bold text-navy">{i.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-subtle">{i.copy}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <Eyebrow>Results</Eyebrow>
        <SectionTitle className="mt-3">Outcomes on real lanes.</SectionTitle>
        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {caseStudies.map((c) => (
            <article key={c.title} className="flex flex-col border-t-2 border-accent-blue pt-5">
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-accent-blue">
                {c.sector}
              </span>
              <h3 className="mt-3 font-display text-xl font-bold text-navy">{c.title}</h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-subtle">{c.copy}</p>
              <div className="mt-6 border-t border-line pt-4 text-sm font-semibold text-navy">
                {c.result}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="navy" className="navy-grid">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-12">
          <IconBadge className="bg-white/10 text-amber">
            <Leaf className="size-5" strokeWidth={1.5} />
          </IconBadge>
          <div>
            <Eyebrow light>Responsible freight</Eyebrow>
            <SectionTitle light className="mt-3">
              Sea and road where the clock allows. Air when it does not.
            </SectionTitle>
            <Body light className="mt-4 max-w-3xl">
              We favour ocean, short-sea and road consolidation when the deadline permits, and can
              provide lane-level carbon estimates for your ESG reporting — without turning every
              urgent AOG into a lecture.
            </Body>
          </div>
        </div>
      </Section>

      <Section tone="white" innerClassName="py-14 md:py-16">
        <Eyebrow>Credentials</Eyebrow>
        <SectionTitle className="mt-3">Ready for your vendor pack.</SectionTitle>
        <div className="mt-8 flex flex-wrap gap-2">
          {credentials.map((c) => (
            <div
              key={c}
              className="inline-flex items-center gap-2 border border-line bg-mist px-4 py-2.5 text-sm font-semibold text-navy"
            >
              <Boxes className="size-4 text-accent-blue" strokeWidth={1.75} />
              {c}
            </div>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Need a rate on air, sea or road today?"
        copy="Send weight, dimensions and destination — our desk returns an all-in GBP quote the same working day, with the mode that actually fits."
      >
        <Link to="/contact" className={btnCta}>
          Get a same-day quote
          <ArrowRight className="size-4" />
        </Link>
      </CtaBand>

      <Section tone="mist">
        <Eyebrow>What clients say</Eyebrow>
        <SectionTitle className="mt-3">Trusted on the tightest deadlines.</SectionTitle>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex flex-col border-t border-line pt-5">
              <blockquote className="flex-1 text-sm leading-relaxed text-ink">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5">
                <div className="font-display text-sm font-semibold text-navy">{t.name}</div>
                <div className="mt-0.5 text-xs text-subtle">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <SectionTitle>Questions, answered</SectionTitle>
        <div className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2">
          {faqs.map((f) => (
            <div key={f.q} className="border-t border-line pt-5">
              <h3 className="font-display text-base font-bold text-navy">{f.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-subtle">{f.a}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Tell us the cargo. We will pick the mode."
        copy="Send us the weight, dimensions and destination. Our desk quotes the same working day — air, sea, road or a combination, booked on one account."
      >
        <Link to="/contact" className={btnCta}>
          Request a quote
        </Link>
        <Link to="/tracking" className={btnOutlineOnDark}>
          Track a shipment
        </Link>
      </CtaBand>
    </div>
  );
}
