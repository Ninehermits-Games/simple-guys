"use client";

import localFont from "next/font/local";

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

export default function StorePage1BottomPannel() {
  return (
    <>
      <div className="bg-[rgba(168,168,168,0.79)] rounded-2xl px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-baseline gap-11">
            <div className={`${Bango.className} flex items-center gap-2`}>
              <div className="flex items-center">
                {/* <div className="w-px h-5 bg-[#FFFFFF] mr-2"></div> */}
                <span className="text-[40px] text-white min-w-5 text-center">
                  XX
                  <span className="text-[25px] align-baseline">D</span>
                </span>

                {/* <div className="w-px h-5 bg-[#FFFFFF] ml-2"></div> */}
              </div>
            </div>
          </div>
          <div className="flex items-baseline gap-11">
            <div className={`${Bango.className} flex items-center gap-2`}>
              <div className="flex items-center">
                <div className="w-[1.5px] h-11 bg-[#FFFFFF] mx-5"></div>
                <span className="text-[40px] text-white min-w-5 text-center">
                  XX
                  <span className="text-[25px] align-baseline">H</span>
                </span>
                {/* <div className="w-px h-5 bg-[#FFFFFF] ml-2"></div> */}
              </div>
            </div>
          </div>
          <div className="flex items-baseline gap-11">
            <div className={`${Bango.className} flex items-center gap-2`}>
              <div className="flex items-center">
                <div className="w-[1.5px] h-11 bg-[#FFFFFF] mx-5"></div>
                <span className="text-[40px] text-white min-w-5 text-center">
                  XX
                  <span className="text-[25px] align-baseline">M</span>
                </span>
                {/* <div className="w-px h-5 bg-[#FFFFFF] ml-2"></div> */}
              </div>
            </div>
          </div>
          <div className="flex items-baseline gap-11">
            <div className={`${Bango.className} flex items-center gap-2`}>
              <div className="flex items-center">
                <div className="w-[1.5px] h-11 bg-[#FFFFFF] mx-5"></div>
                <span className="text-[40px] text-white min-w-5 text-center">
                  XX
                  <span className="text-[25px] align-baseline">S</span>
                </span>
                {/* <div className="w-px h-5 bg-[#FFFFFF] ml-2"></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
