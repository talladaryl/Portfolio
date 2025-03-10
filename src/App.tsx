import React, { useState } from "react";
import Font1 from "./assets/img/Font1.jpg"; 
import Load from "./components/global/Load"; // Importer le composant de chargement

import Navbar from "./components/global/Navbar";
import Home from "./components/global/Home";
import About from "./components/global/About";
import Portfolios from "./components/global/Portfolios";
//import Newsletter from "./components/global/Newsletter";
import Testimonials from "./components/global/Testimonials";
import Services from "./components/global/Services";
import Contact from "./components/global/Contact";
import Footer from "./components/global/Footer";
import Projets from "./components/global/Projets";


function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed relative"
      style={{ backgroundImage: `url(${Font1})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {loading && <Load />}

      <div className="relative z-10">
        {/* Une fois le chargement terminé, affiche le contenu de l'application */}
        <Navbar />
        <Home />
        <About />
        <Portfolios />
        <Services />
        <Projets />
        <Testimonials />
        <Contact />
        {/* <Newsletter /> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
