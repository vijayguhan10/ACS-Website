import React from "react";

const services = [
  {
    name: "Nadhiyai-Daillo",
    description: "Telephony AI",
  },
  {
    name: "Nadhiyai Whisper",
    description: "Voice AI that can be integrated wherever he want",
  },
  {
    name: "Nadhiyai Assist",
    description: "Chatbot that can be integrated to their website in 1 click",
  },
  {
    name: "Whatsapp",
    description: "AI agent for WhatsApp",
  },
  {
    name: "Instagram",
    description: "AI agent for Instagram",
  },
  {
    name: "Custom Chat",
    description: "AI-powered Custom Chat",
  },
  {
    name: "CustomVoice",
    description: "AI agent for Custom Voice",
  },
  {
    name: "Marketplace",
    description: "AI agent for all types of products",
  },
];

function Section5() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center mb-20 px-2">
      <h1 className="text-2xl sm:text-4xl font-bold mt-8 sm:mt-12 text-center">
        Building Digital Excellence
        <br /> with Nadhiyai.
      </h1>
      <p className="text-base sm:text-lg text-center mt-4 max-w-2xl">
        Discover the innovative marketing strategies that set Nadhiyai-AI apart,
        <br className="hidden sm:block" />
        driving success in the digital landscape.
      </p>

      <div className=" mb-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full sm:w-[90%] md:w-[80%] lg:w-[70%] gap-6 sm:gap-8 mt-8 sm:mt-12 mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gradient-to-r bg-[#58585813] rounded-3xl flex flex-col items-center p-4"
          >
            <img
              className="w-full h-32 sm:h-48 object-cover rounded-lg"
              src="https://framerusercontent.com/images/nUyYMvoY4UXXPS7H1sUU2NlZYk.jpg?scale-down-to=512"
              alt="service"
            />
            <div className="mt-4 text-black text-start w-full">
              <h2 className="text-lg sm:text-xl font-semibold">
                {service.name}
              </h2>
              <p className="text-sm mt-2">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section5;
