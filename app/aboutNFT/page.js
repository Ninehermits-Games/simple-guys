import localFont from "next/font/local";
// import { Noto_Sans_Symbols } from "next/font/google";
import BackAndNextButtons2 from "../components/BackAndNextButtons2";
import MintNowButton from "../components/MintNowButton";

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
        className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/background1.svg')" }}
      >
        <div className="flex items-center justify-center min-h-screen w-full">
          <div
            className={`flex flex-row items-center justify-center space-x-10 w-[80%] mx-auto ${Bango.className}`}
          >
            <div>
              <img src="/aboutNftImage.svg" width={500} />
            </div>
            <div className="w-[50%]">
              <h1
                className="text-[50px] font-semibold text-[#F5CF6F]"
                style={{ WebkitTextStroke: "1.5px black" }}
              >
                ABOUT NFT
              </h1>
              <p
                className="text-[20px] font-semibold text-white mt-2"
                style={{ WebkitTextStroke: "0.5px black" }}
              >
                Total supply of 10,000 unique Simple Guys NFTs.
                <br />
                Including 10 1/1 NFTs, 2,000 UR NFTs, 7,990 common
                <br />
                NFTs. The rarer the NFT, the more $SIMG points you
                <br />
                get.
                <br />
                5,000 NFT items with rarity in order White - Green
                <br />
                - Purple - Orange Red. The items will buff and
                <br />
                increase % $SIMG Points.
              </p>
              <div className="w-full flex mt-8 -ml-2">
                <MintNowButton />
              </div>
            </div>
          </div>
        </div>

        <div>
          <BackAndNextButtons2 />
        </div>
      </div>
    </>
  );
}
