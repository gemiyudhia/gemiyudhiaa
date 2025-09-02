"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import HamburgerMenu from "./ui/HamburgerMenu";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="pt-4 md:pt-6 lg:pt-8">
      <nav className="flex items-center justify-between px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center gap-x-2 sm:gap-x-3">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={40}
              height={40}
              className="sm:w-[45px] sm:h-[45px] md:w-[50px] md:h-[50px]"
              priority
            />
          </Link>

          {/* Mobile title */}
          {pathname === "/" ? (
            <h1 className="text-[#212021] text-sm sm:text-base font-bold w-[160px] sm:w-[190px] md:hidden leading-tight">
              Gemi Yudhia
            </h1>
          ) : (
            <h1 className="text-[#212021] text-sm sm:text-base font-bold w-[160px] sm:w-[190px] md:hidden leading-tight">
              Frontend Developer Portfolio
            </h1>
          )}

          {/* Desktop navigation - tampilkan navlinks jika BUKAN di route "/" */}
          {pathname !== "/" && (
            <div className="hidden md:flex items-center gap-x-6 lg:gap-x-9 ml-3 lg:ml-5 font-normal text-xl lg:text-2xl">
              <Link
                href="/about-me"
                className="hover:text-gray-600 transition-colors duration-200 group relative"
              >
                About me
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#212021] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/work"
                className="hover:text-gray-600 transition-colors duration-200 group relative"
              >
                Work
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#212021] transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <Link
                href="/contact"
                className="hover:text-gray-600 transition-colors duration-200 group relative"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#212021] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          )}

          {/* Desktop title - tampilkan "Gemi Yudhia" jika di route "/" */}
          {pathname === "/" && (
            <div className="hidden md:flex items-center ml-3 lg:ml-5">
              <h1 className="text-[#212021] text-xl lg:text-2xl font-bold">
                Gemi Yudhia
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
              // Jika di route "/", tampilkan "Frontend Developer Portfolio"
              <h1 className="text-[#212021] text-xl lg:text-2xl font-bold">
                Frontend Developer Portfolio
              </h1>
            ) : (
              // Jika bukan di route "/", tampilkan "Gemi Yudhia"
              <h1 className="text-[#212021] text-xl lg:text-2xl font-bold">
                Gemi Yudhia
              </h1>
            )}
          </div>

          {/* Mobile right side - hanya tampil di route "/" */}
          {pathname === "/" && (
            <h1 className="text-[#212021] text-xs sm:text-sm font-bold uppercase md:hidden text-right leading-tight max-w-[140px] sm:max-w-[180px]">
              frontend developer portfolio
            </h1>
          )}
        </div>
      </nav>

      <span className="block h-px w-full bg-[#212021] my-2 sm:my-3 mx-3 sm:mx-4 md:mx-6 lg:mx-8"></span>
    </header>
  );
};

export default Navbar;
