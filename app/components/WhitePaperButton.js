import localFont from "next/font/local";

const Bango = localFont({
  src: "../fonts/SVN-Bango.otf",
});

export default function WhitePaperButton({ onClick }) {
  return (
    <>
      <div className={`${Bango.className}`}>
        <div className="border-t-[6.2059px] border-l-[6.2059px] border-r-[6.2059px] border-b-[11px] border-[#3E771B] rounded-[31.719px]">
          <button onClick={onClick} className="px-5 pt-1.5 pb-2 bg-[#91F483] text-white font-bold rounded-[31.719px] cursor-pointer">
            <h1
              className="text-white text-2xl font-semibold"
              style={{
                WebkitTextStroke: "1px #3E771B",
              }}
            >
              WHITEPAPER
            </h1>
          </button>
        </div>
      </div>
    </>
  );
}
