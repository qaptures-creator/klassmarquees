"use client";

import { useId, useRef, useState, type FormEvent } from "react";
import { cn } from "@/lib/utils";
import { primaryPhone } from "@/config/site";

const EVENT_TYPES = ["Wedding", "Private Celebration", "Corporate Event", "Other"];
const GUEST_COUNTS = ["Under 50", "50–100", "100–150", "150–250", "250+", "Not sure yet"];
const SERVICES = [
  "Marquee / Structure",
  "Draping & Interiors",
  "Lighting",
  "Furniture",
  "Bespoke Theming",
  "Not sure yet — advise me",
];
const CONTACT_METHODS = ["Either", "Phone", "Email"];

interface FormState {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  venue: string;
  guestCount: string;
  services: string[];
  vision: string;
  preferredContact: string;
  consent: boolean;
  website: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  eventType: "",
  eventDate: "",
  venue: "",
  guestCount: "",
  services: [],
  vision: "",
  preferredContact: "Either",
  consent: false,
  website: "",
};

type Errors = Partial<Record<"name" | "email" | "phone" | "eventType" | "consent", string>>;

function validate(form: FormState): Errors {
  const errors: Errors = {};
  if (!form.name.trim()) errors.name = "Please enter your full name.";
  if (!form.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!form.phone.trim()) errors.phone = "Please enter a telephone number.";
  if (!form.eventType) errors.eventType = "Please select an event type.";
  if (!form.consent) errors.consent = "Please confirm you're happy for us to be in touch.";
  return errors;
}

const inputClasses =
  "w-full min-h-[44px] border-0 border-b border-ivory/25 bg-transparent px-0 py-3 text-base text-ivory placeholder:text-ivory/35 transition-colors focus:border-accent focus:outline-none";
const labelClasses = "text-sm font-semibold text-ivory/80";

