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
      className="flex flex-col items-center text-center justify-start border rounded-3xl md:gap-0 gap-6 w-[20rem] h-[23rem] pt-6 "
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
                title="Increased Investment"
                description="Tokenization attracts a broader investor base, including retail investors, institutions, and international stakeholders."
              />
              <WhyCard
                imageSrc="/trend2.svg"
                title="Innovative Financing"
                description="Mining companies can raise capital more efficiently through token offerings, reducing reliance on traditional funding sources."
              />
              <WhyCard
                imageSrc="/trend3.svg"
                title="Improved Governance"
                description="Smart contracts enable transparent governance structures, voting mechanisms, and automated compliance with regulatory requirements."
              />
              <WhyCard
                imageSrc="/trend4.svg"
                title="Integration with IoT and AI"
                description="Tokenized mining assets can be integrated with Internet of Things (IoT) devices and Artificial Intelligence (AI) for enhanced operational efficiency, predictive maintenance, and sustainability practices."
              />
            </div>
            <div className="bg-[#F5FBFF] p-10 text-lg w-[97%] my-24 ">
              <p>
                In conclusion, the tokenization of mines represents a paradigm
                shift in the resource industry, offering new avenues for
                investment, transparency, and global participation. Embracing
                blockchain technology and digital asset ecosystems can unlock
                value, drive innovation, and foster sustainable growth in the
                mining sector.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;
