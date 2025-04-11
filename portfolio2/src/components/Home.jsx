import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import TypingText from './TypingText';


function Home() {
  // 🧙‍♂️💙⚛️
  const phrases = ['Full Stack Developer ', 'Cyber Security Enthusiast ', 'Passionate Coder ','A quick learner '];
  return (
  
      <div className="flex space-x-2 bg-gray-100 pt-20 pb-10 flex-col-reverse md:flex-row">
        <div className="md:w-1/2 pl-10 pt-10 pr-10 md:pr-5 space-y-2 w-screen">
          <h1 className="text-2xl">Welcome In My Feed</h1>
          <h1 className="text-3xl space-x-2 flex">
           <div>Hello, I'm a </div> 
           <div className="flex items-center justify-center h-max text-2xl">
      <TypingText texts={phrases} typingSpeed={120} delayBetweenTexts={1500} />
    </div>
            
          </h1>
          <p className="text-justify md:text-2xl">
            Full Stack Developer proficient in Python, JavaScript, and modern
            frameworks like Django and React. Strong understanding of RESTful
            APIs, cloud services (Firebase), and database management (SQL).
            Experienced in AI-powered web applications, cybersecurity, and
            DevOps tools. Ranked top 5% in Core Java (NPTEL) and globally 2% on
            TryHackMe. Passionate about scalable, secure, and high performance
            solutions.
          </p>
          <br />
          <div className="space-y-4">
            <h1 className="font-semibold text-xl">Available at:</h1>
            <div className="flex space-x-3">
              <a href="https://react-icons.github.io/react-icons/search/#q=insta">
                <FaLinkedin size={20} />
              </a>
              <a href="https://www.instagram.com/">
                <FaInstagramSquare size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-screen md:w-1/2 md:justify-end md:pt-10 md:pr-20 ">
  <img
    className="w-80 h-90 float-left rounded-full shadow-[10px_10px_30px_rgba(255,0,0,0.3)] "
    src="/public/profileimage.jpg"
    alt=""
  />
</div>
</div>
  );
}

export default Home;