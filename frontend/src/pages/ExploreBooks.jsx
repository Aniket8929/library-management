import { useState, useMemo } from "react";

const ALL_BOOKS = [
  { title: "The Midnight Library",      author: "Matt Haig",           genre: "Fiction",    rating: 4.9, pages: 304, year: 2020, bg: "#1a1a2e", accent: "#e2b96f" },
  { title: "Dune",                      author: "Frank Herbert",        genre: "Sci-Fi",     rating: 4.8, pages: 688, year: 1965, bg: "#2d1b00", accent: "#c8934a" },
  { title: "Atomic Habits",             author: "James Clear",          genre: "Self-Help",  rating: 4.9, pages: 320, year: 2018, bg: "#0d2137", accent: "#6db3f2" },
  { title: "Sapiens",                   author: "Yuval Noah Harari",    genre: "History",    rating: 4.7, pages: 443, year: 2011, bg: "#1c1c1c", accent: "#f2a65a" },
  { title: "The Alchemist",             author: "Paulo Coelho",         genre: "Fiction",    rating: 4.8, pages: 208, year: 1988, bg: "#1e0f35", accent: "#a78bdf" },
  { title: "Educated",                  author: "Tara Westover",        genre: "Memoir",     rating: 4.9, pages: 334, year: 2018, bg: "#0a2420", accent: "#7dd3b0" },
  { title: "Project Hail Mary",         author: "Andy Weir",            genre: "Sci-Fi",     rating: 4.9, pages: 476, year: 2021, bg: "#0c1a2e", accent: "#93c5fd" },
  { title: "The Psychology of Money",   author: "Morgan Housel",        genre: "Finance",    rating: 4.8, pages: 256, year: 2020, bg: "#1a2e1a", accent: "#86efac" },
  { title: "Thinking, Fast and Slow",   author: "Daniel Kahneman",      genre: "Psychology", rating: 4.6, pages: 499, year: 2011, bg: "#2e1a0e", accent: "#fdba74" },
  { title: "1984",                      author: "George Orwell",        genre: "Fiction",    rating: 4.9, pages: 328, year: 1949, bg: "#1a0e0e", accent: "#fca5a5" },
  { title: "The Great Gatsby",          author: "F. Scott Fitzgerald",  genre: "Classic",    rating: 4.5, pages: 180, year: 1925, bg: "#1a1a0a", accent: "#fde68a" },
  { title: "Brave New World",           author: "Aldous Huxley",        genre: "Sci-Fi",     rating: 4.6, pages: 311, year: 1932, bg: "#0e1a2e", accent: "#a5b4fc" },
  { title: "Man's Search for Meaning",  author: "Viktor Frankl",        genre: "Psychology", rating: 4.9, pages: 165, year: 1946, bg: "#2e2e1a", accent: "#d9f99d" },
  { title: "The Body",                  author: "Bill Bryson",          genre: "Science",    rating: 4.7, pages: 464, year: 2019, bg: "#1a2e2e", accent: "#99f6e4" },
  { title: "Becoming",                  author: "Michelle Obama",       genre: "Memoir",     rating: 4.8, pages: 448, year: 2018, bg: "#2e1a2e", accent: "#f0abfc" },
  { title: "The Subtle Art of Not Giving a F*ck", author: "Mark Manson", genre: "Self-Help", rating: 4.5, pages: 224, year: 2016, bg: "#2e1a00", accent: "#fb923c" },
  { title: "Shoe Dog",                  author: "Phil Knight",          genre: "Memoir",     rating: 4.8, pages: 400, year: 2016, bg: "#1a1200", accent: "#fbbf24" },
  { title: "The Power of Now",          author: "Eckhart Tolle",        genre: "Self-Help",  rating: 4.6, pages: 236, year: 1997, bg: "#0a2010", accent: "#4ade80" },
  { title: "Surely You're Joking",      author: "Richard Feynman",      genre: "Science",    rating: 4.8, pages: 350, year: 1985, bg: "#0e0e2e", accent: "#818cf8" },
  { title: "Born a Crime",              author: "Trevor Noah",          genre: "Memoir",     rating: 4.9, pages: 288, year: 2016, bg: "#2e0a0a", accent: "#f87171" },
  { title: "The Innovators",            author: "Walter Isaacson",      genre: "History",    rating: 4.7, pages: 542, year: 2014, bg: "#1e2e0a", accent: "#a3e635" },
  { title: "Deep Work",                 author: "Cal Newport",          genre: "Self-Help",  rating: 4.7, pages: 296, year: 2016, bg: "#0a1e2e", accent: "#38bdf8" },
  { title: "The Lean Startup",          author: "Eric Ries",            genre: "Business",   rating: 4.6, pages: 336, year: 2011, bg: "#2e1e0a", accent: "#fb923c" },
  { title: "Meditations",               author: "Marcus Aurelius",      genre: "Classic",    rating: 4.9, pages: 254, year: 170,  bg: "#1e1e1e", accent: "#e2b96f" },
];

