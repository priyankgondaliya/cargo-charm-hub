import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Boxes,
  Building2,
  ClipboardCheck,
  Clock3,
  FileCheck2,
  Globe2,
  Headset,
  Leaf,
  MapPin,
  Menu,
  Package,
  PackageCheck,
  Plane,
  Radar,
  Route as RouteIcon,
  ScanLine,
  ShieldCheck,
  Ship,
  ThermometerSnowflake,
  Truck,
  Users,
  Warehouse,
  X,
} from "lucide-react";
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

const capabilities = [
  {
    icon: Radar,
    title: "Live control tower",
    copy: "GPS, checkpoint scans and shareable ETAs on every load — visible to your team in one view.",
  },
  {
    icon: FileCheck2,
    title: "In-house customs",
    copy: "UK and EU clearance, bonded storage and deferred duty, handled by our own brokers.",
  },
  {
    icon: ThermometerSnowflake,
    title: "Temperature control",
    copy: "Validated cold-chain lanes with continuous logging for pharma, food and biologics.",
  },
  {
    icon: Warehouse,
    title: "Warehousing & 3PL",
    copy: "Pick, pack, bond and dispatch from fifteen UK sites wired into the same desk.",
  },
  {
    icon: ShieldCheck,
    title: "Insured end to end",
    copy: "Cargo cover built into the rate, with claims handled by a named Velora contact.",
  },
  {
    icon: Clock3,
    title: "Same-day quoting",
    copy: "Lane, pallets and window in — a firm GBP rate out before close of business.",
  },
];

const reasons = [
  {
    title: "One desk, every mode",
    copy: "Air, ocean, road and warehouse under a single account team — no hand-offs between carriers.",
  },
  {
    title: "People behind the lane",
    copy: "A named planner owns your freight from booking to POD, with a 24/7 control room behind them.",
  },
  {
    title: "Built for UK trade",
    copy: "Fifteen depots, Dover-ready clearance and Europe-facing lanes tuned for post-Brexit reality.",
  },
];

const corridors = [
  { from: "Midlands", to: "Benelux", note: "Daily groupage & FTL" },
  { from: "North West", to: "Ireland", note: "Ro-Ro & ferry priority" },
  { from: "South East", to: "Northern Europe", note: "Same-day trunk" },
  { from: "Scotland", to: "Central belt hubs", note: "Overnight trunking" },
  { from: "UK air gateways", to: "Asia & Middle East", note: "Next-day uplift" },
  { from: "UK ports", to: "Far East & Med", note: "FCL & LCL schedules" },
];

const industries = [
  {
    title: "Retail & e-commerce",
    copy: "Peak-ready inbound and store replenishment with tight delivery windows.",
  },
  {
    title: "Automotive parts",
    copy: "Line-side and aftermarket feeds with sequenced, time-critical collections.",
  },
  {
    title: "Pharma & cold chain",
    copy: "GDP-minded handling, continuous logging and excursion alerts.",
  },
  {
    title: "Food & beverage",
    copy: "Chilled and ambient lanes with hygiene-conscious equipment and crews.",
  },
  {
    title: "Electronics",
    copy: "High-value freight with sealed trailers, photo PODs and insured cover.",
  },
  {
    title: "Industrial & machinery",
    copy: "Oversize, heavy and project cargo with route surveys when needed.",
  },
];

const warehouseServices = [
  {
    icon: Package,
    title: "Pick & pack",
    copy: "B2B and DTC fulfilment with batch control, kit builds and same-day dispatch cut-offs.",
  },
  {
    icon: Building2,
    title: "Bonded storage",
    copy: "Duty-suspended space near the ports — clear when you sell, not when you land.",
  },
  {
    icon: ScanLine,
    title: "Cross-dock",
    copy: "Inbound to outbound in hours, not days — ideal for retail replenishment peaks.",
  },
  {
    icon: PackageCheck,
    title: "Returns & reverse",
    copy: "Inspect, restock or scrap with a full audit trail back into your WMS.",
  },
];

