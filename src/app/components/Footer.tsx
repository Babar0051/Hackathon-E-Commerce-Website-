import React from 'react'; 

export default function Footer() {
  return (
    <footer className="bg-white py-10 border-t border-gray-300 -mt-60">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Footer Content Container */}
        <div className="flex flex-wrap justify-between items-center"> {/* Change items-start to items-center */}
          {/* Address Section */}
          <div className="w-full sm:w-auto flex items-center justify-center"> {/* Flex to center content */}
            <p className="text-gray-500 text-sm text-center">
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </p>
          </div>

          {/* Links, Help, and Newsletter Sections (Flex Row) */}
          <div className="flex w-full sm:w-auto justify-between gap-32 mt-8 sm:mt-0"> {/* Increased gap here */}
            {/* Links Section */}
            <div>
              <h3 className="text-xl font-semibold text-gray-700">Links</h3>
              <ul className="mt-4 space-y-6"> {/* Increased space between items */}
                <li><a href="#" className="text-gray-500 hover:text-black">Home</a></li>
                <li><a href="#" className="text-gray-500 hover:text-black">Shop</a></li>
                <li><a href="#" className="text-gray-500 hover:text-black">About</a></li>
                <li><a href="#" className="text-gray-500 hover:text-black">Contact</a></li>
              </ul>
            </div>

            {/* Help Section */}
            <div>
              <h3 className="text-xl font-semibold text-gray-700">Help</h3>
              <ul className="mt-4 space-y-6"> {/* Increased space between items */}
                <li><a href="#" className="text-gray-500 hover:text-black">Payment Options</a></li>
                <li><a href="#" className="text-gray-500 hover:text-black">Returns</a></li>
                <li><a href="#" className="text-gray-500 hover:text-black">Privacy Policies</a></li>
              </ul>
            </div>

            {/* Newsletter Section */}
            <div>
              <h3 className="text-xl font-semibold text-gray-700">Newsletter</h3>
              <p className="text-gray-500 mt-4">Enter Your Email Address</p>
              <div className="flex mt-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="p-2 border border-gray-300 rounded-l-md w-full"
                />
                <button className="p-2 bg-black text-white rounded-r-md">SUBSCRIBE</button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-10 text-gray-500 text-sm">
          <p className="mt-2">2022 Meubel House. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
