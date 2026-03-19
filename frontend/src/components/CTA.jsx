 function CTA() {
  return (
    <section className="relative bg-[#FAF8F4] overflow-hidden">
      <div  className="absolute inset-0 pointer-events-none opacity-[0.09]"
        style={{
          backgroundImage: "radial-gradient(circle, #c4b49a 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6">
        <div
          className="relative rounded-3xl px-8 sm:px-14 py-16 sm:py-20 text-center overflow-hidden"
          style={{
            background: "#1a1a2e",
            boxShadow: "0 32px 80px rgba(26,26,46,0.35), 0 8px 24px rgba(26,26,46,0.2)",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.06]"
            style={{
              backgroundImage: "radial-gradient(circle, #e2b96f 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full pointer-events-none opacity-20"
            style={{ background: "radial-gradient(circle, #7b5ea7, transparent 70%)" }} />
          <div className="absolute -bottom-12 -left-12 w-52 h-52 rounded-full pointer-events-none opacity-15"
            style={{ background: "radial-gradient(circle, #c8720f, transparent 70%)" }} />
          <div className="absolute top-8 left-[40%] w-32 h-32 rounded-full pointer-events-none opacity-10"
            style={{ background: "radial-gradient(circle, #e2b96f, transparent 70%)" }} />

          <div
            className="absolute top-0 left-0 right-0 h-[3px]"
            style={{ background: "linear-gradient(90deg, #c8720f, #7b5ea7, #e2b96f)" }}
          />

          <div className="absolute left-[52px] top-0 bottom-0 w-px bg-white/[0.04] pointer-events-none" />
          <div className="absolute right-[52px] top-0 bottom-0 w-px bg-white/[0.04] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center gap-6">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 border"
              style={{ background: "rgba(226,185,111,0.12)", borderColor: "rgba(226,185,111,0.3)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#e2b96f]" />
              <span className="text-[11px] font-medium text-[#e2b96f] uppercase tracking-[0.7px]">
                Free to Get Started
              </span>
            </div>

            {/* Headline */}
            <h2
              className="font-black text-white text-4xl sm:text-5xl lg:text-[56px] leading-[1.06] tracking-tight max-w-lg"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Start Your{" "}
              <em
                style={{
                  background: "linear-gradient(130deg, #e2b96f 0%, #c8934a 60%, #f2a65a 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Reading
              </em>
              <br />Journey Today.
            </h2>

            <p
              className="text-white/55 text-base sm:text-[17px] max-w-sm leading-[1.8] font-light"
            >
              Join over{" "}
              <span className="text-[#e2b96f] font-medium">120,000 readers</span>{" "}
              who track, discover, and fall in love with books every day.
            </p>           

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3 mt-2 w-full sm:w-auto">
              <button
                className="relative overflow-hidden w-full sm:w-auto text-[#1a1a2e] font-bold text-[15px] px-9 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(226,185,111,0.35)]"
                style={{
                  background: "linear-gradient(135deg, #e2b96f 0%, #c8934a 100%)",
                  fontFamily: "Georgia, serif",
                }}
              >
                <span className="relative z-10">Join Now — It's Free</span>
              </button>
              <button
                className="text-white/50 hover:text-white/80 text-[13px] font-light transition-colors duration-200 underline underline-offset-4 decoration-white/20 hover:decoration-white/50"
                style={{ fontFamily: "Georgia, serif" }}
              >
                See how it works →
              </button>
            </div>

            {/* Trust note */}
            <p className="text-white/25 text-[11px] tracking-wide font-light" style={{ fontFamily: "Georgia, serif" }}>
              No credit card required · Cancel anytime
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

export default CTA;