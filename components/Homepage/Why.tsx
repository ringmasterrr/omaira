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
    <section className="flex flex-col lg:flex-row items-center text-center lg:text-left lg:items-start lg:w-2/5 w-full p-8 justify-between border rounded-xl shadow-xl ">
      <div className="flex flex-col w-[14%]">
        <Image
          src={imageSrc}
          alt=""
          width={100}
          height={100}
          className="shrink-0 aspect-square"
        />
      </div>
      <div className="flex flex-col  w-[83%]">
        <div className="flex flex-col grow px-0 lg:px-0 text-black">
          <h2 className="text-2xl font-bold leading-8">{title}</h2>
          <p className="mt-3 text-lg leading-7 max-w-md">{description}</p>
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
              <Heading text="Why" highlight="Omaira" />
              <Para text="At Omaira, we stand out as the premier choice for tokenisation of real-world assets. Here's why enterprises and institutional investors choose us:" />
              <PrimaryBtn>Learn More</PrimaryBtn>
            </div>
            <div className="flex flex-col mt-16 lg:flex-row w-full flex-wrap gap-8 justify-center ">
              <WhyCard
                imageSrc="/exp.svg"
                title="Expertise & Experience"
                description="With a team of seasoned professionals in Blockchain technology, finance, and asset management, we bring a wealth of expertise to the table. We have a deep understanding of the tokenisation market and can guide you through the entire process with confidence."
              />
              <WhyCard
                imageSrc="/tech.svg"
                title="Cutting-Edge Technology"
                description="We leverage the latest advancements in Blockchain technology to provide a secure, efficient, and scalable platform, by implementing modular Blockchain in our protocol. Our robust infrastructure ensures that asset tokenisation is seamless and reliable, while maintaining data integrity and privacy. "
              />
              <WhyCard
                imageSrc="/global.svg"
                title="Global Marketplace"
                description="Our platform offers access to a global network of investors, expanding the reach and visibility of your assets. We connect you with a diverse pool of potential buyers, ensuring liquidity and maximizing your opportunities for capital growth."
              />
              <WhyCard
                imageSrc="/quotes.svg"
                title="Regulatory Compliance"
                description="We prioritize compliance with regulatory frameworks to ensure a transparent and legally compliant protocol. By partnering with us, you can navigate the complexities of tokenisation within a secure and compliant environment."
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
