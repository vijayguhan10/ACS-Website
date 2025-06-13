import React from "react";
import { Code2 } from "lucide-react";

const Section3 = () => {
  return (
    <div className="bg-white w-full sm:w-[90%] md:w-[85%] xl:w-[73%] rounded-2xl mx-auto">
      <div className="mx-auto px-2 sm:px-4 py-8 sm:py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8 sm:mb-16">
          <div>
            <div className="flex items-center gap-2 text-indigo-600 mb-4">
              <Code2 className="w-5 h-5" />
              <span className="font-medium">Our services</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-bold mb-4 max-w-xl">
              Professional Services That Showcase Our Expertise.
            </h1>
          </div>
          <p className="text-gray-600 text-base sm:text-xl mt-4 sm:mt-16">
            From creative design to technical solutions, our
            <br className="hidden sm:block" /> services define industry
            excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:h-auto">
          <div className="bg-[#c7c1c12f] p-6 rounded-3xl">
            <img
              src="https://technastic.com/wp-content/uploads/2020/05/black-edition-v2-minu-dark-samsung-theme.jpg"
              alt="SaaS Products"
              className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
              SaaS Products
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              We offer scalable SaaS products that streamline operations,
              enhance user experience, and provide efficient solutions tailored
              to your business needs.
            </p>
          </div>
          <div className="bg-[#7976f72f] p-6 rounded-3xl h-auto">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
              Outstaffing of IT specialists and project teams
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              We select specialists and connect them to projects in 48 hours.
            </p>
          </div>
          <div className="bg-[#f7e1732f] p-6 rounded-3xl h-auto">
            <img
              src="https://framerusercontent.com/images/AqfUcDzKyJ9nuBlLjaa550Rzo.png?scale-down-to=512"
              alt="SaaS Products"
              className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
              SaaS Products
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              We offer scalable SaaS products that streamline operations,
              enhance user experience, and provide efficient solutions.
            </p>
          </div>

          <div className="bg-[#c7c1c12f] p-6 rounded-3xl h-auto">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
              Designing
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              We provide expert design services that ensure your digital
              platforms are visually appealing, user-centric, and aligned with
              your brand's goals for optimal customer interaction.
            </p>
          </div>
          <div className="bg-[#8ae2ff38] p-6 rounded-3xl h-auto">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
              SaaS Products
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-4">
              We offer scalable SaaS products that streamline operations,
              enhance user experience, and provide efficient solutions tailored
              to your business needs.
            </p>
            <img
              src="https://framerusercontent.com/images/Lk8bryD99CmBUZfyNXCaiSGNA.jpg?scale-down-to=512"
              alt="SaaS Products"
              className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4 mt-4"
            />
          </div>
          <div className="bg-[#c7c1c12f] p-3 rounded-3xl h-auto">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1">
              Mobile Application
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Our mobile app development services create user-friendly,
              high-performance apps that cater to your business goals, offering
              a superior mobile experience for customers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
