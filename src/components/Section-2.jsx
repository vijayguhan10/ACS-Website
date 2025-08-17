import React from "react";
import Acs from "./../assets/ACS.jpg";
import { FaBrain, FaUsers, FaLock, FaBolt } from "react-icons/fa";

const Section2 = () => {
  console.log("Section2 rendered");

  const cards = [
    {
      bg: "bg-[#f3f3ff]",
      img: "https://framerusercontent.com/images/xASeFHdEdorYpfxRO7gNNTyfdE.png?scale-down-to=512",
      title: "ERP Solutions",
      desc: "Custom ERP systems to automate, optimize, and scale your business processes.",
    },
    {
      bg: "bg-[#f3fff7]",
      img: "https://framerusercontent.com/images/e3bwptZrEnQjz31UxxYMKcZqD4.png?scale-down-to=512",
      title: "SaaS Product Development",
      desc: "Tailored SaaS products designed for your unique business needs and seamless user experience.",
    },
    {
      bg: "bg-[#fff7f3]",
      img: "https://framerusercontent.com/images/cbSNKdqQLqZn6pmHYq0HZF5rKgw.png?scale-down-to=512",
      title: "ML Integrations & Projects",
      desc: "Machine learning solutions and integrations to unlock data-driven insights and automation.",
    },
  ];
  const features = [
    { label: "Custom ERP Development", icon: <FaBrain /> },
    { label: "Expert Software Team", icon: <FaUsers /> },
    { label: "Secure Cloud Solutions", icon: <FaLock /> },
    { label: "Rapid Implementation", icon: <FaBolt /> },
  ];
  return (
    <div className="xl:relative xl:bottom-12">
      <section className=" py-4 px-4">
        <div className="max-w-5xl mx-auto rounded-3xl shadow-xl bg-white p-4 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 flex justify-center items-center md:mb-0">
            <img
              src={Acs}
              alt="ACS Team"
              className="w-40 h-40 sm:w-64 sm:h-64 object-contain"
            />
          </div>
          <div className="flex-1">
            <span className="block text-sm font-semibold text-purple-600 mb-2 tracking-wide">
              About ACS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight text-gray-900">
              Your Trusted Partner in
              <br />
              Software Development
            </h2>
            <p className="mb-6 text-base sm:text-lg max-w-md text-gray-700">
              With decades of experience, ACS delivers robust ERP and software
              solutions that optimize business processes and enable digital
              transformation. Our human-centric approach ensures every solution
              is intuitive and easy to use.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {features.map((feature) => (
                <div key={feature.label} className="flex items-center gap-2">
                  {feature.icon}
                  <span className="text-sm text-gray-800">{feature.label}</span>
                </div>
              ))}
            </div>
            <button className="bg-purple-50 hover:bg-purple-100 text-purple-700 font-semibold px-6 py-3 rounded-xl shadow transition">
              Learn More &rarr;
            </button>
          </div>
        </div>
      </section>
      <div className="py-12 px-2 sm:px-6">
        <div className="mx-auto text-center">
          <h1 className="text-2xl sm:text-4xl font-primary font-bold text-gray-900 mb-6">
            ERP, SaaS & ML Solutions for Modern Business
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-8">
            ACS delivers ERP, customized SaaS products, and machine learning
            integrations to help your business grow smarter and faster.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:w-[75%] mx-auto items-stretch">
            {cards.map((card) => (
              <div
                key={card.title}
                className={`${card.bg} rounded-2xl shadow-lg flex flex-col items-center p-6`}
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-40 h-40 object-contain mb-4"
                />
                <div className="bg-white rounded-xl shadow p-4 w-full -mt-8">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    {card.title}
                  </h2>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
