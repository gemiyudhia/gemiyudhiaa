import Image from "next/image";
import Link from "next/link";
import React from "react";

const GetInTouch = () => {
  return (
    <>
      <div className="mt-10 lg:mt-4">
        <h1 className="font-bold text-4xl">Get In Touch</h1>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-5 lg:gap-2">
        {/* Instagram */}
        <Link
          href="https://www.instagram.com/yuudhia"
          target="_blank"
          className="max-w-[189px] h-[180px]"
        >
          <div className="w-full max-w-[189px] h-[180px] rounded-[36px] bg-gradient-to-br from-[#E1306C] to-[#FD1D1D] self-center">
            <div className="p-4 flex flex-col justify-between h-full">
              <Image
                src="/images/instagram-icon.png"
                alt="instagram image"
                width={40}
                height={40}
                priority
              />
              <div className="space-y-3">
                <Image
                  src="/images/line.png"
                  alt="line"
                  width={100}
                  height={100}
                  className="w-full"
                  priority
                />
                <h1 className="font-light text-[10px] text-white text-right">
                  instagram.com/yuudhia
                </h1>
              </div>
            </div>
          </div>
        </Link>

        {/* Linkedin */}
        <Link
          href="https://www.linkedin.com/in/gemiyudhia/"
          target="_blank"
          className="max-w-[189px] h-[180px]"
        >
          <div className="w-full max-w-[189px] h-[180px] rounded-[36px] bg-[#0838FF]">
            <div className="p-4 flex flex-col justify-between h-full">
              <Image
                src="/images/linkedin-icon.png"
                alt="linkedin image"
                width={40}
                height={40}
                priority
              />
              <div className="space-y-3">
                <Image
                  src="/images/line.png"
                  alt="line"
                  width={100}
                  height={100}
                  className="w-full"
                  priority
                />
                <h1 className="font-light text-[10px] text-white text-right">
                  linkedin.com/in/gemiyudhia
                </h1>
              </div>
            </div>
          </div>
        </Link>

        {/* Github */}
        <Link
          href="https://github.com/gemiyudhia"
          target="_blank"
          className="max-w-[189px] h-[180px]"
        >
          <div className="w-full max-w-[189px] h-[180px] rounded-[36px] bg-[#212021]">
            <div className="p-4 flex flex-col justify-between h-full">
              <Image
                src="/images/github-icon.png"
                alt="github image"
                width={40}
                height={40}
                priority
              />
              <div className="space-y-3">
                <Image
                  src="/images/line.png"
                  alt="line"
                  width={100}
                  height={100}
                  className="w-full"
                  priority
                />
                <h1 className="font-light text-[10px] text-white text-right">
                  github.com/gemiyudhia
                </h1>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default GetInTouch;
