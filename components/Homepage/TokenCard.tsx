import React from "react";
import PrimaryBtn from "../PrimaryBtn";
import Image from "next/image";

type Props = {};

function TokenCard({}: Props) {
  return (
    <div className=" lg:w-1/2 w-full p-8 overflow-hidden ">
      <div className="bg-[url('/cardbg.png')] bg-cover flex  bg-no-repeat rounded-3xl overflow-hidden">
        <div className="lg:flex hidden flex-col justify-between w-full max-w-[27rem] p-10 pb-8 pt-14 items-start text-left">
          <h2 className="text-4xl font-semibold text-[#242F65]">
            Tokenization of lorem ipsum
          </h2>
          <div className="bg-[#D9DEEE] text-[#6878AC] p-2 w-fit rounded-md px-4">
            Mines
          </div>
          <p className="text-[#525665] text-[1.25rem] font-medium">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <PrimaryBtn>Learn More</PrimaryBtn>
        </div>
        <div className="">
          <Image
            src={"/phone.png"}
            alt=""
            width={500}
            height={500}
            className="w-full ml-6 lg:ml-0 mt-16"
          />
        </div>
      </div>
    </div>
  );
}

export default TokenCard;