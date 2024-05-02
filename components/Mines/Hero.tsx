"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import PrimaryBtn from "../PrimaryBtn";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className="w-full max-w-screen-2xl flex gap-16 mx-auto my-8 flex-col lg:flex-row lg:px-16"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-screen-2xl flex my-8 flex-col xl:flex-row justify-between xl:items-stretch sm:mx-0 px-5 gap-20"
      >
        <div className="flex flex-col gap-12 xl:w-[50%] w-[80%]">
          <div className="flex flex-col items-center lg:items-start gap-4">
            <span className="2xl:text-4xl lg:2xl xl:3xl text-4xl pb-0 ">
              Tokenization of Mines:
            </span>
            <span className="2xl:text-4xl lg:2xl xl:3xl text-4xl font-bold text-sky-400">
              Revolutionizing the Resource Industry
            </span>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Introduction</h3>
            <p className="md:text-xl text-base">
              Tokenization has emerged as a transformative technology in various
              industries, and the resource sector is no exception. Tokenization
              of mines involves representing ownership or rights to mineral
              assets through digital tokens on a blockchain platform. This paper
              explores the concept of tokenization in the mining industry, its
              processes, advantages, and future implications.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              Definition of Tokenization in Mines
            </h3>
            <p className="md:text-xl text-base">
              Tokenization in mining refers to the digitization of ownership or
              fractional rights to mineral assets using blockchain technology.
              Each token represents a share or portion of the mineral reserves,
              allowing investors to participate in mining projects digitally.
              This process enables fractional ownership, increased liquidity,
              and transparency in the mining sector.
            </p>
          </div>
        </div>

        <video
          autoPlay
          muted
          loop
          playsInline
          className="  shadow-xl object-cover rounded-md xl:w-[50%] w-[80%]"
        >
          <source src="/zen-garden.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </div>
  );
};

export default Hero;
