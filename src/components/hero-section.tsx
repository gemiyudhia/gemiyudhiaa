"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/gemiyudhia", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/gemiyudhia", label: "LinkedIn" },
    { icon: Mail, href: "gemiyudhiaa@gmail.com", label: "Email" },
  ];

  return (
    <section
      id="beranda"
      className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center">
          <div className="mb-8 relative">
            <div className="relative inline-block">
              <Image
                src="/images/gemi.png"
                alt="Profile"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-6 border-4 border-gradient-to-r from-blue-400 to-purple-500 shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-20 blur-xl animate-pulse"></div>
            </div>
          </div>

          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                Gemi Yudhia
              </span>
            </h1>

            <div className="text-2xl md:text-4xl text-gray-300 mb-8 h-16 flex items-center justify-center">
              <span className="inline-block">Frontend Developer</span>
            </div>

            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
              Passionate dalam menciptakan solusi digital yang{" "}
              <span className="text-purple-400 font-semibold">
                user-friendly
              </span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              asChild
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-10 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Link href="#projects">
                Lihat Hasil Kerja Saya
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mt-12">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <Button
                key={label}
                variant="outline"
                size="icon"
                asChild
                className="border-gray-600 hover:bg-gray-800 hover:text-white bg-transparent hover:border-blue-400 transition-all duration-300 hover:scale-110 rounded-full w-12 h-12"
              >
                <Link href={href} aria-label={label}>
                  <Icon className="h-6 w-6" />
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
