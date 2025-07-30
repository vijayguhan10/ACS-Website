import React from "react";
import { ArrowUpRight, Eye, ArrowRight, Quote } from "lucide-react";

const feedbacks = [
  {
    name: "Alex Johnson",
    role: "Marketing Lead",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "This platform elevated our brand presence and made collaboration seamless. The UI is simply next-level.",
  },
  {
    name: "Taylor Smith",
    role: "Creative Director",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "The design tools are intuitive and powerful. Our team productivity has soared since switching.",
  },
  {
    name: "Jordan Lee",
    role: "Product Manager",
    img: "https://randomuser.me/api/portraits/men/65.jpg",
    quote:
      "We love the analytics and the modern look. Our clients notice the difference instantly.",
  },
  {
    name: "Morgan Ray",
    role: "Brand Strategist",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    quote:
      "A beautiful, professional experience from start to finish. Highly recommended for any agency.",
  },
];

const landscape = (
  <svg viewBox="0 0 80 80" className="w-full h-full" fill="none">
    <rect width="80" height="80" rx="18" fill="#f4eaff" />
    <ellipse cx="40" cy="60" rx="32" ry="14" fill="#a7f3d0" />
    <ellipse cx="40" cy="50" rx="28" ry="10" fill="#a78bfa" />
    <ellipse cx="40" cy="40" rx="24" ry="8" fill="#fbcfe8" />
  </svg>
);

export default function CustomerFeedback() {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row ">
      {/* Left Section */}
      <div className="flex-1 flex flex-col justify-center px-8 py-12 md:py-0 md:pl-20 relative">
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-block w-2 h-2 rounded-full bg-green-400" />
          <span className="text-xs font-semibold bg-green-100 text-green-700 px-3 py-1 rounded-full">
            Global Agency
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 mb-3">
          The Next Level <br />
          Marketing For <br />
          <span className="text-[#36e1a3]">Your Brand</span>
        </h1>
        <div className="flex items-center gap-2 mb-6">
          <svg width="40" height="24" fill="none" viewBox="0 0 40 24">
            <path
              d="M2 12c8-8 28-8 36 0"
              stroke="#222"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M36 12l-4-4M36 12l-4 4"
              stroke="#222"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <p className="text-gray-500 text-base mb-8 max-w-md">
          Interior design is the art or science of enhancing the interior of a
          environment for the people using the space.
        </p>
        <div className="flex items-center gap-4 mb-10">
          <button className="flex items-center gap-2 bg-green-100 text-green-700 font-semibold px-5 py-2 rounded-full hover:bg-green-200 transition">
            Read More
            <ArrowUpRight className="ml-1 w-4 h-4" />
          </button>
          <button className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition">
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
        
      </div>
      {/* Right Section */}
      <div className="flex-1 flex flex-col items-center justify-center gap-8 px-4 py-8 md:py-0 md:pr-20">
        {/* Feedback Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-lg">
          {feedbacks.map((fb, idx) => (
            <div
              key={fb.name}
              className="relative bg-white/70 backdrop-blur-xl rounded-2xl border border-purple-100 shadow-xl p-6 flex flex-col items-center hover:shadow-2xl transition-all duration-200"
            >
              <Quote className="absolute -top-5 -left-5 text-purple-200 w-8 h-8" />
              <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow mb-3">
                <img
                  src={fb.img}
                  alt={fb.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="font-semibold text-gray-900 text-base">
                {fb.name}
              </div>
              <div className="text-xs text-gray-500 mb-2">{fb.role}</div>
              <div className="italic text-gray-700 text-sm text-center mb-2">
                "{fb.quote}"
              </div>
            </div>
          ))}
        </div>
        {/* Decorative landscape */}
        
        
      </div>
    </div>
  );
}
