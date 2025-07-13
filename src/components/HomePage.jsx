import React from "react";
import erpimage from "./../assets/image.png";
import Acs from "./../assets/ACS.jpg";
const stats = [
  { value: "30", label: "Our Experience" },
  { value: "2m", label: "Scans per day" },
  { value: "4k", label: "Top domains secured" },
  { value: "96%", label: "Client satisfaction" },
];

const features = [
  { label: "Expert Problem Solve", icon: "🧠" },
  { label: "Expert Team Members", icon: "👥" },
  { label: "Security Management", icon: "🔒" },
  { label: "Identifying Threats Quick", icon: "⚡" },
];

const HomePage = () => (
  <div className="min-h-screen bg-white ">
    {/* Hero Section with subtle gradient */}
    <section className="w-full bg-gradient-to-b from-[#f3e8ff] via-white to-white pt-12 pb-4">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        {/* Content */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <span className="block text-sm font-semibold text-purple-600 mb-2 tracking-wide">
            Cyber Security Solutions
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            We Offer Cyber Security Solution
            <br />
            to Safeguard
          </h1>
          <p className="text-gray-700 mb-6 text-base sm:text-lg max-w-md">
            Our cyber security solutions are meticulously designed to fortify
            your digital infrastructure against evolving threats.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-xl shadow transition">
            How it Works
          </button>
        </div>
        {/* Illustration */}
        <div className=" justify-center items-center">
          <div className="">
            <img
              src={erpimage}
              alt="Cyber Security Illustration"
              className="w-96 h-96 sm:w-80 sm:h-80 object-contain"
             
            />
          </div>
        </div>
      </div>
      {/* Stats */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 xl:mt-8 px-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-xl shadow p-6 flex flex-col items-center"
          >
            <span className="text-2xl sm:text-3xl font-bold text-purple-600">
              {stat.value}
            </span>
            <span className="text-gray-700 mt-2 text-sm text-center">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>

    {/* About Section */}
    <section className=" py-4 px-4">
      <div className="max-w-5xl mx-auto rounded-3xl shadow-xl bg-white p-4 flex flex-col md:flex-row items-center gap-8">
        {/* Illustration */}
        <div className="flex-1 flex justify-center items-center md:mb-0">
          <img
            src={Acs}
            alt="Company Illustration"
            className="w-40 h-40 sm:w-64 sm:h-64 object-contain"
          />
        </div>
        {/* Content */}
        <div className="flex-1">
          <span className="block text-sm font-semibold text-purple-600 mb-2 tracking-wide">
            About Our Company
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight text-gray-900">
            Over 30+ Years Skills
            <br />
            Cyber Company
          </h2>
          <p className="mb-6 text-base sm:text-lg max-w-md text-gray-700">
            Protecting homes and families is our top priority. Residential
            security services include state systems and proactive threat
            management.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            {features.map((feature) => (
              <div key={feature.label} className="flex items-center gap-2">
                <span className="text-xl">{feature.icon}</span>
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
  </div>
);

export default HomePage;
