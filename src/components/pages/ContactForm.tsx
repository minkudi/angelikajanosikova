"use client";

import { useState, type FormEvent } from "react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/fr";

type FormCopy = Dictionary["contact"]["form"];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm({ locale, copy }: { locale: Locale; copy: FormCopy }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState(""); // honeypot anti-spam
  const [fieldErrors, setFieldErrors] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errors: string[] = [];
    if (!name.trim()) errors.push("name");
    if (!email.trim() || !EMAIL_RE.test(email.trim())) errors.push("email");
    if (message.trim().length < 10) errors.push("message");
    setFieldErrors(errors);
    if (errors.length) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), message: message.trim(), company, locale }),
      });
      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const err = (field: string) => fieldErrors.includes(field);

  return (
    <form onSubmit={onSubmit} noValidate className="card p-7 sm:p-8">
      {status === "success" && (
        <p className="mb-6 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
          {copy.success}
        </p>
      )}
      {status === "error" && (
        <p className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {copy.error}
        </p>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="label">
            {copy.name} <span className="text-accent">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={copy.namePlaceholder}
            autoComplete="name"
            aria-invalid={err("name")}
          />
          {err("name") && <p className="mt-1.5 text-xs text-red-600">{copy.required}</p>}
        </div>
        <div>
          <label htmlFor="contact-email" className="label">
            {copy.email} <span className="text-accent">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={copy.emailPlaceholder}
            autoComplete="email"
            aria-invalid={err("email")}
          />
          {err("email") && (
            <p className="mt-1.5 text-xs text-red-600">
              {email.trim() ? copy.invalidEmail : copy.required}
            </p>
          )}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="contact-message" className="label">
          {copy.message} <span className="text-accent">*</span>
        </label>
        <textarea
          id="contact-message"
          className="input min-h-36 resize-y"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={copy.messagePlaceholder}
          aria-invalid={err("message")}
        />
        {err("message") && <p className="mt-1.5 text-xs text-red-600">{copy.messageMin}</p>}
      </div>

      {/* Honeypot anti-spam : invisible pour les humains */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="contact-company">{copy.honeypot}</label>
        <input
          id="contact-company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary mt-6 w-full sm:w-auto" disabled={status === "sending"}>
        {status === "sending" ? copy.sending : copy.submit}
      </button>
    </form>
  );
}
