"use client";

import { AnimationGeneratorType, motion } from "framer-motion";
import AboutCard from "@/components/AboutCard";
import GetInTouch from "@/components/GetInTouch";
import IntroductionSection from "@/components/IntroductionSection";
import Footer from "@/components/ui/Footer";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as AnimationGeneratorType,
      stiffness: 100,
      damping: 15,
      duration: 0.6,
    },
  },
};

const dividerVariants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: {
      type: "spring" as AnimationGeneratorType,
      stiffness: 120,
      damping: 20,
      delay: 0.8,
    },
  },
};

const AboutMePage = () => {
  return (
      <motion.div
        className="md:container md:mx-auto md:px-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="md:grid md:grid-cols-2 md:gap-x-8 lg:grid lg:grid-cols-3 lg:gap-2 mt-20"
          variants={containerVariants}
        >
          <motion.div
            className="md:col-span-1 md:col-start-1 lg:col-span-1 lg:row-span-3"
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              transition: { type: "spring", stiffness: 300, damping: 20 },
            }}
          >
            <AboutCard />
          </motion.div>

          <motion.div
            className="md:col-span-2 md:row-start-2 lg:col-span-2 lg:col-start-2 lg:row-start-1"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <IntroductionSection />
          </motion.div>

          <motion.div
            className="md:col-span-2 md:row-start-3 lg:col-span-2 lg:col-start-2 lg:row-start-2"
            variants={itemVariants}
          >
            <div className="px-3 sm:px-4 md:px-6 lg:px-0">
              <motion.span
                className="block h-px w-full bg-gradient-to-r from-transparent via-[#7B7B7B] to-transparent mt-8 mb-4 relative"
                variants={dividerVariants}
                style={{ originX: 0 }}
                whileInView={{
                  boxShadow: [
                    "0 0 0px rgba(123, 123, 123, 0)",
                    "0 0 20px rgba(123, 123, 123, 0.3)",
                    "0 0 0px rgba(123, 123, 123, 0)",
                  ],
                }}
                transition={{
                  boxShadow: {
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  },
                }}
              />
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-1 md:row-start-1 md:col-start-2 lg:col-span-2 lg:col-start-2 lg:row-start-3"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{
              y: -5,
              transition: { type: "spring", stiffness: 400, damping: 25 },
            }}
          >
            <GetInTouch />
          </motion.div>
        </motion.div>
        <Footer />
      </motion.div>
  );
};

export default AboutMePage;
