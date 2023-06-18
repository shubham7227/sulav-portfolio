import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { CiMail } from "react-icons/ci";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import LongNavbar from "./header/LongNavbar";
import Hamburger from "hamburger-react";
import MobileNavBar from "./header/MobileNavBar";
import Image from "next/image";

const navData = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Projects",
    link: "/projects",
  },
];

const SimpleHeader = () => {
  const router = useRouter();
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
    <div
      className={`fixed top-0 w-full z-20 sm:py-5 py-3 ${
        isScrolled || mobileNavBar
          ? "bg-background bg-opacity-80 backdrop-blur-xl"
          : ""
      } transition-all duration-500 overflow-hidden ${
        mobileNavBar ? "h-[216px]" : "sm:h-[88px] h-[72px]"
      }`}
    >
      <div className="sm:main-container">
        <div className="flex flex-row justify-between items-center">
          <Link
            href="/"
            className="font-prompt text-[2rem] font-bold tracking-tighter hover:text-primary text-textSecondary transition-all duration-150"
          >
            <span className="">SG</span>
          </Link>
          <nav>
            <div className="sm:flex hidden items-center lg:gap-10 sm:gap-2 gap-6">
              {navData.map((entry, key) => (
                <Link
                  href={entry.link}
                  key={key}
                  className={`relative uppercase py-1 px-[2px] ${
                    router.pathname == entry.link
                      ? "text-primary after:border-primary"
                      : "text-textSecondary after:border-textSecondary"
                  } duration-150 transition-all after:absolute after:bottom-0 after:left-0 after:w-full after:border-b-2 hover:text-primary`}
                >
                  {entry.label}
                </Link>
              ))}
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
                {/* <a
                  className="md:block hidden"
                  href="mailto:girishubham77@gmail.com"
                >
                  <div className="md:flex hidden flex-row gap-2 items-center text-textSecondary hover:text-primary duration-150 transition-all">
                    <CiMail className="text-[22px]" />
                    <span className="lg:flex hidden font-extralight font-karla">
                    GET IN TOUCH
                  </span>
                  </div>
                </a> */}
              </div>
            </div>
          </nav>
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
        </div>
      </div>
      <div className="sm:hidden w-full z-50">
        <MobileNavBar data={navData} />
      </div>
    </div>
  );
};

export default SimpleHeader;
