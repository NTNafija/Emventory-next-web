import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";


const ProbSolution = () => {
  const features = [
    {
      title: "Inventory Management",
      description: "Track, update, and organize products in real-time.",
      icon: "/images/inventory.png"
    },
    {
      title: "Instant eCommerce Store",
      description: "Launch your online store in just a few clicks.",
      icon: "/images/ecommercestore.png"
    },
    {
      title: "Multi-user Access (for enterprise)",
      description: "Give teams controlled access and manage roles easily.",
      icon: "/images/multiuseraccess.png"
    },
    {
      title: "Sales Analytics",
      description: "View insights and performance with smart dashboards.",
      icon: "/images/sales.png"
    },
    {
      title: "Invoicing and Billing",
      description: "Generate invoices and manage payments seamlessly.",
      icon: "/images/invoicing.png"
    },
    {
      title: "Payment Integrations",
      description: "Accept payments via cards, wallets, and more.",
      icon: "/images/payment.png"
    },
    {
      title: "Customer Management",
      description: "Store, manage, and engage with customer data.",
      icon: "/images/customer.png"
    },
    {
      
      isLastCard: true
    }
  ];


  return (
   <>
   {/*problem and solution section*/}
    <div className=" max-w-[90vw] mx-auto  mt-[130px]">
      <p className="mb-6">Problem vs. Solution</p>
      <div className="flex flex-row gap-8 h-[80vh]">
   
      <div className="relative w-1/3 rounded-xl overflow-hidden  group h-full ">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/images/demo1.png"
            fill
            className="object-cover "
            alt=""
          />
        </div>
<div className="absolute inset-0 glassoverlay"></div>
        <div className="relative z-10 pl-8 pt-12 flex items-center w-4/5 ">
          <h1 className="uppercase font-extrabold text-4xl">
            Managing sales + creating store is time-consuming
          </h1> 
        </div>
      </div>

      <div className="relative w-2/3 rounded-xl overflow-hidden  group h-full">
        <div className=" absolute inset-0 w-full h-full">
          <Image
            src="/images/demo2.png"
            fill
            className="object-cover "
            alt=""
          />
        </div>
        <div className="glassoverlay absolute inset-0"></div>
        <div className="relative z-10 pl-8 pb-12 h-full  w-[60%] flex items-end justify-end">
          <h1 className="uppercase font-extrabold text-4xl ">
            Emventory makes it effortless and fast
          </h1> 
        </div>
      </div>     
      </div>
    </div>

{/*cards section*/}
    <div className="py-[180px] max-w-[90vw] mx-auto overflow-hidden relative ">
      <div className="absolute w-[900px] h-[600px] opacity-50 rounded-full blur-[150px] top-[100px] right-[-150px] -z-50"style={{ backgroundColor: '#F1C16966' }} ></div>   
      
      <div className="absolute w-[350px] h-[250px]  opacity-40 rounded-full blur-[120px] bottom-[100px] left-[-60px] -z-50" style={{ backgroundColor: '#1957B980' }}></div>

      <div className="mb-10">
        <h1 className="text-4xl font-extrabold uppercase mb-4 w-2/5 ">How Emventory automate your business</h1>
        <p className="text-gray-600 font-normal text-xl pl-10 ">Packed with 20+ features for every step of business operations</p>
      </div>

    <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`rounded-lg border border-blue-200 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-blue-300 min-h-[350px]
                  ${feature.isLastCard ? 'bg-blue-500 ' : 'bg-blue-50'}`}
              >
                {!feature.isLastCard ? (
                  <>
                    <div className="mt-4 w-16 h-16">
                      <Image 
                        src={feature.icon} 
                        alt={feature.title}
                        width={100}
                        height={100}
                        className="object-cover"
                      />
                    </div>
                  <div className="">
                     <h3 className="text-2xl font-bold  mb-2 w-4/5">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div> 
                  </>
                ) : (
                <div className=" p-4 flex items-end justify-end h-full ">
                    <Link 
                    href="/features" 
                    className="  text-white font-semibold text-lg "
                  >
                    See all  →
                  </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

{/*onboarding section*/}
<div className=" mx-auto mb-[120px]">
  <div className="text-center ">
    <h1 className="text-4xl font-extrabold uppercase mb-4">Fastest onboarding</h1>
    <p className="text-gray-600 font-normal text-xl">Get up and running in minutes — no technical skills needed. Start selling faster than ever.</p>
  </div>

<div className="flex justify-center max-w-screen-xl ">
 <div className="mt-6 flex flex-row justify-between items-end  gap-4"> 
  <div className="w-1/5 pb-10 mb-4 ">
    <p className="text-blue-700 font-semibold text-3xl hover:underline underline-blue-500 mb-4 flex flex-row items-center gap-4 ">
    Sign Up <BsArrowRight />
    </p>
    <p >Create your account in seconds — no setup hassle.</p>

  </div>
  <div className="w-full h-auto ">
  <Image
    src="/images/demo2.png"
    alt=""
    width={900}
    height={600}
    className="object-cover rounded-xl " />
  </div>
  </div>
</div>
</div>
    </>
  );
}

export default ProbSolution;