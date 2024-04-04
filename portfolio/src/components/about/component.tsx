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
      <div className="text-white">
        <div className="flex h-full flex-col justify-center">
          <p>this is where an image of me would go</p>
          <div className="flex flex-wrap justify-center items-center">
            <p>
              I have lived my life based on three pillars. Through these
              pillars(below) I have not only been able to learn academically,
              but also learn how to be an overall better person. My journey in
              technology started through the military as a Data System
              Administrator. I achieved a rank of a Corporal, which promopted me
              to be in charge of not only the well being of my junior Marines,
              but I also had to ensure their technical proficiency was exceeding
              the Marine Corps standard. Going into the miliary exposed me to
              various concepts and software/hardware tools, however, I was not
              satisfied with the current knowledge I possessed. This started my
              Computer Science journey where I fell in love with Software
              Development. My degree put me in different situations with
              different types of tools while simultaneously exposing me to
              different groups of people with the same mindset. I fell in love
              with the creative freedom and the critical thinking that comes
              with development. I hope to find a company that allows me to grow
              creatively, but also expose me to new problems and questions which
              will keep me learning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
