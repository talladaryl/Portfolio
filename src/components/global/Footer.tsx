import {
  FaArrowUp,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        {/* Logos des réseaux sociaux avec React Icons */}
        <div className="flex justify-center mb-8">
          <a
            href="https:/wa.me/658940985?text=bonjour,%20je%20souhaite%20avoir%20plus%20d'informations"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp
              size={30}
              className="text-white mx-4 hover:text-green-500 transition"
            />
          </a>
          <a
            href="https://www.facebook.com/darylarsen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook
              size={30}
              className="text-white mx-4 hover:text-green-500 transition"
            />
          </a>
          <a
            href="https://twitter.com/DarylT.A.D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter
              size={30}
              className="text-white mx-4 hover:text-green-500 transition"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/votre-profil"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              size={30}
              className="text-white mx-4 hover:text-green-500 transition"
            />
          </a>
          <a
            href="https://www.instagram.com/Darylarsen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram
              size={30}
              className="text-white mx-4 hover:text-green-500 transition"
            />
          </a>
        </div>

        {/* Navigation */}
        <nav className="text-center mb-8">
          <a href="#" className="mx-4 hover:text-green-500">
            ABOUT ME
          </a>
          <a href="#" className="mx-4 hover:text-green-500">
            CAREER
          </a>
          <a href="#" className="mx-4 hover:text-green-500">
            SERVICES
          </a>
          <a href="#" className="mx-4 hover:text-green-500">
            CONTACT ME
          </a>
        </nav>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400">
          COPYRIGHT © 2025 BY{" "}
          <span className="text-green-500">TALLA Daryl</span> ALL RIGHT
          RESERVED.
        </div>
      </div>

      {/* Bouton Flottant (flèche vers le haut) */}
      <button className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition">
        <FaArrowUp />
      </button>
    </div>
  );
};

export default Footer;
