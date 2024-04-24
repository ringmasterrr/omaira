"use client"

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation  } from "framer-motion";
import Heading from "../Heading";
import Para from "../Para";
import PrimaryBtn from "../PrimaryBtn";
import Image from "next/image";

type Props = {};

const About: React.FC<Props> = () => {
  const controls = useAnimation();
  const ref = useRef(null)
  const inView = useInView(ref)

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="w-full max-w-screen-2xl px-4 mx-auto my-8 flex-col lg:flex-row"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
    >
      <div className="flex-col gap-8 items-center justify-center flex">
        <Heading text="About" highlight="Omaira" />
        <Para text="At Omaira, we are passionate about the potential of Blockchain technology to transform the financial landscape. By leveraging the power of distributed ledger technology, we aim to bridge the gap between the physical and digital worlds, making asset ownership and investment more accessible, efficient, and secure in a completely regulated environment." />
        <PrimaryBtn>Learn More</PrimaryBtn>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:pl-4 p-2 gap-12 mt-16">
        <motion.div
          className="lg:w-1/2 w-full lg:mt-4 lg:ml-12"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Image
            src={"/about.png"}
            width={870}
            height={676}
            className=""
            alt=""
          />
        </motion.div>
        <motion.div
          className="flex flex-col items-center justify-between lg:mt-4 lg:items-start lg:w-1/2 lg:pl-4  w-full gap-2"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Heading text="Our" highlight="Vision" />
          <p className="font-semibold text-center lg:text-left text-lg leading-10 mt-2  max-w-lg">
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
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;

