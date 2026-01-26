import { motion } from "framer-motion";
import {
  slideLeftAnimation,
  slideRightAnimation,
  wordsContainerNoDelay,
} from "@/utils/animationVarients";

import { BsBoxArrowInUpRight } from "react-icons/bs";
import Image from "next/image";
import TextContainer from "../common/TextContainer";
import usePageGlobalStore, { getProfileData } from "@/store/usePageGlobalStore";
import { sanityImageUrlFor } from "@/utils/useSanityImageUrl";

const About = () => {
  const { image, about, resumeUrl } = usePageGlobalStore(getProfileData);

  return (
    <section id="about" className="pt-[7rem]">
      <div className="bg-backgroundSecondary w-full overflow-hidden">
        <div className="main-container relative py-[3rem]">
          <div className="h-[150px] w-[150px] absolute dots-background right-0 z-0"></div>
          <div className="sm:py-[4rem] py-[2rem] px-[1.5rem] flex sm:flex-row flex-col items-center justify-between md:gap-[4rem] gap-[2rem] sm:gap-[1rem] z-10">
            <div className="flex flex-col gap-4 z-10 basis-1/3">
              <motion.h2
                variants={wordsContainerNoDelay}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="sm:hidden block heading2 text-center"
              >
                <TextContainer text="About" />
              </motion.h2>
              <motion.div
                variants={slideRightAnimation}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
                className="w-full z-10"
              >
                <Image
                  src={image?.src ? image.src : sanityImageUrlFor(image).url()}
                  className="rounded-xl h-full w-full object-cover z-10"
                  alt="Profile"
                  width={600}
                  height={600}
                />
              </motion.div>
            </div>
            <motion.div
              variants={slideLeftAnimation}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col gap-4 basis-2/3 z-10"
            >
              <h2 className="heading2 sm:block hidden">About</h2>
              <div className="flex flex-col gap-2">
                <p
                  className="text-primary font-karla font-light"
                  dangerouslySetInnerHTML={{ __html: about }}
                />
                <div>
                  <h3 className="heading3">Education</h3>
                  <div className="">
                    <p className="font-karla text-primary text-[20px]">
                      Vellore Institute of Technology - Vellore, TN, India
                    </p>
                    <p className="font-karla font-light text-primary">
                      B. Tech. Computer Science and Engineering, CGPA:
                      9.51/10.00
                    </p>
                    <ul className="list-disc font-karla text-primary font-extralight list-inside pt-2">
                      <li className="">COMPEX Scholarship</li>
                      <li className="">Merit Scholarship 2021, 2022, 2023</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="w-max">
                <a
                  href={resumeUrl}
                  target="_blank"
                  className="w-max flex flex-row gap-3 items-center text-primary rounded-xl py-2 pl-4 pr-5 bg-backgroundSecondary border border-backgroundLight duration-150 transition-all font-light font-karla hover:bg-backgroundLight"
                  rel="noreferrer"
                >
                  <BsBoxArrowInUpRight />
                  <span className="">Resume</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
