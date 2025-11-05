import React from "react";

const Projects = () => {
  const pro = [
    {
      title: "Real-Time Chat Application",
      date: "Date: JULY 2024",
      techno: "React.js, Express.js, Node.js, MongoDB (MERN Stack)",
      description:
        "A full-featured real-time chat application that allows multiple users to communicate instantly using WebSockets. Features include online/offline indicators, message timestamps, typing indicators, and private messaging.",
    },
    {
      title: "ASK A Question Processing Application",
      date: "Date: MAY 2025",
      techno: "React.js, Express.js, Node.js, MongoDB (MERN Stack)",
      description:
        "A web application that enables users to provide prompt(Sem, Unit, Subject) based on their queries. It provide mostly asked questions from previous years with  Question Papers.",
    },
    {
      title: "Dynamic Weather Application",
      date: "Date: MARCH 2025",
      techno: "Flutter, Dart, OpenWeatherMap API",
      description:
        "A mobile app that provides real-time weather updates based on user location. Features include current weather conditions, 7-day forecasts, weather alerts, and an intuitive UI with dynamic backgrounds reflecting weather conditions.",
    },
     {
      title: "Blood Donation Website",
      date: "Date: APRIL 2024",
      techno: "Mern Stack, React Native, Node.js, Express.js, MongoDB",
      description:"Here a user can register as a donor or seeker. Donors can create profiles with blood type, location, and contact details. Seekers can search for donors based on blood type and location. The app includes real-time notifications for donation requests and confirmations, ensuring efficient communication between donors and seekers.",
      
    },
    {
      title: "Tic Tac Toe Game",
      date: "Date: MARCH 2024",
      techno: "HTML, CSS, JavaScript",
      description:
        "A fun and interactive browser-based Tic Tac Toe game with player vs. player mode, win/draw detection, smooth transitions, and a clean responsive UI.",
    },
    {
      title: "Bubble Game",
      date: "Date: JAN 2024",
      techno: "HTML, CSS, JavaScript",
      description:
        "An engaging bubble-popping game where players match numbers within a time limit. Includes a scoring system, timer, and increasing difficulty for a fun experience.",
    },
  ];

  return (
    <section id="projects"  className=" nw-screen min-h-screen bg-black py-20 px-6 flex flex-col items-center">
      <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-400 mb-14 drop-shadow-xl animate-pulse">
        Projects
      </h1>

      <div className="grid gap-10 max-w-6xl w-full md:grid-cols-2 lg:grid-cols-2">
        {pro.map((pr, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl shadow-2xl p-8 hover:scale-105 transition-transform duration-300"
          >
            <h2 className="text-2xl font-semibold text-cyan-400 mb-2 drop-shadow-sm">{pr.title}</h2>
            <p className="text-sm text-gray-400 italic mb-1">{pr.date}</p>
            <p className="text-md font-medium text-green-400 mb-3">{pr.techno}</p>
            <p className="text-gray-300 text-justify leading-relaxed tracking-wide">
              {pr.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
