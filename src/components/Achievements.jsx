import React from "react";

const Achievements = () => {
  const Achieve = [
    {
      title: "Blind C Inter College Competition",
      description: "🥈 2nd Position Achieved",
    },
    {
      title: "Triple Jump University Level Competition",
      description: "🥈 2nd Position Achieved",
    },
    {
      title: "Inter-College Android Development Workshop",
      description: "🎓 Participated",
    },
    {
      title: "Bite Bettle Hackathon",
      description: "🎯 Participant",
    },
    {
      title: "Inter-College Sports Event – Kho Kho",
      description: "🥇 1st Position Achieved",
    },
    {
      title: "Balod Technofest Project Presentation",
      description: "🎖 Participation",
    },
  ];

  return (
    <section id="Achievements"  className="w-screen min-h-screen bg-black py-20 px-6 flex flex-col items-center">
      <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-400 to-pink-500 mb-14 drop-shadow-lg">
        Achievements
      </h1>

      <div className="grid gap-8 max-w-6xl w-full md:grid-cols-2 lg:grid-cols-2">
        {Achieve.map((ach, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-zinc-900 to-gray-800 border border-gray-700 rounded-2xl shadow-xl p-8 hover:scale-105 transition-transform duration-300"
          >
            <h2 className="text-2xl font-semibold text-cyan-400 mb-2 drop-shadow-sm">
              {ach.title}
            </h2>
            <p className="text-lg text-gray-300">{ach.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
