import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import airCargo from "@/assets/air-cargo.jpg";
import courierVan from "@/assets/courier-van.jpg";
import warehouse from "@/assets/warehouse.jpg";
import { PageHero } from "@/components/site/SiteShell";
import {
  Body,
  CtaBand,
  IconBadge,
  Section,
  SectionTitle,
  btnCta,
  cardClass,
} from "@/components/site/primitives";
import { capabilities, serviceLevels, services, steps } from "@/data/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Air, Sea, Road & Local Freight | LogiEdge Consulting" },
      {
        name: "description",
        content:
          "Air freight, FCL and LCL sea freight, UK and European road, same-day local delivery, CDS customs clearance and bonded warehousing from one UK forwarder.",
      },
      { property: "og:title", content: "LogiEdge Consulting Services" },
      {
        property: "og:description",
        content:
          "Air, sea, road and local freight plus customs brokerage and warehousing on one UK account.",
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
  "sea-freight": [
    "FCL 20ft, 40ft and high-cube bookings on major lines",
    "Weekly LCL groupage from a single carton to a shared container",
    "RoRo for vehicles, plant and cargo that will not box",
    "Port-to-port or door-to-door with inland clearance and marine insurance",
  ],
  road: [
    "UK overnight and economy pallet distribution",
    "FTL, LTL and dedicated European groupage",
    "Tail-lift, curtain-side, reefer, low-loader and skeleton",
    "E-commerce fulfilment, timed docks and returns processing",
  ],
  courier: [
    "60-minute collection across London and the M25",
    "Same-day dedicated van nationwide and next-day economy",
    "Onboard courier accompanying high-value cargo",
    "Timed morning delivery with photographic and signed POD",
  ],
  customs: [
    "Import and export declarations filed on CDS at airports and ports",
    "T1 transit, NCTS and GVMS movement references",
    "Inland ETSF clearance to avoid quay rent and ramp storage",
    "Certificates of origin, EUR1, ATA carnets and letters of credit",
  ],
  warehousing: [
    "35,000 sq ft ETSF temporary storage in the Midlands",
    "Pallet racking, pick and pack, kitting and container stuffing",
    "Palletising, shrink-wrapping and airline-ready build-up",
    "Stock reporting and scheduled onward air, sea or road distribution",
  ],
};

const serviceImages: Record<string, { src: string; alt: string }> = {
  "air-freight": {
    src: airCargo,
    alt: "Wide-body cargo aircraft being loaded on the tarmac",
  },
  courier: {
    src: courierVan,
    alt: "Courier loading parcels into a delivery van on a UK street",
  },
  warehousing: {
    src: warehouse,
    alt: "Warehouse team palletising freight for onward distribution",
  },
};

const addons = [
  {
    t: "Cargo insurance",
    c: "All-risk cover for air, sea and road, including marine open cover, with claims handled by a named contact.",
  },
  {
    t: "Packaging & crating",
    c: "Export crates, ISPM-15 timber, on-site packing and cool-chain packaging built to airline and ocean standards.",
  },
  {
    t: "Onboard courier",
    c: "A LogiEdge courier accompanies the bag or case on the passenger flight for maximum control.",
  },
  {
    t: "API & EDI hooks",
    c: "Booking, status and POD events into your WMS or ERP once volumes justify the link.",
  },
];

function Services() {
  return (
    <div>
      <PageHero
        eyebrow="Our services"
        title="Every mode, every document, one accountable team."
        copy="Whether it is a same-day parcel leaving London tonight or a monthly container programme from Felixstowe, the same coordinator books it, clears it and delivers it."
      />

      {services.map((s, i) => {
        const image = serviceImages[s.slug];
        const navy = i % 2 === 1;
        return (
          <Section
            key={s.slug}
            id={s.slug}
            tone={navy ? "navy" : i % 4 === 2 ? "mist" : "white"}
            className={navy ? "navy-grid" : undefined}
          >
            <div
              className={cn(
                "grid items-center gap-10",
                image ? "lg:grid-cols-2" : "lg:grid-cols-[0.9fr_1.1fr]",
              )}
            >
              <div className={image && i % 2 === 1 ? "lg:order-2" : undefined}>
                <IconBadge className={navy ? "bg-white/10 text-amber" : undefined}>
                  <s.icon className="size-5" strokeWidth={1.75} />
                </IconBadge>
                <h2
                  className={cn(
                    "mt-4 font-display text-2xl font-bold tracking-tight md:text-3xl",
                    navy ? "text-white" : "text-navy",
                  )}
                >
                  {s.title}
                </h2>
                <p
                  className={cn(
                    "mt-3 text-base leading-relaxed",
                    navy ? "text-navy-muted" : "text-subtle",
                  )}
                >
                  {s.copy}
                </p>
                <Link to="/contact" className={cn(btnCta, "mt-6")}>
                  Enquire about {s.title.toLowerCase()}
                </Link>
              </div>
              {image ? (
                <img
                  src={image.src}
                  alt={image.alt}
                  width={1600}
                  height={1000}
                  loading="lazy"
                  className="aspect-[16/10] w-full rounded-xl object-cover"
                />
              ) : (
                <ul className="grid gap-3 sm:grid-cols-2">
                  {detail[s.slug]?.map((d) => (
                    <li
                      key={d}
                      className={cn(
                        "flex gap-3 rounded-xl border p-4 text-sm leading-relaxed",
                        navy
                          ? "border-white/10 bg-white/5 text-navy-muted"
                          : "border-line bg-white text-subtle",
                      )}
                    >
                      <Check
                        className={cn(
                          "mt-0.5 size-4 shrink-0",
                          navy ? "text-amber" : "text-success",
                        )}
                      />
                      {d}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {image && (
              <ul className="mt-10 grid gap-3 sm:grid-cols-2">
                {detail[s.slug]?.map((d) => (
                  <li
                    key={d}
                    className={cn(
                      "flex gap-3 rounded-xl border p-4 text-sm leading-relaxed",
                      navy
                        ? "border-white/10 bg-white/5 text-navy-muted"
                        : "border-line bg-white text-subtle",
                    )}
                  >
                    <Check
                      className={cn("mt-0.5 size-4 shrink-0", navy ? "text-amber" : "text-success")}
                    />
                    {d}
                  </li>
                ))}
              </ul>
            )}
          </Section>
        );
      })}

      <Section tone="white">
        <SectionTitle>Service levels</SectionTitle>
        <Body className="mt-3">
          Clear windows and clear prices — upgrade a single booking or set a standing SLA by lane.
        </Body>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
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
        <SectionTitle>Special handling</SectionTitle>
        <div className="mt-8 grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c) => (
            <div key={c.title} className="border-t border-line pt-5">
              <h3 className="font-display text-lg font-bold text-navy">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-subtle">{c.copy}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <SectionTitle>Add-ons</SectionTitle>
        <div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {addons.map((a) => (
            <div key={a.t} className="border-t border-line pt-5">
              <h3 className="font-display text-base font-bold text-navy">{a.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-subtle">{a.c}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="mist">
        <SectionTitle>What happens after you book</SectionTitle>
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

      <CtaBand
        title="Not sure which service fits?"
        copy="Tell us the pieces, weight and deadline — we will recommend sea, air, road or same-day and quote it the same day."
      >
        <Link to="/contact" className={btnCta}>
          Talk to a coordinator
        </Link>
      </CtaBand>
    </div>
  );
}
