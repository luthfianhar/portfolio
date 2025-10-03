// File: src/Main.jsx
import gambar1 from "../../assets/poto.png";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Certificates from "../Certificates/Certificates";
import Galery from "../Galery/Galery";

export default function Main() {
  return (
    <main className="font-sans bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
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
      <Skills />

      {/* Certificates */}
      <Certificates />

      {/* Projects */}
      <Projects />

        {/* Galery */}
      <Galery />
    </main>
  );
}
