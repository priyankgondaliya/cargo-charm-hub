import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/site/SiteShell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Quotes — Velora Air Freight Desk" },
      {
        name: "description",
        content:
          "Request a same-day airfreight or courier quote from Velora Air. Ops desk open 24/7 at Heathrow, Birmingham and Manchester.",
      },
      { property: "og:title", content: "Contact Velora Air" },
      {
        property: "og:description",
        content: "Same-working-day quotes for airfreight, courier, customs and warehousing.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const offices = [
  {
    title: "Heathrow HQ",
    lines: ["Cargo Centre, Shoreham Road", "Heathrow TW6 3UA", "Main ops & brokerage desk"],
  },
  {
    title: "Birmingham",
    lines: ["Cargo Village, Birmingham Airport", "B26 3QJ", "Midlands collections & build-up"],
  },
  {
    title: "Manchester",
    lines: ["World Freight Terminal", "Manchester M90 5BF", "North West & Ireland lanes"],
  },
];

function Contact() {
  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="Tell us the lane. We'll quote it today."
        copy="Send weight, dimensions and destination — our desk returns an all-in GBP rate the same working day, with no surprise handling fees."
      />

      <section className="mx-auto max-w-7xl px-6 pt-12">
        <div className="glass grid gap-10 rounded-3xl border border-white/60 p-8 shadow-[var(--shadow-soft)] lg:grid-cols-2 lg:p-12">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-brand">
              Speak to the desk
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink/70">
              Urgent AOG and medical bookings are answered around the clock. Standard quotes go out
              Monday to Friday before close of play.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="tel:+442080694410"
                className="flex items-start gap-3 rounded-2xl border border-white/70 bg-white/50 p-4 transition hover:bg-white/70"
              >
                <Phone className="mt-0.5 size-5 text-accent-blue" strokeWidth={1.75} />
                <div>
                  <div className="font-display text-sm font-semibold text-brand">+44 (0)20 8069 4410</div>
                  <div className="mt-0.5 text-xs text-ink/55">24/7 operations desk</div>
                </div>
              </a>
              <a
                href="mailto:hello@veloraair.co.uk"
                className="flex items-start gap-3 rounded-2xl border border-white/70 bg-white/50 p-4 transition hover:bg-white/70"
              >
                <Mail className="mt-0.5 size-5 text-accent-blue" strokeWidth={1.75} />
                <div>
                  <div className="font-display text-sm font-semibold text-brand">hello@veloraair.co.uk</div>
                  <div className="mt-0.5 text-xs text-ink/55">Quotes, accounts &amp; paperwork</div>
                </div>
              </a>
              <div className="flex items-start gap-3 rounded-2xl border border-white/70 bg-white/50 p-4">
                <MapPin className="mt-0.5 size-5 text-accent-blue" strokeWidth={1.75} />
                <div>
                  <div className="font-display text-sm font-semibold text-brand">
                    Cargo Centre, Shoreham Road
                  </div>
                  <div className="mt-0.5 text-xs text-ink/55">Heathrow TW6 3UA</div>
                </div>
              </div>
            </div>
          </div>

          <form className="grid gap-3" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                className="rounded-xl border border-white/70 bg-white/60 px-4 py-3 text-sm text-brand outline-none transition placeholder:text-ink/45 focus:border-accent-blue"
                placeholder="Company"
                required
              />
              <input
                className="rounded-xl border border-white/70 bg-white/60 px-4 py-3 text-sm text-brand outline-none transition placeholder:text-ink/45 focus:border-accent-blue"
                placeholder="Contact name"
                required
              />
            </div>
            <input
              className="rounded-xl border border-white/70 bg-white/60 px-4 py-3 text-sm text-brand outline-none transition placeholder:text-ink/45 focus:border-accent-blue"
              placeholder="Email or phone"
              required
            />
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                className="rounded-xl border border-white/70 bg-white/60 px-4 py-3 text-sm text-brand outline-none transition placeholder:text-ink/45 focus:border-accent-blue"
                placeholder="Origin (city or airport)"
              />
              <input
                className="rounded-xl border border-white/70 bg-white/60 px-4 py-3 text-sm text-brand outline-none transition placeholder:text-ink/45 focus:border-accent-blue"
                placeholder="Destination"
              />
            </div>
            <textarea
              rows={4}
              className="resize-none rounded-xl border border-white/70 bg-white/60 px-4 py-3 text-sm text-brand outline-none transition placeholder:text-ink/45 focus:border-accent-blue"
              placeholder="Pieces, weight, dimensions and required delivery date"
            />
            <button
              type="submit"
              className="mt-1 rounded-xl bg-accent-blue px-6 py-3.5 text-sm font-semibold text-mist shadow-[var(--shadow-accent)] transition hover:-translate-y-0.5"
            >
              Request my quote
            </button>
            <p className="text-xs text-ink/50">
              By submitting you agree we may contact you about this enquiry. No marketing spam.
            </p>
          </form>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pt-16 pb-8">
        <h2 className="font-display text-3xl font-bold tracking-tight text-brand">Our UK desks</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {offices.map((o) => (
            <div
              key={o.title}
              className="glass rounded-3xl border border-white/60 p-7 shadow-[var(--shadow-soft)]"
            >
              <div className="font-display text-lg font-semibold text-brand">{o.title}</div>
              <ul className="mt-3 space-y-1 text-sm leading-relaxed text-ink/65">
                {o.lines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
