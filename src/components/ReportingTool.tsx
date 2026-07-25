"use client";

import { useState, useRef, useEffect } from "react";

const categories = [
  { id: "cyberbullying", icon: "😔", label: "Cyberbullying & Harassment", desc: "Bullying, threats, or harassment online" },
  { id: "predator", icon: "⚠️", label: "Online Predator / Grooming", desc: "Suspicious adults contacting you or a child" },
  { id: "exploitation", icon: "🔒", label: "Sexual Exploitation", desc: "Unwanted sexual content or exploitation" },
  { id: "sextortion", icon: "📸", label: "Sextortion / Image Abuse", desc: "Threats to share intimate images" },
  { id: "addiction", icon: "📱", label: "Digital Addiction", desc: "Compulsive internet or gaming use" },
  { id: "gambling", icon: "🎰", label: "Online Gambling", desc: "Underage gambling or betting addiction" },
  { id: "misinformation", icon: "📰", label: "Harmful Misinformation", desc: "False or dangerous content spreading" },
  { id: "privacy", icon: "🔐", label: "Privacy & Data Breach", desc: "Personal data exposed or stolen" },
  { id: "scam", icon: "💸", label: "Online Scam / Fraud", desc: "Financial scams or phishing attempts" },
  { id: "other", icon: "❓", label: "Other Online Safety Issue", desc: "Something else not listed above" },
];

