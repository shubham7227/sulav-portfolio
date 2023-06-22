import { heroImageAnimation } from "@/utils/AnimationVarients";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const HeroImage = () => {
  return (
    <motion.div
      className="basis-5/12 flex items-center justify-center"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      variants={heroImageAnimation}
    >
      <Image
        src="/name.svg"
        className="lg:max-h-[400px] sm:max-h-[300px] max-h-[200px]"
        alt=""
        height={400}
        width={400}
      />
    </motion.div>
  );
};

export default HeroImage;
