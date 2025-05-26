import localFont from "next/font/local";
import { useRouter } from "next/navigation";
// import { Noto_Sans_Symbols } from "next/font/google";

const Bango = localFont({
  src: "../fonts/SVN-Bango.otf",
});

export default function HamburgerDropDown() {
  const router = useRouter();

  return (
    <>
      <div
        className={`bg-[#191C1D] opacity-[87%] rounded-t-[35px] rounded-bl-[35px] rounded-br-[35px] -z-10 absolute top-7 w-[95%] left-1/2 transform -translate-x-1/2 py-4 px-8 ${Bango.className}`}
      >
        <div className="flex justify-between">
          <div className="flex justify-between space-x-14">
            <div className="space-y-4 mt-20">
              <h1
                className="text-[40px] font-semibold cursor-pointer hover:text-[#FFAE00] transition-colors"
                onClick={() => {
                  window.location = "/aboutUs";
                }}
                style={{
                  WebkitTextStroke: "1.5px black",
                  // textShadow: '0 0 0 2px black'
                }}
              >
                ABOUT US
              </h1>
              <h1
                className="text-[40px] font-semibold cursor-pointer hover:text-[#FFAE00] transition-colors"
                style={{
                  WebkitTextStroke: "1.5px black",
                  // textShadow: '0 0 0 2px black'
                }}
              >
                BUY NFT
              </h1>
            </div>
            <div className="space-y-4 mt-20">
              <h1
                className="text-[40px] font-semibold cursor-pointer hover:text-[#FFAE00] transition-colors"
                style={{
                  WebkitTextStroke: "1.5px black",
                  // textShadow: '0 0 0 2px black'
                }}
              >
                SIMPLE CITY
              </h1>
              <h1
                className="text-[40px] font-semibold cursor-pointer hover:text-[#FFAE00] transition-colors"
                onClick={() => {
                  window.location = "/storePage1";
                }}
                style={{
                  WebkitTextStroke: "1.5px black",
                  // textShadow: '0 0 0 2px black'
                }}
              >
                MARKETPLACE
              </h1>
            </div>
          </div>

          <div className="flex justify-between space-x-2 mr-2">
            <div className="space-y-2 mt-16">
              <div className="bg-[#D3D3D3] py-2 px-1 rounded-2xl border-4 border-[#000000]">
                <div className="flex items-center justify-center w-22 h-13 bg-black rounded-lg transition-colors cursor-pointer border-2 border-[#000000]">
                  <span className="text-black font-bold">
                    <img src="/twitter.svg" width={45} />
                  </span>
                </div>
                <div className="text-xs text-black mt-1 text-center">
                  TWITTER
                </div>
              </div>
              <div className="bg-[#D3D3D3] py-2 px-1 rounded-2xl border-4 border-[#000000]">
                <div className="flex items-center justify-center w-22 h-13 bg-white rounded-lg transition-colors cursor-pointer border-2 border-[#000000]">
                  <span className="text-black font-bold">
                    <img src="/ins.svg" width={40} />
                  </span>
                </div>
                <div className="text-xs text-black mt-1 text-center">
                  INSTAGRAM
                </div>
              </div>
            </div>
            <div className="space-y-2 mt-16">
              <div className="bg-[#D3D3D3] py-2 px-1 rounded-2xl border-4 border-[#000000]">
                <div className="flex items-center justify-center w-22 h-13 bg-[#7289DA] rounded-lg transition-colors cursor-pointer border-2 border-[#000000]">
                  <span className="text-black font-bold">
                    <img src="/discord.svg" width={45} />
                  </span>
                </div>
                <div className="text-xs text-black mt-1 text-center">
                  DISCORD
                </div>
              </div>
              <div className="bg-[#D3D3D3] py-2 px-1 rounded-2xl border-4 border-[#000000]">
                <div className="flex items-center justify-center w-22 h-13 bg-white rounded-lg transition-colors cursor-pointer border-2 border-[#000000]">
                  <span className="text-black font-bold">
                    <img src="/yt.svg" width={50} />
                  </span>
                </div>
                <div className="text-xs text-black mt-1 text-center">
                  YOUTUBE
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex space-x-10 text-sm font-normal">
          <div
            onClick={() => {
              window.location = "/privacy";
            }}
            className="cursor-pointer"
          >
            Privacy Policy
          </div>
          <div
            onClick={() => {
              window.location = "/terms";
            }}
            className="cursor-pointer"
          >
            Terms of Use
          </div>
          <div className="cursor-pointer">White Paper</div>
        </div>
      </div>
    </>
  );
}
