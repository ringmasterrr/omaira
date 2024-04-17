import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

function PrimaryBtn({ children, className }: Props) {
  return (
    <button
      className={`justify-center px-8 py-0 h-12 w-48 text-xl font-medium leading-9 text-center text-white bg-sky-400 rounded ${className}`}
    >
      {children}
    </button>
  );
}

export default PrimaryBtn;
