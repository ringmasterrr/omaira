import React, { useState } from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/dropdown";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";

interface Props {
  closeMenu: () => void;
}

export default function CustomDropdown({ closeMenu }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    closeMenu(); // Close the menu when a link is clicked
  };

  const handleLink = () => {
    if (window.innerWidth >= 768) {
      toggleMenu();
    } else {
      handleLinkClick();
    }
  };

  return (
    <Dropdown isOpen={isOpen} className="outline-none">
      <DropdownTrigger className="outline-none">
        <button onClick={toggleMenu}>
          <span className="flex items-center justify-start gap-2 outline-none">
            Solutions
            <FaAngleDown />
          </span>
        </button>
      </DropdownTrigger>
      <DropdownMenu className="sm:translate-x-12 translate-x-0 bg-white outline-none sm:shadow-2xl rounded" aria-label="Link Actions">
        <DropdownItem textValue="Tokenization of Real Estate" className="py-1 px-2 cursor-pointer hover:bg-slate-100 hover:border-slate-200 border-b text-base rounded-sm">
          <Link href="/Tokenization-of-Real-Estate" onClick={handleLink} >
            Tokenization of Real Estate
          </Link>
        </DropdownItem>
        <DropdownItem textValue="Tokenization of Mines" className="py-1 px-2 cursor-pointer hover:bg-slate-100 hover:border-slate-200 border-b text-base rounded-sm">
          <Link href="/Tokenization-of-Mines" onClick={handleLink}>
            Tokenization of Mines
          </Link>
        </DropdownItem>
        <DropdownItem textValue="Tokenization of Agro Farms" className="py-1 px-2 cursor-pointer hover:bg-slate-100 hover:border-slate-200 border-b text-base rounded-sm">
          <Link href="/Tokenization-of-Agro-Farms" onClick={handleLink}>
            Tokenization of Agro Farms
          </Link>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
