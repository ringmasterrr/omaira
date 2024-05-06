"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import PrimaryBtn from "../PrimaryBtn";
import { useInView } from "react-intersection-observer";
import Heading from "../Heading";

const Hero = () => {
  const { ref, inView } = useInView();

  return (
    <div className="max-w-screen-2xl ">
      <div
        ref={ref}
        className="w-full flex gap-16 mx-auto my-8 flex-col xl:flex-row lg:px-16"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="w-full max-w-screen-2xl flex my-8 flex-col xl:flex-row justify-between xl:items-stretch sm:mx-0 sm:px-0  px-5 gap-20 items-center"
        >
          <div className="flex flex-col gap-12 xl:w-[50%] w-[80%]">
            <div className="flex flex-col md:items-start gap-4">
              <span className="2xl:text-3xl lg:2xl xl:3xl text-4xl pb-0 font-bold md:text-left text-center">
                Omaira Protocol:
              </span>
              <span className="2xl:text-3xl lg:2xl xl:3xl text-4xl font-bold text-sky-400 md:text-left text-center">
                Unlocking Liquidity in Real-World Assets
              </span>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold md:text-left text-center">
                Abstract
              </h3>
              <p className="md:text-xl text-base md:text-left text-center">
                The world&apos;s major asset classes like real estate,
                commodities, fine art and others are plagued by issues of
                illiquidity, lack of accessibility and inefficient markets. For
                most investors, directly owning a piece of premium real estate,
                a mine or a valuable art collection is an inaccessible
                opportunity due to high capital requirements and cumbersome
                investment processes.
              </p>
            </div>

            <div className="space-y-4">
              <p className="md:text-xl text-base md:text-left text-center">
                Omaira Protocol leverages blockchain technology to tokenize
                these real-world assets (RWAs) into liquid, tradable digital
                securities. This unlocks unprecedented levels of liquidity,
                fractionalization and democratized access - allowing anyone to
                invest in and trade ownership of assets that were previously
                off-limits. Omaira&apos;s global marketplace provides an open,
                transparent ecosystem for the issuance, investment and trading
                of tokenized RWAs.
              </p>
            </div>
          </div>

          <video
            autoPlay
            playsInline
            muted
            loop
            className=" shadow-xl object-cover rounded-md xl:w-[50%] w-[90%]"
          >
            <source src="/construction.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center my-12 md:px-16">
        <div className="flex md:flex-row flex-col md:items-start gap-2 ">
          <span className="2xl:text-3xl lg:2xl xl:3xl text-4xl pb-0 font-bold md:text-left text-center">
            Introduction to RWA
          </span>
          <span className="2xl:text-3xl lg:2xl xl:3xl text-4xl font-bold text-sky-400 md:text-left text-center">
            Tokenization
          </span>
        </div>
        <div className="bg-[#F5FBFF] p-10 text-lg my-12 space-y-4 ">
          <p>
            Asset tokenization is the process of converting rights to an
            underlying real-world asset into a digital token on the blockchain.
            This token is a blockchain-based representation of ownership and
            economic interests in the asset. RWA tokens can represent fractions
            of real estate, minerals, agriculture, artwork and virtually any
            asset type.
          </p>
          <p>
            By tokenizing assets, issuers can efficiently raise capital from a
            broader pool of investors globally. Investors gain exposure to an
            entirely new asset class with fractionalized ownership, liquidity
            and transparency - aspects that traditional alternatives have been
            lacking.
          </p>
          <p>
            The global tokenization market is accelerating rapidly, projected to
            grow from $310M in 2020 to over $16B by 2030 as per industry
            reports. This exponential trajectory underscores the immense
            potential and value proposition that tokenization unlocks for RWA
            owners and investors alike.
          </p>
          <p>
            However, the existing RWA tokenization landscape faces major
            limitations around scalability, regulatory compliance,
            standardization and liquidity fragmentation. Isolated tokenization
            platforms with regional or asset-specific offerings have hindered
            widespread adoption.
          </p>
        </div>
      </div>

      <div className="md:px-16 px-4 flex flex-col gap-4">
        <div className="flex md:flex-row flex-col md:items-start gap-2 text-center ">
          <span className="2xl:text-3xl lg:2xl xl:3xl text-4xl pb-0 font-bold md:text-left text-center">
            Omaira
          </span>
          <span className="2xl:text-3xl lg:2xl xl:3xl text-4xl font-bold text-sky-400 md:text-left text-center">
            Protocol
          </span>
        </div>
        <p className="sm:text-start text-center">
        Omaira Protocol is a decentralized, globally accessible platform powering the complete lifecycle of RWA tokenization and trading. Its three core functions are:
        </p>
        <p className="my-8 sm:text-start text-center">
        Omaira&apos;s infrastructure is built as an open protocol, providing a unified global platform to compliantly tokenize virtually any type of RWA. Its tech stack combines elements of decentralized finance (DeFi), non-fungible tokens (NFTs), and traditional finance security token standards. The protocol is governed by an experienced team of promoters which would eventually be transformed into a decentralized autonomous organization (DAO) managed through its native OMI utility token. Token holders can participate in governance voting for protocol upgrades, fee structures, whitelisting and more. OMAI also incentivizes network usage via fee discounts, staking rewards and other mechanisms to be outlined later. In its next phase, Omaira will launch its own Layer 2 Ethereum rollup blockchain optimized for high throughput, scalability and low-cost transactions for RWA token trading.
        </p>
      </div>
    </div>
  );
};

export default Hero;
