"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageSquare } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/work", label: "PROYEK" },
    { href: "/about-me", label: "CERITA DIKIT" },
    { href: "/contact", label: "NGOBROL" },
  ];

  const isLinkActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="w-full bg-white border-b-[6px] border-black sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <motion.span 
              className="text-2xl sm:text-3xl font-black tracking-tighter text-black select-none"
              whileHover={{ scale: 1.05, rotate: -1 }}
              whileTap={{ scale: 0.95 }}
            >
              GEMI YUDHIA
            </motion.span>
          </Link>

          <nav className="hidden md:flex items-center gap-x-6">
            {navItems.map((item) => {
              const active = isLinkActive(item.href);
              return (
                <Link key={item.href} href={item.href}>
                  {active ? (
                    <motion.div
                      className="px-4 py-1.5 bg-neo-lime border-brutal-sm shadow-[3px_3px_0px_#000] text-black font-black text-sm tracking-wider uppercase"
                      whileHover={{ y: -2, boxShadow: "5px 5px 0px #000000" }}
                      whileTap={{ y: 1, boxShadow: "1px 1px 0px #000000" }}
                    >
                      {item.label}
                    </motion.div>
                  ) : (
                    <motion.div
                      className="px-4 py-1.5 text-black font-bold text-sm tracking-wider uppercase border border-transparent hover:border-black hover:bg-neo-pink hover:shadow-[3px_3px_0px_#000] transition-colors duration-150"
                      whileHover={{ y: -2 }}
                      whileTap={{ y: 0 }}
                    >
                      {item.label}
                    </motion.div>
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Link href="/contact">
              <motion.button
                className="px-5 py-2.5 bg-neo-lime text-black font-black border-brutal shadow-brutal text-sm tracking-wider uppercase flex items-center gap-x-2 transition-brutal"
                whileHover={{
                  y: -4,
                  boxShadow: "8px 8px 0px #000000",
                }}
                whileTap={{
                  y: 2,
                  boxShadow: "2px 2px 0px #000000",
                }}
              >
                GAS NGOBROL
              </motion.button>
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 border-brutal-sm bg-neo-lime text-black shadow-[3px_3px_0px_#000] focus:outline-none"
              whileTap={{ scale: 0.9, y: 1, boxShadow: "1px 1px 0px #000" }}
            >
              {isOpen ? <X size={24} className="stroke-[3]" /> : <Menu size={24} className="stroke-[3]" />}
            </motion.button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-20 z-40 bg-neo-yellow border-b-[6px] border-black flex flex-col p-6 shadow-brutal-lg md:hidden"
          >
            <div className="flex flex-col gap-y-4">
              {navItems.map((item) => {
                const active = isLinkActive(item.href);
                return (
                  <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                    <motion.div
                      className={`w-full py-3 px-4 text-center font-black text-lg tracking-wider border-brutal shadow-brutal transition-brutal ${
                        active ? "bg-neo-lime text-black" : "bg-white text-black hover:bg-neo-pink"
                      }`}
                      whileTap={{ y: 2, boxShadow: "2px 2px 0px #000" }}
                    >
                      {item.label}
                    </motion.div>
                  </Link>
                );
              })}

              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <motion.div
                  className="w-full py-4 px-4 bg-black text-neo-lime text-center font-black text-lg tracking-wider border-brutal shadow-brutal flex items-center justify-center gap-x-2"
                  whileTap={{ y: 2, boxShadow: "2px 2px 0px #000" }}
                >
                  <MessageSquare size={20} className="stroke-[3]" />
                  GAS NGOBROL
                </motion.div>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
