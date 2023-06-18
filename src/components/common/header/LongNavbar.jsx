import React, { useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
const sectionIds = ["hero", "experience", "skills", "projects", "about"];

const LongNavbar = ({ data }) => {
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
    <div className="sm:flex hidden items-center lg:gap-14 sm:gap-2 gap-6 sm:h-[24px]">
      {data.map((entry, key) => (
        <Link
          href={entry.link}
          key={key}
          className={`uppercase py-1 sm:px-6 md:px-8 px-8 rounded-[30px] lg:hover:text-primary lg:hover:outline outline-primary outline-1 duration-150 transition-all ${
            activeSection === entry.id
              ? "outline text-primary"
              : "text-textSecondary"
          }`}
          scroll={false}
        >
          {entry.label}
        </Link>
      ))}
      {/* <a
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
      </a> */}
    </div>
  );
};

export default LongNavbar;
