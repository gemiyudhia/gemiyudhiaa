"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Footer = () => {
  const [year, setYear] = useState<number>(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full bg-[#111111] border-t-[6px] border-black py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Section: Brand Logo */}
        <Link href="/" className="flex items-center">
          <motion.span 
            className="text-white text-xl sm:text-2xl font-black tracking-tight"
            whileHover={{ scale: 1.05, rotate: 1 }}
          >
            GEMI YUDHIA
          </motion.span>
        </Link>

        {/* Center Section: Social Media Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-black tracking-wider uppercase text-white">
          <a 
            href="https://github.com/gemiyudhia" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-neo-lime hover:underline transition-all"
          >
            GITHUB
          </a>
          <a 
            href="https://linkedin.com/in/gemiyudhia" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-neo-lime hover:underline transition-all"
          >
            LINKEDIN
          </a>
          <a 
            href="https://instagram.com/yuudhia" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-neo-lime hover:underline transition-all"
          >
            INSTAGRAM
          </a>
        </div>

        {/* Right Section: Custom Brutalist Copyright Label */}
        <div className="text-center md:text-right font-black text-[11px] sm:text-xs tracking-wider uppercase text-[#888888] max-w-sm leading-tight">
          HAK CIPTA © {year} GEMI YUDHIA. NO RIGHTS RESERVED. LOL.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
