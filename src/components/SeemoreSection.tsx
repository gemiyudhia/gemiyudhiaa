import Image from "next/image";
import Link from "next/link";
import React from "react";

const SeemoreSection = () => {
  return (
    <div className="mt-4 flex items-center gap-x-2 justify-end">
      <Link href="/about-me">
        <div className="flex items-center gap-x-2">
          <h1 className="text-[#212021] text-[16px] font-bold hover:underline md:text-2xl">
            See More
          </h1>
          <Image
            src="/images/seemore.png"
            alt="seemore icon"
            width={40}
            height={40}
            priority
          />
        </div>
      </Link>
    </div>
  );
};

export default SeemoreSection;
