import React from "react";

type Props = {
  text: string;
  highlight: string;
};

function Heading({ text, highlight }: Props) {
  return (
    <div className="text-5xl flex gap-4 text-center leading-[76.8px]  flex-wrap justify-center">
      <span className="font-medium">{text} </span>
      <span className="font-bold text-sky-400">{highlight}</span>
    </div>
  );
}

export default Heading;
