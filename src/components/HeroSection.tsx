"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Code2, Paintbrush } from "lucide-react";

const HeroSectionSection = () => {
  return (
    <div className="w-full bg-neo-yellow text-black font-sans py-12 px-4 sm:px-6 lg:px-8 transition-all duration-300 relative overflow-hidden">
      <div className="max-w-6xl mx-auto mb-6">
        <motion.div
          className="w-16 h-16 sm:w-20 sm:h-20 bg-neo-pink border-brutal shadow-brutal rounded-full"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.1, rotate: 10 }}
        />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <motion.div
          className="lg:col-span-8 flex flex-col justify-center bg-white border-brutal shadow-brutal-lg p-6 sm:p-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          whileHover={{ y: -4, boxShadow: "16px 16px 0px #000000" }}
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter text-black select-none leading-none">
            GEMI YUDHIA
          </h1>

          <div className="mt-6 inline-block bg-[#111111] text-white py-3 px-6 border-brutal-sm shadow-brutal self-start max-w-full">
            <p className="text-base sm:text-2xl font-black tracking-wide leading-tight uppercase">
              Aku Bikin Sesuatu... kalo lagi mood 😅
            </p>
          </div>
        </motion.div>

        <motion.div
          className="lg:col-span-4 relative bg-[#CCCCCC] border-brutal shadow-brutal-lg rounded-2xl overflow-hidden min-h-[300px] flex items-center justify-center group"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 100,
            delay: 0.1,
          }}
          whileHover={{ y: -4, boxShadow: "16px 16px 0px #000000" }}
        >
          <Image
            src="/images/gemi-new.png"
            alt="Gemi Yudhia"
            fill
            priority
            className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute right-4 bottom-4 w-6 h-6 border-brutal-sm bg-white rotate-12 shadow-[2px_2px_0px_#000]" />
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        <motion.div
          className="bg-neo-lime border-brutal shadow-brutal-md p-6 sm:p-8 flex flex-col justify-between"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ y: -4, boxShadow: "12px 12px 0px #000000" }}
        >
          <div>
            <div className="flex items-center gap-x-2 mb-4">
              <Code2 size={24} className="stroke-[3]" />
              <h2 className="text-xl sm:text-2xl font-black tracking-wide uppercase">
                FRONTEND
              </h2>
            </div>
            <p className="text-sm sm:text-base font-bold leading-relaxed text-black">
              Bongkar pasang kode. Hidup dari kopi pahit.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="bg-neo-pink border-brutal shadow-brutal-md p-6 sm:p-8 flex flex-col justify-between"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ y: -4, boxShadow: "12px 12px 0px #000000" }}
        >
          <div>
            <div className="flex items-center gap-x-2 mb-4">
              <Paintbrush size={24} className="stroke-[3]" />
              <h2 className="text-xl sm:text-2xl font-black tracking-wide uppercase">
                OTW DESAINER UI
              </h2>
            </div>
            <p className="text-sm sm:text-base font-bold leading-relaxed text-black">
              Benci desain yang ngebosenin. Kalo nggak nabrak, nggak seru.
              Maksimalisme harga mati.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-6 mt-10">
        <Link href="/work">
          <motion.button
            className="w-full sm:w-auto px-8 py-4 bg-neo-lime text-black font-black border-brutal shadow-brutal hover:bg-opacity-95 text-lg tracking-wider uppercase flex items-center justify-center gap-x-3 transition-brutal"
            whileHover={{ y: -4, boxShadow: "10px 10px 0px #000000" }}
            whileTap={{ y: 2, boxShadow: "2px 2px 0px #000000" }}
          >
            CEK KARYA
            <ArrowRight size={22} className="stroke-[3]" />
          </motion.button>
        </Link>

        <Link href="/contact">
          <motion.button
            className="w-full sm:w-auto px-8 py-4 bg-white text-black font-black border-brutal shadow-brutal text-lg tracking-wider uppercase flex items-center justify-center gap-x-3 transition-brutal"
            whileHover={{ y: -4, boxShadow: "10px 10px 0px #000000" }}
            whileTap={{ y: 2, boxShadow: "2px 2px 0px #000000" }}
          >
            SAPA AKU
            <Mail size={22} className="stroke-[3]" />
          </motion.button>
        </Link>
      </div>

      <div className="max-w-6xl mx-auto mt-16 relative flex flex-col items-center">
        <motion.div
          className="absolute -top-6 left-4 sm:left-12 z-20 px-4 py-2 bg-neo-pink-dark text-white font-black text-sm tracking-widest border-brutal shadow-brutal uppercase rotate-[-8deg] select-none"
          whileHover={{ scale: 1.1, rotate: -5 }}
        >
          ASLI BOY 100%
        </motion.div>

        <motion.div
          className="w-full max-w-4xl bg-[#1A1A1A] border-brutal shadow-brutal-lg p-3 sm:p-5 rounded-[20px] overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-white rounded-lg overflow-hidden border-brutal-sm">
            <Image
              src="/images/retro_tv_console.png"
              alt="Retro TV & Game Console Mockup"
              fill
              className="object-cover object-center"
            />
          </div>
        </motion.div>

        <div className="absolute -bottom-6 right-4 sm:right-12 z-20 flex items-center gap-x-4">
          <motion.div
            className="px-5 py-2.5 bg-neo-lime text-black font-black text-sm tracking-wider border-brutal shadow-brutal uppercase rotate-[6deg] select-none"
            whileHover={{ scale: 1.1, rotate: 2 }}
          >
            PASUKAN TITIK KOMA ;
          </motion.div>

          <motion.div
            className="w-12 h-12 bg-neo-lime border-brutal shadow-brutal rounded-md rotate-[15deg] hidden sm:block"
            animate={{ rotate: [15, 20, 15] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSectionSection;