export default function EnquiryForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const formTitleId = useId();
  const firstErrorRef = useRef<HTMLDivElement>(null);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function toggleService(service: string) {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      requestAnimationFrame(() => firstErrorRef.current?.scrollIntoView({ block: "center", behavior: "smooth" }));
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-accent/30 bg-elevated/70 px-8 py-14 text-center sm:px-14">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">Enquiry Received</p>
        <h3 className="mt-5 font-serif text-h2 font-medium text-ivory text-balance">
          Thank you — we&rsquo;ve received your enquiry.
        </h3>
        <p className="mx-auto mt-5 max-w-md text-ivory/70">
          A member of our team will be in touch personally. If your event is
          time-sensitive, please call us directly on{" "}
          <a href={`tel:${primaryPhone.tel}`} className="font-semibold text-accent hover:underline">
            {primaryPhone.display}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => {
            setForm(initialState);
            setStatus("idle");
          }}
          className="mt-8 min-h-[44px] text-sm font-semibold uppercase tracking-[0.12em] text-ivory/70 underline decoration-ivory/30 underline-offset-4 transition-colors hover:text-accent"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-labelledby={formTitleId} className="space-y-10">
      <h2 id={formTitleId} className="sr-only">
        Event enquiry form
      </h2>

      {status === "error" && (
        <div role="alert" className="border border-accent/40 bg-accent/10 px-5 py-4 text-sm text-ivory">
          Something went wrong sending your enquiry — please try again, or call us
          directly on{" "}
          <a href={`tel:${primaryPhone.tel}`} className="font-semibold underline">
            {primaryPhone.display}
          </a>
          .
        </div>
      )}

      {/* Honeypot — hidden from real visitors, left blank */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Leave this field blank</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(e) => update("website", e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <Field
          id="name"
          label="Full name"
          required
          error={errors.name}
          firstErrorRef={errors.name ? firstErrorRef : undefined}
        >
          <input
            id="name"
            type="text"
            autoComplete="name"
            className={inputClasses}
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
        </Field>

        <Field id="email" label="Email" required error={errors.email}>
          <input
            id="email"
            type="email"
            autoComplete="email"
            className={inputClasses}
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
        </Field>

        <Field id="phone" label="Telephone" required error={errors.phone}>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            className={inputClasses}
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
        </Field>

        <Field id="eventType" label="Event type" required error={errors.eventType}>
          <select
            id="eventType"
            className={cn(inputClasses, !form.eventType && "text-ivory/35")}
            value={form.eventType}
            onChange={(e) => update("eventType", e.target.value)}
            aria-invalid={!!errors.eventType}
            aria-describedby={errors.eventType ? "eventType-error" : undefined}
          >
            <option value="">Select an option</option>
            {EVENT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>

        <Field id="eventDate" label="Event date (if known)">
          <input
            id="eventDate"
            type="date"
            className={inputClasses}
            value={form.eventDate}
            onChange={(e) => update("eventDate", e.target.value)}
          />
        </Field>

        <Field id="venue" label="Venue or postcode">
          <input
            id="venue"
            type="text"
            className={inputClasses}
            value={form.venue}
            onChange={(e) => update("venue", e.target.value)}
          />
        </Field>

        <Field id="guestCount" label="Estimated guest count">
          <select
            id="guestCount"
            className={cn(inputClasses, !form.guestCount && "text-ivory/35")}
            value={form.guestCount}
            onChange={(e) => update("guestCount", e.target.value)}
          >
            <option value="">Select an option</option>
            {GUEST_COUNTS.map((count) => (
              <option key={count} value={count}>
                {count}
              </option>
            ))}
          </select>
        </Field>

        <fieldset>
          <legend className={labelClasses}>Preferred contact method</legend>
          <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
            {CONTACT_METHODS.map((method) => (
              <label key={method} className="flex min-h-[44px] items-center gap-2 text-sm text-ivory/80">
                <input
                  type="radio"
                  name="preferredContact"
                  value={method}
                  checked={form.preferredContact === method}
                  onChange={() => update("preferredContact", method)}
                  className="h-4 w-4 accent-accent"
                />
                {method}
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      <fieldset>
        <legend className={labelClasses}>Services required</legend>
        <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
          {SERVICES.map((service) => (
            <label key={service} className="flex min-h-[44px] items-center gap-3 text-sm text-ivory/80">
              <input
                type="checkbox"
                checked={form.services.includes(service)}
                onChange={() => toggleService(service)}
                className="h-4 w-4 accent-accent"
              />
              {service}
            </label>
          ))}
        </div>
      </fieldset>

      <Field id="vision" label="Tell us about your vision">
        <textarea
          id="vision"
          rows={5}
          placeholder="Your venue, the atmosphere you're picturing, anything that matters to you about the day."
          className={cn(inputClasses, "resize-y")}
          value={form.vision}
          onChange={(e) => update("vision", e.target.value)}
        />
      </Field>

      <fieldset>
        <label className="flex items-start gap-3 text-sm text-ivory/75">
          <input
            type="checkbox"
            checked={form.consent}
            onChange={(e) => update("consent", e.target.checked)}
            aria-invalid={!!errors.consent}
            aria-describedby={errors.consent ? "consent-error" : undefined}
            className="mt-0.5 h-4 w-4 shrink-0 accent-accent"
          />
          <span>
            I&rsquo;m happy for Klass Marquees to contact me about my enquiry, in
            line with the{" "}
            <a href="/privacy" className="underline hover:text-accent">
              privacy policy
            </a>
            .
          </span>
        </label>
        {errors.consent && (
          <p id="consent-error" className="mt-2 text-sm text-accent">
            {errors.consent}
          </p>
        )}
      </fieldset>

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex min-h-[44px] w-full items-center justify-center bg-accent-deep px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-ivory transition-colors duration-300 hover:bg-accent disabled:cursor-wait disabled:opacity-70 sm:w-auto"
      >
        {status === "loading" ? "Sending…" : "Send Enquiry"}
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  required,
  error,
  children,
  firstErrorRef,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
  firstErrorRef?: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div ref={firstErrorRef}>
      <label htmlFor={id} className={labelClasses}>
        {label}
        {required && <span className="ml-1 text-accent">*</span>}
      </label>
      <div className="mt-2">{children}</div>
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm text-accent">
          {error}
        </p>
      )}
    </div>
  );
}
