"use client";

import React from "react";
import Heading from "../Heading";
import Para from "../Para";
import TokenCard from "./TokenCard";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

function Tokenization({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full max-w-screen-2xl items-center justify-center text-center px-4 mx-auto my-8 flex flex-col gap-8 "
    >
      <Heading text="What is" highlight="Asset Tokenization" />
      <Para text="Tokenisation is the process of converting the ownership rights of a physical asset into digital tokens on a Blockchain. By tokenising assets, we enable fractional ownership, allowing investors to buy and sell smaller portions of an asset, thereby increasing liquidity and reducing barriers to entry. Through our platform, asset owners can unlock the value of their assets and tap into a global pool of investors, while investors gain access to a diverse range of investment opportunities." />
      <motion.div
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="w-full flex mt-8 flex-col lg:flex-row justify-evenly gap-8 items-center "
      >
        <TokenCard />
      </motion.div>
    </motion.div>
  );
}

export default Tokenization;
