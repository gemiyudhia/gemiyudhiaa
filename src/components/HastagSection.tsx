"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type HastagSectionProps = {
  className?: string;
};

const HastagSection = ({ className }: HastagSectionProps) => {
  const hashtags = [
    ["#webdevelopment", "#tailwindcss"],
    ["#websiteportfolio"],
    ["#frontenddeveloper", "#keepgoing"],
  ];

  return (
    <motion.div
      className={`relative mt-12 sm:mt-16 md:mt-20 ${className || ""}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="flex-shrink-0 md:absolute md:right-0 md:-top-32 lg:-top-56 lg:right-0"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/images/link-icon.png"
          alt="link icon"
          width={150}
          height={150}
          priority
          className="w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] md:w-[120px] md:h-[120px] lg:w-[150px] lg:h-[150px] xl:w-[180px] xl:h-[180px]"
        />
      </motion.div>

      <motion.div
        className="flex-1 min-w-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {hashtags.map((row, rowIndex) => (
          <React.Fragment key={rowIndex}>
            <motion.div
              className="flex items-center gap-x-2 sm:gap-x-3 md:gap-x-4 justify-end flex-wrap"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.3 + rowIndex * 0.2,
                ease: "easeOut",
              }}
            >
              {row.map((hashtag, hashtagIndex) => (
                <motion.p
                  key={hashtag}
                  className="text-[#7B7B7B] text-sm sm:text-base md:text-lg font-light whitespace-nowrap cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.4 + rowIndex * 0.2 + hashtagIndex * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{
                    scale: 1.05,
                    color: "#212021",
                    transition: { duration: 0.2 },
                  }}
                >
                  {hashtag}
                </motion.p>
              ))}
            </motion.div>

            <motion.span
              className="block h-px w-full bg-[#7B7B7B] my-2 sm:my-3"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5 + rowIndex * 0.2,
                ease: "easeOut",
              }}
              style={{ transformOrigin: "right" }}
            />
          </React.Fragment>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default HastagSection;
