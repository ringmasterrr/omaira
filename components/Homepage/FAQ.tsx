import React from "react";
import Heading from "../Heading";
import Para from "../Para";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
      <div className="w-full max-w-7xl mx-auto mt-8">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              FAQ Section under Work-In-Progress?
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit id
              venenatis pretium risus euismod dictum egestas orci netus feugiat
              ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci
              in. Id sed montes.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nemo
              tempore assumenda rerum ipsam dolorem excepturi unde corrupti,
              quia, quisquam eveniet totam fugit voluptates dolores possimus,
              amet voluptas placeat enim.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              provident fuga voluptas dolorum aperiam quas perspiciatis at.
              Tenetur quidem a, in similique impedit magni qui, atque doloribus
              illum corrupti dolorum!
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default FAQ;
