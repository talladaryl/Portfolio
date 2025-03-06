import { FaArrowUp } from "react-icons/fa";

const Services = () => {
  return (
    <div className="bg-black text-white py-16 px-4 md:px-16">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
        {/* Titre & Description */}
        <div className="mb-8 md:mb-0">
          <h3 className="text-green-500 font-semibold">WHAT WE DO</h3>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            SERVICES AND <span className="text-green-500">SOLUTIONS</span>
          </h2>
        </div>
        <p className="mt-4 md:mt-0 text-gray-300 max-w-lg border-l-4 border-green-500 pl-4">
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Sint Ratione
          Reprehenderit, Error Qui Enim Sit Ex Provident.
        </p>
      </div>

      {/* Cartes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {/* Carte 1 */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <div className="flex justify-center mb-4">
            {/* Icône (remplacez par votre icône) */}
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
              {/* Insérez votre icône ici */}
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2">DESIGN PRINCIPALES</h3>
          <p className="text-gray-300">
            Need A Project Completed By An Expert? Let's Go! Access A Human
            Resources Consultant To Answer Questions
          </p>
        </div>

        {/* Carte 2 */}
        <div className="bg-green-600 p-6 rounded-lg shadow-lg">
          <div className="flex justify-center mb-4">
            {/* Icône (remplacez par votre icône) */}
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              {/* Insérez votre icône ici */}
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2">UNIQUE VALUES</h3>
          <p className="text-white">
            Need A Project Completed By An Expert? Let's Go! Access A Human
            Resources Consultant To Answer Questions
          </p>
        </div>

        {/* Carte 3 */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <div className="flex justify-center mb-4">
            {/* Icône (remplacez par votre icône) */}
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
              {/* Insérez votre icône ici */}
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2">STYLE COMPONENTS</h3>
          <p className="text-gray-300">
            Need A Project Completed By An Expert? Let's Go! Access A Human
            Resources Consultant To Answer Questions
          </p>
        </div>
      </div>

      {/* Bouton Flottant (flèche vers le haut) */}
      <button className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition">
        <FaArrowUp />
      </button>
    </div>
  );
};

export default Services;
