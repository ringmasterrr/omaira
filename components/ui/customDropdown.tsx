import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/dropdown";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";


export default function CustomDropdown() {
  return (
    <Dropdown className="outline-none ">
      <DropdownTrigger className="outline-none ">
        <button>
          <span className="flex items-center justify-center gap-2 outline-none ">
            Solutions
          <FaAngleDown />
          </span>
          
        </button>


      </DropdownTrigger>
      <DropdownMenu className="translate-x-16 bg-white outline-none shadow-2xl" aria-label="Link Actions" >
        <DropdownItem className="py-1 px-2 cursor-pointer hover:bg-slate-100 hover:border-slate-200 border-b text-base rounded-sm "> <Link href="/Tokenization-of-Real-Estate">Tokenization of Real Estate</Link> </DropdownItem>
        <DropdownItem className="py-1 px-2cursor-pointer hover:bg-slate-100 hover:border-slate-200 border-b text-base rounded-sm "> <Link href="/Tokenization-of-Mines">Tokenization of Mines</Link> </DropdownItem>
        <DropdownItem className="py-1 px-2 cursor-pointer hover:bg-slate-100 hover:border-slate-200 border-b text-base rounded-sm "> <Link href="/Tokenization-of-Agro-Farms">Tokenization of Agro Farms</Link> </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
