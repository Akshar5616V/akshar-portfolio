import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const projects = [
  {
    id: 1,
    name: "Creator Portfolio",
    subtitle: "A modern personal website for a content creator.",
    tags: ["Portfolio", "Creator", "Responsive"],
    gradient: "from-rose-500/20 via-pink-500/10 to-orange-500/5",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    id: 2,
    name: "Nova Studio",
    subtitle: "A premium website for a creative agency.",
    tags: ["Business", "Branding", "Responsive"],
    gradient: "from-indigo-500/20 via-blue-500/10 to-cyan-500/5",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    id: 3,
    name: "PixelForge",
    subtitle: "A gaming-focused website for a gaming creator and team.",
    tags: ["Gaming", "Community", "Modern UI"],
    gradient: "from-emerald-500/20 via-teal-500/10 to-green-500/5",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: 4,
    name: "Freelance Pro",
    subtitle: "A clean portfolio website for a freelance designer.",
    tags: ["Portfolio", "Freelancer", "Minimal"],
    gradient: "from-violet-500/20 via-purple-500/10 to-fuchsia-500/5",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
  },
];

export default function Work() {
  const { ref, isVisible } = useScrollReveal(0.1);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="work" className="relative py-24 lg:py-32 bg-dark-900/50">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div ref={ref} className={`reveal ${isVisible ? "visible" : ""} text-center mb-16 lg:mb-20`}>
          <p className="text-xs font-semibold text-accent tracking-widest uppercase mb-4">Selected Work</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            A few examples of{" "}
            <span className="text-gradient-subtle">what I can create.</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            These are demo projects showcasing the kind of websites I build.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={`reveal reveal-delay-${i + 1} ${isVisible ? "visible" : ""}`}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="group relative rounded-2xl border border-slate-700/40 bg-dark-800/40 overflow-hidden card-hover cursor-pointer">
                {/* Preview Area */}
                <div className={`relative h-56 lg:h-64 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                  {/* Decorative grid */}
                  <div className="absolute inset-0 bg-grid opacity-30" />

                  {/* Mock browser frame */}
                  <div className={`relative w-[85%] max-w-sm rounded-xl border border-white/10 bg-dark-800/60 backdrop-blur-sm overflow-hidden shadow-xl transition-all duration-500 ${
                    hoveredId === project.id ? "scale-105 -translate-y-2" : ""
                  }`}>
                    {/* Browser chrome */}
                    <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/5 bg-dark-750/40">
                      <div className="w-2 h-2 rounded-full bg-red-500/50" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                      <div className="w-2 h-2 rounded-full bg-green-500/50" />
                      <div className="flex-1 ml-2">
                        <div className="h-1 bg-white/10 rounded-full w-1/3" />
                      </div>
                    </div>
                    {/* Mock content */}
                    <div className="p-4 space-y-3">
                      <div className="flex gap-3">
                        <div className="w-10 h-10 rounded-lg bg-white/10" />
                        <div className="flex-1 space-y-2 pt-0.5">
                          <div className="h-2 bg-white/15 rounded w-1/3" />
                          <div className="h-1.5 bg-white/8 rounded w-full" />
                          <div className="h-1.5 bg-white/8 rounded w-2/3" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="h-14 rounded-lg bg-white/8" />
                        <div className="h-14 rounded-lg bg-white/8" />
                      </div>
                    </div>
                  </div>

                  {/* Demo badge */}
                  <span className="absolute top-3 right-3 rounded-full bg-dark-900/80 backdrop-blur-sm border border-slate-700/50 px-2.5 py-1 text-[10px] font-medium text-slate-400 uppercase tracking-wider">
                    Demo Project
                  </span>
                </div>

                {/* Info */}
                <div className="p-5 lg:p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/15 to-violet-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{project.name}</h3>
                      <p className="text-sm text-slate-400 mt-0.5">{project.subtitle}</p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-dark-700/50 border border-slate-700/40 px-3 py-1 text-[11px] text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Button */}
                  <button className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-indigo-300 transition-colors duration-200 group/btn">
                    Live Preview
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${hoveredId === project.id ? "translate-x-1" : ""}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-4-4l4 4-4 4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
