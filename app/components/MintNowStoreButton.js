import localFont from "next/font/local";

const Bango = localFont({
  src: "../fonts/SVN-Bango.otf",
});

export default function MintNowStoreButton({ onClick }) {
  return (
    <>
      <div className={`${Bango.className} z-10`}>
        <div className="border-t-[6.2059px] border-l-[6.2059px] border-r-[6.2059px] border-b-[13px] border-[#535353] rounded-[46px] bg-[#FFFFFF] text-center">
          <button onClick={onClick} className="px-8 pt-1.5 pb-2 bg-[#FFFFFF] text-white font-bold rounded-[46px] cursor-pointer">
            <h1
              className="text-white text-3xl font-semibold"
              style={{
                WebkitTextStroke: "2px #535353",
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
