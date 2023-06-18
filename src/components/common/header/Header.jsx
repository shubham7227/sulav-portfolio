import { useEffect, useState } from "react";
import { CiMail } from "react-icons/ci";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import MobileNavBar from "./MobileNavBar";
import Hamburger from "hamburger-react";
import LongNavbar from "./LongNavbar";

const navData = [
  {
    label: "Experience",
    id: "experience",
    link: "#experience",
  },
  {
    label: "Skills",
    id: "skills",
    link: "#skills",
  },
  {
    label: "Projects",
    id: "projects",
    link: "#projects",
  },
  {
    label: "About",
    id: "about",
    link: "#about",
  },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileNavBar, setMobileNavBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || window.pageYOffset;
      setIsScrolled(scrollPosition >= 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={`fixed inset-0 flex flex-col z-20 ${
        mobileNavBar ? "h-[100vh]" : "h-max"
      } w-full`}
    >
      <div
        className={`fixed top-0 w-full z-20 sm:py-8 py-5 ${
          isScrolled || mobileNavBar
            ? "bg-background bg-opacity-80 backdrop-blur-xl"
            : ""
        } transition-all duration-500 overflow-hidden`}
        style={{
          height: mobileNavBar ? "320px" : "88px",
        }}
      >
        <div className="md:main-container sm:px-5">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-4 items-center text-primary text-[22px]">
              <a
                href="https://www.linkedin.com/in/sulav-giri-945870202/"
                target="_blank"
                rel="noreferrer"
                className="hover:scale-125 duration-300 transition-all"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/shubham7227"
                target="_blank"
                rel="noreferrer"
                className="hover:scale-125 duration-300 transition-all"
              >
                <FaGithub />
              </a>
            </div>
            <nav>
              <LongNavbar data={navData} />
              <div className="sm:hidden block">
                <Hamburger
                  toggled={mobileNavBar}
                  toggle={setMobileNavBar}
                  size={22}
                  duration={0.5}
                  color="#FFFFFF"
                  rounded
                />
              </div>
            </nav>
            <a
              className="md:block hidden"
              href="mailto:girishubham77@gmail.com"
            >
              <div className="md:flex hidden flex-row gap-2 items-center text-textSecondary hover:text-primary duration-150 transition-all">
                <CiMail className="text-[22px]" />
                <span className="lg:flex hidden font-extralight font-karla">
                  GET IN TOUCH
                </span>
              </div>
            </a>
          </div>
        </div>
        <div
          className="sm:hidden w-full z-50"
          onClick={() => setMobileNavBar(false)}
        >
          <MobileNavBar data={navData} />
        </div>
      </div>
      <div
        className="flex-1 w-full"
        onClick={() => setMobileNavBar(false)}
      ></div>
    </section>
  );
};

export default Header;
