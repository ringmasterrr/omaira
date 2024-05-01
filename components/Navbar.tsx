"use client"

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import CustomDropdown from "./ui/customDropdown";
import PrimaryBtn from "./PrimaryBtn";
import { IoMdCloseCircle } from "react-icons/io";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="w-full sticky bg-white z-50 top-0 py-4">
      <div className="max-w-screen-2xl lg:px-16 mx-auto px-5">
        <div className="flex flex-row gap-5 py-2 items-center justify-between">
          <div className="text-3xl font-extrabold text-sky-400">OMAIRA</div>
          <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
            <svg
              className="w-8 h-8 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </div>
          {/* Register Button */}
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
        </div>
        <nav className="lg:flex hidden">
          <Link href="/">Home</Link>
          <Link href="/About">About</Link>
          <Link href="/Omaira-Protocol">Omaira Protocol</Link>
          <CustomDropdown closeMenu={closeMenu} />
        </nav>
        {isMenuOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-25 z-50">
            <div className="absolute left-0 top-0 h-full bg-white w-64 shadow-lg">
              <nav className="flex flex-col gap-5 py-4 px-8">
                <Link href="/" onClick={closeMenu}>
                  Home
                </Link>
                <Link href="/About" onClick={closeMenu}>
                  About
                </Link>
                <Link href="/Omaira-Protocol" onClick={closeMenu}>
                  Omaira Protocol
                </Link>
                <CustomDropdown closeMenu={closeMenu}/>
              </nav>
              <button
                onClick={closeMenu}
                className="text-gray-600 text-2xl py-2 px-4 rounded-md outline-none absolute top-0 right-0"
              >
                <IoMdCloseCircle />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

