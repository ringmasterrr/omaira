"use client"

import { motion, useAnimation} from "framer-motion";
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
      className="flex flex-col justify-center p-8 w-full items-center text-center lg:text-left lg:items-start lg:w-1/4"
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
        <p className="mt-3 text-lg leading-8 max-w-[14rem] text-slate-600">
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
          <div className="lg:w-1/2 w-full">
            <Image
              src={"/size.png"}
              width={870}
              height={676}
              className=""
              alt=""
            />
          </div>
          <div className=" flex flex-col items-center lg:items-start lg:w-1/2 w-full lg:ml-12 gap-2 ">
            <Heading text="Benefits of" highlight="Tokenisation" />
            <p className=" font-semibold text-center lg:text-left text-lg leading-10 max-w-lg mt-2 ">
              The future of tokenisation holds immense potential for disruption
              and innovation in the financial industry. Key trends shaping the
              future include the expansion into new asset classes, increased
              institutional adoption, enhanced secondary market infrastructure,
              and integration with DeFi and decentralized exchanges. As a
              forward-thinking marketplace, Omaira is at the forefront of these
              developments, committed to driving the future of tokenisation and
              providing our clients with innovative solutions.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full max-w-screen-2xl flex flex-wrap px-4 mx-auto mt-0 flex-col lg:flex-row">
        <SizeItem
          title="Plumbing Services"
          iconSrc={"/sizeicon.svg"}
          description="Drain pipe leaking, pipe clogged, replace the pipe line"
        />
        <SizeItem
          title="Plumbing Services"
          iconSrc={"/sizeicon.svg"}
          description="Drain pipe leaking, pipe clogged, replace the pipe line"
        />
        <SizeItem
          title="Plumbing Services"
          iconSrc={"/sizeicon.svg"}
          description="Drain pipe leaking, pipe clogged, replace the pipe line"
        />
        <SizeItem
          title="Plumbing Services"
          iconSrc={"/sizeicon.svg"}
          description="Drain pipe leaking, pipe clogged, replace the pipe line"
        />
        <SizeItem
          title="Plumbing Services"
          iconSrc={"/sizeicon.svg"}
          description="Drain pipe leaking, pipe clogged, replace the pipe line"
        />
        <SizeItem
          title="Plumbing Services"
          iconSrc={"/sizeicon.svg"}
          description="Drain pipe leaking, pipe clogged, replace the pipe line"
        />
        <SizeItem
          title="Plumbing Services"
          iconSrc={"/sizeicon.svg"}
          description="Drain pipe leaking, pipe clogged, replace the pipe line"
        />
        <SizeItem
          title="Plumbing Services"
          iconSrc={"/sizeicon.svg"}
          description="Drain pipe leaking, pipe clogged, replace the pipe line"
        />
      </div>
    </>
  );
}

export default Size;
