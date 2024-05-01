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

const WhyCard: React.FC<ExpertiseAndExperienceProps> = ({
  imageSrc,
  title,
  description,
}) => {
  return (
    <section
      className="flex flex-col items-center text-center justify-start border rounded-3xl md:gap-0 gap-6 w-[17rem] h-[23rem] pt-6 "
      // style={{ boxShadow: "0 0 15px rgba(56, 189, 248, 0.3)" }}
    >
      <div className="flex flex-col w-[24%] justify-center items-center ">
        <Image
          src={imageSrc}
          alt=""
          width={100}
          height={100}
          className=" w-14 shrink-0 aspect-square"
        />
      </div>
      <div className="flex flex-col items-center justify-center ">
        <div className="flex flex-col grow text-black gap-2 py-8 px-4">
          <h2 className="text-xl font-bold leading-8">{title}</h2>
          <p className="mt-3 leading-7 max-w-md text-[#0000009a] text-sm">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

function Why() {
  return (
    <div className=" w-full flex flex-col items-center justify-center ">
      <div className=" w-full mx-auto my-8 flex-col px-2 lg:px-0 lg:flex-row flex  items-center justify-center  ">
        <div className=" max-w-screen-2xl flex w-full items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <div className="flex-col gap-8 items-center justify-center flex">
              <Heading text="Future Trends & " highlight="Opportunities " />
            </div>
            <div className="flex flex-wrap mt-16 w-full gap-8 justify-center items-center ">
              <WhyCard
                imageSrc="/trend1.svg"
                title="Increased Investment Flows"
                description="Tokenization attracts a broader range of investors, including retail investors, institutional funds, and global stakeholders, stimulating investment flows into real estate markets."
              />
              <WhyCard
                imageSrc="/trend2.svg"
                title="Fractional Usage Rights"
                description="Beyond ownership, tokens can represent usage rights such as rental income shares, access to amenities, or participation in property management decisions."
              />
              <WhyCard
                imageSrc="/trend3.svg"
                title="Secondary Market Development"
                description="Mature secondary markets for tokenized real estate assets can enhance liquidity, price discovery, and investment exit options for token holders."
              />
              <WhyCard
                imageSrc="/trend4.svg"
                title="Integration with DeFi"
                description="Tokenized real estate can be integrated with decentralized finance (DeFi) protocols, enabling borrowing, lending, staking, and other financial activities using real estate-backed tokens."
              />
              <WhyCard
                imageSrc="/trend5.svg"
                title="Regulatory Evolution"
                description="Regulatory frameworks are evolving to accommodate tokenized assets, providing clarity, investor protection, and market legitimacy to tokenized real estate offerings."
              />
            </div>
            <div className="bg-[#F5FBFF] p-10 text-lg w-[97%] my-24 ">
              <p>
                In conclusion, tokenization is reshaping the real estate
                industry by unlocking liquidity, accessibility, and
                transparency. Embracing blockchain technology and digital asset
                ecosystems can unlock new investment opportunities, streamline
                real estate transactions, and democratize property ownership,
                shaping the future of real estate markets globally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;
