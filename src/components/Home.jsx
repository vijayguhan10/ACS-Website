import React, { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 text-black py-4 flex justify-between items-center  backdrop-blur-md ">
        <div className="text-2xl sm:text-3xl font-bold text-gradient">
          Autom Consultancy <span className="text-purple-600">ACS</span>
        </div>
        {/* Desktop Nav */}
        <div className="hidden sm:flex space-x-4 items-center">
          <a href="/" className="hover:text-purple-600 transition">
            Home
          </a>
          <a href="/products" className="hover:text-purple-600 transition">
            Our Products
          </a>
          <a href="/services" className="hover:text-purple-600 transition">
            Services
          </a>
          <a href="/contact" className="hover:text-purple-600 transition">
            Contact
          </a>
        </div>
        {/* Mobile Menu Button */}
        <button
          className="sm:hidden p-2 rounded-md hover:bg-gray-200/20 transition"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-7 h-7 text-purple-600" />
        </button>
      </nav>
      {/* Mobile Glassmorphic Menu */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full z-50 text-black ">
          <div className="w-full flex flex-col items-center backdrop-blur-md bg-white/30 bg-opacity-60 shadow-lg animate-slide-down border-b border-white/20">
            <div className="flex justify-between items-center w-full px-4 py-4">
              <span className="text-2xl font-bold text-gradient">ACS</span>
              <button
                className="p-2 rounded-md hover:bg-gray-200/10 transition"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-7 h-7 text-purple-600" />
              </button>
            </div>
            <nav className="flex flex-col gap-4 text-lg w-full items-center pb-4">
              <a
                href="/"
                className="hover:text-purple-600 transition"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="/products"
                className="hover:text-purple-600 transition"
                onClick={() => setMenuOpen(false)}
              >
                Our Products
              </a>
              <a
                href="/services"
                className="hover:text-purple-600 transition"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="/contact"
                className="hover:text-purple-600 transition"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
          {/* Click outside to close */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu overlay"
          />
        </div>
      )}

      {/* Main Content */}
      <div
        className={`flex items-center justify-center mt-8 min-h-[60vh] px-2 transition-all duration-300 pt-20`}
      >
        <section
          className={`flex rounded-3xl bg-[#000000f1] w-full max-w-4xl gap-6 flex-col items-start justify-start text-center px-4 sm:px-6 py-8 sm:py-12 ${
            menuOpen ? "mt-10" : ""
          }`}
        >
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl mt-8 sm:mt-28 font-bold leading-tight text-left sm:text-center">
            Innovate, Automate, <br className="hidden sm:block" /> and Succeed
            with AI
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-start mx-auto">
            Innovative AI technology designed to solve pressing challenges,
            providing businesses with strategic, actionable problem-solving
            tools.
          </p>
          <div className="flex flex-col sm:flex-row rounded-lg w-full sm:w-40 bg-[#575656]">
            <button className="px-2 py-2 text-sm text-start text-nowrap text-white rounded-xl hover:bg-orange-600 transition duration-300 w-full sm:w-auto">
              Schedule a call
            </button>
            <div className="h-8 bg-orange-600 flex w-10 m-1 ml-0 sm:ml-3 items-center justify-center rounded-xl">
              <ArrowRight className="text-white" />
            </div>
          </div>
        </section>
      </div>
      {/* Animation for mobile menu */}
      <style>
        {`
          @keyframes slide-down {
            from { transform: translateY(-100%); opacity: 0.7; }
            to { transform: translateY(0); opacity: 1; }
          }
          .animate-slide-down {
            animation: slide-down 0.3s cubic-bezier(.4,0,.2,1);
          }
        `}
      </style>
    </div>
  );
}

export default Home;
