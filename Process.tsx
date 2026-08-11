import { useScrollReveal } from "../hooks/useScrollReveal";

const steps = [
  {
    num: "01",
    title: "Tell Me Your Idea",
    desc: "Share what your website needs to accomplish — your goals, audience and vision for the project.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Plan & Design",
    desc: "I create the structure, visual direction and user experience — making sure everything flows naturally.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Build",
    desc: "I turn the design into a responsive, working website — clean code, smooth interactions and attention to detail.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Launch",
    desc: "We review, refine and prepare the website for launch — making sure everything is polished and ready.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
];

export default function Process() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="process" className="relative py-24 lg:py-32 bg-dark-900/50">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div ref={ref} className={`reveal ${isVisible ? "visible" : ""} text-center mb-16 lg:mb-20`}>
          <p className="text-xs font-semibold text-accent tracking-widest uppercase mb-4">How It Works</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Simple from{" "}
            <span className="text-gradient-subtle">start to finish.</span>
          </h2>
        </div>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden lg:block">
          <div className="relative grid grid-cols-4 gap-6">
            {/* Connecting line */}
            <div className="absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-indigo-500/40 via-violet-500/40 to-indigo-500/40" />

            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`reveal reveal-delay-${i + 1} ${isVisible ? "visible" : ""} relative text-center group`}
              >
                {/* Number circle */}
                <div className="relative z-10 w-20 h-20 rounded-2xl bg-dark-800 border border-slate-700/40 flex items-center justify-center mx-auto mb-6 group-hover:border-indigo-500/30 group-hover:bg-dark-750 transition-all duration-300 card-hover">
                  <span className="text-2xl font-bold text-white font-mono">{step.num}</span>
                </div>

                {/* Icon */}
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/15 to-violet-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mx-auto mb-4">
                  {step.icon}
                </div>

                {/* Title & Desc */}
                <h3 className="text-base font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed px-2">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet: Vertical Timeline */}
        <div className="lg:hidden relative space-y-0">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`reveal reveal-delay-${i + 1} ${isVisible ? "visible" : ""} relative flex gap-5 pb-10 last:pb-0 group`}
            >
              {/* Vertical line */}
              {i < steps.length - 1 && (
                <div className="absolute top-16 left-5 bottom-0 w-px bg-gradient-to-b from-indigo-500/40 via-violet-500/40 to-transparent" />
              )}

              {/* Number circle */}
              <div className="relative z-10 w-10 h-10 rounded-xl bg-dark-800 border border-slate-700/40 flex items-center justify-center shrink-0 group-hover:border-indigo-500/30 transition-all duration-300">
                <span className="text-sm font-bold text-white font-mono">{step.num}</span>
              </div>

              {/* Content */}
              <div className="pt-1">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500/15 to-violet-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-3">
                  {step.icon}
                </div>
                <h3 className="text-base font-semibold text-white mb-1.5">{step.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
