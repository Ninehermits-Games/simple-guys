import localFont from "next/font/local";

const Bango = localFont({
  src: "../fonts/SVN-Bango.otf",
});

export default function BoostButton({ onClick }) {
  return (
    <>
      <div className={`${Bango.className}`}>
        <div className="border-t-[6.2059px] border-l-[8.2059px] border-r-[8.2059px] border-b-[15px] border-[#AFAFAF] rounded-[45px] bg-[#7D7D7D]">
          <button
            onClick={onClick}
            className="px-14 pt-0.5 pb-1 bg-[#7D7D7D] text-white font-bold rounded-[45px] cursor-pointer"
          >
            <div className="flex flex-row items-center space-x-1">
              <span className="mt-2 -ml-3">
                <img src="/sp2Img5.svg" width={40} />
              </span>
              <h1
                className="text-[#7D7D7D] text-[30px] font-semibold"
                style={{
                  WebkitTextStroke: "1px #FFFFFF",
                }}
              >
                BOOST
              </h1>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
