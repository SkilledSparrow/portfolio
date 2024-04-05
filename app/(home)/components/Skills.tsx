"use client";
import React from "react";
import Title from "./Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  SiCplusplus,
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      text: "React",
      Icon: SiReact,
    },
    {
      text: "Next",
      Icon: SiNextdotjs,
    },
    {
      text: "Node",
      Icon: SiNodedotjs,
    },
    {
      text: "Tailwind",
      Icon: SiTailwindcss,
    },
    {
      text: "C++",
      Icon: SiCplusplus,
    },
    {
      text: "Javascript",
      Icon: SiJavascript,
    },
    {
      text: "MongoDB",
      Icon: SiMongodb,
    },
    {
      text: "Redux",
      Icon: SiRedux,
    },
    {
      text: "Express",
      Icon: SiExpress,
    },
  ];
  return (
    <div className="max-w-5xl mx-auto px-8">
      <Title
        text="Skills 💻"
        className="flex flex-col items-center justify-center -rotate-6"
      />
      <HoverEffect items={skills} />
    </div>
  );
};

export default Skills;
