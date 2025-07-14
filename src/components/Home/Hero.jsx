'use client'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6';


const Hero = () => {
  return (
    <>
     <section className="tmargin relative overflow-hidden min-h-screen max-w-screen mx-auto ">
      <div className="glow-circle-top" />
      <div className="glow-circle-bottom" />

        <div className="z-10 flex flex-col justify-center">
           <h1 className="md:w-[70%] mx-auto text-4xl md:text-6xl font-bold text-center"  >
            Turn Your Store into a Thriving 
             eCommerce Website — 
            <span className="bg-gradient-to-r from-[#79c0fb] to-[#005ACC] bg-clip-text text-transparent"> Instantly </span>
          </h1>
         
          <p className='md:w-8/12 w-10/12 mx-auto md:mt-8 mt-6 text-center text-base lg:text-xl'>Emventory empowers you to launch a full-featured online store in just minutes. Manage your inventory, 
          process sales, and grow your business effortlessly — all from one powerful POS platform.</p>

        </div> 
        <div className="md:mt-8 mt-6  flex flex-row gap-4 justify-center">
          <button className="bg-[#007BFF] hover:bg-[#006ae6] text-white md:px-6 md:py-2 p-3 text-xs md:text-base rounded-full font-medium shadow-md flex items-center gap-2 w-fit">
            See our plans  <FaArrowRight />
          </button>
          <button className= "border border-gray-300 md:px-6 md:py-2 p-3  text-xs md:text-base rounded-full font-medium hover:shadow-md flex items-center gap-2 w-fit">
            How it works <FaArrowRight />
          </button>
        </div>
        
          <div className="flex gap-10 mt-20 z-10 justify-center"> 
            <div className="w-40 h-40 bg-gray-200  rounded-lg " />
            <div className="w-40 h-40 bg-gray-200 rounded-lg " />
            <div className="w-40 h-40 bg-gray-200 rounded-lg " />
          </div>
          
      </section>
    </>
  );
}

export default Hero