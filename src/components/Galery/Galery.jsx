// src/components/Galery.jsx
import React from 'react';
import { useEffect } from "react";

function Galery() {
   const [items, setItems] = React.useState([]);
     useEffect(() => {
      fetch("https://luthfianhar.github.io/asset/data/Galery.json")
        .then((res) => res.json())
        .then((data) => {
          setItems(data);
        })
        .catch((err) => console.error("Gagal mengambil data:", err));
    }, []);
  return (
    <div className="p-5 max-w-6xl mx-auto">
      <h1 className="text-4xl font-2 text-center mb-10 text-white">
        Photo Gallery
      </h1>
      
      {/* Container untuk Grid Gambar */}
      <div 
        className="grid gap-4"
        // Menggunakan utilitas grid responsif Tailwind
        // Kolom akan menyesuaikan: minimal 280px, max 1fr
        style={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'
        }}
      >
        {items.map((photo) => (
          <div 
            key={photo.id} 
            className="overflow-hidden rounded-lg shadow-xl 
                       bg-white transition duration-300 ease-in-out 
                       transform hover:-translate-y-1 hover:shadow-2xl"
          >
            <img 
              src={photo.gambar} 
              alt={photo.alt} 
              className="w-full h-64 object-cover" 
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Galery;