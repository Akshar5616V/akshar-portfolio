export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-950">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:py-40 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          {/* Left: Text */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent-subtle bg-dark-800/80 px-4 py-1.5 text-xs font-medium text-accent">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                </span>
                AVAILABLE FOR NEW PROJECTS
              </span>
            </div>

            {/* Headline */}
            <h1 className="animate-fade-up text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.08]">
              I Build{" "}
              <span className="text-gradient">Websites</span>
              {" "}That Make Businesses Look Better Online.
            </h1>

            {/* Supporting text */}
            <p className="animate-fade-up text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl">
              Modern, responsive websites for creators, freelancers, startups and small
              businesses — designed to look professional, work smoothly and turn visitors
              into customers.
            </p>

            {/* CTAs */}
            <div className="animate-fade-up flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:from-indigo-400 hover:to-violet-400 hover:shadow-xl hover:shadow-indigo-500/25 active:scale-95"
              >
                View My Work
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-4-4l4 4-4 4" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-dark-800/50 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-slate-500 hover:bg-dark-750 active:scale-95"
              >
                Start a Project
              </a>
            </div>

            {/* Trust statement */}
            <p className="animate-fade-up text-xs text-slate-500 tracking-widest uppercase pt-2">
              Responsive &nbsp;•&nbsp; Modern &nbsp;•&nbsp; Fast &nbsp;•&nbsp; Built With Care
            </p>
          </div>

          {/* Right: Visual */}
          <div className="animate-fade-in relative hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-[520px]">
              {/* Decorative glow behind the mockup */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-violet-500/10 to-transparent rounded-3xl blur-2xl" />

              {/* Main mockup card */}
              <div className="relative rounded-2xl border border-slate-700/50 bg-dark-800/80 backdrop-blur-sm overflow-hidden shadow-2xl shadow-black/40 animate-float">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-5 py-3.5 border-b border-slate-700/50 bg-dark-750/50">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="h-1.5 bg-slate-700/50 rounded-full w-2/5" />
                  </div>
                </div>

                {/* Mock content */}
                <div className="p-6 space-y-5">
                  {/* Dashboard-like mockup */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2 h-32 rounded-xl bg-gradient-to-br from-indigo-500/20 to-violet-500/10 border border-slate-700/30 p-4 flex flex-col justify-end">
                      <div className="h-2 bg-slate-500/30 rounded w-3/4 mb-2" />
                      <div className="h-2 bg-slate-600/20 rounded w-1/2" />
                    </div>
                    <div className="h-32 rounded-xl bg-dark-700/50 border border-slate-700/30 p-4 flex flex-col items-center justify-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-indigo-500/20" />
                      <div className="h-2 bg-slate-500/30 rounded w-12" />
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex-1 h-16 rounded-xl bg-dark-700/50 border border-slate-700/30 p-4 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-violet-500/20" />
                      <div className="space-y-1.5 flex-1">
                        <div className="h-2 bg-slate-500/30 rounded w-2/3" />
                        <div className="h-2 bg-slate-600/20 rounded w-1/2" />
                      </div>
                    </div>
                    <div className="flex-1 h-16 rounded-xl bg-dark-700/50 border border-slate-700/30 p-4 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-cyan-500/20" />
                      <div className="space-y-1.5 flex-1">
                        <div className="h-2 bg-slate-500/30 rounded w-2/3" />
                        <div className="h-2 bg-slate-600/20 rounded w-1/2" />
                      </div>
                    </div>
                  </div>

                  <div className="h-20 rounded-xl bg-dark-700/50 border border-slate-700/30 p-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/30 to-violet-500/20" />
                    <div className="space-y-2 flex-1">
                      <div className="h-2.5 bg-slate-400/40 rounded w-1/3" />
                      <div className="h-2 bg-slate-600/20 rounded w-full" />
                      <div className="h-2 bg-slate-600/20 rounded w-4/5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating smaller card */}
              <div className="absolute -bottom-6 -right-6 rounded-xl border border-slate-700/40 bg-dark-750/90 backdrop-blur-md p-4 shadow-xl shadow-black/30 w-44 animate-float" style={{ animationDelay: "3s" }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-7 h-7 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="h-2 bg-slate-400/40 rounded w-16" />
                </div>
                <div className="space-y-2">
                  <div className="h-1.5 bg-slate-500/30 rounded w-full" />
                  <div className="h-1.5 bg-slate-500/30 rounded w-3/4" />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile mockup (shown only on mobile) */}
          <div className="lg:hidden flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-violet-500/10 to-transparent rounded-2xl blur-2xl" />
              <div className="relative rounded-2xl border border-slate-700/50 bg-dark-800/80 backdrop-blur-sm overflow-hidden shadow-2xl shadow-black/40">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-700/50 bg-dark-750/50">
                  <div className="flex gap-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                  </div>
                </div>
                <div className="p-5 space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-24 rounded-xl bg-gradient-to-br from-indigo-500/20 to-violet-500/10 border border-slate-700/30" />
                    <div className="h-24 rounded-xl bg-dark-700/50 border border-slate-700/30" />
                  </div>
                  <div className="h-14 rounded-xl bg-dark-700/50 border border-slate-700/30" />
                  <div className="h-16 rounded-xl bg-dark-700/50 border border-slate-700/30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in">
        <div className="w-5 h-8 rounded-full border-2 border-slate-600 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-slate-500 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
