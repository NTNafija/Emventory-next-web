'use client';
import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function SideScroll() {
  const containerRef = useRef(null);
  const cardCount = 3;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, `-${(cardCount - 1) * 100}%`]);

  const cards = [
    {
      title: 'First Card',
      image: '/images/demo2.png',
      description: 'This is the description for the first card.',
    },
    {
      title: 'Second Card',
      image: '/images/demo2.png',
      description: 'This is the description for the second card.',
    },
    {
      title: 'Third Card',
      image: '/images/demo2.png',
      description: 'This is the description for the third card.',
    },
  ];

  return (
    <section
      ref={containerRef}
      className={`relative w-[${cardCount * 100}vh] overflow-hidden bg-gray-100`}
    >
      <motion.div
        style={{ x }}
        className="flex max w-[300vw] sticky top-0 left-0"
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-screen h-screen flex flex-col  bg-blue-50  p-4"
          >
            <h2 className=" text-3xl font-bold mb-4">{card.title}</h2>
          <div className='w-full h-full flex flex-col  justify-end'>  <Image
              src={card.image}
              alt={card.title}
              width={500}
              height={500}
              className=" object-cover rounded-lg mb-8"
            />
            <p className="text-gray-600 ">{card.description}</p></div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
