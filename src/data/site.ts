import {
  Plane,
  Truck,
  FileCheck,
  Warehouse,
  Ship,
  Package,
  type LucideIcon,
} from "lucide-react";

export const brand = {
  name: "LogiEdge Consulting",
  short: "LogiEdge",
  legal: "LogiEdge Consulting",
  tagline: "Air · Sea · Road · Local",
  email: "logiedgeconsulting@gmail.com",
  phone: "+44 (0)20 8069 4410",
  phoneHref: "tel:+442080694410",
  address: "Cargo Centre, Shoreham Road, Heathrow TW6 3UA",
  refPrefix: "LE",
};

export const modes: {
  icon: LucideIcon;
  slug: string;
  title: string;
  copy: string;
}[] = [
  {
    icon: Plane,
    slug: "air-freight",
    title: "Air transport",
    copy: "Daily departures from Heathrow, Birmingham and Manchester — next-flight-out when the clock is the cargo.",
  },
  {
    icon: Ship,
    slug: "sea-freight",
    title: "Sea & water",
    copy: "FCL, LCL and RoRo through Felixstowe, Southampton and London Gateway, with inland clearance so boxes do not sit on the quay.",
  },
  {
    icon: Truck,
    slug: "road",
    title: "Truck transport",
    copy: "UK pallet, full and part loads, European groupage and dedicated vehicles from vans through to abnormal loads.",
  },
  {
    icon: Package,
    slug: "courier",
    title: "Local delivery",
    copy: "Same-day and next-day collections, last-mile drops and signed proof of delivery across London and the UK.",
  },
];

export const services = [
  {
    icon: Plane,
    slug: "air-freight",
    title: "Air freight",
    copy: "Airport-to-airport and door-to-door on daily departures from Heathrow, Birmingham and Manchester. Economy consolidations when cost leads, next-flight-out when it cannot wait.",
    points: ["Next-flight-out", "Consolidated day-rate", "Charter on request"],
  },
  {
    icon: Ship,
    slug: "sea-freight",
    title: "Sea freight (FCL, LCL & RoRo)",
    copy: "Most of the world's trade still moves by water. We book full containers, weekly groupage and roll-on/roll-off for vehicles and plant through the UK's deep-sea ports — then clear inland so you are not paying quay rent.",
    points: ["Weekly FCL & LCL", "RoRo & breakbulk", "Door-to-door"],
  },
  {
    icon: Truck,
    slug: "road",
    title: "Road & truck freight",
    copy: "UK overnight pallets, FTL and LTL, European groupage and dedicated trucks. Tail-lift, curtain-side, reefer, low-loader and skeleton — planned to the deadline, not the depot's convenience.",
    points: ["FTL & LTL", "UK pallet network", "EU groupage"],
  },
  {
    icon: Package,
    slug: "courier",
    title: "Local, same-day & last mile",
    copy: "Dedicated vans and onboard couriers for documents, spares and parcels. Collected within the hour inside the M25, same day nationwide, delivered against a signed POD.",
    points: ["1-hour collection", "Same-day UK", "Signed POD"],
  },
  {
    icon: FileCheck,
    slug: "customs",
    title: "Customs clearance",
    copy: "In-house brokers filing import and export entries on CDS at airports and ports. T1 transit, GVMS, authorised consignee status and inland clearance so cargo leaves congested terminals instead of waiting on them.",
    points: ["CDS import & export", "T1 / NCTS / GVMS", "Inland ETSF clearance"],
  },
  {
    icon: Warehouse,
    slug: "warehousing",
    title: "Warehousing & fulfilment",
    copy: "35,000 sq ft of bonded and commercial storage with pick-and-pack, palletising, container stuffing and e-commerce fulfilment — connected to air, sea and road under one account.",
    points: ["ETSF bonded", "Pick & pack", "Container stuffing"],
  },
];

export const industries = [
  {
    title: "Aerospace & AOG",
    copy: "Aircraft-on-ground spares on the next flight, with road feeders to the stand and dangerous-goods trained staff around the clock.",
  },
  {
    title: "Pharma & healthcare",
    copy: "Temperature-controlled air, reefer containers and validated road legs, with data loggers and a full audit trail from pack to POD.",
  },
  {
    title: "Retail, fashion & e-commerce",
    copy: "Peak air capacity, weekly ocean replenishment, fulfilment and last-mile returns for brands shipping into the UK and Europe.",
  },
  {
    title: "Perishables & FMCG",
    copy: "Flowers, seafood and grocery lines cleared within hours of landing, plus reefer boxes and timed store deliveries for everyday volume.",
  },
  {
    title: "Automotive & industrial",
    copy: "Line-side spares by road, RoRo for vehicles and plant, and out-of-gauge project cargo by sea or charter when it will not fit a box.",
  },
  {
    title: "Engineering & manufacturing",
    copy: "Inbound components from the Far East by sea, tooling by air, and UK distribution that keeps production lines fed without overstocking.",
  },
  {
    title: "Oil, gas & energy",
    copy: "Remote-site spares, tooling and PPE into the North Sea, Middle East and West Africa on tight call-out windows.",
  },
  {
    title: "Exhibitions, media & project",
    copy: "Carnets, on-site delivery and return freight for trade shows, film crews, yachts, boats and touring equipment.",
  },
];

