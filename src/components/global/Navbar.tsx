import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { HiMenuAlt3 } from "react-icons/hi";
const Navbar = () => {
  return (
    <header className="w-full bg-black text-white">
      {/* Première bande : Réseaux sociaux + Contact Me */}
      <div className="w-full bg-black fixed top-0 left-0 z-50 px-6 py-2 border-b border-gray-700 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <a href="#" className="hover:text-green-400 flex items-center">
            <FaFacebookF />
          </a>
          <span className="text-gray-500">|</span>
          <a href="#"  className="hover:text-green-400 flex items-center">
            <FaTwitter />
          </a>
          <span className="text-gray-500">|</span>
          <a href="#" className="hover:text-green-400 flex items-center">
            <FaLinkedinIn />
          </a>
          <span className="text-gray-500">|</span>
          <a href="#" className="hover:text-green-400 flex items-center">
            <FaInstagram />
          </a>
        </div>
        <button className="bg-green-500 text-black px-4 py-1 rounded-md hover:bg-green-400 ml-4">
          Contact Me
        </button>
      </div>

      {/* Deuxième bande : Menu fixé en bas de la première bande */}
      <nav className="w-full bg-black text-white shadow-md fixed top-10 left-0 z-50">
        <div className="flex justify-between items-center px-6 py-4">
          <div className="text-2xl font-bold text-green-400">PORTfolio</div>
          <ul className="hidden md:flex space-x-6">
            <li>
              <a href="/"  className="hover:text-green-400">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-green-400">
                About
              </a>
            </li>
            <li>
              <a href="/service" className="hover:text-green-400">
                Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-400">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-400">
                Pages
              </a>
            </li>
          </ul>
          <div className="flex items-center space-x-4">
            <IoSearchOutline className="text-xl cursor-pointer hover:text-green-400" />
            <HiMenuAlt3 className="text-2xl cursor-pointer md:hidden hover:text-green-400" />
          </div>
        </div>
      </nav>

      {/* Permet d'éviter que le contenu soit caché sous le menu */}
      <div className="h-24"></div>
    </header>
  );
};

export default Navbar;
