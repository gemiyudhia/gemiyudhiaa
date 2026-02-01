"use client";

import Image from "next/image";
import { AnimationGeneratorType, motion } from "framer-motion";

const IntroductionSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="flex items-center justify-between mt-10 lg:mt-0"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h1
          className="font-black text-5xl uppercase text-white"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Introduction
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, rotate: -180 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.8,
            type: "spring" as AnimationGeneratorType,
            stiffness: 300,
          }}
          whileHover={{
            rotate: 360,
            scale: 1.1,
          }}
        >
          <Image
            src="/images/seemore.png"
            alt="seemore image"
            width={40}
            height={40}
            priority
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-6 border-4 border-white bg-[#1a1a1a]"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        whileHover={{
          scale: 1.02,
          boxShadow: "0 10px 30px rgba(255, 204, 0, 0.2)",
        }}
      >
        <div className="p-6">
          <motion.h1
            className="font-black text-[14px] md:text-2xl lg:text-3xl text-white uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            A Frontend Developer based in Aceh, Indonesia
          </motion.h1>
          <div className="lg:flex lg:justify-between lg:items-start">
            <motion.p
              className="font-light text-[14px] mt-3 lg:w-[700px] lg:text-xl text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              I am a frontend developer passionate about creating intuitive,
              responsive, and visually appealing user interfaces. With a strong
              eagerness to learn, I continuously explore new technologies and
              diverse design approaches to deliver the best results in every
              project. My focus is on combining creativity and functionality to
              craft seamless user experiences
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: 50, rotate: 5 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ delay: 1.0, duration: 0.8, type: "spring" }}
              whileHover={{
                scale: 1.05,
                rotate: -2,
              }}
            >
              <Image
                src="/images/introduction.png"
                alt="introduction image"
                width={280}
                height={280}
                priority
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default IntroductionSection;
