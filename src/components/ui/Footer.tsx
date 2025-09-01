import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="bg-[#212021] text-white overflow-hidden mt-20 min-h-full">
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div className="text-center md:text-left">
            <h1 className="font-bold text-2xl tracking-wide bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Gemi Yudhia
            </h1>
            <p className="text-gray-400 text-sm mt-2 font-light tracking-wider">
              Frontend Developer
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://instagram.com/yuudhia"
              className="group w-12 h-12 flex items-center justify-center rounded-full border border-gray-700 hover:border-gray-500 transition-all duration-300 hover:scale-110 hover:bg-gray-800/30"
              aria-label="Instagram"
            >
              <Image
                src="/images/instagram-icon.png"
                alt="instagram"
                width={20}
                height={20}
                className="group-hover:scale-110 transition-transform duration-300"
              />
            </Link>
            <Link
              href="https://linkedin.com/in/gemiyudhia"
              className="group w-12 h-12 flex items-center justify-center rounded-full border border-gray-700 hover:border-gray-500 transition-all duration-300 hover:scale-110 hover:bg-gray-800/30"
              aria-label="LinkedIn"
            >
              <Image
                src="/images/linkedin-icon.png"
                alt="linkedin"
                width={20}
                height={20}
                className="group-hover:scale-110 transition-transform duration-300"
              />
            </Link>
            <Link
              href="https://github.com/gemiyudhia"
              className="group w-12 h-12 flex items-center justify-center rounded-full border border-gray-700 hover:border-gray-500 transition-all duration-300 hover:scale-110 hover:bg-gray-800/30"
              aria-label="GitHub"
            >
              <Image
                src="/images/github-icon.png"
                alt="github"
                width={20}
                height={20}
                className="group-hover:scale-110 transition-transform duration-300"
              />
            </Link>
          </div>

          <nav className="flex items-center gap-8 text-sm">
            <Link
              href="/about-me"
              className="text-gray-300 hover:text-white transition-all duration-300 relative group font-medium"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/work"
              className="text-gray-300 hover:text-white transition-all duration-300 relative group font-medium"
            >
              Work
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/contact"
              className="text-gray-300 hover:text-white transition-all duration-300 relative group font-medium"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
        </div>

        <div className="text-center pt-8 border-t border-gray-700/50">
          <p className="text-gray-500 text-xs font-light tracking-wide">
            © {year} Gemi Yudhia. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
