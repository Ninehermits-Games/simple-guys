import localFont from "next/font/local";
// import { Noto_Sans_Symbols } from "next/font/google";
import BackAndNextButtons2 from "../components/BackAndNextButtons2";
import TokenomicButton from "../components/TokenomicButton";

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
        <div
          className={`${Bango.className}`}
        >
          <div className="ml-[200px] mt-[250px]">
            <h1
              className="text-[50px] font-semibold text-[#F5CF6F]"
              style={{
                WebkitTextStroke: "1.5px black",
                // textShadow: '0 0 0 2px black'
              }}
            >
              ABOUT AIRDROP
            </h1>
            <p
              className="text-[20px] font-semibold text-white mt-2"
              style={{
                WebkitTextStroke: "0.5px black",
                // textShadow: '0 0 0 2px black'
              }}
            >
              To win 30% of the total supply of $SIMG - Simply<br /> use Simple Guys
              NFT, collect more item NFTs,<br /> invite more teammates and join the
              simple race.
            </p>
            <div className=" absolute w-auto flex mt-8 left-135">
              <TokenomicButton />
            </div>
          </div>
          <div className="absolute right-0 top-0">
            <span>
              <img src="/aboutAirdropImage2.svg" width={650} />
            </span>
          </div>
        </div>

        <div>
          <BackAndNextButtons2 />
        </div>
      </div>
    </>
  );
}
