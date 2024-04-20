"use client"

import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

type Props = {
  text: string;
};

function Para({ text }: Props) {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <section
      className="text-xl w-full font-semibold mx-auto leading-10 max-w-6xl text-center text-black"
      ref={ref}
    >
      <motion.span
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
          hidden: { opacity: 0, y: 50 },
        }}
      >
        {text}
      </motion.span>
    </section>
  );
}

export default Para;
