"use client";

import { useState } from "react";
import SideBarMenu from "./SideBarMenu";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button
        onClick={toggleMenu}
        className="flex flex-col justify-between w-8 h-5.5"
      >
        <span
          className={`block h-1.5 bg-[#212021] rounded ${
            isOpen ? "rotate-45 translate-y-2" : ""
          } transsition-all duration-300 ease-in-out`}
        ></span>
        <span
          className={`block h-1.5 bg-[#212021] rounded ${
            isOpen ? "opacity-0" : "opacity-100"
          } transsition-all duration-300 ease-in-out`}
        ></span>
        <span
          className={`block h-1.5 bg-[#212021] rounded ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          } transsition-all duration-300 ease-in-out`}
        ></span>
      </button>

      <SideBarMenu isOpen={isOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default HamburgerMenu;
