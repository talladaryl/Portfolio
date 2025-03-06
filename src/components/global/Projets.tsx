import { FaArrowLeft, FaArrowRight, FaArrowUp } from "react-icons/fa";

const projects = [
  {
    id: 1,
    image: "/images/project1.png", // Remplacez par vos images
  },
  {
    id: 2,
    image: "/images/project2.png",
  },
  {
    id: 3,
    image: "/images/project3.png",
  },
];

const Projects = () => {
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
              className="bg-gray-900 p-4 rounded-lg shadow-lg"
            >
              <img
                src={project.image}
                alt="Project"
                className="rounded-lg w-full"
              />
            </div>
          ))}
        </div>

        {/* Boutons de navigation */}
        <div className="flex justify-end space-x-4 mt-6">
          <button className="bg-green-500 p-3 rounded-full shadow-md hover:bg-green-600">
            <FaArrowLeft />
          </button>
          <button className="bg-green-500 p-3 rounded-full shadow-md hover:bg-green-600">
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Bouton Flottant (flèche vers le haut) */}
      <button className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition">
        <FaArrowUp />
      </button>
    </div>
  );
};

export default Projects;
