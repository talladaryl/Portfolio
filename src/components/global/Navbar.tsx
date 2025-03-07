import { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  const handleMouseEnter = (menu) => {
    setHoveredMenu(menu);
  };

  const handleMouseLeave = () => {
    setHoveredMenu(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuStyle = (menu) => {
    return {
      position: "relative",
      textDecoration: "none",
      color: hoveredMenu === menu || activeMenu === menu ? "green" : "white",
    };
  };

  return (
    <header className="w-full bg-black text-white">
      {/* Première menu */}
      <div className="w-full bg-black fixed top-0 left-0 z-50 px-6 py-2 border-b border-gray-700 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <a
            href="https:/www.facebook.com/Darylarsen"
            className="hover:text-green-700 flex items-center"
          >
            <FaFacebookF />
          </a>
          <span className="text-gray-500">|</span>
          <a href="#" className="hover:text-green-700 flex items-center">
            <FaTwitter />
          </a>
          <span className="text-gray-500">|</span>
          <a href="#" className="hover:text-green-700 flex items-center">
            <FaLinkedinIn />
          </a>
          <span className="text-gray-500">|</span>
          <a href="#" className="hover:text-green-700 flex items-center">
            <FaInstagram />
          </a>
          <a
            href="https:/wa.me/658940985?text=bonjour,%20je%20souhaite%20avoir%20plus%20d'informations"
            className="hover:text-green-700 flex items-center"
          >
            <FaWhatsapp />
          </a>
        </div>
        <button className="bg-green-700 text-black px-4 py-1 rounded-md group-hover:text-white bg-black-500 ml-4">
          Contact Me
        </button>
      </div>
      <hr className="bg-white-100 border-white-20" />

      {/* Deuxième bande */}
      <nav className="w-full bg-black text-white shadow-md fixed top-10 left-0 z-50">
        <div className="flex justify-between items-center px-6 py-4">
          <div className="text-2xl font-bold text-green-400">Daryl.Tech</div>
          <ul className="hidden md:flex space-x-6">
            {["Home", "About", "Service", "Portfolio", "Career"].map(
              (menu, index) => (
                <li
                  key={index}
                  onClick={() => handleMenuClick(menu)}
                  onMouseEnter={() => handleMouseEnter(menu)}
                  onMouseLeave={handleMouseLeave}
                  style={menuStyle(menu)}
                  className="relative cursor-pointer"
                >
                  <a href="#" className="hover:text-green-400">
                    {menu}
                  </a>
                  {(activeMenu === menu || hoveredMenu === menu) && (
                    <div
                      className="absolute bottom-0 left-0 w-full h-1 bg-green-400 transition-all duration-300"
                      style={{
                        width: "100%",
                      }}
                    ></div>
                  )}
                </li>
              )
            )}
          </ul>
          <div className="flex items-center space-x-4">
            <IoSearchOutline className="text-xl cursor-pointer hover:text-green-400" />
            <HiMenuAlt3
              className="text-2xl cursor-pointer md:hidden hover:text-green-400"
              onClick={toggleMobileMenu}
            />
          </div>
        </div>

        {/* Menu mobile */}
        {isMobileMenuOpen && (
          <ul className="md:hidden flex flex-col items-center space-y-4 py-4 bg-black">
            {["Home", "About", "Service", "Portfolio", "Career"].map(
              (menu, index) => (
                <li
                  key={index}
                  onClick={() => {
                    handleMenuClick(menu);
                    setIsMobileMenuOpen(false);
                  }}
                  className="cursor-pointer hover:text-green-400"
                >
                  {menu}
                </li>
              )
            )}
          </ul>
        )}
      </nav>

      {/* Permet d'éviter que le contenu soit caché sous le menu */}
      <div className="h-24"></div>
    </header>
  );
};

export default Navbar;
