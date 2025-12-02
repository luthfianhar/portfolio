import React from "react";
import { useEffect } from "react";


export default function Projects() {
  const [items, setItems] = React.useState([]);
   useEffect(() => {
    fetch("https://luthfianhar.github.io/asset/data/Projects.json")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      })
      .catch((err) => console.error("Gagal mengambil data:", err));
  }, []);
  return (
    <section id="projects" className="py-16 px-6 md:px-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-amber-400">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {items.map((p, i) => (
          <div
            key={i}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-5 shadow-md hover:shadow-xl hover:scale-[1.03] transition-transform duration-300"
          >
            <img src={p.gambar} alt={p.title} className="rounded-xl mb-4 w-full h-44 object-cover" />
            <h3 className="text-lg font-semibold mb-2">{p.judul}</h3>
            <a href={p.link} target="_blank" rel="noopener noreferrer" className="bg-amber-500 text-white px-5 py-2 rounded-full font-medium hover:bg-amber-600 transition font-2">
              View Details
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
