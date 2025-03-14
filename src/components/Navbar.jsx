import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserInfoOpen, setIsUserInfoOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleUserInfo = () => {
    setIsUserInfoOpen(!isUserInfoOpen);
  };

  return (
    <>
      {/* Mobile */}
      <div className="flex justify-between relative top-3 lg:hidden">
        <div className="w-10 h-10 rounded-full flex justify-center items-center" id="UserButton">
          <img src="/NavIcon.png" alt="" className="w-6 h-6" onClick={toggleMenu} />
        </div>
        <div className={`text-center text-white ${isMenuOpen ? "hidden" : ""}`}>
          <div className="text-[0.7rem]">Hi, visitor!</div>
          <div className="font-bold text-[1rem]">WELCOME TO WEBSITE</div>
        </div>
        <div className={`w-10 h-10 rounded-full flex justify-center items-center `} id="UserButton">
          <img src="/Notif.png" alt="" className="" onClick={toggleUserInfo} />
        </div>
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black opacity-50 z-10" onClick={toggleMenu}></div>
        )}
        <div
          className={`fixed top-0 left-0 h-full w-64 shadow-lg transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          id="IsiNavbar"
        >
          <ul className="mt-8">
            <li className="mb-4">
              <a href="#" className="text-white opacity-80 text-lg font-bold">
                Home
              </a>
            </li>
            <li className="mb-4">
              <a href="#Gallery" className="text-white opacity-80 text-lg font-bold">
                Gallery & Anggota Kelas
              </a>
            </li>
            <li>
              <a href="#Tabs" className="text-white opacity-80 text-lg font-bold">
                Structure & Schedule
              </a>
            </li>
          </ul>
        </div>
        {isUserInfoOpen && (
          <div
            className={`absolute top-full right-0 bg-black/50 p-5 rounded-md`}
            id="UserInfo"
          >
            <div className="text-center text-white">
              <div className="font-bold text-[1rem]">Informasi</div>
              <div className="text-[0.7rem]">• Web ini masih tahap pengembangan</div>
              <div className="text-[0.7rem]">• Selamat menunaikan ibadah puasa..</div>
            </div>
          </div>
        )}
      </div>

      {/* Dekstop */}
      <div className="flex justify-between relative top-3 hidden lg:flex">
        <div>
          <img src="/LogoPHI.png" className="w-12 h-12 rounded-full" alt="" />
        </div>
        <ul className="mt-2 flex gap-5">
          <li className="mb-4">
            <a href="#" className="text-white opacity-80 text-[1rem] font-semibold">
              Home
            </a>
          </li>
          <li className="mb-4">
            <a href="#Gallery" className="text-white opacity-80 text-[1rem] font-semibold">
              Gallery & Anggota Kelas
            </a>
          </li>
          <li>
            <a href="#Tabs" className="text-white opacity-80 text-[1rem] font-semibold">
              Structure & Schedule
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
