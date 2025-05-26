import localFont from "next/font/local";

const Bango = localFont({
  src: "../fonts/SVN-Bango.otf",
});

export default function ProfileButton({ onClick }) {
  return (
    <>
      <div className={`${Bango.className}`}>
        <div className="border-t-[6.2059px] border-l-[6.2059px] border-r-[6.2059px] border-b-[11px] border-[#AFAFAF] rounded-[31.719px] bg-[#7D7D7D]">
          <button onClick={onClick} className="px-6 pt-0.5 pb-1 bg-[#7D7D7D] text-white font-bold rounded-[31.719px] cursor-pointer">
            <h1
              className="text-[#7D7D7D] text-xl font-semibold"
              style={{
                WebkitTextStroke: "0.5px #FFFFFF",
              }}
            >
              PROFILE
            </h1>
          </button>
        </div>
      </div>
    </>
  );
}
