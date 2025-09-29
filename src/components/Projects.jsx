// File: src/components/Projects.jsx

import React from "react";
// Sesuaikan path import gambar sesuai struktur folder Anda
import gambar2 from "../assets/data.png"; 
import gambar3 from "../assets/kalkulator.png";

const projectsData = [
  { img: gambar2, title: "DATA LIST", link: "https://10-b.vercel.app/" },
  { img: gambar3, title: "KALKULATOR", link: "https://kalkolatorkece.vercel.app/" },
  {
    img: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=60",
    title: "PROJECT 3",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6 md:px-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {projectsData.map((p, i) => (
          <div
            key={i}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 shadow-md hover:shadow-xl hover:scale-[1.03] transition-transform"
          >
            <img
              src={p.img}
              alt={p.title}
              className="rounded-xl mb-4 w-full h-40 object-cover"
            />
            <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
            <p className="opacity-80 mb-4 text-sm">Deskripsi singkat proyek.</p>
            <a
              href={p.link}
              className="bg-amber-500 text-white px-5 py-2 rounded-full font-medium hover:bg-amber-600 transition"
            >
              View Details
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}