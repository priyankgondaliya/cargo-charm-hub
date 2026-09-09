import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PackageSearch, Plane, ShieldCheck, Truck } from "lucide-react";
import { PageHero } from "@/components/site/SiteShell";

export const Route = createFileRoute("/tracking")({
  head: () => ({
    meta: [
      { title: "Track a Shipment — Velora Air" },
      {
        name: "description",
        content:
          "Enter your Velora VL reference to see collection, screening, flight, clearance and delivery milestones in real time.",
      },
      { property: "og:title", content: "Track a Shipment — Velora Air" },
      {
        property: "og:description",
        content: "Live milestone tracking for Velora Air consignments worldwide.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Tracking,
});

const demoMilestones = [
  { icon: Truck, label: "Collected", detail: "Heathrow TW6 · dedicated van", time: "06:18", done: true },
  { icon: ShieldCheck, label: "Screened & built up", detail: "Known-consignor screening passed", time: "07:42", done: true },
  { icon: Plane, label: "Departed", detail: "LHR → DXB · VL flight tender", time: "11:05", done: true },
  { icon: PackageSearch, label: "In clearance", detail: "Import entry filed at destination", time: "—", done: false },
];

function Tracking() {
  const [ref, setRef] = useState("");
  const [searched, setSearched] = useState(false);

  return (
    <div>
      <PageHero
        eyebrow="Tracking"
        title="Follow every milestone from collection to POD."
        copy="Enter the VL reference from your booking confirmation. You will see collection, screening, departure, clearance and delivery updates as they happen."
      />

      <section className="mx-auto max-w-7xl px-6 pt-12">
        <div className="glass mx-auto max-w-2xl rounded-3xl border border-white/60 p-8 shadow-[var(--shadow-soft)]">
          <form
            className="flex flex-col gap-3 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              setSearched(Boolean(ref.trim()));
            }}
          >
            <input
              value={ref}
              onChange={(e) => {
                setRef(e.target.value.toUpperCase());
                setSearched(false);
              }}
              className="flex-1 rounded-xl border border-white/70 bg-white/60 px-4 py-3.5 text-sm font-medium tracking-wide text-brand outline-none transition placeholder:text-ink/45 focus:border-accent-blue"
              placeholder="e.g. VL-88231"
              aria-label="Shipment reference"
            />
            <button
              type="submit"
              className="rounded-xl bg-accent-blue px-7 py-3.5 text-sm font-semibold text-mist shadow-[var(--shadow-accent)] transition hover:-translate-y-0.5"
            >
              Track shipment
            </button>
          </form>
          <p className="mt-3 text-xs text-ink/50">
            References look like VL-88231 and arrive by email when we book the collection.
          </p>
        </div>
      </section>

      {searched && (
        <section className="mx-auto max-w-7xl px-6 pt-10">
          <div className="glass-dark rounded-3xl border border-white/20 p-8 text-mist shadow-[var(--shadow-lift)]">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="text-xs font-medium uppercase tracking-[0.15em] text-mist/50">
                  Live consignment
                </div>
                <div className="mt-1 font-display text-2xl font-semibold">
                  {ref.trim()} · Heathrow → Dubai
                </div>
              </div>
              <span className="rounded-full bg-mint/20 px-3 py-1 text-xs font-semibold text-mint">
                In transit
              </span>
            </div>

            <div className="mt-8 space-y-4">
              {demoMilestones.map((m) => (
                <div key={m.label} className="flex items-start gap-4">
                  <div
                    className={`grid size-10 shrink-0 place-items-center rounded-xl ${
                      m.done ? "bg-mint/20 text-mint" : "bg-white/10 text-mist/40"
                    }`}
                  >
                    <m.icon className="size-5" strokeWidth={1.75} />
                  </div>
                  <div className="min-w-0 flex-1 border-b border-white/10 pb-4">
                    <div className="flex items-center justify-between gap-3">
                      <div className={`font-display text-sm font-semibold ${m.done ? "text-mist" : "text-mist/45"}`}>
                        {m.label}
                      </div>
                      <span className="text-xs text-mist/45">{m.time}</span>
                    </div>
                    <p className={`mt-1 text-sm ${m.done ? "text-mist/70" : "text-mist/35"}`}>{m.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs text-mist/45">
              Demo timeline for preview. Live data connects to your booking once the portal is live.
            </p>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-7xl px-6 pt-16 pb-8">
        <div className="glass rounded-3xl border border-white/60 p-8 text-center shadow-[var(--shadow-soft)]">
          <h2 className="font-display text-2xl font-bold tracking-tight text-brand">
            Need help locating a shipment?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-ink/65">
            Call the ops desk with your VL reference and we will pull the file while you are on the
            line.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="tel:+442080694410"
              className="rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-mist transition hover:-translate-y-0.5"
            >
              +44 (0)20 8069 4410
            </a>
            <Link
              to="/contact"
              className="rounded-xl border border-white/70 bg-white/50 px-6 py-3 text-sm font-semibold text-brand transition hover:-translate-y-0.5"
            >
              Contact the desk
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
