import Image from "next/image";
import React from "react";

type HastagSectionProps = {
  className?: string;
};

const HastagSection = ({ className }: HastagSectionProps) => {
  return (
    <div className={`mt-20 ${className}`}>
      <div className="flex items-center justify-between gap-x-2 relative">
        <Image
          src="/images/link-icon.png"
          alt="link icon"
          width={100}
          height={100}
          priority
          className="w-[100px] h-[100px] md:absolute md:w-[180px] md:h-[180px] md:left-22 md:-top-52"
        />
        <div>
          <div className="flex items-center gap-x-2 justify-end">
            <p className="text-[#7B7B7B] text-[16px] font-light">
              #webdevelopment
            </p>
            <p className="text-[#7B7B7B] text-[16px] font-light">
              #tailwindcss
            </p>
          </div>
          <span className="block h-px w-full bg-[#7B7B7B] my-3"></span>
          <div className="flex items-center gap-x-2 justify-end">
            <p className="text-[#7B7B7B] text-[16px] font-light">
              #websiteportfolio
            </p>
          </div>
          <span className="block h-px w-full bg-[#7B7B7B] my-3"></span>
          <div className="flex items-center gap-x-2 justify-end">
            <p className="text-[#7B7B7B] text-[16px] font-light">
              #frontenddeveloper
            </p>
            <p className="text-[#7B7B7B] text-[16px] font-light">#keepgoing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HastagSection;
