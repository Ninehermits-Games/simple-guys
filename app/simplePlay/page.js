import localFont from "next/font/local";
// import { Noto_Sans_Symbols } from "next/font/google";
import BackAndNextButtons2 from "../components/BackAndNextButtons2";

const Bango = localFont({
  src: "../fonts/SVN-Bango.otf",
});

const NotoSansRegular = localFont({
  src: "../fonts/NotoSans-Regular.ttf",
});

export default function page() {
  return (
    <>
      <div
        className="absolute top-0 min-h-screen w-full bg-cover bg-center bg-no-repeat -z-50"
        style={{
          backgroundImage: "url('/background1.svg')",
        }}
      >
        <div className={`${Bango.className}`}>
          <div className="flex flex-row items-center justify-center align-middle mt-[130px] space-x-10 w-[80%] mx-auto">
            <h1
              className="text-[50px] font-semibold text-[#F5CF6F]"
              style={{
                WebkitTextStroke: "1.5px black",
                // textShadow: '0 0 0 2px black'
              }}
            >
              SIMPLE PLAY
            </h1>
          </div>

          <div className="w-[80%] mx-auto mt-8 flex flex-row items-center justify-center align-middle space-x-10">
            <div>
              <div>
                <span>
                  <img src="/sp1.svg" width={150} />
                </span>
              </div>
            </div>
            <span>
              <img src="/greenArrow.svg" width={50} />
            </span>
            <div>
              <div>
                <span>
                  <img src="/sp2.svg" width={230} />
                </span>
              </div>
            </div>
            <span>
              <img src="/greenArrow.svg" width={50} />
            </span>
            <div>
              <div>
                <span>
                  <img src="/sp3.svg" width={180} />
                </span>
              </div>
            </div>
            <span>
              <img src="/greenArrow.svg" width={50} />
            </span>
            <div>
              <div>
                <span>
                  <img src="/sp4.svg" width={190} />
                </span>
              </div>
            </div>
          </div>

          <div className="w-[80%] mx-auto mt-2 flex flex-row items-center justify-center align-middle space-x-50 text-center">
            <div>
              <div>
                <p
                  className="text-[25px] font-semibold text-white"
                  style={{
                    WebkitTextStroke: "1px black",
                    // textShadow: '0 0 0 2px black'
                  }}
                >
                  Get NFT
                </p>
              </div>
            </div>
            <div>
              <div>
                <p
                  className="text-[25px] font-semibold text-white"
                  style={{
                    WebkitTextStroke: "1px black",
                    // textShadow: '0 0 0 2px black'
                  }}
                >
                  Put into
                  <br /> simple game
                </p>
              </div>
            </div>
            <div>
              <div>
                <p
                  className="text-[25px] font-semibold text-white"
                  style={{
                    WebkitTextStroke: "1px black",
                    // textShadow: '0 0 0 2px black'
                  }}
                >
                  Get high
                  <br /> score
                </p>
              </div>
            </div>
            <div>
              <div>
                <p
                  className="text-[25px] font-semibold text-white"
                  style={{
                    WebkitTextStroke: "1px black",
                    // textShadow: '0 0 0 2px black'
                  }}
                >
                  Get $SIMG
                  <br /> airdrop
                </p>
              </div>
            </div>
          </div>

          <div>
            <BackAndNextButtons2 />
          </div>
        </div>
      </div>
    </>
  );
}
