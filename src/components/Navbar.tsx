"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import HamburgerMenu from "./ui/HamburgerMenu";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [scrollPosition, setScrollPosition] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`pt-4 md:pt-6 lg:pt-8 px-3 transition-all border-b-4 border-white ${
        scrollPosition ? "backdrop-blur-md bg-[#131313]/80" : "bg-[#131313]"
      }`}
    >
      <nav className="flex items-center justify-between px-3 container mx-auto">
        <div className="flex items-center gap-x-2 sm:gap-x-3">
          <Link href="/" className="flex-shrink-0">
            <motion.div
              whileTap={{ scale: 0.95 }}
              whileHover={{
                scale: 1.1,
                rotate: 5,
                transition: { type: "spring", stiffness: 400, damping: 10 },
              }}
            >
              <div className="w-10 h-10 sm:w-[45px] sm:h-[45px] md:w-[50px] md:h-[50px] border-3 border-white bg-white flex items-center justify-center font-black text-[#131313] text-lg">
                GY
              </div>
            </motion.div>
          </Link>

          {/* Mobile title */}
          {pathname === "/" ? (
            <h1 className="text-white text-sm sm:text-base font-black w-[160px] sm:w-[190px] md:hidden leading-tight uppercase">
              Gemi Yudhia
            </h1>
          ) : (
            <h1 className="text-white text-sm sm:text-base font-black w-[160px] sm:w-[190px] md:hidden leading-tight uppercase">
              Developer
            </h1>
          )}

          {/* Desktop navigation - tampilkan navlinks jika BUKAN di route "/" */}
          {pathname !== "/" && (
            <div className="hidden md:flex items-center gap-x-6 lg:gap-x-9 ml-3 lg:ml-5 font-bold text-lg lg:text-xl uppercase">
              <Link
                href="/about-me"
                className="hover:bg-white hover:text-[#131313] transition-all duration-200 group relative px-3 py-2"
              >
                <motion.span
                  whileHover={{
                    scale: 1,
                    transition: { type: "spring", stiffness: 400, damping: 10 },
                  }}
                  className="inline-block"
                >
                  About
                </motion.span>
              </Link>
              <Link
                href="/work"
                className="hover:bg-white hover:text-[#131313] transition-all duration-200 group relative px-3 py-2"
              >
                <motion.span
                  whileHover={{
                    scale: 1,
                    transition: { type: "spring", stiffness: 400, damping: 10 },
                  }}
                  className="inline-block"
                >
                  Work
                </motion.span>
              </Link>

              <Link
                href="/contact"
                className="hover:bg-white hover:text-[#131313] transition-all duration-200 group relative px-3 py-2"
              >
                <motion.span
                  whileHover={{
                    scale: 1,
                    transition: { type: "spring", stiffness: 400, damping: 10 },
                  }}
                  className="inline-block"
                >
                  Contact
                </motion.span>
              </Link>
            </div>
          )}

          {/* Desktop title - tampilkan "Gemi Yudhia" jika di route "/" */}
          {pathname === "/" && (
            <div className="hidden md:flex items-center ml-3 lg:ml-5">
              <h1 className="text-white text-xl lg:text-2xl font-black flex cursor-pointer uppercase">
                {"Gemi Yudhia".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    whileHover={{
                      y: -5,
                      color: "#FFCC00",
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      },
                    }}
                    className="inline-block"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </h1>
            </div>
          )}
        </div>

        <div className="flex items-center gap-x-2 sm:gap-x-3">
          {/* Hamburger menu - hanya tampil di mobile dan bukan di route "/" */}
          {pathname !== "/" && (
            <div className="md:hidden">
              <HamburgerMenu />
            </div>
          )}

          {/* Desktop right side */}
          <div className="hidden md:block">
            {pathname === "/" ? (
              <h1 className="text-white text-xl lg:text-2xl font-black flex cursor-pointer uppercase">
                {"FRONTEND DEVELOPER".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    whileHover={{
                      y: -5,
                      color: "#FFCC00",
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      },
                    }}
                    className="inline-block"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </h1>
            ) : (
              <h1 className="text-white text-xl lg:text-2xl font-black flex cursor-pointer uppercase">
                {"Gemi Yudhia".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    whileHover={{
                      y: -5,
                      color: "#FFCC00",
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      },
                    }}
                    className="inline-block"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </h1>
            )}
          </div>

          {/* Mobile right side - hanya tampil di route "/" */}
          {pathname === "/" && (
            <h1 className="text-white text-xs sm:text-sm font-black uppercase md:hidden text-right leading-tight max-w-[140px] sm:max-w-[180px]">
              Portfolio
            </h1>
          )}
        </div>
      </nav>

      <span className="block h-1 container mx-auto bg-white my-0 sm:my-0"></span>
    </header>
  );
};

export default Navbar;
