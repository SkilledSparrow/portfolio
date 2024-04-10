import Link from "next/link";
import React from "react";
import {
  MovingBorder,
  MovingBorderBtn,
} from "../../../components/ui/moving-border";
import Title from "./Title";

const HeroSection = () => {
  return (
    <div className="min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between animate-move-up">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-7xl font-bold">
          Nice to see you here! 👋
          <br />{" "}
          <span className="underline underline-offset-8 decoration-green-500">
            {"I'm Abhishek."}{" "}
          </span>
        </h1>
        <p className="md:w-96 text-lg text-gray-300">
          {
            "I'm a fullstack developer Crafting Engaging User Experiences with Creative Web Solutions."
          }
        </p>
        <Link href={"mailto:as850082@gmail.com"} className="inline-block group">
          <Title text="Contact Me 📧" />
        </Link>
      </div>
      <div className="relative">
        <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative">
          <div className="flex gap-3 translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
            <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
          </div>
          <div className="flex gap-3 -translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
            <div className="w-32 h-32 rounded-full bg-green-500"></div>
          </div>
          <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
        </div>
        <div className="absolute bottom-5 sm:bottom-14 left-0 sm:-left-10">
          <MovingBorderBtn borderRadius="0.5rem" className="p-3 font-semibold">
            <a
              href="https://drive.google.com/file/d/1E4gwVkxU0Ij2xz-pQ5bhibvOnpmIY0QK/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              //   className="text-blue-500"
            >
              🧾My Resume
            </a>
            {/* <Link href="https://drive.google.com/file/d/1E4gwVkxU0Ij2xz-pQ5bhibvOnpmIY0QK/view?usp=sharing">
              🧾My Resume
            </Link> */}
          </MovingBorderBtn>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
