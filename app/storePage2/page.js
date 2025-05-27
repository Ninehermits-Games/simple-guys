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
  // const [farmingSpeed, setFarmingSpeed] = useState(3);
  // const [profitPerHour, setProfitPerHour] = useState(3);
  // const [miniStoreItems, setMiniStoreItems] = useState([
  //   { id: 1, purchased: false },
  //   { id: 2, purchased: false },
  //   { id: 3, purchased: false },
  //   { id: 4, purchased: false },
  // ]);

  // const handleAddItem = () => {
  //   const nextAvailable = miniStoreItems.find((item) => !item.purchased);
  //   if (nextAvailable) {
  //     setMiniStoreItems((prev) =>
  //       prev.map((item) =>
  //         item.id === nextAvailable.id ? { ...item, purchased: true } : item
  //       )
  //     );
  //   }
  // };

  return (
    <>
      <div
        className="absolute top-0 min-h-screen w-full bg-cover bg-center bg-no-repeat -z-50"
        style={{
          backgroundImage: "url('/background3.svg')",
        }}
      >
        <div className={`${Bango.className} min-h-screen p-4 pt-[130px]`}>
          {/* Header */}
          {/* <div className="flex justify-between items-center mb-6 mt-4">
            <button className="bg-gray-600 hover:bg-gray-500 px-4 py-2 rounded-full text-white font-bold border-2 border-gray-400">
              PROFILE
            </button>
          </div> */}

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row gap-6 w-[89%] mx-auto">
            {/* Left Panel - Simple Guys */}
            <div className="flex flex-col max-w-md items-center">
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
                    {/* {[...Array(farmingSpeed)].map((_, i) => ( */}
                    <div
                      // key={i}
                      className="w-3 h-3 bg-white rounded-full mx-[1px] border-3 border-black"
                    ></div>
                    <div
                      // key={i}
                      className="w-3 h-3 bg-white rounded-full mx-[1px] border-3 border-black"
                    ></div>
                    <div
                      // key={i}
                      className="w-3 h-3 bg-white rounded-full mx-[1px] border-3 border-black"
                    ></div>
                    {/* ))} */}
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
                    {/* {[...Array(farmingSpeed)].map((_, i) => ( */}
                    <div
                      // key={i}
                      className="w-3 h-3 bg-white rounded-full mx-[1px] border-3 border-black"
                    ></div>
                    <div
                      // key={i}
                      className="w-3 h-3 bg-white rounded-full mx-[1px] border-3 border-black"
                    ></div>
                    <div
                      // key={i}
                      className="w-3 h-3 bg-white rounded-full mx-[1px] border-3 border-black"
                    ></div>
                    {/* ))} */}
                  </div>
                </div>
                {/* <div className="bg-[#7D7D7D] rounded-3xl py-4 px-16 mb-4 border-8 border-[#AFAFAF]">
                  <div className="">
                    <div className="bg-gray-700 rounded-lg p-3 text-center">
                      <div className="text-white text-sm mb-1">
                        PROFIT PER HOUR
                      </div>
                      <div className="flex justify-center">
                        {[...Array(profitPerHour)].map((_, i) => (
                          <div
                            key={i}
                            className="w-2 h-2 bg-white rounded-full mx-1"
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div> */}
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
            </div>

            <div className="absolute top-[45%] left-[30%]">
              <span className="cursor-pointer">
                <Image
                  src="/sp2ArrowImg.svg"
                  width={35}
                  height={35}
                  alt="Arrow Left"
                />
              </span>
            </div>

            {/* Center Panel - Construction Site */}
            <div className="flex-1 max-w-lg mx-auto">
              {/* <div className="bg-[#9A8D87] rounded-2xl p-8 border-[10px] border-black aspect-square flex items-center justify-center"> */}
              <span>
                <Image
                  src="/sp2Img4.svg"
                  width={470}
                  height={470}
                  alt="Construction Site"
                />
              </span>
              {/* </div> */}
            </div>

            {/* Right Panel - Mini Store & Controls */}
            <div className="flex-1 max-w-md -mt-3">
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
              <div className="bg-[#29455E] rounded-3xl p-4 mb-6 border-8 border-black">
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

                {/* Add Button */}
                {/* <button
                  onClick={handleAddItem}
                  className="w-full bg-gray-500 hover:bg-gray-400 rounded-lg py-3 border-2 border-gray-400 flex items-center justify-center"
                >
                  <div className="text-3xl text-gray-300">+</div>
                </button> */}
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
            </div>

            <div className="absolute top-[45%] right-[4.7%]">
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
    </>
  );
}
