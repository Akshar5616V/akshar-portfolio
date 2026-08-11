import { useScrollReveal } from "../hooks/useScrollReveal";

export default function About() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <div ref={ref} className={`reveal ${isVisible ? "visible" : ""}`}>
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-accent tracking-widest uppercase mb-4">About Me</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              A developer who cares about{" "}
              <span className="text-gradient-subtle">the details.</span>
            </h2>
          </div>

          <div className="max-w-2xl mx-auto text-center space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm Akshar, a web developer focused on creating modern and useful websites.
              I enjoy turning ideas into clean digital experiences that are easy to use
              and look great across devices.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Whether you're a freelancer who needs a professional portfolio, a startup
              launching a product, or a small business looking to establish an online
              presence — I build websites designed around your specific needs and goals.
            </p>
          </div>

          {/* Subtle decorative element */}
          <div className="mt-16 flex justify-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-slate-700/40 bg-dark-800/40 px-5 py-2.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-400" />
              </span>
              <span className="text-sm text-slate-400">
                Currently available for new projects
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
