"use client"
import { motion } from "framer-motion";

const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
  };

  const AnimatedText = () => {
    return (
      <motion.div
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{ type: "linear", duration: 2.5 }} // provade mig fram till 2.5 
      >
        <h1 className="font-extrabold text-3xl">WELCOME TO ANIMATED PAGE</h1>
      </motion.div>
    );
  };
  
  export default AnimatedText;