const GENRES = ["All", ...Array.from(new Set(ALL_BOOKS.map((b) => b.genre))).sort()];

const BookSpine = ({ title, author, bg, accent, pages }) => (
  <div
    className="w-full aspect-[2/3] relative rounded-[2px_7px_7px_2px] overflow-hidden transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[6px_14px_36px_rgba(0,0,0,0.38)]"
    style={{
      background: bg,
      boxShadow: "3px 5px 16px rgba(0,0,0,0.32), inset -4px 0 10px rgba(0,0,0,0.25)",
    }}
  >
    <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: accent }} />
    <div className="absolute left-[10px] top-0 bottom-0 w-px bg-white/[0.05]" />
    <div className="absolute top-3 left-3 right-3 flex flex-col gap-1">
      <div className="h-px rounded-full opacity-20" style={{ width: "55%", background: accent }} />
      <div className="h-px rounded-full opacity-14" style={{ width: "75%", background: accent }} />
    </div>
    <div className="absolute bottom-0 left-0 right-0 p-2.5 flex flex-col gap-1">
      <p className="text-[7px] font-bold uppercase tracking-[0.4px] leading-tight" style={{ color: accent }}>
        {title}
      </p>
      <p className="text-[6px] leading-tight" style={{ color: "rgba(255,255,255,0.38)" }}>{author}</p>
      <div className="h-px opacity-10 mt-0.5" style={{ background: accent }} />
      <p className="text-[5.5px] uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.22)" }}>
        {pages}p
      </p>
    </div>
    {/* Shine */}
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 55%)" }}
    />
  </div>
);

