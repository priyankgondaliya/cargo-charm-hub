import { Plane, Truck, FileCheck, Warehouse, Ship, Package } from "lucide-react";

export const services = [
  {
    icon: Plane,
    slug: "air-freight",
    title: "Express air freight",
    copy: "Airport-to-airport and door-to-door consignments on daily departures from Heathrow, Birmingham and Manchester, with next-flight-out for critical AOG and medical cargo.",
    points: ["Next-flight-out", "Consolidated day-rate", "Charter on request"],
  },
  {
    icon: Package,
    slug: "courier",
    title: "Same-day & express courier",
    copy: "Dedicated vans and hand-carry couriers for documents, spares and small parcels — collected within the hour anywhere inside the M25 and delivered against a signed POD.",
    points: ["1-hour collection", "Hand-carry onboard", "Signed POD"],
  },
  {
    icon: FileCheck,
    slug: "customs",
    title: "Customs clearance",
    copy: "In-house brokers filing import and export entries on CDS, with T1 transit, GVMS, deferment and full export documentation handled under one roof.",
    points: ["CDS import & export", "T1 / NCTS transit", "Duty deferment"],
  },
  {
    icon: Warehouse,
    slug: "warehousing",
    title: "ETSF bonded warehousing",
    copy: "35,000 sq ft of airside-adjacent storage with temporary storage approval, pick-and-pack, palletising and airline-ready build-up for outbound freight.",
    points: ["ETSF approved", "Pick & pack", "Build-up & screening"],
  },
  {
    icon: Ship,
    slug: "sea-freight",
    title: "Sea freight (FCL & LCL)",
    copy: "Weekly consolidations to the Gulf, West Africa, the Indian subcontinent and the Far East, with groupage from a single carton to a full 40ft container.",
    points: ["Weekly sailings", "Groupage from 1 carton", "Door delivery"],
  },
  {
    icon: Truck,
    slug: "road",
    title: "Road freight & fulfilment",
    copy: "UK pallet distribution and European groupage, plus e-commerce fulfilment with order-level scanning and returns handling for online sellers.",
    points: ["UK pallet network", "EU groupage", "E-commerce fulfilment"],
  },
];

export const industries = [
  {
    title: "Aerospace & AOG",
    copy: "Aircraft-on-ground spares moved on the next departure, 24 hours a day, with dangerous-goods trained staff.",
  },
  {
    title: "Pharma & healthcare",
    copy: "Temperature-controlled packaging, cold-chain lanes and full audit trails for clinical and medical shipments.",
  },
  {
    title: "Retail & e-commerce",
    copy: "Peak-season air capacity, fulfilment and returns for online retailers shipping into the UK and Europe.",
  },
  {
    title: "Perishables",
    copy: "Flowers, seafood and fresh produce cleared and released within hours of touchdown at Heathrow.",
  },
  {
    title: "Automotive & industrial",
    copy: "Production-line spares, tooling and heavy project cargo, including out-of-gauge charter loads.",
  },
  {
    title: "Exhibitions & media",
    copy: "Carnet handling, on-site delivery and return freight for trade shows, film crews and touring equipment.",
  },
  {
    title: "Oil, gas & energy",
    copy: "Remote-site spares, tooling and PPE into the North Sea, Middle East and West Africa on tight call-out windows.",
  },
  {
    title: "Fashion & luxury",
    copy: "Sample collections, seasonal drops and high-value garments moved under seal with photographic PODs.",
  },
];

export const hubs = [
  {
    name: "Heathrow",
    code: "LHR",
    focus: "Main build-up, ETSF warehouse and brokerage HQ",
    detail: "Shoreham Road cargo centre with 24/7 ops, screening and bonded storage.",
  },
  {
    name: "Birmingham",
    code: "BHX",
    focus: "Midlands collections and European air feeders",
    detail: "Same-day uplift for industrial and automotive clients across the Midlands.",
  },
  {
    name: "Manchester",
    code: "MAN",
    focus: "North West, Scotland and Ireland lanes",
    detail: "World Freight Terminal desk covering overnight trunks and Atlantic departures.",
  },
];

export const corridors = [
  { from: "Heathrow", to: "Gulf & Middle East", note: "Daily widebody capacity" },
  { from: "Heathrow", to: "North America", note: "Next-day uplift options" },
  { from: "Birmingham", to: "Central & Eastern Europe", note: "Feeder + truck air" },
  { from: "Manchester", to: "West Africa", note: "Weekly freighter slots" },
  { from: "UK hubs", to: "Indian subcontinent", note: "Consolidated day-rate" },
  { from: "UK hubs", to: "Far East & ASEAN", note: "Economy & express air" },
];

export const capabilities = [
  {
    title: "Dangerous goods",
    copy: "IATA DGR-trained staff accepting most hazard classes, including lithium batteries and dry ice.",
  },
  {
    title: "Cold chain",
    copy: "Validated packaging from +2°C to +25°C with data loggers and excursion alerts.",
  },
  {
    title: "High-value secure",
    copy: "Caged storage, sealed vehicles, dual-person handovers and photographic PODs.",
  },
  {
    title: "Project & OOG",
    copy: "Out-of-gauge surveys, part-charter and full freighter programmes for heavy plant.",
  },
  {
    title: "ATA carnets",
    copy: "Temporary export paperwork for exhibitions, tools and touring media kits.",
  },
  {
    title: "Live tracking",
    copy: "VL references with collection, screening, flight, clearance and delivery milestones.",
  },
];

