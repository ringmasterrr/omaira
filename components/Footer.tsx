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
    <div className="flex flex-col self-start md:max-w-full">
      <h2 className="self-center text-5xl text-center text-sky-400 leading-[76.8px] md:max-w-full md:text-4xl md:leading-[72px]">
        <span className="text-black">Subscribe to our</span>{" "}
        <span className="text-sky-400">Newsletter</span>
      </h2>
      <form className="flex gap-5 mt-20 whitespace-nowrap md:flex-wrap md:mt-10 md:max-w-full">
        <label htmlFor="email" className="sr-only">
          {emailPlaceholder}
        </label>
        <input
          type="email"
          id="email"
          placeholder={emailPlaceholder}
          aria-label={emailPlaceholder}
          className="grow justify-center items-start px-8 w-96 py-4 text-lg leading-5 bg-white rounded border border-black border-solid text-stone-500  md:px-5 md:max-w-full"
        />
        <button
          type="submit"
          className="justify-center px-8 py-5 my-auto text-2xl font-semibold leading-9 text-center text-white bg-sky-400 rounded md:px-5"
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
      className="justify-center self-start mt-8 text-base text-black whitespace-nowrap"
    >
      {label}
    </a>
  );
};

const footerLinks = [
  "Why Graphite?",
  "About",
  "FAQs",
  "Contact",
  "Privacy Policy",
  "Terms and Conditions",
];

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col px-20 pt-20 pb-11 w-full bg-sky-400 bg-opacity-20 md:px-5">
      <div className="flex gap-5 justify-between w-full max-w-screen-2xl mt-3.5 md:flex-wrap  mx-auto">
        <div className="flex flex-col justify-center pt-0.5 pb-3.5 font-bold">
          {footerLinks.map((link) => (
            <FooterLink key={link} label={link} />
          ))}
          <div className="flex flex-col mt-10 md:mt-10">
            <div className="text-4xl text-left font-light text-sky-400">
              OMAIRA
            </div>
            <div className="mt-5 text-sm text-black">
              Copyright @Omaira. All rights reserved.
            </div>
          </div>
        </div>
        <Subscribe
          emailPlaceholder="example@email.com"
          subscribeButtonText="Subscribe"
        />
      </div>
      <div className="shrink-0 mt-12 h-px bg-black border border-black border-solid md:mt-10 md:max-w-full" />
      <div className="self-center mt-8 text-lg leading-5 text-center text-black md:max-w-full">
        Copyright © 2023 Omaira Templates | All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