const BookCard = ({ title, author, genre, rating, pages, year, bg, accent }) => (
  <div className="group flex flex-col gap-3 cursor-pointer">
    <div className="relative">
      <BookSpine title={title} author={author} bg={bg} accent={accent} pages={pages} />
      {/* Genre badge on hover */}
      <div
        className="absolute -top-2 -right-2 text-[9px] font-medium px-2 py-0.5 rounded-full border opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0"
        style={{ background: bg, color: accent, borderColor: `${accent}66` }}
      >
        {genre}
      </div>
    </div>
    <div className="flex flex-col gap-1 px-0.5">
      <h3
        className="text-[13px] font-bold text-[#1a1a2e] leading-snug line-clamp-2 group-hover:text-[#4a3f30] transition-colors duration-200"
        style={{ fontFamily: "Georgia, serif" }}
      >
        {title}
      </h3>
      <p className="text-[11px] text-[#9e9080] font-light truncate">{author}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <span className="text-[#c4a87a] text-[10px]">★</span>
          <span className="text-[10px] font-medium text-[#7a7165]">{rating}</span>
        </div>
        <span className="text-[10px] text-[#b5a898]">{year}</span>
      </div>
    </div>
  </div>
);
function ExploreBooks() {
  const [query, setQuery] = useState("");
  const [activeGenre, setActiveGenre] = useState("All");
  const [sortBy, setSortBy] = useState("rating");
  const filtered = useMemo(() => {
    let list = ALL_BOOKS;
    if (activeGenre !== "All") list = list.filter((b) => b.genre === activeGenre);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (b) =>
          b.title.toLowerCase().includes(q) ||
          b.author.toLowerCase().includes(q) ||
          b.genre.toLowerCase().includes(q)
      );
    }
    return [...list].sort((a, b) =>
      sortBy === "rating" ? b.rating - a.rating :
      sortBy === "year"   ? b.year - a.year :
      a.title.localeCompare(b.title)
    );
  }, [query, activeGenre, sortBy]);

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-in { animation: fadeUp 0.5s ease both; }

        .search-input::placeholder { color: #b5a898; }
        .search-input:focus { outline: none; }

        .genre-pill { transition: all 0.2s; }
        .genre-pill.active { background: #1a1a2e !important; color: #e2b96f !important; border-color: #1a1a2e !important; }
      `}</style>

      <div className="min-h-screen bg-[#FAF8F4] relative" style={{ fontFamily: "Georgia, serif" }}>

        <div
          className="fixed inset-0 pointer-events-none opacity-[0.08] z-0"
          style={{
            backgroundImage: "radial-gradient(circle, #c4b49a 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="fixed top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-25 z-0"
          style={{ background: "radial-gradient(circle, #e8d5b0, transparent 70%)" }} />
        <div className="fixed bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none opacity-20 z-0"
          style={{ background: "radial-gradient(circle, #d4c8f0, transparent 70%)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 py-12 mt-5">

          {/* ── Page Header ── */}
          <div className="flex flex-col items-center text-center gap-4 mb-10 fade-in">
            <div className="inline-flex items-center gap-2 bg-white border border-[#e8ddd0] rounded-full px-4 py-1.5 shadow-sm">
              <span className="text-[11px] font-medium text-[#666] uppercase tracking-[0.6px]">Library</span>
            </div>
            <h1
              className="font-black text-[#1a1a2e] text-4xl sm:text-5xl lg:text-6xl leading-[1.06] tracking-tight"
            >
              Explore{" "}
              <em
                className="not-italic"
                style={{
                  background: "linear-gradient(130deg, #1a1a2e 0%, #7b5ea7 48%, #c8720f 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Books.
              </em>
            </h1>
            <div className="flex items-center gap-3 w-36">
              <div className="flex-1 h-px bg-[#d4c8b8]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#c4a87a]" />
              <div className="flex-1 h-px bg-[#d4c8b8]" />
            </div>
            <p className="text-[#7a7165] text-base sm:text-[17px] max-w-sm leading-[1.8] font-light" style={{ fontFamily: "Georgia, serif" }}>
              {ALL_BOOKS.length} handpicked titles across{" "}
              <span className="text-[#4a3f30] font-medium italic">{GENRES.length - 1} genres</span>
            </p>
          </div>

          {/* ── Search Bar ── */}
          <div className="fade-in max-w-2xl mx-auto mb-8" style={{ animationDelay: "0.1s" }}>
            <div className="relative flex items-center bg-white border border-[#e8ddd0] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.07)] overflow-hidden focus-within:border-[#c4a87a] focus-within:shadow-[0_4px_24px_rgba(196,168,122,0.2)] transition-all duration-300">
              {/* Search icon */}
              <div className="pl-5 pr-3 text-[#b5a898] flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                </svg>
              </div>
              <input
                className="search-input flex-1 py-4 pr-4 bg-transparent text-[#1a1a2e] text-[15px] font-light"
                style={{ fontFamily: "Georgia, serif" }}
                placeholder="Search by title, author, or genre…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              {query && (
                <button
                  className="pr-4 pl-2 text-[#b5a898] hover:text-[#7a7165] transition-colors"
                  onClick={() => setQuery("")}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18M6 6l12 12"/>
                  </svg>
                </button>
              )}
              {/* Amber bottom accent on focus */}
            </div>
          </div>

          {/* ── Filters Row ── */}
          <div className="fade-in flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8" style={{ animationDelay: "0.18s" }}>
            {/* Genre pills */}
            <div className="flex flex-wrap gap-2">
              {GENRES.map((g) => (
                <button
                  key={g}
                  onClick={() => setActiveGenre(g)}
                  className={`genre-pill text-[11px] font-medium px-3.5 py-1.5 rounded-full border transition-all duration-200 ${
                    activeGenre === g
                      ? "active"
                      : "bg-white border-[#e8ddd0] text-[#666] hover:border-[#c4a87a] hover:text-[#4a3f30]"
                  }`}
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {g}
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="text-[11px] text-[#b5a898] uppercase tracking-[0.5px]">Sort</span>
              <select
                className="text-[12px] text-[#4a3f30] bg-white border border-[#e8ddd0] rounded-full px-3 py-1.5 focus:outline-none focus:border-[#c4a87a] cursor-pointer"
                style={{ fontFamily: "Georgia, serif" }}
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="rating">Top Rated</option>
                <option value="year">Newest</option>
                <option value="title">A → Z</option>
              </select>
            </div>
          </div>

          {/* ── Results count ── */}
          <div className="fade-in mb-6" style={{ animationDelay: "0.22s" }}>
            <p className="text-[12px] text-[#b5a898] font-light">
              {filtered.length === 0
                ? "No books found"
                : `Showing ${filtered.length} book${filtered.length !== 1 ? "s" : ""}${activeGenre !== "All" ? ` in ${activeGenre}` : ""}${query ? ` for "${query}"` : ""}`}
            </p>
          </div>

          {/* ── Book Grid ── */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 sm:gap-5">
              {filtered.map((book, i) => (
                <div
                  key={book.title}
                  style={{ animation: `fadeUp 0.5s ease ${Math.min(i * 0.04, 0.6)}s both`, opacity: 0 }}
                >
                  <BookCard {...book} />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center gap-4 py-24">
              <div
                className="w-16 h-24 rounded-[2px_7px_7px_2px] flex items-center justify-center text-2xl opacity-30"
                style={{ background: "#1a1a2e", boxShadow: "3px 5px 16px rgba(0,0,0,0.2)" }}
              >
                📚
              </div>
              <p className="text-[#9e9080] text-base font-light">No books match your search.</p>
              <button
                className="text-[13px] text-[#4a3f30] border border-[#d4c8b8] bg-white px-5 py-2 rounded-full hover:bg-[#f5f0e8] transition-all duration-200"
                onClick={() => { setQuery(""); setActiveGenre("All"); }}
              >
                Clear filters
              </button>
            </div>
          )}

          {/* Footer ornament */}
          <div className="mt-16 flex flex-col items-center gap-3">
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
      </div>
    </>
  );
}


export default ExploreBooks;