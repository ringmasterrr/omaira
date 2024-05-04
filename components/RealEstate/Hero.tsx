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
      className="w-full max-w-screen-2xl flex gap-16 mx-auto my-8 flex-col xl:flex-row lg:px-16"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-screen-2xl flex my-8 flex-col xl:flex-row justify-between xl:items-stretch sm:mx-0 px-5 gap-20"
      >
        <div className="flex flex-col gap-12 xl:w-[50%] w-[80%]">
          <div className="flex flex-col items-start gap-4">
            <span className="2xl:text-4xl lg:2xl xl:3xl text-4xl pb-0 ">
              Tokenization of Real Estate:
            </span>
            <span className="2xl:text-4xl lg:2xl xl:3xl text-4xl font-bold text-sky-400">
              Transforming Property Ownership
            </span>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Introduction</h3>
            <p className="md:text-xl text-base">
              Tokenization has revolutionized various sectors, and real estate
              is experiencing a paradigm shift through this innovative
              technology. This paper delves into the concept of tokenization in
              real estate, outlining its definition, the tokenization process,
              advantages, and future trends.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              Definition of Tokenization in Real Estate
            </h3>
            <p className="md:text-xl text-base">
              Tokenization in real estate involves representing ownership rights
              to real property or real estate assets digitally through
              blockchain-based tokens. These tokens can represent fractional
              ownership or specific rights to income, dividends, or usage of the
              property. By leveraging blockchain technology, tokenization
              enhances liquidity, transparency, and accessibility in the real
              estate market.
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
  );
};

export default Hero;
