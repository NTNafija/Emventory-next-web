'use client'
import { useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const ScrollSplitLayout = () => {
  const [activeSection, setActiveSection] = useState(0);

  const solutions = [
    {
      navTitle: "Solo Entrepreneurs",
      heading: "MADE FOR EVERYONE — NO MATTER THE SIZE OF YOUR BUSINESS",
      subheading: "Whether you're running a solo side hustle or managing a multi-store enterprise, Emventory adapts to your workflow.",
      title: "Individuals launching personal brands or online stores.",
      items: [
        "Handmade jewelry sellers",
        "Freelance candle makers",
        "Solo bakers selling through social media",
        "Artists selling digital downloads"
      ],
      image: "/images/individual1.png"
    },
    {
      navTitle: "Small Businesses",
      heading: "SCALABLE FOR GROWTH — FROM STARTUP TO ENTERPRISE",
      subheading: "As your business expands, Ermventory grows with you.",
      title: "Small businesses scaling operations",
      items: [
        "Local retail stores expanding online",
        "Cafés opening new locations",
        "Makers transitioning to wholesale",
        "Service providers adding products"
      ],
      image: "/images/individual2.png"
    },
    {
      navTitle: "Enterprises",
      heading: "MULTI-CHANNEL READY — SELL ANYWHERE",
      subheading: "Manage all your sales channels from one dashboard.",
      title: "Cross-platform sellers",
      items: [
        "Social media + website sellers",
        "Marketplace + direct sales",
        "Pop-up + permanent locations",
        "B2B + B2C operations"
      ],
      image: "/images/individual1.png"
    },
    {
      navTitle: "Retail Shops",
      heading: "GLOBAL COMMERCE — BORDERS ARE NO BARRIER",
      subheading: "Handle international sales with ease.",
      title: "Businesses selling worldwide",
      items: [
        "Digital product creators",
        "Niche physical goods makers",
        "Dropshipping operations",
        "International wholesalers"
      ],
      image: "/images/individual2.png"
    }
  ];

  return (
    <div className="flex pb-[40px] min-h-[60vh]  mx-auto scrollbgcolor">
    
    <div className="w-2/5 sticky top-0 h-screen flex flex-col justify-center space-y-4 pl-20">
  {solutions.map((section, index) => (
    <div
      key={index}
      className={`cursor-pointer transition-all  border-l-4 ${
        activeSection === index
          ? 'border-blue-600 text-blue-600 text-4xl font-semibold pl-4'
          : 'border-transparent text-black text-4xl font-semibold'
      }`}
      onClick={() => {
        document.getElementById(`section-${index}`)?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }}
    >
      {section.navTitle}
    </div>
  ))}
</div>


{/*right side */}

      <div className="w-full space-y-32">
        {solutions.map((section, index) => {
          const [ref, inView] = useInView({
            threshold: 0.5,
            triggerOnce: false,
          });

          if (inView && activeSection !== index) {
            setActiveSection(index);
          }

          return (
            <div
              key={index}
              id={`section-${index}`}
              ref={ref}
              className="min-h-screen flex items-center justify-center"
            >
              <div>
           
                <h2 className="text-4xl font-extrabold mb-2">{section.heading}</h2>
                <p className="mb-2 text-gray-700 text-xl">{section.subheading}</p>
             <div className='p-8 w-full h-full -z-500'>
                <Image
                  src={section.image}
                  alt={section.title}
                  width={500}
                  height={300}
                  className="rounded-md"
                />
                </div>              
                <div className= "absolute bg-gray-50 p-6 rounded-xl z-50 w-lg ml-48 -mt-20 ">
                <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                <ul className="list-disc ml-5 text-purple-600 mb-2">
                  {section.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>

              </div>
            </div>  
          </div>
          );
        })}
      </div>
    </div>
  );
};

export default ScrollSplitLayout;
