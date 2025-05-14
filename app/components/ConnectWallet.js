export default function ConnectWallet() {
  return (
    <>
    <div className="mr-8">
        <button className="flex items-center justify-center px-6 py-1 bg-[#8BEAFF] text-white font-bold text-lg rounded-full border-[12px] border-[#000000]">
          {/* Wallet Icon */}
          <div className="mr-2">
            <img src="/walletimg.svg" alt="Wallet Image" className="w-[40px]" />
          </div>

          {/* Connect Text */}
          <span className="tracking-wider">CONNECT</span>
        </button>
      </div>
    </>
  );
}