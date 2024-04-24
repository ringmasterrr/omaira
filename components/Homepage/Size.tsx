"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import React, { useEffect } from "react";
import Heading from "../Heading";
import Para from "../Para";
import PrimaryBtn from "../PrimaryBtn";
import { useInView } from "react-intersection-observer";

type Props = {
  title: string;
  iconSrc: string;
  description: string;
};

const SizeItem = ({ title, iconSrc, description }: Props) => {
  const controls = useAnimation();

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 1 }}
      className="flex flex-col justify-center p-8 w-full items-center text-center lg:text-justify lg:items-start lg:w-1/3"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex justify-center items-center px-3 w-16 h-16 bg-sky-400 rounded-3xl"
      >
        <Image src={iconSrc} alt={title} width={64} height={64} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="flex flex-col mt-4"
      >
        <h2 className="text-xl font-bold leading-8 text-zinc-900">{title}</h2>
        <p className="mt-3 text-lg leading-8 w-full text-slate-600">
          {description}
        </p>
      </motion.div>
    </motion.div>
  );
};

function Size() {
  return (
    <>
      <div className="w-full max-w-screen-2xl px-4 mx-auto my-8 flex-col lg:flex-row">
        <div className="flex-col gap-8 items-center justify-center flex">
          <Heading text="Size of" highlight="Tokenisation Market" />
          <Para text="The tokenisation market has witnessed remarkable growth in recent years, transforming the way assets are digitized and traded. According to industry reports, the global tokenisation market is projected to reach (….market size) by (…year), with a compound annual growth rate of (…growth rate). This exponential growth is fuelled by increased access and liquidity, efficiency and cost-effectiveness, global market reach, and transparency and security." />
          <PrimaryBtn>Learn More</PrimaryBtn>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center p-2 gap-12 mt-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 w-full"
          >
            <Image
              src={"/size.png"}
              width={870}
              height={676}
              className=""
              alt=""
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 , delay:0.5 }}
            className=" flex flex-col items-center lg:items-start lg:w-1/2 w-full lg:ml-12 gap-8 "
          >
            <Heading text="Benefits of" highlight="Tokenisation" />
            <p className=" font-semibold text-center lg:text-left text-lg leading-10 max-w-lg mt-2 ">
              Real-world asset tokenization, the process of representing
              physical assets, such as real estate, art, commocities, and
              various tangible and digital assets, as digital tokens on a
              blockchain or distributed ledger. This phenomenon offers several
              potential benefits
            </p>
          </motion.div>
        </div>
      </div>
      <div className="w-full max-w-screen-2xl flex flex-wrap mx-auto mt-0 flex-col lg:flex-row items-start justify-center">
        <SizeItem
          title="Increased liquidity"
          iconSrc={"/liquidity.svg"}
          description="Tokenizing real-world
          assets can enhance liquidity by enabling fractional ownership and facilitating the trade of tokens on secondary markets.
          It allows investors to buy and sell smaller units of an asset, which can attract a broader range of investors and increase market efficiency."
        />
        <SizeItem
          title="Accessibility and inclusivity"
          iconSrc={"/access.svg"}
          description="Tokenization can lower barriers to entry for traditionally illiquid assets, making them
          accessible to a wider range of investors
          Fractional ownershio allows individuals to invest smaller amounts, reducing the financial threshold for participation."
        />
        <SizeItem
          title="Increased transparency and security"
          iconSrc={"/security.svg"}
          description="Blockchain technology provides a
          transnarent and immutable record of transactions. This transparency can enhance trust and reduce fraud by allowing participants to verify ownership, transaction history, and authenticity of assets. Additionally, cryptographic
          techniques help secure tokens
          and protect against counterfeiting.
          "
        />
        <SizeItem
          title="Diversification opportunities"
          iconSrc={"/diverse.svg"}
          description="Tokenization can enable investors to easily diversify their portfolios across different asset classes. It opens up avenues for investing in assets that were previously out of reach or required significant capital commitments."
        />
        <SizeItem
          title="Fractional ownership and liquidity for illiquid assets"
          iconSrc={"/fraction.svg"}
          description="Real estate, fine art, and
          other illiquid assets are often expensive 
          and difficult to buy or sell in part.
          Tokenization allows these assets to be divided into smaller shares, enabling fractional ownership and providing liquidity options for investors."
        />
        <SizeItem
          title="Global accessibility"
          iconSrc={"/global.svg"}
          description="Digital tokens can be traded globally, allowing investors from different parts of the world to participate in a decentralized marketplace. This can
          broaden the investor base and increase 
          the potential for asset liquidity."
        />
      </div>
    </>
  );
}

export default Size;
