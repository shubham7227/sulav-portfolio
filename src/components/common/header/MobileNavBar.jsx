import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const MobileNavBar = ({ data }) => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-6 py-5 w-full justify-center items-center">
      {data.map((entry, key) => (
        <Link
          href={entry.link}
          key={key}
          className={`relative uppercase py-1 ${
            router.pathname == entry.link
              ? "text-primary after:border-primary"
              : "text-textSecondary after:border-textSecondary"
          } duration-150 transition-all after:absolute after:bottom-0 after:left-0 after:w-full after:border-b-2 hover:text-primary`}
        >
          {entry.label}
        </Link>
      ))}
    </div>
  );
};

export default MobileNavBar;
