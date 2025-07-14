import React from 'react';
import { BsCart3 } from "react-icons/bs";

const Plans = () => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      description: 'A cloud-hosted version of the open source editor you know and love.',
      cta: 'Buy Now',
      popular: false,
      features: [
        '1,000 editor loads per month (then $40 per 1,000 loads)',
        'Cloud-hosted',
        '14-day free trial of advanced features',
        'One domain + subdomains',
        'Professional support',
        'Advanced productivity features',
        'Content embedding & conversion features',
        'Advanced document organization features',
        'Collaboration features',
        'Enhanced Skins & Icons Packs'
      ]
    },
    {
      name: 'Basic',
      price: '$92 per month',
      description: 'For developers looking to expand their application\'s capabilities and usage.',
      cta: 'Buy Now',
      popular: false,
      features: [
        '5,000 editor loads per month (then $40 per 1,000 loads)',
        'Commercial license',
        'Cloud-hosted',
        'Professional support',
        'Advanced productivity features',
        'Content embedding & conversion features',
        'Advanced document organization features',
        'Collaboration features',
        'Enhanced Skins & Icons Packs',
        'One domain + subdomains',
        'AI-Assistant',
        'Math Equations',
        'Import from Word',
        'Export to Word',
        'Export to PDF'
      ]
    },
    {
      name: 'Premium',
      price: '$170 per month',
      description: 'For teams looking to enhance the user experience with powerful features and compliance capabilities.',
      cta: 'Buy Now',
      popular: true,
      features: [
        '20,000 editor loads per month (then $40 per 1,000 loads)',
        'Commercial license',
        'Cloud-hosted',
        'Professional support',
        'Advanced productivity features incl. PowerPaste',
        'Advanced content embedding & conversion features',
        'Advanced document organization features',
        'Advanced collaboration features',
        'Compliance features',
        'Enhanced Skins & Icons Packs',
        'Professionally Translated Language Packs',
        'One domain + subdomains',
        'AI-Assistant',
        'Import from Word',
        'Export to Word',
        'Export to PDF'
      ]
    },
    
  ];

  return (
    <div className="  md:mx-auto mt-6 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Pricing Plans</h2>
        
        <div className="grid grid-cols-3 md:gap-10 gap-4 md:w-full w-[95%] mx-auto ">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg ${
                plan.popular ? 'ring-2 ring-blue-500 transform md:-translate-y-2 bg-white' : 'bg-white border border-gray-200'
              }`}
            >
              {plan.popular && (
               <div className='flex justify-center mb-2'>
                 <div className="absolute top-0 flex items-center ring-1 ring-blue-500  text-xs font-semibold md:px-4 md:py-2 p-1 rounded-full shadow-md z-100 ">
                    <p>Most popular</p>
                </div>
                </div>
              )}
              
              <div className="md:m-6 m-4 ">
                <h3 className="text-lg md:text-xl font-bold text-gray-900">{plan.name}</h3>
                <p className="md:my-2 text-2xl md:text-3xl font-extrabold text-gray-900">
                  {plan.price}
                </p>
                <p className="mt-2 text-gray-600 text-sm">{plan.description}</p>
                
               <div className='flex justify-center'>
                 <button
                  className={`md:mt-6 mt-3 md:w-2/3 text-sm md:text-lg flex justify-center items-center gap-2 md:p-4 p-3 rounded-md font-medium transition-colors duration-200 ${
                    plan.popular 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-gray-100 text-gray-800 hover:bg-blue-500 hover:text-white'
                  }`}
                >
                 <BsCart3 /> {plan.cta}
                </button>
                </div>
                
                <ul className="md:mt-8 mt-4 md:space-y-3 space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center md:items-start">
                      <svg className="flex-shrink-0 md:h-5 md:w-5 h-3 w-3 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-xs md:text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plans;