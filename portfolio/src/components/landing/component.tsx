import { motion } from "framer-motion";

const Landing = () => {
  const stars = Array.from({ length: 100 }).map((_, index) => ({
    id: index,
    x: Math.random() * 100 + "vw",
    y: Math.random() * 100 + "vh",
    scale: Math.random(),
  }));

  return (
    <div className="h-screen left-0 w-full overflow-hidden bg-gradient-to-b from-black to-black to-black via-galaxy-darkblue">
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
      <motion.div
        className="font-bold text-5xl text-white" // Adjusted for readability against the gradient background
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        style={{
          position: "absolute", // Ensure text positioning is relative to the container
          bottom: "20%", // Position towards the bottom of the container
          width: "100%",
          textAlign: "center", // Center the text horizontally
        }}
      >
        Your Shiny Grey Heading Here
      </motion.div>
    </div>
  );
};

export default Landing;
