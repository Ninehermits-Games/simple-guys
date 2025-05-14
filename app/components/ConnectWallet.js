export default function ConnectWallet() {
  return (
    <>
      <div className="absolute top-8.5 right-16 border-t-[6px] border-l-[6px] border-r-[6px] border-b-[12px] border-[#1F6C81] rounded-full">
        <button className="flex items-center justify-center px-4 py-1 bg-[#8BEAFF] text-white font-bold text-md rounded-full">
          {/* Wallet Icon */}
          <div className="mr-1">
            <img src="/walletimg.svg" alt="Wallet Image" className="w-[30px]" />
          </div>

          {/* Connect Text */}
          <h1 className="text-white text-lg font-extrabold tracking-wider" style={{
        WebkitTextStroke: '1.8px #1F6C81',
        // textShadow: '0 0 2px #1F6C81',
      }}>
        CONNECT
      </h1>
        </button>
      </div>
    </>
  );
}
