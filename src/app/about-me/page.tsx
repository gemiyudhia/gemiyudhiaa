"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "@/components/ui/Footer";
import { Layers, Palette, Terminal, Zap, ArrowDown } from "lucide-react";

const AboutMePage = () => {
  return (
    <main className="w-full min-h-screen bg-neo-yellow text-black font-sans flex flex-col justify-between transition-all duration-300">
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8 w-full">
        <div className="mb-6">
          <h1 className="text-5xl sm:text-6xl font-black tracking-tighter uppercase select-none italic text-black leading-none">
            CERITA AKU
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <motion.div
            className="lg:col-span-7 bg-white border-brutal shadow-brutal-lg p-6 sm:p-8 flex flex-col gap-y-4"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -4, boxShadow: "16px 16px 0px #000" }}
          >
            <p className="text-base sm:text-lg font-bold text-black leading-relaxed">
              Aku Gemi Yudhia, Frontend Developer yang hobi ngulik di dunia
              digital. Aku suka bikin web yang nggak cuma jalan, tapi juga bikin
              orang melotot.
            </p>
            <p className="text-base sm:text-lg font-bold text-black leading-relaxed">
              Dari zaman dulu pusing sama CSS floats sampe sekarang ngurusin
              sistem ribet, aku selalu penasaran sama &quot;gimana&quot; dan
              &quot;kenapa&quot;. Aku nggak cuma ngetik kode; aku ngerancang
              pengalaman seru yang nyambungin logika kaku sama perasaan manusia.
            </p>
          </motion.div>

          <div className="lg:col-span-5 flex flex-col items-center lg:items-end w-full">
            <motion.div
              className="w-full sm:max-w-[340px] bg-white border-brutal shadow-brutal-lg p-4 rounded-lg flex flex-col items-center justify-between"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -6, rotate: 1, boxShadow: "16px 16px 0px #000" }}
            >
              <div className="relative w-full aspect-square bg-[#EEEEEE] border-brutal-sm rounded-md overflow-hidden mb-4">
                <Image
                  src="/images/gemi-new.png"
                  alt="Gemi Yudhia Polaroid"
                  fill
                  className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>

              <div className="w-full text-center py-2">
                <span className="font-black text-sm tracking-widest text-black uppercase leading-tight select-none">
                  ARSITEK SISTEM & REBEL PIXEL
                </span>
              </div>
            </motion.div>

            <motion.div
              className="mt-6 px-4 py-2.5 bg-neo-pink border-brutal-sm shadow-brutal select-none flex items-center gap-x-2 font-black uppercase text-xs sm:text-sm tracking-wide text-black w-fit rotate-[-3deg]"
              whileHover={{ scale: 1.05, rotate: 0 }}
            >
              <Terminal size={16} className="stroke-[3]" />
              LAGI SIBUK: BELAJAR HAL BARU.
            </motion.div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-4xl font-black tracking-tight uppercase select-none italic text-black flex items-center gap-x-2">
            MILESTONES
            <ArrowDown size={28} className="stroke-[3]" />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-20 items-stretch">
          <motion.div
            className="lg:col-span-5 bg-neo-pink border-brutal shadow-brutal-md p-6 flex flex-col justify-between"
            whileHover={{ y: -4, boxShadow: "10px 10px 0px #000" }}
            transition={{ duration: 0.15 }}
          >
            <div>
              <div className="bg-neo-pink-dark text-white text-xs font-black px-2.5 py-1 uppercase tracking-wider border-brutal-sm shadow-[2px_2px_0px_#000] w-fit mb-4 select-none">
                2021
              </div>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight leading-tight mb-3">
                AWAL MULA NGOPI & NGODING
              </h3>
              <p className="text-sm font-bold text-black leading-relaxed">
                Nemu asiknya logika kodingan dari ngoding di hp. Perjalanan
                masuk ke dunia ngoding dimulai dari perintah print yang paling
                simpel.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-4 bg-neo-lime border-brutal shadow-brutal-md p-6 flex flex-col justify-between"
            whileHover={{ y: -4, boxShadow: "10px 10px 0px #000" }}
            transition={{ duration: 0.15 }}
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight leading-tight mb-3">
                GAS POL FULL STACK
              </h3>
              <p className="text-sm font-bold text-black leading-relaxed">
                Bongkar framework modern, database, API, server, semua dihantam
                demi bisa nyelesaiin solusi komplit dari ujung ke ujung.
              </p>
            </div>
            <div className="flex gap-x-2 mt-4 text-black">
              <Terminal size={22} className="stroke-[2.5]" />
              <Layers size={22} className="stroke-[2.5]" />
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-3 bg-white border-brutal shadow-brutal-md p-6 flex flex-col justify-between text-center items-center"
            whileHover={{ y: -4, boxShadow: "10px 10px 0px #000" }}
            transition={{ duration: 0.15 }}
          >
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-black tracking-tight leading-tight uppercase mb-4">
                JATUH CINTA SAMA BRUTALISME
              </h3>
              <div className="w-16 h-16 border-brutal bg-[#EEEEEE] shadow-brutal flex items-center justify-center rotate-45 my-2">
                <Palette
                  size={28}
                  className="stroke-[2.5] text-black -rotate-45"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-12 bg-neo-yellow border-brutal shadow-brutal-md p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6"
            whileHover={{ y: -4, boxShadow: "10px 10px 0px #000" }}
            transition={{ duration: 0.15 }}
          >
            <div className="max-w-2xl">
              <h3 className="text-xl sm:text-3xl font-black tracking-tight leading-tight mb-3">
                BIKIN HAL KEREN
              </h3>
              <p className="text-sm sm:text-base font-bold text-black leading-relaxed">
                Selalu siap buat proyek baru yang bikin otak berputar kreatif!
              </p>
            </div>
            <div className="w-16 h-16 rounded-full border-brutal bg-white flex items-center justify-center text-3xl font-black select-none shrink-0">
              😎
            </div>
          </motion.div>
        </div>

        <div className="mb-12">
          <h2 className="text-4xl font-black tracking-tight uppercase select-none italic text-black leading-none">
            YANG BIKIN AKU SEMANGAT
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-stretch">
          <motion.div
            className="bg-[#111111] text-white border-brutal shadow-brutal-lg p-6 sm:p-8 flex flex-col justify-between min-h-[300px]"
            whileHover={{ y: -6, boxShadow: "16px 16px 0px #000" }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex justify-between items-start w-full">
              <Palette size={28} className="text-neo-lime stroke-[2.5]" />
              <span className="text-4xl font-black tracking-tighter text-[#444444] select-none leading-none">
                01
              </span>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-black tracking-tight leading-none text-white mb-4 uppercase">
                DESAIN BERANI BEDA
              </h3>
              <p className="text-xs sm:text-sm font-bold leading-relaxed text-[#CCCCCC]">
                Aku males sama tren minimalis yang gitu-gitu aja. Desain itu
                harus jadi obrolan, pernyataan, dan sesekali bikin kaget. Aku
                bikin antarmuka yang nggak mungkin dicuekin.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-neo-lime border-brutal shadow-brutal-lg p-6 sm:p-8 flex flex-col justify-between min-h-[300px]"
            whileHover={{ y: -6, boxShadow: "16px 16px 0px #000" }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex justify-between items-start w-full">
              <Terminal size={28} className="text-black stroke-[2.5]" />
              <span className="text-4xl font-black tracking-tighter text-neo-yellow-dark/50 select-none leading-none">
                02
              </span>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-black tracking-tight leading-none text-black mb-4 uppercase">
                NGODING RAPI
              </h3>
              <p className="text-xs sm:text-sm font-bold leading-relaxed text-black">
                Luar boleh liar, dalem harus bener. Aku nulis kode yang rapi,
                gampang dikembangin, dan kokoh buat jadi fondasi eksperimen
                kreatif.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-neo-pink border-brutal shadow-brutal-lg p-6 sm:p-8 flex flex-col justify-between min-h-[300px]"
            whileHover={{ y: -6, boxShadow: "16px 16px 0px #000" }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex justify-between items-start w-full">
              <Zap size={28} className="text-neo-pink-dark stroke-[2.5]" />
              <span className="text-4xl font-black tracking-tighter text-neo-pink-dark/30 select-none leading-none">
                03
              </span>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-black tracking-tight leading-none text-black mb-4 uppercase">
                TERUS BERUBAH
              </h3>
              <p className="text-xs sm:text-sm font-bold leading-relaxed text-black">
                Dunia teknologi gerak cepet banget. Aku tetep di depan dengan
                terus nabrak batas, belajar dari salah, dan bangun lagi yang
                lebih gokil dari sebelumnya.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default AboutMePage;
