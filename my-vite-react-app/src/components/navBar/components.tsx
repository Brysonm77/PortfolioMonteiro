// import "./NavBar.css"; // Import your custom CSS file?

import "./../../main.css";

import React, { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-red">
      <div className="text-2xl">MyBrand</div>
      <div className="sm:hidden" onClick={() => setIsOpen(!isOpen)}>
        {/* Hamburger Icon */}☰
      </div>
      <ul className={`md:flex ${isOpen ? "block" : "hidden"}`}>
        {/* Replace these with your actual navigation links */}
        <li className="p-2 hover:bg-gray-700">
          <a href="#">Home</a>
        </li>
        <li className="p-2 hover:bg-gray-700">
          <a href="#">About</a>
        </li>
        <li className="p-2 hover:bg-gray-700">
          <a href="#">Services</a>
        </li>
        <li className="p-2 hover:bg-gray-700">
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
