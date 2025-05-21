"use client";
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
              ROADMAPS
            </h1>
          </div>

          <div className="w-[80%] mx-auto mt-6 flex flex-row items-center justify-center align-middle space-x-10">
            <div>
              <div>
                <span>
                  <img src="/rmImage.svg" width={450} />
                </span>
              </div>
            </div>

            <div
              className="flex flex-col items-start justify-start align-middle space-y-14"
              style={{
                WebkitTextStroke: "1px black",
              }}
            >
              <div className="-ml-[220px]">
                <ul className="text-[15px] font-normal tracking-tighter">
                  {/* Better aligned hollow circle bullets */}
                  <li className="flex items-center">
                    <span className="inline-block w-2 h-2 mr-3 rounded-full bg-white border-2 border-black"></span>
                    <span className="text-white">
                      LAUNCH OF SIMPLE GUYS & ITEM CAPSULE NFTS
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-2 h-2 mr-3 rounded-full bg-white border-2 border-black"></span>
                    <span className="text-white">
                      START OF MINI-GAME AND LEADERBOARD
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-2 h-2 mr-3 rounded-full bg-white border-2 border-black"></span>
                    <span className="text-white">AIRDROP SNAPSHOT BEGINS</span>
                  </li>
                </ul>
              </div>
              <div className="-ml-[120px]">
                <ul className="text-[15px] font-normal tracking-tighter">
                  <li className="flex items-center">
                    <span className="inline-block w-2 h-2 mr-3 rounded-full bg-white border-2 border-black"></span>
                    <span className="text-white">
                      $SIMG AIRDROP DISTRIBUTION
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-2 h-2 mr-3 rounded-full bg-white border-2 border-black"></span>
                    <span className="text-white">
                      TOKEN LAUNCH AND FIRST DEX LISTING
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-2 h-2 mr-3 rounded-full bg-white border-2 border-black"></span>
                    <span className="text-white">
                      NFT STAKING TO EARN $SIMG INTRODUCED
                    </span>
                  </li>
                </ul>
              </div>
              <div className="-ml-[20px]">
                <ul className="text-[15px] font-normal tracking-tighter">
                  <li className="flex items-center">
                    <span className="inline-block w-2 h-2 mr-3 rounded-full bg-white border-2 border-black"></span>
                    <span className="text-white">
                      SIMPLE GUYS UPGRADE SYSTEM LAUNCH
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-2 h-2 mr-3 rounded-full bg-white border-2 border-black"></span>
                    <span className="text-white">
                      COMMUNITY DAO INITIATES PROJECT DECISIONS
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-2 h-2 mr-3 rounded-full bg-white border-2 border-black"></span>
                    <span className="text-white">
                      EXPAND GAMEPLAY AND CROSS-IP COLLABORATIONS
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div>
              <div>
                <span>
                  <img src="/sp2.svg" width={230} />
                </span>
              </div>
            </div> */}
            {/* <div>
              <div>
                <span>
                  <img src="/sp4.svg" width={190} />
                </span>
              </div>
            </div> */}
          </div>

          <div>
            <BackAndNextButtons2 />
          </div>
        </div>
      </div>
    </>
  );
}
