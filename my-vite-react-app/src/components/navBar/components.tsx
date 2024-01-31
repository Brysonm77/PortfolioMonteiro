import "./../../main.css";

import React, { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white w-full">
      <div className="text-2xl">Icon</div>
      {/* Desktop Links */}
      <div className="hidden md:flex items-center">
        {/* Assuming you want these links to be aligned to the left, close to the Icon */}
        <a href="#" className="py-2 px-4 text-sm hover:bg-gray-700">
          Home
        </a>
        <a href="#" className="py-2 px-4 text-sm hover:bg-gray-700">
          About
        </a>
        <a href="#" className="py-2 px-4 text-sm hover:bg-gray-700">
          Services
        </a>
        <a href="#" className="py-2 px-4 text-sm hover:bg-gray-700">
          Contact
        </a>
      </div>
      {/* Hamburger Icon for smaller screens */}
      <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {/* Hamburger Icon */}
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          ></path>
        </svg>
      </div>
      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } md:hidden flex-col items-start bg-gray-800 w-full`}
      >
        <a
          href="#"
          className="py-2 px-4 text-sm hover:bg-gray-700 text-white w-full text-left"
        >
          Home
        </a>
        <a
          href="#"
          className="py-2 px-4 text-sm hover:bg-gray-700 text-white w-full text-left"
        >
          About
        </a>
        <a
          href="#"
          className="py-2 px-4 text-sm hover:bg-gray-700 text-white w-full text-left"
        >
          Services
        </a>
        <a
          href="#"
          className="py-2 px-4 text-sm hover:bg-gray-700 text-white w-full text-left"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
