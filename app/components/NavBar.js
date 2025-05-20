"use client";
import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import HamburgerDropDown from "./HamburgerDropDown";
import ConnectWallet from "./ConnectWallet";
import ConnectWalletMenu from "./ConnectWalletMenu";

export default function NavBar() {
  // Define a single "menu" state to track which menu is currently open (if any)
  const [activeMenu, setActiveMenu] = useState(null); // null, "dropdown", or "wallet"

  const toggleDropdown = () => {
    // If dropdown is already open, close it. Otherwise, open it and close any other menu
    setActiveMenu(activeMenu === "dropdown" ? null : "dropdown");
  };

  const toggleWalletMenu = () => {
    // If wallet menu is already open, close it. Otherwise, open it and close any other menu
    setActiveMenu(activeMenu === "wallet" ? null : "wallet");
  };

  const closeAllMenus = () => {
    setActiveMenu(null);
  };

  return (
    <>
      <header className="bg-[#3B5B6E] opacity-[86%] rounded-[81px] mt-7 w-[95%] mx-auto py-4 px-8">
        <HamburgerMenu onClick={toggleDropdown} isActive={activeMenu === "dropdown"} />
        <div className="flex justify-center">
          <img
            src="/mainlogo.svg"
            alt="SimpleGuys Logo"
            className="w-[180px] cursor-pointer"
          />
        </div>
        <div>
          <ConnectWallet onClick={toggleWalletMenu} isActive={activeMenu === "wallet"} />
        </div>
      </header>
      
      {/* Hamburger Dropdown Menu */}
      {activeMenu === "dropdown" && <HamburgerDropDown />}
      
      {/* Wallet Menu Popup */}
      {activeMenu === "wallet" && (
        <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50 mt-5">
          <div className="relative">
            <ConnectWalletMenu onClose={closeAllMenus} />
          </div>
        </div>
      )}
    </>
  );
}