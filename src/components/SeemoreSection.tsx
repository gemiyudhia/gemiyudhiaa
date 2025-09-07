"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const SeemoreSection = () => {
  return (
    <motion.div
      className="mt-3 sm:mt-4 md:mt-6 max-w-7xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <div className="flex items-center gap-x-2 sm:gap-x-3 justify-end">
        <Link href="/about-me" className="group">
          <motion.div
            className="flex items-center gap-x-2 sm:gap-x-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.h1
              className="text-[#212021] text-sm sm:text-base md:text-xl lg:text-2xl font-bold 
                         group-hover:underline transition-all duration-200 group-hover:text-gray-700"
              whileHover={{ x: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              See More
            </motion.h1>
            <motion.div
              className="flex-shrink-0"
              whileHover={{
                scale: 1.2,
                rotate: 15,
                x: 5,
              }}
              transition={{
                y: {
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  type: "tween",
                },
                scale: { type: "spring", stiffness: 300, damping: 20 },
                rotate: { type: "spring", stiffness: 300, damping: 20 },
                x: { type: "spring", stiffness: 300, damping: 20 },
              }}
              animate={{
                y: [0, -2, 0],
              }}
            >
              <Image
                src="/images/seemore.png"
                alt="seemore icon"
                width={40}
                height={40}
                priority
                className="w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] md:w-[40px] md:h-[40px]"
              />
            </motion.div>
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
};

export default SeemoreSection;
