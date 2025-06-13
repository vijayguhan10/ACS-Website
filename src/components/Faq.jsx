import React from "react";

const FAQs = () => {
  const faqs = [
    {
      question: "Customer Support?",
      answer:
        "Dedicated 24/7 support is available through email, chat, and phone to assist with any questions or technical issues.",
    },
    {
      question: "Customization Options?",
      answer:
        "Our AI systems are fully customizable to align with your business goals, workflows, and including encryption and compliance with QORR and other data protection standards.",
    },
    {
      question: "Risk-Free Trial?",
      answer:
        "We offer a risk-free trial period to allow you to experience the benefits of our AI solutions.",
    },
    {
      question: "Performance Benchmarks?",
      answer:
        "We deliver performance benchmarks and provide ongoing optimization to ensure your AI.",
    },
    {
      question: "Performance Benchmarks?",
      answer:
        "We deliver performance benchmarks and provide ongoing optimization to ensure your AI.",
    },
    {
      question: "Performance Benchmarks?",
      answer:
        "We deliver performance benchmarks and provide ongoing optimization to ensure your AI.",
    },
  ];

  return (
    <div className="py-12 px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-6">
          Explore Our FAQs
        </h1>
        <p className="text-base sm:text-lg text-gray-600 mb-12">
          Find quick answers to commonly asked questions about Isaili-AL
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {faqs.map((faq, index) => (
            <div key={index} className="p-6 text-start">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
                {faq.question}
              </h2>
              <p className="text-gray-600 text-sm">{faq.answer}</p>
            </div>
          ))}
        </div>

        <p className="text-base sm:text-lg text-gray-600 mt-12">
          Have a question not listed?{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Contact us
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default FAQs;
