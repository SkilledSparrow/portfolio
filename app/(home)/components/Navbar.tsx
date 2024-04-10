import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { SiGithub, SiLeetcode, SiLinkedin } from "react-icons/si";

const Navbar = ({ className }: { className?: string }) => {
  const social = [
    {
      Link: " https://www.linkedin.com/in/abhishek-sharma-is-here/",
      Label: "Linkedin",
      Icon: SiLinkedin,
    },
    {
      Link: " https://github.com/SkilledSparrow",
      Label: "Github",
      Icon: SiGithub,
    },
    {
      Link: " https://leetcode.com/skilled_sparrow/",
      Label: "Leetcode",
      Icon: SiLeetcode,
    },
  ];
  return (
    <nav
      className={cn(
        "py-10 flex justify-between items-center animate-move-down",
        className
      )}
    >
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">
        Abhishek ✌️
      </h1>
      <div className="flex item-center gap-5">
        {social.map((social, index) => {
          const Icon = social.Icon;
          return (
            <Link href={social.Link} key={index} aria-label={social.Label}>
              <Icon className="w-5 h-5 hover:scale-125 transition-all" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
