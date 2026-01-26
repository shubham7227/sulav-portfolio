import { motion } from "framer-motion";
import { slideOutAnimation2 } from "@/utils/AnimationVarients";
import { iconMap } from "./IconMap";

const SkillCard = ({ data }) => {
  const [title, icon] = data.split(":");

  if (!title || !icon) return null;

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      variants={slideOutAnimation2}
      className="flex flex-col gap-3 items-center justify-center bg-backgroundSecondary md:py-6 py-3 rounded-xl h-full"
    >
      {iconMap?.[icon] && (
        <div className="text-primary md:text-[2.5rem] text-[1.5rem]">
          {iconMap?.[icon] || null}
        </div>
      )}
      <span className="text-textDim font-light font-prompt sm:text-sm text-xs text-center">
        {title}
      </span>
    </motion.div>
  );
};

export default SkillCard;
