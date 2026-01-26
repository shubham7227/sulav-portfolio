import { motion } from "framer-motion";
import { heroAnimation } from "@/utils/animationVarients";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import usePageGlobalStore, { getProfileData } from "@/store/usePageGlobalStore";

const Info = () => {
  const { title, description } = usePageGlobalStore(getProfileData);

  return (
    <motion.div
      initial="offscreen"
      animate="onscreen"
      variants={heroAnimation}
      className="basis-7/12 flex flex-col gap-6 justify-center"
    >
      <div className="flex flex-col gap-3">
        <h1 className="font-prompt font-semibold lg:text-[4rem] text-[2.3rem] text-primary leading-tight">
          {title}
        </h1>
        <p className="sm:text-lg text-textSecondary font-karla max-w-[90%]">
          {description}
        </p>
      </div>
      <div className="flex-none z-10">
        <Link
          href="#contact"
          className="w-max flex flex-row gap-3 items-center text-primary rounded-xl py-2 px-5  bg-backgroundSecondary border border-backgroundLight duration-150 transition-all font-light font-karla hover:bg-backgroundLight z-10 sm:group sm:text-base text-sm"
          scroll={false}
        >
          <p className="flex">Connect</p>
          <BsArrowRight className="group-hover:rotate-45 duration-300 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};

export default Info;
