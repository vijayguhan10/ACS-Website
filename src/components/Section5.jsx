import React from "react";

const plans = [
  {
    name: "ERP Essentials",
    price: "Get a Quote",
    subtitle: "Custom Pricing",
    note: "Tailored to your business needs",
    button: "Request ERP Quote",
    bg: "bg-violet-50",
    border: "border-violet-100",
    text: "text-purple-700",
    features: [
      "Core ERP Modules",
      "Business Process Automation",
      "SEO-Optimized Web Portal",
      "3 Months Support",
    ],
    audience: "FOR SMALL TEAMS",
  },
  {
    name: "SaaS Suite",
    price: "Get a Quote",
    subtitle: "Custom Pricing",
    note: "Flexible for SaaS products",
    button: "Request SaaS Quote",
    bg: "bg-green-50",
    border: "border-green-100",
    text: "text-green-700",
    badge: "BEST CHOICE",
    badgeColor: "bg-green-600 text-white",
    features: [
      "Custom SaaS Development",
      "Third-Party Integrations",
      "User Management & Analytics",
      "6 Months Support",
    ],
    audience: "FOR GROWING BUSINESS",
  },
  {
    name: "ML Projects",
    price: "Contact the Team",
    subtitle: "Custom Pricing",
    note: "AI & ML based software solutions",
    button: "Contact ACS",
    bg: "bg-orange-50",
    border: "border-orange-100",
    text: "text-orange-700",
    features: [
      "ML Model Integration",
      "Data-Driven Automation",
      "Custom AI Solutions",
      "1 Year Priority Support",
    ],
    audience: "FOR ENTERPRISE & INNOVATORS",
  },
];

const Section5 = () => {
  return (
    <section className="py-20 bg-white">
      <div className="text-center mb-10">
        <div className="text-sm font-semibold text-gray-500 tracking-widest mb-2">
          PRICING
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          The Best Offer for You
        </h2>
      </div>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch max-w-5xl mx-auto">
        {plans.map((plan, idx) => (
          <div
            key={plan.name}
            className={`flex-1 rounded-3xl p-8 shadow-xl border ${plan.border} ${plan.bg} flex flex-col items-center min-w-[280px] relative`}
          >
            {plan.badge && (
              <div
                className={`absolute -top-5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold ${plan.badgeColor} shadow`}
              >
                <span role="img" aria-label="best">
                  👍
                </span>{" "}
                {plan.badge}
              </div>
            )}
            <div className={`text-2xl font-bold mb-2 ${plan.text}`}>
              {plan.name}
            </div>
            <div className="text-3xl font-extrabold text-gray-900 mb-2">
              {plan.price}
            </div>
            <div className="text-sm text-gray-700 mb-1">{plan.subtitle}</div>
            <div className="text-xs text-gray-500 mb-4">{plan.note}</div>
            <button
              className={`w-full mt-2 mb-6 py-2 rounded-full border border-gray-300 font-semibold shadow-sm transition hover:shadow-md ${
                plan.bg === "bg-green-50"
                  ? "bg-green-100 hover:bg-green-200 text-green-800"
                  : plan.bg === "bg-orange-50"
                  ? "bg-orange-100 hover:bg-orange-200 text-orange-800"
                  : "bg-violet-100 hover:bg-violet-200 text-purple-800"
              }`}
            >
              {plan.button}
            </button>
            <div className="text-xs font-bold text-gray-700 mb-2 tracking-widest">
              {plan.audience}
            </div>
            <ul className="text-sm text-gray-800 space-y-2 w-full">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <span className="text-green-500">✔</span> {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section5;
