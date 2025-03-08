import  { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaPaperPlane,
  FaArrowUp,
} from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  // Gérer la saisie de l'utilisateur
  interface FormData {
    name: string;
    email: string;
    message: string;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData((prevData: FormData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Soumettre le formulaire
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsSubmitting(true);

    // Envoyer un email pour l'utilisateur (confirmation)
    emailjs
      .sendForm(
        "service_c27gvfl", 
        "template_zjawzye", 
        e.target as HTMLFormElement, 
        "o-NB_4irLNskCG7oX" 
      )
      .then(
        () => {
          
          emailjs
            .sendForm(
              "service_c27gvfl", 
              "template_zlrpuxr", 
              e.target as HTMLFormElement, 
              "o-NB_4irLNskCG7oX" 
            )
            .then(
              () => {
                setResponseMessage("Message envoyé avec succès !");
                setIsSubmitting(false);
                setFormData({ name: "", email: "", message: "" });
              },
              (error) => {
                setResponseMessage("Erreur lors de l'envoi du message. " + error.text);
                setIsSubmitting(false);
              }
            );
        },
        (error) => {
          setResponseMessage("Erreur lors de l'envoi du message. " + error.text);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Adresse */}
          <div className="bg-gray-900 rounded-lg shadow-md p-6 text-center">
            <div className="flex justify-center mb-4">
              <FaMapMarkerAlt className="text-3xl text-green-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2">ADDRESSE</h3>
            <p className="text-gray-400">
              Barrièere AHALA 2, complexe le caloma Yaounde 3
            </p>
          </div>

          {/* Téléphone */}
          <div className="bg-gray-900 rounded-lg shadow-md p-6 text-center">
            <div className="flex justify-center mb-4">
              <FaPhoneAlt className="text-3xl text-green-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2">TELEPHONE</h3>
            <p className="text-gray-400">
              +237-658-940-985 <br /> +237-674-718-624
            </p>
          </div>

          {/* Email */}
          <div className="bg-gray-900 rounded-lg shadow-md p-6 text-center">
            <div className="flex justify-center mb-4">
              <FaEnvelope className="text-3xl text-green-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2">EMAIL</h3>
            <p className="text-gray-400">
              talladarylarsen85@gmail.Com
            </p>
          </div>
        </div>

        {/* Formulaire de Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div className="p-8 bg-gray-900 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-white mb-6">
              CONTACTEZ-NOUS
            </h2>
            <h3 className="text-lg font-semibold text-green-500 mb-4">
             LAISSEZ NOUS UN EMAIL
            </h3>
            <h3 className="text-3xl font-bold mb-6">EN UN CLIC</h3>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Name"
                onChange={handleChange}
                className="w-full p-3 mb-4 border rounded-lg bg-gray-800 text-white border-gray-600 focus:outline-none focus:ring focus:border-green-500"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Email"
                onChange={handleChange}
                className="w-full p-3 mb-4 border rounded-lg bg-gray-800 text-white border-gray-600 focus:outline-none focus:ring focus:border-green-500"
              />
              <textarea
                name="message"
                value={formData.message}
                placeholder="Message"
                onChange={handleChange}
                className="w-full p-3 mb-6 border rounded-lg bg-gray-800 text-white border-gray-600 focus:outline-none focus:ring focus:border-green-500"
                rows={4}
              ></textarea>

              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg flex items-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "ENVOYER"}{" "}
                <FaPaperPlane className="ml-2" />
              </button>
            </form>

            {responseMessage && (
              <p className="mt-4 text-white">{responseMessage}</p>
            )}
          </div>

          {/* Carte Google Maps */}
          <div className="rounded-lg shadow-md overflow-hidden">
            <iframe
              title="Google Maps"
              className="w-full h-full"
              style={{ minHeight: "100%", height: "100%" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31874.09366296752!2d11.502407!3d3.861289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10610d1e67a1f7a1%3A0x3b8b45b7d6b9b9b9!2sBarriere%20Ahala%2C%20Yaound%C3%A9%2C%20Cameroun!5e0!3m2!1sfr!2sfr!4v1699999999999"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Bouton Flottant */}
        <button className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition">
          <FaArrowUp />
        </button>
      </div>
    </div>
  );
};

export default Contact;
