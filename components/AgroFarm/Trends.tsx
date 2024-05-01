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
          <p className="mt-3 leading-7 max-w-md text-[#0000009a] text-sm font-normal">
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
                title="Impact Investing"
                description="Tokenization encourages sustainable and impact-focused investments in agriculture, supporting environmental stewardship, social responsibility, and economic development in rural communities."
              />
              <WhyCard
                imageSrc="/trend2.svg"
                title="Digital Agriculture"
                description="Integrating tokenized assets with Internet of Things (IoT), data analytics, and precision farming technologies improves farm productivity, resource efficiency, and decision-making processes."
              />
              <WhyCard
                imageSrc="/trend3.svg"
                title="Ecosystem Integration"
                description="Tokenized agricultural assets can integrate with supply chain platforms, agricultural marketplaces, and agri-tech startups, creating synergies across the agricultural value chain."
              />
              <WhyCard
                imageSrc="/trend4.svg"
                title="Regulatory Frameworks"
                description="Evolving regulatory frameworks and industry standards for tokenized assets in agriculture provide clarity, investor protection, and market legitimacy, attracting more capital into agro farms."
              />
              <WhyCard
                imageSrc="/trend5.svg"
                title="Education and Awareness"
                description="Educating farmers, investors, and stakeholders about the benefits and risks of tokenization fosters trust, adoption, and responsible investment practices in agricultural tokenized assets."
              />
            </div>
            <div className="bg-[#F5FBFF] p-10 text-lg w-[97%] my-24 ">
              <p>
                In conclusion, tokenization offers transformative opportunities
                for agro farms, unlocking capital, efficiency, and
                sustainability in agricultural investments. Embracing blockchain
                technology, digital assets, and innovative agricultural
                practices can drive inclusive growth, resilience, and value
                creation across the agroecosystem globally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;
