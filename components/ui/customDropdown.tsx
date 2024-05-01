import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/dropdown";
import Link from "next/link";

export default function CustomDropdown() {
  return (
    <Dropdown className="">
      <DropdownTrigger>
        <button>
          Solutions
        </button>
      </DropdownTrigger>
      <DropdownMenu className="translate-x-16 bg-white outline-none shadow-2xl" aria-label="Link Actions" >
        <DropdownItem className="py-1 px-2 cursor-pointer hover:bg-slate-100 hover:border-slate-200 border-b text-base rounded-sm "> <Link href="/Tokenization-of-Real-Estate">Tokenization of Real Estate</Link> </DropdownItem>
        <DropdownItem className="py-1 px-2cursor-pointer hover:bg-slate-100 hover:border-slate-200 border-b text-base rounded-sm "> <Link href="/Tokenization-of-Mines">Tokenization of Mines</Link> </DropdownItem>
        <DropdownItem className="py-1 pb-2 px-2 cursor-pointer hover:bg-slate-100 hover:border-slate-200 border-b text-base rounded-sm "> <Link href="/Tokenization-of-Agro-Farms">Tokenization of Agro Farms</Link> </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
