"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimationGeneratorType, motion } from "framer-motion";

const GetInTouch = () => {
  const socialLinks = [
    {
      href: "https://www.instagram.com/yuudhia",
      gradient: "from-[#E1306C] to-[#FD1D1D]",
      icon: "/images/instagram-icon.png",
      text: "instagram.com/yuudhia",
      alt: "instagram image",
    },
    {
      href: "https://www.linkedin.com/in/gemiyudhia/",
      gradient: "",
      bgColor: "bg-[#0838FF]",
      icon: "/images/linkedin-icon.png",
      text: "linkedin.com/in/gemiyudhia",
      alt: "linkedin image",
    },
    {
      href: "https://github.com/gemiyudhia",
      gradient: "",
      bgColor: "bg-[#212021]",
      icon: "/images/github-icon.png",
      text: "github.com/gemiyudhia",
      alt: "github image",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as AnimationGeneratorType,
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="mt-10 lg:mt-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="font-bold text-4xl">Get In Touch</h1>
      </motion.div>

      <motion.div
        className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-5 lg:gap-2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {socialLinks.map((social, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              y: -10,
            }}
            whileTap={{ scale: 0.95 }}
            className="max-w-[189px] h-[180px]"
          >
            <Link
              href={social.href}
              target="_blank"
              className="block w-full h-full"
            >
              <motion.div
                className={`w-full max-w-[189px] h-[180px] rounded-[36px] ${
                  social.gradient
                    ? `bg-gradient-to-br ${social.gradient}`
                    : social.bgColor
                } self-center overflow-hidden`}
                whileHover={{
                  boxShadow: "0 15px 35px rgba(0, 0, 0, 0.3)",
                }}
              >
                <div className="p-4 flex flex-col justify-between h-full">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      delay: 0.5 + index * 0.1,
                      type: "spring",
                      stiffness: 300,
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotate: 10,
                    }}
                  >
                    <Image
                      src={social.icon || "/placeholder.svg"}
                      alt={social.alt}
                      width={40}
                      height={40}
                      priority
                    />
                  </motion.div>
                  <motion.div
                    className="space-y-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                  >
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{
                        delay: 0.9 + index * 0.1,
                        duration: 0.6,
                        ease: "easeOut",
                      }}
                      style={{ originX: 0 }}
                    >
                      <Image
                        src="/images/line.png"
                        alt="line"
                        width={100}
                        height={100}
                        className="w-full"
                        priority
                      />
                    </motion.div>
                    <motion.h1
                      className="font-light text-[10px] text-white text-right"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.1 + index * 0.1, duration: 0.4 }}
                    >
                      {social.text}
                    </motion.h1>
                  </motion.div>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default GetInTouch;
