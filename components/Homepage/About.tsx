import React from "react";
import Heading from "../Heading";
import Para from "../Para";
import PrimaryBtn from "../PrimaryBtn";
import Image from "next/image";

type Props = {};

function About({}: Props) {
  return (
    <div className="w-full max-w-screen-2xl px-4 mx-auto my-8 flex-col  lg:flex-row">
      <div className="flex-col gap-8 items-center justify-center flex">
        <Heading text="About" highlight="Omaira" />
        <Para text="At Omaira, we are passionate about the potential of Blockchain technology to transform the financial landscape. By leveraging the power of distributed ledger technology, we aim to bridge the gap between the physical and digital worlds, making asset ownership and investment more accessible, efficient, and secure in a completely regulated environment." />
        <PrimaryBtn>Learn More</PrimaryBtn>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center p-2 gap-12 mt-16">
        <div className="lg:w-1/2 w-full">
          <Image
            src={"/about.png"}
            width={870}
            height={676}
            className=""
            alt=""
          />
        </div>
        <div className=" flex flex-col items-center justify-between lg:items-start lg:w-1/2 lg:pl-4  w-full">
          <Heading text="Our" highlight="Vision" />
          <p className=" font-medium text-center lg:text-left text-lg leading-10 mt-8  max-w-2xl">
            Our vision is to pioneer a globally regulated, decentralized
            tokenization protocol that makes the fractionalization and trading
            of real-world assets the new norm. Through our modular blockchain
            infrastructure, we aim to unlock economic value by converting
            traditional assets into tradable digital tokens. This democratizes
            investment access while enhancing liquidity across all asset
            classes. We empower businesses to efficiently monetize their assets
            and investors to seamlessly diversify portfolios globally. Our
            mission is to build an open, transparent financial ecosystem where
            tokenized assets freely flow through unified markets facilitated by
            our compliant protocol, creating inclusive economic opportunities
            worldwide.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
