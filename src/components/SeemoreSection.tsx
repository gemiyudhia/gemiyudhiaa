import Link from "next/link";
import React from "react";

const SeemoreSection = () => {
  return (
    <div className="mt-4 flex items-center gap-x-2 justify-end">
      <Link href="/about-me">
        <div className="flex items-center gap-x-2">
          <h1 className="text-[#212021] text-[16px] font-bold hover:underline">
            See More
          </h1>
          <img src="/images/seemore.png" alt="seemore icon" />
        </div>
      </Link>
    </div>
  );
};

export default SeemoreSection;
