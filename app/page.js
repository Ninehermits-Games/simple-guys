import localFont from "next/font/local";
// import { Noto_Sans_Symbols } from "next/font/google";
import MintNowMainButton from "./components/MintNowMainButton";
import AboutUsMainButton from "./components/AboutUsMainButton";

const Bango = localFont({
  src: "./fonts/SVN-Bango.otf",
});

const NotoSansRegular = localFont({
  src: "./fonts/NotoSans-Regular.ttf",
});

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 w-full -z-50 overflow-hidden">
        <video autoPlay loop muted playsInline className="w-full">
          <source src="/Anim2.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* <div className="fixed inset-0 w-full -z-10 overflow-hidden">
        <video autoPlay loop muted playsInline className="w-full">
          <source src="/boy3.mov" type="video/mov" />
          Your browser does not support the video tag.
        </video>
      </div> */}
      <div className="flex w-full flex-1 flex-col items-center justify-center">
        <div className="flex items-center justify-center">
          <img
            src="/sgLargeLogo.svg"
            alt="Logo" 
            width={700}
            // height={200}
            // priority
          />
        </div>
      </div>
      <span className="fixed top-[360px] left-[1050px] min-h-screen w-full bg-cover bg-no-repeat -z-40">
        <img src="/dog.svg"/>
      </span>

      {/* <div
        className="absolute top-0 min-h-screen w-full bg-cover  bg-no-repeat -z-50"
        style={{
          backgroundImage: "url('/homebg2.svg')",
        }}
      >
        <div className={`${Bango.className}`}>
          <div className="flex flex-row items justify-center space-x-[285px]">
            <div className="w-auto flex left-135">
              <MintNowMainButton />
            </div>
            <div className="w-auto flex left-135">
              <AboutUsMainButton />
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
