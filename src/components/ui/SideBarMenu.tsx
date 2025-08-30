import Image from "next/image";

type SideBarMenuProps = {
  isOpen: boolean;
  toggleMenu: () => void;
};

const SideBarMenu = ({ isOpen, toggleMenu }: SideBarMenuProps) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full bg-[#0838FF] shadow-2xl w-[300px] p-8 py-12 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-center gap-x-5">
        <Image src="/images/logo.png" alt="logo" width={50} height={50} priority />
        <div className="flex flex-col text-white">
          <h1 className="text-base font-bold">Gemi Yudhia</h1>
          <p className="font-light">Frontend Developer</p>
        </div>
      </div>

      <button onClick={toggleMenu}>
        <div
          className={`absolute -right-16 top-1/2 -translate-y-85 w-40 h-40 bg-[#0838FF] rounded-full transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Image
            src="/images/back-icon.png"
            alt="logo"
            width={30}
            height={30}
            className="absolute top-1/2 left-24 -translate-x-1/2 -translate-y-1/2"
            priority
          />
        </div>
      </button>

      <nav className="flex flex-col my-20 gap-y-8 text-white font-semibold">
        <a href="/about-me">About me</a>
        <a href="/work">Work</a>
        <a href="/contact">Contact</a>
      </nav>
    </div>
  );
};

export default SideBarMenu;
