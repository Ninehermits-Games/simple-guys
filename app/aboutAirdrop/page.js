import localFont from "next/font/local";
import BackAndNextButtons2 from "../components/BackAndNextButtons2";
import TokenomicButton from "../components/TokenomicButton";

const Bango = localFont({
  src: "../fonts/SVN-Bango.otf",
});

export default function Page() {
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat overflow-hidden flex items-center"
      style={{ backgroundImage: "url('/background1.svg')" }}
    >
      {/* RIGHT-FIXED IMAGE */}
      <img
        src="/aboutAirdropImage2.svg"
        alt="Airdrop"
        className="absolute top-0 right-0 w-auto h-[100vh] max-w-[50vw] object-contain z-0"
      />

      {/* TEXT LEFT + BUTTON */}
      <div
        className={`relative z-10 ml-[5%] pl-10 pr-0 md:pl-24 max-w-[900px] ${Bango.className}`}
      >
        <h1
          className="text-[40px] md:text-[50px] font-semibold text-[#F5CF6F]"
          style={{ WebkitTextStroke: "1.5px black" }}
        >
          ABOUT AIRDROP
        </h1>
        <p
          className="text-[18px] md:text-[20px] font-semibold text-white mt-2 leading-relaxed"
          style={{ WebkitTextStroke: "0.5px black" }}
        >
          To win 30% of the total supply of $SIMG - Simply
          <br />
          use Simple Guys NFT, collect more item NFTs,
          <br />
          invite more teammates and join the simple race.
        </p>
        <div className="w-full flex mt-8 ml-flex justify-end">
          <TokenomicButton />
        </div>
      </div>

      {/* BACK/NEXT BUTTONS */}
      <div>
        <BackAndNextButtons2 />
      </div>
    </div>
  );
}
