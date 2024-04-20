import Image from "next/image";
import React from "react";
import Heading from "../Heading";
import Para from "../Para";

type Props = {};

function Roadmap({}: Props) {
  return (
    <div className="w-full max-w-screen-2xl items-center justify-center text-center px-4 mx-auto my-8 flex-col lg:flex-row space-y-8">
      <Heading text="Omaira" highlight="Roadmap" />
      <Para text="At Omaira, we stand out as the premier choice for tokenisation of real-world assets. Here's why enterprises and institutional investors choose us:" />
      <div className="mt-16">
        <Image
          src={"/roadmap.png"}
          alt=""
          width={1800}
          height={1800}
          className="w-full object-cover hidden md:block p-16 pl-32"
        />

        <Image
          src={"/roadmapmobile.png"}
          alt=""
          width={1800}
          height={1800}
          className="w-full md:hidden object-cover"
        />
      </div>
    </div>
  );
}

export default Roadmap;
