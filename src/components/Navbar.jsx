import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { ImCross } from "react-icons/im";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    { id: 1, name: "home" },
    { id: 2, name: "achievements" },
    { id: 3, name: "projects" },
    { id: 4, name: "certificates" },
    { id: 5, name: "contact" },
  ];

const handleScroll = (section) => {
  const target = document.getElementById(section);
  if (!target) return;

  if (menu) {
    setMenu(false);
    // wait until layout stabilizes
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      })
    );
  } else {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};



  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-lg shadow-lg border-b border-gray-700 animate-fadeIn">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-3 cursor-pointer animate-slideInLeft">
          <img
            className="w-10 h-10 rounded-full border  hover:scale-105 transition-transform duration-500"
            src="/public/ghibliprofile.png"
            alt="Logo"
          />
          <div>
            <h1 className="font-bold text-xl text-white transition-all duration-500 hover:text-red-500">
              Sanjay <span className="text-red-500">Sahu</span>
            </h1>
            <p className="text-sm text-gray-400">Full Stack Developer</p>
          </div>
        </div>

        <ul className="hidden md:flex space-x-8 text-lg font-semibold">
          {navItems.map(({ id, name }, index) => (
            <li
              key={id}
              onClick={() => handleScroll(name)}
              className={`text-gray-300 hover:underline underline-offset-8 cursor-pointer translation-transform duration-300 hover:text-green-400 hover:scale-105 hover:tracking-wide animate-fadeInUp animation-delay-${index * 200}`}
            >
              {name}
            </li>
          ))}
        </ul>

        <div
          className="md:hidden text-3xl text-white cursor-pointer transform transition-transform duration-500 hover:rotate-90"
          onClick={() => setMenu(!menu)}
        >
          {menu ? <ImCross /> : <IoMdMenu />}
        </div>
      </div>

      {menu && (
        <div className="md:hidden bg-black/90 backdrop-blur-md px-6 pb-6 animate-slideDown">
          <ul className="flex flex-col space-y-5 text-lg font-semibold text-white pt-4">
            {navItems.map(({ id, name }, index) => (
              <li
                key={id}
                onClick={() => handleScroll(name)}
                className={`hover:text-pink-400 border-b border-gray-700 pb-2 cursor-pointer transition-transform transform hover:scale-105 animate-fadeInUp animation-delay-${index * 100}`}
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