const platformFeatures = [
  {
    icon: Radar,
    title: "Shipment timeline",
    copy: "Every scan, exception and ETA in one shareable view for ops and your customers.",
  },
  {
    icon: BarChart3,
    title: "Lane analytics",
    copy: "On-time scores, dwell times and cost-per-pallet by corridor — exported for finance.",
  },
  {
    icon: Headset,
    title: "Desk chat & alerts",
    copy: "Talk to the planner who owns the load. SMS and email when a window slips.",
  },
  {
    icon: ClipboardCheck,
    title: "Documents hub",
    copy: "CMR, POD, customs entries and insurance certificates filed against the booking.",
  },
];

const depots = [
  { city: "London Gateway", focus: "South East trunk & bonded" },
  { city: "Birmingham", focus: "Midlands hub & cross-dock" },
  { city: "Manchester", focus: "North West & Ireland Ro-Ro" },
  { city: "Leeds", focus: "Yorkshire groupage" },
  { city: "Glasgow", focus: "Scotland overnight" },
  { city: "Bristol", focus: "South West & Wales" },
  { city: "Felixstowe", focus: "Deep-sea ocean gate" },
  { city: "Dover", focus: "EU short-sea clearance" },
];

const caseStudies = [
  {
    sector: "Retail",
    title: "Peak season without the panic",
    result: "34% faster store replenishment",
    copy: "A national fashion brand consolidated three carriers into Velora for UK store feeds. Live ETAs cut missed delivery slots during Black Friday week.",
  },
  {
    sector: "Automotive",
    title: "Line-side that never goes dark",
    result: "99.2% sequenced on-time",
    copy: "Tier-one parts moved overnight from the Midlands into German plants with sealed trailers, photo PODs and a dedicated night planner.",
  },
  {
    sector: "Life sciences",
    title: "Cold chain with an audit trail",
    result: "Zero excursions in 18 months",
    copy: "Validated lanes, continuous logging and GDP-minded handling for a biologics shipper moving between UK labs and EU clinical sites.",
  },
];

const serviceLevels = [
  {
    name: "Standard",
    window: "2–4 working days",
    points: ["Scheduled trunking", "Live GPS tracking", "Digital POD"],
  },
  {
    name: "Express",
    window: "Next working day",
    points: ["Priority collection slot", "Dedicated planner", "SMS ETA alerts"],
  },
  {
    name: "Critical",
    window: "Same day / timed",
    points: ["Solo driver option", "Hourly status updates", "Escalation hotline"],
  },
];

const onboarding = [
  {
    n: "01",
    t: "Share your lanes",
    c: "Volumes, origins, destinations and any temperature or security needs.",
  },
  {
    n: "02",
    t: "Agree the playbook",
    c: "SLAs, booking cut-offs, contacts and how exceptions get escalated.",
  },
  {
    n: "03",
    t: "Connect the tools",
    c: "Portal access, EDI or API hooks, and branded tracking for your customers.",
  },
  {
    n: "04",
    t: "Go live",
    c: "First loads with a named account team — reviewed after thirty days.",
  },
];

const insights = [
  {
    tag: "Guide",
    title: "Post-Brexit customs checklist for UK exporters",
    copy: "The documents, timings and bonded options that keep Dover clearances moving.",
  },
  {
    tag: "Briefing",
    title: "When short-sea beats air on Europe lanes",
    copy: "Cost, carbon and clock trade-offs for Midland manufacturers shipping into Benelux.",
  },
  {
    tag: "Playbook",
    title: "Building a cold-chain POD your auditors trust",
    copy: "Logging, seals and hand-off photos that survive a GDP inspection.",
  },
];

