import { motion } from "framer-motion";

const Landing = () => {
  const stars = Array.from({ length: 100 }).map((_, index) => ({
    id: index,
    x: Math.random() * 100 + "vw",
    y: Math.random() * 100 + "vh",
    scale: Math.random(),
  }));

  // Adjusted to generate 4 shooting stars instead of 5
  const shootingStars = Array.from({ length: 4 }).map((_, index) => ({
    // Changed from 5 to 4
    id: index,
    initialX: Math.random() * 100 - 50 + "vw", // Start off-screen
    finalX: Math.random() * 100 + 100 + "vw", // End off-screen
    y: Math.random() * 100 + "vh",
    duration: Math.random() * 2 + 1, // Duration between 1 to 3 seconds
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
          animate={{ x: star.finalX, y: star.y }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            width: "2px",
            height: "2px",
            borderRadius: "100%",
            backgroundColor: "white",
            boxShadow: "0 0 8px white, 0 0 15px white", // Glowing effect
          }}
        />
      ))}
      <motion.div
        className="font-bold text-5xl text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        style={{
          position: "absolute",
          bottom: "20%",
          width: "100%",
          textAlign: "center",
        }}
      >
        Your Shiny Grey Heading Here
      </motion.div>
    </div>
  );
};

export default Landing;
