import React from "react";

type Props = {};

function HorizontalLine({}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1421"
      height="2"
      viewBox="0 0 1421 2"
      fill="none"
      className="max-w-7xl w-full mx-auto"
    >
      <path d="M3.05176e-05 1H1421" stroke="url(#paint0_linear_1_131)" />
      <defs>
        <linearGradient
          id="paint0_linear_1_131"
          x1="1543.61"
          y1="1.48991"
          x2="-70.7012"
          y2="1.42352"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#0040E4" />
          <stop offset="0.520833" stop-color="#4E65B6" />
          <stop offset="0.98" stop-color="#0038FF" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default HorizontalLine;
