import { motion } from "framer-motion";
import { slideOutAnimation } from "@/utils/AnimationVarients";

const ExperienceCard = ({ data, active }) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      variants={slideOutAnimation}
      className={`sm:py-12 sm:px-10 py-8 px-6 ${
        active ? "bg-backgroundSecondary shadow-lg" : "cursor-pointer"
      } rounded-xl flex flex-col gap-5 mx-6`}
    >
      <div className="">
        <h3 className="font-prompt text-primary font-medium text-[22px]">
          {data.title}
        </h3>
        <h4 className="font-prompt text-primary font-medium text-[18px]">
          {data.company}
        </h4>
        <p className="font-karla text-textDim font-light uppercase pt-2">
          {data.dateStarted} - {data.dateEnd}
        </p>
      </div>
      <ul className="font-karla text-textSecondary list-disc pl-4">
        {data.description.map((entry, key) => (
          <li key={key} className="pb-2">
            {entry}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ExperienceCard;
