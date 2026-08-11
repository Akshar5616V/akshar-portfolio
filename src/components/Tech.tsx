import { useScrollReveal } from "../hooks/useScrollReveal";

const technologies = [
  { name: "HTML", icon: "🟧" },
  { name: "CSS", icon: "🟦" },
  { name: "JavaScript", icon: "🟨" },
  { name: "React", icon: "🔵" },
  { name: "TypeScript", icon: "🔷" },
  { name: "Responsive Design", icon: "📱" },
  { name: "UI/UX", icon: "🎨" },
  { name: "Git", icon: "🔀" },
  { name: "Modern Web Dev", icon: "⚡" },
];

export default function Tech() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section className="relative py-20 lg:py-28 bg-dark-900/50">
      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <div ref={ref} className={`reveal ${isVisible ? "visible" : ""} text-center`}>
          <p className="text-xs font-semibold text-accent tracking-widest uppercase mb-4">Technologies</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-12">
            Tools & technologies I work with
          </h2>

          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, i) => (
              <div
                key={tech.name}
                className={`reveal reveal-delay-${Math.min(i + 1, 5)} ${isVisible ? "visible" : ""} group inline-flex items-center gap-2.5 rounded-xl border border-slate-700/40 bg-dark-800/50 px-5 py-3 card-hover cursor-default`}
              >
                <span className="text-lg">{tech.icon}</span>
                <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
