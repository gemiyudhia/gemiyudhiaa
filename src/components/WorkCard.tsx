import { projectsData } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const WorkCard = () => {
  return (
    <div className="mt-20">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-4xl text-[#212021]">My Work</h1>
        <Image
          src="/images/seemore.png"
          alt="work image"
          width={40}
          height={40}
          priority
        />
      </div>

      <div className="my-20 flex flex-col gap-36">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className={`group relative border border-[#212021] w-[320px] h-[480px] rounded-3xl mx-6 overflow-hidden transition-all duration${
              index % 2 === 0
                ? "self-start rotate-3 hover:rotate-1"
                : "self-end -rotate-3 hover:-rotate-1"
            }`}
          >
            {/* Action buttons - positioned at top */}
            <div className="relative z-10 p-4 flex justify-between items-center">
              <Link href={project.github} target="_blank">
                <button className="px-4 py-2 text-sm font-medium rounded-full border border-[#212021]  ">
                  Code
                </button>
              </Link>
              <Link href={project.demo} target="_blank">
                <button className="px-4 py-2 bg-blue-600/80 hover:bg-blue-500 text-white text-sm font-medium rounded-full border">
                  Demo
                </button>
              </Link>
            </div>

            {/* Project image */}
            <div className="relative h-48 mx-4 mb-4 rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
              <Image
                src={project.image || "/placeholder.svg"}
                alt="work image"
                width={330}
                height={200}
                priority
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content section */}
            <div className="relative z-10 px-6 pb-6 space-y-8">
              <div className="space-y-2">
                <h2 className="text-xl font-bold text-[#212021]">
                  {project.title}
                </h2>
                <p className="text-[#212021] text-sm font-light">
                  {project.description}
                </p>
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-[#212021] text-white text-xs font-semibold rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full translate-y-12 -translate-x-12 group-hover:scale-150 transition-transform duration-700" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkCard;
