import React from "react";

export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white border-t border-gray-700">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-amber-400 mb-4">
            Luthfi Anhar
          </h2>

          <p className="text-gray-400 leading-relaxed text-sm">
            Pelajar yang antusias mempelajari teknologi dan pengembangan
            perangkat lunak. Fokus pada pengembangan web modern,
            desain UI/UX, dan membangun project kreatif menggunakan
            React, Tailwind CSS, dan teknologi terbaru.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-amber-400">
            Navigation
          </h3>

          {[
            "Home",
            "About",
            "Skills",
            "Projects",
            "Certificates",
            "Contact",
          ].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block hover:text-amber-500 mb-2 transition"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Skills */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-amber-400">
            Technologies
          </h3>

          <ul className="space-y-2 text-gray-300 text-sm">
            <li>⚛️ React JS</li>
            <li>🎨 Tailwind CSS</li>
            <li>🟨 JavaScript</li>
            <li>🔷 TypeScript</li>
            <li>🗄️ Firebase</li>
            <li>🐙 Git & GitHub</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-amber-400">
            Contact
          </h3>

          <div className="space-y-3 text-sm text-gray-300">
            <p>📧 luthfianhar@example.com</p>
            <p>📍 Indonesia</p>
            <p>💻 Open for collaboration</p>
          </div>

          {/* Social */}
          <div className="flex gap-4 mt-5">
            <a
              href="https://github.com/luthfianhar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition"
            >
              LinkedIn
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Luthfi Anhar. All rights reserved.
        </p>

        <p className="text-xs text-gray-500 mt-2">
          Built with React JS & Tailwind CSS ✨
        </p>
      </div>
    </footer>
  );
}