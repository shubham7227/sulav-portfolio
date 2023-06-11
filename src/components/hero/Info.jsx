import Image from "next/image";
import { profile } from "../../assets";
import { motion } from "framer-motion";
import {
  scaleOutAnimation,
  slideOutAnimation,
  wordsContainer,
} from "@/utils/AnimationVarients";
import TextContainer from "./TextContainer";

const Info = () => {
  return (
    <div className="flex flex-col sm:gap-12 gap-8 items-center justify-center">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        variants={scaleOutAnimation}
        className="sm:h-[150px] sm:w-[150px] rounded-full h-[120px] w-[120px]"
      >
        <Image
          src={profile}
          className="h-full w-full object-cover rounded-full"
          alt="profile"
          priority
        />
      </motion.div>
      <div className="text-center">
        <motion.p
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={slideOutAnimation}
          className="uppercase sm:tracking-[6px] tracking-[5px] sm:text-[20px] text-textSecondary font-karla"
        >
          SOFTWARE ENGINEER
        </motion.p>
        <motion.h1
          className="uppercase font-prompt font-semibold sm:text-[64px] text-[52px] text-primary leading-tight"
          variants={wordsContainer}
          initial="hidden"
          animate="visible"
        >
          <TextContainer text="SULAV GIRI" />
        </motion.h1>
      </div>
    </div>
  );
};

export default Info;
