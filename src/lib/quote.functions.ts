import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const quoteInput = z.object({
  company: z.string().trim().max(120).optional().default(""),
  contactName: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(160),
  phone: z.string().trim().max(40).optional().default(""),
  origin: z.string().trim().max(160).optional().default(""),
  destination: z.string().trim().max(160).optional().default(""),
  mode: z.string().trim().max(80).optional().default(""),
  details: z.string().trim().max(4000).optional().default(""),
});

export type QuoteInput = z.infer<typeof quoteInput>;

const escape = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const BRAND = "LogiEdge Consulting";
const NAVY = "#0b1f3a";
const BLUE = "#1f6feb";

function row(label: string, value: string) {
  if (!value) return "";
  return `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #e8edf5;font:600 13px Arial,Helvetica,sans-serif;color:#61708a;width:38%;vertical-align:top;">${escape(label)}</td>
      <td style="padding:10px 0;border-bottom:1px solid #e8edf5;font:400 14px Arial,Helvetica,sans-serif;color:${NAVY};">${escape(value).replace(/\n/g, "<br/>")}</td>
    </tr>`;
}

function shell(title: string, intro: string, inner: string, footNote: string) {
  return `<!doctype html><html><body style="margin:0;padding:0;background:#f2f6fb;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f2f6fb;padding:28px 12px;">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 12px 30px rgba(11,31,58,.08);">
        <tr><td style="background:${NAVY};padding:22px 28px;">
          <div style="font:700 19px Arial,Helvetica,sans-serif;color:#ffffff;letter-spacing:.4px;">${BRAND}</div>
          <div style="font:400 12px Arial,Helvetica,sans-serif;color:#9fc0ee;margin-top:4px;">Air &middot; Sea &middot; Road &middot; Local</div>
        </td></tr>
        <tr><td style="padding:28px;">
          <h1 style="margin:0 0 8px;font:700 20px Arial,Helvetica,sans-serif;color:${NAVY};">${escape(title)}</h1>
          <p style="margin:0 0 20px;font:400 14px/22px Arial,Helvetica,sans-serif;color:#61708a;">${intro}</p>
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${inner}</table>
        </td></tr>
        <tr><td style="padding:18px 28px 26px;">
          <p style="margin:0;font:400 12px/18px Arial,Helvetica,sans-serif;color:#8b99ae;">${footNote}</p>
        </td></tr>
        <tr><td style="background:#f2f6fb;padding:16px 28px;font:400 11px Arial,Helvetica,sans-serif;color:#8b99ae;">
          ${BRAND} &middot; Cargo Centre, Shoreham Road, Heathrow TW6 3UA &middot; +44 (0)20 8069 4410
        </td></tr>
      </table>
    </td></tr>
  </table></body></html>`;
}

async function resendSend(payload: Record<string, unknown>, apiKey: string) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(payload),
  });
  const body = await res.text();
  return { ok: res.ok, status: res.status, body };
}

export const sendQuoteRequest = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => quoteInput.parse(data))
  .handler(async ({ data }) => {
    const apiKey = process.env["RESEND_API_KEY"];
    if (!apiKey) throw new Error("Email service is not configured.");

    const to = process.env["QUOTE_INBOX"] || "logiedgeconsulting@gmail.com";
    const from = process.env["QUOTE_FROM"] || `${BRAND} <onboarding@resend.dev>`;

    const details = [
      row("Company", data.company),
      row("Contact", data.contactName),
      row("Email", data.email),
      row("Phone", data.phone),
      row("Origin", data.origin),
      row("Destination", data.destination),
      row("Preferred mode", data.mode),
      row("Shipment details", data.details),
    ].join("");

    const internal = await resendSend(
      {
        from,
        to: [to],
        reply_to: data.email,
        subject: data.mode
          ? `New quote request — ${data.mode} — ${data.contactName}`
          : `New quote request — ${data.contactName}`,
        html: shell(
          "New quote request",
          `A new enquiry arrived from the website contact page. Reply directly to this email to reach <strong style="color:${BLUE}">${escape(data.contactName)}</strong>.`,
          details,
          "Sent automatically from the LogiEdge Consulting website enquiry form.",
        ),
      },
      apiKey,
    );

    if (!internal.ok) {
      console.error(`Resend send failed [${internal.status}]: ${internal.body}`);
      throw new Error(`Email could not be sent [${internal.status}]`);
    }

    // Courtesy acknowledgement to the customer. Requires a verified sending
    // domain in Resend; a failure here must not fail the enquiry.
    const ack = await resendSend(
      {
        from,
        to: [data.email],
        reply_to: to,
        subject: `We've received your quote request — ${BRAND}`,
        html: shell(
          `Thanks, ${escape(data.contactName.split(" ")[0] || data.contactName)}`,
          "Our operations desk has your enquiry and will come back with pricing and transit times the same working day. Here is what you sent us:",
          details,
          "Need it urgently? Call the 24/7 ops desk on +44 (0)20 8069 4410.",
        ),
      },
      apiKey,
    );
    if (!ack.ok) {
      console.warn(`Customer acknowledgement not sent [${ack.status}]: ${ack.body}`);
    }

    return { sent: true, acknowledged: ack.ok };
  });
