"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const AboutCard = () => {
  return (
    <motion.div
      className="mt-10 lg:mt-0 lg:h-full"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <motion.div
        className="relative bg-[#212021] h-[560px] lg:h-[650px] w-full sm:max-w-[400px] rounded-[36px] p-6"
        whileHover={{
          scale: 1.02,
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Image
          src="/images/profile.png"
          alt="profile"
          fill
          className="object-cover rounded-[36px]"
        />
        <div className="absolute inset-0 z-10 p-6 text-white flex justify-between flex-col h-full">
          <motion.div
            className=""
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <motion.p
              className="font-light mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              Hello,
            </motion.p>
            <motion.h3
              className="font-semibold text-4xl w-[171px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                My name
              </motion.span>
              <motion.span
                className="block mt-5"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1, duration: 0.5 }}
              >
                is Gemi
              </motion.span>
            </motion.h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
          >
            <p className="font-light text-[12px] text-right">
              I consider myself a dedicated frontend developer who continuously
              learns new technologies and explores diverse approaches to deliver
              the best results in every project.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutCard;
