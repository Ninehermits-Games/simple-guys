import localFont from "next/font/local";
// import { Noto_Sans_Symbols } from "next/font/google";

const Bango = localFont({
  src: "../fonts/SVN-Bango.otf",
});

const NotoSansRegular = localFont({
  src: "../fonts/NotoSans-Regular.ttf",
});

// const Symbol = localFont({
//   src: "../fonts/Symbol Regular.ttf",
// });

// const NotoSansSymbols = Noto_Sans_Symbols({
//   variable: "--font-symbols",
//   subsets: ["latin"],
// });

export default function page() {
  return (
    <>
      <div className="mt-32">
        <h1
          className={`text-center text-[80px] font-normal text-white tracking-wide ${Bango.className}`}
          style={{
            textShadow: "13px 13px 0 #000000",
            fontWeight: 400,
          }}
        >
          PRIVACY POLICY
        </h1>
        <div className="w-[85%] mx-auto mt-14">
          <div>
            <p
              className={`text-black text-[24px] ${NotoSansRegular.className}`}
            >
              At Simple Guys, we value your privacy and are committed to
              protecting your personal data. This Privacy Policy explains how we
              collect, use, and protect your information when you use our
              services, interact with our platform, or participate in our NFT
              and token ecosystem.
            </p>
          </div>
          <div className="mt-8">
            <h1 className={`text-black text-[30px] ${Bango.className}`}>
              1. Information We Collect
            </h1>
            <p
              className={`text-black text-[24px] ${NotoSansRegular.className}`}
            >
              As a Web3-native project, we prioritize decentralization and
              privacy. We collect minimal data:
            </p>
            <ul
              className={`list-disc pl-10 space-y-3 text-black text-[24px] leading-snug ${NotoSansRegular.className}`}
            >
              <li>
                Wallet Address: When you connect your wallet (e.g., MetaMask),
                we collect and store your public wallet address to identify
                ownership of NFTs and eligibility for events (e.g., airdrops).
              </li>
              <li>
                Game Participation Data: We collect gameplay metrics such as
                leaderboard scores and performance for reward calculation.
              </li>
              <li>
                Basic Usage Information: Non-personal analytics such as browser
                type, device, and interaction time, used to improve user
                experience.
              </li>
              <li>
                Optional Contact Info: If you voluntarily provide your email
                (e.g., via support or newsletter forms), it is stored securely.
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <h1 className={`text-black text-[30px] ${Bango.className}`}>
              2. How We Use Your Information
            </h1>
            <ul
              className={`list-disc pl-10 space-y-3 text-black text-[24px] leading-snug ${NotoSansRegular.className}`}
            >
              <li>To manage NFT ownership and verify user participation.</li>
              <li>To calculate rewards for events and airdrops.</li>
              <li>To analyze platform usage and improve services.</li>
              <li>
                To communicate with users who opt-in to updates or support.
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <h1 className={`text-black text-[30px] ${Bango.className}`}>
              3. Data Storage and Security
            </h1>
            <ul
              className={`list-disc pl-10 space-y-3 text-black text-[24px] leading-snug ${NotoSansRegular.className}`}
            >
              <li>
                We do not store sensitive personal data like full names, phone
                numbers, or physical addresses.
              </li>
              <li>
                Wallet addresses and gameplay data are stored on secure servers.
              </li>
              <li>
                We implement standard industry security measures to protect data
                from unauthorized access.
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <h1 className={`text-black text-[30px] ${Bango.className}`}>
              4. Sharing Your Data
            </h1>
            <p
              className={`text-black text-[24px] ${NotoSansRegular.className}`}
            >
              We do not sell or rent your personal data. We may share limited
              data with trusted partners (e.g., analytics or hosting services)
              only to operate and maintain the platform.
            </p>
          </div>
          <div className="mt-8">
            <h1 className={`text-black text-[30px] ${Bango.className}`}>
              5. Third-Party Services
            </h1>
            <p
              className={`text-black text-[24px] ${NotoSansRegular.className}`}
            >
              Our platform may link to third-party services (e.g., marketplaces,
              DEXs, or social platforms). We are not responsible for the privacy
              practices of those third parties. Please refer to their privacy
              policies.
            </p>
          </div>
          <div className="mt-8">
            <h1 className={`text-black text-[30px] ${Bango.className}`}>
              6. Cookies & Tracking
            </h1>
            <p
              className={`text-black text-[24px] ${NotoSansRegular.className}`}
            >
              We use minimal cookies for functionality and anonymous analytics.
              You can manage cookie preferences through your browser.
            </p>
          </div>
          <div className="mt-8">
            <h1 className={`text-black text-[30px] ${Bango.className}`}>
              7. Children's Privacy
            </h1>
            <p
              className={`text-black text-[24px] ${NotoSansRegular.className}`}
            >
              Simple Guys is not intended for users under the age of 13 (or the
              legal age in your jurisdiction). We do not knowingly collect data
              from minors.
            </p>
          </div>
          <div className="mt-8">
            <h1 className={`text-black text-[30px] ${Bango.className}`}>
              8. User Rights
            </h1>
            <p
              className={`text-black text-[24px] ${NotoSansRegular.className}`}
            >
              As a user, you have the right to:
            </p>
            <ul
              className={`list-disc pl-10 space-y-3 text-black text-[24px] leading-snug ${NotoSansRegular.className}`}
            >
              <li>
                Request access to data we store related to your wallet.
              </li>
              <li>
                Request deletion of your optional contact information (email).
              </li>
              <li>
                Disconnect your wallet from our platform at any time.
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <h1 className={`text-black text-[30px] ${Bango.className}`}>
              9. Changes to This Policy
            </h1>
            <p
              className={`text-black text-[24px] ${NotoSansRegular.className}`}
            >
              We may update this Privacy Policy as our platform evolves. All
              updates will be posted on this page with a revised date.
            </p>
          </div>
          <div className="mt-8">
            <h1 className={`text-black text-[30px] ${Bango.className}`}>
              10. Contact Us
            </h1>
            <p
              className={`text-black text-[24px] ${NotoSansRegular.className}`}
            >
              For questions about this Privacy Policy or data concerns, please
              contact us at:
            </p>
            <div className="mt-4 flex items-center space-x-4">
            <img
              src="/email.svg"
              alt="SimpleGuys Logo"
              width={40}
            />
            <p
              className={`text-black text-[24px] ${NotoSansRegular.className}`}
            >
              Email: team@simpleguys.xyz
            </p>
            </div>
            <div className="mt-4 flex items-center space-x-4">
            <img
              src="/web.svg"
              alt="SimpleGuys Logo"
              width={40}
            />
            <p
              className={`text-black text-[24px] ${NotoSansRegular.className}`}
            >
              Website: https://simpleguys.xyz
            </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
