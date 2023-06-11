import React from "react";
import { motion } from "framer-motion";

const TextContainer = ({ text }) => {
  const letters = Array.from(text);

  const container = {
    hidden: {
      opacity: 0,
    },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        // delay: 0.2,
        staggerChildren: 0.05,
        delayChildren: 1 * i,
      },
    }),
  };

  // Variants for each letter
  const child = {
    hidden: {
      opacity: 0,
      x: -20,
      y: 20,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.h1
      className="uppercase font-prompt font-semibold sm:text-[64px] text-[52px] text-primary leading-tight"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index} className="font-prompt">
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default TextContainer;
