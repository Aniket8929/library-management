import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-gray-900 text-gray-400 py-14 mt-7 ">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <div className="col-span-1 sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-xl bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-md">
              <span className="text-white text-lg">📖</span>
            </div>
            <span className="font-extrabold text-xl text-white tracking-tight">
              Book<span className="text-indigo-400">Hub</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed max-w-xs text-gray-500">
            Your digital library. Discover, read, and track books effortlessly —
            anytime, anywhere.
          </p>
        </div>

        {[
          {
            heading: "Product",
            links: ["Features", "Books", "Dashboard", "Pricing"],
          },
          {
            heading: "Company",
            links: ["About Us", "Blog", "Careers", "Press"],
          },
          {
            heading: "Support",
            links: ["Help Center", "Contact Us", "Privacy Policy", "Terms"],
          },
        ].map(({ heading, links }) => (
          <div key={heading}>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">
              {heading}
            </h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link}>
                  <Link
                    to="/"
                    className="text-sm hover:text-indigo-400 transition-colors duration-200"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-gray-600">
          © 2025 BookHub. All rights reserved. Made with ❤️ for readers.
        </p>
        <div className="flex items-center gap-5">
          {["Twitter", "Instagram", "LinkedIn", "GitHub"].map((s) => (
            <a
              key={s}
              href="#"
              className="text-xs text-gray-600 hover:text-indigo-400 transition-colors duration-200"
            >
              {s}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
