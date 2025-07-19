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
    <div className="relative flex flex-col items-center justify-center px-2 sm:px-4 overflow-hidden">
      {/* Top left blue ball with path */}
      <div className="hidden lg:block absolute top-4 left-0 z-0">
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
      {/* Top right purple semi-circle */}
      <div className="hidden lg:block absolute top-2 right-0 z-0">
        <svg width="60" height="40" viewBox="0 0 60 40" fill="none">
          <path
            d="M30 0 A30 30 0 0 1 60 30"
            stroke="#b39ddb"
            strokeWidth="6"
            fill="none"
            opacity="0.4"
          />
        </svg>
      </div>
      {/* Bottom left yellow cube */}
      <div className="hidden lg:block absolute left-10 bottom-8 z-0">
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
      {/* Bottom right green cylinder */}
      <div className="hidden lg:block absolute right-0 bottom-8 z-0">
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
      <h1 className="text-xl sm:text-3xl text-center font-bold mb-8 mt-6 max-w-2xl">
        ACS delivers ERP, SaaS, and ML-based software solutions that are easy to
        use.
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
