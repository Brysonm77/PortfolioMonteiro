import { useEffect, useState } from "react";

import { motion } from "framer-motion";

const generateShootingStar = () => ({
  id: Math.random(),
  initialX: `${Math.random() * 100 - 50}vw`,
  finalX: `${Math.random() * 100 + 100}vw`,
  y: `${Math.random() * 100}vh`,
  duration: Math.random() * 2 + 1,
});

const About = () => {
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
    <div className="h-screen left-0 w-full overflow-hidden bg-gradient-to-b from-black to-black via-galaxy-darkpurple">
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
            x: [star.initialX, star.finalX],
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

export default About;
