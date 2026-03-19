import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const stats = [
  { value: "50K+", label: "Books Available" },
  { value: "120K", label: "Active Readers" },
  { value: "4.9★", label: "Avg Rating" },
  { value: "Free", label: "To Start" },
];

const floatingBooks = [
  {
    title: "The Midnight Library",
    author: "Matt Haig",
    bg: "#1a1a2e",
    accent: "#e2b96f",
    position: "top-[12%] left-[3%]",
    rotate: "-rotate-6",
    delay: "delay-0",
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    bg: "#2d1b00",
    accent: "#c8934a",
    position: "top-[58%] left-[1.5%]",
    rotate: "rotate-6",
    delay: "delay-300",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    bg: "#0d2137",
    accent: "#6db3f2",
    position: "top-[10%] right-[3%]",
    rotate: "rotate-[9deg]",
    delay: "delay-150",
  },
  {
    title: "Sapiens",
    author: "Yuval N. Harari",
    bg: "#1c1c1c",
    accent: "#f2a65a",
    position: "top-[62%] right-[2%]",
    rotate: "-rotate-[5deg]",
    delay: "delay-500",
  },
];

const BookSpine = ({ title, author, bg, accent, position, rotate, delay }) => (
  <div
    className={`absolute ${position} ${rotate} animate-bounce ${delay} hidden lg:block`}
    style={{ animationDuration: "5s", animationTimingFunction: "ease-in-out" }}
  >
    <div
      className="w-16 h-24 flex flex-col justify-end p-2 relative overflow-hidden cursor-default transition-transform duration-300 hover:scale-110"
      style={{
        background: bg,
        boxShadow:
          "4px 6px 20px rgba(0,0,0,0.4), inset -3px 0 8px rgba(0,0,0,0.3)",
        borderRadius: "2px 5px 5px 2px",
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{ background: accent }}
      />
      <div className="absolute left-[10px] top-0 bottom-0 w-px bg-white/5" />
      <p
        className="text-[6px] font-bold uppercase tracking-wide leading-tight mb-0.5"
        style={{ color: accent }}
      >
        {title}
      </p>
      <p className="text-[5.5px] text-white/40 leading-tight">{author}</p>
    </div>
  </div>
);

function Hero() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500&display=swap');
        .font-playfair { font-family: 'Playfair Display', Georgia, serif; }
        .font-dm       { font-family: 'DM Sans', sans-serif; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }

        .fade-up { animation: fadeUp 0.65s ease both; }
        .d1 { animation-delay: 0.08s; }
        .d2 { animation-delay: 0.22s; }
        .d3 { animation-delay: 0.36s; }
        .d4 { animation-delay: 0.50s; }
        .d5 { animation-delay: 0.64s; }
        .d6 { animation-delay: 0.78s; }

        .shimmer-btn::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.14), transparent);
          background-size: 200% 100%;
          animation: shimmer 2.5s linear infinite;
        }

        .gradient-heading {
          background: linear-gradient(130deg, #1a1a2e 0%, #7b5ea7 48%, #c8720f 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FAF8F4]">
        {" "}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.11]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #c4b49a 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div
          className="absolute -top-20 -right-16 w-[420px] h-[420px] rounded-full pointer-events-none opacity-50"
          style={{
            background: "radial-gradient(circle, #e8d5b0, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-20 -left-16 w-[360px] h-[360px] rounded-full pointer-events-none opacity-40"
          style={{
            background: "radial-gradient(circle, #d4c8f0, transparent 70%)",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[200px] rounded-full pointer-events-none opacity-35"
          style={{
            background: "radial-gradient(ellipse, #f5e6cc, transparent 70%)",
          }}
        />
        {floatingBooks.map((b) => (
          <BookSpine key={b.title} {...b} />
        ))}
        <div
          className="absolute top-[8%] left-1/2 -translate-x-1/2 w-px h-12 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent, #c4b49a, transparent)",
          }}
        />
        <div
          className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-px h-12 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent, #c4b49a, transparent)",
          }}
        />
        <div className="relative z-10 flex flex-col items-center text-center gap-6 px-5 py-20 max-w-3xl mx-auto">
          <div className="fade-up d1 inline-flex items-center gap-2 bg-white border border-[#e8ddd0] rounded-full pl-2 pr-4 py-1.5 shadow-sm">
            <span className="w-6 h-6 rounded-full bg-[#1a1a2e] flex items-center justify-center text-[11px]">
              📚
            </span>
            <span className="text-[11px] font-medium text-[#666] uppercase tracking-[0.6px] font-dm">
              Smart Digital Library
            </span>
          </div>
          ={" "}
          <h1 className="fade-up d2 font-playfair font-black text-[#1a1a2e] leading-[1.06] tracking-tight text-5xl sm:text-6xl lg:text-[76px]">
            Read Smarter,
            <br />
            <em className="gradient-heading not-italic">Not Harder.</em>
          </h1>
          <div className="fade-up d3 flex items-center gap-3 w-36">
            <div className="flex-1 h-px bg-[#d4c8b8]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#c4a87a]" />
            <div className="flex-1 h-px bg-[#d4c8b8]" />
          </div>
          <p className="fade-up d3 font-dm font-light text-[#7a7165] text-base sm:text-lg max-w-md leading-[1.82]">
            Discover thousands of books, track your reading journey, and build a
            personal library that feels{" "}
            <span className="text-[#4a3f30] font-medium italic">
              entirely your own.
            </span>
          </p>
          <div className="fade-up d4 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Link to="/auth">
              {" "}
              <Button className="shimmer-btn relative overflow-hidden bg-[#1a1a2e] text-white font-dm font-medium text-sm sm:text-[15px] px-7 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(26,26,46,0.28)] w-full sm:w-auto">
                Get Started — It's Free →
              </Button>
            </Link>
            <Link to="/explore-book">
              {" "}
              <Button className="text-[#333] text-sm sm:text-[15px] border border-[#ccc] px-7 py-3.5 rounded-full bg-transparent transition-all duration-200 hover:border-[#999] hover:bg-black/[0.03] hover:-translate-y-0.5 w-full sm:w-auto">
                Browse the Collection
              </Button>
            </Link>
          </div>
          <div className="fade-up d5 flex flex-wrap justify-center items-stretch bg-white border border-[#ede8e0] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] divide-x divide-[#ede8e0]">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="flex flex-col items-center px-5 sm:px-8 py-4"
              >
                <span className="font-playfair font-bold text-[#1a1a2e] text-2xl sm:text-[28px] leading-none">
                  {value}
                </span>
                <span className="font-dm text-[10px] text-[#9e9080] uppercase tracking-[0.7px] font-medium mt-1.5">
                  {label}
                </span>
              </div>
            ))}
          </div>
          <p className="fade-up d6 font-dm font-light text-[11px] text-[#b5a898] tracking-wide">
            Trusted by 120,000 readers in 84 countries · No credit card required
          </p>
        </div>
      </section>
    </>
  );
}

export default Hero;
