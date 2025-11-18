import React from "react";
import gambar2 from "../../assets/data.png";
import gambar3 from "../../assets/kalkulator.png";
import gambar4 from "../../assets/portfolio.png";

const projectsData = [
  { img: gambar2, title: "DATA LIST", link: "https://10-b.vercel.app/" },
  { img: gambar3, title: "KALKULATOR", link: "https://kalkolatorkece.vercel.app/" },
  { img: gambar4, title: "PORTFOLIO", link: "https://luthfianhar.github.io/portfolio/" },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6 md:px-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-amber-400">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projectsData.map((p, i) => (
          <div
            key={i}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-5 shadow-md hover:shadow-xl hover:scale-[1.03] transition-transform duration-300"
          >
            <img src={p.img} alt={p.title} className="rounded-xl mb-4 w-full h-44 object-cover" />
            <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
            <a href={p.link} target="_blank" rel="noopener noreferrer" className="bg-amber-500 text-white px-5 py-2 rounded-full font-medium hover:bg-amber-600 transition font-2">
              View Details
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
