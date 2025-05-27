"use client";
import { useEffect } from "react";
import localFont from "next/font/local";
import Image from "next/image";
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
        <div
          className={`${Bango.className} flex flex-col items-center justify-center w-full max-w-[1200px] px-4`}
        >
          {/* Title */}
          <h1
            className="text-[50px] font-semibold text-[#F5CF6F] mb-8 text-center"
            style={{ WebkitTextStroke: "1.5px black" }}
          >
            SIMPLE PLAY
          </h1>

          {/* Images + Labels with arrows */}
          <div className="flex items-center justify-center space-x-6 flex-wrap">
            {/* 1st image + label */}
            <div className="flex flex-col items-center">
              <Image
                src="/smNewImg1.svg"
                width={200}
                height={200}
                alt="Get NFT"
              />
              <p
                className="text-[25px] font-semibold text-white text-center"
                style={{ WebkitTextStroke: "1px black" }}
              >
                Get NFT
              </p>
            </div>

            {/* Arrow */}
            <Image
              src="/greenArrowNew.svg"
              width={50}
              height={50}
              alt="Arrow"
            />

            {/* 2nd image + label */}
            <div className="flex flex-col items-center">
              <Image
                src="/smNewImg2.svg"
                width={200}
                height={200}
                alt="Put into simple game"
              />
              <p
                className="text-[25px] font-semibold text-white text-center"
                style={{ WebkitTextStroke: "1px black" }}
              >
                Put into
                <br /> simple game
              </p>
            </div>

            {/* Arrow */}
            <Image
              src="/greenArrowNew.svg"
              width={50}
              height={50}
              alt="Arrow"
            />

            {/* 3rd image + label */}
            <div className="flex flex-col items-center">
              <Image
                src="/smNewImg3.svg"
                width={200}
                height={200}
                alt="Get high score"
              />
              <p
                className="text-[25px] font-semibold text-white text-center"
                style={{ WebkitTextStroke: "1px black" }}
              >
                Get high
                <br /> score
              </p>
            </div>

            {/* Arrow */}
            <Image
              src="/greenArrowNew.svg"
              width={50}
              height={50}
              alt="Arrow"
            />

            {/* 4th image + label */}
            <div className="flex flex-col items-center">
              <Image
                src="/smNewImg4.svg"
                width={200}
                height={200}
                alt="Get $SIMG airdrop"
              />
              <p
                className="text-[25px] font-semibold text-white text-center"
                style={{ WebkitTextStroke: "1px black" }}
              >
                Get $SIMG
                <br /> airdrop
              </p>
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
