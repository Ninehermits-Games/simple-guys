import localFont from "next/font/local";
import Image from "next/image";

const Bango = localFont({
  src: "../fonts/SVN-Bango.otf",
});

export default function ConnectWalletMenu({ onClose }) {
  return (
    <>
      <div
        className={`w-[500px] rounded-2xl overflow-hidden border-4 border-black ${Bango.className}`}
      >
        {/* Header */}
        <div className="bg-[#EFAD31] opacity-[95%] px-4 py-3.5 flex justify-between items-center border-b-4 border-black">
          <h2
            className="text-white font-semibold text-[28px] tracking-wider text-center w-full"
            style={{
              WebkitTextStroke: "0.5px black",
              // textShadow: '0 0 0 2px black'
            }}
          >
            CONNECT WALLET
          </h2>
          <button onClick={onClose} className="absolute right-5 cursor-pointer">
            <span>
              <Image
                src="/closebutton.svg"
                width={55}
                height={55}
                alt="Close"
              />
            </span>
          </button>
        </div>

        {/* Body */}
        <div className="bg-[#434343] opacity-[95%] p-5 space-y-2">
          {/* Phantom */}
          <button className="w-full bg-[#2B2B2B] text-white font-bold text-2xl py-1 pl-4 pr-1 rounded-lg flex items-center justify-between">
            <span className="tracking-wider font-normal">PHANTOM</span>
            <div>
              <span>
                <Image
                  src="/phantom.svg"
                  width={55}
                  height={55}
                  alt="Phantom Wallet"
                />
              </span>
            </div>
          </button>

          {/* Trust Wallet */}
          <button className="w-full bg-[#2B2B2B] text-white font-bold text-2xl py-1 pl-4 pr-1 rounded-lg flex items-center justify-between">
            <span className="tracking-wider font-normal">TRUST WALLET</span>
            <div>
              <span>
                <Image
                  src="/trust.svg"
                  width={55}
                  height={55}
                  alt="Trust Wallet"
                />
              </span>
            </div>
          </button>

          {/* Coinbase */}
          <button className="w-full bg-[#2B2B2B] text-white font-bold text-2xl py-1 pl-4 pr-1 rounded-lg flex items-center justify-between">
            <span className="tracking-wider font-normal">COINBASE</span>
            <div>
              <span>
                <Image
                  src="/coinbase.svg"
                  width={55}
                  height={55}
                  alt="Coinbase Wallet"
                />
              </span>
            </div>
          </button>

          {/* Meta Mask */}
          <button className="w-full bg-[#2B2B2B] text-white font-bold text-2xl py-1 pl-4 pr-1 rounded-lg flex items-center justify-between">
            <span className="tracking-wider font-normal">META MASK</span>
            <div>
              <span>
                <Image
                  src="/metamask.svg"
                  width={55}
                  height={55}
                  alt="Meta Mask"
                />
              </span>
            </div>
          </button>

          {/* Keplr */}
          <button className="w-full bg-[#2B2B2B] text-white font-bold text-2xl py-1 pl-4 pr-1 rounded-lg flex items-center justify-between">
            <span className="tracking-wider font-normal">KEPLR</span>
            <div>
              <span>
                <Image
                  src="/keplr.svg"
                  width={55}
                  height={55}
                  alt="Keplr Wallet"
                />
              </span>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
