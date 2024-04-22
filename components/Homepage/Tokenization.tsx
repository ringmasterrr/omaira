import React from "react";
import Heading from "../Heading";
import Para from "../Para";
import TokenCard from "./TokenCard";
import PrimaryBtn from "../PrimaryBtn";
import Image from "next/image";

type Props = {};

function Tokenization({}: Props) {
  return (
    <div className="w-full max-w-screen-2xl items-center justify-center text-center px-4 mx-auto my-8 flex flex-col gap-8 ">
      <Heading text="What is" highlight="Asset Tokenization" />
      <Para text="Tokenisation is the process of converting the ownership rights of a physical asset into digital tokens on a Blockchain. By tokenising assets, we enable fractional ownership, allowing investors to buy and sell smaller portions of an asset, thereby increasing liquidity and reducing barriers to entry. Through our platform, asset owners can unlock the value of their assets and tap into a global pool of investors, while investors gain access to a diverse range of investment opportunities." />
      <div className="w-full flex mt-8 flex-col lg:flex-row justify-evenly gap-8 items-center ">


    <div className=" rounded-3xl lg:w-[30%] w-[90%]">
      <div className="bg-[#EDF0F9] rounded-3xl   ">
        <div className=" p-8 text-start space-y-20 lg:h-[25rem]">
          
          <h2 className="text-3xl font-semibold text-[#242F65]">
          Tokenisation of Real Estate
          </h2>
          
          <p className="text-[#525665] text-[1.1rem]  font-medium">
          Omaira offers tokenisation of global Real Estate Assests on its highly secure and scalable protocols, which is fully regulated with the concerned jurisdiction.
          </p>

          <button className="justify-center px-8 py-0 h-9 w-40 text-lg font-medium leading-9 text-center text-white bg-sky-400 rounded">Learn More</button>
        </div>
      
      </div>
    </div>

    <div className=" rounded-3xl lg:w-[30%] w-[90%]">
      <div className="bg-[#EDF0F9] rounded-3xl   ">
        <div className=" p-8 text-start space-y-20 lg:h-[25rem]">
          
          <h2 className="text-3xl font-semibold text-[#242F65]">
          Tokenisation of Mines
          </h2>
          
          <p className="text-[#525665] text-[1.1rem]  font-medium">
          We provide highly scalable solutions for tokenisation or metal and mineral mines, unlocking liquidity using our cutting edge Blockchain protocol 
          </p>

          <button className="justify-center px-8 py-0 h-9 w-40 text-lg font-medium leading-9 text-center text-white bg-sky-400 rounded">Learn More</button>
        </div>
      
      </div>
    </div>

    <div className=" rounded-3xl lg:w-[30%] w-[90%]">
      <div className="bg-[#EDF0F9] rounded-3xl   ">
        <div className=" p-8 text-start space-y-20 lg:h-[25rem]">
          
          <h2 className="text-3xl font-semibold text-[#242F65]">
          Tokenisation of Bio Coal
          </h2>
          
          <p className="text-[#525665] text-[1.1rem]  font-medium">
          Omaira’s innovative solution to tokenise Bio Coal, aims to create a carbon-neutral or positive ecosystem, providing service at a global level 
          </p>

          <button className="justify-center px-8 py-0 h-9 w-40 text-lg font-medium leading-9 text-center text-white bg-sky-400 rounded">Learn More</button>
        </div>
      
      </div>
    </div>


      </div>
    </div>
  );
}

export default Tokenization;