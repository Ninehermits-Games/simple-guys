export default function HamburgerMenu( {onClick} ) {
  return (
    <div className="absolute top-9">
      <button onClick={onClick} className="absolute w-[60px] h-[53px] flex items-center justify-center group pb-2 cursor-pointer">
        {/* Outer button stroke/border */}
        <div className="absolute inset-0 border-[12px] border-[#298282] rounded-[10px]"></div>

        {/* Document body - white background with teal lines */}
        <div className="relative w-12 h-9 bg-white rounded-[7px] flex flex-col justify-center items-center group">
          {/* Three horizontal lines */}
          <div className="bg-[#298282] w-7 h-[5px] rounded-full mb-1"></div>
          <div className="bg-[#298282] w-7 h-[5px] rounded-full mb-1"></div>
          <div className="bg-[#298282] w-7 h-[5px] rounded-full"></div>
        </div>
      </button>
    </div>
  );
}
