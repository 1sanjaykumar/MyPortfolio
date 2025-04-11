import React from "react";
import {
  FaLinkedin,
  FaInstagramSquare,
  FaFacebook,
  FaWhatsapp,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-black bg-opacity-80 text-gray-300 py-10 px-6 md:px-20 border-t border-gray-700 backdrop-blur-md relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        {/* Left Text */}
        <div className="text-center md:text-left space-y-2">
          <h2 className="text-xl font-semibold text-white">
            Designed & Built by <span className="text-red-500">Sanjay Sahu</span>
          </h2>
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6">
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-blue-400 hover:text-blue-600 hover:scale-110 transition duration-300" size={24} />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <FaInstagramSquare className="text-pink-400 hover:text-pink-600 hover:scale-110 transition duration-300" size={24} />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-blue-500 hover:text-blue-700 hover:scale-110 transition duration-300" size={24} />
          </a>
          <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-green-400 hover:text-green-600 hover:scale-110 transition duration-300" size={24} />
          </a>
        </div>

        {/* Scroll To Top */}
        <div>
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full shadow-md transition duration-300"
          >
            <FaArrowUp />
            <span>Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
