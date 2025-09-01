const AboutCard = () => {
  return (
    <div className="mt-20">
      <div className="bg-[#212021] h-[560px] w-full max-w-[400px] rounded-[36px] p-6">
        <div className="text-white flex justify-between flex-col h-full">
          <div className="">
            <p className="font-light mb-3">Hello,</p>
            <h3 className="font-semibold text-4xl w-[171px]">
              <span>My name</span>
              <span className="block mt-5">is Gemi</span>
            </h3>
          </div>
          <div>
            <p className="font-light text-[12px] text-right">
              I consider myself a dedicated frontend developer who continuously
              learns new technologies and explores diverse approaches to deliver
              the best results in every project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
