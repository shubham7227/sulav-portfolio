import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
const sectionIds = ["hero", "experience", "skills", "projects", "about"];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const { scrollY } = useScroll();

  const handleSectionScroll = (currentScroll) => {
    const sectionOffsets = sectionIds.map((id) => {
      const section = document.getElementById(id);
      return {
        id,
        offset: section.offsetTop,
        height: section.offsetHeight,
      };
    });
    for (const { id, offset, height } of sectionOffsets) {
      if (currentScroll >= offset && currentScroll < offset + height) {
        setActiveSection(id);
        break;
      }
    }
  };

  useMotionValueEvent(scrollY, "change", (currentScroll) => {
    handleSectionScroll(currentScroll);
  });

  return (
    <nav
      className={`sm:sticky sm:pt-8 pt-5 sm:top-0 w-max relative z-30 ${
        activeSection !== "hero"
          ? "md:mr-auto md:ml-auto sm:mr-0 md:pr-0 sm:pr-5 ml-auto mr-auto"
          : "mx-auto"
      }`}
    >
      <div className="flex sm:flex-row flex-col items-center lg:gap-14 sm:gap-2 gap-6 sm:h-[24px]">
        <a
          href="#experience"
          className={`uppercase py-1 sm:px-6 md:px-8 px-8 rounded-[30px] hover:text-primary hover:outline outline-primary outline-1 duration-150 transition-all ${
            activeSection === "experience"
              ? "outline text-primary"
              : "text-textSecondary"
          }`}
        >
          Experience
        </a>
        <a
          href="#skills"
          className={`uppercase py-1 sm:px-6 md:px-8 px-8 rounded-[30px] hover:text-primary hover:outline outline-primary outline-1 duration-150 transition-all ${
            activeSection === "skills"
              ? "outline text-primary"
              : "text-textSecondary"
          }`}
        >
          Skills
        </a>
        <a
          href="#projects"
          className={`uppercase py-1 sm:px-6 md:px-8 px-8 rounded-[30px] hover:text-primary hover:outline outline-primary outline-1 duration-150 transition-all ${
            activeSection === "projects"
              ? "outline text-primary"
              : "text-textSecondary"
          }`}
        >
          Projects
        </a>
        <a
          href="#about"
          className={`uppercase py-1 sm:px-6 md:px-8 px-8 rounded-[30px] hover:text-primary hover:outline outline-primary outline-1 duration-150 transition-all ${
            activeSection === "about"
              ? "outline text-primary"
              : "text-textSecondary"
          }`}
        >
          About
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
