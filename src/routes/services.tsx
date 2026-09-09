import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageHero } from "@/components/site/SiteShell";
import { services, steps } from "@/data/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Air Freight, Courier & Customs Clearance | Velora Air" },
      {
        name: "description",
        content:
          "Express air freight, same-day courier, CDS customs clearance, ETSF bonded warehousing, sea and road freight and e-commerce fulfilment from UK airports.",
      },
      { property: "og:title", content: "Velora Air Services" },
      {
        property: "og:description",
        content:
          "Air freight, couriers, customs brokerage, bonded warehousing, sea and road freight on one UK account.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Services,
});

const detail: Record<string, string[]> = {
  "air-freight": [
    "Next-flight-out and hand-carry for AOG and critical spares",
    "Consolidated economy air on daily departures",
    "Full and part charter, including out-of-gauge loads",
    "Airline build-up, screening and dangerous goods acceptance",
  ],
  courier: [
    "60-minute collection across London and the M25",
    "Same-day dedicated van nationwide",
    "Onboard courier accompanying high-value cargo",
    "Timed morning delivery with photographic and signed POD",
  ],
  customs: [
    "Import and export declarations filed on CDS",
    "T1 transit, NCTS and GVMS movement references",
    "Deferment, postponed VAT and inward processing relief",
    "Certificates of origin, EUR1 and ATA carnet handling",
  ],
  warehousing: [
    "35,000 sq ft ETSF temporary storage near Heathrow",
    "Pallet racking, pick and pack and kitting",
    "Palletising, shrink-wrapping and airline-ready build-up",
    "Stock reporting and scheduled onward distribution",
  ],
  "sea-freight": [
    "FCL 20ft, 40ft and high cube bookings",
    "Weekly LCL groupage from a single carton",
    "Port-to-port or full door-to-door with clearance",
    "Marine insurance arranged on request",
  ],
  road: [
    "UK overnight and economy pallet distribution",
    "European groupage and dedicated full loads",
    "E-commerce fulfilment with order-level scanning",
    "Returns processing and inventory reconciliation",
  ],
};

function Services() {
  return (
    <div>
      <PageHero
        eyebrow="Our services"
        title="Every mode, every document, one accountable team."
        copy="Whether it is a single envelope leaving Heathrow tonight or a monthly container programme, the same coordinator books it, clears it and delivers it."
      />

      <section className="mx-auto max-w-7xl space-y-6 px-6 pt-12">
        {services.map((s, i) => (
          <div
            key={s.slug}
            id={s.slug}
            className="glass grid gap-8 rounded-3xl border border-white/60 p-8 shadow-[var(--shadow-soft)] lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
          >
            <div className={i % 2 === 1 ? "lg:order-2" : undefined}>
              <div className="grid size-12 place-items-center rounded-xl bg-accent-blue/10">
                <s.icon className="size-6 text-accent-blue" strokeWidth={1.75} />
              </div>
              <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-brand md:text-3xl">
                {s.title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-ink/70">{s.copy}</p>
              <Link
                to="/contact"
                className="mt-6 inline-block rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-mist transition hover:-translate-y-0.5"
              >
                Enquire about {s.title.toLowerCase()}
              </Link>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {detail[s.slug]?.map((d) => (
                <li
                  key={d}
                  className="flex gap-3 rounded-2xl border border-white/70 bg-white/50 p-4 text-sm leading-relaxed text-ink/70"
                >
                  <Check className="mt-0.5 size-4 shrink-0 text-mint" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-6 pt-16">
        <h2 className="font-display text-3xl font-bold tracking-tight text-brand">
          What happens after you book
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="glass rounded-3xl border border-white/60 p-7">
              <div className="grid size-10 place-items-center rounded-full border border-accent-blue/40 font-display text-sm font-semibold text-accent-blue">
                {s.n}
              </div>
              <div className="mt-4 font-display text-lg font-semibold text-brand">{s.t}</div>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{s.c}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
