import React from "react";
import {
  FaLinkedin,
  FaInstagramSquare,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";
import TypingText from "./TypingText";

function Home() {
  const phrases = [
    "Full Stack Developer",
    "Cyber Security Enthusiast",
    "Passionate Coder",
    "A Quick Learner",
  ];

  return (
    <div id="Home" className=" relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute w-72 h-72 bg-pink-500 opacity-30 rounded-full mix-blend-multiply filter blur-2xl animate-blob top-10 left-10"></div>
        <div className="absolute w-72 h-72 bg-yellow-500 opacity-30 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000 top-40 left-60"></div>
        <div className="absolute w-72 h-72 bg-blue-500 opacity-30 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-4000 top-60 left-20"></div>
      </div>

      {/* Main content */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full min-h-screen bg-black bg-opacity-70 text-white pt-20 pb-10 px-6 md:px-20">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-3xl font-semibold text-white">
            Welcome to My Feed
          </h1>

          <h2 className="text-2xl md:text-3xl flex flex-wrap items-center">
            <span className="mr-2">Hello, I'm a</span>
            <span className="text-green-400 font-bold">
              <TypingText
                texts={phrases}
                typingSpeed={100}
                delayBetweenTexts={1500}
              />
            </span>
          </h2>

          <p className="text-md md:text-lg text-gray-300 leading-relaxed text-justify">
            I specialize in building modern, scalable, and secure web
            applications using the MERN stack (MongoDB, Express, React,
            Node.js). With strong fundamentals in{" "}
            <span className="text-green-400 font-semibold">C++</span> and deep
            understanding of{" "}
            <span className="text-blue-400 font-semibold">
              Data Structures & Algorithms
            </span>
            , I develop high-performance solutions that are not only powerful
            but user-friendly. I’m also experienced with{" "}
            <span className="text-yellow-400 font-semibold">Firebase</span>,{" "}
            <span className="text-teal-400 font-semibold">SQL</span>, and
            passionate about leveraging modern frameworks to deliver end-to-end
            products that solve real-world problems.
          </p>

          <div className="pt-4">
            <h3 className="font-semibold text-xl text-white">Available At:</h3>
            <div className="flex space-x-6 mt-3">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin
                  size={32}
                  className="text-blue-400 hover:scale-110 hover:text-blue-600 transition-transform duration-300"
                />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagramSquare
                  size={32}
                  className="text-pink-400 hover:scale-110 hover:text-pink-600 transition-transform duration-300"
                />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook
                  size={32}
                  className="text-blue-500 hover:scale-110 hover:text-blue-700 transition-transform duration-300"
                />
              </a>
              <a
                href="https://wa.me/your-number"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp
                  size={32}
                  className="text-green-400 hover:scale-110 hover:text-green-600 transition-transform duration-300"
                />
              </a>
            </div>

            {/* Download Resume Button */}
            <div className="mt-6">
              <a
                href="/SanjayResume.pdf"
                download
                className="inline-block px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300"
              >
                Download My Resume
              </a>
            </div>
          </div>
        </div>

        {/* Right Profile Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end mb-10 md:mb-0 pt-7 md:pt-0">
          <img
            src="/public/ghibliprofile2.png"
            alt="Profile"
            className="w-60 h-60 md:w-100 md:h-100  shadow-[17px_15px_20px_rgba(255,0,0,0.3)] hover:shadow-[10px_10px_30px_rgba(0,255,0,0.3)] transition-all rounded-[40%] border-4 border-gray-800 hover:scale-105 transition duration-500  "
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
