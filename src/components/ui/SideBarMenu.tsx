import Image from "next/image";

type SideBarMenuProps = {
  isOpen: boolean;
  toggleMenu: () => void;
};

const SideBarMenu = ({ isOpen, toggleMenu }: SideBarMenuProps) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full bg-[#0838FF] shadow-2xl w-[300px] p-8 py-12 transform transition-transform duration-300 ease-in-out z-50 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-center gap-x-5">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={50}
          height={50}
          priority
        />
        <div className="flex flex-col text-white">
          <h1 className="text-base font-bold">Gemi Yudhia</h1>
          <p className="font-light">Frontend Developer</p>
        </div>
      </div>

      <nav className="flex flex-col my-20 gap-y-8 text-white font-semibold">
        <a href="/about-me">About me</a>
        <a href="/work">Work</a>
        <a href="/contact">Contact</a>
      </nav>
    </div>
  );
};

export default SideBarMenu;
