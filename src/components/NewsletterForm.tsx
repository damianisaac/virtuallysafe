"use client";

import { useState } from "react";

interface NewsletterFormProps {
  dark?: boolean;
}

export default function NewsletterForm({ dark = false }: NewsletterFormProps) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <p className={`text-sm font-lato ${dark ? "text-[#61CE70]" : "text-green-700"}`}>
        ✓ Thanks for subscribing! We&apos;ll be in touch.
      </p>
    );
  }

  return (
    <form
      className="flex gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <input
        type="email"
        required
        placeholder="Your email address"
        className={
          dark
            ? "flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-[#999] text-sm focus:outline-none focus:border-[#61CE70]"
            : "flex-1 border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 text-sm focus:outline-none focus:border-[#00294B]"
        }
      />
      <button
        type="submit"
        className={
          dark
            ? "bg-[#61CE70] text-[#00294B] px-5 py-2.5 rounded-lg font-bold font-lato text-sm hover:bg-[#4db85b] transition-colors whitespace-nowrap"
            : "bg-[#00294B] text-white px-5 py-2.5 rounded-lg font-bold font-lato text-sm hover:bg-[#001F3A] transition-colors whitespace-nowrap"
        }
      >
        Subscribe
      </button>
    </form>
  );
}
