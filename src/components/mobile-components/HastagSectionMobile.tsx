import Image from 'next/image';
import React from 'react'

const HastagSectionMobile = () => {
  return (
    <div className="mt-20">
      <div className="flex items-center justify-between gap-x-2">
        <Image
          src="/images/link-icon.png"
          alt="link icon"
          width={100}
          height={100}
          priority
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
}

export default HastagSectionMobile