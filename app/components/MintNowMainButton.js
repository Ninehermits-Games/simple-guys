import localFont from "next/font/local";

const Bango = localFont({
  src: "../fonts/SVN-Bango.otf",
});

export default function MintNowMainButton({ onClick }) {
  return (
    <>
      <div className={`${Bango.className} z-10`}>
        <div className="border-t-[6.2059px] border-l-[6.2059px] border-r-[6.2059px] border-b-[13px] border-[#346C2C] rounded-[31.719px] bg-[#B4FFAA]">
          <button onClick={onClick} className="px-8 pt-1.5 pb-2 bg-[#B4FFAA] text-white font-bold rounded-[31.719px] cursor-pointer">
            <h1
              className="text-white text-3xl font-semibold"
              style={{
                WebkitTextStroke: "1.5px #346C2C",
              }}
            >
              MINT NOW
            </h1>
          </button>
        </div>
      </div>
    </>
  );
}
