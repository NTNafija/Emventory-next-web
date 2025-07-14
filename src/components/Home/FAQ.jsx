'use client';

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "What is Webflow and why is it the best website builder?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "What is your favorite template from BRIX Templates?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "How do you clone a Webflow Template from the Showcase?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "Why is BRIX Templates the best Webflow agency out there?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const FAQ = () => {
  return (
    <div className="flex justify-center my-28 ">
      <div className='flex flex-row justify-between mx-auto max-w-[90vw] gap-10'>
        <div className='w-4/12'>
          <h1 className='text-2xl md:text-5xl font-extrabold md:mb-8'>Need Help? Start Here</h1>
          <p className='text-lg lg:text-xl font-medium'>Find quick answers to common questions about Emventory — from setup to features and pricing. Still curious? We’re here to help.</p>
        </div>

        <div className='md:m-3 w-full md:w-8/12'>
          <Accordion type="single" collapsible className="w-full">
            {faqData.map(({ question, answer }, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base md:text-lg m-2 font-normal">
                  {question}
                </AccordionTrigger>
                <AccordionContent>
                  {answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
