import Image from "next/image";
import React from "react";

const IntroductionSection = () => {
  return (
    <>
      <div className="flex items-center justify-between mt-15">
        <h1 className="font-bold text-4xl">Introduction</h1>
        <Image
          src="/images/seemore.png"
          alt="seemore image"
          width={40}
          height={40}
          priority
        />
      </div>
      <div className="mt-10 border rounded-[36px]">
        <div className="p-6">
          <h1 className="font-bold text-[14px]">
            A Frontend Developer based in Aceh, Indonesia
          </h1>
          <p className="font-light text-[14px] mt-3">
            I am a frontend developer passionate about creating intuitive,
            responsive, and visually appealing user interfaces. With a strong
            eagerness to learn, I continuously explore new technologies and
            diverse design approaches to deliver the best results in every
            project. My focus is on combining creativity and functionality to
            craft seamless user experiences
          </p>
          <div className="flex flex-col items-center justify-center">
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
