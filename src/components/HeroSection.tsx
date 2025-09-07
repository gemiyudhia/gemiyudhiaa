"use client";

import Image from "next/image";
import HastagSection from "./HastagSection";
import SeemoreSection from "./SeemoreSection";
import { motion } from "framer-motion";

const HeroSectionSection = () => {
  return (
    <>
      <motion.div
        className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 px-3 sm:px-4 md:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="md:flex md:justify-center md:items-center md:gap-x-8 lg:gap-x-12 xl:gap-x-16 lg:mx-36">
          <motion.div
            className="flex justify-center md:justify-end md:flex-1 order-1 md:order-2"
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                rotate: 2,
                transition: { duration: 0.3 },
              }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/images/hero-image-mobile.png"
                alt="hero image"
                width={408}
                height={402}
                priority
                className="w-[280px] h-[276px] sm:w-[320px] sm:h-[315px] md:w-[350px] md:h-[345px] lg:w-[400px] lg:h-[394px] xl:w-[408px] xl:h-[402px] object-contain"
              />
            </motion.div>
          </motion.div>

          <div className="md:flex-1 order-2 md:order-1 md:self-end">
            <HastagSection className="md:self-end" />
          </div>
        </div>
      </motion.div>

      <div className="px-3 sm:px-4 md:px-6 lg:px-8">
        <motion.span
          className="block h-px w-full bg-[#7B7B7B] mt-12 sm:mt-16 md:mt-20 max-w-7xl mx-auto"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        />
      </div>

      <div className="px-3 sm:px-4 md:px-6 lg:px-8">
        <SeemoreSection />
      </div>
    </>
  );
};

export default HeroSectionSection;
