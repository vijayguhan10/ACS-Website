import React from "react";
import erpimage from "./../assets/image.png";
import Acs from "./../assets/ACS.jpg";
import { FaBrain, FaUsers, FaLock, FaBolt } from "react-icons/fa";

const stats = [
  { value: "50+", label: "ERP Projects Delivered" },
  { value: "10+", label: "Industries Served" },
  { value: "99.9%", label: "Uptime & Reliability" },
  { value: "100%", label: "Client Satisfaction" },
];

const features = [
  { label: "Custom ERP Development", icon: <FaBrain /> },
  { label: "Expert Software Team", icon: <FaUsers /> },
  { label: "Secure Cloud Solutions", icon: <FaLock /> },
  { label: "Rapid Implementation", icon: <FaBolt /> },
];

const HomePage = () => (
  <div className="min-h-screen bg-white relative overflow-hidden">
    {/* Decorative SVGs */}
    <div className="hidden lg:block absolute top-0 left-0 z-0">
      <svg width="90" height="90" viewBox="0 0 60 60" fill="none">
        <polygon
          points="30,5 55,20 55,50 30,65 5,50 5,20"
          stroke="#b39ddb"
          strokeWidth="3"
          fill="#f4eaff"
          opacity="0.7"
        />
        <polygon
          points="30,5 55,20 30,35 5,20"
          fill="#b39ddb"
          stroke="#7c4dff"
          strokeWidth="2"
          opacity="0.5"
        />
      </svg>
    </div>
    <div className="hidden lg:block absolute top-10 right-0 z-0">
      <svg width="70" height="70" viewBox="0 0 60 60" fill="none">
        <circle cx="40" cy="20" r="14" fill="#7c4dff" opacity="0.18" />
        <circle cx="20" cy="40" r="10" fill="#b39ddb" opacity="0.12" />
      </svg>
    </div>
    <div className="hidden lg:block absolute bottom-0 left-0 z-0">
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        <rect
          x="10"
          y="10"
          width="60"
          height="60"
          rx="18"
          fill="#f4eaff"
          stroke="#b39ddb"
          strokeWidth="2"
          opacity="0.4"
        />
      </svg>
    </div>
    <div className="hidden lg:block absolute bottom-0 right-0 z-0">
      <svg width="100" height="60" viewBox="0 0 100 60" fill="none">
        <ellipse
          cx="80"
          cy="40"
          rx="18"
          ry="10"
          fill="#b39ddb"
          opacity="0.18"
        />
        <ellipse cx="30" cy="20" rx="10" ry="6" fill="#7c4dff" opacity="0.12" />
      </svg>
    </div>
    <div className="hidden lg:block absolute top-6 left-0 z-0">
      {/* Blue Ball with Path */}
      <svg width="60" height="40" viewBox="0 0 60 40" fill="none">
        <circle cx="20" cy="20" r="12" fill="#7c4dff" />
        <path
          d="M0 20 Q10 10 20 20 Q30 30 40 20 Q50 10 60 20"
          stroke="#b39ddb"
          strokeWidth="3"
          fill="none"
          opacity="0.5"
        />
      </svg>
    </div>
    <div className="hidden lg:block absolute top-2 right-0 z-0">
      {/* Purple semi-circle */}
      <svg width="60" height="40" viewBox="0 0 60 40" fill="none">
        <path
          d="M30 0 A30 30 0 0 1 60 30"
          stroke="#7c4dff"
          strokeWidth="6"
          fill="none"
          opacity="0.4"
        />
      </svg>
    </div>
    <div className="hidden lg:block absolute left-10 bottom-8 z-0">
      {/* Yellow Cube */}
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <polygon
          points="30,5 55,20 55,50 30,65 5,50 5,20"
          stroke="#b39ddb"
          strokeWidth="3"
          fill="#fffbe7"
          opacity="0.7"
        />
        <polygon
          points="30,5 55,20 30,35 5,20"
          fill="#fde047"
          stroke="#b39ddb"
          strokeWidth="2"
          opacity="0.6"
        />
      </svg>
    </div>
    <div className="hidden lg:block absolute right-0 bottom-8 z-0">
      {/* Green Cylinder */}
      <svg width="80" height="40" viewBox="0 0 80 40" fill="none">
        <ellipse
          cx="70"
          cy="20"
          rx="10"
          ry="10"
          fill="#22c55e"
          stroke="#b39ddb"
          strokeWidth="3"
          opacity="0.18"
        />
        <line
          x1="10"
          y1="10"
          x2="70"
          y2="20"
          stroke="#b39ddb"
          strokeWidth="3"
          opacity="0.18"
        />
        <line
          x1="10"
          y1="30"
          x2="70"
          y2="20"
          stroke="#b39ddb"
          strokeWidth="3"
          opacity="0.18"
        />
        <line
          x1="10"
          y1="10"
          x2="10"
          y2="30"
          stroke="#b39ddb"
          strokeWidth="3"
          opacity="0.18"
        />
      </svg>
    </div>
    {/* Main Content */}
    <section className="relative z-10 w-full bg-gradient-to-b from-[#f4eaff] via-white to-white pt-12 pb-4">
      {/* Hero Section with subtle gradient */}
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        {/* Content */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <span className="block text-sm font-semibold text-purple-600 mb-2 tracking-wide">
            ERP & AI-Driven Software Solutions
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Empowering Businesses with
            <br />
            ERP & AI Integrations
          </h1>
          <p className="text-gray-700 mb-6 text-base sm:text-lg max-w-md">
            ACS builds secure, scalable ERP solutions with AI integrations to
            automate, optimize, and grow your business.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-xl shadow transition">
            Discover Our ERP & AI Expertise
          </button>
        </div>
        {/* Illustration */}
        <div className="flex justify-center items-center">
          <div>
            <img
              src="https://img.freepik.com/3d-models/v2/E/R/X/R/K/T/E/ERXRKTEZ/seo-dashboard-analytics-icon-poster-2.png?t=st=1752811841~exp=1752815441~hmac=05991eb33f1a096092cf0ebb1abd029fbfed122610db1cec2aad63bb27770777&w=1000"
              alt="ERP & AI Software Illustration"
              className="w-96 h-96 sm:w-80 sm:h-80 object-contain "
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
            alt="ACS Team"
            className="w-40 h-40 sm:w-64 sm:h-64 object-contain"
          />
        </div>
        {/* Content */}
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
            transformation. Our human-centric approach ensures every solution is
            intuitive and easy to use.
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
  </div>
);

export default HomePage;
