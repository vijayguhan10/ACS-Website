import React from "react";
import { ArrowRight } from "lucide-react";
import Spline from "@splinetool/react-spline";

function Home() {
  return (
    <div className="text-white">
      {/* Main Content */}
      <div
        className={`flex items-center justify-center mt-8 min-h-[60vh] px-2 transition-all duration-300 pt-20`}
      >
        <section
          className={`relative flex rounded-3xl bg-[#000000f1] w-full max-w-4xl gap-6 flex-col items-start justify-start text-center px-4 sm:px-6 py-8 sm:py-12`}
        >
          {/* Spline 3D at the top right of the black bg main content */}
          <div
            className="absolute top-0 right-0 block pointer-events-auto animate-bounce-slow"
            style={{
              width: "150px",
              height: "150px",
              marginRight: "0px",
              marginTop: "-70px",
            }}
          >
            <Spline
              scene="https://prod.spline.design/ZwnMownJAdYIWNRf/scene.splinecode"
              style={{
                background: "transparent",
                width: "100%",
                height: "100%",
              }}
            />
          </div>
          <style>
            {`
              @media (min-width: 640px) {
                .absolute.top-0.right-0.pointer-events-auto.animate-bounce-slow {
                  width: 120px !important;
                  height: 120px !important;
                  margin-top: 100px !important;
                  margin-right: 20px !important;
                }
              }
              @media (min-width: 1024px) {
                .absolute.top-0.right-0.pointer-events-auto.animate-bounce-slow {
                  width: 180px !important;
                  height: 180px !important;
                  margin-top: 10px !important;
                  margin-right: 40px !important;
                }
              }
              @keyframes bounce-slow {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-30px); }
              }
              .animate-bounce-slow {
                animation: bounce-slow 2.5s infinite;
              }
            `}
          </style>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl mt-8 sm:mt-28 font-bold leading-tight text-left sm:text-center">
            Innovate, Automate, <br className="hidden sm:block" /> and Succeed
            with AI
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-start mx-auto">
            Innovative AI technology designed to solve pressing challenges,
            providing businesses with strategic, actionable problem-solving
            tools.
          </p>
          <div className="flex sm:flex-row rounded-lg w-fit bg-[#575656]">
            <button className="px-2 py-2 text-sm text-start text-nowrap text-white rounded-xl hover:bg-orange-600 transition duration-300">
              Schedule a call
            </button>
            <div className="h-8 bg-orange-600 flex w-10 m-1 ml-0 items-center justify-center rounded-xl">
              <ArrowRight className="text-white" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
