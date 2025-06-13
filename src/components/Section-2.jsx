import React from "react";
import { Rocket, Compass, LayoutDashboardIcon } from "lucide-react";
const Section2 = () => {
  return (
    <div className="py-12 px-2 sm:px-6">
      <div className="mx-auto text-center">
        <h1 className="text-2xl sm:text-4xl font-primary font-bold text-gray-900 mb-6">
          Unleash the Power of Our AI Innovations
        </h1>
        <p className="text-base sm:text-lg text-gray-600 mb-8">
          From data processing to intelligent automation, our AI solutions
          seamlessly integrate into your
          <br className="hidden sm:block" />
          existing infrastructure, empowering you to make smarter, faster
          decisions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:w-[75%] mx-auto items-center justify-center gap-6 md:gap-10 text-start">
          <div className="bg-white p-6 rounded-lg shadow-lg items-start">
            <Rocket color="gray" size={30} className="mb-4" />
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
              Products
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Explore our suite of advanced AI solutions designed to automate
              processes, improve decision-making, and deliver transformative
              results for businesses.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Compass color="gray" size={30} className="mb-0" />
              Design
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Redefine digital experiences with our dynamic design expertise,
              crafted to engage users through visually compelling and
              purpose-driven creations.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <LayoutDashboardIcon color="gray" size={30} className="mb-4" />
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
              Customised Products
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Experience our tailored AI services crafted to optimize workflows,
              elevate user experiences, and foster innovation across diverse
              industries and platforms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
