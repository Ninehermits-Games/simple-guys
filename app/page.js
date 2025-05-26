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
          <source src="/homebg.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="absolute bottom-[18%] left-0 min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-end justify-center pb-0">
  <div className={`${Bango.className}`}>
    <div className="flex flex-row items-center justify-center space-x-[205px]">
      <div className="w-auto flex">
        <MintNowMainButton />
      </div>
      <div className="w-auto flex">
        <AboutUsMainButton />
      </div>
    </div>
  </div>
</div>

    </>
  );
}
