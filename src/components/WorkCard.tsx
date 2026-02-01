"use client";

import { projectsData } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const titleVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: 0.3 },
  },
};

const WorkCard = () => {
  return (
    <motion.section
      className="mt-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <motion.h1
          className="font-bold text-4xl text-[#212021]"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          My Work
        </motion.h1>

        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          whileHover={{ scale: 1.1 }}
        >
          <Image
            src="/images/seemore.png"
            alt="see more"
            width={40}
            height={40}
            priority
          />
        </motion.div>
      </div>

      {/* Project Grid */}
      <div className="my-20">
        <div className="grid gap-16 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 place-items-center">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className="
                group relative
                w-[320px] h-[480px]
                rounded-3xl overflow-hidden
                border border-[#212021]
                bg-white
                shadow-[12px_12px_0px_#000]
              "
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              whileHover={{
                y: -8,
                scale: 1.03,
                boxShadow: "16px 16px 0px #000",
                transition: { duration: 0.3 },
              }}
            >
              {/* Buttons */}
              <div className="relative z-10 p-4 flex justify-between items-center">
                <Link href={project.github} target="_blank">
                  <motion.button
                    className="px-4 py-2 text-sm font-medium rounded-full border border-[#212021] bg-white"
                    whileHover={{
                      backgroundColor: "#212021",
                      color: "#ffffff",
                      scale: 1.05,
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Code
                  </motion.button>
                </Link>

                <Link href={project.demo} target="_blank">
                  <motion.button
                    className="px-4 py-2 text-sm font-medium rounded-full bg-blue-600 text-white border"
                    whileHover={{
                      backgroundColor: "#3b82f6",
                      scale: 1.05,
                      boxShadow: "0 10px 25px rgba(59,130,246,0.3)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Demo
                  </motion.button>
                </Link>
              </div>

              {/* Image */}
              <div className="relative h-48 mx-4 mb-4 rounded-2xl overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={330}
                    height={200}
                    priority
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

              {/* Content */}
              <div className="px-6 pb-6 space-y-6">
                <div>
                  <motion.h2
                    className="text-xl font-bold text-[#212021]"
                    whileHover={{ color: "#3b82f6" }}
                  >
                    {project.title}
                  </motion.h2>
                  <p className="text-sm font-light text-[#212021] mt-2">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-semibold rounded-full bg-[#212021] text-white"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.15 + techIndex * 0.1,
                        type: "spring",
                        stiffness: 200,
                      }}
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "#3b82f6",
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default WorkCard;
