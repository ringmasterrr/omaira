import * as React from "react";
import Image from "next/image";

type SubscribeProps = {
  emailPlaceholder: string;
  subscribeButtonText: string;
};

const Subscribe: React.FC<SubscribeProps> = ({
  emailPlaceholder,
  subscribeButtonText,
}) => {
  return (
    <div className=" ">
      <h2 className="self-center text-3xl text-center text-sky-400 leading-8 md:max-w-full md:text-4xl md:leading-[72px]">
        <span className="text-black">Subscribe to our</span>{" "}
        <span className="text-sky-400">Newsletter</span>
      </h2>
      <form className="flex gap-5 lg:mt-10 mt-10 whitespace-nowrap flex-col lg:flex-row md:flex-wrap md:mt-10 md:max-w-full">
        <label htmlFor="email" className="sr-only">
          {emailPlaceholder}
        </label>
        <input
          type="email"
          id="email"
          placeholder={emailPlaceholder}
          aria-label={emailPlaceholder}
          className="grow justify-center items-start px-8 lg:w-96 w-full py-6 text-lg leading-5 bg-white rounded border border-black border-solid text-stone-500 "
        />
        <button
          type="submit"
          className="justify-center px-16 py-2 my-auto text-lg font-semibold leading-9 text-center text-white bg-sky-400 rounded "
        >
          {subscribeButtonText}
        </button>
      </form>
    </div>
  );
};

type FooterLinkProps = {
  label: string;
};

const FooterLink: React.FC<FooterLinkProps> = ({ label }) => {
  return (
    <a
      href="#"
      className="justify-center self-start mt-8 text-lg font-extrabold text-black whitespace-nowrap"
    >
      {label}
    </a>
  );
};

const footerLinks = [
  "About",
  "Contact",
  "Privacy Policy",
  "Terms and Conditions",
];

const Footer: React.FC = () => {
  return (
    <div className="flex  px-4 lg:px-20 pt-20 pb-11 w-full items-center text-center lg:text-left justify-center flex-col bg-sky-400 bg-opacity-20 md:px-5">
      <div className="flex lg:flex-row gap-5 justify-between w-full max-w-screen-2xl  mt-3.5 sm:flex-col   mx-auto flex-col-reverse">
        <div className="flex flex-col-reverse lg:flex-col px-4 lg:px-0 text-center justify-center pt-0.5 pb-3.5 font-bold">
          <div className="flex flex-col flex-wrap  max-h-48 lg:max-h-none mt-2">
            {footerLinks.map((link) => (
              <FooterLink key={link} label={link} />
            ))}
          </div>
          <div className="flex flex-col mt-10 md:mt-10">
            <div className="text-4xl lg:text-left font-normal text-sky-400">
              OMAIRA
            </div>
            <div className="mt-5 text-sm text-black">
              Copyright @Omaira. All rights reserved.
            </div>
          </div>
        </div>
        <div className="h-full lg:gap-56 flex flex-col justify-between">
          <Subscribe
            emailPlaceholder="example@email.com"
            subscribeButtonText="Subscribe"
          />
          <div className="flex lg:justify-end justify-center mt-8 lg:mt-0 gap-5">
            <Image
              src={"/Facebook.png"}
              width={150}
              height={150}
              alt="logo"
              className="w-10 h-10"
            />
            <Image
              src={"/Twitter.svg"}
              width={150}
              height={150}
              alt="logo"
              className="w-10 h-10"
            />
            <Image
              src={"/Instagram.svg"}
              width={150}
              height={150}
              alt="logo"
              className="w-10 h-10"
            />
            <Image
              src={"/LinkedIn.svg"}
              width={150}
              height={150}
              alt="logo"
              className="w-10 h-10"
            />
            <Image
              src={"/YouTube.png"}
              width={150}
              height={150}
              alt="logo"
              className="w-10 h-10"
            />
          </div>
        </div>
      </div>
      <div className="shrink-0 mt-12 h-px bg-black border border-black border-solid md:mt-10 max-w-screen-2xl  w-full" />
      <div className="self-center mt-8 text-lg font-medium leading-5 text-center text-black md:max-w-full">
        Copyright © 2023 Omaira Templates | All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
