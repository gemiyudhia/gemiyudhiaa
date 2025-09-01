import Image from "next/image";
import Link from "next/link";
import React from "react";

const SeemoreSection = () => {
  return (
    <div className="mt-3 sm:mt-4 md:mt-6 max-w-7xl mx-auto">
      <div className="flex items-center gap-x-2 sm:gap-x-3 justify-end">
        <Link href="/about-me" className="group">
          <div className="flex items-center gap-x-2 sm:gap-x-3">
            <h1
              className="text-[#212021] text-sm sm:text-base md:text-xl lg:text-2xl font-bold 
                         group-hover:underline transition-all duration-200 group-hover:text-gray-700"
            >
              See More
            </h1>
            <div className="flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
              <Image
                src="/images/seemore.png"
                alt="seemore icon"
                width={40}
                height={40}
                priority
                className="w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] md:w-[40px] md:h-[40px]"
              />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SeemoreSection;
