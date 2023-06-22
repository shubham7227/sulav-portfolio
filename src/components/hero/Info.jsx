import { motion } from "framer-motion";
import { heroAnimation } from "@/utils/AnimationVarients";
import Link from "next/link";
import { BsArrowDown } from "react-icons/bs";

const Info = () => {
  return (
    <motion.div
      initial="offscreen"
      animate="onscreen"
      variants={heroAnimation}
      className="basis-7/12 flex flex-col gap-6 justify-center"
    >
      <div className="flex flex-col gap-3">
        <h1 className="font-prompt font-semibold lg:text-[4rem] text-[2.3rem] text-primary leading-tight">
          I write code that solves problem
        </h1>
        <p className="lg:text-[20px] sm:text-[18px] text-textSecondary font-karla max-w-[90%]">
          I am a computer engineering graduate with exceptional problem solving
          skills. I primarily develop solutions using MERN stack.
        </p>
      </div>
      <div className="flex-none z-10">
        <Link
          href="#contact"
          className="w-max flex flex-row gap-3 items-center text-primary rounded-xl py-2 pl-3 pr-4  bg-backgroundSecondary border border-backgroundLight duration-150 transition-all font-light font-karla text-sm hover:bg-backgroundLight z-10"
          scroll={false}
        >
          <p className="flex">Connect</p>
          <BsArrowDown />
        </Link>
      </div>
    </motion.div>
  );
};

export default Info;
