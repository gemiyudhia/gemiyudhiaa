"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  User, 
  AtSign, 
  MessageSquare, 
  ArrowUpRight, 
  Github, 
  Linkedin, 
  Instagram 
} from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null,
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setSubmitStatus(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setSubmitStatus("success");
        form.reset();
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="max-w-6xl mx-auto py-4 px-2 sm:px-4 lg:px-8 text-black font-sans">
      
      {/* Two-Column Form Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
        
        {/* ================= LEFT COLUMN: DETAILS & SOCIAL LINKS ================= */}
        <div className="lg:col-span-5 flex flex-col gap-y-6 justify-between">
          
          {/* Top Story card */}
          <motion.div 
            className="bg-white border-brutal shadow-brutal-md p-6 sm:p-8 flex flex-col justify-center flex-1 min-h-[220px]"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            whileHover={{ y: -4, boxShadow: "10px 10px 0px #000" }}
          >
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter leading-none text-black select-none">
              YUK, <br className="hidden sm:inline" />
              BIKIN HAL <br />
              <span className="bg-neo-lime text-black px-3 py-1.5 border-brutal-sm shadow-[3px_3px_0px_#000] inline-block mt-2">
                SERU!
              </span>
            </h2>
            <p className="text-sm sm:text-base font-bold text-neutral-800 mt-6 leading-relaxed">
              Lagi nyari partner buat proyek seru atau kerjaan kreatif. Kalo kamu pengen kerjasama, hubungi aku.
            </p>
          </motion.div>

          {/* Social Links Cards (Stacked) */}
          <div className="flex flex-col gap-y-4">
            
            {/* Github Card */}
            <a 
              href="https://github.com/gemiyudhia" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <motion.div 
                className="bg-white border-brutal shadow-brutal-sm py-4 px-6 flex items-center justify-between font-black text-lg sm:text-xl tracking-tight text-black cursor-pointer"
                whileHover={{ y: -3, boxShadow: "6px 6px 0px #000" }}
                whileTap={{ y: 1 }}
              >
                <div className="flex items-center gap-x-3">
                  <Github size={24} className="stroke-[2.5]" />
                  <span>GITHUB</span>
                </div>
                <ArrowUpRight size={24} className="stroke-[3]" />
              </motion.div>
            </a>

            {/* Linkedin Card */}
            <a 
              href="https://linkedin.com/in/gemiyudhia" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <motion.div 
                className="bg-neo-lime border-brutal shadow-brutal-sm py-4 px-6 flex items-center justify-between font-black text-lg sm:text-xl tracking-tight text-black cursor-pointer"
                whileHover={{ y: -3, boxShadow: "6px 6px 0px #000" }}
                whileTap={{ y: 1 }}
              >
                <div className="flex items-center gap-x-3">
                  <Linkedin size={24} className="stroke-[2.5]" />
                  <span>LINKEDIN</span>
                </div>
                <ArrowUpRight size={24} className="stroke-[3]" />
              </motion.div>
            </a>

            {/* Instagram Card */}
            <a 
              href="https://instagram.com/yuudhia" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <motion.div 
                className="bg-neo-pink border-brutal shadow-brutal-sm py-4 px-6 flex items-center justify-between font-black text-lg sm:text-xl tracking-tight text-black cursor-pointer"
                whileHover={{ y: -3, boxShadow: "6px 6px 0px #000" }}
                whileTap={{ y: 1 }}
              >
                <div className="flex items-center gap-x-3">
                  <Instagram size={24} className="stroke-[2.5]" />
                  <span>INSTAGRAM</span>
                </div>
                <ArrowUpRight size={24} className="stroke-[3]" />
              </motion.div>
            </a>

          </div>

        </div>

        {/* ================= RIGHT COLUMN: BRUTALIST CONTACT FORM ================= */}
        <motion.div 
          className="lg:col-span-7 bg-white border-brutal shadow-brutal-lg p-6 sm:p-10 rounded-xl"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          whileHover={{ y: -4, boxShadow: "16px 16px 0px #000" }}
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              
              <AnimatePresence>
                {submitStatus === "success" && (
                  <motion.div
                    className="border-brutal-sm bg-[#DCFCE7] text-[#166534] px-4 py-3 rounded-lg font-black text-sm uppercase tracking-wide shadow-[3px_3px_0px_#166534]"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    PESAN TERKIRIM! AKU AKAN BALES SECEPATNYA.
                  </motion.div>
                )}
                {submitStatus === "error" && (
                  <motion.div
                    className="border-brutal-sm bg-[#FEE2E2] text-[#991B1B] px-4 py-3 rounded-lg font-black text-sm uppercase tracking-wide shadow-[3px_3px_0px_#991B1B]"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    GAGAL MENGIRIM! COBA LAGI BRO.
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Name Field */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-black font-black uppercase text-sm sm:text-base tracking-wide flex items-center gap-x-2">
                      <User size={18} className="stroke-[3]" />
                      NAMA KAMU SIAPA NIH?
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Nama kamu siapa..."
                        className="w-full bg-white border-brutal shadow-[2px_2px_0px_#000] focus:shadow-brutal py-4 px-4 text-black font-bold placeholder-neutral-400 focus:bg-white transition-brutal"
                      />
                    </FormControl>
                    <FormMessage className="font-bold text-xs text-neo-pink-dark uppercase mt-1" />
                  </FormItem>
                )}
              />

              {/* Email Field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-black font-black uppercase text-sm sm:text-base tracking-wide flex items-center gap-x-2">
                      <AtSign size={18} className="stroke-[3]" />
                      EMAIL KAMU APA?
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="EMAIL@ANDA.COM"
                        type="email"
                        className="w-full bg-white border-brutal shadow-[2px_2px_0px_#000] focus:shadow-brutal py-4 px-4 text-black font-bold placeholder-neutral-400 focus:bg-white transition-brutal uppercase"
                      />
                    </FormControl>
                    <FormMessage className="font-bold text-xs text-neo-pink-dark uppercase mt-1" />
                  </FormItem>
                )}
              />

              {/* Message Field */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-black font-black uppercase text-sm sm:text-base tracking-wide flex items-center gap-x-2">
                      <MessageSquare size={18} className="stroke-[3]" />
                      ADA IDE GILA APA?
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Tulis aja semua di sini, bebas kok..."
                        rows={6}
                        className="w-full bg-white border-brutal shadow-[2px_2px_0px_#000] focus:shadow-brutal py-4 px-4 text-black font-bold placeholder-neutral-400 focus:bg-white transition-brutal resize-none"
                      />
                    </FormControl>
                    <FormMessage className="font-bold text-xs text-neo-pink-dark uppercase mt-1" />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <div className="pt-2">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-neo-lime text-black font-black border-brutal shadow-brutal hover:bg-opacity-95 text-lg sm:text-xl tracking-wider uppercase py-4 flex items-center justify-center gap-x-2 transition-brutal disabled:opacity-50 disabled:cursor-not-allowed select-none"
                  whileHover={{
                    y: -4,
                    boxShadow: "10px 10px 0px #000",
                  }}
                  whileTap={{
                    y: 2,
                    boxShadow: "2px 2px 0px #000",
                  }}
                >
                  <span>{isSubmitting ? "LAGI NGIRIM..." : "GASKEUN KIRIM! >"}</span>
                </motion.button>
              </div>

            </form>
          </Form>
        </motion.div>

      </div>

      {/* ================= BOTTOM BANNER SECTION: JAKARTA MAP ================= */}
      <div className="w-full mt-10 relative flex flex-col items-center">
        
        {/* City Frame Container */}
        <motion.div 
          className="w-full bg-[#1A1A1A] border-brutal shadow-brutal-lg p-2.5 rounded-[16px] overflow-hidden"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-full aspect-[21/9] sm:aspect-[16/6] bg-white rounded-lg overflow-hidden border-brutal-sm">
            <Image
              src="/images/jakarta_map.png"
              alt="Jakarta Map Drone Mockup"
              fill
              className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-300"
            />
            
            {/* Center Yellow Tilted Badge */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div 
                className="px-5 py-2.5 bg-neo-yellow text-black font-black text-xs sm:text-sm tracking-wider border-brutal shadow-brutal uppercase rotate-[-4deg] select-none pointer-events-auto"
                whileHover={{ scale: 1.1, rotate: 0 }}
              >
                STAY DI ACEH, ID
              </motion.div>
            </div>
            
          </div>
        </motion.div>

      </div>

    </section>
  );
};

export default ContactForm;
