import Image from "next/image";
import React from "react";

type HastagSectionProps = {
  className?: string;
};

const HastagSection = ({ className }: HastagSectionProps) => {
  return (
    <div className={`mt-12 sm:mt-16 md:mt-20 ${className || ""}`}>
      <div className="flex items-start justify-between gap-x-3 sm:gap-x-4 md:gap-x-6 relative">
        {/* Link Icon */}
        <div className="flex-shrink-0">
          <Image
            src="/images/link-icon.png"
            alt="link icon"
            width={100}
            height={100}
            priority
            className="w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] md:w-[120px] md:h-[120px] lg:w-[150px] lg:h-[150px] xl:w-[180px] xl:h-[180px]
                     md:absolute  md:-top-32 md:right-0 lg:-top-40 xl:-top-52"
          />
        </div>

        {/* Hashtags Container */}
        <div className="flex-1 min-w-0">
          {/* First Row */}
          <div className="flex items-center gap-x-2 sm:gap-x-3 md:gap-x-4 justify-end flex-wrap">
            <p className="text-[#7B7B7B] text-sm sm:text-base md:text-lg font-light whitespace-nowrap">
              #webdevelopment
            </p>
            <p className="text-[#7B7B7B] text-sm sm:text-base md:text-lg font-light whitespace-nowrap">
              #tailwindcss
            </p>
          </div>

          <span className="block h-px w-full bg-[#7B7B7B] my-2 sm:my-3"></span>

          {/* Second Row */}
          <div className="flex items-center gap-x-2 sm:gap-x-3 md:gap-x-4 justify-end">
            <p className="text-[#7B7B7B] text-sm sm:text-base md:text-lg font-light whitespace-nowrap">
              #websiteportfolio
            </p>
          </div>

          <span className="block h-px w-full bg-[#7B7B7B] my-2 sm:my-3"></span>

          {/* Third Row */}
          <div className="flex items-center gap-x-2 sm:gap-x-3 md:gap-x-4 justify-end flex-wrap">
            <p className="text-[#7B7B7B] text-sm sm:text-base md:text-lg font-light whitespace-nowrap">
              #frontenddeveloper
            </p>
            <p className="text-[#7B7B7B] text-sm sm:text-base md:text-lg font-light whitespace-nowrap">
              #keepgoing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HastagSection;
