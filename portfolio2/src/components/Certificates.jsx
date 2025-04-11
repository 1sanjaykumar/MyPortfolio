import React, { useState } from 'react';

function Certifications() {
  const certificates = [
    {
      title: "Programming in CPP",
      description: "Top 5% globally from NPTEL",
      imgSrc: "/NPTELJAVA.jpg",
      imgAlt: "Java Certificate",
      id: "java-cert",
    },
    {
      title: "Compilor Design",
      description: "SWAYAM NPTEL",
      imgSrc: "/EthicalHackingNPTEL.jpg",
      imgAlt: "Ethical Hacking Certificate",
      id: "ethical-hacking-cert",
    },
    {
      title: "Data Analytics with Python",
      description: "IIT Kanpur (E&ICT)",
      imgSrc: "/IITKanpur.png",
      imgAlt: "Penetration Testing Certificate",
      id: "pen-test-cert",
    },
    {
      title: "Web Development",
      description: "Techo-net",
      imgSrc: "/techonet.jpeg",
      imgAlt: "Python Django Certificate",
      id: "django-cert",
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
    <div name="Certifications" className="min-h-screen bg-gray-50 py-10 px-5">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-red-600 mb-12">Certifications</h1>

      <div className="grid gap-8 max-w-5xl mx-auto md:grid-cols-2">
        {certificates.map((cert) => (
          <div key={cert.id} className="bg-white p-6 rounded-3xl shadow-md flex flex-col justify-between hover:scale-102 transition-transform duration-400">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">{cert.title}</h2>
              <p className="text-gray-600 leading-relaxed">{cert.description}</p>
            </div>
            <button
              onClick={() => toggleImage(cert.id)}
              className="mt-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-full transition-all duration-300"
            >
              {visibleImages[cert.id] ? 'Hide Certificate' : 'View Certificate'}
            </button>
            {visibleImages[cert.id] && (
              <img
                src={cert.imgSrc}
                alt={cert.imgAlt}
                className="mt-4 w-full rounded-lg shadow-md"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;