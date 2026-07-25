"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-xl font-bold font-nouvelr text-green-800 mb-2">Message Sent!</h3>
        <p className="text-green-700 font-lato">Thank you for reaching out. We&apos;ll get back to you as soon as possible.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold font-lato text-gray-700 mb-1">Name</label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your full name"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm font-lato focus:outline-none focus:border-[#00294B]"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold font-lato text-gray-700 mb-1">Email</label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="you@example.com"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm font-lato focus:outline-none focus:border-[#00294B]"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold font-lato text-gray-700 mb-1">Subject</label>
        <select
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm font-lato focus:outline-none focus:border-[#00294B] text-gray-700"
        >
          <option value="">Select a subject</option>
          <option>General Enquiry</option>
          <option>School Tour Request</option>
          <option>Partnership / Sponsorship</option>
          <option>Fellowship Application</option>
          <option>Media / Press</option>
          <option>Report a Concern</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-semibold font-lato text-gray-700 mb-1">Message</label>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Tell us how we can help..."
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm font-lato focus:outline-none focus:border-[#00294B] resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-[#00294B] text-white py-3 rounded-lg font-bold font-lato hover:bg-[#001F3A] transition-colors"
      >
        Send Message
      </button>
    </form>
  );
}
