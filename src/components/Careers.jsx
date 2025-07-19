import React, { useRef } from "react";

const team = [
  {
    name: "Sienna Hewitt",
    role: "Founder & CEO",
    desc: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Ashwin Santiago",
    role: "Engineering Manager",
    desc: "Lead engineering teams at Netflix, Pitch, and Protocol Labs.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Caitlyn King",
    role: "Product Designer",
    desc: "Founding design team at Figma. Former Plio, Stripe, and Tile.",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Owen Garcia",
    role: "Frontend Developer",
    desc: "Former frontend dev for Linear, Coinbase, and Postscript.",
    img: "https://randomuser.me/api/portraits/men/43.jpg",
  },
];

const jobCategories = [
  "View all",
  "Development",
  "Design",
  "Marketing",
  "Customer Service",
  "Operations",
  "Finance",
  "Management",
];

const jobs = [
  {
    title: "Product Designer",
    desc: "We're looking for a mid-level product designer to join our team.",
    tags: ["100% remote", "Full-time"],
    category: "Design",
    link: "#",
  },
  {
    title: "Engineering Manager",
    desc: "We're looking for an experienced engineering manager to join our team.",
    tags: ["100% remote", "Full-time"],
    category: "Management",
    link: "#",
  },
  {
    title: "Customer Success Manager",
    desc: "We're looking for a customer success manager to join our team.",
    tags: ["100% remote", "Full-time"],
    category: "Customer Service",
    link: "#",
  },
];

export default function Careers() {
  const jobsRef = useRef(null);

  const handleViewJobs = () => {
    jobsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative bg-white py-16 px-4 sm:px-8 flex flex-col items-center justify-center overflow-hidden">
      {/* Top left ball */}
      <div className="absolute top-6 left-0">
        <svg width="60" height="40" viewBox="0 0 60 40" fill="none">
          <circle cx="20" cy="20" r="12" fill="#2563eb" />
          <path
            d="M0 20 Q10 10 20 20 Q30 30 40 20 Q50 10 60 20"
            stroke="black"
            strokeWidth="3"
            fill="none"
          />
        </svg>
      </div>
      {/* Top right red semi-circle */}
      <div className="absolute top-2 right-0">
        <svg width="60" height="40" viewBox="0 0 60 40" fill="none">
          <path
            d="M30 0 A30 30 0 0 1 60 30"
            stroke="black"
            strokeWidth="3"
            fill="none"
          />
          <path
            d="M30 0 A30 30 0 0 1 60 30"
            stroke="#ef4444"
            strokeWidth="6"
            fill="none"
          />
        </svg>
      </div>
      {/* Bottom left cube */}
      <div className="absolute left-10 bottom-8">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <polygon
            points="30,5 55,20 55,50 30,65 5,50 5,20"
            stroke="black"
            strokeWidth="3"
            fill="white"
          />
          <polygon
            points="30,5 55,20 30,35 5,20"
            fill="#fde047"
            stroke="black"
            strokeWidth="2"
          />
        </svg>
      </div>
      {/* Bottom right green cylinder */}
      <div className="absolute right-0 bottom-8">
        <svg width="80" height="40" viewBox="0 0 80 40" fill="none">
          <ellipse
            cx="70"
            cy="20"
            rx="10"
            ry="10"
            fill="#22c55e"
            stroke="black"
            strokeWidth="3"
          />
          <line
            x1="10"
            y1="10"
            x2="70"
            y2="20"
            stroke="black"
            strokeWidth="3"
          />
          <line
            x1="10"
            y1="30"
            x2="70"
            y2="20"
            stroke="black"
            strokeWidth="3"
          />
          <line
            x1="10"
            y1="10"
            x2="10"
            y2="30"
            stroke="black"
            strokeWidth="3"
          />
        </svg>
      </div>
      {/* Main Content */}

      {/* Team Section */}
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <span className="inline-block bg-gradient-to-r from-[#b39ddb] to-[#7c4dff] text-white text-xs sm:text-sm font-bold px-5 py-2 rounded-full mb-5 shadow tracking-wide">
            Join ACS – We’re hiring!
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3 text-center leading-tight">
            Meet Our Leadership in
            <br />
            <span className="bg-gradient-to-r from-[#7c4dff] via-[#b39ddb] to-[#f4eaff] bg-clip-text text-transparent">
              ERP & Software Excellence
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#b39ddb] to-[#7c4dff] rounded-full mb-5"></div>
          <p className="text-base sm:text-lg text-gray-600 text-center max-w-2xl leading-relaxed">
            Our leadership team brings decades of experience in building ERP and
            software solutions for global businesses. We combine technical
            expertise with a passion for innovation and client success.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl shadow-lg border border-[#ede7f6] p-7 flex flex-col items-center text-center transition-transform hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover mb-3 border-4 border-[#b39ddb] group-hover:border-[#7c4dff] transition-all shadow"
              />
              <div className="font-bold text-lg text-gray-900 mb-1">
                {member.name}
              </div>
              <div className="text-[#7c4dff] font-semibold text-xs mb-2 tracking-wide uppercase">
                {member.role}
              </div>
              <div className="text-gray-600 text-xs mb-4">{member.desc}</div>
              <a
                href="#"
                className="inline-block px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-[#b39ddb] to-[#7c4dff] rounded-full shadow hover:from-[#7c4dff] hover:to-[#b39ddb] transition-all"
              >
                Connect
              </a>
            </div>
          ))}
        </div>
      </div>
      {/* Jobs Section */}
      <div
        ref={jobsRef}
        className="w-full max-w-5xl mx-auto mt-24 bg-white rounded-3xl shadow-xl p-8"
      >
        <span className="inline-block bg-black text-[#ffd700] text-xs font-semibold px-4 py-1 rounded-full mb-4">
          We're hiring!
        </span>
        <h2 className="text-4xl font-extrabold text-gray-900 mb-2">
          Be part of our mission
        </h2>
        <p className="text-base sm:text-lg text-gray-700 mb-6">
          We're looking for passionate people to join us on our mission. We
          value flat hierarchies, clear communication, and full ownership and
          responsibility.
        </p>
        {/* Categories */}
        <div className="flex flex-wrap gap-3 mb-8">
          {jobCategories.map((cat, i) => (
            <button
              key={cat}
              className={`px-4 py-1 rounded-full border border-gray-300 text-gray-800 font-semibold text-sm transition ${
                i === 0
                  ? "bg-black text-[#ffd700] border-black"
                  : "hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <hr className="mb-4" />
        {/* Job Listings */}
        <div className="space-y-6">
          {jobs.map((job, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row sm:items-center justify-between py-4 border-b border-gray-200 last:border-b-0"
            >
              <div>
                <div className="font-bold text-lg text-gray-900 mb-1">
                  {job.title}
                </div>
                <div className="text-gray-700 mb-2">{job.desc}</div>
                <div className="flex gap-2">
                  {job.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-block bg-gray-100 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={job.link}
                className="mt-4 sm:mt-0 text-base font-bold text-black flex items-center gap-1 hover:text-[#ffd700] transition"
              >
                Apply
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
