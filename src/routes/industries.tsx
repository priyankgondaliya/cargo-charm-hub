import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/SiteShell";
import { caseStudies, capabilities, industries, testimonials } from "@/data/site";
import warehouse from "@/assets/warehouse.jpg";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Fly For — Aerospace, Pharma, Retail | Velora Air" },
      {
        name: "description",
        content:
          "Airfreight and courier solutions for aerospace AOG, pharmaceuticals, e-commerce, perishables, automotive and exhibition cargo across the UK and worldwide.",
      },
      { property: "og:title", content: "Industries — Velora Air" },
      {
        property: "og:description",
        content:
          "Sector-specific airfreight for AOG spares, cold-chain pharma, perishables, e-commerce and project cargo.",
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
      "Peak capacity reserved before Black Friday",
      "Store and DC timed deliveries",
      "Returns and reverse logistics",
      "Sample and lookbook hand-carry",
    ],
  },
];

function Industries() {
  return (
    <div>
      <PageHero
        eyebrow="Industries"
        title="Cargo with a deadline attached."
        copy="Different sectors fail in different ways. A grounded aircraft, a broken cold chain and a missed peak week all cost money, so we build the handling around the risk rather than the box."
      />

      <section className="mx-auto max-w-7xl px-6 pt-12">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {industries.map((i) => (
            <div
              key={i.title}
              className="glass rounded-3xl border border-white/60 p-7 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:border-accent-blue/40"
            >
              <div className="font-display text-lg font-semibold text-brand">{i.title}</div>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{i.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pt-16">
        <h2 className="font-display text-3xl font-bold tracking-tight text-brand">
          Sector playbooks
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink/70">
          Pre-agreed handling notes so your first booking already knows the rules of your industry.
        </p>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {playbooks.map((p) => (
            <div key={p.title} className="glass rounded-3xl border border-white/60 p-7 shadow-[var(--shadow-soft)]">
              <div className="font-display text-xl font-bold text-brand">{p.title}</div>
              <ul className="mt-5 space-y-3">
                {p.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-ink/65">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent-blue" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pt-16">
        <div className="glass grid gap-8 rounded-3xl border border-white/60 p-8 shadow-[var(--shadow-soft)] lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue">
              Special handling
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-brand">
              Temperature, hazard class and security, covered.
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {capabilities.map((c) => (
                <div key={c.title} className="rounded-2xl border border-white/70 bg-white/50 p-4">
                  <div className="font-display text-sm font-semibold text-brand">{c.title}</div>
                  <p className="mt-1 text-xs leading-relaxed text-ink/65">{c.copy}</p>
                </div>
              ))}
            </div>
          </div>
          <img
            src={warehouse}
            alt="Bonded warehouse team handling screened air cargo pallets"
            width={1600}
            height={1000}
            loading="lazy"
            className="aspect-[16/10] w-full rounded-2xl border border-white/60 object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pt-16">
        <h2 className="font-display text-3xl font-bold tracking-tight text-brand">
          Outcomes on real flights
        </h2>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {caseStudies.map((c) => (
            <article
              key={c.title}
              className="glass flex flex-col rounded-3xl border border-white/60 p-6 shadow-[var(--shadow-soft)]"
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

      <section className="mx-auto max-w-7xl px-6 pt-16 pb-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="glass flex flex-col rounded-3xl border border-white/60 p-6 shadow-[var(--shadow-soft)]"
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
        <div className="mt-10 text-center">
          <Link
            to="/contact"
            className="inline-block rounded-xl bg-accent-blue px-7 py-3.5 text-sm font-semibold text-mist shadow-[var(--shadow-accent)] transition hover:-translate-y-0.5"
          >
            Discuss your sector
          </Link>
        </div>
      </section>
    </div>
  );
}
