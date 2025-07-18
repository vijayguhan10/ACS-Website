import React from "react";

const cards = [
  {
    tag: "AI transformation",
    title: "Our Process & Past Work",
    desc: "We’ve helped clients across industries achieve real results with ERP, SaaS, and ML solutions.",
  },
  {
    tag: "Case Study",
    title:
      "Accelerating Time to Assortment Insights With Build Your Own Brain (BYOB)",
    desc: "Agentic AI solution to transform raw data into an actionable assortment strategy.",
    author: "Upasna Doshi",
    date: "Mar 20, 2025",
  },
  {
    tag: "Case Study",
    title: "AI-driven Multi-Cloud Threat Intelligence",
    desc: "Automated root cause analysis feature and AI-recommended remediation commands.",
    author: "Upasna Doshi",
    date: "Mar 20, 2025",
  },
  {
    tag: "Customer Voice",
    title: "What Our Past Customers Say",
    desc: "“Working with ACS was a game changer for our digital transformation. Their ERP and AI solutions are truly next-level.”",
    author: "Global Pharma Client",
    date: "2024",
  },
];

const cardBg = [
  "bg-gradient-to-br from-white via-[#f3f4f6] to-[#f3f4f6]",
  "bg-gradient-to-br from-[#f8fafc] via-[#ede9fe] to-[#fdf6e3]",
  "bg-gradient-to-br from-[#f8fafc] via-[#e0e7ff] to-[#fdf6e3]",
  "bg-gradient-to-br from-[#f8fafc] via-[#fef3c7] to-[#ede9fe]",
];

const Section4 = () => {
  return (
    <div className="flex flex-col items-center justify-center px-2 sm:px-4">
      <h1 className="text-xl sm:text-3xl text-center font-bold mb-8 mt-6 max-w-2xl">
        ACS delivers ERP, SaaS, and ML-based software solutions that are
        easy to use.
      </h1>
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {cards.map((card, idx) => (
          <div
            key={card.title}
            className={`${cardBg[idx]} rounded-3xl shadow-2xl p-7 border border-gray-100 flex flex-col justify-between min-h-[180px] hover:scale-[1.025] transition-transform duration-200`}
          >
            <span className="bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block w-fit">
              {card.tag}
            </span>
            <h2 className="text-lg font-bold mb-2 text-gray-900">
              {card.title}
            </h2>
            <p className="text-sm text-gray-600 mb-3">{card.desc}</p>
            {(card.author || card.date) && (
              <div className="flex items-center gap-2 text-xs text-gray-500 mt-auto pt-2">
                {card.author && <span>{card.author}</span>}
                {card.author && card.date && <span>·</span>}
                {card.date && <span>{card.date}</span>}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section4;
