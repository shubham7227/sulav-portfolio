import { useEffect, useState } from "react";
import { CiMail } from "react-icons/ci";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || window.pageYOffset;
      setIsScrolled(
        scrollPosition >= document.getElementById("hero").offsetHeight
      );
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sm:py-8 py-5 sm:fixed absolute sm:top-0 w-full ${
        isScrolled ? "bg-background bg-opacity-80 backdrop-blur-xl" : ""
      } z-20`}
    >
      <div className="sm:main-container">
        <div className="flex sm:flex-row flex-col justify-between items-center">
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
          <a href="mailto:girishubham77@gmail.com">
            <div className="md:flex hidden flex-row gap-2 items-center text-textSecondary hover:text-primary duration-150 transition-all">
              <CiMail className="text-[22px]" />
              <span className="font-extralight font-karla">GET IN TOUCH</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
