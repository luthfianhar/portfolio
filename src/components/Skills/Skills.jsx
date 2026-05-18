import React from "react";
import { useEffect } from "react";

export default function Skills() {
  const [items, setItems] = React.useState([]);

  useEffect(() => {
    fetch("https://luthfianhar.github.io/asset/data/Skills.json")
      .then((res) => res.json())
      .then((data) => {
        // Tambahkan skill baru otomatis
        const extraSkills = [
          {
            nama: "GitHub",
            gambar: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
          },
          {
            nama: "Redux",
            gambar: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
          },
        ];

        setItems([...data, ...extraSkills]);
      })
      .catch((err) => console.error("Gagal mengambil data:", err));
  }, []);

  return (
    <section id="skills" className="py-16 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">
        My Skills
      </h2>

      <div
        className="
          flex flex-wrap justify-center
          gap-16
          opacity-90
        "
      >
        {items.map((item, i) => (
          <img
            key={i}
            src={item.gambar}
            alt={item.nama}
            title={item.nama}
            className="h-12 md:h-14 hover:scale-110 transition-transform"
          />
        ))}
      </div>
    </section>
  );
}