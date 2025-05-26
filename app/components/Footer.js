"use client";

import localFont from "next/font/local";
import { useEffect, useState } from "react";

const InterRegular = localFont({
  src: "../fonts/Inter_18pt-Regular.ttf",
});

export default function Footer() {
  const [isSticky, setIsSticky] = useState(false);
  
  useEffect(() => {
    // Function to check if page content is shorter than viewport
    const checkContentHeight = () => {
      const bodyHeight = document.body.scrollHeight;
      const viewportHeight = window.innerHeight;
      
      // If content is shorter than viewport, make footer sticky
      if (bodyHeight <= viewportHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    
    // Run on mount and window resize
    checkContentHeight();
    window.addEventListener('resize', checkContentHeight);
    
    // Check again after a short delay to account for dynamic content loading
    const timeoutId = setTimeout(checkContentHeight, 300);
    
    return () => {
      window.removeEventListener('resize', checkContentHeight);
      clearTimeout(timeoutId);
    };
  }, []);
  
  // Use client-side only rendering for the position calculation
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Default to non-sticky when server rendering to avoid hydration mismatch
  const footerClass = mounted 
    ? `
      bg-[#000000] opacity-[74%] text-white font-[16px] 
      text-center py-3 px-40 rounded-[56px] w-[45%] 
      ${InterRegular.className}
      ${isSticky 
        ? 'fixed bottom-5 left-1/2 transform -translate-x-1/2' 
        : 'mt-14 mb-5 mx-auto'}
    `
    : `
      bg-[#000000] opacity-[74%] text-white font-[16px] fixed bottom-0 left-0 right-0 
      text-center py-3 px-40 rounded-[56px] w-[45%] mt-14 mb-5 mx-auto
      ${InterRegular.className}
    `;
  
  return (
    <footer className={footerClass}>
      <p>&copy; {new Date().getFullYear()} SimpleGuys. All rights Reserved.</p>
    </footer>
  );
}