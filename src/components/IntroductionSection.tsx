import Image from "next/image";
import React from "react";

const IntroductionSection = () => {
  return (
    <>
      <div className="flex items-center justify-between mt-10 lg:mt-0">
        <h1 className="font-bold text-4xl">Introduction</h1>
        <Image
          src="/images/seemore.png"
          alt="seemore image"
          width={40}
          height={40}
          priority
        />
      </div>
      <div className="mt-6 border rounded-[36px] lg:rounded-[57px]">
        <div className="p-6">
          <h1 className="font-bold text-[14px] md:text-2xl lg:text-3xl">
            A Frontend Developer based in Aceh, Indonesia
          </h1>
          <div className="lg:flex lg:justify-between lg:items-start">
            <p className="font-light text-[14px] mt-3 lg:w-[700px] lg:text-xl">
              I am a frontend developer passionate about creating intuitive,
              responsive, and visually appealing user interfaces. With a strong
              eagerness to learn, I continuously explore new technologies and
              diverse design approaches to deliver the best results in every
              project. My focus is on combining creativity and functionality to
              craft seamless user experiences
            </p>
            <Image
              src="/images/introduction.png"
              alt="introduction image"
              width={280}
              height={280}
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroductionSection;