export const caseStudies = [
  {
    sector: "Aerospace",
    title: "AOG part on the night freighter",
    result: "Stand-side in 5 hours",
    copy: "A turbine seal landed at Heathrow at 04:10, cleared and driven to Bristol before the engineering shift changed — aircraft back in service that morning.",
  },
  {
    sector: "Pharma",
    title: "Clinical trial kits across three continents",
    result: "Zero temperature excursions",
    copy: "Validated packaging, continuous logging and named coordinators kept eighteen months of trial shipments inside specification.",
  },
  {
    sector: "Retail",
    title: "Peak week without ramp delays",
    result: "34% faster store replenishment",
    copy: "A fashion brand consolidated seasonal air into Velora for UK store feeds, with live ETAs cutting missed delivery slots during Black Friday.",
  },
];

export const serviceLevels = [
  {
    name: "Economy air",
    window: "3–5 working days",
    points: ["Consolidated departures", "Door-to-door option", "Standard POD"],
  },
  {
    name: "Express",
    window: "1–2 working days",
    points: ["Priority tender", "Named coordinator", "Milestone alerts"],
  },
  {
    name: "Critical / NFO",
    window: "Next flight out",
    points: ["60-min collection", "Hand-carry available", "24/7 escalation"],
  },
];

export const credentials = [
  "IATA agent",
  "BIFA member",
  "AEO(F) compliant",
  "ISO 9001",
  "ISO 27001",
  "ETSF approved",
  "IATA DGR trained",
  "Known consignor",
];

export const stats = [
  { v: "140+", l: "Countries served" },
  { v: "3", l: "UK airport hubs" },
  { v: "24/7", l: "Operations desk" },
  { v: "98.6%", l: "On-time performance" },
];

export const steps = [
  { n: "01", t: "Quote", c: "Send the weight, dimensions and destination — a rate lands back the same working day." },
  { n: "02", t: "Collect", c: "Our courier or pallet network collects, labels and screens the consignment." },
  { n: "03", t: "Fly", c: "Cargo is built up, cleared for export and loaded on the booked flight." },
  { n: "04", t: "Deliver", c: "Import clearance, final-mile delivery and a signed POD back in your inbox." },
];

export const testimonials = [
  {
    quote:
      "An AOG part landed at Heathrow at 04:10 and was on our stand in Bristol before the shift changed. That is the whole reason we moved to Velora.",
    name: "Sarah Whitfield",
    role: "Maintenance Planner, Norbrook Aviation",
  },
  {
    quote:
      "Their brokers filed our CDS entries the day Brexit rules changed and nothing sat on the ramp. The paperwork has never been the problem since.",
    name: "Daniel Okafor",
    role: "Import Manager, Atlas Components",
  },
  {
    quote:
      "Cold-chain shipments into three continents, eighteen months, zero temperature excursions. The audit trail is genuinely impeccable.",
    name: "Dr. Priya Menon",
    role: "Head of Logistics, HelixPharma",
  },
  {
    quote:
      "We onboarded in under a fortnight — portal access, named coordinator and peak calendar already understood. Rare for a forwarder this responsive.",
    name: "James Corbett",
    role: "Logistics Director, Meridian Foods",
  },
];

export const faqs = [
  {
    q: "How quickly can you collect a parcel?",
    a: "Inside the M25 a dedicated courier is usually with you within 60 minutes. Elsewhere in the UK we collect same day if the booking reaches our desk before 14:00.",
  },
  {
    q: "Which airports do you operate from?",
    a: "Heathrow is our main hub, with cargo desks at Birmingham and Manchester and airline agreements covering Stansted, Gatwick and East Midlands.",
  },
  {
    q: "Do you handle customs paperwork?",
    a: "Yes. Our in-house brokerage files import and export declarations on CDS, arranges T1 transit and GVMS movements, and can clear against your own deferment account or ours.",
  },
  {
    q: "Can you ship dangerous goods?",
    a: "We hold IATA DGR-trained staff and can accept most classes of dangerous goods by air, subject to airline acceptance and correct packaging and declarations.",
  },
  {
    q: "What is the smallest shipment you take?",
    a: "A single envelope. We move everything from a hand-carried document to full charter loads and out-of-gauge project cargo.",
  },
  {
    q: "How do I track my shipment?",
    a: "Every booking gets a VL reference. Enter it on our tracking page and you will see collection, screening, flight departure, clearance and delivery milestones.",
  },
  {
    q: "Do you offer temperature control?",
    a: "Yes. We arrange validated packaging, coolants and data loggers for +2°C to +25°C lanes, with continuous monitoring through to delivery.",
  },
  {
    q: "How fast do quotes come back?",
    a: "Same working day for standard lanes. Critical AOG and medical bookings are answered around the clock by the ops desk.",
  },
];

export const lanes = [
  "Heathrow → Dubai",
  "Birmingham → New York",
  "Manchester → Lagos",
  "Heathrow → Singapore",
  "London → Frankfurt",
  "Heathrow → Mumbai",
  "Manchester → Hong Kong",
  "Birmingham → Amsterdam",
  "Heathrow → Johannesburg",
  "Manchester → Toronto",
];

export const leadership = [
  {
    name: "Helen Parkes",
    role: "Managing Director",
    copy: "Twenty years in Heathrow cargo, previously airline and GSA side — still answers the phone on night freighters.",
  },
  {
    name: "Marcus Adeyemi",
    role: "Head of Operations",
    copy: "Owns the 24/7 desk, build-up teams and courier fleet across LHR, BHX and MAN.",
  },
  {
    name: "Sofia Rahman",
    role: "Head of Customs",
    copy: "Leads the in-house brokerage filing CDS, T1 and GVMS for import and export clients.",
  },
];
