"use client";

import React from "react";
import { motion } from "framer-motion";
import Heading from "../Heading";
import Para from "../Para";
import Image from "next/image";
const Roadmap = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full max-w-screen-2xl items-center justify-center text-center px-4 mx-auto my-8 flex-col lg:flex-row space-y-8"
    >
      <Heading text="Omaira" highlight="Roadmap" />
      <div className="bg-[#F5FBFF] p-10 text-lg my-4 space-y-4 ">
        <p>
          The roadmap allows for measured growth while prioritizing security,
          compliance and ecosystem development at each stage. Omaira&apos;s goal
          is to become the world&apos;s leading RWA tokenization protocol and
          marketplace.
        </p>
      </div>
      <div className="mt-16">
        <motion.div
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full object-cover hidden md:block p-16 pl-32"
        >
          <Image src={"/roadmap2.png"} alt="" width={1800} height={1800} />
        </motion.div>

        <motion.div
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full md:hidden object-cover"
        >
          <Image src={"/roadmapmobile2.png"} alt="" width={1800} height={1800} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Roadmap;
