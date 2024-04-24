"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import PrimaryBtn from "../PrimaryBtn";
import { useInView } from "react-intersection-observer";

const CTA = () => {
  const { ref, inView } = useInView();



  return (
    <div ref={ref} className="w-full max-w-screen-2xl flex gap-16 text-center px-4 mx-auto my-8 flex-col lg:flex-row">
      <motion.div
        initial={{ opacity: 0}}
        animate={{ opacity: inView ? 1 : 0}}
        transition={{ duration: 1 }}
        className="flex flex-col items-center lg:items-start w-full gap-8 lg:w-[45%]"
      >
          <Image src={"/lineshape.svg"} alt="" width={500} height={500} className="w-full" />
       
        <h2 className="text-4xl font-extrabold leading-10 lg:text-left mt-16 lg:ml-2">
          Join us on this journey as we shape the future of finance through tokenisation.
        </h2>
        <p className="font-medium text-lg leading-10 lg:text-left lg:ml-4">
          Contact us today to learn more about how Omaira can help you unlock the full potential
          of your assets through tokenisation. Together, let&apos;s seize the opportunities of the
          digital economy and redefine the way we invest in and trade real-world assets.
        </p>
        <PrimaryBtn className="w-64 flex justify-center items-center lg:ml-4">
          Call us Now{" "}
          <Image src={"/callicon.svg"} alt="" width={20} height={20} className="ml-2 w-9 h-9 bg-white rounded-full p-2" />
        </PrimaryBtn>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
        transition={{ duration: 1}}
        className="lg:w-[55%] w-full"
      >
        <Image src={"/cta.png"} alt="" width={500} height={500} className="w-full h-full" />
      </motion.div>
    </div>
  );
};

export default CTA;
