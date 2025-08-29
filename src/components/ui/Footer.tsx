import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="bg-[#212021] mt-15 text-white">
      <div className="container mx-auto p-7 py-9 space-y-10">
        <div className="text-center ">
          <h1 className="font-bold text-[15px] tracking-[0.3rem]">
            Gemi Yudhia
          </h1>
          <h2 className="text-[15px] font-semibold italic tracking-[0.3rem]">
            Frontend Developer
          </h2>
        </div>
        <div className="flex justify-around items-center">
          <div className="w-20 h-20 flex items-center justify-center border border-[#FFFFFF] rounded-full">
            <Image
              src="/images/instagram-icon.png"
              alt="instagram icon"
              width={40}
              height={40}
              priority
              className="text-center"
            />
          </div>
          <div className="w-20 h-20 flex items-center justify-center border border-[#FFFFFF] rounded-full">
            <Image
              src="/images/linkedin-icon.png"
              alt="linkedin icon"
              width={40}
              height={40}
              priority
            />
          </div>
          <div className="flex items-center justify-center w-20 h-20 border border-[#FFFFFF] rounded-full">
            <Image
              src="/images/github-icon.png"
              alt="github icon"
              width={40}
              height={40}
              priority
            />
          </div>
        </div>

        <div className="flex justify-around font-extralight">
          <Link href="/about-me">About me</Link>
          <Link href="/work">Work</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="text-center">
          <p className="font-extralight">
            © {year} Gemi Yudhia. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
