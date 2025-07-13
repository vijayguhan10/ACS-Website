import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100); // 3 feet ≈ 900px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 left-0 w-full z-50 px-4 sm:px-6 py-4 flex justify-between items-center backdrop-blur-xl transition-colors duration-300 ${
        scrolled
          ? "bg-white"
          : "bg-gradient-to-t from-[#f3e8ff] via-[#fff3ff] to-white"
      }`}
    >
      {/* Logo */}
      <div className="text-2xl sm:text-3xl font-bold text-gradient">
        Autom Consultancy <span className="text-purple-600">ACS</span>
      </div>

      {/* Desktop Menu */}
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
        className="backdrop-blur-xl sm:hidden p-2 rounded-md hover:bg-gray-200/20 transition"
        onClick={() => setMenuOpen(true)}
        aria-label="Open menu"
      >
        <Menu className="w-7 h-7 text-purple-600" />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <>
          {/* Menu Container */}
          <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-3xl bg-black/60 animate-slide-down p-4">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <span className="text-2xl font-bold text-gradient">ACS</span>
              <button
                className="p-2 rounded-md hover:bg-gray-200/20 transition"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-7 h-7 text-purple-600" />
              </button>
            </div>

            {/* Menu Links */}
            <nav className="flex flex-col gap-4 text-lg">
              <a
                href="/"
                onClick={() => setMenuOpen(false)}
                className="text-gray-100 hover:text-purple-400 transition"
              >
                Home
              </a>
              <a
                href="/products"
                onClick={() => setMenuOpen(false)}
                className="text-gray-100 hover:text-purple-400 transition"
              >
                Our Products
              </a>
              <a
                href="/services"
                onClick={() => setMenuOpen(false)}
                className="text-gray-100 hover:text-purple-400 transition"
              >
                Services
              </a>
              <a
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="text-gray-100 hover:text-purple-400 transition"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Background overlay to close on clicking outside */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu overlay"
          ></div>
        </>
      )}

      {/* Animations */}
      <style>{`
        @keyframes slide-down {
          from { transform: translateY(-100%); }
          to { transform: translateY(0); }
        }
        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
      `}</style>
    </nav>
  );
};

export default Nav;
