"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import PrimaryBtn from "../PrimaryBtn";
import { useInView } from "react-intersection-observer";

const CTA = () => {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className="w-full max-w-screen-2xl md:px-16 flex gap-16 px-4 mx-auto my-8 flex-col lg:flex-row"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center lg:items-start w-full"
      >
        <div className="flex-col gap-8 md:items-start items-center md:justify-start justify-center flex my-12 px-6">
          <div className="flex md:flex-row flex-col md:items-start gap-2 ">
            <span className="2xl:text-3xl lg:2xl xl:3xl text-4xl pb-0 font-bold md:text-left text-center">
              Team
            </span>
            <span className="2xl:text-3xl lg:2xl xl:3xl text-4xl font-bold text-sky-400 md:text-left text-center">
              & Partnership
            </span>
          </div>
          <p>
            This section should highlight the core team&apos;s background,
            expertise and track record to instil confidence in executing the
            ambitious Omaira vision. It should cover:
          </p>

          <ul className="bulletList pl-6">
            <li>Founders and leadership team bios/experience</li>
            <li>
              Key personnel and advisors in areas like blockchain, finance,
              legal/compliance etc
            </li>
            <li>
              Ongoing and planned strategic partnerships (tech partners,
              investment partners, industry partners etc.)
            </li>
            <li>
              Any notable investors, backers or grants supporting the project
            </li>
          </ul>
        </div>
        <div className="flex-col gap-8 md:items-start items-center md:justify-start justify-center flex my-12 px-6">
          <div className="flex md:flex-row flex-col md:items-start gap-2 ">
            <span className="2xl:text-3xl lg:2xl xl:3xl text-4xl pb-0 font-bold md:text-left text-center">
              Regulatory
            </span>
            <span className="2xl:text-3xl lg:2xl xl:3xl text-4xl font-bold text-sky-400 md:text-left text-center">
              & Security Approach
            </span>
          </div>
          <p>
            While briefly touched upon earlier, a dedicated section detailing
            Omaira&apos;s regulatory compliance framework and security practices
            is crucial: Jurisdictions and regulatory bodies, Omaira is approved
            to operate in
          </p>

          <ul className="bulletList pl-6">
            <li>
              Process for vetting, approving and onboarding tokenization
              projects
            </li>
            <li>KYC/AML practices, investor accreditation verification</li>
            <li>Asset custody, security audits, smart contract security</li>
            <li>Data privacy, compliance reporting and disclosure</li>
          </ul>
        </div>
        <div className="flex-col gap-8 md:items-start items-center md:justify-start justify-center flex my-12 px-6">
          <div className="flex md:flex-row flex-col md:items-start gap-2 ">
            <span className="2xl:text-3xl lg:2xl xl:3xl text-4xl pb-0 font-bold md:text-left text-center">
              Competitive
            </span>
            <span className="2xl:text-3xl lg:2xl xl:3xl text-4xl font-bold text-sky-400 md:text-left text-center">
              Landscape
            </span>
          </div>
          <p>
            A brief overview of the existing RWA tokenization landscape and how
            Omaira differentiates itself:
          </p>

          <ul className="bulletList pl-6">
            <li>Current players and their strengths/weaknesses </li>
            <li>
              Omaira&apos;s unique value proposition (technology, compliance,
              scale, ecosystem etc.)
            </li>
            <li>Competitive advantages and defensive moats</li>
          </ul>
        </div>
        <div className="flex-col gap-8 md:items-start items-center md:justify-start justify-center flex my-12">
          <div className="flex md:flex-row flex-col md:items-start gap-2 ">
            <span className="2xl:text-3xl lg:2xl xl:3xl text-4xl pb-0 font-bold md:text-left text-center">
              Omaira
            </span>
            <span className="2xl:text-3xl lg:2xl xl:3xl text-4xl font-bold text-sky-400 md:text-left text-center">
              Conclusion
            </span>
          </div>
          <div className="bg-[#F5FBFF] p-10 text-lg my-12 space-y-4 ">
            <p>
              The tokenization of real-world assets represents a paradigm shift
              in how we invest, own, and transfer value in the new digital
              economy. By combining the best of blockchain technology with
              traditional financial principles, Omaira Protocol is pioneering an
              open, globally accessible ecosystem to unlock unprecedented
              liquidity across major asset classes.
            </p>
            <p>
              Through its unified infrastructure for RWA tokenization,
              investment, trading, and governance, Omaira empowers asset owners
              to efficiently monetize their holdings by tapping into global
              crypto capital markets. It simultaneously opens new investment
              frontiers for individuals and institutions alike to diversify into
              previously inaccessible alternative assets.
            </p>
            <p>
              Omaira&apos;s frictionless on-chain markets, powered by its native
              OMAI token economy and community governance, enable seamless 24/7
              trading and ownership transfer of tokenized assets across borders.
              This revolutionizes an antiquated system plagued by illiquidity,
              inaccessibility, and excessive rent-seeking by intermediaries.
            </p>
            <p>
              As it continues executing its ambitious roadmap, Omaira is poised
              to become the world&apos;s leading institutional-grade
              tokenization protocol underpinning the future of digital asset
              ownership and liquidity. Its technology stack&apos;s modularity
              and the community&apos;s decentralized governance will foster an
              open, collaborative ecosystem for RWA tokenization.
            </p>
            <p>
              The opportunities enabled by blockchain-based asset tokenization
              are immense - from unlocking trillions of dollars in trapped
              capital to democratizing access to alternative investments on a
              global scale. Omaira Protocol will play a pivotal role in ushering
              this generational transformation by bridging blockchain innovation
              and real-world asset markets.
            </p>
            <p>
              We invite asset owners, investors, builders, and visionaries
              across the world to join us in shaping the future of digital
              ownership and help realize the full potential of tokenized
              economies. The path to a more open, inclusive, and liquid
              financial world starts on Omaira.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CTA;
