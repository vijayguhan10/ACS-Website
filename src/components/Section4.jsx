import { useRef, useEffect } from "react";
import gsap from "gsap";

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

const gradients = [
  (angle) =>
    `linear-gradient(${angle}deg, #f4eaff 0%, #fdf6e3 40%, #e0e7ff 70%, #ede9fe 100%)`,
  (angle) =>
    `linear-gradient(${angle}deg, #f8fafc 0%, #ede9fe 40%, #fdf6e3 70%, #e0e7ff 100%)`,
  (angle) =>
    `linear-gradient(${angle}deg, #fdf6e3 0%, #e0e7ff 40%, #ede9fe 70%, #f8fafc 100%)`,
  (angle) =>
    `linear-gradient(${angle}deg, #ede9fe 0%, #f4eaff 40%, #f8fafc 70%, #fdf6e3 100%)`,
];

export default function Section4() {
  return (
    <div className="px-4">
      <h1 className="text-xl sm:text-3xl text-center font-bold mb-8 mt-6">
        ACS delivers ERP, SaaS, and ML-based software solutions that are easy to
        use.
      </h1>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {cards.map((card, idx) => (
          <GradientCard key={idx} card={card} idx={idx} />
        ))}
      </div>
    </div>
  );
}

function GradientCard({ card, idx }) {
  const angleRef = useRef(135);
  const bgRef = useRef(null);

  useEffect(() => {
  
    if (bgRef.current) {
      bgRef.current.style.background = gradients[idx](angleRef.current);
    }
  }, [idx]);

  const animateAngle = (newAngle) => {
    gsap.to(angleRef, {
      current: newAngle,
      duration: 2.5,
      ease: "power2.out",
      onUpdate: () => {
        if (bgRef.current) {
          bgRef.current.style.background = gradients[idx](angleRef.current);
        }
      },
    });
  };

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentX = x / rect.width;
    // Map mouse position to full 360 degree gradient rotation
    const newAngle = Math.round(percentX * 360);
    animateAngle(newAngle);
  };

  const handleLeave = () => {
    animateAngle(135); // reset
  };

  return (
    <div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative rounded-3xl overflow-hidden border border-gray-200 min-h-[200px] p-6"
      style={{ cursor: "pointer" }}
    >
      {/* Background Layer */}
      <div
        ref={bgRef}
        className="absolute inset-0"
        style={{
          borderRadius: "24px",
          transition: "box-shadow 0.2s",
        }}
      />

      {/* Content Layer */}
      <div className="relative z-10">
        <span className="bg-white/80 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block">
          {card.tag}
        </span>
        <h2 className="text-lg font-bold mb-2 text-gray-900">{card.title}</h2>
        <p className="text-sm text-gray-700 mb-3">{card.desc}</p>
        {(card.author || card.date) && (
          <div className="flex items-center gap-2 text-xs text-gray-500 mt-auto pt-2">
            {card.author && <span>{card.author}</span>}
            {card.author && card.date && <span>·</span>}
            {card.date && <span>{card.date}</span>}
          </div>
        )}
      </div>
    </div>
  );
}
