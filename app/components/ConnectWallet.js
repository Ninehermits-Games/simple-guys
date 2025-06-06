import localFont from "next/font/local";
import Image from "next/image";

const Bango = localFont({
  src: "../fonts/SVN-Bango.otf",
});

export default function ConnectWallet({ onClick }) {
  return (
    <>
      <div className={`${Bango.className}`}>
        <div className="absolute top-8.5 right-16 border-t-[6.2059px] border-l-[6.2059px] border-r-[6.2059px] border-b-[11px] border-[#1F6C81] rounded-[31.719px]">
          <button
            onClick={onClick}
            className="flex items-center justify-center px-4 py-1 bg-[#8BEAFF] text-white font-bold text-md rounded-[31.719px] cursor-pointer"
          >
            {/* Wallet Icon */}
            <div className="mb-0.5">
              <Image
                src="/walletimg.svg"
                alt="Wallet Image"
                width={30}
                height={30}
              />
            </div>

            {/* Connect Text */}
            <h1
              className="text-white text-lg font-normal"
              style={{
                WebkitTextStroke: "1.3px #1F6C81",
                // textShadow: '0 0 2px #1F6C81',
              }}
            >
              CONNECT
            </h1>
          </button>
        </div>
      </div>
    </>
  );
}
