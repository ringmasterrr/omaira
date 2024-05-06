import React from "react";
import Heading from "../Heading";
import Para from "../Para";
import PrimaryBtn from "../PrimaryBtn";
import Image from "next/image";

interface ExpertiseAndExperienceProps {
  no: number;
  title: string;
  description: string;
}

const ProcessCard: React.FC<ExpertiseAndExperienceProps> = ({
  no,
  title,
  description,
}) => {
  return (
    <section
      className="flex flex-col items-start text-left lg:items-start max-w-[43rem] p-8 justify-start border rounded-2xl  md:gap-12 gap-8 md:pb-16 pb-8 md:min-h-[20rem] "
      style={{ boxShadow: "0 0 15px rgba(56, 189, 248, 0.3)" }}
    >
      <div className="bg-sky-400 rounded-full flex justify-center items-center text-3xl p-5 px-7 text-white font-bold">
        {no}
      </div>

      <div className="flex flex-col items-start justify-start">
        <div className="flex flex-col grow px-0 lg:px-0 text-black gap-2">
          <h2 className="text-2xl font-bold leading-8">{title}</h2>
          <p className="mt-3 text-gray-600 text-base leading-7 ">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

function Process() {
  return (
    <div className="relative w-full flex flex-col items-center justify-center ">
      <Image
        src={"/Decoration.png"}
        alt=""
        width={500}
        height={500}
        className=" w-8 hidden md:block h-full rotate-180 absolute left-0 top-0"
      />

      <div className=" w-full mx-auto my-8 flex-col px-2 lg:px-0 lg:flex-row flex  items-center justify-center  max-w-screen-2xl">
        <div className=" max-w-screen-2xl flex w-full items-center justify-center">
          <div className="flex flex-col items-start justify-start">
            <div className="flex-col gap-8 md:items-start items-center md:justify-start justify-center flex md:px-16">
              <div className="flex md:flex-row flex-col md:items-start gap-2 ">
                <span className="2xl:text-3xl lg:2xl xl:3xl text-4xl pb-0 font-bold md:text-left text-center">
                  RWA
                </span>
                <span className="2xl:text-3xl lg:2xl xl:3xl text-4xl font-bold text-sky-400 md:text-left text-center">
                  Tokenization Process
                </span>
              </div>
              <p className="sm:text-start text-center">
                Omaira Protocol is a decentralized, globally accessible platform
                powering the complete lifecycle of RWA tokenization and trading.
                Its three core functions are:
              </p>
            </div>
            <div className="flex flex-wrap mt-16 w-full gap-8 justify-center items-center 2xl:px-3 px-4 ">
              <ProcessCard
                no={1}
                title="Asset Due Diligence & Selection"
                description="Omaira's team conducts rigorous due diligence on potential RWA projects, validating ownership rights, legal compliance, valuation and more. Only assets meeting eligibility criteria are approved for tokenization"
              />
              <ProcessCard
                no={2}
                title="Security Token Issuance"
                description="An SPV (special purpose vehicle) is established as the legal entity owning the RWA. Omaira then issues ERC-20 security tokens on its protocol mapping to fractionalized ownership of the SPV's asset(s)."
              />
              <ProcessCard
                no={3}
                title="Primary Token Offerin"
                description="The tokenized securities are offered through Omaira's platform in SEC/FINRA compliant security token offerings open to accredited/institutional investors globally. KYC/AML is enforced"
              />
              <ProcessCard
                no={4}
                title="Asset Management"
                description="Post successful fundraise, Omaira's protocol handles all asset administration including governance, stakeholder communications, revenue distribution to token holders, reporting and filings as mandated."
              />
            </div>
          </div>
        </div>
      </div>

      <Image
        src={"/Decoration.png"}
        alt=""
        width={500}
        height={500}
        className=" w-8 hidden md:block h-full absolute right-0 top-0"
      />
      <div className="max-w-screen-2xl md:px-16">
       <div className="bg-[#F5FBFF] p-10 text-lg my-12 space-y-4 ">
          <p>
            Asset tokenization is the process of converting rights to an
            underlying real-world asset into a digital token on the blockchain.
            This token is a blockchain-based representation of ownership and
            economic interests in the asset. RWA tokens can represent fractions
            of real estate, minerals, agriculture, artwork and virtually any
            asset type.
          </p>
        </div>
        </div>
    </div>

  );
}

export default Process;
