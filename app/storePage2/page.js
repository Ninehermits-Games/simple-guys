"use client";

import localFont from "next/font/local";
import { useState } from "react";
import TaskButton from "../components/TaskButton";
import ProfileButton from "../components/ProfileButton";
import BoostButton from "../components/BoostButton";
import ShareButton from "../components/ShareButton";
import Image from "next/image";

const Bango = localFont({
  src: "../fonts/SVN-Bango.otf",
});

export default function Page() {
  return (
    <>
      <div
        className="fixed top-0 left-0 min-h-screen w-full bg-cover bg-center bg-no-repeat -z-50"
        style={{
          backgroundImage: "url('/background3.svg')",
        }}
      >
        <div className={`${Bango.className} min-h-screen flex items-center justify-center p-4`}>
          {/* Main Content Container */}
          <div className="flex flex-col lg:flex-row gap-6 w-full max-w-[1300px] items-center justify-center">
            {/* Left Panel - Simple Guys */}
            <div className="flex flex-col max-w-md items-center relative">
              {/* Logo */}
              <div className="mb-1">
                <span>
                  <Image
                    src="/sp2Img1.2.svg"
                    width={280}
                    height={280}
                    alt="Simple Guys Logo"
                  />
                </span>
              </div>

              {/* Stats Panel */}
              <div className="bg-[#7D7D7D] rounded-3xl py-4 px-20 mb-2 border-8 border-[#AFAFAF]">
                <div className="flex items-center justify-center">
                  <div>
                    <span>
                      <Image
                        src="/sp2Img2.svg"
                        width={50}
                        height={50}
                        alt="Stats"
                      />
                    </span>
                  </div>
                  <div className="flex ml-9 mt-5">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="w-3 h-3 bg-white rounded-full mx-[1px] border-3 border-black"
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-row items-center gap-3 mb-4">
                <div className="rounded-lg p-3 text-center">
                  <div
                    className="text-white text-md mb-5"
                    style={{
                      WebkitTextStroke: "1px black",
                    }}
                  >
                    FARMING SPEED
                  </div>
                  <div className="flex justify-center">
                    <div className="w-3 h-3 bg-white rounded-full mx-[1px] border-3 border-black"></div>
                    <div className="w-3 h-3 bg-white rounded-full mx-[1px] border-3 border-black"></div>
                    <div className="w-3 h-3 bg-white rounded-full mx-[1px] border-3 border-black"></div>
                  </div>
                </div>
                <div className="bg-[#7D7D7D] rounded-3xl py-4 px-3 text-center border-8 border-[#AFAFAF]">
                  <div
                    className="text-white text-md mb-5"
                    style={{
                      WebkitTextStroke: "1px black",
                    }}
                  >
                    PROFIT PER HOUR
                  </div>
                  <div className="flex justify-center">
                    <div className="w-3 h-3 bg-white rounded-full mx-[1px] border-3 border-black"></div>
                    <div className="w-3 h-3 bg-white rounded-full mx-[1px] border-3 border-black"></div>
                    <div className="w-3 h-3 bg-white rounded-full mx-[1px] border-3 border-black"></div>
                  </div>
                </div>
              </div>

              {/* Task Panel */}
              <div className="mt-4">
                <div className="flex items-center space-x-2">
                  <span className="ml-3">
                    <Image src="/sp2Img3.svg" width={75} height={75} alt="Tasks" />
                  </span>
                  <div className="">
                    <TaskButton />
                  </div>
                </div>
              </div>

              {/* Left Arrow - positioned relative to left panel */}
              <div className="absolute -right-13 top-1/2 transform -translate-y-1/2 hidden lg:block">
                <span className="cursor-pointer">
                  <Image
                    src="/sp2ArrowImg.svg"
                    width={35}
                    height={35}
                    alt="Arrow Left"
                  />
                </span>
              </div>
            </div>

            {/* Center Panel - Construction Site */}
            <div className="flex-1 max-w-lg mx-auto flex items-center justify-center">
              <span>
                <Image
                  src="/sp2Img4.svg"
                  width={470}
                  height={470}
                  alt="Construction Site"
                />
              </span>
            </div>

            {/* Right Panel - Mini Store & Controls */}
            <div className="flex flex-col max-w-md relative">
              {/* Mini Store Header */}
              <div className="flex flex-row items-center justify-between mb-2">
                <div className="">
                  <h1
                    className="text-[40px] tracking-tighter font-bold text-[#FFF073]"
                    style={{
                      WebkitTextStroke: "1px black",
                    }}
                  >
                    MINI STORE
                  </h1>
                </div>

                <div className="">
                  <ProfileButton />
                </div>
              </div>

              {/* Mini Store Grid */}
              <div className="bg-[#29455E] rounded-3xl p-4 mb-3 border-8 border-black">
                <div className="flex flex-row gap-3">
                  <span className="cursor-pointer">
                    <Image
                      src="/sp2AddImg.svg"
                      width={335}
                      height={335}
                      alt="Add Item"
                    />
                  </span>
                  <div className="flex flex-col items-center justify-between">
                    <span className="cursor-pointer">
                      <Image
                        src="/sp2AddImg2.svg"
                        width={160}
                        height={160}
                        alt="Add Item 1"
                      />
                    </span>
                    <span className="cursor-pointer">
                      <Image
                        src="/sp2AddImg2.svg"
                        width={160}
                        height={160}
                        alt="Add Item 2"
                      />
                    </span>
                  </div>
                </div>
              </div>

              {/* Control Buttons */}
              <div className="bg-[#29455E] rounded-3xl p-4 border-8 border-black">
                <div className="flex flex-row gap-4 justify-between">
                  <div>
                    <BoostButton />
                  </div>
                  <div>
                    <ShareButton />
                  </div>
                </div>
              </div>

              {/* Right Arrow - positioned relative to right panel */}
              <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 hidden lg:block">
                <span className="cursor-pointer">
                  <Image
                    src="/sp2ArrowImg2.svg"
                    width={35}
                    height={35}
                    alt="Arrow Right"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}