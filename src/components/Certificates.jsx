import React, { useState } from 'react';

function Certifications() {
  const certificates = [
     {
      title: "GrappleTech Internship Completion Certificate of 1 months",
      description: "This is to certify that Sahu Sanjay has successfully completed a 1-month internship at GrappleTech, gaining practical experience and skills in the field of web development and related technologies.",
      imgSrc: "/GrappleTech Internship Certificate.jpg",
      imgAlt: "Internship Certificate",
      id: "Intenship-cert",
    }, {
      title: "Oracle MySQL HeatWave Implementation Certified Associate Rel 1",
      description:" 🏅 Certified by Oracle University",
      imgSrc: "/oracleCertificate.jpg",
      imgAlt: "Oracle MySQL Certificate",
      id: "MySQL-cert",
    },  
    {
      title: "Android Development Workshop Certificate",
      description:" 🎓 Participated",
      imgSrc: "/public/Android Workshop Certification.jpg",
      imgAlt: "Android Certificate",
      id: "java-cert",
    }, {
      title: "Blind C (Coding Competition) Inter College Competition Certificate",
      description: "Runner Up - 2nd Position Achieved",
      imgSrc: "/Blind C.jpg",
      imgAlt: "Blind C Certificate",
      id: "aiml-cert",
    }, {
      title: "Bite Bettle Hackathon Certificate",
      description: "🎯 Participant",
      imgSrc: "/Hackathon Byte Battle Certificate.jpg",
      imgAlt: "Ethical Hacking Certificate",
      id: "ethical-hacking-cert",
    },{
      title: "Balod Technofest Project Presentation Certificate",
      description: "🎖 Participation",
      imgSrc: "/Balod Techfest Certificate.jpg",
      imgAlt: "Penetration Testing Certificate",
      id: "pen-test-cert",
    },
   
    {
      title: "React-Next Workshop Certificate",
      description: "🥇 1st Position Achieved, Excellence Certificate for React-Next Workshop ",
      imgSrc: "/React-Next Workshop Excellence Certificate .jpg",
      imgAlt: "Generative AI Workshop Certificate",
      id: "React-Next-cert",
    },
     {
      title: "B Certificate in Non Technical Skills from NSS",
      description: "This is to certify that Cadet Sahu Sanjay has successfully completed the prescribed training and fulfilled all requirements for the award of 'B' Certificate in Non Technical Skills from NSS.",
      imgSrc: "/public/B Certificate.jpg",
      imgAlt: "B Certificate",
      id: "B-cert",
    },
     {
      title: "Inter-College Sports Event – Kho Kho",
      description: "🥇 1st Position Achieved",
      imgSrc: "/kho kho game 1st prize certificate.jpg",
      imgAlt: "Python Django Certificate",
      id: "django-cert",
    },
     {
      title: "Triple Jump University Level Competition Certificate",
      description: "🥈 2nd Position Achieved",
      imgSrc: "/tripple jump runner up certificate.jpg",
      imgAlt: "AI ML Workshop Certificate",
      id: "triplejump-cert",
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
    <section id="certificates" name="Certifications" className="min-h-screen bg-black py-20 px-5">
     
      <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#00F5FF] via-[#FF00F7] to-[#FFD700] animate-pulse drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
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
                className="text-white mt-6 w-full rounded-xl shadow-xl border border-gray-800 hover:scale-105 transition-transform duration-300"
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
