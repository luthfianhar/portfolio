import React from "react";

export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900  backdrop-blur-md ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="text-white">
          <h3 className="font-semibold text-lg mb-4 text-white">Navigation</h3>
          {["Home", "Projects", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block hover:text-amber-500 mb-2"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="text-white">
          <h3 className="font-semibold text-lg mb-4 text-white">Company</h3>
          {["Career", "Blog", "Contact"].map((c) => (
            <a key={c} href="#" className="block hover:text-amber-500 mb-2">
              {c}
            </a>
          ))}
        </div>

        <div className="sm:col-span-2 bg-gray-400 p-4 rounded-lg text-black w-100 h-30">
          <h3 className="font-semibold text-lg mb-4 text-white">Newsletter</h3>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 p-2 rounded-l-lg text-gray-900 outline-none"
            />
            <button
              type="submit"
              className="bg-amber-500 hover:bg-amber-600 p-2 rounded-r-lg text-white transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <p className="text-center text-sm text-gray-400 mt-8">
        © {new Date().getFullYear()} Luthfi Anhar. All rights reserved.
      </p>
    </footer>
  );
}
