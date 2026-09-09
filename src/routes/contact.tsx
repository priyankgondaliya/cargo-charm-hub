import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { sileo } from "sileo";
import type { ReactNode } from "react";
import { PageHero } from "@/components/site/SiteShell";
import { brand } from "@/data/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Quotes — LogiEdge Consulting" },
      {
        name: "description",
        content:
          "Request a same-day quote for air, sea, road or local delivery from LogiEdge Consulting. Ops desk open 24/7 at Heathrow, Birmingham and Manchester.",
      },
      { property: "og:title", content: "Contact LogiEdge Consulting" },
      {
        property: "og:description",
        content: "Same-working-day quotes for air freight, sea freight, road, customs and warehousing.",
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
    lines: ["Cargo Centre, Shoreham Road", "Heathrow TW6 3UA", "Main ops, air cargo & brokerage"],
  },
  {
    title: "Birmingham",
    lines: ["Cargo Village, Birmingham Airport", "B26 3QJ", "ETSF warehouse, road hub & inland clearance"],
  },
  {
    title: "Manchester",
    lines: ["World Freight Terminal", "Manchester M90 5BF", "North West air, Irish Sea and road"],
  },
  {
    title: "Port network",
    lines: ["Felixstowe · Southampton · London Gateway", "Tilbury · Liverpool", "FCL, LCL, RoRo and short-sea Europe"],
  },
];

const freightModes = [
  "Air freight",
  "Sea freight (FCL / LCL / RoRo)",
  "Road & truck",
  "Local / same-day",
  "Warehousing",
  "Customs only",
  "Not sure — recommend a mode",
] as const;

const phonePattern = /^[+]?[\d\s().-]{7,20}$/;

function isValidPhone(value: string) {
  const digits = value.replace(/\D/g, "");
  return phonePattern.test(value) && digits.length >= 7 && digits.length <= 15;
}

const quoteSchema = z.object({
  company: z.string().trim(),
  contactName: z.string().trim().min(2, "Enter a contact name."),
  email: z.string().trim().min(1, "Enter your email.").email("Enter a valid email address."),
  phone: z
    .string()
    .trim()
    .refine((value) => value === "" || isValidPhone(value), "Enter a valid phone number."),
  origin: z.string().trim(),
  destination: z.string().trim(),
  mode: z.string(),
  details: z.string().trim(),
});

type QuoteFormValues = z.infer<typeof quoteSchema>;

const emptyQuote: QuoteFormValues = {
  company: "",
  contactName: "",
  email: "",
  phone: "",
  origin: "",
  destination: "",
  mode: "",
  details: "",
};

function sendQuoteEmail(values: QuoteFormValues) {
  return new Promise<QuoteFormValues>((resolve, reject) => {
    window.setTimeout(() => {
      try {
        const subject = encodeURIComponent(
          values.mode ? `Quote request — ${values.mode}` : "Quote request",
        );
        const body = encodeURIComponent(
          [
            values.company ? `Company: ${values.company}` : null,
            `Contact: ${values.contactName}`,
            `Email: ${values.email}`,
            values.phone ? `Phone: ${values.phone}` : null,
            values.origin ? `Origin: ${values.origin}` : null,
            values.destination ? `Destination: ${values.destination}` : null,
            values.mode ? `Mode: ${values.mode}` : null,
            values.details ? `\n${values.details}` : null,
          ]
            .filter(Boolean)
            .join("\n"),
        );
        const link = document.createElement("a");
        link.href = `mailto:${brand.email}?subject=${subject}&body=${body}`;
        link.style.display = "none";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        resolve(values);
      } catch (error) {
        reject(error);
      }
    }, 800);
  });
}

const fieldClass = (invalid?: boolean) =>
  cn(
    "w-full rounded-xl border bg-white/60 px-4 py-3 text-sm text-brand outline-none transition placeholder:text-ink/45 focus:border-accent-blue",
    invalid ? "border-red-400 focus:border-red-400" : "border-white/70",
  );

function QuoteForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: emptyQuote,
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const onValid = async (values: QuoteFormValues) => {
    try {
      await sileo.promise(sendQuoteEmail(values), {
        loading: {
          title: "Sending quote request",
          description: `Emailing ${brand.email}`,
        },
        success: {
          title: "Quote request sent",
          description: "The desk will reply the same working day.",
        },
        error: {
          title: "Could not send",
          description: "Please try again or call the ops desk.",
        },
      });
      reset(emptyQuote);
    } catch {
      // Toast already covers the error state.
    }
  };

  const onInvalid = () => {
    sileo.warning({
      title: "Check the form",
      description: "Please fix the highlighted fields and try again.",
    });
  };

  return (
    <form className="grid gap-3" onSubmit={handleSubmit(onValid, onInvalid)} noValidate>
      <div className="grid gap-3 sm:grid-cols-2">
        <Field htmlFor="company" label="Company name" error={errors.company?.message}>
          <input
            id="company"
            {...register("company")}
            className={fieldClass(Boolean(errors.company))}
            placeholder="Company name"
            autoComplete="organization"
            aria-invalid={Boolean(errors.company)}
          />
        </Field>
        <Field htmlFor="contactName" label="Contact name" required error={errors.contactName?.message}>
          <input
            id="contactName"
            {...register("contactName")}
            className={fieldClass(Boolean(errors.contactName))}
            placeholder="Contact name"
            autoComplete="name"
            aria-invalid={Boolean(errors.contactName)}
            aria-required="true"
          />
        </Field>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <Field htmlFor="email" label="Email" required error={errors.email?.message}>
          <input
            id="email"
            type="email"
            {...register("email")}
            className={fieldClass(Boolean(errors.email))}
            placeholder="nina.v@example.com"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-required="true"
          />
        </Field>
        <Field htmlFor="phone" label="Phone" error={errors.phone?.message}>
          <input
            id="phone"
            type="tel"
            {...register("phone")}
            className={fieldClass(Boolean(errors.phone))}
            placeholder="+44 20 0000 0000"
            autoComplete="tel"
            aria-invalid={Boolean(errors.phone)}
          />
        </Field>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <Field htmlFor="origin" label="Origin" error={errors.origin?.message}>
          <input
            id="origin"
            {...register("origin")}
            className={fieldClass(Boolean(errors.origin))}
            placeholder="City, port or airport"
            aria-invalid={Boolean(errors.origin)}
          />
        </Field>
        <Field htmlFor="destination" label="Destination" error={errors.destination?.message}>
          <input
            id="destination"
            {...register("destination")}
            className={fieldClass(Boolean(errors.destination))}
            placeholder="Destination"
            aria-invalid={Boolean(errors.destination)}
          />
        </Field>
      </div>
      <Field htmlFor="mode" label="Preferred mode" error={errors.mode?.message}>
        <select
          id="mode"
          {...register("mode")}
          className={fieldClass(Boolean(errors.mode))}
          aria-invalid={Boolean(errors.mode)}
        >
          <option value="">Preferred mode</option>
          {freightModes.map((mode) => (
            <option key={mode} value={mode}>
              {mode}
            </option>
          ))}
        </select>
      </Field>
      <Field htmlFor="details" label="Shipment details" error={errors.details?.message}>
        <textarea
          id="details"
          {...register("details")}
          rows={4}
          className={cn(fieldClass(Boolean(errors.details)), "resize-none")}
          placeholder="Pieces, weight, dimensions and required delivery date"
          aria-invalid={Boolean(errors.details)}
        />
      </Field>
      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-1 rounded-xl bg-accent-blue px-6 py-3.5 text-sm font-semibold text-mist shadow-[var(--shadow-accent)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Sending…" : "Request my quote"}
      </button>
      <p className="text-xs text-ink/50">
        Fields marked <span className="font-semibold text-red-500">*</span> are required. By
        submitting you agree we may contact you about this enquiry.
      </p>
    </form>
  );
}

function Field({
  htmlFor,
  label,
  required,
  error,
  children,
}: {
  htmlFor: string;
  label: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="grid gap-1.5">
      <label htmlFor={htmlFor} className="px-0.5 text-xs font-semibold text-ink/70">
        {label}
        {required ? (
          <span className="text-red-500" aria-hidden="true">
            {" "}
            *
          </span>
        ) : null}
      </label>
      {children}
      {error ? <p className="px-1 text-xs font-medium text-red-500">{error}</p> : null}
    </div>
  );
}

function Contact() {
  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="Tell us the lane. We'll quote it today."
        copy="Send weight, dimensions, destination and preferred mode — our desk returns an all-in GBP rate the same working day, with no surprise handling fees."
      />

      <section className="mx-auto max-w-7xl px-6 pt-12">
        <div className="glass grid gap-10 rounded-3xl border border-white/60 p-8 shadow-[var(--shadow-soft)] lg:grid-cols-2 lg:p-12">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-brand">
              Speak to the desk
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink/70">
              Urgent AOG, medical and same-day bookings are answered around the clock. Standard air,
              sea and road quotes go out Monday to Friday before close of play.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={brand.phoneHref}
                className="flex items-start gap-3 rounded-2xl border border-white/70 bg-white/50 p-4 transition hover:bg-white/70"
              >
                <Phone className="mt-0.5 size-5 text-accent-blue" strokeWidth={1.75} />
                <div>
                  <div className="font-display text-sm font-semibold text-brand">{brand.phone}</div>
                  <div className="mt-0.5 text-xs text-ink/55">24/7 operations desk</div>
                </div>
              </a>
              <a
                href={`mailto:${brand.email}`}
                className="flex items-start gap-3 rounded-2xl border border-white/70 bg-white/50 p-4 transition hover:bg-white/70"
              >
                <Mail className="mt-0.5 size-5 text-accent-blue" strokeWidth={1.75} />
                <div>
                  <div className="font-display text-sm font-semibold text-brand">{brand.email}</div>
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

          <QuoteForm />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pt-16 pb-8">
        <h2 className="font-display text-3xl font-bold tracking-tight text-brand">Our UK network</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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
