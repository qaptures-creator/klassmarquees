import { NextResponse } from "next/server";

interface EnquiryPayload {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate?: string;
  venue?: string;
  guestCount?: string;
  services: string[];
  vision?: string;
  preferredContact: string;
  website?: string;
}

function isValidPayload(data: unknown): data is EnquiryPayload {
  if (!data || typeof data !== "object") return false;
  const d = data as Record<string, unknown>;
  return (
    typeof d.name === "string" &&
    d.name.trim().length > 0 &&
    typeof d.email === "string" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email) &&
    typeof d.phone === "string" &&
    d.phone.trim().length > 0 &&
    typeof d.eventType === "string" &&
    d.eventType.trim().length > 0 &&
    typeof d.preferredContact === "string" &&
    Array.isArray(d.services)
  );
}

export async function POST(request: Request) {
  let data: unknown;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!isValidPayload(data)) {
    return NextResponse.json({ error: "Please complete all required fields." }, { status: 422 });
  }

  // Honeypot: a hidden "website" field real visitors never fill in.
  if (data.website) {
    return NextResponse.json({ ok: true });
  }

  try {
    await deliverEnquiry(data);
  } catch (error) {
    console.error("[enquiry] delivery failed", error);
    return NextResponse.json(
      { error: "We couldn't send that just now — please call us instead." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

/**
 * Single integration point for enquiry delivery. Wire up Resend, a CRM, or
 * any other endpoint here. Keep API keys as server-side environment
 * variables only (set them in Railway → Variables) — never in client code.
 * Until RESEND_API_KEY and ENQUIRY_TO_EMAIL are configured, enquiries are
 * logged server-side only so the form still works end-to-end.
 */
async function deliverEnquiry(data: EnquiryPayload) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.ENQUIRY_TO_EMAIL;

  if (!resendApiKey || !toEmail) {
    console.info("[enquiry] received (no delivery integration configured yet):", {
      name: data.name,
      email: data.email,
      eventType: data.eventType,
    });
    return;
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.ENQUIRY_FROM_EMAIL || "enquiries@klassmarquees.com",
      to: toEmail,
      reply_to: data.email,
      subject: `New enquiry: ${data.eventType} — ${data.name}`,
      text: formatEnquiryText(data),
    }),
  });

  if (!response.ok) {
    throw new Error(`Resend responded with ${response.status}`);
  }
}

function formatEnquiryText(data: EnquiryPayload): string {
  return [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Event type: ${data.eventType}`,
    data.eventDate ? `Event date: ${data.eventDate}` : null,
    data.venue ? `Venue / postcode: ${data.venue}` : null,
    data.guestCount ? `Estimated guests: ${data.guestCount}` : null,
    data.services.length ? `Services: ${data.services.join(", ")}` : null,
    `Preferred contact: ${data.preferredContact}`,
    data.vision ? `\nVision:\n${data.vision}` : null,
  ]
    .filter(Boolean)
    .join("\n");
}
