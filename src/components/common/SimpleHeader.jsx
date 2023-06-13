import Link from "next/link";
import React from "react";
import { CiMail } from "react-icons/ci";

const SimpleHeader = () => {
  return (
    <nav className="sm:py-8 py-5 sm:fixed absolute sm:top-0 w-full z-20">
      <div className="sm:main-container">
        <div className="flex sm:flex-row flex-col justify-between items-center">
          <Link
            href="/"
            className="font-prompt font-medium sm:text-[24px] text-[20px] text-textSecondary hover:text-primary duration-300 transition-all"
          >
            Sulav Giri
          </Link>
          <a href="mailto:girishubham77@gmail.com">
            <div className="md:flex hidden flex-row gap-2 items-center text-textSecondary hover:text-primary duration-150 transition-all">
              <CiMail className="text-[22px]" />
              <span className="font-extralight font-karla">GET IN TOUCH</span>
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default SimpleHeader;
