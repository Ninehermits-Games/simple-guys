import localFont from "next/font/local";
// import { Noto_Sans_Symbols } from "next/font/google";
import BackAndNextButtons from "../components/BackAndNextButtons";
import WhitePaperButton from "../components/WhitePaperButton";

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
              <img src="/aboutImage.svg" width={500} />
            </div>
            <div className="w-[50%]">
              <h1
                className="text-[50px] font-semibold text-[#F5CF6F]"
                style={{ WebkitTextStroke: "1.5px black" }}
              >
                ABOUT US
              </h1>
              <p
                className="text-[20px] font-semibold text-white mt-2"
                style={{ WebkitTextStroke: "0.5px black" }}
              >
                We are simple guys in Simple world, we do simple
                <br />
                things, create simple projects. You guys are
                <br />
                simple guys too, we are all simple. Understand
                <br />
                simply, hold NFT simply, receive big airdrop simply.
                <br />
                Finally we will have a simple life.
              </p>
              <div className="w-full flex mt-8 -ml-2">
                <WhitePaperButton />
              </div>
            </div>
          </div>
        </div>

        <div>
          <BackAndNextButtons />
        </div>
      </div>
    </>
  );
}
