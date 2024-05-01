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
      className="flex flex-row lg:text-left xl:w-[48%] justify-between bg-[#FAFAFF]  rounded-3xl md:gap-0 gap-2 min-h-[220px] "
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
          <p className="mt-3 leading-7 max-w-md text-gray-600 md:text-base text-sm">{description}</p>
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
              <Heading
                text="Advantages of "
                highlight="Tokenization in Real Estate"
              />
            </div>
            <div className="flex flex-wrap mt-16 w-full gap-8 xl:justify-start justify-center items-center md:px-20 px-4">
              <WhyCard
                imageSrc="/why1.svg"
                title="Fractional Ownership"
                description="Tokenization enables investors to own fractions or shares of agricultural assets, reducing investment barriers and allowing diversified portfolios in agriculture."
              />
              <WhyCard
                imageSrc="/why2.svg"
                title="Liquidity"
                description="Tokenized real estate assets can be traded on secondary markets, providing liquidity to investors who want to buy, sell, or trade their ownership stakes."
              />
              <WhyCard
                imageSrc="/why3.svg"
                title="Accessibility"
                description="Investors globally can participate in real estate markets traditionally limited to institutional investors or high-net-worth individuals, promoting inclusivity and democratization of investment opportunities."
              />
              <WhyCard
                imageSrc="/why4.svg"
                title="Transparency and Security"
                description="Blockchain technology ensures transparent and immutable records of ownership, transactions, and asset performance. Smart contracts automate compliance, reducing fraud risks and enhancing investor trust."
              />
              <WhyCard
                imageSrc="/why5.svg"
                title="Cost Efficiency"
                description="Tokenization streamlines administrative processes, reduces  paperwork, and eliminates intermediaries, leading to cost savings in real estate transactions and management."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;
