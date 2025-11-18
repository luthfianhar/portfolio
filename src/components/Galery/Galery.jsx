// src/components/Galery.jsx
import React from 'react';
import a from  '../../assets/a.jpg';
import c from  '../../assets/c.jpg';
import b from  '../../assets/b.jpg';

// Data dummy gambar (Ganti dengan URL foto Anda sendiri)
const PHOTO_DATA = [
  { id: 1, url: a, alt: 'Pemandangan Pegunungan' },
  { id: 2, url: c, alt: 'Jalanan Kota' },
  { id: 3, url: b, alt: 'Hewan Peliharaan' },
]

function Galery() {
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
        {PHOTO_DATA.map((photo) => (
          <div 
            key={photo.id} 
            className="overflow-hidden rounded-lg shadow-xl 
                       bg-white transition duration-300 ease-in-out 
                       transform hover:-translate-y-1 hover:shadow-2xl"
          >
            <img 
              src={photo.url} 
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