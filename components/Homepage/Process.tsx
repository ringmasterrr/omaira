"use client";

import React, { useEffect, useState } from "react";
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
      transition={{ duration: 1, delay: 0.2 * no }}
      className="w-full lg:w-[26%] p-4 px-4  "
    >
      <div className="w-full flex flex-col items-center lg:gap-8 border rounded-sm py-12 lg:p-8 justify-start h-full">
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
  const [activeTab, setActiveTab] = useState("Investors");

  return (
    <div className="w-full max-w-screen-2xl items-center justify-center text-center px-4 mx-auto my-8 flex-col lg:flex-row space-y-8 pb-8">
        <Heading text="Our" highlight="Process" />
      <Para text="Omaira is a unique marketplace for forward-thinkers. It is a global leader in innovative, technology-enabled trades for simplicity and convenience. Join now." />
    
      
      <div className="flex justify-center mt-8 gap-8">
        
        <div
          className={`text-3xl font-extrabold text-sky-400 hover: border-b-2 hover:border-blue-400   ${
            activeTab === "Investors" ? "active" : ""
          }`}
          onClick={() => setActiveTab("Investors")}
          style={{ cursor: "pointer" }}
        >
          Investors
        </div>
        <div
          className={`text-3xl font-semibold hover: border-b-2 hover:border-blue-400  ${
            activeTab === "Asset Owners" ? "active" : ""
          }`}
          onClick={() => setActiveTab("Asset Owners")}
          style={{ cursor: "pointer" }}
        >
          Asset Owners
        </div>
      </div>
      <div className={activeTab === "Investors" ? "Investors" : "hidden"}>
        <div className="flex flex-col lg:flex-row mt-16 justify-evenly">
          <ProcessCard
            no={1}
            icon="/p1.svg"
            title="Register"
            text="We have both the processes for investors to register- just by connecting their Web3 wallet and providing a valid email id, or through a complete KYC enabled process of onboarding."
          />
          <ProcessCard
            no={2}
            icon="/p2.svg"
            title="Invest & Trade"
            text="The registered users can invest their funds to buy Security Tokens/Fractions in Primary sale or from secondary market by selecting their choice of asset from Omaira’s Global online marketplace, using fiat currency or cryptocurrency."
          />
          <ProcessCard
            no={3}
            icon="/p3.svg"
            title="Manage Assets"
            text=" After Asset acquisition, users can manage their regulatory complied assets through a comprehensive dashboard, which will display all the details about the asset and will enable the users to liquidate them by listing for sale in the secondary marketplace."
          />
          
        </div>
      </div>
      <div className={activeTab === "Asset Owners" ? "Asset_Owners" : "hidden"}>
        <div className="flex flex-col lg:flex-row mt-16 justify-evenly">
          <ProcessCard
            no={1}
            icon="/onboarding.svg"
            title="Onboarding Requisition"
            text="Asset owners are required to submit an online onboarding form as an expression of interest where they will provide necessary information and documentation of their assets."
          />
          <ProcessCard
            no={2}
            icon="/due.svg"
            title="Due Diligence"
            text="Omaira’s globally specialised team of legal experts will perform due diligence on the asset owner’s application	and process it for further steps, if it is approved by them. If the asset fails the due diligence, a rejection email will be sent from the team to the applicant."
          />
          <ProcessCard
            no={3}
            icon="/corporate.svg"
            title="Corporate structuring"
            text="Post successful due diligence, a corporate structure will be defined for incorporation by Omaira’s legal department, after comprehensive assessment of the asset type, location, owner’s nationality etc."
          />
           <ProcessCard
            no={3}
            icon="/p3.svg"
            title="Tokenisation and Listing"
            text="After successful completion of regulatory compliance, the assets would be tokenised on Omaira Protocol, and would be listed fro sale on the marketplace."
          />

        </div>
      </div>
    </div>
  );
}

export default Process;
