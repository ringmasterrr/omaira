import React from "react";
import Heading from "../Heading";
import Para from "../Para";
import PrimaryBtn from "../PrimaryBtn";
import Image from "next/image";

interface ExpertiseAndExperienceProps {
  imageSrc: string;
  title: string;
  description: string;
}

const Asset: React.FC<ExpertiseAndExperienceProps> = ({
  imageSrc,
  title,
  description,
}) => {
  return (
    <section
      className="flex flex-row lg:text-left xl:w-[30%] justify-between bg-[#FAFAFF]  rounded-3xl md:gap-0 gap-2 min-h-[270px] "
      // style={{ boxShadow: "0 0 15px rgba(56, 189, 248, 0.3)" }}
    >
      <div className="flex flex-col md:w-[24%] w-[30%] justify-center items-center bg-[#D8F1FF] rounded-tl-3xl rounded-bl-3xl md:p-8 p-3">
        <Image
          src={imageSrc}
          alt=""
          width={100}
          height={100}
          className=" w-14 shrink-0 aspect-square"
        />
      </div>
      <div className="flex flex-col items-center justify-center w-[83%]">
        <div className="flex flex-col grow text-black gap-2 py-8 px-4">
          <h2 className="md:text-2xl xl font-bold leading-8">{title}</h2>
          <p className="mt-3 leading-7 max-w-md text-gray-600 md:text-base text-sm">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

function Assets() {
  return (
    <div className=" w-full flex flex-col items-center justify-center ">
      <div className=" w-full mx-auto my-8 flex-col px-2 lg:px-0 lg:flex-row flex  items-center justify-center  ">
        <div className=" max-w-screen-2xl flex w-full items-center justify-center">
          <div className="flex flex-col md:items-start items-center md:justify-start justify-center">
            <div className="flex-col gap-8 md:items-start items-center md:justify-start justify-center flex md:px-16">
              <div className="flex md:flex-row flex-col md:items-start gap-2 ">
                <span className="2xl:text-3xl lg:2xl xl:3xl text-4xl pb-0 font-bold md:text-left text-center">
                  Initial
                </span>
                <span className="2xl:text-3xl lg:2xl xl:3xl text-4xl font-bold text-sky-400 md:text-left text-center">
                  Target Assets
                </span>
              </div>
            </div>
            <div className="flex flex-wrap mt-16 w-full gap-8 xl:justify-between justify-center items-center md:px-16 px-4">
              <Asset
                imageSrc="/why1.svg"
                title="Real Estate"
                description="Tokenizing agricultural, residential, commercial and industrial properties into fractional digital securities. This unlocks real estate investing at lower capital requirements while providing efficient fundraising for developers."
              />
              <Asset
                imageSrc="/why1.svg"
                title="Granite Mining"
                description="Converting mining reserves, equipment and operations into tradable tokens allowing miners to raise capital upfront. Investors gain exposure to an asset traditionally inaccessible."
              />
              <Asset
                imageSrc="/why1.svg"
                title="Agriculture/Farming"
                description="Tokenizing agricultural assets like farmlands, crops, equipment etc. providing much-needed financing to farmers while enabling investor diversification into this asset class"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-2xl md:px-16">
        <div className="bg-[#F5FBFF] p-10 text-lg my-4 space-y-4 ">
          <p>
            In subsequent phases, Omaira will open its protocol to tokenize
            additional RWAs like fine art, collectibles, intellectual property,
            commodity inventories and more based on market demand.
          </p>
        </div>

        <div className="flex-col gap-8 md:items-start items-center md:justify-start justify-center flex my-12 px-6">
          <div className="flex md:flex-row flex-col md:items-start gap-2 ">
            <span className="2xl:text-3xl lg:2xl xl:3xl text-4xl pb-0 font-bold md:text-left text-center">
              Secondary
            </span>
            <span className="2xl:text-3xl lg:2xl xl:3xl text-4xl font-bold text-sky-400 md:text-left text-center">
              Trading Marketplace
            </span>
          </div>
          <p className="sm:text-start text-center" >
            While primary token issuance unlocks the initial liquidity in an
            asset, Omaira powers a global secondary marketplace for continuous
            24/7 trading of RWA tokens between investors worldwide. The
            marketplace functions as an open, decentralized exchange providing
            an order book for investors to freely trade RWA tokens peer-to-peer
            with tight spreads. Omaira will integrate with leading liquidity
            providers and market makers to ensure robust trading volumes.
            Cross-chain interoperability will allow RWA tokens issued across
            different blockchain protocols to be traded seamlessly on
            Omaira&apos;s exchange for maximum liquidity and accessibility. The
            marketplace generates revenue through trading fees, paid in OMAI
            tokens to incentivize usage. Omaira&apos;s rollup chain will enable
            ultra-low fee trading venues compared to current DEX models.
          </p>
        </div>
        <div className="flex-col gap-8 md:items-start items-center md:justify-start justify-center flex my-12 px-6">
          <div className="flex md:flex-row flex-col md:items-start gap-2 ">
            <span className="2xl:text-3xl lg:2xl xl:3xl text-4xl pb-0 font-bold md:text-left text-center">
              Governance
            </span>
            <span className="2xl:text-3xl lg:2xl xl:3xl text-4xl font-bold text-sky-400 md:text-left text-center">
              & DAO
            </span>
          </div>
          <p className="sm:text-start text-center">
            Omaira implements a decentralized governance model driven by its
            community of OMI token holders. All core governance decisions like
            protocol upgrades, fee changes, new asset whitelisting, revenue
            usage and more are proposed and voted on by token holders. A
            percentage of revenues from Omaira&apos;s primary issuance and
            trading activities are allocated to the DAO treasury, providing a
            sustainable pool of resources for future development and growth
            incentives for the community. Token holders can stake their OMI to
            participate in governance voting as well as earn rewards from
            trading fees collected. This incentivizes an active, engaged
            community driving the protocol&apos;s evolution
          </p>
        </div>
        <div className="flex-col gap-8 md:items-start items-center md:justify-start justify-center flex my-12 px-6">
          <div className="flex md:flex-row flex-col md:items-start gap-2 ">
            <span className="2xl:text-3xl lg:2xl xl:3xl text-4xl pb-0 font-bold md:text-left text-center">
              Token Distribution
            </span>
            <span className="2xl:text-3xl lg:2xl xl:3xl text-4xl font-bold text-sky-400 md:text-left text-center">
              & Use of Proceeds
            </span>
          </div>
          <ul className="bulletList pl-6">
            <li>25% sold through public sale</li>
            <li>25% retained for ecosystem incentives</li>
            <li>20% retained by Omaira DAO treasury</li>
            <li>15% allocated to founders/team</li>
            <li>20% for Technology, marketing and partnerships</li>
          </ul>
          <p>Funds raised will be used for protocol development, security audits, regulatory approvals, team growth, liquidity bootstrapping and other operational requirements.</p>
        </div>
      </div>
    </div>
  );
}

export default Assets;
