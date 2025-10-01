// File: src/components/Certificates.jsx (Diperbaiki)

import React from "react";
// Import gambar lokal Anda
import gambar1 from "../assets/html.png";
import gambar3 from "../assets/javascript.png";
import gambar2 from "../assets/react.png"; // Jika ada gambar kedua

// Data Dummy Sertifikat
const certificatesData = [
  {
    title: "Web Development Dasar (HTML)",
    issuer: "Dicoding Academy",
    date: "Juni 2024",
    link: "https://example.com/sertifikat-html",
    // 💡 Gunakan variabel impor gambar1 di sini
    image: gambar1, 
  },
  {
    title: "JavaScript Fundamental",
    issuer: "Udemy",
    date: "Mei 2024",
    link: "https://example.com/serti  fikat-js",
    // 💡 Gunakan variabel impor gambar3 di sini
    
    image: gambar3,
  },
  {
     title: "React for Beginners",
    issuer: "Udemy",
    date: "Mei 2024",
    link: "https://example.com/sertifikat-js",
    // 💡 Gunakan variabel impor gambar3 di sini
    image: gambar2,
  },
  // Jika Anda punya gambar kedua untuk Tailwind (misalnya gambar2), 
  // Anda harus mengimpornya dan menambahkannya ke array ini juga.
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-16 px-6 md:px-12 text-center bg-gray-900/50">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {certificatesData.map((cert, i) => (
          <div
            key={i}
            className="
              bg-white/10 p-5 rounded-xl shadow-lg 
              transform transition-all duration-300 
              hover:scale-[1.03] hover:shadow-2xl
              flex flex-col items-center text-center
            "
          >
            <img
              // ✅ Variabel cert.image sekarang berisi path gambar unik
              src={cert.image} 
              alt={cert.title}
              className="rounded-lg mb-4 w-full h-36 object-cover object-center border-2 border-amber-500/50"
            />
            <h3 className="text-xl font-semibold text-amber-300 mb-2">{cert.title}</h3>
            <p className="text-gray-400 text-sm mb-1">Dikeluarkan oleh: **{cert.issuer}**</p>
            <p className="text-gray-500 text-xs mb-4">Tanggal: {cert.date}</p>
            
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto bg-amber-500 text-white px-5 py-2 rounded-full font-medium text-sm hover:bg-amber-600 transition"
            >
              Lihat Bukti
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}