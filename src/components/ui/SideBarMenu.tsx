"use client";

import Image from "next/image";
import { User, Briefcase, Mail } from "lucide-react";
import Link from "next/link";

type SideBarMenuProps = {
  isOpen: boolean;
  toggleMenu: () => void;
};

const SideBarMenu = ({ isOpen, toggleMenu }: SideBarMenuProps) => {
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
        className={`fixed top-0 left-0 min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 shadow-2xl w-[320px] transform transition-all duration-300 ease-out z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="relative p-6 border-b border-slate-700/50">
          <div className="flex items-center gap-4 pr-12">
            <div className="relative">
              <Link href="/">
                <Image
                  src="/images/logo.png"
                  alt="logo"
                  width={56}
                  height={56}
                  priority
                  className="rounded-full ring-2 ring-blue-500/30"
                />
              </Link>
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold text-white">Gemi Yudhia</h1>
              <p className="text-sm text-slate-400 font-medium">
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
                className="group flex items-center gap-4 px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-slate-700/50 transition-all duration-200 font-medium"
              >
                <Icon
                  size={20}
                  className="text-slate-400 group-hover:text-blue-400 transition-colors duration-200"
                />
                <span className="group-hover:translate-x-1 transition-transform duration-200">
                  {item.label}
                </span>
              </a>
            );
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-slate-700/50">
          <p className="text-xs text-slate-500 text-center mt-3">
            © 2024 Gemi Yudhia
          </p>
        </div>
      </div>
    </>
  );
};

export default SideBarMenu;
