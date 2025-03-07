import React, { useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div
      className="bg-black text-white py-16 px-4 md:px-16"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-once="true"
    >
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
        {/* Titre & Description */}
        <div className="mb-8 md:mb-0">
          <h3 className="text-green-500 font-semibold">
            QU'EST CE QUE NOUS FAISSONS
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            SERVICES ET <span className="text-green-500">SOLUTIONS</span>
          </h2>
        </div>
        <p className="mt-4 md:mt-0 text-gray-300 max-w-lg border-l-4 border-green-500 pl-4">
          nous créons des solutions innovante et efficace qui vous permettrai de
          mieux gérer votre activité. seul on avance vite mais ensemble on va
          plus loin.
        </p>
      </div>

      {/* Cartes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {/* Carte 1 */}
        <div
          className="bg-gray-900 p-6 rounded-lg shadow-lg hover:bg-green-700 pd-500"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <div className="flex justify-center mb-4">
            {/* Icône (remplacez par votre icône) */}
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
              {/* Insérez votre icône ici */}
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2">
            Développement Web et Applications Mobiles
          </h3>
          <p className="text-gray-300">
            nous pourrons crée des sites Web performants et des applications
            mobiles intuitives, adaptées à vos besoins spécifiques
          </p>
        </div>

        {/* Carte 2 */}
        <div
          className="bg-green-600 p-6 rounded-lg shadow-lg hover:bg-black-700 text-color-white"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <div className="flex justify-center mb-4">
            {/* Icône (remplacez par votre icône) */}
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              {/* Insérez votre icône ici */}
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2">Stratégie Digitale</h3>
          <p className="text-white">
            nous travaillons avec vous pour élaborer une stratégie digitale
            complète, axée sur la croissance et l'engagement de votre audience.
          </p>
        </div>

        {/* Carte 3 */}
        <div
          className="bg-gray-900 p-6 rounded-lg shadow-lg hover:bg-green-700 text-color-white"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <div className="flex justify-center mb-4">
            {/* Icône (remplacez par votre icône) */}
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
              {/* Insérez votre icône ici */}
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2">
            Consultation en Technologie
          </h3>
          <p className="text-gray-300">
            Besoin d'expertise technique pour résoudre un défi spécifique ou
            optimiser vos processus internes ?
          </p>
        </div>
        {/* Carte 4 */}
        <div
          className="bg-gray-900 p-6 rounded-lg shadow-lg hover:bg-green-700 text-color-white"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <div className="flex justify-center mb-4">
            {/* Icône (remplacez par votre icône) */}
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
              {/* Insérez votre icône ici */}
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2">
            Analyse de Données et Business Intelligence
          </h3>
          <p className="text-gray-300">
            Les données sont une ressource précieuse pour prendre des décisions
            éclairées et stimuler la croissance de votre entreprise.
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
