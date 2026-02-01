"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Footer = () => {
  const [year, setYear] = useState<number>();

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <motion.div
      className="bg-[#212021] text-white overflow-hidden mt-20 rounded-2xl min-h-full relative md:mb-6 shadow-[12px_12px_0px_#000]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ staggerChildren: 0.2, delayChildren: 0.1 }}
    >
      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2, delayChildren: 0.1 }}
        >
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.h1
              className="font-bold text-2xl tracking-wide bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
            >
              Gemi Yudhia
            </motion.h1>
            <motion.p
              className="text-gray-400 text-sm mt-2 font-light tracking-wider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Frontend Developer
            </motion.p>
          </motion.div>

          <div className="flex items-center gap-4">
            {[
              {
                href: "https://instagram.com/yuudhia",
                src: "/images/instagram-icon.png",
                alt: "instagram",
                label: "Instagram",
              },
              {
                href: "https://linkedin.com/in/gemiyudhia",
                src: "/images/linkedin-icon.png",
                alt: "linkedin",
                label: "LinkedIn",
              },
              {
                href: "https://github.com/gemiyudhia",
                src: "/images/github-icon.png",
                alt: "github",
                label: "GitHub",
              },
            ].map((social) => (
              <motion.div
                key={social.alt}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "backOut" }}
              >
                <Link
                  href={social.href}
                  className="group w-12 h-12 flex items-center justify-center rounded-full border border-gray-700 hover:border-gray-500 transition-all duration-300"
                  aria-label={social.label}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.2,
                      rotate: 5,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-800/30 transition-all duration-300"
                  >
                    <Image
                      src={social.src || "/placeholder.svg"}
                      alt={social.alt}
                      width={20}
                      height={20}
                      className="transition-transform duration-300"
                    />
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center gap-8 text-sm">
            {[
              { href: "/about-me", label: "About me" },
              { href: "/work", label: "Work" },
              { href: "/contact", label: "Contact" },
            ].map((nav) => (
              <motion.div
                key={nav.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Link
                  href={nav.href}
                  className="text-gray-300 hover:text-white transition-all duration-300 relative group font-medium"
                >
                  <motion.span
                    whileHover={{
                      y: -2,
                      transition: { duration: 0.2 },
                    }}
                    className="inline-block"
                  >
                    {nav.label}
                  </motion.span>
                  <motion.span
                    className="absolute -bottom-1 left-0 h-0.5 bg-white"
                    initial={{ width: 0 }}
                    whileHover={{
                      width: "100%",
                      transition: { duration: 0.3, ease: "easeOut" },
                    }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="text-center pt-8 border-t border-gray-700/50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
          <motion.p
            className="text-gray-500 text-xs font-light tracking-wide"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            © {year} Gemi Yudhia. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Footer;
