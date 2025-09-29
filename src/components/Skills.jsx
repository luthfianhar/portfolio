// File: src/components/Skills.jsx

import React from "react";

// Data Skills, bisa juga dipindahkan ke file data terpisah
const skillsData = [
  "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
  "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
  "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">My Skills</h2>
      <div
        className="
          flex flex-wrap justify-center 
          gap-16 
          opacity-90
        "
      >
        {skillsData.map((s, i) => (
          <img
            key={i}
            src={s}
            alt="skill"
            className="h-12 md:h-14 hover:scale-110 transition-transform"
          />
        ))}
      </div>
    </section>
  );
}