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
    <section className="flex flex-col lg:flex-row items-center text-center lg:text-left lg:items-start gap-4 my-2 lg:w-1/2 w-full lg:p-8 lg:px-16">
      <div className="flex flex-col w-[17%]">
        <Image
          src={imageSrc}
          alt=""
          width={100}
          height={100}
          className="shrink-0 aspect-square"
        />
      </div>
      <div className="flex flex-col  w-[83%]">
        <div className="flex flex-col grow px-5 lg:px-0 text-black">
          <h2 className="text-2xl font-bold leading-8">{title}</h2>
          <p className="mt-3 text-lg leading-7 max-w-md">{description}</p>
        </div>
      </div>
    </section>
  );
};

function Why() {
  return (
    <div className="w-full  mx-auto my-8 flex-col lg:flex-row">
      <div className="flex w-full items-center">
        <Image
          src={"/Decoration.png"}
          alt=""
          width={500}
          height={500}
          className=" w-12 hidden md:block h-full rotate-180"
        />
        <div>
          <div className="flex-col gap-8 items-center justify-center flex">
            <Heading text="Why" highlight="Omaira" />
            <Para
              text="At Omaira, we stand out as the premier choice for tokenisation of real-world assets. Here's why enterprises
and institutional investors choose us:"
            />
            <PrimaryBtn>Learn More</PrimaryBtn>
          </div>
          <div className="flex flex-col mt-16 lg:flex-row w-full flex-wrap">
            <WhyCard
              imageSrc="/w1.png"
              title="Expertise & Experience"
              description="With a team of seasoned professionals in Blockchain technology, finance, and asset management, we bring a wealth of expertise to the table. We have a deep understanding of the tokenisation market and can guide you through the entire process with confidence."
            />
            <WhyCard
              imageSrc="/w2.png"
              title="Cutting-Edge Technology"
              description="We leverage the latest advancements in Blockchain technology to provide a secure, efficient, and scalable platform, by implementing modular Blockchain in our protocol. Our robust infrastructure ensures that asset tokenisation is seamless and reliable, while maintaining data integrity and privacy. "
            />
            <WhyCard
              imageSrc="/w3.png"
              title="Global Marketplace"
              description="Our platform offers access to a global network of investors, expanding the reach and visibility of your assets. We connect you with a diverse pool of potential buyers, ensuring liquidity and maximizing your opportunities for capital growth."
            />
            <WhyCard
              imageSrc="/w4.png"
              title="Regulatory Compliance"
              description="We prioritize compliance with regulatory frameworks to ensure a transparent and legally compliant protocol. By partnering with us, you can navigate the complexities of tokenisation within a secure and compliant environment."
            />
          </div>
        </div>
        <Image
          src={"/Decoration.png"}
          alt=""
          width={500}
          height={500}
          className=" w-12 hidden md:block h-full"
        />
      </div>
    </div>
  );
}

export default Why;
