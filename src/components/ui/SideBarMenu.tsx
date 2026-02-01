"use client";

import Image from "next/image";
import { User, Briefcase, Mail } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

type SideBarMenuProps = {
  isOpen: boolean;
  toggleMenu: () => void;
};

const SideBarMenu = ({ isOpen, toggleMenu }: SideBarMenuProps) => {
  const [year, setYear] = useState<number>();

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const navItems = [
    { href: "/about-me", label: "About me", icon: User },
    { href: "/work", label: "Work", icon: Briefcase },
    { href: "/contact", label: "Contact", icon: Mail },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 transition-opacity duration-300"
          onClick={toggleMenu}
        />
      )}

      <div
        className={`fixed top-0 left-0 min-h-screen bg-[#131313] shadow-2xl w-[320px] transform transition-all duration-300 ease-out z-50 border-r-4 border-white ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="relative p-6 border-b-4 border-white">
          <div className="flex items-center gap-4 pr-12">
            <div className="relative">
              <Link href="/">
                <div className="w-14 h-14 border-3 border-white bg-white flex items-center justify-center font-black text-[#131313] text-sm">
                  GY
                </div>
              </Link>
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-black text-white uppercase">Gemi Yudhia</h1>
              <p className="text-sm text-white font-bold uppercase">
                Frontend Developer
              </p>
            </div>
          </div>
        </div>

        <nav className="flex flex-col p-6 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.href}
                href={item.href}
                className="group flex items-center gap-4 px-4 py-3 text-white hover:text-[#131313] hover:bg-white transition-all duration-200 font-bold uppercase border-2 border-white"
              >
                <Icon
                  size={20}
                  className="text-white group-hover:text-[#131313] transition-colors duration-200"
                />
                <span className="group-hover:translate-x-1 transition-transform duration-200">
                  {item.label}
                </span>
              </a>
            );
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t-4 border-white">
          <p className="text-xs text-white text-center mt-3 font-bold uppercase">
            © {year} Gemi Yudhia
          </p>
        </div>
      </div>
    </>
  );
};

export default SideBarMenu;
