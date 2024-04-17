import * as React from "react";
import Image from "next/image";
import PrimaryBtn from "../PrimaryBtn";

interface StatItemProps {
  imageSrc: string;
  value: string;
  label: string;
}

const HeroItem = ({ imageSrc, title }: { imageSrc: string; title: string }) => (
  <div className="flex flex-col lg:flex-row justify-center gap-3 items-center">
    <Image
      src={imageSrc}
      alt=""
      width={200}
      height={200}
      className="shrink-0 w-12 h-12"
    />
    <div className="xl:text-base 2xl:text-lg text-center lg:text-left font-semibold">
      {title}
    </div>
  </div>
);

const StatsItem = ({ imageSrc, value, text }: any) => {
  return (
    <div className="flex w-full items-center justify-center lg:w-1/2 p-4">
      <div className="flex flex-col items-center text-center max-w-16 lg:max-w-none lg:text-left lg:items-start lg:flex-row gap-4 w-full">
        <Image
          src={imageSrc}
          alt=""
          width={64}
          height={64}
          className="w-16 h-16"
        />

        <div>
          <h2 className=" text-4xl font-semibold  ">{value}</h2>
          <p className="text-xl ">{text}</p>
        </div>
      </div>
    </div>
  );
};

const Hero: React.FC = () => {
  const stats = [
    {
      imageSrc: "/h1.svg",
      value: "6+",
      text: "Industries",
    },
    {
      imageSrc: "/h2.svg",
      value: "100K+",
      text: "Waitlisted Retail Investors",
    },
    {
      imageSrc: "/h3.svg",
      value: "160+",
      text: "Access to Institutional Asset manager",
    },
    {
      imageSrc: "/h4.svg",
      value: "55 million+",
      text: "Waitlisted AUM for Tokenisation",
    },
  ];
  return (
    <div className="flex flex-col w-full max-w-screen-2xl px-4 lg:px-16 mx-auto mt-16">
      <div className="w-full flex gap-16  justify-between flex-col lg:flex-row ">
        <div className="flex flex-col items-center lg:items-start justify-between">
          <h1 className="text-3xl  leading-loose text-center lg:text-left max-md:max-w-full">
            <span className="2xl:text-7xl xl:text-6xl lg:text-5xl text-5  xl font-bold text-black leading-8">
              Revolutionising
            </span>{" "}
            <br />
            <span className="2xl:text-4xl lg:2xl xl:3xl text-4xl leading-8">
              The Way Modern And Traditional
            </span>{" "}
            <br />
            <span className="2xl:text-4xl lg:2xl xl:3xl text-4xl leading-8">
              Real World Assets are{" "}
            </span>
            <span className="2xl:text-4xl lg:2xl xl:3xl text-4xl font-bold text-sky-400 leading-8">
              Tokenised
            </span>{" "}
            <br />
            <span className="2xl:text-4xl lg:2xl xl:3xl text-4xl leading-[83px]">
              In
            </span>{" "}
            <span className="2xl:text-4xl lg:2xl xl:3xl font-bold text-sky-400 leading-9">
              Real Estate
            </span>
          </h1>
          <p className="text-lg font-normal leading-8 mt-2">
            Welcome to OMAIRA- World’s Largest, Regulated, and the most secured
            Global Protocol for Real World Asset (RWA) Tokenisation
          </p>
          <PrimaryBtn className="w-56  mt-4">Join Omaira</PrimaryBtn>
          <div className="flex lg:mt-5 mt-12">
            <HeroItem imageSrc="/h11.png" title="Globally Regulation" />
            <HeroItem imageSrc="/h12.svg" title="Modular Blockchain" />
            <HeroItem imageSrc="/h13.png" title="Multi Industry" />
            <HeroItem imageSrc="/h14.svg" title="Carbon Positive" />
          </div>
        </div>
        <Image
          src={"/hero.png"}
          alt=""
          width={700}
          height={673}
          className="w-full lg:w-[600px] xl:w-[700px] xl:mt-0 mt-8"
        />
      </div>
      <div className="flex justify-between flex-col lg:flex-row w-full">
        <div className="mt-32 w-full  text-center lg:text-left ">
          <div className="flex flex-col mr-0 lg:mr-16">
            <h2 className="text-3xl font-medium leading-10 text-sky-400 max-md:mt-10  w-full">
              <span className="text-3xl leading-10 text-black ">
                Enabling Enterprises to unlock Real{" "}
              </span>
              <span className="text-3xl text-black leading-[49px]">
                Value of Assets through our
              </span>{" "}
              <br />
              <span className="leading-10 text-sky-400">
                borderless global reach
              </span>
            </h2>
          </div>
        </div>
        <div className="w-full mt-32">
          <div className="flex w-full flex-wrap">
            {stats.map((stat, index) => (
              <StatsItem key={index} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
