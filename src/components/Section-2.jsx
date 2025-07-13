import React from "react";

const cards = [
  {
    bg: "bg-[#f3f3ff]",
    img: "https://framerusercontent.com/images/xASeFHdEdorYpfxRO7gNNTyfdE.png?scale-down-to=512",
    title: "Digital Marketing",
    desc: "Improve search position with our expert strategies. Boost rankings, increase visibility, and drive organic traffic.",
  },
  {
    bg: "bg-[#f3fff7]",
    img: "https://framerusercontent.com/images/e3bwptZrEnQjz31UxxYMKcZqD4.png?scale-down-to=512",
    title: "Websites & Ecommerce",
    desc: "Reach your target market effectively. Identify, engage, and convert your ideal customers with precision.",
  },
  {
    bg: "bg-[#fff7f3]",
    img: "https://framerusercontent.com/images/cbSNKdqQLqZn6pmHYq0HZF5rKgw.png?scale-down-to=512",
    title: "Consultations",
    desc: "Unlock success with the best strategy. Achieve your goals, outperform competitors, and maximize results.",
  },
];

const Section2 = () => (
  <div className="py-12 px-2 sm:px-6">
    <div className="mx-auto text-center">
      <h1 className="text-2xl sm:text-4xl font-primary font-bold text-gray-900 mb-6">
        Unleash the Power of Our AI Innovations
      </h1>
      <p className="text-base sm:text-lg text-gray-600 mb-8">
        From data processing to intelligent automation, our AI solutions
        seamlessly integrate into your
        <br className="hidden sm:block" />
        existing infrastructure, empowering you to make smarter, faster
        decisions.
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
              <p className="text-gray-600 text-sm sm:text-base">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Section2;
