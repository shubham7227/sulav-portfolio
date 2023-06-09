import { CiMail, CiPhone } from "react-icons/ci";
import Footer from "./Footer";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="main-container">
      <div className="py-[5rem] flex flex-col justify-center items-center gap-8">
        <div>
          <p className="text-textDim font-karla sm:max-w-[60%] text-center mx-auto">
            Have an idea?
          </p>
          <h2 className="heading2 text-center">Let&apos;s Connect</h2>
        </div>
        <div className="flex sm:flex-row flex-col sm:gap-8 gap-4 items-center">
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
        </div>

        <div className="flex flex-row gap-4 items-center">
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
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
