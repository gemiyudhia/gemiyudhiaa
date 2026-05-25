"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Wallet, Sparkles, Laptop, Bot, ArrowRight } from "lucide-react";

const WorkCard = () => {
  return (
    <section className="w-full bg-[#F6F6EF] text-black font-sans py-12 px-4 sm:px-6 lg:px-8 transition-all duration-300">
      
      {/* 1. Header Section */}
      <div className="max-w-6xl mx-auto mb-10">
        
        {/* Title */}
        <div className="flex items-center gap-x-3 mb-4">
          <span className="text-3xl sm:text-4xl font-black">💼 PROYEK JAGOAN</span>
        </div>

        {/* Subtitle with Left Border Stripe */}
        <div className="inline-block bg-[#E5E5E5]/40 border-brutal-sm border-l-[8px] border-l-neo-yellow py-3 px-6 select-none max-w-full">
          <p className="text-sm sm:text-base font-bold text-[#333333]">
            Kumpulan eksperimen digital yang dibuat karna gabut.
          </p>
        </div>

      </div>

      {/* 2. Asymmetric Grid Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        
        {/* CARD 1: ANTARMUKA NEO-BANKING (Lime Green, Spans 8 cols) */}
        <motion.div 
          className="lg:col-span-8 bg-neo-lime border-brutal shadow-brutal-lg rounded-2xl p-6 sm:p-8 flex flex-col justify-between min-h-[380px]"
          whileHover={{ y: -6, boxShadow: "16px 16px 0px #000" }}
          transition={{ duration: 0.2 }}
        >
          {/* Top content */}
          <div className="flex justify-between items-start">
            <div className="bg-black text-white text-xs font-black px-3 py-1.5 uppercase tracking-wider border-brutal-sm shadow-[2px_2px_0px_#000]">
              FINTECH
            </div>
            <Wallet size={28} className="text-black stroke-[2.5]" />
          </div>

          {/* Title & Description */}
          <div className="my-6">
            <h3 className="text-2xl sm:text-4xl font-black tracking-tight leading-none text-black select-none">
              ANTARMUKA NEO-BANKING
            </h3>
            <p className="text-sm sm:text-base font-bold text-black mt-4 max-w-xl leading-relaxed">
              Redesain total sistem dompet digital untuk transaksi volume tinggi, menampilkan visualisasi data real-time.
            </p>
          </div>

          {/* Footer Action */}
          <div className="flex justify-end">
            <a 
              href="https://github.com/gemiyudhia/onlinestore" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <motion.button 
                className="bg-[#111111] text-white hover:bg-black text-xs sm:text-sm font-black tracking-wider uppercase px-6 py-3 border-brutal-sm shadow-brutal transition-brutal"
                whileHover={{ y: -3, boxShadow: "6px 6px 0px #000" }}
                whileTap={{ y: 1, boxShadow: "1px 1px 0px #000" }}
              >
                GAS LIHAT
              </motion.button>
            </a>
          </div>
        </motion.div>

        {/* CARD 2: BRANDING CYBER-PUNK (Pink, Spans 4 cols, spans tall) */}
        <motion.div 
          className="lg:col-span-4 bg-neo-pink border-brutal shadow-brutal-lg rounded-2xl p-6 flex flex-col justify-between min-h-[380px] lg:row-span-2"
          whileHover={{ y: -6, boxShadow: "16px 16px 0px #000" }}
          transition={{ duration: 0.2 }}
        >
          {/* Top content */}
          <div className="flex justify-between items-start">
            <div className="bg-neo-pink-dark text-white text-xs font-black px-3 py-1.5 uppercase tracking-wider border-brutal-sm shadow-[2px_2px_0px_#000]">
              IDENTITAS
            </div>
            <Sparkles size={28} className="text-black stroke-[2.5]" />
          </div>

          {/* Title */}
          <div className="mt-4 mb-2">
            <h3 className="text-xl sm:text-2xl font-black tracking-tight leading-tight text-black flex items-center gap-x-2">
              ⚡ BRANDING CYBER-PUNK
            </h3>
          </div>

          {/* Mockup Cyberpunk Image */}
          <div className="relative w-full aspect-square border-brutal bg-black rounded-lg overflow-hidden my-3">
            <Image
              src="/images/cyberpunk_branding.png"
              alt="Cyberpunk Visual Design"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Description & Button */}
          <div className="mt-2">
            <p className="text-xs sm:text-sm font-bold text-black leading-relaxed mb-4">
              Sistem identitas visual untuk kolektif teknologi bawah tanah di Neo-Tokyo.
            </p>
            
            <a 
              href="https://github.com/gemiyudhia/socialfy" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <motion.button 
                className="w-full bg-neo-pink-dark text-white hover:opacity-95 text-xs sm:text-sm font-black tracking-wider uppercase py-3.5 border-brutal shadow-brutal transition-brutal"
                whileHover={{ y: -3, boxShadow: "6px 6px 0px #000" }}
                whileTap={{ y: 1, boxShadow: "1px 1px 0px #000" }}
              >
                INTIP BRAND
              </motion.button>
            </a>
          </div>
        </motion.div>

        {/* CARD 3: PIXEL REBELS (Yellow, Spans 4 cols) */}
        <motion.div 
          className="lg:col-span-4 bg-neo-yellow border-brutal shadow-brutal-lg rounded-2xl p-6 flex flex-col justify-between min-h-[220px]"
          whileHover={{ y: -6, boxShadow: "16px 16px 0px #000" }}
          transition={{ duration: 0.2 }}
        >
          {/* Top Info */}
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-x-2">
              <Laptop size={24} className="stroke-[2.5]" />
              <span className="font-black text-lg tracking-tight uppercase">PIXEL REBELS</span>
            </div>
          </div>

          {/* Description & Button */}
          <div className="flex items-end justify-between mt-4">
            <div className="max-w-[70%]">
              <p className="text-xs sm:text-sm font-bold text-black leading-tight">
                Antarmuka Marketplace NFT
              </p>
            </div>

            <a 
              href="https://github.com/gemiyudhia/new-movie-project" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <motion.button 
                className="w-12 h-12 bg-black text-white hover:bg-neutral-900 border-brutal-sm shadow-[3px_3px_0px_#000] flex items-center justify-center transition-brutal"
                whileHover={{ y: -3, boxShadow: "5px 5px 0px #000" }}
                whileTap={{ y: 1, boxShadow: "1px 1px 0px #000" }}
                aria-label="Cek Pixel Rebels"
              >
                <ArrowRight size={20} className="stroke-[3]" />
              </motion.button>
            </a>
          </div>
        </motion.div>

        {/* CARD 4: UI AGEN AI (Grey, Spans 4 cols) */}
        <motion.div 
          className="lg:col-span-4 bg-[#E5E5E5] border-brutal shadow-brutal-lg rounded-2xl p-6 flex flex-col items-center justify-center min-h-[220px] text-center"
          whileHover={{ y: -6, boxShadow: "16px 16px 0px #000" }}
          transition={{ duration: 0.2 }}
        >
          <a 
            href="https://github.com/gemiyudhia/talky" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-y-3 cursor-pointer group"
          >
            <motion.div 
              className="w-14 h-14 bg-white border-brutal shadow-brutal flex items-center justify-center rounded-xl transition-brutal group-hover:bg-neo-lime"
              whileHover={{ rotate: 10, scale: 1.05 }}
            >
              <Bot size={32} className="stroke-[2.5] text-black" />
            </motion.div>
            
            <h4 className="font-black text-lg tracking-tight uppercase mt-2">
              UI AGEN AI
            </h4>
          </a>
        </motion.div>

      </div>

      {/* 3. Bottom 'MAU BIKIN SESUATU?' CTA Section */}
      <div className="max-w-6xl mx-auto mt-16">
        
        <div className="w-full bg-[#111111] border-brutal shadow-brutal-lg rounded-[20px] p-8 sm:p-12 md:p-16 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          
          {/* Left Text details */}
          <div className="md:max-w-[60%]">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-neo-lime tracking-tighter leading-none select-none">
              MAU BIKIN SESUATU?
            </h2>
            <p className="text-white text-base sm:text-lg font-bold mt-6 leading-relaxed">
              Yuk, kita bikin sesuatu yang beda dan nggak ngebosenin. Aku lagi open buat komisi baru nih.
            </p>
          </div>

          {/* Right Action details */}
          <div className="flex flex-col items-start md:items-end gap-y-6">
            
            <Link href="/contact">
              <motion.button 
                className="px-8 py-4 bg-neo-lime text-black font-black border-brutal shadow-brutal text-lg tracking-wider uppercase flex items-center gap-x-3 transition-brutal w-full sm:w-auto"
                whileHover={{ y: -4, boxShadow: "10px 10px 0px #000" }}
                whileTap={{ y: 2, boxShadow: "2px 2px 0px #000" }}
              >
                AYO NGOBROL
              </motion.button>
            </Link>

            {/* Social Grid Block */}
            <div className="flex items-center gap-x-3 mt-2">
              
              <a 
                href="https://instagram.com/yuudhia" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <motion.div 
                  className="w-11 h-11 bg-black text-white hover:text-neo-lime border-brutal-sm shadow-[3px_3px_0px_#000] flex items-center justify-center font-black text-sm tracking-wider cursor-pointer"
                  whileHover={{ y: -3, boxShadow: "5px 5px 0px #000000" }}
                  whileTap={{ y: 1 }}
                >
                  IG
                </motion.div>
              </a>

              <a 
                href="https://github.com/gemiyudhia" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <motion.div 
                  className="w-11 h-11 bg-black text-white hover:text-neo-lime border-brutal-sm shadow-[3px_3px_0px_#000] flex items-center justify-center font-black text-sm tracking-wider cursor-pointer"
                  whileHover={{ y: -3, boxShadow: "5px 5px 0px #000000" }}
                  whileTap={{ y: 1 }}
                >
                  GH
                </motion.div>
              </a>

              <a 
                href="https://linkedin.com/in/gemiyudhia" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <motion.div 
                  className="w-11 h-11 bg-black text-white hover:text-neo-lime border-brutal-sm shadow-[3px_3px_0px_#000] flex items-center justify-center font-black text-sm tracking-wider cursor-pointer"
                  whileHover={{ y: -3, boxShadow: "5px 5px 0px #000000" }}
                  whileTap={{ y: 1 }}
                >
                  LN
                </motion.div>
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default WorkCard;
