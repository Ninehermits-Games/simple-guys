"use client";
import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import HamburgerDropDown from "./HamburgerDropDown";
import ConnectWallet from "./ConnectWallet";

export default function NavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <header className="bg-[#3B5B6E] opacity-[86%] rounded-[81px] mt-7 w-[95%] mx-auto py-4 px-8">
        <HamburgerMenu onClick={toggleDropdown} />
        <div className="flex justify-center">
          <img
            src="/mainlogo.svg"
            alt="SimpleGuys Logo"
            className="w-[180px] cursor-pointer"
          />
        </div>
        <div>
          <ConnectWallet />
        </div>
      </header>
      <div>      
        {isDropdownOpen && <HamburgerDropDown />}
      </div>
    </>
  );
}
