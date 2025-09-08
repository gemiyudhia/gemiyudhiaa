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
    <motion.div
      className="mt-20"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Header */}
      <motion.div
        className="flex justify-between items-center"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h1
          className="font-bold text-4xl text-[#212021]"
          variants={titleVariants}
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
            alt="work image"
            width={40}
            height={40}
            priority
          />
        </motion.div>
      </motion.div>

      {/* Project Cards */}
      <div className="my-20">
        <div className="flex flex-col gap-36 md:grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 md:gap-16 md:place-items-center">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className={`group relative border border-[#212021] w-[320px] h-[480px] rounded-3xl overflow-hidden ${
                index % 2 === 0
                  ? "self-start rotate-3 md:rotate-2"
                  : "self-end -rotate-3 md:-rotate-2"
              } mx-6 md:mx-0 shadow-xl`}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 100,
                  rotate: index % 2 === 0 ? 15 : -15,
                  scale: 0.8,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  rotate: index % 2 === 0 ? 3 : -3,
                  scale: 1,
                  transition: {
                    duration: 0.8,
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                  },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{
                scale: 1.05,
                rotate: index % 2 === 0 ? 5 : -5,
                y: -10,
                transition: {
                  duration: 0.3,
                  type: "spring",
                  stiffness: 300,
                },
              }}
            >
              {/* Buttons */}
              <motion.div
                className="relative z-10 p-4 flex justify-between items-center"
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: index * 0.2 + 0.3,
                    },
                  },
                }}
              >
                <Link href={project.github} target="_blank">
                  <motion.button
                    className="px-4 py-2 cursor-pointer text-sm font-medium rounded-full border border-[#212021] md:bg-white/80"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "#212021",
                      color: "#ffffff",
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Code
                  </motion.button>
                </Link>
                <Link href={project.demo} target="_blank">
                  <motion.button
                    className="px-4 py-2 bg-blue-600/80 hover:bg-blue-500 text-white text-sm font-medium rounded-full border cursor-pointer"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "#3b82f6",
                      boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)",
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Demo
                  </motion.button>
                </Link>
              </motion.div>

              {/* Image */}
              <motion.div
                className="relative h-48 mx-4 mb-4 rounded-2xl overflow-hidden"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                      duration: 0.5,
                      delay: index * 0.2 + 0.4,
                    },
                  },
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt="work image"
                    width={330}
                    height={200}
                    priority
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </motion.div>

              {/* Text */}
              <motion.div
                className="relative z-10 px-6 pb-6 space-y-8"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: index * 0.2 + 0.5,
                    },
                  },
                }}
              >
                <motion.div
                  className="space-y-2"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: 0.5,
                        delay: index * 0.2 + 0.6,
                      },
                    },
                  }}
                >
                  <motion.h2
                    className="text-xl font-bold text-[#212021]"
                    whileHover={{ color: "#3b82f6" }}
                  >
                    {project.title}
                  </motion.h2>
                  <motion.p className="text-[#212021] text-sm font-light">
                    {project.description}
                  </motion.p>
                </motion.div>

                {/* Tech stack */}
                <motion.div
                  className="flex flex-wrap gap-2"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: 0.5,
                        delay: index * 0.2 + 0.8,
                      },
                    },
                  }}
                >
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-3 py-1 bg-[#212021] text-white text-xs font-semibold rounded-full"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.2 + 0.8 + techIndex * 0.1,
                        type: "spring",
                        stiffness: 200,
                      }}
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "#3b82f6",
                        transition: { duration: 0.2 },
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default WorkCard;
