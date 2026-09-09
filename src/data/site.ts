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
];

export const lanes = [
  "Heathrow → Dubai",
  "Birmingham → New York",
  "Manchester → Lagos",
  "Heathrow → Singapore",
  "London → Frankfurt",
  "Heathrow → Mumbai",
  "Manchester → Hong Kong",
];
