import { useEffect, useState } from "react";

import { motion } from "framer-motion";

const descriptors = [
  "a learner",
  "a developer",
  "creative",
  "an engineer",
  "a problem solver",
];

// Function to generate a single shooting star's properties
const generateShootingStar = () => ({
  id: Math.random(),
  initialX: `${Math.random() * 100 - 50}vw`,
  finalX: `${Math.random() * 100 + 100}vw`,
  y: `${Math.random() * 100}vh`,
  duration: Math.random() * 2 + 1,
});

const Landing = () => {
  const [currentDescriptorIndex, setCurrentDescriptorIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  // Ensure this is the only place shootingStars is defined in your component
  const [shootingStars, setShootingStars] = useState(
    Array.from({ length: 5 }, generateShootingStar)
  );

  useEffect(() => {
    const currentDescriptor = descriptors[currentDescriptorIndex];
    let charIndex = 0;

    const intervalId = setInterval(() => {
      setCurrentText(currentDescriptor.slice(0, charIndex + 1));
      charIndex += 1;

      if (charIndex === currentDescriptor.length) {
        clearInterval(intervalId);
        setTimeout(() => {
          setCurrentDescriptorIndex(
            (prevIndex) => (prevIndex + 1) % descriptors.length
          );
          setCurrentText("");
        }, 1200);
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, [currentDescriptorIndex]);

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
      <div className="flex h-full flex-col justify-center items-center">
        <div className="flex flex-wrap justify-center items-center mr-0 lg:mr-40">
          <motion.div
            className="m-2 p-4 text-galaxy-grey text-6xl shine sm:text-8xl" // Add 'shine' class here
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Hello, Welcome To My Life!
          </motion.div>
        </div>

        <div className="flex flex-wrap justify-center items-center">
          <motion.div className="mt-20 p-4 text-white text-4xl sm:text-6xl">
            I am {currentText}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
