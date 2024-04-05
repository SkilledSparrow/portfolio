import { HoverEffect } from "@/components/ui/card-hover-effect";
import React from "react";
import {
  SiMongodb,
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import Title from "./Title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

const Projects = () => {
  const projects = [
    {
      title: "Movix",
      tech: [SiReact, SiSass, SiRedux],
      link: "https://moviemania-three.vercel.app/",
      cover: "/movix.jpeg",
      background: "bg-indigo-500",
    },
    {
      title: "Witter",
      tech: [SiNextdotjs, SiTailwindcss, SiMongodb, SiTypescript],
      link: "https://witter-mu.vercel.app/",
      cover: "/witter.jpeg",
      background: "bg-green-500",
    },
    // {
    //   title: "Portfolio Website",
    //   tech: [SiNextdotjs, SiTailwindcss],
    //   link: "http://localhost:3000/",
    //   cover: "/movix.jpeg",
    //   background: "bg-green-500",
    // },
    // {
    //   title: "Food Delivery Website",
    //   tech: [SiReact, SiTailwindcss],
    //   link: "http://localhost:3000/",
    //   cover: "/movix.jpeg",
    //   background: "bg-indigo-500",
    // },
  ];
  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        text="Projects 👨‍💻"
        className="flex flex-col items-center justify-center rotate-6 "
      />
      <div className="grid grid-col-1 sm:grid-cols-2 pt-20 gap-5">
        {projects.map((project, index) => {
          return (
            <Link href={project.link} key={index}>
              <div className={cn("p-5 rounded-md", project.background)}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className="w-full space-y-5"
                >
                  <div className="space-y-5">
                    <h1 className="text-2xl font-bold">{project.title}</h1>
                    <div className="flex items-center gap-5">
                      {project.tech.map((Icon, index) => {
                        return (
                          <Icon className="text-white w-8 h-8" key={index} />
                        );
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
