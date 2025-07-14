'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Plans from './Plans';

const faqData = [
  {
    question: "What is Webflow and why is it the best website builder?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "What is your favorite template from BRIX Templates?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "How do you clone a Webflow Template from the Showcase?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "Why is BRIX Templates the best Webflow agency out there?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [stopSticky, setStopSticky] = useState(false);
  const stickyRef = useRef(null);
  const stickyTriggerRef = useRef(null);
  const faqRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const trigger = stickyTriggerRef.current;
      const faq = faqRef.current;
      const stickyBar = stickyRef.current;

      if (!trigger || !faq || !stickyBar) return;

      const triggerTop = trigger.getBoundingClientRect().top;
      const faqTop = faq.getBoundingClientRect().top;
      const stickyHeight = stickyBar.offsetHeight;

      setIsSticky(triggerTop <= 0);
      setStopSticky(faqTop <= stickyHeight + 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    { name: "Instant eCommerce Store Setup", basic: false, premium: true },
    { name: "Basic Inventory Management", basic: false, premium: true },
    { name: "Single Store Access", basic: false, premium: true },
    { name: "Standard Invoicing & Billing", basic: false, premium: true },
    { name: "Basic Sales Dashboard", basic: false, premium: true },
    { name: "Customer Management", basic: false, premium: true },
  ];

  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'Monthly',
      cta: 'Start using >',
      features: []
    },
    {
      name: 'Essential',
      price: '$92 per month',
      period: 'Monthly',
      cta: 'Start using >',
      features: []
    },
    {
      name: 'Professional',
      price: '$170 per month',
      period: 'Monthly',
      cta: 'Start using >',
      features: []
    },
  ];


  return (
  <>
    <section className='tmargin'>
      <div className='mb-20'>
        <Plans />
      </div>

      <div ref={stickyTriggerRef} />

      <AnimatePresence mode="wait">
        {(isSticky && !stopSticky) && (
        <motion.div
  ref={stickyRef}
  animate={{
    position: isSticky && !stopSticky ? "fixed" : "relative",
    top: isSticky && !stopSticky ?80 : "auto",
    zIndex: isSticky && !stopSticky ? 50 : "auto",
    boxShadow: isSticky && !stopSticky ? "0 2px 8px rgba(0, 0, 0, 0.1)" : "none"
  }}
  transition={{ duration: 0.3 }}
  className="bg-gray-100 w-full"
>
  <div className={`max-w-7xl mx-auto px-4 ${isSticky && !stopSticky ? 'flex items-center justify-center py-4 gap-4' : 'flex flex-row justify-center items-center md:gap-4 gap-2 py-8 mb-20'}`}>
    {isSticky ? (
      <>
        <h1 className="text-lg md:text-3xl font-bold text-gray-900">Plan Comparison</h1>
        <div className="grid grid-cols-3 md:w-[70%] w-full md:gap-6 gap-2">
           {plans.map((plan, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-xs md:text-sm text-gray-500">{plan.period}</span>
                <p className="text-lg md:text-2xl font-bold text-gray-900 mt-1">{plan.price}</p>
              </div>
              <button className="w-[80%] md:py-2 md:px-4 p-2 rounded-md font-medium bg-blue-600 text-white hover:bg-blue-700">
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </>
    ) : (
      <>
        <h1 className="text-lg md:text-3xl font-bold text-gray-900">Plan Comparison</h1>
        <div className="grid grid-cols-3 md:gap-6 gap-2 w-full mt-10">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-xs md:text-sm text-gray-500">{plan.period}</span>
                <p className="text-lg md:text-2xl font-bold text-gray-900 mt-1">{plan.price}</p>
              </div>
              <button className="w-full md:py-2 md:px-4 p-2 rounded-md text-sm md:text-lg font-medium bg-blue-600 text-white hover:bg-gray-700">
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </>
    )}
  </div>
</motion.div>
        )}
      </AnimatePresence>

      {(!isSticky || stopSticky) && (
        <div ref={stickyRef} className="relative py-8 mb-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 flex flex-row justify-center items-center gap-8">
            <h1 className="text-xl md:text-3xl font-bold text-gray-900">Plan Comparison</h1>
            <div className="grid grid-cols-3 gap-2 md:gap-6 w-full ">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-sm text-gray-500">{plan.period}</span>
                    <p className="text-lg md:text-2xl font-bold text-gray-900 mt-1">{plan.price}</p>
                  </div>
                  <button className="w-full md:py-2 md:px-4 p-2 text-sm md:text-lg rounded-md font-medium bg-blue-500 text-white hover:bg-blue-700">
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    
      <div style={{ paddingTop: isSticky ? `${stickyRef.current?.offsetHeight}px` : '0' }}>
          <div className="flex items-center justify-center gap-4">      <span
        className={`text-sm font-medium cursor-pointer transition-colors ${
          !isAnnual ? 'text-gray-900' : 'text-gray-400'
        }`}
        onClick={() => setIsAnnual(false)}
      >  Bill Monthly
      </span>

      <button
        type="button"
        className={`relative inline-flex h-6 w-14 items-center rounded-full transition-colors ${
          isAnnual ? 'bg-[#ADD7F999]' : 'bg-gray-200'
        }`}
        onClick={() => setIsAnnual(!isAnnual)}
        aria-pressed={isAnnual}
        aria-label="Toggle billing period"
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-[#008CFF] transition-all ${
            isAnnual ? 'translate-x-9' : 'translate-x-1'
          }`}
        />
      </button>

      <span
        className={`text-sm font-medium cursor-pointer transition-colors ${
          isAnnual ? 'text-gray-900' : 'text-gray-400'
        }`}
        onClick={() => setIsAnnual(true)}
      >
        Bill Annually
      </span>
    </div>

   <div className='mt-10 flex justify-center '>
     <div className='headings flex justify-between items-center md:gap-10 gap-6 bg-[#D9EEFF] border-1 border-[#ADD7F9] text-lg md:text-xl md:py-6 py-3 md:w-6xl w-full px-14 rounded-full  font-semibold'>

         <span>Features</span>
        <span>Basic</span>
        <span>Premium</span>
    </div> 
    </div>

      <div className="overflow-hidden rounded-lg flex justify-center mb-11 md:mb-20">
      <table className="w-full md:min-w-6xl divide-y divide-gray-200">
        <thead className="hidden">
          <tr className=''>
            <th scope="col" className=" uppercase tracking-wider ">
              Features
            </th>
            <th scope="col" className=" uppercase tracking-wider ">
              Basic
            </th>
            <th scope="col" className=" uppercase tracking-wider ">
              Premium
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 ">
          {features.map((feature, index) => (
            <tr 
              key={index} 
              className="hover:bg-blue-50 transition-colors duration-150 rounded-2xl"
            >
              <td className="px-12 py-4 whitespace-nowrap text-sm  md:text-lg  text-gray-900 w-1/3">
                {feature.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center text-gray-500 w-1/3">
                <span className={feature.basic ? "text-black" : "text-red-500"}>
                  {feature.basic ? "✓" : "✕"}
                </span>
              </td>
              <td className="pr-20 py-4 whitespace-nowrap text-end text-gray-500 w-1/3">
                <span className={feature.premium ? "text-black" : "text-gray-200"}>
                  {feature.premium ? "✓" : "✕"}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>

    {/*faq */}
     <div ref={faqRef} className="flex justify-center bg-gray-50 pt-12 mt-14">
        <div className='flex flex-row justify-between mx-auto max-w-screen-xl lg:gap-14 gap-10'>
          <div className=' w-5/12 '>
            <h1 className='text-2xl md:text-5xl font-bold md:mb-8'>Need Help? Start Here</h1>
            <p className='text-sm md:text-lg'>Find quick answers to common questions about Emventory — from setup to features and pricing. Still curious? We’re here to help</p>
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
    </section>
  </>
  );
};

export default PricingPage;