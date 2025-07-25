import React from "react";
import { LinkedinIcon, Instagram, SendHorizontalIcon } from "lucide-react";

const Footer = () => {
  return (
    <>
      {/* Call-to-action section */}
      <section className="w-full bg-[#f9f4fa] py-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6 gap-12">
          {/* Left: Text */}
          <div className="flex-1">
            <h1 className="text-3xl  sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Start Building Awesome Websites
              <br />
              Today
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-xl">
              Create stunning, responsive, and user-friendly websites tailored
              to your business needs.
              <br />
              Nexus Info ensures professional design, seamless functionality,
              and optimal performance to enhance your online presence and
              achieve your goals.
            </p>
            <button className="bg-[#b39ddb] hover:bg-[#7c4dff] text-white font-semibold px-8 py-3 rounded-full shadow transition text-lg">
              Contact Us
            </button>
          </div>
          {/* Right: Image */}
          <div className="flex-1 flex justify-center items-center">
            <img
              src="https://framerusercontent.com/images/FBWr9OgMRYKbWHAHTJpNCTdCCU.png"
              alt="Lavender Illustration"
              className="w-80 h-80 object-contain"
            />
          </div>
        </div>
      </section>
      

      {/* Existing footer */}
      <footer className="bg-black rounded-tl-3xl rounded-tr-3xl m-2 sm:m-4 min-h-[18rem] text-gray-300 py-8 sm:py-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8 md:gap-0 px-4 sm:px-6 w-full max-w-6xl mx-auto">
          <div className="flex flex-col gap-4 items-start">
            <div className="text-4xl sm:text-7xl font-bold bg-gradient-to-t from-[#b39ddb] to-[#7c4dff] text-transparent bg-clip-text">
              ACS
            </div>
            <div className="text-md font-bold mt-8 sm:mt-20">
              <p>Copyright © 2025 - ACS-LABS</p>
            </div>
          </div>
          <div className="flex flex-col items-start space-y-4 w-full md:w-auto">
            <div className="text-sm text-white flex flex-col items-start space-y-2 w-full">
              <p className="font-semibold text-lg">
                Subscribe to Our Newsletter
              </p>
              <div className="flex items-center space-x-2 sm:space-x-4 w-full">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="p-2 w-full sm:w-96 rounded-md text-black bg-black border-b-2 border-b-[#b39ddb]"
                />
                <button className="p-2 rounded-full text-white bg-[#b39ddb] hover:bg-[#7c4dff] transition">
                  <SendHorizontalIcon className="text-white" />
                </button>
              </div>
            </div>
            <div className="flex space-x-6 mt-4">
              <a
                href="#"
                className="text-[#b39ddb] hover:text-[#7c4dff] transition"
              >
                <Instagram />
              </a>
              <a
                href="#"
                className="text-[#b39ddb] hover:text-[#7c4dff] transition"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
