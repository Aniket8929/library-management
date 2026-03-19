const books = [
  {
    title: "The Midnight Library",
    author: "Matt Haig",
    genre: "Fiction",
    rating: 4.9,
    bg: "#1a1a2e",
    accent: "#e2b96f",
    pages: 304,
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    genre: "Sci-Fi",
    rating: 4.8,
    bg: "#2d1b00",
    accent: "#c8934a",
    pages: 688,
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-Help",
    rating: 4.9,
    bg: "#0d2137",
    accent: "#6db3f2",
    pages: 320,
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    genre: "History",
    rating: 4.7,
    bg: "#1c1c1c",
    accent: "#f2a65a",
    pages: 443,
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    rating: 4.8,
    bg: "#1e0f35",
    accent: "#a78bdf",
    pages: 208,
  },
  {
    title: "Educated",
    author: "Tara Westover",
    genre: "Memoir",
    rating: 4.9,
    bg: "#0a2420",
    accent: "#7dd3b0",
    pages: 334,
  },
];

const StarRating = ({ rating }) => (
  <div className="flex items-center gap-1">
    <span className="text-[#c4a87a] text-[10px]">★</span>
    <span className="text-[10px] font-medium text-[#7a7165]">{rating}</span>
  </div>
);

const BookCard = ({ title, author, genre, rating, bg, accent, pages }) => (
  <div className="group flex flex-col gap-3 cursor-pointer">
    {/* Book cover */}
    <div className="relative">
      <div
        className="relative w-full aspect-[2/3] rounded-[3px_8px_8px_3px] transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[6px_12px_32px_rgba(0,0,0,0.3)]"
        style={{
          background: bg,
          boxShadow:
            "4px 6px 18px rgba(0,0,0,0.3), inset -4px 0 10px rgba(0,0,0,0.25)",
        }}
      >
        {/* Top accent stripe */}
        <div
          className="absolute top-0 left-0 right-0 h-[3px] rounded-t-[3px_8px_0_0]"
          style={{ background: accent }}
        />
        {/* Spine groove */}
        <div className="absolute left-[12px] top-0 bottom-0 w-px bg-white/5" />
        {/* Book content mockup */}
        <div className="absolute inset-0 flex flex-col justify-between p-3 pt-4">
          <div className="flex flex-col gap-1.5">
            <div
              className="h-px w-8 rounded-full opacity-20"
              style={{ background: accent }}
            />
            <div
              className="h-px w-12 rounded-full opacity-15"
              style={{ background: accent }}
            />
          </div>
          <div className="flex flex-col gap-1.5 pb-1">
            <p
              className="text-[8px] font-bold uppercase tracking-[0.6px] leading-tight"
              style={{ color: accent }}
            >
              {title}
            </p>
            <p className="text-[6.5px] text-white/40 leading-tight">{author}</p>
            <div
              className="h-px w-full opacity-10 mt-0.5"
              style={{ background: accent }}
            />
            <p className="text-[5.5px] text-white/25 tracking-widest uppercase">
              {pages} pages
            </p>
          </div>
        </div>
        {/* Shine on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[3px_8px_8px_3px]"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Genre badge */}
      <div
        className="absolute -top-2 -right-2 text-[9px] font-medium px-2 py-0.5 rounded-full border opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0"
        style={{ background: bg, color: accent, borderColor: `${accent}55` }}
      >
        {genre}
      </div>
    </div>

    {/* Book info */}
    <div className="flex flex-col gap-1 px-0.5">
      <h3
        className="text-[13px] font-bold text-[#1a1a2e] leading-snug line-clamp-2 group-hover:text-[#4a3f30] transition-colors duration-200"
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        {title}
      </h3>
      <p className="text-[11px] text-[#9e9080] font-light truncate">{author}</p>
      <StarRating rating={rating} />
    </div>
  </div>
);
function BookShowcase() {
  return (
    <section id="books" className="relative py-24 bg-[#FAF8F4] overflow-hidden">
      {/* Dot texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.09]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #c4b49a 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Ambient blobs */}
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none opacity-30"
        style={{
          background: "radial-gradient(circle, #e8d5b0, transparent 70%)",
        }}
      />
      <div
        className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none opacity-25"
        style={{
          background: "radial-gradient(circle, #d4c8f0, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-12">
          <div className="flex flex-col gap-3">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-[#e8ddd0] rounded-full px-4 py-1.5 shadow-sm w-fit">
              <span className="text-[11px] font-medium text-[#666] uppercase tracking-[0.6px]">
                Showcase
              </span>
            </div>

            <h2
              className="font-black text-[#1a1a2e] text-4xl sm:text-5xl leading-[1.06] tracking-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Trending{" "}
              <em
                className="not-italic"
                style={{
                  background:
                    "linear-gradient(130deg, #1a1a2e 0%, #7b5ea7 48%, #c8720f 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Books.
              </em>
            </h2>

            {/* Ornament rule */}
            <div className="flex items-center gap-3 w-36">
              <div className="flex-1 h-px bg-[#d4c8b8]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#c4a87a]" />
              <div className="flex-1 h-px bg-[#d4c8b8]" />
            </div>
          </div>

          {/* View all */}
          <button className="self-start sm:self-auto text-[13px] font-medium text-[#4a3f30] border border-[#d4c8b8] bg-white px-5 py-2.5 rounded-full hover:bg-[#f5f0e8] hover:border-[#c4a87a] transition-all duration-200 whitespace-nowrap shadow-sm">
            View All Books →
          </button>
        </div>

        {/* Book grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 sm:gap-6">
          {books.map((book, i) => (
            <div
              key={book.title}
              className="opacity-0"
              style={{
                animation: `fadeUp 0.6s ease ${0.05 + i * 0.08}s both`,
              }}
            >
              <BookCard {...book} />
            </div>
          ))}
        </div>

        {/* Footer ornament */}
        <div className="mt-14 flex flex-col items-center gap-3">
          <div className="flex items-center gap-3 w-36">
            <div className="flex-1 h-px bg-[#d4c8b8]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#c4a87a]" />
            <div className="flex-1 h-px bg-[#d4c8b8]" />
          </div>
          <p className="text-[11px] text-[#b5a898] tracking-wide font-light">
            Updated weekly · 50,000+ titles available
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

export default BookShowcase;
