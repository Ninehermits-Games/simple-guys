import localFont from "next/font/local";
// import { Noto_Sans_Symbols } from "next/font/google";

const Bango = localFont({
  src: "../fonts/SVN-Bango.otf",
});

const NotoSansRegular = localFont({
  src: "../fonts/NotoSans-Regular.ttf",
});

export default function page() {
  return (
    <>
      <div className="mt-14">
        <h1
          className={`text-center text-[80px] font-normal text-white tracking-wide ${Bango.className}`}
          style={{
            textShadow: "13px 13px 0 #000000",
            fontWeight: 400,
          }}
        >
          TERMS OF USE
        </h1>
        <div className="w-[85%] mx-auto mt-14">
          <div>
            <p
              className={`text-black text-[24px] ${NotoSansRegular.className}`}
            >
              Welcome to the Simple Guys project! By accessing or using our
              platform at https://simpleguys.xyz (the “Platform”), you agree to
              be bound by these Terms of Use.
            </p>
          </div>
          <div className="mt-8">
            <h1 className={`text-black text-[30px] ${Bango.className}`}>
              1. Definitions
            </h1>
            <ul
              className={`list-disc pl-10 space-y-3 text-black text-[24px] leading-snug ${NotoSansRegular.className}`}
            >
              <li>
                “We” / “Project” / “Simple Guys”: Refers to the team behind the
                development of the platform, NFTs, mini-games, and the $SIMG
                token.
              </li>
              <li>
                “User” / “You”: Any individual accessing the website, connecting
                a wallet, owning NFTs, or participating in project-related
                activities.
              </li>
              <li>
                “Services”: Includes the website, mini-games, NFTs, airdrops,
                staking, and any other features provided by the project.
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <h1 className={`text-black text-[30px] ${Bango.className}`}>
              2. Digital Assets & Wallets
            </h1>
            <ul
              className={`list-disc pl-10 space-y-3 text-black text-[24px] leading-snug ${NotoSansRegular.className}`}
            >
              <li>
                You are required to connect a Web3 wallet (e.g., MetaMask) to
                access certain features such as minting NFTs, playing games, and
                receiving airdrops.
              </li>
              <li>
                You are solely responsible for securing your wallet and private
                keys.
              </li>
              <li>
                Any actions taken through your wallet will be considered as
                having been performed by you.
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <h1 className={`text-black text-[30px] ${Bango.className}`}>
              3. NFT Ownership Rights
            </h1>
            <ul
              className={`list-disc pl-10 space-y-3 text-black text-[24px] leading-snug ${NotoSansRegular.className}`}
            >
              <li>
                When you own a Simple Guys NFT or Item Capsule, you gain usage
                rights within our ecosystem, including access to mini-games,
                events, and rewards.
              </li>
              <li>
                However, you do not acquire full intellectual property rights to
                the images or contents of the NFTs unless stated otherwise. All
                artwork remains the property of the project.
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <h1 className={`text-black text-[30px] ${Bango.className}`}>
              4. User Responsibilities
            </h1>
            <p
              className={`text-black text-[24px] ${NotoSansRegular.className}`}
            >
              You agree not to use the platform for any of the following:
            </p>
            <ul
              className={`list-disc pl-10 space-y-3 text-black text-[24px] leading-snug ${NotoSansRegular.className}`}
            >
              <li>Violating local or international laws.</li>
              <li>Hacking, cheating, or exploiting the game or ecosystem.</li>
              <li>
                Creating bots, scripts, or automated systems to manipulate
                results.
              </li>
              <li>
                Spreading malware, spam, or causing harm to the community.
              </li>
            </ul>
            <p
              className={`text-black text-[24px] ${NotoSansRegular.className}`}
            >
              We reserve the right to suspend, permanently ban, or restrict
              access to the platform in the event of violations.
            </p>
          </div>
          <div className="mt-8">
            <h1 className={`text-black text-[30px] ${Bango.className}`}>
              5. Risks & Disclaimer
            </h1>
            <ul
              className={`list-disc pl-10 space-y-3 text-black text-[24px] leading-snug ${NotoSansRegular.className}`}
            >
              <li>
                Simple Guys is a Web3 platform operating on decentralized
                blockchain technology. As such, it carries inherent risks
                including volatility, technical errors, and regulatory
                uncertainty.
              </li>
              <li>
                The $SIMG token is not an investment instrument. It does not
                represent equity, dividends, or legal ownership in any company.
              </li>
              <li>
                Users are fully responsible for their interactions with NFTs,
                tokens, games, and wallets.
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <h1 className={`text-black text-[30px] ${Bango.className}`}>
              6. Service Changes
            </h1>
            <p
              className={`text-black text-[24px] ${NotoSansRegular.className}`}
            >
              We may update, suspend, or terminate any part of the platform or
              services at any time without prior notice. This includes ending
              airdrop events, modifying staking mechanics, or game updates.
            </p>
          </div>
          <div className="mt-8">
            <h1 className={`text-black text-[30px] ${Bango.className}`}>
              7. Intellectual Property
            </h1>
            <ul
              className={`list-disc pl-10 space-y-3 text-black text-[24px] leading-snug ${NotoSansRegular.className}`}
            >
              <li>
                All content on the platform (except user-generated NFTs)
                including artwork, logos, characters, and UI designs are the
                intellectual property of Simple Guys or its licensors.
              </li>
              <li>
                You may not copy, reproduce, or redistribute this content
                without explicit written permission.
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <h1 className={`text-black text-[30px] ${Bango.className}`}>
              8. Applicable Law
            </h1>
            <p
              className={`text-black text-[24px] ${NotoSansRegular.className}`}
            >
              These Terms are governed by applicable international laws and
              principles relating to decentralized blockchain technology. It is
              your responsibility to ensure that your use of the platform is
              lawful in your jurisdiction.
            </p>
          </div>
          <div className="mt-8">
            <h1 className={`text-black text-[30px] ${Bango.className}`}>
              9. Updates to Terms
            </h1>
            <p
              className={`text-black text-[24px] ${NotoSansRegular.className}`}
            >
              We may revise these Terms of Use at any time. Updated terms will
              be posted on the platform and take effect immediately upon
              publication.
            </p>
          </div>
          <div className="mt-8">
            <h1 className={`text-black text-[30px] ${Bango.className}`}>
              10. Contact
            </h1>
            <p
              className={`text-black text-[24px] ${NotoSansRegular.className}`}
            >
              For any questions or concerns regarding these Terms, please
              contact us at:
            </p>
            <div className="mt-4 flex items-center space-x-4">
              <img src="/email.svg" alt="SimpleGuys Logo" width={40} />
              <p
                className={`text-black text-[24px] ${NotoSansRegular.className}`}
              >
                Email: team@simpleguys.xyz
              </p>
            </div>
            <div className="mt-4 flex items-center space-x-4">
              <img src="/web.svg" alt="SimpleGuys Logo" width={40} />
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
