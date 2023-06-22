import { motion } from "framer-motion";
import {
  fadeAnimation,
  fadeAnimation2,
  scaleOutAnimation,
  slideOutAnimation,
  slideOutAnimation3,
  wordsContainer,
} from "@/utils/AnimationVarients";
import TextContainer from "../common/TextContainer";
import Link from "next/link";
import { BsArrowDown, BsArrowRight } from "react-icons/bs";

const Info = () => {
  return (
    <div className="flex-1 flex flex-col gap-6 justify-center">
      <motion.div
        initial="offscreen"
        animate="onscreen"
        className="flex flex-col gap-3"
      >
        <motion.h1
          className="font-prompt font-semibold lg:text-[4rem] text-[2.3rem] text-primary leading-tight"
          variants={fadeAnimation2}
        >
          I write code that solves problem
        </motion.h1>
        <motion.p
          className="lg:text-[20px] sm:text-[18px] text-textSecondary font-karla max-w-[90%]"
          variants={slideOutAnimation3}
        >
          I am a computer engineering graduate with exceptional problem solving
          skills. I primarily develop solutions using MERN stack.
        </motion.p>
      </motion.div>
      <motion.div
        initial="offscreen"
        animate="onscreen"
        variants={slideOutAnimation3}
        className="flex-none z-10"
      >
        <Link
          href="#contact"
          className="w-max flex flex-row gap-3 items-center text-primary rounded-xl py-2 pl-3 pr-4  bg-backgroundSecondary border border-backgroundLight duration-150 transition-all font-light font-karla text-sm hover:bg-backgroundLight z-10"
          scroll={false}
        >
          <p className="flex">Connect</p>
          <BsArrowDown />
        </Link>
      </motion.div>
    </div>
  );
};

export default Info;
