import { motion } from "framer-motion";
import { CiMail, CiPhone } from "react-icons/ci";
import Footer from "./Footer";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import {
  fadeAnimation,
  scaleOutAnimation,
  slideOutAnimation,
  wordsContainerNoDelay,
} from "@/utils/AnimationVarients";
import TextContainer from "../hero/TextContainer";

const Contact = () => {
  return (
    <section id="contact" className="main-container">
      <div className="py-[5rem] flex flex-col justify-center items-center gap-8">
        <div>
          <motion.p
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            variants={slideOutAnimation}
            className="text-textDim font-karla sm:max-w-[60%] text-center mx-auto"
          >
            Have an idea?
          </motion.p>
          <motion.h2
            variants={wordsContainerNoDelay}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="heading2 text-center"
          >
            <TextContainer text="Let's Connect" />
          </motion.h2>
        </div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeAnimation}
          className="flex sm:flex-row flex-col sm:gap-8 gap-4 items-center"
        >
          <a
            href="mailto:girishubham77@gmail.com"
            className="py-3 px-5 flex flex-row gap-2 text-primary bg-backgroundSecondary rounded-xl shadow-md items-center hover:bg-backgroundLight duration-150 transition-all font-light"
          >
            <CiMail className="text-[1.4rem]" />
            <span className="">girishubham77@gmail.com</span>
          </a>
          <a
            href="tel:+977-9866309870"
            className="py-3 px-5 flex flex-row gap-2 text-primary bg-backgroundSecondary rounded-xl shadow-md items-center hover:bg-backgroundLight duration-150 transition-all font-light"
          >
            <CiPhone className="text-[1.4rem]" />
            <span className="">+977-9866309870</span>
          </a>
        </motion.div>

        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={scaleOutAnimation}
          className="flex flex-row gap-4 items-center"
        >
          <a
            href="https://github.com/shubham7227"
            target="_blank"
            rel="noreferrer"
          >
            <div className="text-primary bg-backgroundSecondary hover:bg-backgroundLight duration-150 transition-all p-3 rounded-full">
              <FaGithub className="text-[24px]" />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/sulav-giri-945870202/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="text-primary bg-backgroundSecondary hover:bg-backgroundLight duration-150 transition-all p-3 rounded-full">
              <FaLinkedinIn className="text-[24px]" />
            </div>
          </a>
          <a
            href="https://www.instagram.com/sulav.7/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="text-primary bg-backgroundSecondary hover:bg-backgroundLight duration-150 transition-all p-3 rounded-full">
              <FaInstagram className="text-[24px]" />
            </div>
          </a>
          <a href="https://wa.me/8538945130" target="_blank" rel="noreferrer">
            <div className="text-primary bg-backgroundSecondary hover:bg-backgroundLight duration-150 transition-all p-3 rounded-full">
              <FaWhatsapp className="text-[24px]" />
            </div>
          </a>
        </motion.div>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
