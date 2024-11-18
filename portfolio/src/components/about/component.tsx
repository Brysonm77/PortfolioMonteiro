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
      <div className="h-screen left-0 w-full overflow-hidden bg-gradient-to-b from-black to-black via-galaxy-deepurple">
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
        /* About Section */
      <section className="flex items-center justify-center py-16 z-10 relative">
        <div className="w-full px-4">
          <h2 className=" pb-15 text-7xl font-bold text-white mb-8 text-center">
            About Me
          </h2>

          <div className="flex items-center justify-center space-x-8">
            {/* Left Side */}
            <div className="w-1/2">
              <img
                src="path_to_your_image.jpg" // Replace with your image path
                alt="Your Name"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Right Side */}
            <div className="w-1/2 bg-opacity-65 text-white p-6">
  <h2 className="text-3xl font-semibold mb-4">Hi, I'm Bryson Monteiro</h2>
  
  <div className="mb-6">
    <p className="text-xl mb-2">I live by three pillars:</p>
    <ul className="list-disc pl-6 space-y-2">
      <li className="text-2xl">1. You can lose everything except your education.</li>
      <p className="text-xl">Prior to earning my Bachelor of Science in Computer Science, my parents always told me that even when you lose everything, you will never lose your education. At first, I was 
        skeptical and thought it was something parents tell you to force you into college. However, the more I grew, the more I understood that regardless of who I was talking to or what I was doing, I 
        would always be limited by the level of education and experience I had achieved. Simply put, my life experiences have almost always been dictated by my ability to continue learning and what I had 
        learned up until that point. So much so, that I decided pursuing my Master's Degree in Cybersecurity would allow me to look at not only technology but life in a different way.
      </p>
      <li className="text-2xl">2. No matter where you are, if you learn something, teach it to those who don't know.</li>
      <p className="text-xl">Joining the United States Marine Corps was one of the hardest, yet most eye-opening experiences I have been through. Rising through the ranks, I learned that learning anything 
        is useless if you do not pass the knowledge on to others. Anytime I had to learn a new concept or technical skill, I found it harder to work when those around me didn't know as much. I began to love
         teaching people about subjects I was knowledgeable in. Whether in class, at work, or in the Marine Corps, anywhere I went, I would always offer a helping hand to those who wanted to learn, and it
        taught me two things, you can make some very good, healthy friendships and you get a sense of fulfillment when the people you teach show growth.
      </p>
      <li className="text-2xl">3. If something isn't difficult, it's probably not worth it.</li>
      <p className="text-xl">Referring back to the last pillar, joining the Marines was truly one of the hardest things I have ever accomplished. As I grew older, I began to understand the truth in the 
        statement, "If something isn't difficult, it's probably not worth it." The Marines, for example, was not always something I spoke about in high regard. From the long hours to dealing with constant 
        stress, it's fair to say I had my fair share of complaining. However, I started realizing that all those trials and tribulations taught me more about myself and what I could accomplish—and how I 
        could accomplish it.
        Retrospectively, I look back on everything I have done and realize that everything I am proud of took a lot of work and effort to achieve. From attaining my Bachelor's degree, to joining the Marine Corps, 
        to training my dog, and now, hopefully attaining my Master's degree. All of these experiences came with moments where I thought I couldn't do it, or moments when I considered quitting. Now, as I grow older, 
        I understand that I need to be uncomfortable in order to achieve more.
      </p>
    </ul>
  </div>
</div>
          </div>
        </div>
      </section>
      </div>
    );
  };

  
  
export default About;


/// Below I am setting a copy and past sheet where I can reuse for other sections



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
