import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const faqs = [
  {
    q: "How long does a website take?",
    a: "Simple websites can often be completed quickly, while larger projects depend on the required features and content. I'll give you a clear timeline once I understand your project.",
  },
  {
    q: "Can you customize the design?",
    a: "Yes. Each website is adapted to the client's branding, colors, content and requirements. The goal is to create something that feels uniquely yours.",
  },
  {
    q: "Will the website work on mobile?",
    a: "Yes. Responsive design is included in every project. Your website will work beautifully on phones, tablets and desktops.",
  },
  {
    q: "Can I request changes?",
    a: "Yes. The project includes a review and refinement stage before final delivery to make sure you're happy with the result.",
  },
  {
    q: "Do you build custom websites?",
    a: "Yes. Custom requirements can be discussed before starting the project. Let me know what you need and I'll let you know what's possible.",
  },
];

export default function FAQ() {
  const { ref, isVisible } = useScrollReveal(0.1);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="relative py-24 lg:py-32 bg-dark-900/50">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="relative z-10 mx-auto max-w-3xl px-6">
        {/* Header */}
        <div ref={ref} className={`reveal ${isVisible ? "visible" : ""} text-center mb-16`}>
          <p className="text-xs font-semibold text-accent tracking-widest uppercase mb-4">FAQ</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Frequently{" "}
            <span className="text-gradient-subtle">asked questions.</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${Math.min(i + 1, 5)} ${isVisible ? "visible" : ""}`}
            >
              <div
                className={`rounded-2xl border transition-all duration-300 cursor-pointer ${
                  openIndex === i
                    ? "border-indigo-500/30 bg-dark-800/60"
                    : "border-slate-700/40 bg-dark-800/30 hover:border-slate-600/50"
                }`}
                onClick={() => toggle(i)}
              >
                <button className="w-full flex items-center justify-between px-6 py-5 text-left">
                  <span className="text-base font-medium text-white pr-4">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      openIndex === i ? "rotate-45" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i ? "max-h-60 pb-5" : "max-h-0"
                  }`}
                >
                  <p className="px-6 text-sm text-slate-400 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
