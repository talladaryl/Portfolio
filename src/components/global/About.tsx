import React, { useState } from "react";
import { FaPlay, FaDownload, FaArrowUp } from "react-icons/fa";

const About = () => {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <section className="bg-black text-white py-16 px-4 md:px-16 flex flex-col md:flex-row items-center justify-center">
      {/* Image avec bouton Play */}
      <div className="relative rounded-lg shadow-md overflow-hidden w-full md:w-1/2">
        {!playVideo ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              className="bg-green-500 text-white p-4 rounded-full"
              onClick={() => setPlayVideo(true)}
            >
              <FaPlay size={30} />
            </button>
          </div>
        ) : (
          <iframe
            title="Video"
            className="w-full h-full"
            style={{ minHeight: "100%", height: "100%" }}
            src="https://www.bing.com/videos/riverview/relatedvideo?q=video+developement+de+solution+informatique&&mid=DDB1FFBDF5C0329770CBDDB1FFBDF5C0329770CB&&mmscn=stvo&FORM=VRDGAR" // Exemple de vidéo YouTube
            allow="autoplay"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        )}
      </div>

      {/* Texte et bouton */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          L'ÉCHEC EST LE CONDIMENT QUI DONNE SA SAVEUR AU{" "}
          <span className="text-green-500">SUCCÈS</span>
        </h2>
        <p className="mt-4 text-gray-300">
          Consacrez plus de temps à vous concentrer sur les aspects importants
          de votre entreprise. Tournez-vous vers <strong>SolutionTECH</strong> ,
          pour des solutions informatiques personnalisées et efficaces. En tant
          qu'entreprise spécialisée, nous créons des systèmes en ligne qui
          peuvent être adaptés en fonction des besoins spécifiques de votre
          entreprise.
        </p>

        {/* Bouton "Download CV" */}
        <div className="flex flex-col justify-center">
          {/* Votre autre contenu ici */}
          <a
            href="CV1.pdf"
            download="Mon_CV.pdf"
            className="mt-6 bg-green-500 text-white px-6 py-3 flex items-center gap-2 rounded-md hover:bg-green-600 transition"
          >
            <span>TELECHARGER LE CV</span>
            <FaDownload />
          </a>
        </div>
      </div>

      {/* Bouton Flottant (flèche vers le haut) */}
      <button className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition">
        <FaArrowUp />
      </button>
    </section>
  );
};

export default About;
