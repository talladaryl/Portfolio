import  { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Load = () => {
  const [loading, setLoading] = useState(true);

  // Simule un chargement de 5 secondes
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000); // Charger pendant 5 secondes
    return () => clearTimeout(timer);
  }, []);

  // Si en chargement, afficher l'animation du cercle
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 bg-black">
        <motion.div
          animate={{
            rotate: 360, // Fait tourner le cercle
          }}
          transition={{
            repeat: Infinity, // Animation en boucle
            duration: 1, // Durée d'une rotation complète
          }}
          style={{
            width: 60,
            height: 60,
            borderRadius: "50%",
            border: "5px solid #00ff00", // Bordure verte
            borderTop: "5px solid transparent", // Bordure pour l'effet de rotation
          }}
        />
      </div>
    );
  }

  // Si le chargement est terminé, renvoyer null ou un message si nécessaire
  return null; // Vous pouvez ajouter un retour différent si vous souhaitez afficher autre chose après le chargement
};

export default Load;
