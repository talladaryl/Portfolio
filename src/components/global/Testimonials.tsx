import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import Image1 from "../../assets/img/dr0.jpg"; // Import correct

const Testimonial = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, []);

  return (
    <div
      className={`bg-black text-white py-16 px-4 md:px-16 relative transition-all duration-1000 ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto">
        {/* Titre et sous-titre */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h3 className="text-green-500 font-semibold mb-1">TÉMOIGNAGES</h3>
            <h2 className="text-3xl font-bold">
              CLIENTS SATISFAITS QUI TÉMOIGNENT
            </h2>
          </div>
          <div className="flex">
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-3 py-2 rounded-l-md">
              ←
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-3 py-2 rounded-r-md">
              →
            </button>
          </div>
        </div>

        {/* Témoignage */}
        <div className="flex flex-col md:flex-row items-center">
          {/* Image de profil */}
          <div className="w-32 h-32 rounded-full overflow-hidden mr-8 mb-4 md:mb-0">
            <img
              src={Image1}
              alt="Profil"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Citation */}
          <div className="flex-1">
            <div className="relative">
              <span className="text-green-500 text-5xl absolute -top-4 -left-4">
                "
              </span>
              <p className="pl-6 text-lg">
                <strong>SolutionTech</strong> est un prestataire de services
                exceptionnel et ultra-professionnel, qui a apporté de nouvelles
                technologies, une nouvelle méthodologie et une perspective
                innovante à notre projet.
              </p>
            </div>
            <p className="mt-4">
              M. Charles, entrepreneur Yaoundé, TKC, Cameroun
            </p>
          </div>
        </div>
      </div>

      {/* Bouton Flottant (flèche vers le haut) */}
      <button className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition">
        <FaArrowUp />
      </button>
    </div>
  );
};

export default Testimonial;
