import React, { useEffect } from "react";

export default function About() {
    const [items, setItems] = React.useState([]);
     useEffect(() => {
      fetch("https://luthfianhar.github.io/asset/data/about.json")
        .then((res) => res.json())
        .then((data) => {
          setItems(data);
        })
        .catch((err) => console.error("Gagal mengambil data:", err));
    }, []);
  return (
    <section id="about" className="py-20 px-6 md:px-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-4 font-2">About Me</h2>
          <p className="text-gray-300 leading-relaxed text-base md:text-lg font-1">
            Saya adalah pelajar yang memiliki minat tinggi dalam dunia teknologi,
            terutama pengembangan web. Saya fokus dalam membangun antarmuka yang
            modern, responsif, dan mudah digunakan. Saya juga senang bereksperimen
            dengan teknologi baru dan meningkatkan kemampuan saya dari waktu ke waktu.
          </p>
        </div>
        <div className="md:w-1/2">
          <div className="w-full h-64 bg-white/10 rounded-xl shadow-xl backdrop-blur-md border border-white/10 flex items-center justify-center">
            <img src={items.gambar} alt="About" className="w-full h-full object-cover rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}



  