"use client";
import { useState } from "react";

interface Option { text: string; correct: boolean; }
interface QuizCardProps {
  icon: string;
  question: string;
  options: Option[];
  explanation: string;
  accent?: string;
}

export default function QuizCard({ icon, question, options, explanation, accent = "#8B5CF6" }: QuizCardProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const answered = selected !== null;
  const correct = answered && options[selected].correct;

  return (
    <div
      className={`rounded-2xl border-2 p-5 transition-all duration-300 ${
        answered
          ? correct
            ? "border-[#61CE70] bg-[#F0FDF4]"
            : "border-red-200 bg-red-50"
          : "border-purple-100 bg-gradient-to-br from-purple-50 to-violet-50 hover:shadow-md"
      }`}
    >
      <div className="flex items-center justify-between mb-3">
        <span
          className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full font-inter"
          style={{ color: "#8B5CF6", backgroundColor: "#8B5CF610" }}
        >
          Quiz
        </span>
        {answered && (
          <span className={`text-xs font-bold font-inter ${correct ? "text-[#61CE70]" : "text-red-500"}`}>
            {correct ? "✅ Correct!" : "❌ Not quite"}
          </span>
        )}
      </div>
      <p className="font-jakarta font-bold text-[#00294B] text-sm mb-4 leading-snug">
        {icon} {question}
      </p>
      <div className="space-y-2 mb-4">
        {options.map((opt, i) => (
          <button
            key={i}
            disabled={answered}
            onClick={() => setSelected(i)}
            className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-inter border transition-all duration-200 ${
              !answered
                ? "bg-white border-purple-100 text-gray-700 hover:border-purple-400 hover:bg-purple-50 hover:text-[#00294B]"
                : opt.correct
                ? "bg-[#61CE70] border-[#61CE70] text-[#00294B] font-bold"
                : selected === i
                ? "bg-red-100 border-red-200 text-red-700 line-through"
                : "bg-white/60 border-gray-100 text-gray-400"
            }`}
          >
            <span className="font-bold mr-2 text-xs">
              {String.fromCharCode(65 + i)}.
            </span>
            {opt.text}
          </button>
        ))}
      </div>
      {answered && (
        <div className="bg-white/80 rounded-xl px-4 py-3 text-sm font-inter text-gray-600 border border-gray-100 mb-3">
          💡 {explanation}
        </div>
      )}
      {answered && (
        <button
          onClick={() => setSelected(null)}
          className="text-xs text-purple-500 hover:text-purple-700 font-inter font-semibold underline underline-offset-2"
        >
          Try again
        </button>
      )}
    </div>
  );
}
