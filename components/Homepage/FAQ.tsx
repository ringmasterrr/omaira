import React from "react";
import Heading from "../Heading";
import Para from "../Para";

type Props = {};

function FAQ({}: Props) {
  return (
    <div className="w-full max-w-screen-2xl items-center justify-center text-center px-4 mx-auto mt-24 flex-col lg:flex-row">
      <Heading text="Frequently Asked" highlight="Questions" />
      <p className="text-center font-medium text-xl max-w-7xl mx-auto mt-8">
        Omaira is a unique marketplace for forward-thinkers. It is a global
        leader in innovative,technology-enabled trades for simplicity and
        convenience. Join now{" "}
      </p>
    </div>
  );
}

export default FAQ;
