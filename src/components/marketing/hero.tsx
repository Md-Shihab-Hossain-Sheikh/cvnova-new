export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-indigo-100/70 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-violet-100/70 blur-3xl" />

      <div className="container-page relative grid items-center gap-14 py-20 md:grid-cols-2 md:py-28">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-indigo-700">
            <span className="h-2 w-2 rounded-full bg-indigo-500" />
            Your career, your next chapter
          </div>

          <h1 className="max-w-xl text-5xl font-extrabold leading-[1.08] tracking-tight text-gray-950 sm:text-6xl">
            Build a resume that
            <span className="gradient-text"> opens doors.</span>
          </h1>

          <p className="mt-7 max-w-lg text-lg leading-8 text-gray-600">
            Create a professional, ATS-friendly resume with modern templates and AI-powered writing assistance. Make your next career move with confidence.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="/builder" className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-7 py-4 font-bold text-white shadow-xl shadow-indigo-200 transition hover:-translate-y-0.5 hover:bg-indigo-700">
              Create my resume <span aria-hidden="true">→</span>
            </a>
            <a href="#templates" className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-7 py-4 font-bold text-gray-700 transition hover:border-indigo-200 hover:bg-indigo-50">
              Explore templates
            </a>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-500">
            <span className="flex items-center gap-2"><span className="text-green-600">✓</span> Easy to use</span>
            <span className="flex items-center gap-2"><span className="text-green-600">✓</span> Modern templates</span>
            <span className="flex items-center gap-2"><span className="text-green-600">✓</span> PDF-ready design</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-indigo-100 via-violet-100 to-blue-100 blur-2xl" />
          <div className="relative rotate-1 rounded-2xl border border-gray-200 bg-white p-4 shadow-2xl shadow-indigo-100/70 sm:p-6">
            <div className="mb-5 flex items-center justify-between border-b border-gray-100 pb-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <span className="text-xs font-semibold text-gray-400">RESUME PREVIEW</span>
            </div>

            <div className="grid grid-cols-[1fr_2fr] gap-5">
              <div className="rounded-lg bg-slate-900 p-4 text-white">
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-gradient-to-br from-indigo-300 to-violet-500" />
                <div className="mx-auto h-2 w-20 rounded bg-white/80" />
                <div className="mx-auto mt-2 h-1.5 w-14 rounded bg-white/30" />
                <div className="mt-8 text-[9px] font-bold tracking-widest text-indigo-300">CONTACT</div>
                <div className="mt-3 h-1 w-full rounded bg-white/50" />
                <div className="mt-2 h-1 w-4/5 rounded bg-white/30" />
                <div className="mt-2 h-1 w-5/6 rounded bg-white/30" />
                <div className="mt-7 text-[9px] font-bold tracking-widest text-indigo-300">SKILLS</div>
                <div className="mt-3 space-y-2">
                  <div className="h-1.5 w-full rounded bg-white/50" />
                  <div className="h-1.5 w-4/5 rounded bg-white/50" />
                  <div className="h-1.5 w-3/4 rounded bg-white/50" />
                </div>
              </div>

              <div className="py-2">
                <div className="h-4 w-3/4 rounded bg-gray-900" />
                <div className="mt-3 h-2 w-1/2 rounded bg-indigo-400" />
                <div className="mt-5 h-1.5 w-full rounded bg-gray-200" />
                <div className="mt-2 h-1.5 w-11/12 rounded bg-gray-200" />
                <div className="mt-2 h-1.5 w-4/5 rounded bg-gray-200" />
                <div className="mt-7 text-[10px] font-extrabold tracking-widest text-indigo-600">EXPERIENCE</div>
                <div className="mt-3 h-2 w-2/3 rounded bg-gray-700" />
                <div className="mt-2 h-1.5 w-1/2 rounded bg-gray-300" />
                <div className="mt-3 h-1.5 w-full rounded bg-gray-200" />
                <div className="mt-2 h-1.5 w-11/12 rounded bg-gray-200" />
                <div className="mt-2 h-1.5 w-4/5 rounded bg-gray-200" />
                <div className="mt-7 text-[10px] font-extrabold tracking-widest text-indigo-600">EDUCATION</div>
                <div className="mt-3 h-2 w-3/4 rounded bg-gray-700" />
                <div className="mt-2 h-1.5 w-1/2 rounded bg-gray-300" />
              </div>
            </div>
          </div>

          <div className="absolute -bottom-7 -left-7 rounded-2xl border border-gray-100 bg-white p-4 shadow-xl">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-xl text-green-600">✓</span>
              <div>
                <p className="text-sm font-bold text-gray-900">Looking professional</p>
                <p className="text-xs text-gray-500">Your resume is taking shape</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
