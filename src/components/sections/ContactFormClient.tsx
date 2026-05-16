"use client";

import { FormEvent, useState } from "react";

type Surface = "navy" | "light";

export function ContactFormClient({ surface = "navy" }: { surface?: Surface }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const isNavy = surface === "navy";

  if (submitted) {
    return (
      <div
        className={
          isNavy
            ? "rounded-2xl border border-white/15 bg-white/10 p-8 text-center backdrop-blur-sm"
            : "rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg-light)] p-8 text-center"
        }
      >
        <p
          className={`text-lg font-semibold ${isNavy ? "" : "text-[color:var(--primary)]"}`}
        >
          Thanks — your message is noted.
        </p>
        <p
          className={`mt-2 text-sm ${isNavy ? "text-white/80" : "text-[color:var(--text-secondary)]"}`}
        >
          For an immediate reply, WhatsApp is fastest while email routing is set
          up.
        </p>
      </div>
    );
  }

  const labelClass = isNavy
    ? "text-white"
    : "text-[color:var(--text-primary)]";

  const fieldClass = isNavy
    ? "border-white/15 bg-white/95"
    : "border-[color:var(--border)] bg-white";

  const formShell = isNavy
    ? "border-white/15 bg-white/5 backdrop-blur-sm"
    : "border-[color:var(--border)] bg-[color:var(--bg-light)]";

  return (
    <form
      onSubmit={handleSubmit}
      className={`space-y-5 rounded-2xl border p-8 ${formShell}`}
    >
      <div>
        <label className={`block text-sm font-semibold ${labelClass}`} htmlFor="name">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`mt-2 w-full rounded-xl border px-4 py-3 text-[color:var(--text-primary)] outline-none ring-[color:var(--accent)] focus-visible:ring-2 ${fieldClass}`}
        />
      </div>
      <div>
        <label className={`block text-sm font-semibold ${labelClass}`} htmlFor="phone">
          Phone / WhatsApp
        </label>
        <input
          id="phone"
          name="phone"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={`mt-2 w-full rounded-xl border px-4 py-3 text-[color:var(--text-primary)] outline-none ring-[color:var(--accent)] focus-visible:ring-2 ${fieldClass}`}
        />
      </div>
      <div>
        <label className={`block text-sm font-semibold ${labelClass}`} htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`mt-2 w-full rounded-xl border px-4 py-3 text-[color:var(--text-primary)] outline-none ring-[color:var(--accent)] focus-visible:ring-2 ${fieldClass}`}
        />
      </div>
      <div>
        <label className={`block text-sm font-semibold ${labelClass}`} htmlFor="job">
          Job description
        </label>
        <textarea
          id="job"
          name="job"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`mt-2 w-full resize-y rounded-xl border px-4 py-3 text-[color:var(--text-primary)] outline-none ring-[color:var(--accent)] focus-visible:ring-2 ${fieldClass}`}
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-[color:var(--accent)] px-6 py-3.5 text-base font-semibold text-[color:var(--text-primary)] transition hover:bg-[color:var(--accent-hover)]"
      >
        Submit request
      </button>
    </form>
  );
}
