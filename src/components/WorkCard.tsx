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

      {/* Unified responsive layout */}
      <div className="my-20">
        <div className="flex flex-col gap-36 md:grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 md:gap-16 md:place-items-center">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className={`group relative border border-[#212021] w-[320px] h-[480px] rounded-3xl overflow-hidden  ${
                index % 2 === 0
                  ? "self-start rotate-3  md:rotate-2"
                  : "self-end -rotate-3  md:-rotate-2"
              } mx-6 md:mx-0 shadow-xl`}
            >
              {/* Action buttons - positioned at top */}
              <div className="relative z-10 p-4 flex justify-between items-center">
                <Link href={project.github} target="_blank">
                  <button className="px-4 py-2 text-sm font-medium rounded-full border border-[#212021] md:bg-white/80 ">
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
              <div className="relative h-48 mx-4 mb-4 rounded-2xl overflow-hidden ">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt="work image"
                  width={330}
                  height={200}
                  priority
                  className="w-full h-full object-cover"
                />
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
