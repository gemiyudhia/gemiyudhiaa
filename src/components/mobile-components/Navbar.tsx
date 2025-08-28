const Navbar = () => {
  return (
    <header>
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-x-3">
          <img src="./images/logo.png" alt="logo" className="w-10 h-10" />
          <h1 className="text-[#212021] text-[16px] font-bold ">
            Gemi Yudhia
          </h1>
        </div>
          <h1 className="text-[#212021] text-[16px] font-bold uppercase">
            frontend developer portfolio
          </h1>
      </nav>
      <span className="block h-px w-full bg-[#212021] my-3"></span>
    </header>
  );
};

export default Navbar;
