import React from "react";
import gambar1 from "../assets/poto.png";
import gambar2 from "../assets/data.png";
import gambar3 from "../assets/kalkulator.png";

export default function Main() {
  const skills = [
    "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  ];

  const projects = [
    { img: gambar2, title: "DATA LIST", link: "https://10-b.vercel.app/" },
    { img: gambar3, title: "KALKULATOR", link: "https://kalkolatorkece.vercel.app/" },
    {
      img: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=60",
      title: "PROJECT 3",
      link: "#",
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section
        id="home"
        className="min-h-[80vh] flex flex-col justify-center items-center px-6 md:px-16 text-center md:text-left"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-snug">
              Hi, I’m <span className="text-amber-400">Luthfi Anhar</span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg mb-6 leading-relaxed">
              Pelajar yang antusias mempelajari teknologi dan pengembangan
              perangkat lunak. Terampil dalam pemrograman web dan menyukai
              tantangan dengan solusi kreatif.
            </p>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-full font-medium shadow-md hover:shadow-lg transition-all">
                Get Started
              </button>
            </a>
          </div>

          {/* Foto lebih kecil */}
          <div className="md:w-1/2 flex justify-center">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-xl ring-4 ring-amber-400/30">
              <img
                src={gambar1}
                alt="Profile"
                className="object-cover w-full h-full scale-105 hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
     <section id="skills" className="py-16 text-center">
  <h2 className="text-3xl md:text-4xl font-bold mb-10">My Skills</h2>
  <div
    className="
      flex flex-wrap justify-center 
      gap-16         // ✅ jarak diperlebar dari gap-10 → gap-16
      opacity-90
    "
  >
    {skills.map((s, i) => (
      <img
        key={i}
        src={s}
        alt="skill"
        className="h-12 md:h-14 hover:scale-110 transition-transform"
      />
    ))}
  </div>
</section>

      {/* Projects */}
      <section id="projects" className="py-16 px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {projects.map((p, i) => (
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
    </main>
  );
}

