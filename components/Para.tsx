import React from "react";

type Props = {
  text: string;
};

function Para({ text }: Props) {
  return (
    <section className="text-xl w-full font-medium  mx-auto leading-10 max-w-7xl text-center text-black">
      {text}
    </section>
  );
}

export default Para;
