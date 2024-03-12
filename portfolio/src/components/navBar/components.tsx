import React, { useState } from "react";

import iconBm from "../../assets/img/BmIcon.png";
import { motion } from "framer-motion";

const NavBar = () => {
  const handleLinkClick = (event: React.MouseEvent, id: string) => {
    event.preventDefault();

    const section = document.getElementById(id);
    if (section !== null) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const [isOpen, setIsOpen] = useState(false);

  const overlayVariants = {
    initial: {
      scale: 1, // Start at normal size
      opacity: 0,
    },
    hover: {
      scale: 1.05, // Scale up a bit on hover
      opacity: 1,
      transition: { duration: 0.2, ease: "easeInOut" }, // Quick transition for pop effect
    },
  };

  const lineVariants = {
    opened: { rotate: 490, y: 10 },
    closed: { rotate: 0, y: 0 },
  };
  const midLineVariants = {
    opened: { opacity: 0 },
    closed: { opacity: 1 },
  };
  const bottomLineVariants = {
    opened: { rotate: -490, y: -10 },
    closed: { rotate: 0, y: 0 },
  };

  return (
    <nav className="flex items-center p-4 bg-galaxy-gradient text-white w-full">
      {/* Flex container for centering items on all screens, justify-between on desktop */}
      <div className="flex items-center justify-center md:justify-between w-full max-w-4xl mx-auto">
        {/* Left Links (visible on desktop only) */}
        <div className="hidden md:flex flex-grow items-center justify-end space-x-4">
          <motion.button
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full mx-2 font-bold text-lg"
          >
            About
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full mx-2 font-bold text-lg"
          >
            Resume
          </motion.button>
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
          <motion.button
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full mx-2 font-bold text-lg"
          >
            Skills
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full mx-2 font-bold text-lg"
          >
            Contact Me
          </motion.button>
        </div>

        {/* Hamburger Menu Icon (visible on mobile only) */}
        <div
          className="md:hidden z-50 ml-auto"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div className="w-8 h-8  flex flex-col justify-center items-center space-y-2">
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
          initial={{ y: "-100%" }} // Start above the view
          animate={{ y: 0 }} // Move to original position
          exit={{ y: "-100%" }} // Exit to the top
          transition={{ type: "spring", stiffness: 30, duration: 0.5 }}
          className="absolute top-0 right-0 h-full w-full bg-black bg-opacity-65 text-white flex flex-col space-y-3 md:hidden"
        >
          <motion.div
            className="mt-23 h-12 w-full rounded overflow-hidden relative bg-galaxy-gradient"
            initial="initial"
            whileHover="hover"
          >
            {/* Overlay with the second gradient */}
            <motion.div
              className="absolute inset-0 bg-galaxy-inv"
              variants={overlayVariants}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
            <motion.button
              className="absolute inset-0 w-full h-full font-bold text-xl"
              variants={{}}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              About
            </motion.button>
          </motion.div>
          <motion.div
            className="mt-23 h-12 w-full rounded overflow-hidden relative bg-galaxy-gradient"
            initial="initial"
            whileHover="hover"
          >
            {/* Overlay with the second gradient */}
            <motion.div
              className="absolute inset-0 bg-galaxy-inv"
              variants={overlayVariants}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
            <motion.button
              className="absolute inset-0 w-full h-full font-bold text-xl"
              variants={{}}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              Resume
            </motion.button>
          </motion.div>
          <motion.div
            className="mt-23 h-12 w-full rounded overflow-hidden relative bg-galaxy-gradient"
            initial="initial"
            whileHover="hover"
          >
            {/* Overlay with the second gradient */}
            <motion.div
              className="absolute inset-0 bg-galaxy-inv"
              variants={overlayVariants}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
            <motion.button
              className="absolute inset-0 w-full h-full font-bold text-xl"
              variants={{}}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              Skills
            </motion.button>
          </motion.div>
          <motion.div
            className="relative mt-23 h-12 w-full rounded overflow-hidden bg-galaxy-gradient"
            initial="initial"
            whileHover="hover"
          >
            <motion.div
              className="absolute inset-0 bg-galaxy-inv"
              variants={overlayVariants}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
            <motion.button
              className="font-bold text-xl text-white absolute inset-0 w-full h-full flex items-center justify-center"
              variants={{}}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => handleLinkClick(e, "contact")} // Adjusted to trigger smooth scroll on click
              style={{ background: "none", border: "none" }} // Ensuring the button has no additional styling
            >
              Contact
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </nav>
  );
};

export default NavBar;
