import { useScrollReveal } from "../hooks/useScrollReveal";

const plans = [
  {
    name: "Starter",
    price: "₹999+",
    subtitle: "For simple one-page websites.",
    features: [
      "1-page website",
      "Responsive design",
      "Modern UI",
      "Contact section",
      "Basic animations",
    ],
    cta: "Get Started",
    href: "#contact",
    popular: false,
  },
  {
    name: "Professional",
    price: "₹1,999+",
    subtitle: "For creators, freelancers and small businesses.",
    features: [
      "Multi-section website",
      "Responsive design",
      "Custom styling",
      "Animations",
      "Portfolio/services sections",
      "Contact functionality",
    ],
    cta: "Most Popular",
    href: "#contact",
    popular: true,
  },
  {
    name: "Custom",
    price: "Let's Talk",
    subtitle: "For larger or more specific projects.",
    features: [
      "Custom requirements",
      "Advanced sections",
      "Custom functionality",
      "Personalized design",
    ],
    cta: "Discuss Project",
    href: "#contact",
    popular: false,
  },
];

export default function Pricing() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-dots opacity-30" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Header */}
        <div ref={ref} className={`reveal ${isVisible ? "visible" : ""} text-center mb-16 lg:mb-20`}>
          <p className="text-xs font-semibold text-accent tracking-widest uppercase mb-4">Pricing</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Simple{" "}
            <span className="text-gradient-subtle">starting plans.</span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto text-lg">
            Transparent pricing for straightforward projects. Custom work discussed individually.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5 lg:gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`reveal reveal-delay-${i + 1} ${isVisible ? "visible" : ""} relative rounded-2xl border p-6 lg:p-8 flex flex-col card-hover ${
                plan.popular
                  ? "border-indigo-500/40 bg-gradient-to-b from-indigo-500/5 to-dark-800/50 glow"
                  : "border-slate-700/40 bg-dark-800/30"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-1 text-[11px] font-semibold text-white uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-1">{plan.name}</h3>
                <p className="text-sm text-slate-400">{plan.subtitle}</p>
              </div>

              <div className="mb-6">
                <span className="text-3xl lg:text-4xl font-bold text-white tracking-tight">{plan.price}</span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-slate-400">
                    <svg className="w-4 h-4 mt-0.5 text-indigo-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={plan.href}
                className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 active:scale-95 ${
                  plan.popular
                    ? "bg-gradient-to-r from-indigo-500 to-violet-500 text-white hover:from-indigo-400 hover:to-violet-400 hover:shadow-lg hover:shadow-indigo-500/20"
                    : "border border-slate-700 bg-dark-750/50 text-white hover:border-slate-500 hover:bg-dark-700"
                }`}
              >
                {plan.cta}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-4-4l4 4-4 4" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-slate-500 mt-8">
          Final pricing depends on project requirements. All prices are starting estimates.
        </p>
      </div>
    </section>
  );
}
