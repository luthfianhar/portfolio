import React from "react";

export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white border-t border-gray-700">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-semibold text-lg mb-4 text-amber-400 text-center ">Navigation</h3>
          {["Home","About","Skills", "Projects", "Certificates", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="block hover:text-amber-500 mb-2 transition text-center">
              {item}
            </a>
          ))}
        </div>
        </div>
      <p className="text-center text-sm text-gray-400 mt-8">  
        © {new Date().getFullYear()} Luthfi Anhar. All rights reserved.
      </p>
    </footer>
  );
}
