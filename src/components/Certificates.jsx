import React, { useState } from 'react';

function Certifications() {
  const certificates = [
    {
      title: "Inter-College Android Development Workshop",
      description: "🎓 Participated",
      imgSrc: "/public/android.jpg",
      imgAlt: "Java Certificate",
      id: "java-cert",
    },
    {
      title: "Bite Bettle Hackathon",
      description: "🎯 Participant",
      imgSrc: "/public/bettlebyte.jpg",
      imgAlt: "Ethical Hacking Certificate",
      id: "ethical-hacking-cert",
    },
    {
      title: "Balod Technofest Project Presentation",
      description: "🎖 Participation",
      imgSrc: "/public/balod.jpg",
      imgAlt: "Penetration Testing Certificate",
      id: "pen-test-cert",
    },
    {
      title: "Inter-College Sports Event – Kho Kho",
      description: "🥇 1st Position Achieved",
      imgSrc: "/public/kho.jpg",
      imgAlt: "Python Django Certificate",
      id: "django-cert",
    },
    {
      title: "Triple Jump University Level Competition",
      description: "🥈 2nd Position Achieved",
      imgSrc: "/public/tripple jump.jpg",
      imgAlt: "AI ML Workshop Certificate",
      id: "aiml-cert",
    },
    {
      title: "AI & ML Workshop",
      description: "CSIT Campus",
      imgSrc: "#",
      imgAlt: "AI ML Workshop Certificate",
      id: "aiml-cert",
    },
    {
      title: "Generative AI Workshop",
      description: "CSIT Campus",
      imgSrc: "#",
      imgAlt: "Generative AI Workshop Certificate",
      id: "genai-cert",
    },
  ];

  const [visibleImages, setVisibleImages] = useState({});

  const toggleImage = (id) => {
    setVisibleImages((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="Certificates" name="Certifications" className="min-h-screen bg-black py-20 px-5">
      {/* More Attractive Heading */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#00F5FF] via-[#FF00F7] to-[#FFD700] animate-pulse drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
        🚀 Certifications 
      </h1>

      <div className="grid gap-10 max-w-6xl mx-auto sm:grid-cols-1 md:grid-cols-2">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-3xl p-6 shadow-2xl transition-transform duration-300 hover:scale-[1.03] hover:shadow-yellow-400/10"
          >
            <div>
              <h2 className="text-2xl font-bold text-cyan-300 mb-2">{cert.title}</h2>
              <p className="text-gray-400 italic">{cert.description}</p>
            </div>

            <button
              onClick={() => toggleImage(cert.id)}
              className="mt-5 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:brightness-110 text-white font-semibold py-2 px-5 rounded-full transition-all duration-300 shadow-lg"
            >
              {visibleImages[cert.id] ? 'Hide Certificate' : 'View Certificate'}
            </button>

            {visibleImages[cert.id] && cert.imgSrc !== "#" && (
              <img
                src={cert.imgSrc}
                alt={cert.imgAlt}
                className="mt-6 w-full rounded-xl shadow-xl border border-gray-800 hover:scale-105 transition-transform duration-300"
              />
            )}

            {visibleImages[cert.id] && cert.imgSrc === "#" && (
              <p className="mt-6 text-yellow-400 italic">Certificate image not available.</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
