import SkillCard from "./SkillCard";
import TextContainer from "../common/TextContainer";
import { motion } from "framer-motion";
import { wordsContainerNoDelay } from "@/utils/animationVarients";
import usePageGlobalStore, { getProfileData } from "@/store/usePageGlobalStore";

const Skills = () => {
  const { skill } = usePageGlobalStore(getProfileData);
  return (
    <section id="skills" className="pt-[10rem]">
      <div className="py-[2rem}">
        <div className="flex flex-row items-center relative">
          <div className="h-[130px] w-[60px] absolute dots-background left-2 z-0" />
          <motion.h2
            variants={wordsContainerNoDelay}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="heading2 z-10 main-container sm:px-0 px-[1rem]"
          >
            <TextContainer text="Skills" />
          </motion.h2>
        </div>
        <div className="main-container pt-[3rem] px-[1.5rem] w-full overflow-hidden">
          <div className="grid lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-6 grid-cols-4 md:gap-x-4 md:gap-y-4 gap-x-2 gap-y-2 text-primary">
            {skill.map((entry) => (
              <div className="col-span-1" key={entry}>
                <SkillCard data={entry} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
