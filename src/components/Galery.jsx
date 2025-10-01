// src/components/Galery.jsx
import React from 'react';
import './Galery.css'; // Kita akan buat file CSS ini

// Data dummy gambar (Ganti dengan URL foto Anda sendiri)
const PHOTO_DATA = [
  { id: 1, url: 'https://picsum.photos/id/431/400/300', alt: 'Pemandangan Pegunungan' },
  { id: 2, url: 'https://picsum.photos/id/345/400/300', alt: 'Jalanan Kota' },
  { id: 3, url: 'https://picsum.photos/id/212/400/300', alt: 'Hewan Peliharaan' },
 
];

function Galery() {
  return (
    <div className="galery-container">
      <h1 className="galery-title">Koleksi Foto Saya</h1>
      <div className="image-grid">
        {PHOTO_DATA.map((photo) => (
          <div key={photo.id} className="image-item">
            <img 
              src={photo.url} 
              alt={photo.alt} 
              className="galery-image"
            />
            {/* Opsi: Tampilkan deskripsi foto */}
            {/* <p className="image-alt">{photo.alt}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Galery;