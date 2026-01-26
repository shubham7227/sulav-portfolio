import Slider from "react-slick";
import { motion } from "framer-motion";

import ExperienceCard from "./ExperienceCard";
import { useState } from "react";
import { wordsContainerNoDelay } from "@/utils/animationVarients";
import TextContainer from "../common/TextContainer";
import usePageGlobalStore, {
  getExperienceData,
} from "@/store/usePageGlobalStore";

const Experience = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const experienceData = usePageGlobalStore(getExperienceData);

  const handleAfterChange = (index) => {
    setActiveSlide(index);
  };

  const settings = {
    dots: true,
    infinite: experienceData.length > 1 ? true : false,
    cssEase: "linear",
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    focusOnSelect: experienceData.length > 1 ? true : false,
    draggable: false,
    afterChange: handleAfterChange,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          draggable: true,
        },
      },
    ],
  };

  return (
    <section id="experience" className="main-container pt-[3rem]">
      <div className="text-center flex flex-row items-center relative">
        <motion.h2
          variants={wordsContainerNoDelay}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="heading2 z-10"
        >
          <TextContainer text="Experience" />
        </motion.h2>
        <div className="h-[100px] w-[150px] absolute dots-background right-0 z-0"></div>
      </div>
      <div className="pt-[2rem] md:px-[3rem]">
        <Slider {...settings}>
          {experienceData.map((entry, key) => (
            <ExperienceCard
              data={entry}
              key={key}
              active={activeSlide == key}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Experience;
