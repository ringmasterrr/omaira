import * as React from "react";
import Image from "next/image";
import PrimaryBtn from "../PrimaryBtn";

interface StatItemProps {
  imageSrc: string;
  value: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ imageSrc, value, label }) => (
  <div className="flex gap-5 justify-between items-start text-black">
    <Image
      src={imageSrc}
      alt=""
      width={58}
      height={58}
      className="shrink-0 w-8 h-8"
    />
    <div className="flex flex-col">
      <div className="2xl:text-4xl xl:text-3xl font-bold leading-9 max-md:text-3xl">
        {value}
      </div>
      <div className="mt-4 text-xl leading-6 md:leading-7">{label}</div>
    </div>
  </div>
);

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

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col max-w-screen-2xl px-4 lg:px-16 mx-auto mt-16">
      <div className="w-full flex  justify-between flex-col lg:flex-row ">
        <div className="flex flex-col items-center lg:items-start justify-between">
          <h1 className="text-3xl  leading-loose text-center lg:text-left max-md:max-w-full">
            <span className="2xl:text-7xl xl:text-6xl lg:text-5xl text-7xl font-bold text-black leading-8">
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
      <div className="flex justify-between w-full">
        <div className="mt-32 w-1/2 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
              <h2 className="text-3xl font-medium leading-10 text-sky-400 max-md:mt-10 max-md:max-w-full">
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
            {/* {stats.slice(0, 2).map((stat, index) => (
              <div
                key={index}
                className={`flex flex-col ml-5 w-[${
                  index === 0 ? "22" : "19"
                }%] max-md:ml-0 max-md:w-full`}
              >
                <StatItem {...stat} />
              </div>
            ))} */}
          </div>
        </div>
        {/* <div className="self-end w-1/2 mt-2.5 mr-40 max-w-full max-md:mr-2.5">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            {stats.slice(2).map((stat, index) => (
              <div
                key={index}
                className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full"
              >
                <StatItem {...stat} />
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
