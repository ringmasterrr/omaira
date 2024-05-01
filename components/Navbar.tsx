"use client";

import * as React from "react";
import Image from "next/image";
import PrimaryBtn from "./PrimaryBtn";
import Link from "next/link";
import CustomDropdown from "./ui/customDropdown";

const Navbar: React.FC = () => {
  return (
    <div className="w-full sticky bg-white z-50 top-0 py-4">
      <header className="flex flex-row gap-5 py-2 max-w-screen-2xl lg:px-16 mx-auto items-center px-5 text-center lg:flex-row justify-between w-full">
        <div className="text-3xl font-extrabold text-sky-400">OMAIRA</div>
        <nav className="lg:flex flex-wrap gap-10 hidden self-stretch my-auto lg:flex-nowrap lg:max-w-none items-center ">
          <Link href="/">Home</Link>
          <Link href="/About">About</Link>
          <Link href="/Omaira-Protocol">Omaira Protocol</Link>
            <CustomDropdown/>
        </nav>
        <PrimaryBtn className="hidden lg:flex items-center gap-2">
          <Image
            src="/usericon.svg"
            alt=""
            width={20}
            height={20}
            className="shrink-0 my-auto aspect-square"
          />
          <span>Register</span>
        </PrimaryBtn>
      </header>
    </div>
  );
};

export default Navbar;
