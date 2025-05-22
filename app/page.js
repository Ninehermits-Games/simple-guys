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
      <div className="fixed top-[195px] left-[645px] min-h-screen w-[345px]">
        <video autoPlay loop muted playsInline>
          <source src="/boy5.webm" type="video/webm"/>
          Your browser does not support the video tag.
        </video>
      </div>
      {/* <div className="-z-40">
        <span className="fixed top-[210px] left-[660px] min-h-screen w-full bg-cover bg-no-repeat">
          <img src="/boyImage.svg" width={300} />
        </span>
      </div> */}
      <div className="flex w-full flex-1 flex-col items-center justify-center">
        <div className="flex items-center justify-center">
          <img
            src="/sgLargeLogo.svg"
            alt="Logo"
            width={750}
            // height={200}
            // priority
          />
        </div>
      </div>
      <div className="-z-40">
        <span className="fixed top-[415px] left-[1080px] min-h-screen w-full bg-cover bg-no-repeat">
          <img src="/dog.svg" width={230} />
        </span>
      </div>

      <div className="-mt-3">
        <div className={`${Bango.className}`}>
          <div className="flex flex-row items justify-center space-x-[205px]">
            <div className="w-auto flex left-135">
              <MintNowMainButton />
            </div>
            <div className="w-auto flex left-135">
              <AboutUsMainButton />
            </div>
          </div>
        </div>
      </div>

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
