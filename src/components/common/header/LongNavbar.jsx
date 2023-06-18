import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const LongNavbar = ({ data }) => {
  const router = useRouter();

  return (
    <nav>
      <div className="sm:flex hidden items-center sm:gap-10 gap-6">
        {data.map((entry, key) => (
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
        </div>
      </div>
    </nav>
  );
};

export default LongNavbar;
