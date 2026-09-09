import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/SiteShell";
import {
  Body,
  CtaBand,
  Eyebrow,
  Section,
  SectionTitle,
  btnCta,
} from "@/components/site/primitives";
import { caseStudies, capabilities, industries, testimonials } from "@/data/site";
import warehouse from "@/assets/warehouse.jpg";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve — Aerospace, Pharma, Retail | LogiEdge Consulting" },
      {
        name: "description",
        content:
          "Air, sea, road and local logistics for aerospace, pharmaceuticals, e-commerce, perishables, automotive, manufacturing and project cargo across the UK and worldwide.",
      },
      { property: "og:title", content: "Industries — LogiEdge Consulting" },
      {
        property: "og:description",
        content:
          "Sector-specific freight for AOG spares, cold-chain pharma, ocean imports, e-commerce and project cargo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Industries,
});

const playbooks = [
  {
    title: "Aerospace playbook",
    points: [
      "Next-flight-out and hand-carry for AOG",
      "DGR acceptance for batteries and chemicals",
      "Stand-side delivery with photo POD",
      "Night freighter tendering when passenger belly is full",
    ],
  },
  {
    title: "Pharma playbook",
    points: [
      "Validated packaging and data loggers",
      "+2°C to +25°C lane options",
      "GDP-minded handling and audit trails",
      "Named coordinator for clinical trial kits",
    ],
  },
  {
    title: "Retail playbook",
    points: [
      "Peak air capacity reserved before Black Friday",
      "Weekly ocean replenishment from the Far East",
      "Store and DC timed deliveries by road",
      "Returns, reverse logistics and sample hand-carry",
    ],
  },
  {
    title: "Import & ocean playbook",
    points: [
      "Weekly FCL and LCL from the Far East, India and Africa",
      "Inland ETSF clearance to avoid quay rent",
      "Reefer and out-of-gauge surveys before the box is booked",
      "Store and DC feeds by road once the container is destuffed",
    ],
  },
];

function Industries() {
  return (
    <div>
      <PageHero
        eyebrow="Industries"
        title="Cargo with a deadline attached."
        copy="Different sectors fail in different ways. A grounded aircraft, a box sitting on the quay and a missed production window all cost money, so we build the handling around the risk rather than the box."
      />

      <Section tone="white">
        <div className="grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          {industries.map((i) => (
            <div key={i.title} className="border-t border-line pt-5">
              <h2 className="font-display text-lg font-bold text-navy">{i.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-subtle">{i.copy}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="mist">
        <SectionTitle>Sector playbooks</SectionTitle>
        <Body className="mt-3">
          Pre-agreed handling notes so your first booking already knows the rules of your industry.
        </Body>
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {playbooks.map((p) => (
            <div key={p.title}>
              <h3 className="font-display text-xl font-bold text-navy">{p.title}</h3>
              <ul className="mt-5 space-y-3">
                {p.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-subtle">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent-blue" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="navy" className="navy-grid">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow light>Special handling</Eyebrow>
            <SectionTitle light className="mt-4">
              Temperature, hazard class and security, covered.
            </SectionTitle>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {capabilities.map((c) => (
                <div key={c.title} className="border-t border-white/10 pt-4">
                  <h3 className="font-display text-sm font-bold text-white">{c.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-navy-muted">{c.copy}</p>
                </div>
              ))}
            </div>
          </div>
          <img
            src={warehouse}
            alt="Warehouse team handling freight for air, sea and road distribution"
            width={1600}
            height={1000}
            loading="lazy"
            className="aspect-[16/10] w-full rounded-xl object-cover"
          />
        </div>
      </Section>

      <Section tone="white">
        <SectionTitle>Outcomes on real lanes</SectionTitle>
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

      <Section tone="mist">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
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

      <CtaBand
        title="Discuss your sector"
        copy="We build the handling around the risk rather than the box."
      >
        <Link to="/contact" className={btnCta}>
          Discuss your sector
        </Link>
      </CtaBand>
    </div>
  );
}
