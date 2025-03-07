import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaArrowUp, FaTimes } from "react-icons/fa";
import Image1 from "../../assets/img/DP.jpg";
import Image2 from "../../assets/img/abut.jpg";
import Image3 from "../../assets/img/abut.jpg";

const projects = [
  {
    id: 1,
    image: Image1,
    title: "Projet 1",
    description: "Détails du projet 1...",
  },
  {
    id: 2,
    image: Image2,
    title: "Projet 2",
    description: "Détails du projet 2...",
  },
  {
    id: 3,
    image: Image3,
    title: "Projet 3",
    description: "Détails du projet 3...",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        {/* Titre */}
        <div className="text-center">
          <h3 className="text-green-500 font-semibold uppercase">
            Processus de travail
          </h3>
          <h2 className="text-4xl font-bold">
            DERNIER PROJET EN COURS{" "}
            <span className="text-green-500">PROJECT</span>
          </h2>
          <p className="text-gray-400 mt-2">
            Boostez votre présence en ligne avec des solutions innovantes et
            efficaces.
          </p>
        </div>

        {/* Liste des projets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative group overflow-hidden rounded-lg shadow-lg border border-gray-800 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg w-full transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-500">
                <p className="text-white text-lg font-semibold">
                  Voir le projet
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Boutons de navigation */}
        <div className="flex justify-end space-x-4 mt-6">
          <button className="bg-green-500 p-3 rounded-full shadow-md hover:bg-green-600 transition">
            <FaArrowLeft />
          </button>
          <button className="bg-green-500 p-3 rounded-full shadow-md hover:bg-green-600 transition">
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Modal de détails du projet */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-md w-full relative">
            <button
              className="absolute top-4 right-4 text-black"
              onClick={() => setSelectedProject(null)}
            >
              <FaTimes />
            </button>
            <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
            <p className="mt-2">{selectedProject.description}</p>
          </div>
        </div>
      )}

      {/* Bouton Flottant (flèche vers le haut) */}
      <button className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition">
        <FaArrowUp />
      </button>
    </div>
  );
};

export default Projects;
