import { FaPaperPlane } from "react-icons/fa";

const Newsletter = () => {
  return (
    <div className="bg-black text-white py-24 px-4 md:px-16 relative">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('votre-image-de-fond.jpg')" }}
      ></div>{" "}
      {/* Remplacez par votre image de fond */}
      <div className="relative z-10 text-center">
        <h3 className="text-gray-400 font-semibold mb-2">NEWSLETTER</h3>
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          RESTEZ À JOUR,
          <br />
          ABONNEZ-VOUS{" "}
          <span className="text-green-500">NEWSLETTER GRATUITE</span>!
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <input
            type="email"
            placeholder="Enter Your Email..."
            className="bg-gray-800 text-gray-300 py-3 px-4 rounded-l-lg focus:outline-none w-full md:w-80 mb-4 md:mb-0 md:mr-2"
          />
          <button className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-r-lg flex items-center">
            SUBSCRIBE <FaPaperPlane className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
