"use client"

import { useEffect} from "react";
import { motion, useAnimation } from "framer-motion"; 
import Heading from "../Heading";
import { useInView } from "react-intersection-observer";
import Para from "../Para";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Props = {};

function FAQ({}: Props) {
  const { ref, inView } = useInView(); 
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <div
      className="w-full max-w-screen-2xl items-center justify-center text-center px-4 mx-auto mt-24 flex-col lg:flex-row"
      ref={ref} 
    >
      <Heading text="Frequently Asked" highlight="Questions" />
      <motion.p
        className="text-center font-medium text-xl max-w-7xl mx-auto mt-8"
        initial={{ opacity: 0, y: 50 }} 
        animate={controls} 
        transition={{ duration: 0.5, delay: 0.2 }} 
      >
        Omaira is a unique marketplace for forward-thinkers. It is a global
        leader in innovative,technology-enabled trades for simplicity and
        convenience. Join now{" "}
      </motion.p>
      <div className="w-full max-w-7xl mx-auto mt-8">
        <Accordion type="single" collapsible className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }} 
            animate={controls} 
            transition={{ duration: 0.5, delay: 0.4 }} 
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>
                FAQ Section under Work-In-Progress?
              </AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit id
                venenatis pretium risus euismod dictum egestas orci netus
                feugiat ut egestas ut sagittis tincidunt phasellus elit etiam
                cursus orci in. Id sed montes.
              </AccordionContent>
            </AccordionItem>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                nemo tempore assumenda rerum ipsam dolorem excepturi unde
                corrupti, quia, quisquam eveniet totam fugit voluptates dolores
                possimus, amet voluptas placeat enim.
              </AccordionContent>
            </AccordionItem>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={controls} 
            transition={{ duration: 0.5, delay: 1 }}
          >
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                provident fuga voluptas dolorum aperiam quas perspiciatis at.
                Tenetur quidem a, in similique impedit magni qui, atque
                doloribus illum corrupti dolorum!
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        </Accordion>
      </div>
    </div>
  );
}

export default FAQ;
