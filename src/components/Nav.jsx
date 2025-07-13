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
          {/* Background overlay with blur effect */}
          <div
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-3xl"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu overlay"
          ></div>

          {/* Menu Container with glass effect */}
          <div className="fixed top-0 left-0 w-full min-h-screen z-50 animate-slide-down">
            {/* Header with frosted glass effect */}
            <div className="bg-white/20 backdrop-blur-3xl border-b border-white/30 shadow-lg p-4">
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent drop-shadow-sm">
                  ACS
                </span>
                <button
                  className="p-2 rounded-md hover:bg-white/20 transition backdrop-blur-sm"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="w-7 h-7 text-gray-800 drop-shadow-sm" />
                </button>
              </div>
            </div>

            {/* Menu Links with solid background */}
            <div className="bg-white/95 backdrop-blur-sm">
              <nav className="flex flex-col gap-6 text-lg p-4 pt-8">
                <a
                  href="/"
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-800 hover:text-purple-600 transition py-2 border-b border-gray-200"
                >
                  Home
                </a>
                <a
                  href="/products"
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-800 hover:text-purple-600 transition py-2 border-b border-gray-200"
                >
                  Our Products
                </a>
                <a
                  href="/services"
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-800 hover:text-purple-600 transition py-2 border-b border-gray-200"
                >
                  Services
                </a>
                <a
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-800 hover:text-purple-600 transition py-2 border-b border-gray-200"
                >
                  Contact
                </a>
              </nav>
            </div>
          </div>
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
