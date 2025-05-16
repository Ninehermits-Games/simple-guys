import localFont from "next/font/local";

const InterRegular = localFont({
  src: "../fonts/Inter_18pt-Regular.ttf",
});

export default function Footer() {
  return (
    <footer className={`bg-[#000000] opacity-[74%] text-white font-[16px] text-center py-3 px-40 mt-14 mb-10 rounded-[56px] w-[45%] mx-auto ${InterRegular.className}`}>
      <p>&copy; {new Date().getFullYear()} SimpleGuys. All rights Reserved.</p>
    </footer>

    // <footer className={`bg-[#000000] opacity-[74%] text-white font-[16px] text-center py-3 px-40 fixed bottom-10 left-1/2 transform -translate-x-1/2 rounded-[56px] w-auto ${InterRegular.className}`}>
    //   <p>&copy; {new Date().getFullYear()} SimpleGuys. All rights Reserved.</p>
    // </footer>

//     <footer className={`bg-black bg-opacity-75 text-white text-center py-3 px-4 w-full mt-auto ${InterRegular.className}`}>
//   <p>&copy; {new Date().getFullYear()} SimpleGuys. All rights Reserved.</p>
// </footer>
  )
}
