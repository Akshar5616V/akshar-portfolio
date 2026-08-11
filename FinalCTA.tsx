import { useScrollReveal } from "../hooks/useScrollReveal";

export default function FinalCTA() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-dark-950">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-indigo-500/10 via-violet-500/10 to-purple-500/5 rounded-full blur-[100px] animate-pulse-glow" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <div ref={ref} className={`reveal ${isVisible ? "visible" : ""} space-y-8`}>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Have an idea for{" "}
            <span className="text-gradient">a website?</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            Let's turn it into something people remember.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:from-indigo-400 hover:to-violet-400 hover:shadow-xl hover:shadow-indigo-500/25 active:scale-95"
            >
              Start Your Project
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-4-4l4 4-4 4" />
              </svg>
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-600 bg-dark-800/50 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:border-slate-400 active:scale-95"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
