"use client"

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import PrimaryBtn from "../PrimaryBtn";
import JoinForm from "./Popup";

interface HeroItemProps {
  imageSrc: string;
  title: string;
  delay?: number;
}

interface StatItemProps {
  imageSrc: string;
  value: string;
  label: string;
}

interface TextChangerProps {
  texts: string[];
  delay: number;
}

const TextChanger: React.FC<TextChangerProps> = ({ texts, delay }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, delay);

    return () => clearInterval(intervalId);
  }, [texts, delay]);

  return <span>{texts[currentTextIndex]}</span>;
};

const HeroItem: React.FC<HeroItemProps> = ({ imageSrc, title, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, delay }}
    className="flex flex-col lg:flex-row justify-center gap-3 items-center"
  >
    <Image
      src={imageSrc}
      alt=""
      width={200}
      height={200}
      className="shrink-0 w-10 h-10"
    />
    <div className="xl:text-base 2xl:text-base text-sm text-center lg:text-left font-semibold">
      {title}
    </div>
  </motion.div>
);

const StatsItem = ({ imageSrc, value, text }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex w-full items-center justify-center lg:w-1/2 p-4"
    >
      <div className="flex flex-col items-center text-center max-w-44 lg:max-w-none lg:text-left lg:items-start lg:flex-row gap-4 w-full">
        <Image
          src={imageSrc}
          alt=""
          width={64}
          height={64}
          className="w-12 h-12"
        />

        <div>
          <h2 className="text-3xl lg:text-2xl font-semibold  ">{value}</h2>
          <p className="text-xl lg:text-lg font-medium ">{text}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Hero: React.FC = () => {
  const items = [
    { imageSrc: "/h11.png", title: "Globally Regulation", delay: 0.2 },
    { imageSrc: "/h12.svg", title: "Modular Blockchain", delay: 0.4 },
    { imageSrc: "/h13.png", title: "Multi Industry", delay: 0.6 },
    { imageSrc: "/h14.svg", title: "Carbon Positive", delay: 0.8 },
  ];

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
  const tokenized = ["Tokenized", "Managed", "Traded"];
  const realEstate = ["Real Estate", "Mines", "Bio Coal", "Agro Farms"];

  const [showForm, setShowForm] = useState(false);

  const handleOpenForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleJoinButtonClick = () => {
    setShowForm(true);
  };

  return (
    <div className="flex flex-col w-full text-center lg:text-left max-w-screen-2xl lg:px-16 mx-auto my-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full flex gap-16 justify-between flex-col lg:flex-row "
      >
        <div className="flex flex-col items-center lg:items-start justify-between md:gap-0 gap-8">
          <h1 className="text-3xl leading-10  lg:leading-loose text-center lg:text-left max-md:max-w-full">
            <span className="2xl:text-7xl xl:text-6xl lg:text-5xl text-[3.18rem] font-bold text-black  leading-8 ">
              Revolutionising
            </span>
            <br />
            <span className="2xl:text-4xl lg:2xl xl:3xl text-4xl leading-8 font-semibold">
              The Way Modern And&nbsp;
              <span className="font-normal text-3xl lg:text-4xl lg:font-semibold">
                Traditional&nbsp;
              </span>
            </span>
            <br className="hidden lg:block" />
            <span className="2xl:text-4xl lg:2xl xl:3xl text-3xl ">
              Real World Assets are&nbsp; 
            </span>
            <span className="2xl:text-4xl lg:2xl xl:3xl text-3xl font-bold text-sky-400 leading-8">
              <TextChanger texts={tokenized} delay={2000} /> &nbsp; 
            </span>
            <br className="hidden lg:block" />
            <span className="2xl:text-4xl lg:2xl xl:3xl text-3xl ">
              In&nbsp;
            </span>
            <span className="2xl:text-4xl lg:2xl xl:3xl font-bold text-sky-400 leading-9">
              <TextChanger texts={realEstate} delay={4000} />
            </span>
          </h1>
          <p className="lg:text-lg text-xs font-semibold leading-5  lg:leading-8 mt-5 lg:mt-2">
            Welcome to OMAIRA- World’s Largest, Regulated, and the most
            <br className="lg:hidden block" /> secured Global Protocol for Real
            World Asset (RWA) Tokenisation
          </p>

          <PrimaryBtn onClick={handleOpenForm}>Join Omaira</PrimaryBtn>
          {showForm && <JoinForm handleClose={handleCloseForm} />}

          <div className="flex lg:mt-5 lg:gap-24 gap-5 mt-12">
            {items.map((item, index) => (
              <HeroItem key={index} {...item} />
            ))}
          </div>
        </div>
        <Image
          src={"/hero.png"}
          alt=""
          width={700}
          height={673}
          className="w-full lg:w-[600px] xl:w-[700px] hidden lg:block xl:mt-0 mt-8"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between flex-col lg:flex-row w-full"
      >
        <div className="lg:mt-32 mt-8 w-full  text-center lg:text-left ">
          <div className="flex flex-col mr-0 lg:mr-16">
            <h2 className="lg:text-4xl text-2xl font-medium leading-7 lg:leading-10 text-sky-400 max-md:mt-10   w-full">
              <span className=" text-black ">
                Enabling Enterprises to unlock Real
              </span>
              <br />
              <span className=" text-black leading">
                Value of Assets through our
              </span>
              <br />
              <span className=" font-bold text-sky-400">
                borderless global reach
              </span>
            </h2>
          </div>
        </div>
        <div className="w-full items-center flex mt-32">
          <Image
            src={"/Mobiledecoration.png"}
            alt=""
            width={500}
            height={500}
            className="w-6  md:hidden block h-full rotate-180"
          />

          <div className="flex w-full flex-wrap">
            {stats.map((stat, index) => (
              <StatsItem key={index} {...stat} />
            ))}
          </div>
          <Image
            src={"/Mobiledecoration.png"}
            alt=""
            width={500}
            height={500}
            className="w-6  md:hidden block h-full"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
