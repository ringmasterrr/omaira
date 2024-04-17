import Image from "next/image";
import React from "react";
import PrimaryBtn from "../PrimaryBtn";

type Props = {};

function CTA({}: Props) {
  return (
    <div className="w-full max-w-screen-2xl flex gap-16 text-center px-4 mx-auto mt-24 flex-col lg:flex-row">
      <div className="flex flex-col items-center lg:items-start w-full gap-8 lg:w-[45%]">
        <Image
          src={"/shape.svg"}
          alt=""
          width={500}
          height={500}
          className="w-full"
        />
        <h2 className="text-4xl font-bold leading-10 lg:text-left mt-16 lg:ml-4">
          Join us on this journey as we shape the future of finance through
          tokenisation.
        </h2>
        <p className="font-medium text-lg leading-10 lg:text-left lg:ml-4">
          Contact us today to learn more about how Omaira can help you unlock
          the full potential of your assets through tokenisation. Together, let
          {"'"}s seize the opportunities of the digital economy and redefine the
          way we invest in and trade real-world assets.
        </p>
        <PrimaryBtn className="w-64 flex justify-center items-center lg:ml-4">
          Call us Now{" "}
          <Image
            src={"/callicon.svg"}
            alt=""
            width={20}
            height={20}
            className="ml-2 w-9 h-9 bg-white rounded-full p-2"
          />
        </PrimaryBtn>
      </div>
      <div className="lg:w-[55%] w-full">
        <Image
          src={"/cta.png"}
          alt=""
          width={500}
          height={500}
          className="w-full h-full"
        />
      </div>
    </div>
  );
}

export default CTA;
