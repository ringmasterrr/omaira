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

const WhyCard: React.FC<ExpertiseAndExperienceProps> = ({
  no,
  title,
  description,
}) => {
  return (
    <section
      className="flex flex-col items-start text-left lg:items-start max-w-[30rem] p-8 justify-start border rounded-3xl gap-16 pb-16 min-h-[25rem]   "
      style={{ boxShadow: "0 0 15px rgba(56, 189, 248, 0.3)" }}
    >
      <div className="bg-sky-400 rounded-full flex justify-center items-center text-3xl p-5 px-7 text-white font-bold">
        {no}
      </div>

      <div className="flex flex-col items-start justify-start">
        <div className="flex flex-col grow px-0 lg:px-0 text-black gap-2">
          <h2 className="text-2xl font-bold leading-8">{title}</h2>
          <p className="mt-3 text-gray-600 text-base leading-7 ">{description}</p>
        </div>
      </div>
    </section>
  );
};

function Why() {
  return (
    <div className="relative w-full flex flex-col items-center justify-center ">
      <Image
        src={"/Decoration.png"}
        alt=""
        width={500}
        height={500}
        className=" w-8 hidden md:block h-full rotate-180 absolute left-0 top-0"
      />

      <div className=" w-full mx-auto my-8 flex-col px-2 lg:px-0 lg:flex-row flex  items-center justify-center  ">
        <div className=" max-w-screen-2xl flex w-full items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <div className="flex-col gap-8 items-center justify-center flex">
              <Heading text="Process of" highlight="Tokenization" />
            </div>
            <div className="flex flex-wrap mt-16 w-full gap-8 justify-center items-center 2xl:px-3 px-4 ">
              <WhyCard
                no={1}
                title="Asset Identification"
                description="Selecting the real estate asset(s) for tokenization, which
                can range from residential properties to commercial buildings, and verifying ownership and legal status."
              />
              <WhyCard
                no={2}
                title="Asset Valuation"
                description="Conducting a thorough valuation of the property, including
                market analysis, appraisal, income potential assessment, and due diligence. "
              />
              <WhyCard
                no={3}
                title="Legal and Regulatory Compliance"
                description="Ensuring compliance with real estate laws, securities regulations, and investor protection measures in the
                jurisdiction(s) where the property is located."
              />
              <WhyCard
                no={4}
                title="Token Creation"
                description="Generating digital tokens on a blockchain platform, each
                representing a share or stake in the real estate asset. Tokens may be backed by physical assets or revenue streams from the property."
              />
              <WhyCard
                no={5}
                title="Token Offering"
                description="Offering tokens to investors through public or private sales,
                crowdfunding platforms, or digital asset exchanges. Investors receive tokens in exchange for investment capital."
              />
              <WhyCard
                no={6}
                title="Smart Contracts"
                description="Implementing smart contracts to automate token issuance,
                distribution of profits or rental income, and governance processes such as voting rights for token holders."
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
    </div>
  );
}

export default Why;
