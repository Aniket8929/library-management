import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

 const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/#features" },
    { name: "Books", path: "/explore-book" },
  ];
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-md">
            <span className="text-white text-lg">📖</span>
          </div>
          <span className="font-extrabold text-xl text-gray-900 tracking-tight">
            Book<span className="text-indigo-600">Hub</span>
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-gray-600 hover:text-indigo-600 text-sm font-medium transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}

          <Link to="/auth">
            <Button  className="px-5 py-2.5 text-sm bg-linear-to-br from-indigo-500 to-purple-600">
              Login
            </Button>
          </Link>
        </div>
        <button
          className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="w-5 h-0.5 bg-current mb-1" />
          <div className="w-5 h-0.5 bg-current mb-1" />
          <div className="w-5 h-0.5 bg-current" />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-gray-700"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/auth" onClick={() => setMenuOpen(false)}>
            <Button className="w-full justify-center bg-linear-to-br from-indigo-500 to-purple-600">
              Login
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;