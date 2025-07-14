'use client'
import React, {useState} from 'react'
import { ArrowUpRight, Search, search } from "lucide-react";
import Image from "next/image";
import Link from 'next/link';

const blogData = [
  {
    tag: "E-COMMERCE",
    title: "How to Turn Your Physical Store into an Online Shop in Just One Day",
    date: "Aug 30, 2024",
    subtitle:
      "Discover the step-by-step process of transforming your brick-and-mortar business into a fully functional eCommerce store using modern tools like Emventory. No coding, no delays — just rapid digital success.",
    image: "/images/placeholder.png", 
    link: "",
  },
  {
    tag: "E-COMMERCE",
    title: "How to Turn Your Physical Store into an Online Shop in Just One Day",
    date: "Aug 30, 2024",
    subtitle:
      "Discover the step-by-step process of transforming your brick-and-mortar business into a fully functional eCommerce store using modern tools like Emventory. No coding, no delays — just rapid digital success.",
    image: "/images/placeholder.png",
    link: "",
  },
  {
    tag: "E-COMMERCE",
    title: "How to Turn Your Physical Store into an Online Shop in Just One Day",
    date: "Aug 30, 2024",
    subtitle:
      "Discover the step-by-step process of transforming your brick-and-mortar business into a fully functional eCommerce store using modern tools like Emventory. No coding, no delays — just rapid digital success.",
    image: "/images/placeholder.png", 
    link: "",
  },
  {
    tag: "E-COMMERCE",
    title: "How to Turn Your Physical Store into an Online Shop in Just One Day",
    date: "Aug 30, 2024",
    subtitle:
      "Discover the step-by-step process of transforming your brick-and-mortar business into a fully functional eCommerce store using modern tools like Emventory. No coding, no delays — just rapid digital success.",
    image: "/images/placeholder.png",
    link: "",
  },
];

const Bloglist = () => {
    
    const [searchTerm, setSearchTerm] = useState("");
    const filteredData = blogData.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <>
      <section className="tmargin relative bg-white overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden ">
          <div className="absolute w-[800px] h-[300px] bg-blue-500 opacity-20 rounded-full blur-3xl top-[300px] left-[250px] "></div>

          <div className="absolute w-[800px] h-[300px] bg-blue-400 opacity-20 rounded-full blur-2xl top-[1000px] right-[200px] "></div>
        </div>

        <div className="relative z-10 mb-20">
          <div className="flex flex-col justify-center items-center  mb-20 max-w-screen">
            <h1 className="md:text-5xl text-3xl font-extrabold text-center md:my-4 my-2 ">
              The Emventory Journal
            </h1>
            <p className="text-sm md:text-base text-center md:max-w-[60%] w-[90%]  ">
              Stay ahead in the world of retail and eCommerce. The Emventory
              Journal brings you expert tips, industry trends, feature updates,
              and real-world success stories to help you grow, scale, and thrive
              with smart business solutions.
            </p>
          </div>

          <div className="flex md:flex-row flex-col items-start justify-center  ">
            {/*bloglist*/}

            <div className=" md:w-2/3 w-[90%] mx-auto">
              {blogData.map((blog, index) => (
                <div
                  key={index}
                  className=" bg-white rounded-2xl mb-6 p-4 shadow-sm max-w-4xl mx-auto flex gap-10"
                >
                  <div className="flex items-start border border-dashed border-gray-200 p-4 rounded-2xl">
                    <div className=" rounded-md overflow-hidden flex-shrink-0">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        width={400}
                        height={400}
                        className="object-cover w-[200px] h-[200px] md:w-[350px] md:h-[300px]"
                      />
                    </div>
                    <div className="flex flex-col justify-between pl-5 pt-5 flex-grow">
                      <div>
                        <p className="text-xs text-blue-500 font-medium mb-4 uppercase tracking-wide">
                          {blog.tag}
                        </p>
                        <h2 className="text-lg font-semibold text-gray-900 leading-snug">
                          {blog.title}
                        </h2>
                        <p className="text-xs text-gray-500 md:my-2">
                          {blog.date}
                        </p>
                        <p className="text-xs md:text-base text-gray-700">
                          {blog.subtitle}
                        </p>

                        <div className="flex justify-end md:-mt-10 ">
                          <div className="flex justify-center rounded-full w-10 h-10 p-2 bg-blue-500  text-white hover:text-blue-700">
                            <ArrowUpRight size={24} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/*latest part */}
            <div className="md:w-1/3 w-[90%] mx-auto bg-white rounded-2xl p-5 shadow-sm border border-gray-100 overflow-y-auto">
              <div className="border border-dashed border-gray-200 rounded-2xl p-4">
                <div className="relative mb-6">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full px-4 py-2 pl-10 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-100"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    value={searchTerm}
                  />
                  <Search
                    size={16}
                    className="absolute top-2.5 left-3 text-gray-400"
                  />
                </div>

                <h3 className=" font-semibold text-gray-800 mb-4">
                  Latest Articles
                </h3>
                <div className="flex flex-col gap-4">
                  {filteredData.map((blog, index) => (
                    <a
                      key={index}
                      href={blog.link}
                      className="flex items-start gap-3"
                    >
                      <div className="w-20 h-20 bg-gray-200 rounded-md overflow-hidden">
                        <Image
                          src={blog.image}
                          alt="thumbnail"
                          width={40}
                          height={40}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <h4 className="text-base text-gray-900 group-hover:text-blue-600">
                          {blog.title.slice(0, 60)}...
                        </h4>
                        <span className="text-xs text-gray-500">
                          {blog.date}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Bloglist