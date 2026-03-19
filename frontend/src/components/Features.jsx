const features = [
  {
    icon: "🔍",
    title: "Smart Discovery",
    desc: "AI-powered recommendations that learn your taste and surface books you'll actually finish.",
    accent: "#e2b96f",
    bg: "#1a1a2e",
  },
  {
    icon: "📖",
    title: "Reading Tracker",
    desc: "Log your progress, set reading goals, and visualize your journey through every chapter.",
    accent: "#6db3f2",
    bg: "#0d2137",
  },
  {
    icon: "🗂️",
    title: "Personal Library",
    desc: "Curate shelves, tag your favorites, and build a collection that reflects who you are.",
    accent: "#c8934a",
    bg: "#2d1b00",
  },
  {
    icon: "✍️",
    title: "Notes & Highlights",
    desc: "Capture insights as you read. Your annotations stay synced across every device.",
    accent: "#a78bdf",
    bg: "#1e0f35",
  },
  {
    icon: "👥",
    title: "Book Clubs",
    desc: "Read together with friends or join a community of readers who share your genre.",
    accent: "#f2a65a",
    bg: "#1c1c1c",
  },
  {
    icon: "🎧",
    title: "Audio & Ebook",
    desc: "Switch seamlessly between audio and text. Your place is always saved.",
    accent: "#7dd3b0",
    bg: "#0a2420",
  },
  {
    icon: "📊",
    title: "Reading Stats",
    desc: "See your streaks, words read, and genres explored with beautiful yearly recaps.",
    accent: "#f9a8b0",
    bg: "#2a0d12",
  },
  {
    icon: "🌐",
    title: "Offline Access",
    desc: "Download your library and keep reading even when you're off the grid.",
    accent: "#d4c8b8",
    bg: "#2c2c2c",
  },
];

const FeatureCard = ({ icon, title, desc, accent, bg }) => (
  <div className="group relative flex flex-col gap-4 rounded-2xl border border-[#ede8e0] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] cursor-default overflow-hidden">
    {/* Hover wash */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"
      style={{ background: `radial-gradient(ellipse at top left, ${accent}12, transparent 70%)` }} />

    {/* Icon book spine */}
    <div
      className="w-11 h-14 rounded-[2px_4px_4px_2px] flex items-center justify-center text-xl relative flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
      style={{
        background: bg,
        boxShadow: "3px 4px 12px rgba(0,0,0,0.35), inset -2px 0 6px rgba(0,0,0,0.25)",
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-[2.5px] rounded-t-[2px]" style={{ background: accent }} />
      <div className="absolute left-[7px] top-0 bottom-0 w-px bg-white/5" />
      <span className="text-base">{icon}</span>
    </div>

    <div className="flex flex-col gap-1.5 relative">
      <h3 className="font-playfair font-bold text-[#1a1a2e] text-[17px] leading-snug">{title}</h3>
      <p className="font-dm font-light text-[#7a7165] text-[13.5px] leading-relaxed">{desc}</p>
    </div>

    {/* Bottom accent line on hover */}
    <div className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      style={{ background: `linear-gradient(to right, transparent, ${accent}, transparent)` }} />
  </div>
);

 function Features() {
  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.65s ease both; }
        .d1 { animation-delay: 0.05s; }
        .d2 { animation-delay: 0.18s; }
        .d3 { animation-delay: 0.30s; }
      `}</style>

      <section id="features" className="relative py-24 bg-[#FAF8F4] font-dm overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.09]"
          style={{
            backgroundImage: "radial-gradient(circle, #c4b49a 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none opacity-30"
          style={{ background: "radial-gradient(ellipse, #e8d5b0, transparent 70%)" }} />
        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6">
          <div className="text-center mb-14 flex flex-col items-center gap-4">

            <div className="fade-up d1 inline-flex items-center gap-2 bg-white border border-[#e8ddd0] rounded-full px-4 py-1.5 shadow-sm">
              <span className="text-[11px] font-medium text-[#666] uppercase tracking-[0.6px] font-dm">Why BookHub?</span>
            </div>

            <h2 className="fade-up d2 font-playfair font-black text-[#1a1a2e] text-4xl sm:text-5xl leading-[1.1] tracking-tight max-w-xl">
              Everything a reader{" "}
              <em className="not-italic" style={{
                background: "linear-gradient(130deg, #1a1a2e 0%, #7b5ea7 48%, #c8720f 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                needs.
              </em>
            </h2>

            <div className="fade-up d2 flex items-center gap-3 w-36">
              <div className="flex-1 h-px bg-[#d4c8b8]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#c4a87a]" />
              <div className="flex-1 h-px bg-[#d4c8b8]" />
            </div>

            <p className="fade-up d3 font-dm font-light text-[#7a7165] text-base sm:text-[17px] max-w-md leading-[1.8]">
              Built for book lovers — whether you devour novels or skim
              summaries, we've got your{" "}
              <span className="text-[#4a3f30] font-medium italic">whole shelf</span> covered.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
          <div className="mt-14 flex flex-col items-center gap-3">
            <div className="flex items-center gap-3 w-36">
              <div className="flex-1 h-px bg-[#d4c8b8]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#c4a87a]" />
              <div className="flex-1 h-px bg-[#d4c8b8]" />
            </div>
            <p className="font-dm font-light text-[12px] text-[#b5a898] tracking-wide">
              All features included · No credit card required
            </p>
          </div>

        </div>
      </section>
    </>
  );
}

export default Features;