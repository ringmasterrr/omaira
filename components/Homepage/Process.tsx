"use client"

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Heading from "../Heading";
import Para from "../Para";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

type Props = {
  no: number;
  icon: string;
  title: string;
  text: string;
};

function ProcessCard({ no, icon, title, text }: Props) {
  const { ref, inView } = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.5, delay: 0.3 * no }}
      className="w-full lg:w-1/3 p-4 px-4 sm:px-8 xl:px-14 "
    >
      <div className="w-full flex flex-col items-center lg:gap-8 border rounded-sm py-12 lg:p-8 justify-between">
        <div className="bg-sky-400 rounded-full flex justify-center items-center p-2 px-4 text-white font-bold">
          {no}
        </div>
        <div>
          <Image
            src={icon}
            alt=""
            width={64}
            height={64}
            className="shrink-0 w-20 h-20"
          />
        </div>
        <div className="font-bold text-xl">{title}</div>
        <div className="text-center leading-8">{text}</div>
      </div>
    </motion.div>
  );
}

function Process() {
  return (
    <div className="w-full max-w-screen-2xl items-center justify-center text-center px-4 mx-auto my-8 flex-col lg:flex-row">
      <Heading text="Our" highlight="Process" />
      <Para text="Omaira is a unique marketplace for forward-thinkers. It is a global leader in innovative,technology-enabled trades for simplicity and convenience. Join now." />
      <div className="flex justify-center mt-8 gap-8">
        <div className="text-3xl font-extrabold text-sky-400  ">Investors</div>
        <div className="text-3xl font-semibold ">Asset Owners</div>
      </div>
      <div className="flex flex-col lg:flex-row mt-16">
        <ProcessCard
          no={1}
          icon="/p1.svg"
          title="Register your Omaira account"
          text="We have both the processes for investors to register- just by connecting their Web3 wallet and providing a valid email id, or through a complete KYC enabled process of onboarding."
        />
        <ProcessCard
          no={2}
          icon="/p2.svg"
          title="Register your Omaira account"
          text="We have both the processes for investors to register- just by connecting their Web3 wallet and providing a valid email id, or through a complete KYC enabled process of onboarding."
        />
        <ProcessCard
          no={3}
          icon="/p3.svg"
          title="Register your Omaira account"
          text="We have both the processes for investors to register- just by connecting their Web3 wallet and providing a valid email id, or through a complete KYC enabled process of onboarding."
        />
      </div>
    </div>
  );
}

export default Process;