const testimonials = [
  {
    quote:
      "Velora cut our Europe-bound transit times by two days and the live tracking ended the 'where is my pallet' phone calls.",
    name: "Sarah Whitfield",
    role: "Supply Chain Lead, Norbrook Retail",
  },
  {
    quote:
      "Rates land the same day, the driver turns up in the slot, and the POD is in my inbox before I've finished lunch.",
    name: "Daniel Okafor",
    role: "Operations Manager, Atlas Components",
  },
  {
    quote:
      "Cold-chain across three countries with zero temperature excursions in 18 months. The audit trail is impeccable.",
    name: "Dr. Priya Menon",
    role: "Head of Logistics, HelixPharma",
  },
  {
    quote:
      "We onboarded in under a fortnight. Portal, EDI and a planner who already knew our peak calendar — rare for a carrier this size.",
    name: "James Corbett",
    role: "Logistics Director, Meridian Foods",
  },
];

const faqs = [
  {
    q: "How fast do I get a quote?",
    a: "The same working day. Send the lane, pallet count and date window and our desk returns a rate in GBP with everything included.",
  },
  {
    q: "Can I track my shipment live?",
    a: "Yes — every load carries GPS with checkpoint scans, and you get a shareable tracking link the moment the vehicle leaves origin.",
  },
  {
    q: "Do you handle customs?",
    a: "End to end. Our in-house brokers clear UK and EU customs, including bonded storage and deferred duty accounts.",
  },
  {
    q: "What size shipments do you take?",
    a: "From a single pallet to full truckloads, FCL and LCL containers, and chartered air freight for urgent lanes.",
  },
  {
    q: "Do you offer warehousing?",
    a: "Yes. Short- and long-term storage, bonded space, pick-and-pack and cross-dock across our UK depot network.",
  },
  {
    q: "How do claims work?",
    a: "Cargo insurance sits in the rate. Open a claim with your account contact and we manage it through to settlement.",
  },
  {
    q: "Can we integrate with our WMS or ERP?",
    a: "Most clients start on the portal. EDI and REST API hooks are available for bookings, status events and PODs.",
  },
  {
    q: "How long does onboarding take?",
    a: "Typical go-live is one to two weeks for standard road lanes — faster if you already have lane data and booking contacts ready.",
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
  "Edinburgh → Lyon",
  "Felixstowe → Singapore",
];

const credentials = [
  "AEO certified",
  "ISO 9001",
  "GDP aligned cold chain",
  "FORS Bronze fleet",
  "RHA member",
  "UK bonded warehouse",
];

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#solutions", label: "Solutions" },
  { href: "#network", label: "Network" },
  { href: "#cases", label: "Results" },
  { href: "#industries", label: "Industries" },
  { href: "#faq", label: "FAQ" },
  { href: "#quote", label: "Contact" },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="relative min-h-screen w-full bg-mist">
      {/* Ambient layer keeps overflow clipped so sticky nav still works */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
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

      {/* sticky nav — works on desktop & mobile */}
      <header className="sticky top-0 z-50 mx-auto max-w-7xl px-4 pt-4 md:top-4 md:px-6 md:pt-6">
        <nav className="glass flex items-center justify-between rounded-2xl border border-white/60 px-4 py-3 shadow-[var(--shadow-soft)] md:px-6 md:py-4">
          <a href="#" className="flex items-center gap-3">
            <div className="grid size-10 place-items-center rounded-xl bg-brand font-display text-lg font-bold text-mist">
              V
            </div>
            <span className="font-display text-lg font-semibold tracking-tight text-brand">Velora</span>
          </a>
          <div className="hidden items-center gap-6 text-sm font-medium text-ink/70 lg:flex xl:gap-8">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="transition hover:text-accent-blue">
                {l.label}
              </a>
            ))}
          </div>
          <a
            href="#quote"
            className="hidden rounded-xl bg-accent-blue px-5 py-2.5 text-sm font-semibold text-mist shadow-[var(--shadow-accent)] transition hover:-translate-y-0.5 md:inline-block"
          >
            Get a quote
          </a>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-xl border border-white/60 text-brand transition hover:bg-white/60 lg:hidden"
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>

        {menuOpen && (
          <div className="glass mt-3 flex flex-col gap-1 rounded-2xl border border-white/60 p-3 shadow-[var(--shadow-soft)] lg:hidden">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-ink/80 transition hover:bg-white/60 hover:text-accent-blue"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#quote"
              onClick={() => setMenuOpen(false)}
              className="mt-1 rounded-xl bg-accent-blue px-4 py-3 text-center text-sm font-semibold text-mist shadow-[var(--shadow-accent)]"
            >
              Get a quote
            </a>
          </div>
        )}
      </header>

      <main className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-14">
        {/* hero */}
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
              <span key={i} className="px-8 text-sm font-medium tracking-wide text-ink/55">
                {lane}
              </span>
            ))}
          </div>
        </div>

        {/* about */}
        <section id="about" className="mt-24">
          <div className="glass grid gap-10 rounded-3xl border border-white/60 p-8 shadow-[var(--shadow-soft)] lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:p-12">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue">
                About Velora
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-brand md:text-4xl">
                A British freight partner built around the load, not the mode.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/70">
                We started as a regional haulier and grew into a full air, ocean and 3PL network —
                without losing the habit of answering the phone. Today Velora moves freight for
                manufacturers, retailers and life-science teams who need one accountable desk from
                collection to proof of delivery.
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/70">
                Every booking sits with a named planner. Every exception has a person behind it.
                That is how we keep 98.6% of loads on time across the UK and into Europe.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {reasons.map((r) => (
                <div
                  key={r.title}
                  className="rounded-2xl border border-white/70 bg-white/50 p-6 transition hover:bg-white/70"
                >
                  <div className="font-display text-lg font-semibold text-brand">{r.title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">{r.copy}</p>
                </div>
              ))}
              <div className="rounded-2xl border border-accent-blue/30 bg-accent-blue/10 p-6 sm:col-span-2">
                <div className="flex items-center gap-3">
                  <Globe2 className="size-5 text-accent-blue" strokeWidth={1.75} />
                  <div className="font-display text-lg font-semibold text-brand">
                    140 countries, one contract
                  </div>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">
                  Domestic trunking and international uplift under the same SLA — so your finance
                  team sees one invoice and your ops team sees one status.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* services */}
        <section id="solutions" className="mt-24">
          <div className="glass rounded-3xl border border-white/60 p-8 shadow-[var(--shadow-soft)] lg:p-12">
            <div className="flex items-end justify-between gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue">
                  Solutions
                </span>
                <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-brand md:text-4xl">
                  Modes we move for you
                </h2>
              </div>
              <span className="hidden text-sm text-ink/50 sm:block">Air · Sea · Road · Warehousing</span>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
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

        {/* capabilities */}
        <section id="capabilities" className="mt-24">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue">
              Capabilities
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-brand md:text-4xl">
              Everything around the freight, covered.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink/70">
              Visibility, compliance and handling depth that sit alongside the move — so your team
              spends less time chasing status and more time running the business.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c) => (
              <div
                key={c.title}
                className="glass rounded-3xl border border-white/60 p-6 shadow-[var(--shadow-soft)] transition hover:-translate-y-1"
              >
                <div className="grid size-12 place-items-center rounded-xl bg-accent-blue/10">
                  <c.icon className="size-6 text-accent-blue" strokeWidth={1.75} />
                </div>
                <div className="mt-4 font-display text-lg font-semibold text-brand">{c.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{c.copy}</p>
              </div>
            ))}
          </div>
        </section>

        {/* warehouse & 3PL */}
        <section id="warehousing" className="mt-24">
          <div className="glass rounded-3xl border border-white/60 p-8 shadow-[var(--shadow-soft)] lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-end">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue">
                  Warehousing &amp; 3PL
                </span>
                <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-brand md:text-4xl">
                  Storage that feeds the same lanes.
                </h2>
              </div>
              <p className="max-w-xl text-base leading-relaxed text-ink/70">
                Inventory, fulfilment and outbound freight under one desk — so stock does not sit
                waiting for a different carrier to collect it.
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {warehouseServices.map((w) => (
                <div
                  key={w.title}
                  className="rounded-2xl border border-white/70 bg-white/50 p-6 transition hover:-translate-y-1 hover:bg-white/70"
                >
                  <div className="grid size-11 place-items-center rounded-xl bg-mint/15">
                    <w.icon className="size-5 text-brand" strokeWidth={1.75} />
                  </div>
                  <div className="mt-4 font-display text-base font-semibold text-brand">{w.title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">{w.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* platform */}
        <section id="platform" className="mt-24">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue">
                Visibility platform
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-brand md:text-4xl">
                One pane of glass for every load.
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-ink/70">
                Book, track and pull documents without chasing emails. Your ops team sees the same
                timeline your customers do — with a planner one click away.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <div className="glass inline-flex items-center gap-2 rounded-2xl border border-white/60 px-4 py-2.5 text-sm font-semibold text-brand shadow-[var(--shadow-soft)]">
                  <Users className="size-4 text-accent-blue" strokeWidth={1.75} />
                  Multi-user access
                </div>
                <div className="glass inline-flex items-center gap-2 rounded-2xl border border-white/60 px-4 py-2.5 text-sm font-semibold text-brand shadow-[var(--shadow-soft)]">
                  <RouteIcon className="size-4 text-accent-blue" strokeWidth={1.75} />
                  API &amp; EDI ready
                </div>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {platformFeatures.map((f) => (
                <div
                  key={f.title}
                  className="glass rounded-3xl border border-white/60 p-6 shadow-[var(--shadow-soft)] transition hover:-translate-y-1"
                >
                  <div className="grid size-11 place-items-center rounded-xl bg-accent-blue/10">
                    <f.icon className="size-5 text-accent-blue" strokeWidth={1.75} />
                  </div>
                  <div className="mt-4 font-display text-base font-semibold text-brand">{f.title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">{f.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* network */}
        <section id="network" className="mt-24">
          <div className="glass grid gap-8 rounded-3xl border border-white/60 p-8 shadow-[var(--shadow-soft)] lg:grid-cols-2 lg:items-center lg:p-12">
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

        {/* depots */}
        <section id="depots" className="mt-24">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue">
              Depot map
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-brand md:text-4xl">
              Hubs from Scotland to the Channel.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink/70">
              Regional sites with overnight trunking between them — so a collection in Glasgow and a
              delivery in Dover still feel like one network.
            </p>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {depots.map((d) => (
              <div
                key={d.city}
                className="glass flex items-start gap-3 rounded-2xl border border-white/60 p-5 shadow-[var(--shadow-soft)] transition hover:-translate-y-1"
              >
                <div className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-xl bg-accent-blue/10">
                  <MapPin className="size-4 text-accent-blue" strokeWidth={1.75} />
                </div>
                <div>
                  <div className="font-display text-sm font-semibold text-brand">{d.city}</div>
                  <p className="mt-1 text-xs leading-relaxed text-ink/60">{d.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* corridors */}
        <section id="corridors" className="mt-24">
          <div className="glass rounded-3xl border border-white/60 p-8 shadow-[var(--shadow-soft)] lg:p-12">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue">
                  Trade corridors
                </span>
                <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-brand md:text-4xl">
                  Lanes we run every week.
                </h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-ink/65">
                Scheduled capacity on the corridors that matter to UK shippers — with overflow
                charters when the calendar gets tight.
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

        {/* process */}
        <section id="process" className="mt-24">
          <div className="glass rounded-3xl border border-white/60 p-8 shadow-[var(--shadow-soft)] lg:p-12">
            <h2 className="font-display text-3xl font-bold tracking-tight text-brand md:text-4xl">
              How a load moves
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink/70">
              Four clear stages from rate to POD — with live status your customers can follow.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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

        {/* service levels */}
        <section id="service-levels" className="mt-24">
          <div className="glass rounded-3xl border border-white/60 p-8 shadow-[var(--shadow-soft)] lg:p-12">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue">
                Service levels
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-brand md:text-4xl">
                Pick the clock your freight needs.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink/70">
                Clear windows, clear prices — upgrade a single booking or set a standing SLA by lane.
              </p>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {serviceLevels.map((s) => (
                <div
                  key={s.name}
                  className="rounded-2xl border border-white/70 bg-white/50 p-6 transition hover:-translate-y-1 hover:bg-white/70"
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
          </div>
        </section>

        {/* industries */}
        <section id="industries" className="mt-24">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue">
              Industries we move
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-brand md:text-4xl">
              One carrier, every sector.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink/70">
              Sector playbooks for the freight that cannot wait — from line-side parts to validated
              cold chain.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {industries.map((i) => (
              <div
                key={i.title}
                className="glass rounded-3xl border border-white/60 p-6 text-left shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:border-accent-blue/50"
              >
                <div className="font-display text-lg font-semibold text-brand">{i.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{i.copy}</p>
              </div>
            ))}
          </div>
        </section>

        {/* case studies */}
        <section id="cases" className="mt-24">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue">
              Results
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-brand md:text-4xl">
              Outcomes on real UK lanes.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink/70">
              A sample of how shippers use Velora when time, temperature or peak volume is on the
              line.
            </p>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {caseStudies.map((c) => (
              <article
                key={c.title}
                className="glass flex flex-col rounded-3xl border border-white/60 p-6 shadow-[var(--shadow-soft)] transition hover:-translate-y-1"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-accent-blue">
                  {c.sector}
                </span>
                <h3 className="mt-3 font-display text-xl font-bold text-brand">{c.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-ink/65">{c.copy}</p>
                <div className="mt-6 border-t border-white/60 pt-4 font-display text-sm font-semibold text-mint">
                  {c.result}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* sustainability */}
        <section id="sustainability" className="mt-24">
          <div className="glass grid gap-8 rounded-3xl border border-white/60 p-8 shadow-[var(--shadow-soft)] lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:p-12">
            <div className="flex size-20 items-center justify-center rounded-2xl bg-mint/15">
              <Leaf className="size-10 text-mint" strokeWidth={1.5} />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue">
                Responsible freight
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-brand md:text-4xl">
                Lower miles. Cleaner fleets. Clearer reporting.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/70">
                We consolidate where it helps, favour rail and short-sea where the clock allows, and
                report lane-level carbon so your ESG team has numbers they can stand behind. Euro VI
                trunks, route optimisation and empty-mile reduction are standard — not a separate
                product.
              </p>
            </div>
          </div>
        </section>

        {/* credentials */}
        <section className="mt-24">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue">
              Credentials
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-brand md:text-4xl">
              Audited. Certified. Ready for your vendor pack.
            </h2>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
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

        {/* onboarding */}
        <section id="onboarding" className="mt-24">
          <div className="glass rounded-3xl border border-white/60 p-8 shadow-[var(--shadow-soft)] lg:p-12">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue">
                Getting started
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-brand md:text-4xl">
                Live in days, not months.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink/70">
                A short onboarding path so your first booking lands with the right people, tools and
                SLAs already in place.
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {onboarding.map((o) => (
                <div
                  key={o.n}
                  className="rounded-2xl border border-white/70 bg-white/50 p-6 transition hover:-translate-y-1 hover:bg-white/70"
                >
                  <div className="grid size-10 place-items-center rounded-full border border-accent-blue/40 font-display text-sm font-semibold text-accent-blue">
                    {o.n}
                  </div>
                  <div className="mt-4 font-display text-lg font-semibold text-brand">{o.t}</div>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">{o.c}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* mid CTA */}
        <section className="mt-24">
          <div className="relative overflow-hidden rounded-3xl border border-white/40 bg-brand px-8 py-14 text-center shadow-[var(--shadow-lift)] lg:px-16">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent-blue/40 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-mint/25 blur-3xl" />
            <h2 className="relative font-display text-3xl font-bold tracking-tight text-mist md:text-4xl">
              Need a lane quoted before close of play?
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-base leading-relaxed text-mist/75">
              Send origin, destination and pallet count — our desk returns a firm GBP rate the same
              working day.
            </p>
            <a
              href="#quote"
              className="relative mt-8 inline-flex items-center gap-2 rounded-xl bg-accent-blue px-7 py-3.5 text-sm font-semibold text-mist shadow-[var(--shadow-accent)] transition hover:-translate-y-0.5"
            >
              Get a same-day quote
              <ArrowRight className="size-4" />
            </a>
          </div>
        </section>

        {/* testimonials */}
        <section id="testimonials" className="mt-24">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue">
              What clients say
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-brand md:text-4xl">
              Trusted on the busiest lanes.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
        <section id="faq" className="mt-24">
          <div className="glass rounded-3xl border border-white/60 p-8 shadow-[var(--shadow-soft)] lg:p-12">
            <h2 className="font-display text-3xl font-bold tracking-tight text-brand md:text-4xl">
              Questions, answered
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {faqs.map((f) => (
                <div
                  key={f.q}
                  className="rounded-2xl border border-white/70 bg-white/50 p-6 transition hover:bg-white/70"
                >
                  <div className="font-display text-base font-semibold text-brand">{f.q}</div>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* insights */}
        <section id="insights" className="mt-24">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue">
                Insights
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-brand md:text-4xl">
                Practical notes from the desk.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-ink/65">
              Short briefings on customs, corridors and compliance — written by planners, not a
              marketing calendar.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {insights.map((i) => (
              <article
                key={i.title}
                className="glass flex flex-col rounded-3xl border border-white/60 p-6 shadow-[var(--shadow-soft)] transition hover:-translate-y-1"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-accent-blue">
                  {i.tag}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold text-brand">{i.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/65">{i.copy}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-blue">
                  Read more
                  <ArrowRight className="size-3.5" />
                </span>
              </article>
            ))}
          </div>
        </section>

        {/* quote */}
        <section id="quote" className="mt-24">
          <div className="glass grid gap-10 rounded-3xl border border-white/60 p-8 shadow-[var(--shadow-soft)] lg:grid-cols-2 lg:p-12">
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
              <div className="mt-8 flex flex-wrap gap-3 text-xs font-medium text-ink/55">
                <span className="rounded-full border border-white/70 bg-white/50 px-3 py-1.5">
                  Mon–Fri 06:00–22:00
                </span>
                <span className="rounded-full border border-white/70 bg-white/50 px-3 py-1.5">
                  24/7 control desk
                </span>
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
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="grid size-9 place-items-center rounded-xl bg-brand font-display text-base font-bold text-mist">
                V
              </div>
              <span className="font-display text-lg font-semibold text-brand">Velora Freight Ltd</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink/60">
              Air, sea, road and 3PL across the UK and Europe — with live tracking and same-day
              quotes.
            </p>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">Explore</div>
            <div className="mt-4 flex flex-col gap-2 text-sm text-ink/70">
              <a href="#about" className="transition hover:text-accent-blue">
                About
              </a>
              <a href="#solutions" className="transition hover:text-accent-blue">
                Solutions
              </a>
              <a href="#warehousing" className="transition hover:text-accent-blue">
                Warehousing
              </a>
              <a href="#network" className="transition hover:text-accent-blue">
                Network
              </a>
              <a href="#cases" className="transition hover:text-accent-blue">
                Results
              </a>
              <a href="#insights" className="transition hover:text-accent-blue">
                Insights
              </a>
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">Contact</div>
            <div className="mt-4 space-y-2 text-sm text-ink/70">
              <p>Unit 4, Dockside Works, London SE1 3QD</p>
              <p>020 7946 0128</p>
              <p>dispatch@velora.co.uk</p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/60">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 px-6 py-6 text-sm text-ink/55 sm:flex-row">
            <span>© 2026 Velora. Registered in England &amp; Wales.</span>
            <span>Company No. 12847391</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
