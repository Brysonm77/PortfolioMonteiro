import { motion } from "framer-motion";
import { useEffect, useState } from "react"; 
import ResumeMonteiro from "../../assets/resume/ResumeMonteiro.pdf"

// Function to generate a single shooting star's properties
const generateShootingStar = () => ({
  id: Math.random(),
  initialX: `${Math.random() * 100 - 50}vw`,
  finalX: `${Math.random() * 100 + 100}vw`,
  y: `${Math.random() * 100}vh`,
  duration: Math.random() * 2 + 1,
});

const handleDownload = () => {
  const link = document.createElement('a');
  link.href = ResumeMonteiro; 
  link.download = 'resumeMonteiro.pdf';
  link.click();
};

const Resume = () => {
    // Ensure this is the only place shootingStars is defined in your component
    const [shootingStars, setShootingStars] = useState(
      Array.from({ length: 5 }, generateShootingStar)
    );
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setShootingStars(Array.from({ length: 5 }, generateShootingStar));
      }, 3000);
  
      return () => clearInterval(intervalId);
    }, []);
  
    const stars = Array.from({ length: 100 }).map((_, index) => ({
      id: index,
      x: Math.random() * 100 + "vw",
      y: Math.random() * 100 + "vh",
      scale: Math.random(),
    }));
  
    return (
      ///this is where the color is being changes
      <div className="h-screen left-0 w-full overflow-hidden bg-gradient-to-b from-black to-black via-galaxy-darkred">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            initial={{ x: star.x, y: star.y, scale: 0 }}
            animate={{ scale: star.scale }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              position: "absolute",
              width: 2,
              height: 2,
              borderRadius: "50%",
              backgroundColor: "white",
            }}
          />
        ))}
        {shootingStars.map((star) => (
          <motion.div
            key={star.id}
            initial={{ x: star.initialX, y: star.y }}
            animate={{
              x: [star.initialX, star.finalX], // Add intermediate X points if needed
              y: ["15vh", "90vh"],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              width: "2.5px",
              height: "2.5px",
              backgroundColor: "white",
            }}
          />
        ))}
             <div >
        <button
          onClick={handleDownload}
          className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition duration-300"
        >
          Download Resume
        </button>
      </div>

      {/* Main Content: Two Dividers */}
      <div className="flex h-full justify-center items-center relative z-10">
        <div className="flex w-3/4 h-full p-4">
          {/* Left Column: Academics */}
          <div className="w-1/2 p-4">
            <h2 className="text-2xl text-white font-bold mb-4">Academics</h2>
            <ul className="text-white space-y-2">
              <li>University Name - Degree (Year)</li>
              <li>Course: Example Course Name</li>
              {/* Add your academic details here */}
            </ul>
          </div>

          {/* Divider */}
          <div className="w-1px bg-white mx-4"></div>

          {/* Right Column: Work Experience */}
          <div className="w-1/2 p-4">
            <h2 className="text-2xl text-white font-bold mb-4">Work Experience</h2>
            <ul className="text-white space-y-2">
              <li>Company Name - Position (Year)</li>
              <li>Role: Example Role Description</li>
              {/* Add your work experience details here */}
            </ul>
          </div>
        </div>
      </div>
      </div>
    );
  };

export default Resume;



/*
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Function to generate a single shooting star's properties
const generateShootingStar = () => ({
  id: Math.random(),
  initialX: `${Math.random() * 100 - 50}vw`,
  finalX: `${Math.random() * 100 + 100}vw`,
  y: `${Math.random() * 100}vh`,
  duration: Math.random() * 2 + 1,
});

const About = () => {
    // Ensure this is the only place shootingStars is defined in your component
    const [shootingStars, setShootingStars] = useState(
      Array.from({ length: 5 }, generateShootingStar)
    );
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setShootingStars(Array.from({ length: 5 }, generateShootingStar));
      }, 3000);
  
      return () => clearInterval(intervalId);
    }, []);
  
    const stars = Array.from({ length: 100 }).map((_, index) => ({
      id: index,
      x: Math.random() * 100 + "vw",
      y: Math.random() * 100 + "vh",
      scale: Math.random(),
    }));
  
    return (
      ///this is where the color is being changes
      <div className="h-screen left-0 w-full overflow-hidden bg-gradient-to-b from-black to-black via-galaxy-darkblue">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            initial={{ x: star.x, y: star.y, scale: 0 }}
            animate={{ scale: star.scale }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              position: "absolute",
              width: 2,
              height: 2,
              borderRadius: "50%",
              backgroundColor: "white",
            }}
          />
        ))}
        {shootingStars.map((star) => (
          <motion.div
            key={star.id}
            initial={{ x: star.initialX, y: star.y }}
            animate={{
              x: [star.initialX, star.finalX], // Add intermediate X points if needed
              y: ["15vh", "90vh"],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              width: "2.5px",
              height: "2.5px",
              backgroundColor: "white",
            }}
          />
        ))}
      </div>
    );
  };

  
  

*/