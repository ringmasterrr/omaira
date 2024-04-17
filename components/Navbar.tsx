import * as React from "react";
import Image from "next/image";
import PrimaryBtn from "./PrimaryBtn";

interface NavItemProps {
  children: React.ReactNode;
  className?: string;
}

const NavItem: React.FC<NavItemProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`text-lg cursor-pointer hover:text-sky-500 leading-none duration-200 text-black ${className}`}
    >
      {children}
    </div>
  );
};

const navItems = [
  { label: "Home", className: "font-bold text-sky-400" },
  { label: "About" },
  { label: "Omaira Protocol", className: "lg:flex-auto" },
  { label: "Solutions" },
  { label: "Whitepaper", className: "lg:flex-auto" },
];

const Navbar: React.FC = () => {
  return (
    <div className="w-full sticky  bg-white z-50 top-0">
      <header className="flex flex-row gap-5 py-2 max-w-screen-2xl lg:px-16 mx-auto items-center px-5 text-center lg:flex-row justify-between w-full">
        <div className=" text-3xl font-extrabold text-sky-400">OMAIRA</div>
        <nav className="lg:flex flex-wrap gap-10 hidden self-stretch my-auto lg:flex-nowrap lg:max-w-none">
          {navItems.map((item, index) => (
            <NavItem key={index} className={item.className}>
              {item.label}
            </NavItem>
          ))}
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
        <div className="lg:hidden">
          <Image src="/menu.svg" alt="" width={20} height={20} />
        </div>
      </header>
    </div>
  );
};

export default Navbar;
