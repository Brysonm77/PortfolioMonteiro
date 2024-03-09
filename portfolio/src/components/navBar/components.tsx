import "./../../main.css";
import "./../../global.css";

import iconBm from "../../assets/img/BmIcon.png";
import { motion } from "framer-motion";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-center p-4 bg-galaxy-gradient text-galaxy-white w-full">
      <div className="flex items-center justify-center gap-x-4 w-full max-w-4xl">
        <a
          href="#about"
          className="hover:text-galaxy-brightpurple transition-colors font-bold mx-2"
        >
          About
        </a>
        <a
          href="#resume"
          className="hover:text-galaxy-brightpurple transition-colors font-bold mx-2"
        >
          Resume
        </a>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 rounded-full mx-4 "
        >
          <img src={iconBm} alt="IconBm" className="h-20 w-20" />
        </motion.button>

        <a
          href="#skills"
          className="hover:text-galaxy-brightpurple transition-colors font-bold mx-2"
        >
          Skills
        </a>
        <a
          href="#contact"
          className="hover:text-galaxy-brightpurple transition-colors font-bold mx-2"
        >
          Contact Me
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
