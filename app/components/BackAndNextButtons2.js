"use client";

import localFont from "next/font/local";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Bango = localFont({
  src: "../fonts/SVN-Bango.otf",
});

const NotoSansRegular = localFont({
  src: "../fonts/NotoSans-Regular.ttf",
});

export default function BackAndNextButtons2() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState("");

  // Define the navigation flow
  const pageFlow = {
    next: {
      "aboutNFT": "aboutAirdrop",
      "aboutAirdrop": "simplePlay", 
      "simplePlay": "roadmaps",
      "roadmaps": null // No next page after roadmaps
    },
    back: {
      "aboutNFT": "aboutUs",
      "aboutAirdrop": "aboutNFT",
      "simplePlay": "aboutAirdrop",
      "roadmaps": "simplePlay"
    }
  };

  // Get current page from window location
  useEffect(() => {
    const pathname = window.location.pathname;
    if (pathname) {
      // Extract page name from pathname (e.g., "/aboutNFT" -> "aboutNFT")
      const pageName = pathname.replace("/", "");
      setCurrentPage(pageName);
    }
  }, []);

  const handleNext = () => {
    const nextPage = pageFlow.next[currentPage];
    if (nextPage) {
      window.location = `/${nextPage}`;
    }
  };

  const handleBack = () => {
    const backPage = pageFlow.back[currentPage];
    if (backPage) {
      window.location = `/${backPage}`;
    }
  };

  // Check if buttons should be disabled
  const isNextDisabled = !pageFlow.next[currentPage];
  const isBackDisabled = !pageFlow.back[currentPage];

  return (
    <>
      <div className={`absolute flex space-x-4 bottom-[90px] right-[100px] ${Bango.className}`}>
        {/* Back Button */}
        <div className="inline-block">
          <button 
            className={`relative focus:outline-none ${isBackDisabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
            onClick={handleBack}
            disabled={isBackDisabled}
          >
            <svg
              width="130"
              viewBox="0 0 100 50"
              className="fill-[#B34E3C] rounded-lg"
            >
              <path
                d="M30 0 
                   C25 0, 22 3, 20 7
                   L10 20 
                   C7 24, 7 26, 10 30
                   L20 43
                   C22 47, 25 50, 30 50
                   L150 50
                   C155 50, 160 45, 160 40
                   L160 10
                   C160 5, 155 0, 150 0
                   Z"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-white font-normal pl-6 pb-1 tracking-widest text-[30px]">
              Back
            </span>
          </button>
        </div>

        {/* Next Button */}
        <div className="inline-block">
          <button 
            className={`relative focus:outline-none ${isNextDisabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
            onClick={handleNext}
            disabled={isNextDisabled}
          >
            <svg
              width="130"
              viewBox="60 0 100 50"
              className="fill-[#69B9A9] rounded-lg"
            >
              <path
                d="M10 0 
               C5 0, 0 5, 0 10
               L0 40
               C0 45, 5 50, 10 50
               L130 50
               C135 50, 138 47, 140 43
               L150 30
               C153 26, 153 24, 150 20
               L140 7
               C138 3, 135 0, 130 0
               Z"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-white font-normal pr-5 pb-1 tracking-widest text-[30px]">
              Next
            </span>
          </button>
        </div>
      </div>
    </>
  );
}