import { createFileRoute, Link } from "@tanstack/react-router";
import opsTeam from "@/assets/ops-team.jpg";
import warehouse from "@/assets/warehouse.jpg";
import { PageHero } from "@/components/site/SiteShell";
import { credentials, hubs, leadership, stats } from "@/data/site";

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
  { y: "2009", t: "Founded at Heathrow", c: "LogiEdge opens a two-desk cargo office on Shoreham Road with a single van — air first, but never air only." },
  { y: "2013", t: "IATA & BIFA accredited", c: "Direct airline agreements plus BIFA membership for ocean and overland as the product mix grows." },
  { y: "2017", t: "Birmingham & Manchester", c: "Regional desks open, giving clients airport, road and warehouse coverage on one account." },
  { y: "2020", t: "AEO(F) and in-house brokerage", c: "Customs team brought in-house, filing CDS at airports and the deep-sea ports." },
  { y: "2023", t: "ETSF warehouse & sea desk", c: "35,000 sq ft of inland temporary storage, FCL/LCL programmes and port haulage under the same roof." },
  { y: "2026", t: "140 countries, four modes", c: "Partner network covering air, sea, road and last-mile on every major trade lane worldwide." },
];

const values = [
  { t: "Answer the phone", c: "Every account has a named coordinator, and the ops desk is staffed through the night." },
  { t: "Own the problem", c: "If a flight rolls or an entry queries, we fix it and tell you before you have to ask." },
  { t: "Quote honestly", c: "All-in rates in GBP. No surprise handling, storage or documentation charges on the invoice." },
  { t: "Move carefully", c: "DGR-trained staff, screened cargo, sealed vehicles and a full audit trail on every job." },
];

const facilities = [
  { t: "ETSF bonded warehouse", c: "35,000 sq ft temporary storage with racking, container stuffing and airline build-up." },
  { t: "Port & airport badges", c: "Inventory links into Felixstowe, Southampton, Gateway, Heathrow, BHX and MAN." },
  { t: "Own collection fleet", c: "85 vans plus access to FTL, LTL, reefer and low-loader capacity nationwide." },
  { t: "24/7 control room", c: "Flight, vessel and truck monitoring with exception handling through the night." },
];

function About() {
  return (
    <div>
      <PageHero
        eyebrow="About us"
        title="Seventeen years of putting freight on the right mode."
        copy="We are an independent freight forwarder based at Heathrow, with desks at Birmingham and Manchester and working relationships at the UK's deep-sea ports. Small enough to know your shipment by name, accredited enough to handle air, sea, road and local delivery on one file."
      />

      <section className="mx-auto max-w-7xl px-6 pt-12">
        <div className="glass grid gap-8 rounded-3xl border border-white/60 p-8 shadow-[var(--shadow-soft)] lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-brand">
              One team from booking to proof of delivery.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              Most forwarders hand your cargo between three companies before it reaches a gateway.
              We run our own collection fleet, our own warehouse and screening, and our own customs
              brokerage — so when a vessel rolls or a truck misses a slot, one team already has the
              file open.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              That structure is why we can commit to a 60-minute London collection, why our entries
              go onto CDS the same hour, and why aerospace, retail import and manufacturing clients
              keep us on standby around the clock.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl font-bold text-brand">{s.v}</div>
                  <div className="mt-1 text-xs font-medium text-ink/60">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <img
            src={opsTeam}
            alt="LogiEdge Consulting operations team monitoring air, sea and road shipments"
            width={1600}
            height={1000}
            loading="lazy"
            className="aspect-[16/10] w-full rounded-2xl border border-white/60 object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pt-16">
        <h2 className="font-display text-3xl font-bold tracking-tight text-brand">Our story</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {timeline.map((t) => (
            <div
              key={t.y}
              className="glass rounded-3xl border border-white/60 p-7 shadow-[var(--shadow-soft)] transition hover:-translate-y-1"
            >
              <div className="font-display text-sm font-semibold text-accent-blue">{t.y}</div>
              <div className="mt-2 font-display text-lg font-semibold text-brand">{t.t}</div>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{t.c}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pt-16">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue">
          UK network
        </span>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand">
          Where we operate
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {hubs.map((h) => (
            <div key={h.code} className="glass rounded-3xl border border-white/60 p-7 shadow-[var(--shadow-soft)]">
              <div className="flex items-center justify-between">
                <div className="font-display text-xl font-bold text-brand">{h.name}</div>
                <span className="rounded-full bg-accent-blue/10 px-3 py-1 text-xs font-semibold text-accent-blue">
                  {h.code}
                </span>
              </div>
              <p className="mt-3 text-sm font-semibold text-ink/80">{h.focus}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{h.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pt-16">
        <div className="glass grid gap-8 rounded-3xl border border-white/60 p-8 shadow-[var(--shadow-soft)] lg:grid-cols-2 lg:items-center">
          <img
            src={warehouse}
            alt="Bonded warehouse with staff preparing freight for air, sea and road"
            width={1600}
            height={1000}
            loading="lazy"
            className="aspect-[16/10] w-full rounded-2xl border border-white/60 object-cover"
          />
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue">
              How we work
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-brand">
              Four things we will not compromise on.
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {values.map((v) => (
                <div key={v.t} className="rounded-2xl border border-white/70 bg-white/50 p-5">
                  <div className="font-display text-base font-semibold text-brand">{v.t}</div>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">{v.c}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pt-16">
        <h2 className="font-display text-3xl font-bold tracking-tight text-brand">Facilities</h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink/70">
          Kit that sits under the same roof as the people who book your freight — so hand-offs stay
          short.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map((f) => (
            <div key={f.t} className="glass rounded-3xl border border-white/60 p-6 shadow-[var(--shadow-soft)]">
              <div className="font-display text-base font-semibold text-brand">{f.t}</div>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{f.c}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pt-16">
        <h2 className="font-display text-3xl font-bold tracking-tight text-brand">Leadership</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {leadership.map((p) => (
            <div key={p.name} className="glass rounded-3xl border border-white/60 p-7 shadow-[var(--shadow-soft)]">
              <div className="font-display text-lg font-semibold text-brand">{p.name}</div>
              <div className="mt-1 text-sm font-semibold text-accent-blue">{p.role}</div>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">{p.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pt-16 pb-8">
        <div className="glass rounded-3xl border border-white/60 p-8 text-center shadow-[var(--shadow-soft)]">
          <h2 className="font-display text-2xl font-bold tracking-tight text-brand">
            Accreditations
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm font-semibold text-ink/70">
            {credentials.map((a) => (
              <span key={a} className="rounded-full border border-white/70 bg-white/60 px-5 py-2">
                {a}
              </span>
            ))}
          </div>
          <Link
            to="/contact"
            className="mt-8 inline-block rounded-xl bg-accent-blue px-7 py-3.5 text-sm font-semibold text-mist shadow-[var(--shadow-accent)] transition hover:-translate-y-0.5"
          >
            Talk to our team
          </Link>
        </div>
      </section>
    </div>
  );
}