type Step = "category" | "describe" | "result";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function ReportingTool({ open, onClose }: Props) {
  const [step, setStep] = useState<Step>("category");
  const [selected, setSelected] = useState<(typeof categories)[0] | null>(null);
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState("");
  const [error, setError] = useState("");
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") handleClose(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (aiResponse && resultRef.current) {
      resultRef.current.scrollTop = resultRef.current.scrollHeight;
    }
  }, [aiResponse]);

  const reset = () => {
    setStep("category");
    setSelected(null);
    setDescription("");
    setAiResponse("");
    setError("");
    setLoading(false);
  };

  const handleClose = () => { reset(); onClose(); };

  const handleSubmit = async () => {
    if (!selected) return;
    setLoading(true);
    setError("");
    setAiResponse("");
    setStep("result");

    try {
      const res = await fetch("/api/report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ category: selected.label, description }),
      });

      if (!res.ok) throw new Error("Request failed");
      if (!res.body) throw new Error("No stream");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buf = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buf += decoder.decode(value, { stream: true });
        const lines = buf.split("\n");
        buf = lines.pop() ?? "";
        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          const data = line.slice(6);
          if (data === "[DONE]") break;
          try {
            const parsed = JSON.parse(data);
            if (parsed.text) setAiResponse((p) => p + parsed.text);
          } catch { /* ignore parse errors */ }
        }
      }
    } catch {
      setError("Something went wrong. Please try again or call emergency services if you are in immediate danger.");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  const steps: Step[] = ["category", "describe", "result"];
  const stepLabels = { category: "Category", describe: "Details", result: "Guidance" };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6"
      role="dialog"
      aria-modal="true"
      aria-label="Anonymous online issue reporting tool"
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={handleClose} />

      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[92vh] flex flex-col overflow-hidden">

        {/* Header */}
        <div className="bg-[#00294B] px-6 py-5 flex items-start justify-between shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <svg className="w-5 h-5 text-[#61CE70] shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <h2 className="font-jakarta text-white font-bold text-lg">Anonymous Issue Report</h2>
            </div>
            <p className="font-inter text-white/50 text-xs">AI-powered guidance. Completely confidential. No personal data collected.</p>
          </div>
          <button
            onClick={handleClose}
            className="text-white/50 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors shrink-0 ml-4 mt-0.5"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Progress bar */}
        <div className="flex bg-[#001F3A] px-6 py-3 gap-2 shrink-0 items-center">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-colors font-inter ${
                  step === s
                    ? "bg-[#61CE70] text-[#00294B]"
                    : steps.indexOf(step) > i
                    ? "bg-[#61CE70]/40 text-white"
                    : "bg-white/10 text-white/30"
                }`}
              >
                {i + 1}
              </div>
              <span
                className={`font-inter text-xs transition-colors ${step === s ? "text-[#61CE70]" : "text-white/30"}`}
              >
                {stepLabels[s]}
              </span>
              {i < steps.length - 1 && <div className="w-6 h-px bg-white/10 mx-1" />}
            </div>
          ))}
        </div>

        {/* Scrollable content */}
        <div ref={resultRef} className="flex-1 overflow-y-auto px-6 py-6">

          {/* Step 1: Category selection */}
          {step === "category" && (
            <div>
              <p className="font-jakarta font-bold text-[#00294B] text-lg mb-1">What type of issue are you reporting?</p>
              <p className="font-inter text-gray-500 text-sm mb-5">
                Select the category that best describes your concern. Your report is completely anonymous.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelected(cat)}
                    className={`text-left rounded-xl p-4 border-2 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#61CE70] ${
                      selected?.id === cat.id
                        ? "border-[#61CE70] bg-[#F0FDF4]"
                        : "border-gray-100 bg-gray-50 hover:border-[#61CE70]/40 hover:bg-[#F0FDF4]/50"
                    }`}
                  >
                    <span className="text-xl block mb-1.5" aria-hidden="true">{cat.icon}</span>
                    <span className="font-jakarta font-bold text-[#00294B] text-sm block mb-0.5">{cat.label}</span>
                    <span className="font-inter text-gray-500 text-xs">{cat.desc}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Description */}
          {step === "describe" && selected && (
            <div>
              <button
                onClick={() => setStep("category")}
                className="flex items-center gap-1.5 font-inter text-xs text-[#61CE70] hover:underline mb-4"
              >
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                Change category
              </button>
              <div className="flex items-center gap-3 mb-5 p-3 bg-[#F0FDF4] rounded-xl border border-[#61CE70]/20">
                <span className="text-2xl" aria-hidden="true">{selected.icon}</span>
                <span className="font-jakarta font-bold text-[#00294B] text-sm">{selected.label}</span>
              </div>
              <p className="font-jakarta font-bold text-[#00294B] text-lg mb-1">Describe what happened</p>
              <p className="font-inter text-gray-500 text-sm mb-4">
                Share as much or as little as you are comfortable with. More detail means more personalised guidance.{" "}
                <strong className="text-[#00294B]">No personal information is stored.</strong>
              </p>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full rounded-xl border-2 border-gray-100 focus:border-[#61CE70] outline-none p-4 font-inter text-sm text-gray-700 resize-none min-h-[180px] placeholder:text-gray-300 transition-colors"
                placeholder="e.g. A classmate has been sending threatening messages to me via Instagram. It started two weeks ago and I don't know what to do..."
                aria-label="Describe your issue"
              />
              <p className="font-inter text-xs text-gray-400 mt-2">
                You may leave this blank to receive general guidance for this category.
              </p>
            </div>
          )}

          {/* Step 3: AI result */}
          {step === "result" && (
            <div>
              {loading && !aiResponse && (
                <div className="flex flex-col items-center py-10 gap-4">
                  <div className="relative w-14 h-14">
                    <div className="absolute inset-0 rounded-full border-4 border-[#61CE70]/20" />
                    <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#61CE70] animate-spin" />
                  </div>
                  <p className="font-inter text-gray-500 text-sm text-center max-w-xs">
                    Our AI is analysing your report and preparing personalised guidance...
                  </p>
                </div>
              )}

              {error && (
                <div className="bg-red-50 rounded-xl p-5 border border-red-100">
                  <p className="font-inter text-red-700 text-sm mb-2">{error}</p>
                  <p className="font-inter text-red-500 text-xs">
                    If you are in immediate danger, call <strong>112</strong> (Nigeria Emergency Services).
                  </p>
                </div>
              )}

              {aiResponse && (
                <>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-full bg-[#61CE70] flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-[#00294B]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-jakarta font-bold text-[#00294B] text-sm">Virtually Safe AI Assistant</p>
                      <p className="font-inter text-gray-400 text-xs">Personalised guidance based on your report</p>
                    </div>
                  </div>

                  <div className="bg-[#F9F9F9] rounded-xl p-5 font-inter text-gray-700 text-sm leading-relaxed whitespace-pre-wrap border border-gray-100">
                    {aiResponse}
                    {loading && (
                      <span className="inline-block w-1.5 h-4 bg-[#61CE70] animate-pulse ml-0.5 rounded-full align-middle" />
                    )}
                  </div>

                  <div className="mt-4 p-4 bg-[#00294B]/5 rounded-xl border border-[#00294B]/10">
                    <p className="font-inter text-xs text-gray-500 leading-relaxed">
                      <strong className="text-[#00294B]">Important:</strong> This is AI-generated guidance and does not replace professional or legal advice.
                      If you or someone is in immediate danger, call{" "}
                      <strong className="text-[#00294B]">112</strong> (Nigeria Emergency Services) immediately.
                    </p>
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between gap-3 shrink-0 bg-white">
          <div className="flex items-center gap-3">
            {step === "describe" && !loading && (
              <button
                onClick={() => setStep("category")}
                className="font-inter text-sm text-gray-400 hover:text-[#00294B] flex items-center gap-1.5 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                Back
              </button>
            )}
            {step === "result" && !loading && (
              <button
                onClick={reset}
                className="font-inter text-sm text-gray-400 hover:text-[#00294B] transition-colors"
              >
                Submit another report
              </button>
            )}
          </div>

          <div className="flex gap-3">
            {step === "category" && (
              <button
                onClick={() => selected && setStep("describe")}
                disabled={!selected}
                className="bg-[#61CE70] disabled:opacity-40 disabled:cursor-not-allowed text-[#00294B] font-bold font-inter text-sm px-6 py-2.5 rounded-full hover:bg-[#4db85b] transition-colors"
              >
                Continue
              </button>
            )}
            {step === "describe" && (
              <button
                onClick={handleSubmit}
                className="bg-[#61CE70] text-[#00294B] font-bold font-inter text-sm px-6 py-2.5 rounded-full hover:bg-[#4db85b] transition-colors"
              >
                Get AI Guidance
              </button>
            )}
            {step === "result" && !loading && (
              <button
                onClick={handleClose}
                className="bg-[#00294B] text-white font-bold font-inter text-sm px-6 py-2.5 rounded-full hover:bg-[#001F3A] transition-colors"
              >
                Close
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
