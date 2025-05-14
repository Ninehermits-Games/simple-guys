import HamburgerMenu from "./HamburgerMenu";
import ConnectWallet from "./ConnectWallet";

export default function NavBar() {
  return (
    <header className="bg-[#3B5B6E] opacity-[86%] flex justify-between items-center cursor-pointer rounded-[81px] mt-7 w-[95%] mx-auto py-4">
      <HamburgerMenu />
      <div>
        <img src="/mainlogo.svg" alt="SimpleGuys Logo" className="w-[180px]" />
      </div>
      <ConnectWallet />
    </header>
  );
}
