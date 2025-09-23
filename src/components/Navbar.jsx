import React, { useState } from "react";
import gambar1 from "../assets/poto.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // ✅ Tambah My Skill di menu
  const links = [
    { name: "Home", href: "#home" },
    { name: "My Skill", href: "#skills" },   // <<=== baru
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/40 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-4">
        <img src={gambar1} alt="Logo" className="h-12 w-12 object-contain" />

        {/* Desktop */}
        <nav className="hidden md:flex space-x-8 text-lg">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.href}
              className="relative group transition-colors"
            >
              {l.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all"></span>
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 focus:outline-none"
        >
          {open ? (
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black/90 text-center py-4 space-y-3">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block hover:text-amber-400 text-lg"
            >
              {l.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
