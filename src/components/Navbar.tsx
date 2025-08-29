"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import HamburgerMenu from "./ui/HamburgerMenu";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="pt-8">
      <nav className="flex items-center justify-between px-3">
        <div className="flex items-center gap-x-3">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={50}
              height={50}
              priority
            />
          </Link>
          <h1 className="text-[#212021] text-[16px] font-bold w-[190px]">
            Gemi Yudhia
          </h1>
        </div>
        {pathname === "/about-me" ? (
          <HamburgerMenu />
        ) : (
          <h1 className="text-[#212021] text-[16px] font-bold uppercase">
            frontend developer portfolio
          </h1>
        )}
      </nav>
      <span className="block h-px w-full bg-[#212021] my-3"></span>
    </header>
  );
};

export default Navbar;
