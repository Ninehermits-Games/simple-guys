import localFont from "next/font/local";

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
            {/* <div> */}
              <span>
                <img src="/sp2Img6.svg" width={35} />
              </span>
            {/* </div> */}
          </button>
        </div>
      </div>
    </>
  );
}
