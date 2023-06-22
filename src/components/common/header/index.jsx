import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Hamburger from "hamburger-react";
import MobileNavBar from "./MobileNavBar";
import LongNavbar from "./LongNavbar";

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
    <div
      className={`fixed top-0 w-full z-20 py-4 bg-background bg-opacity-80 backdrop-blur-xl transition-all duration-500 overflow-hidden ${
        mobileNavBar ? "h-[216px]" : "h-[80px]"
      }`}
    >
      <div className="sm:main-container">
        <div className="flex flex-row justify-between items-center">
          <Link
            href="/"
            className="font-karla text-[2rem] font-bold tracking-tighter hover:text-primary text-textSecondary transition-all duration-150 px-4"
          >
            SG
          </Link>
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
        </div>
      </div>
      <div className="sm:hidden block w-full z-50">
        <MobileNavBar data={navData} />
      </div>
    </div>
  );
};

export default Header;
