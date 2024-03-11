import React, { useState } from "react";

import iconBm from "../../assets/img/BmIcon.png";
import { motion } from "framer-motion";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const lineVariants = {
    opened: { rotate: 480, y: 10 },
    closed: { rotate: 0, y: 0 },
  };
  const midLineVariants = {
    opened: { opacity: 0 },
    closed: { opacity: 1 },
  };
  const bottomLineVariants = {
    opened: { rotate: -480, y: -10 },
    closed: { rotate: 0, y: 0 },
  };

  return (
    <nav className="flex items-center p-4 bg-galaxy-gradient text-galaxy-white w-full">
      {/* Flex container for centering items on all screens, justify-between on desktop */}
      <div className="flex items-center justify-center md:justify-between w-full max-w-4xl mx-auto">
        {/* Left Links (visible on desktop only) */}
        <div className="hidden md:flex flex-grow items-center justify-end space-x-4">
          <button className="hover:text-galaxy-brightpurple transition-colors font-bold text-lg">
            About
          </button>
          <button className="hover:text-galaxy-brightpurple transition-colors font-bold text-lg">
            Resume
          </button>
        </div>

        <motion.button
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.9 }}
          className="p-2 rounded-full mx-2"
        >
          <img src={iconBm} alt="IconBm" className="h-16 w-16" />
        </motion.button>

        <div className="hidden md:flex flex-grow items-center justify-start space-x-4">
          <button className="hover:text-galaxy-brightpurple transition-colors font-bold text-lg">
            Skills
          </button>
          <button className="hover:text-galaxy-brightpurple transition-colors font-bold text-lg">
            Contact Me
          </button>
        </div>

        {/* Hamburger Menu Icon (visible on mobile only) */}
        <div
          className="md:hidden z-50 ml-auto"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div className="w-8 h-8 flex flex-col justify-center items-center space-y-2">
            <div className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
              <motion.div className="flex flex-col space-y-2">
                <motion.div
                  className="w-8 h-0.5 bg-white"
                  variants={lineVariants}
                  animate={isOpen ? "opened" : "closed"}
                />
                <motion.div
                  className="w-8 h-0.5 bg-white"
                  variants={midLineVariants}
                  animate={isOpen ? "opened" : "closed"}
                />
                <motion.div
                  className="w-8 h-0.5 bg-white"
                  variants={bottomLineVariants}
                  animate={isOpen ? "opened" : "closed"}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 30, duration: 0.5 }}
          className="absolute top-0 right-0 h-full w-[75%] bg-black text-white p-8 flex flex-col space-y-4 md:hidden"
        ></motion.div>
      )}
    </nav>
  );
};

export default NavBar;