export const hubs = [
  {
    name: "Heathrow",
    code: "LHR",
    focus: "HQ, air cargo build-up and brokerage",
    detail: "Shoreham Road cargo centre with 24/7 ops, screening and bonded storage for air consignments.",
  },
  {
    name: "Birmingham",
    code: "BHX",
    focus: "Midlands warehouse, road hub and ETSF",
    detail: "35,000 sq ft inland clearance, pick-and-pack and same-day collections across the industrial Midlands.",
  },
  {
    name: "Manchester",
    code: "MAN",
    focus: "North West, Scotland and Ireland",
    detail: "World Freight Terminal desk covering Atlantic air, Irish Sea feeders and overnight trunks.",
  },
  {
    name: "Felixstowe",
    code: "FXT",
    focus: "Deep-sea FCL, LCL and Far East trade",
    detail: "UK's largest container port — weekly sailings, destuffing and inland haulage onto our own network.",
  },
  {
    name: "Southampton",
    code: "SOU",
    focus: "Atlantic, Africa and vehicle RoRo",
    detail: "Deep-sea and RoRo gateways for West Africa, the Americas and rolling cargo that will not containerise.",
  },
  {
    name: "London Gateway",
    code: "LGP",
    focus: "Thames deep-sea and short-sea Europe",
    detail: "Inventory-linked clearance and short-sea groupage into Rotterdam, Antwerp and the Med.",
  },
];

export const corridors = [
  { from: "Felixstowe", to: "Far East & ASEAN", note: "Weekly FCL and LCL sailings" },
  { from: "Southampton", to: "West Africa & Atlantic", note: "Ocean + RoRo capacity" },
  { from: "Heathrow", to: "Gulf & Middle East", note: "Daily widebody air" },
  { from: "Birmingham", to: "Central & Eastern Europe", note: "Road groupage and truck-air" },
  { from: "UK ports", to: "Indian subcontinent", note: "FCL, LCL and air backup" },
  { from: "Manchester", to: "North America", note: "Air express and ocean FCL" },
];

export const capabilities = [
  {
    title: "Dangerous goods",
    copy: "IATA DGR and ADR-trained staff accepting most hazard classes by air, sea and road, including lithium batteries and dry ice.",
  },
  {
    title: "Cold chain & reefer",
    copy: "Validated air packaging from +2°C to +25°C, plus reefer containers and temperature-controlled trucks with data loggers.",
  },
  {
    title: "High-value secure",
    copy: "Caged storage, sealed vehicles, dual-person handovers and photographic PODs for jewellery, samples and electronics.",
  },
  {
    title: "Project, OOG & charter",
    copy: "Out-of-gauge surveys, vessel and aircraft charter, breakbulk and heavy plant that will not fit a standard container.",
  },
  {
    title: "RoRo, vehicles & boats",
    copy: "Cars, classic vehicles, yachts and construction equipment moved on shared or dedicated RoRo and container programmes.",
  },
  {
    title: "Packing & cargo insurance",
    copy: "Export crates, ISPM-15 timber, on-site packing and marine open-cover insurance for air, sea, road and storage.",
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
    sector: "Retail import",
    title: "Container off the quay, not on it",
    result: "Port storage costs avoided",
    copy: "A Far East 40ft arrived at Felixstowe with no delivery slot. We pulled it inland to bonded storage, cleared against the importer's deferment and fed stores over seven days instead of paying quay rent.",
  },
  {
    sector: "Automotive",
    title: "Line-side overnight, every night",
    result: "Zero missed production windows",
    copy: "A Midlands plant needed German tooling on a standing overnight truck. Dedicated FTL, T1 transit and a 06:00 dock booking kept the line running through a six-week tooling change.",
  },
];

