import React from "react";
import { LinkedinIcon, Instagram, SendHorizontalIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black rounded-tl-3xl rounded-tr-3xl m-2 sm:m-4 min-h-[18rem] text-gray-300 py-8 sm:py-12">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8 md:gap-0 px-4 sm:px-6 w-full max-w-6xl mx-auto">
        <div className="flex flex-col gap-4 items-start">
          <div className="text-4xl sm:text-7xl font-bold bg-gradient-to-t from-[#64606080] to-[#858181] text-transparent bg-clip-text">
            ACS
          </div>
          <div className="text-md font-bold mt-8 sm:mt-20">
            <p>Copyright © 2025 - ACS-LABS</p>
          </div>
        </div>
        <div className="flex flex-col items-start space-y-4 w-full md:w-auto">
          <div className="text-sm text-white flex flex-col items-start space-y-2 w-full">
            <p className="font-semibold text-lg">Subscribe to Our Newsletter</p>
            <div className="flex items-center space-x-2 sm:space-x-4 w-full">
              <input
                type="email"
                placeholder="Your Email"
                className="p-2 w-full sm:w-96 rounded-md text-black bg-black border-b-2 border-b-white"
              />
              <button className="p-2 rounded-full text-white">
                <SendHorizontalIcon className="text-white" />
              </button>
            </div>
          </div>
          <div className="flex space-x-6 mt-4">
            <a href="#" className="text-white">
              <Instagram />
            </a>
            <a href="#" className="text-white">
              <LinkedinIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
