// src/components/Galery.jsx
import React from 'react';

// Data dummy gambar (Ganti dengan URL foto Anda sendiri)
const PHOTO_DATA = [
  { id: 1, url: 'https://picsum.photos/id/431/400/300', alt: 'Pemandangan Pegunungan' },
  { id: 2, url: 'https://picsum.photos/id/345/400/300', alt: 'Jalanan Kota' },
  { id: 3, url: 'https://picsum.photos/id/212/400/300', alt: 'Hewan Peliharaan' },
]

function Galery() {
  return (
    <div className="p-5 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10 text-white">
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