import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PackageSearch, ShieldCheck, Ship, Truck } from "lucide-react";
import { PageHero } from "@/components/site/SiteShell";
import {
  btnCta,
  btnNavy,
  btnOutline,
  Container,
  Section,
  SectionTitle,
} from "@/components/site/primitives";
import { RouteLine } from "@/components/site/NetworkMap";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/tracking")({
  head: () => ({
    meta: [
      { title: "Track a Shipment — LogiEdge Consulting" },
      {
        name: "description",
        content:
          "Enter your LogiEdge LE reference to see collection, gateway, sailing or flight, clearance and delivery milestones in real time.",
      },
      { property: "og:title", content: "Track a Shipment — LogiEdge Consulting" },
      {
        property: "og:description",
        content:
          "Live milestone tracking for LogiEdge Consulting consignments worldwide — air, sea and road.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Tracking,
});

const demoMilestones = [
  {
    icon: Truck,
    label: "Collected",
    detail: "Birmingham B33 · dedicated truck",
    time: "09:40",
    done: true,
  },
  {
    icon: ShieldCheck,
    label: "Gated in",
    detail: "Felixstowe FXT · 1 × 40HC",
    time: "14:15",
    done: true,
  },
  {
    icon: Ship,
    label: "Sailed",
    detail: "FXT → LOS · weekly ocean sailing",
    time: "18:02",
    done: true,
  },
  {
    icon: PackageSearch,
    label: "In clearance",
    detail: "Import entry filed, inland haulage booked",
    time: "—",
    done: false,
  },
];

function Tracking() {
  const [ref, setRef] = useState("");
  const [searched, setSearched] = useState(false);
  const doneCount = demoMilestones.filter((m) => m.done).length;
  const progress = Math.round((doneCount / demoMilestones.length) * 100);

  return (
    <div>
      <PageHero
        eyebrow="Tracking"
        title="Follow every milestone from collection to POD."
        copy="Enter the LE reference from your booking confirmation. You will see collection, gateway handoff, departure or sailing, clearance and delivery updates as they happen."
      />

      <section className="navy-grid">
        <Container className="py-12 md:py-16">
          <div className="mx-auto max-w-2xl rounded-xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
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
                className="flex-1 rounded-lg border border-white/15 bg-navy px-4 py-3.5 text-sm font-medium tracking-wide text-white outline-none placeholder:text-navy-muted focus:border-accent-blue"
                placeholder="e.g. LE-88231"
                aria-label="Shipment reference"
              />
              <button type="submit" className={btnCta}>
                Track shipment
              </button>
            </form>
            <p className="mt-3 text-xs text-navy-muted">
              References look like LE-88231 and arrive by email when we book the collection.
            </p>
          </div>
        </Container>
      </section>

      {searched && (
        <section className="border-t border-white/10 navy-grid">
          <Container className="py-12 md:pb-16">
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-6 text-white md:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-navy-muted">
                    Shipment reference
                  </div>
                  <div className="mt-1 font-display text-2xl font-bold">{ref.trim()}</div>
                </div>
                <span className="inline-flex items-center gap-2 border border-success/30 bg-success/10 px-3 py-1 text-xs font-semibold text-success">
                  <span className="size-1.5 rounded-full bg-success" />
                  In transit
                </span>
              </div>

              <div className="mt-8">
                <RouteLine
                  origin="Felixstowe"
                  destination="Lagos"
                  status="On vessel · Inland clearance booked"
                  progress={progress}
                  dark
                />
              </div>

              <div className="mt-10 space-y-0">
                {demoMilestones.map((m, i) => (
                  <div key={m.label} className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div
                        className={cn(
                          "grid size-10 shrink-0 place-items-center rounded-lg",
                          m.done
                            ? "bg-accent-blue/20 text-accent-blue"
                            : "bg-white/5 text-navy-muted",
                        )}
                      >
                        <m.icon className="size-5" strokeWidth={1.75} />
                      </div>
                      {i < demoMilestones.length - 1 && (
                        <div
                          className={cn("h-8 w-px", m.done ? "bg-accent-blue/40" : "bg-white/10")}
                        />
                      )}
                    </div>
                    <div className="min-w-0 flex-1 pb-6">
                      <div className="flex items-center justify-between gap-3">
                        <div
                          className={cn(
                            "font-display text-sm font-semibold",
                            m.done ? "text-white" : "text-navy-muted",
                          )}
                        >
                          {m.label}
                        </div>
                        <span className="text-xs text-navy-muted">{m.time}</span>
                      </div>
                      <p
                        className={cn(
                          "mt-1 text-sm",
                          m.done ? "text-navy-muted" : "text-navy-muted/70",
                        )}
                      >
                        {m.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-2 text-xs text-navy-muted">
                Demo timeline for preview. Live data connects to your booking once the portal is
                live.
              </p>
            </div>
          </Container>
        </section>
      )}

      <Section tone="white">
        <div className="mx-auto max-w-2xl text-center">
          <SectionTitle className="mx-auto">Need help locating a shipment?</SectionTitle>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-subtle">
            Call the ops desk with your LE reference and we will pull the file while you are on the
            line.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href="tel:+442080694410" className={btnNavy}>
              +44 (0)20 8069 4410
            </a>
            <Link to="/contact" className={btnOutline}>
              Contact the desk
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
