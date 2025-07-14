'use client';
import React from 'react';
import Image from 'next/image';
import { FaYoutube, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { IoSearchOutline } from "react-icons/io5";
import Link from 'next/link';
import { RiArrowDropDownLine } from "react-icons/ri";


const Footer = () => {

 const links = [
   { name: "Features" },
   { name: "Integrations" },
   { name: "Demo" },
   { name: "Video Tutorial" },
   { name: "Pricing" },
   { name: "FAQ" },
   { name: "Use Cases" },
   { name: "Blog" },
 ];


  return (
    <footer className="bg-[#f0f7fc] text-black text-sm pt-10">
      <div className="max-w-[85vw] mx-auto py-10 px-4 space-y-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Emventory Logo"
              width={180}
              height={120}
            />
          </div>
          <div className="flex border bg-white  overflow-hidden mr-12">
            <div className="flex items-center px-3 ">
              <IoSearchOutline className="w-6 h-6" />
            </div>
            <input
              type="text"
              placeholder="Enter your email to get the latest news..."
              className=" py-2 outline-none text-sm w-64"
            />
            <button className="bg-blue-600 text-white text-sm px-4 py-2">
              Search
            </button>
          </div>
        </div>

        <hr className="border-gray-300 border-1" />

        <div className="flex items-center justify-between  max-w-[80vw] space-y-2 ">
          <div className=" w-3/5 grid grid-cols-4 pl-6 gap-3 mt-2">
            {links.map((link, index) => (
              <span key={index} className=" hover:underline cursor-pointer">
                {link.name}
              </span>
            ))}
          </div>

          <div className="space-y-2">
            <p className=" text-lg ">Join Us</p>
            <div className="flex gap-4 mt-2 text-2xl">
              <FaYoutube />
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedinIn />
            </div>
          </div>
        </div>

        <hr className="border-gray-300 border-1" />

        <div className="flex flex-row justify-between items-center text-black">
          <p className="text-sm">
            mPair Technologies Ltd. © 2025. All rights reserved.
          </p>
          <div className="flex items-center gap-4 mt-2  text-base ">
            <Link href="/home" className="hover:underline hover:text-blue-600">
              Home
            </Link>
            <Link
              href="/services"
              className="hover:underline hover:text-blue-600 flex items-center"
            >
              Services <RiArrowDropDownLine className="h-6 w-8" />{" "}
            </Link>
            <Link href="/blog" className="hover:underline hover:text-blue-600">
              Blog
            </Link>
            <Link
              href="/help center"
              className="hover:underline hover:text-blue-600"
            >
              Help Center
            </Link>
            <Link href="/about" className="hover:underline hover:text-blue-600">
              About
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
