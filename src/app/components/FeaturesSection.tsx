// "use client" directive to ensure this component can use client-side functionality
"use client"; 

import Image from "next/image"; 

const FeaturesSection = () => { 
  return ( 
    <div className="bg-[#F9F9F9] py-4"> {/* Further reduced top padding */}
      <div className="container mx-auto px-4"> 
        <div className="flex justify-center gap-8"> 
          {/* Free Delivery Feature */} 
          <div className="flex flex-col items-start justify-center text-left"> {/* Changed items-center to items-start */}
            <div className="w-16 h-16 mb-2"> {/* Reduced bottom margin */}
              {/* Add the icon here */}
            </div> 
            <h3 className="text-xl font-bold text-black">Free Delivery</h3> 
            <p className="mt-1 text-sm text-gray-600">For all orders over $50, consectetur adipim scing elit.</p> {/* Reduced top margin */}
          </div>

          {/* 90 Days Return Feature */} 
          <div className="flex flex-col items-start justify-center text-left"> {/* Changed items-center to items-start */}
            <div className="w-16 h-16 mb-2"> {/* Reduced bottom margin */}
              {/* Add the icon here */}
            </div> 
            <h3 className="text-xl font-bold text-black">90 Days Return</h3> 
            <p className="mt-1 text-sm text-gray-600">If goods have problems, consectetur adipim scing elit.</p> {/* Reduced top margin */}
          </div>

          {/* Secure Payment Feature */} 
          <div className="flex flex-col items-start justify-center text-left"> {/* Changed items-center to items-start */}
            <div className="w-16 h-16 mb-2"> {/* Reduced bottom margin */}
              {/* Add the icon here */}
            </div> 
            <h3 className="text-xl font-bold text-black">Secure Payment</h3> 
            <p className="mt-1 text-sm text-gray-600 text-left">100% secure payment, consectetur adipim scing elit.</p> {/* Reduced top margin */}
          </div> 
        </div> 
      </div> 
    </div> 
  ); 
};

export default FeaturesSection;
