import { createFileRoute, Link } from "@tanstack/react-router";
import warehouse from "@/assets/warehouse.jpg";
import { PageHero } from "@/components/site/SiteShell";
import {
  Body,
  CtaBand,
  Eyebrow,
  Section,
  SectionTitle,
  btnCta,
  cardClass,
} from "@/components/site/primitives";
import { credentials, hubs, leadership, stats } from "@/data/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About LogiEdge Consulting — UK Air, Sea & Road Forwarder" },
      {
        name: "description",
        content:
          "LogiEdge Consulting has forwarded cargo from the UK since 2009. IATA and BIFA members, AEO(F) compliant, with air, sea, road, local delivery and an ETSF bonded warehouse.",
      },
      { property: "og:title", content: "About LogiEdge Consulting" },
      {
        property: "og:description",
        content:
          "An independent UK freight forwarder for air, sea, road and local delivery, with in-house customs and a 24/7 operations desk.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const timeline = [
  {
    y: "2009",
    t: "Founded at Heathrow",
    c: "LogiEdge opens a two-desk cargo office on Shoreham Road with a single van — air first, but never air only.",
  },
  {
    y: "2013",
    t: "IATA & BIFA accredited",
    c: "Direct airline agreements plus BIFA membership for ocean and overland as the product mix grows.",
  },
  {
    y: "2017",
    t: "Birmingham & Manchester",
    c: "Regional desks open, giving clients airport, road and warehouse coverage on one account.",
  },
  {
    y: "2020",
    t: "AEO(F) and in-house brokerage",
    c: "Customs team brought in-house, filing CDS at airports and the deep-sea ports.",
  },
  {
    y: "2023",
    t: "ETSF warehouse & sea desk",
    c: "35,000 sq ft of inland temporary storage, FCL/LCL programmes and port haulage under the same roof.",
  },
  {
    y: "2026",
    t: "140 countries, four modes",
    c: "Partner network covering air, sea, road and last-mile on every major trade lane worldwide.",
  },
];

const values = [
  {
    t: "Answer the phone",
    c: "Every account has a named coordinator, and the ops desk is staffed through the night.",
  },
  {
    t: "Own the problem",
    c: "If a flight rolls or an entry queries, we fix it and tell you before you have to ask.",
  },
  {
    t: "Quote honestly",
    c: "All-in rates in GBP. No surprise handling, storage or documentation charges on the invoice.",
  },
  {
    t: "Move carefully",
    c: "DGR-trained staff, screened cargo, sealed vehicles and a full audit trail on every job.",
  },
];

const facilities = [
  {
    t: "ETSF bonded warehouse",
    c: "35,000 sq ft temporary storage with racking, container stuffing and airline build-up.",
  },
  {
    t: "Port & airport badges",
    c: "Inventory links into Felixstowe, Southampton, Gateway, Heathrow, BHX and MAN.",
  },
  {
    t: "Own collection fleet",
    c: "85 vans plus access to FTL, LTL, reefer and low-loader capacity nationwide.",
  },
  {
    t: "24/7 control room",
    c: "Flight, vessel and truck monitoring with exception handling through the night.",
  },
];

function About() {
  return (
    <div>
      <PageHero
        eyebrow="About us"
        title="Seventeen years of putting freight on the right mode."
        copy="We are an independent freight forwarder based at Heathrow, with desks at Birmingham and Manchester and working relationships at the UK's deep-sea ports. Small enough to know your shipment by name, accredited enough to handle air, sea, road and local delivery on one file."
      />

      <Section tone="white">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionTitle>One team from booking to proof of delivery.</SectionTitle>
            <Body className="mt-4">
              Most forwarders hand your cargo between three companies before it reaches a gateway.
              We run our own collection fleet, our own warehouse and screening, and our own customs
              brokerage — so when a vessel rolls or a truck misses a slot, one team already has the
              file open.
            </Body>
            <Body className="mt-4">
              That structure is why we can commit to a 60-minute London collection, why our entries
              go onto CDS the same hour, and why aerospace, retail import and manufacturing clients
              keep us on standby around the clock.
            </Body>
            <div className="mt-8 grid grid-cols-2 gap-6 border-t border-line pt-6 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.l}>
                  <div className="font-display text-2xl font-extrabold text-navy sm:text-3xl">
                    {s.v}
                  </div>
                  <div className="mt-1 text-xs font-medium text-subtle">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <img
            src={warehouse}
            alt="Bonded warehouse with staff preparing freight for air, sea and road"
            width={1600}
            height={1000}
            loading="lazy"
            className="aspect-[16/10] w-full rounded-xl object-cover"
          />
        </div>
      </Section>

      <Section tone="mist">
        <SectionTitle>Our story</SectionTitle>
        <ol className="relative mt-10 space-y-0 border-l border-line pl-8">
          {timeline.map((t) => (
            <li key={t.y} className="relative pb-10 last:pb-0">
              <span className="absolute -left-[37px] top-1.5 size-2.5 rounded-full bg-accent-blue" />
              <div className="text-sm font-bold text-accent-blue">{t.y}</div>
              <h3 className="mt-1 font-display text-lg font-bold text-navy">{t.t}</h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-subtle">{t.c}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="white">
        <Eyebrow>UK network</Eyebrow>
        <SectionTitle className="mt-3">Where we operate</SectionTitle>
        <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {hubs.map((h) => (
            <div key={h.code} className="bg-white p-7">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl font-bold text-navy">{h.name}</h3>
                <span className="text-xs font-bold tracking-wider text-accent-blue">{h.code}</span>
              </div>
              <p className="mt-3 text-sm font-semibold text-ink">{h.focus}</p>
              <p className="mt-2 text-sm leading-relaxed text-subtle">{h.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="navy" className="navy-grid">
        <Eyebrow light>How we work</Eyebrow>
        <SectionTitle light className="mt-4">
          Four things we will not compromise on.
        </SectionTitle>
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {values.map((v, i) => (
            <div key={v.t} className={cn("border-t border-white/10 pt-5", i >= 2 && "sm:border-t")}>
              <h3 className="font-display text-lg font-bold text-white">{v.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-muted">{v.c}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="mist">
        <SectionTitle>Facilities</SectionTitle>
        <Body className="mt-3">
          Kit that sits under the same roof as the people who book your freight — so hand-offs stay
          short.
        </Body>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map((f) => (
            <div key={f.t} className="border-t border-line pt-5">
              <h3 className="font-display text-base font-bold text-navy">{f.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-subtle">{f.c}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <SectionTitle>Leadership</SectionTitle>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {leadership.map((p) => (
            <div key={p.name} className={cardClass}>
              <h3 className="font-display text-lg font-bold text-navy">{p.name}</h3>
              <div className="mt-1 text-sm font-semibold text-accent-blue">{p.role}</div>
              <p className="mt-3 text-sm leading-relaxed text-subtle">{p.copy}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="mist" innerClassName="py-14 md:py-16">
        <SectionTitle>Accreditations</SectionTitle>
        <div className="mt-6 flex flex-wrap gap-2">
          {credentials.map((a) => (
            <span
              key={a}
              className="border border-line bg-white px-4 py-2 text-sm font-semibold text-navy"
            >
              {a}
            </span>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Talk to our team"
        copy="Every account has a named coordinator, and the ops desk is staffed through the night."
      >
        <Link to="/contact" className={btnCta}>
          Talk to our team
        </Link>
      </CtaBand>
    </div>
  );
}
