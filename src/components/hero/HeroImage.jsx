import usePageGlobalStore, { getProfileData } from "@/store/usePageGlobalStore";
import { heroImageAnimation } from "@/utils/AnimationVarients";
import { sanityImageUrlFor } from "@/utils/useSanityImageUrl";
import { motion } from "framer-motion";
import React from "react";

const HeroImage = () => {
  const { heroImage } = usePageGlobalStore(getProfileData);

  return (
    <motion.div
      className="basis-5/12 flex items-center justify-center"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      variants={heroImageAnimation}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={
          heroImage?.src
            ? heroImage.src
            : sanityImageUrlFor(heroImage).height(400).url()
        }
        className="lg:max-h-[400px] sm:max-h-[300px] max-h-[200px]"
        alt=""
        height={400}
        width={400}
      />
    </motion.div>
  );
};

export default HeroImage;
