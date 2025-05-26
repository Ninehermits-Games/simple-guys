"use client";

import localFont from "next/font/local";
import { useRouter } from "next/navigation";
// import { Noto_Sans_Symbols } from "next/font/google";

const Bango = localFont({
  src: "../fonts/SVN-Bango.otf",
});

const NotoSansRegular = localFont({
  src: "../fonts/NotoSans-Regular.ttf",
});

export default function BackAndNextButtons() {
  const router = useRouter();

  return (
    <>
      <div
        className={`absolute flex space-x-4 bottom-[90px] right-[100px] ${Bango.className}`}
      >
        {/* <button className="cursor-pointer"> */}
        {/* <span>
            <img src="/backbg.svg" width={95} />
          </span> */}
        {/* <div className="inline-block">
          <button
            className="bg-[#7B7B7B] text-white font-normal tracking-widest py-4 pr-4 pl-7 flex items-center justify-center rounded-lg"
            style={{
              clipPath: "polygon(20% 0, 100% 0, 100% 100%, 20% 100%, 0 50%)",
            }}
          >
            <span className="text-2xl">BACK</span>
          </button>
        </div> */}
        <div className="inline-block">
          <button className="relative focus:outline-none cursor-not-allowed">
            <svg
              width="130"
              //   height="0"
              viewBox="0 0 100 50"
              className="fill-[#7B7B7B] rounded-lg"
            >
              {/* Path with clearly rounded corners at all 5 points */}
              <path
                d="M30 0 
                   C25 0, 22 3, 20 7
                   L10 20 
                   C7 24, 7 26, 10 30
                   L20 43
                   C22 47, 25 50, 30 50
                   L150 50
                   C155 50, 160 45, 160 40
                   L160 10
                   C160 5, 155 0, 150 0
                   Z"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-white font-normal pl-6 pb-1 tracking-widest text-[30px]">
              Back
            </span>
          </button>
        </div>
        {/* <button className="cursor-pointer">
          <span>
            <img src="/nextbg.svg" width={95} />
          </span>
        </button> */}
        <div className="inline-block">
          <button
            onClick={() => {
              window.location = "/aboutNFT";
            }}
            className="relative focus:outline-none cursor-pointer"
          >
            <svg
              width="130"
              //   height="0"
              viewBox="60 0 100 50"
              className="fill-[#69B9A9] rounded-lg"
            >
              {/* Path with clearly rounded corners at all 5 points */}
              <path
                d="M10 0 
               C5 0, 0 5, 0 10
               L0 40
               C0 45, 5 50, 10 50
               L130 50
               C135 50, 138 47, 140 43
               L150 30
               C153 26, 153 24, 150 20
               L140 7
               C138 3, 135 0, 130 0
               Z"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-white font-normal pr-5 pb-1 tracking-widest text-[30px]">
              Next
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
