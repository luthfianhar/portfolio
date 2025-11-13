import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gambar1 from "../../assets/logo-ANHAR.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "My Skill", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" },
  ];

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  const itemVariants = {
    hidden: { x: 60, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.12, duration: 0.4 },
    }),
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-4">
        <div className="flex items-center gap-3">
          <img src={gambar1} alt="Logo" className="h-10 w-10 object-contain" />
          <span className="font-2  text-xl tracking-wide">LUTHFI ANHAR</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-lg font-he">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.href}
              className="relative group transition-colors hover:text-amber-400"
            >
              {l.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 focus:outline-none"
        >
          {open ? (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden bg-black/90 text-center py-5 space-y-4"
          >
            {links.map((l, i) => (
              <motion.a
                key={l.name}
                href={l.href}
                onClick={() => setOpen(false)}
                custom={i}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className="block text-lg hover:text-amber-400"
              >
                {l.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