export const serviceLevels = [
  {
    name: "Economy / groupage",
    window: "When cost leads",
    points: ["Sea LCL and FCL weekly sailings", "UK & EU road groupage", "Economy air consolidations"],
  },
  {
    name: "Express",
    window: "1–5 working days",
    points: ["Priority air tender", "Dedicated road and timed docks", "Named coordinator and milestone alerts"],
  },
  {
    name: "Critical / same-day",
    window: "Next flight, truck or van",
    points: ["60-minute collection", "Next-flight-out and hand-carry", "24/7 escalation"],
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
  "Authorised consignee",
];

export const stats = [
  { v: "140+", l: "Countries served" },
  { v: "4", l: "Transport modes" },
  { v: "24/7", l: "Operations desk" },
  { v: "98.6%", l: "On-time performance" },
];

export const steps = [
  {
    n: "01",
    t: "Quote",
    c: "Send the pieces, weight, dimensions and destination — we recommend air, sea, road or a mix, with an all-in GBP rate the same working day.",
  },
  {
    n: "02",
    t: "Collect",
    c: "Our vans, pallet network or a dedicated truck collect, label and book the cargo into the right gateway — airport, port or depot.",
  },
  {
    n: "03",
    t: "Move",
    c: "We fly it, sail it or drive it. Export clearance, screening or container gate-in happens in-house so the file never leaves the desk.",
  },
  {
    n: "04",
    t: "Deliver",
    c: "Import clearance, inland haulage and last-mile delivery with a signed POD — door to door, not port to port and good luck.",
  },
];

export const testimonials = [
  {
    quote:
      "An AOG part landed at Heathrow at 04:10 and was on our stand in Bristol before the shift changed. That is the whole reason we moved to LogiEdge.",
    name: "Sarah Whitfield",
    role: "Maintenance Planner, Norbrook Aviation",
  },
  {
    quote:
      "We had a container we could not take at the port. LogiEdge pulled it inland, cleared it and saved us the quay charges. Sea freight has been straightforward ever since.",
    name: "Daniel Okafor",
    role: "Import Manager, Meridian Components",
  },
  {
    quote:
      "Cold-chain by air into three continents and reefer boxes on the ocean programme — eighteen months, zero temperature excursions. The audit trail is impeccable.",
    name: "Dr. Priya Menon",
    role: "Head of Logistics, HelixPharma",
  },
  {
    quote:
      "Overnight trucks into the plant, same-day vans for spares, and a named person who actually answers. Rare for a forwarder that also handles our Far East boxes.",
    name: "James Corbett",
    role: "Logistics Director, Meridian Foods",
  },
];

export const faqs = [
  {
    q: "Do you only move freight by air?",
    a: "No. Air is one of four modes. We book sea freight (FCL, LCL and RoRo), UK and European road, and local same-day delivery — often combining them on a single shipment.",
  },
  {
    q: "How quickly can you collect?",
    a: "Inside the M25 a dedicated courier is usually with you within 60 minutes. Elsewhere in the UK we collect same day if the booking reaches our desk before 14:00. Full loads and pallets are planned to the next available trunk.",
  },
  {
    q: "Which airports and ports do you operate from?",
    a: "Air: Heathrow, Birmingham and Manchester, with airline agreements covering Stansted, Gatwick and East Midlands. Sea: Felixstowe, Southampton, London Gateway, Tilbury and Liverpool, with inland clearance at our Birmingham ETSF.",
  },
  {
    q: "What is the difference between FCL and LCL?",
    a: "FCL is a dedicated 20ft or 40ft container — usually the better rate once you have around 12 pallets. LCL is groupage: your cargo shares a container, which is ideal for smaller, regular replenishment without waiting to fill a box.",
  },
  {
    q: "Do you handle customs paperwork?",
    a: "Yes. Our in-house brokerage files import and export declarations on CDS at airports and ports, arranges T1 transit and GVMS movements, and can clear inland so you avoid port demurrage.",
  },
  {
    q: "Can you ship dangerous goods, vehicles or out-of-gauge cargo?",
    a: "We hold IATA DGR and ADR-trained staff for most hazard classes by air, sea and road. We also move vehicles and plant on RoRo, and survey out-of-gauge or project loads for vessel or aircraft charter.",
  },
  {
    q: "How do I track my shipment?",
    a: "Every booking gets an LE reference. Enter it on our tracking page to follow collection, gateway handoff, departure or sailing, clearance and delivery — whether the cargo is on a flight, a vessel or a truck.",
  },
  {
    q: "How fast do quotes come back?",
    a: "Same working day for standard air, sea and road lanes. Critical AOG, medical and same-day bookings are answered around the clock by the ops desk.",
  },
];

export const lanes = [
  "Heathrow → Dubai",
  "Felixstowe → Shanghai",
  "Birmingham → Rotterdam",
  "Southampton → Lagos",
  "Manchester → New York",
  "London Gateway → Mumbai",
  "UK road → Madrid",
  "Heathrow → Singapore",
  "Felixstowe → New York",
  "Manchester → Hong Kong",
];

export const leadership = [
  {
    name: "Helen Parkes",
    role: "Managing Director",
    copy: "Twenty years in UK freight — air, ocean and overland. Still answers the phone when a vessel rolls or a night freighter is the only option.",
  },
  {
    name: "Marcus Adeyemi",
    role: "Head of Operations",
    copy: "Owns the 24/7 desk, warehouse, courier fleet and port haulage across LHR, BHX, MAN and the deep-sea gateways.",
  },
  {
    name: "Sofia Rahman",
    role: "Head of Customs",
    copy: "Leads the in-house brokerage filing CDS, T1 and GVMS for air, sea and road — including inland ETSF clearances.",
  },
];

export const footerServices = [
  "Air freight",
  "Sea freight & RoRo",
  "Road & truck freight",
  "Local & same-day",
  "Customs clearance",
  "Warehousing & fulfilment",
];
