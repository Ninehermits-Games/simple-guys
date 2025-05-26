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
      className="absolute top-0 left-0 min-h-screen w-full bg-cover bg-center bg-no-repeat -z-50 flex items-center justify-center"
      style={{ backgroundImage: "url('/background1.svg')" }}
    >
      <div className={`${Bango.className} w-full max-w-[1200px] px-4`}>
        {/* Title */}
        <div className="flex justify-center mb-1">
          <h1
            className="text-[50px] font-semibold text-[#F5CF6F] text-center"
            style={{ WebkitTextStroke: "1.5px black" }}
          >
            ROADMAPS
          </h1>
        </div>

        {/* Roadmap Content */}
        <div className="flex flex-wrap justify-center items-center gap-10">
          <div>
            <img src="/rmImage.svg" width={450} alt="Roadmap Image" />
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
        </div>

        {/* Buttons */}
        <div>
          <BackAndNextButtons2 />
        </div>
      </div>
    </div>
    </>
  );
}
