import React, { useState, useEffect } from "react";
import Image1 from "../../assets/img/S1.jpeg"; // Import correct
import Image2 from "../../assets/img/DA1.jpeg"; // Import correct

const Home = () => {
  const [isFirstPage, setIsFirstPage] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Changement d'image toutes les 5 secondes
    const intervalId = setInterval(() => {
      setIsFirstPage((prev) => !prev);
    }, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Ajouter l'animation de chute une fois la page chargée
    setIsLoaded(true);
  }, []);

  return (
    <section className="text-white min-h-screen flex items-center px-6 md:px-12">
      <div className="w-full grid md:grid-cols-2 gap-6">
        <div
          className={`flex flex-col justify-center transition-transform duration-1000 ${
            isLoaded ? "transform translate-y-0" : "transform translate-y-10"
          }`}
        >
          <h1 className="text-5xl font-bold uppercase">
            <span className="text-green-400">
              {isFirstPage ? "Ensemble, plus forts : " : "Innovons ensemble : "}
            </span>
            {isFirstPage
              ? "la technologie nous unit, le succès nous attend."
              : "créons un avenir numérique sans limites."}
          </h1>
          <p className="mt-4 text-gray-300 max-w-lg border-l-4 border-green-500 pl-4">
            {isFirstPage
              ? "Seul, on va plus vite. Ensemble, on va plus loin. À l'ère du numérique, cette maxime n'a jamais été aussi vraie."
              : "Le progrès ne s'arrête jamais. Ensemble, explorons de nouvelles opportunités pour bâtir un monde meilleur."}
          </p>
          <button className="mt-6 bg-green-500 text-black px-4 py-2 rounded-md hover:bg-green-400 transition-colors duration-300">
            Démarrer <span aria-hidden="true">→</span>
          </button>
        </div>

        {/* Image qui change dynamiquement avec l'animation */}
        <div className="relative flex justify-center">
          <img
            src={isFirstPage ? Image1 : Image2}
            alt="Person"
            className={`rounded-lg w-full max-w-md transition-all duration-1000 ease-in-out transform ${
              isLoaded ? "translate-y-0" : "translate-y-10"
            }`}
          />

          {/* Numéros flottants pour changer d'image */}
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 space-y-4">
            <button
              className={`w-10 h-10 flex items-center justify-center ${
                isFirstPage
                  ? "bg-green-500 text-black"
                  : "bg-gray-700 text-white"
              } font-bold rounded-full shadow-lg transition-all duration-300`}
              onClick={() => setIsFirstPage(true)}
            >
              01
            </button>
            <button
              className={`w-10 h-10 flex items-center justify-center ${
                !isFirstPage
                  ? "bg-green-500 text-black"
                  : "bg-gray-700 text-white"
              } font-bold rounded-full shadow-lg transition-all duration-300`}
              onClick={() => setIsFirstPage(false)}
            >
              02
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
