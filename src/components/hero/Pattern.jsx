import { scaleInAnimation } from "@/utils/AnimationVarients";
import { motion } from "framer-motion";

const Pattern = () => {
  return (
    <div className="absolute overflow-hidden w-full sm:h-[800px] h-[800px] z-0">
      <div className="absolute bg-transparent sm:w-[900px] sm:h-[900px] w-[600px] h-[600px] rounded-full top-[50%] left-[50%] translate-x-[-50%] sm:translate-y-[-65%] translate-y-[-90%] flex justify-center items-center">
        <motion.div
          variants={scaleInAnimation}
          initial="offscreen"
          animate="onscreen"
          className="bg-transparent border-[1px] border-textSecondary/20 rounded-full w-[100%] h-[100%] flex justify-center items-center"
        >
          <div className="bg-transparent border-[1px] border-textSecondary/20 rounded-full w-[85%] h-[85%] flex justify-center items-center">
            <div className="bg-transparent border-[1px] border-textSecondary/20 w-[75%] h-[75%] flex justify-center items-center rounded-full">
              <div className="bg-transparent border-[1px] border-textSecondary/20 w-[65%] h-[65%] flex justify-center items-center rounded-full"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Pattern;
