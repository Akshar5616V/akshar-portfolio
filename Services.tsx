import { useScrollReveal } from "../hooks/useScrollReveal";

const services = [
  {
    num: "01",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    title: "Business Websites",
    desc: "Professional websites for small businesses and startups that establish credibility and attract customers.",
  },
  {
    num: "02",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Creator Websites",
    desc: "Personal websites and portfolios for YouTubers, streamers and content creators who want a unique online presence.",
  },
  {
    num: "03",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    title: "Portfolio Websites",
    desc: "Modern portfolios for freelancers, designers, developers, photographers and artists to showcase their best work.",
  },
  {
    num: "04",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
    title: "Landing Pages",
    desc: "High-converting landing pages for products, services, campaigns and projects — focused on driving results.",
  },
];

export default function Services() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-dots opacity-40" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div ref={ref} className={`reveal ${isVisible ? "visible" : ""} text-center mb-16 lg:mb-20`}>
          <p className="text-xs font-semibold text-accent tracking-widest uppercase mb-4">What I Build</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Websites designed around your goals,{" "}
            <span className="text-gradient-subtle">not generic templates.</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            Every project starts with understanding what you need — then building exactly that.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <div
              key={s.num}
              className={`reveal reveal-delay-${i + 1} ${isVisible ? "visible" : ""} group relative rounded-2xl border border-slate-700/40 bg-dark-800/50 p-6 card-hover cursor-default`}
            >
              {/* Number */}
              <span className="absolute top-6 right-6 text-5xl font-bold text-slate-700/30 select-none font-mono tracking-tighter">
                {s.num}
              </span>

              {/* Icon */}
              <div className="relative z-10 mb-5 w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/15 to-violet-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300">
                {s.icon}
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-lg font-semibold text-white mb-2.5">
                {s.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-sm text-slate-400 leading-relaxed">
                {s.desc}
              </p>

              {/* Learn more */}
              <div className="relative z-10 mt-5 flex items-center gap-1.5 text-xs font-medium text-accent opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                Learn more
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-4-4l4 4-4 4" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
