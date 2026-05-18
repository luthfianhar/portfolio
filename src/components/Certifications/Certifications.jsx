
import React from "react";
import { useEffect } from "react";

export default function Certifications() {
  const [items, setItems] = React.useState([]);

  useEffect(() => {
    fetch("https://luthfianhar.github.io/asset/data/Certifications.json")
      .then((res) => res.json())
      .then((data) => {
        // Tambahkan sertifikat baru
        const extraCertificates = [
          {
            judul: "React Redux Certification",
            gambar:
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
            link: "https://redux.js.org/",
          },
          {
            judul: "GitHub Certification",
            gambar:
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
            link: "https://github.com/",
          },
          {
            judul: "TypeScript Certification",
            gambar:
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
            link: "https://www.typescriptlang.org/",
          },
        ];

        setItems([...data, ...extraCertificates]);
      })
      .catch((err) =>
        console.error("Gagal mengambil data:", err)
      );
  }, []);

  return (
    <section
      id="certificates"
      className="py-16 px-6 md:px-12 text-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Certifications
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {items.map((item, i) => (
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
              src={item.gambar}
              alt={item.judul}
              className="rounded-lg mb-4 w-full h-36 object-contain p-4 bg-white border-2 border-amber-500/50"
            />

            <h3 className="text-xl font-semibold text-amber-300 mb-2">
              {item.judul}
            </h3>

            <p className="text-gray-400 text-sm mb-4">
              Dikeluarkan oleh: {item.judul}
            </p>

            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-auto px-4 py-2 rounded-lg
                bg-amber-500 hover:bg-amber-600
                transition-colors duration-300
                text-black font-semibold
              "
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}