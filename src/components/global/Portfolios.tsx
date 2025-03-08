import  { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Liste des expériences
const experiences = [
  {
    year: "2021 - 2022 (WEB DEVELOPER)",
    company: "ICORP.",
    description: "Création de solution informatique inovante",
  },
  {
    year: "2022 - 2023 (WEB DEVELOPER)",
    company: "FREELANCE",
    description: "Création de solution informatique inovante",
  },
  {
    year: "2024 - 2025 (WEB DEVELOPER AND ANALYST)",
    company: "SHALOM TECHNOLOGIE",
    description: "Création de solution informatique inovante",
  },
];

const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section
      className="bg-black text-white py-16 px-4 md:px-16"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-once="true"
    >
      {/* Titre & Description */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
        <div>
          <h3 className="text-green-500 font-semibold">MON EXPERIENCE</h3>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            EXPERIENCE ET <span className="text-green-500">COMPETENCE</span>
          </h2>
        </div>
        <p className="mt-4 md:mt-0 text-gray-300 max-w-lg border-l-4 border-green-500 pl-4">
          En tant que jeune entrepreneur diplômé de l'Institut Universitaire
          Siantou, je mets ma passion et mon expertise au service de solutions
          innovantes et sur mesure pour faire croître votre entreprise.
        </p>
      </div>

      {/* Liste des expériences */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {" "}
        {/* Changement ici */}
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <p className="text-gray-400 text-sm">{exp.year}</p>
            <h3 className="text-green-500 font-bold text-lg mt-2">
              {exp.company}
            </h3>
            <p className="text-gray-300 mt-2">{exp.description}</p>
          </div>
        ))}
      </div>

    
    </section>
  );
};

const WhatWeDo = () => {
  const skills = [
    { label: "PROGRAMMATION FULL-STACK", percentage: 60 },
    { label: "GRAPHISME", percentage: 20 },
    { label: "WEB DESIGN", percentage: 30 },
    { label: "ILLUSTRATION", percentage: 40 },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section
      className="bg-black text-white py-16 px-4 md:px-16"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-once="true"
    >
      {/* Conteneur des cercles de pourcentage */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <div className="relative flex items-center justify-center w-40 h-40 md:w-56 md:h-56 mx-auto">
              <svg className="w-full h-full">
                <circle
                  className="text-gray-800"
                  strokeWidth="10"
                  stroke="currentColor"
                  fill="transparent"
                  r="50"
                  cx="50%"
                  cy="50%"
                />
                <circle
                  className="text-green-500"
                  strokeWidth="10"
                  strokeDasharray={`${(skill.percentage * 314) / 100} 314`}
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="50"
                  cx="50%"
                  cy="50%"
                />
              </svg>
              <span className="absolute text-3xl font-bold">
                {skill.percentage}%
              </span>
            </div>
            <p className="mt-4 text-lg font-semibold">{skill.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Portfolios = () => {
  return (
    <div>
      <Portfolio />
      <WhatWeDo />
    </div>
  );
};

export default Portfolios;
