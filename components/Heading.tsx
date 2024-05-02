'use client'
import { useRef , useEffect} from "react";
import { motion, useAnimation, useInView } from "framer-motion";

type Props = {
  text: string;
  highlight: string;
};

function Heading({ text, highlight }: Props) {

  const controls = useAnimation();
  const ref = useRef(null)
  const inView = useInView(ref)

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div className="text-4xl lg:text-5xl flex gap-4 text-center sm:leading-[76.8px] leading-10  flex-wrap justify-center" ref={ref}>
     
      <motion.span
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
          hidden: { opacity: 0, y: 50 },
        }}
        className="font-medium"
      >
        {text}
      </motion.span>

      <motion.span
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.1 } },
          hidden: { opacity: 0, y: 50 },
        }}
        className="font-bold text-sky-400"
      >
        {highlight}
      </motion.span>

    </div>
  );
}

export default Heading;
