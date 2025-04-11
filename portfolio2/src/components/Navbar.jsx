import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { ImCross } from "react-icons/im";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    { id: 1, name: "Home" },
    { id: 2, name: "Achievements" },
    { id: 3, name: "Projects" },
    { id: 4, name: "Certificates" },
    { id: 5, name: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo & Name */}
        <div className="flex items-center space-x-3">
          <img className="w-10 h-10" src="/logo.png" alt="Logo" />
          <div>
            <h1 className="font-bold text-lg">
              Sanjay <span className="text-red-500">Sahu</span>
            </h1>
            <p className="text-sm text-gray-600">Full Stack Developer</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium text-gray-700">
          {navItems.map(({ id, name }) => (
            <li key={id} className="hover:text-green-500 cursor-pointer">{name}</li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-3xl" onClick={() => setMenu(!menu)}>
          {menu ? <ImCross /> : <IoMdMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menu && (
        <div className="md:hidden bg-white shadow-inner px-6 pb-4">
          <ul className="flex flex-col space-y-4 text-lg font-medium text-right">
            {navItems.map(({ id, name }) => (
              <li
                key={id}
                className="hover:text-green-500 cursor-pointer"
                onClick={() => setMenu(false)}
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
