import localFont from "next/font/local";
// import { Noto_Sans_Symbols } from "next/font/google";

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
          backgroundImage: "url('/background2.svg')",
        }}
      >
        <div className={`${Bango.className}`}>
          <div className="mt-[150px] w-[80%] mx-auto text-center">
            <h1
              className="text-[50px] font-semibold text-[#F5CF6F]"
              style={{
                WebkitTextStroke: "1.5px black",
                // textShadow: '0 0 0 2px black'
              }}
            >
              MYSTERY BOX
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
