"use client";

import { useState } from "react";
import localFont from "next/font/local";
import MintNowStoreButton from "../components/MintNowStoreButton";
import StorePage1BottomPannel from "../components/StorePage1BottomPannel";

const Bango = localFont({
  src: "../fonts/SVN-Bango.otf",
});

const NotoSansRegular = localFont({
  src: "../fonts/NotoSans-Regular.ttf",
});

const TiltNeon = localFont({
  src: "../fonts/TiltNeon-Regular-VariableFont_XROT,YROT.ttf",
});

const SyneRegular = localFont({
  src: "../fonts/Syne-Regular.ttf",
});

export default function page() {
  const [mysteryBoxQuantity, setMysteryBoxQuantity] = useState(2);
  const [itemCapsuleQuantity, setItemCapsuleQuantity] = useState(2);
  const pricePerItem = 10; // Example price in USDT
  const pricePerItem2 = 20; // Example price in USDT

  const handleMysteryBoxDecrease = () => {
    if (mysteryBoxQuantity > 1) {
      setMysteryBoxQuantity(mysteryBoxQuantity - 1);
    }
  };

  const handleMysteryBoxIncrease = () => {
    setMysteryBoxQuantity(mysteryBoxQuantity + 1);
  };

  const handleItemCapsuleDecrease = () => {
    if (itemCapsuleQuantity > 1) {
      setItemCapsuleQuantity(itemCapsuleQuantity - 1);
    }
  };

  const handleItemCapsuleIncrease = () => {
    setItemCapsuleQuantity(itemCapsuleQuantity + 1);
  };

  const mysteryBoxTotalPrice = mysteryBoxQuantity * pricePerItem;
  const itemCapsuleTotalPrice = itemCapsuleQuantity * pricePerItem2;

  return (
    <>
      <div
        className="absolute top-0 min-h-screen w-full bg-cover bg-center bg-no-repeat -z-50"
        style={{
          backgroundImage: "url('/background2.svg')",
        }}
      >
        <div className={`${Bango.className} min-h-screen pt-[110px]`}>
          {/* Product Cards Container */}
          <div className="flex justify-center gap-14">
            {/* Mystery Box Card */}
            <div>
              <div>
                <h1
                  className="text-[40px] tracking-tight font-bold text-[#F5CF6F] mb-0"
                  style={{
                    WebkitTextStroke: "1.5px black",
                  }}
                >
                  MYSTERY BOX
                </h1>
              </div>
              <div className="flex justify-center">
                <div className="bg-black rounded-[50px] p-8 max-w-5xl w-full">
                  <div className="flex gap-8 items-center">
                    {/* Left Side - Mystery Box Image */}
                    <span>
                      <img src="/spImg1.svg" width={330} />
                    </span>

                    {/* Right Side - Details */}
                    <div className="flex-1 text-white">
                      <div
                        className={`${SyneRegular.className} text-sm leading-snug mb-6`}
                      >
                        Each box contains a Simple Guys NFT. You
                        <br /> can use the NFT to participate in farming
                        <br /> in Simple World. The higher the score,
                        <br /> the bigger the Airdrop.
                      </div>

                      {/* Remaining Progress */}
                      <div className="">
                        <div className="flex justify-between items-baseline mb-2">
                          <span className={`${TiltNeon.className} text-[15px]`}>
                            Remaining
                          </span>
                          <span className={`${TiltNeon.className} text-[12px]`}>
                            10000/10000
                          </span>
                        </div>
                        <div className="w-full bg-gray-600 rounded-full h-3">
                          <div className="bg-[#D9D9D9] h-3 rounded-full w-full"></div>
                        </div>
                      </div>

                      <hr className="opacity-[42%] mt-4 mb-1.5" />

                      {/* Price and Quantity */}
                      <div className="mb-6">
                        <div className="flex justify-between items-baseline">
                          <span className={`${TiltNeon.className} text-[15px]`}>
                            Price
                          </span>
                          <span className={`${TiltNeon.className} text-[12px]`}>
                            {pricePerItem} USDT
                          </span>
                        </div>
                        <hr className="opacity-[42%] mt-2.5 mb-1.5" />
                        <div className="flex justify-between items-center">
                          <span className={`${TiltNeon.className} text-[15px]`}>
                            Quantity
                          </span>
                          <div className="flex items-baseline gap-10">
                            <div
                              className={`${TiltNeon.className} flex items-center gap-2 relative`}
                            >
                              <button
                                onClick={handleMysteryBoxDecrease}
                                className="w-2 text-white text-md rounded disabled:opacity-50 cursor-pointer"
                                disabled={mysteryBoxQuantity <= 1}
                              >
                                -
                              </button>
                              <div className="flex items-center relative">
                                <div className="absolute left-0 -top-[8.8px] -bottom-[13px] w-px bg-[#FFFFFF] opacity-[42%] mr-2"></div>
                                <span className="text-[12px] min-w-5 text-center px-4">
                                  {mysteryBoxQuantity}
                                </span>
                                <div className="absolute right-0 -top-[8.8px] -bottom-[13px] w-px bg-[#FFFFFF] opacity-[42%] ml-2"></div>
                              </div>
                              <button
                                onClick={handleMysteryBoxIncrease}
                                className="w-2 text-white text-md rounded cursor-pointer"
                              >
                                +
                              </button>
                            </div>
                            <span
                              className={`${TiltNeon.className} text-[12px] ml-4`}
                            >
                              {mysteryBoxTotalPrice} USDT
                            </span>
                          </div>
                        </div>
                        <hr className="opacity-[42%] mt-2.5" />
                      </div>

                      {/* Mint Button */}
                      <div className="">
                        <MintNowStoreButton />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Item Capsule Card */}
            <div>
              <div>
                <h1
                  className="text-[40px] tracking-tight font-bold text-[#F5CF6F] mb-0"
                  style={{
                    WebkitTextStroke: "1.5px black",
                  }}
                >
                  ITEM CAPSULE
                </h1>
              </div>
              <div className="flex justify-center">
                <div className="bg-black rounded-[50px] p-8 max-w-5xl w-full">
                  <div className="flex gap-8 items-center">
                    {/* Left Side - Mystery Box Image */}
                    <span>
                      <img src="/spImg2.svg" width={330} />
                    </span>

                    {/* Right Side - Details */}
                    <div className="flex-1 text-white">
                      <div
                        className={`${SyneRegular.className} text-sm leading-snug mb-6`}
                      >
                        Each box contains 4 NFT items. You can use
                        <br /> them to increase the power and % of points
                        <br /> for Simple Guys NFT. The rarer the item
                        <br /> quality - the greater the power increase.
                      </div>

                      {/* Remaining Progress */}
                      <div className="">
                        <div className="flex justify-between items-baseline mb-2">
                          <span className={`${TiltNeon.className} text-[15px]`}>
                            Remaining
                          </span>
                          <span className={`${TiltNeon.className} text-[12px]`}>
                            5000/5000
                          </span>
                        </div>
                        <div className="w-full bg-gray-600 rounded-full h-3">
                          <div className="bg-[#D9D9D9] h-3 rounded-full w-full"></div>
                        </div>
                      </div>

                      <hr className="opacity-[42%] mt-4 mb-1.5" />

                      {/* Price and Quantity */}
                      <div className="mb-6">
                        <div className="flex justify-between items-baseline">
                          <span className={`${TiltNeon.className} text-[15px]`}>
                            Price
                          </span>
                          <span className={`${TiltNeon.className} text-[12px]`}>
                            {pricePerItem2} USDT
                          </span>
                        </div>
                        <hr className="opacity-[42%] mt-2.5 mb-1.5" />
                        <div className="flex justify-between items-center">
                          <span className={`${TiltNeon.className} text-[15px]`}>
                            Quantity
                          </span>
                          <div className="flex items-baseline gap-10">
                            <div
                              className={`${TiltNeon.className} flex items-center gap-2 relative`}
                            >
                              <button
                                onClick={handleItemCapsuleDecrease}
                                className="w-2 text-white text-md rounded disabled:opacity-50 cursor-pointer"
                                disabled={itemCapsuleQuantity <= 1}
                              >
                                -
                              </button>
                              <div className="flex items-center relative">
                                <div className="absolute left-0 -top-[8.8px] -bottom-[13px] w-px bg-[#FFFFFF] opacity-[42%] mr-2"></div>
                                <span className="text-[12px] min-w-5 text-center px-4">
                                  {itemCapsuleQuantity}
                                </span>
                                <div className="absolute right-0 -top-[8.8px] -bottom-[13px] w-px bg-[#FFFFFF] opacity-[42%] ml-2"></div>
                              </div>
                              <button
                                onClick={handleItemCapsuleIncrease}
                                className="w-2 text-white text-md rounded cursor-pointer"
                              >
                                +
                              </button>
                            </div>
                            <span
                              className={`${TiltNeon.className} text-[12px] ml-4`}
                            >
                              {itemCapsuleTotalPrice} USDT
                            </span>
                          </div>
                        </div>
                        <hr className="opacity-[42%] mt-2.5" />
                      </div>

                      {/* Mint Button */}
                      <div className="">
                        <MintNowStoreButton />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <StorePage1BottomPannel />
          </div>
        </div>
      </div>
    </>
  );
}
