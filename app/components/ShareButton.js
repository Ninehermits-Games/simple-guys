import localFont from "next/font/local";
import Image from "next/image";

const Bango = localFont({
  src: "../fonts/SVN-Bango.otf",
});

export default function ShareButton({ onClick }) {
  return (
    <>
      <div className={`${Bango.className}`}>
        <div className="border-t-[6.2059px] border-l-[8.2059px] border-r-[8.2059px] border-b-[15px] border-[#AFAFAF] rounded-[45px] bg-[#7D7D7D]">
          <button
            onClick={onClick}
            className="px-10 pt-2 pb-2 bg-[#7D7D7D] text-white font-bold rounded-[45px] cursor-pointer"
          >
            <span>
              <Image src="/sp2Img6.svg" width={35} height={35} alt="Share" />
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
