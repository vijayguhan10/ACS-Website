import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Add this import
import { Menu, X } from "lucide-react";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsMenuOpen, setProductsMenuOpen] = useState(false);
  const productsMenuTimeout = React.useRef();
  const location = useLocation(); // Get current route

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
    };
    if (location.pathname === "/") {
      window.addEventListener("scroll", handleScroll);
      handleScroll();
    } else {
      setScrolled(false);
      window.removeEventListener("scroll", handleScroll);
    }
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const handleProductsMenuEnter = () => {
    clearTimeout(productsMenuTimeout.current);
    setProductsMenuOpen(true);
  };

  const handleProductsMenuLeave = () => {
    productsMenuTimeout.current = setTimeout(() => {
      setProductsMenuOpen(false);
    }, 120); // small delay for smoothness
  };

  // Determine nav background
  const navBg =
    location.pathname === "/"
      ? scrolled
        ? "bg-white"
        : "bg-gradient-to-t from-[#f3e8ff] via-[#fff3ff] to-white"
      : "bg-white";

  return (
    <nav
      className={`sticky top-0 left-0 w-full z-50 px-4 sm:px-6 py-4 flex justify-between items-center backdrop-blur-xl transition-colors duration-300 ${navBg}`}
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
        {/* Products Dropdown */}
        <div
          className="relative group"
          onMouseEnter={handleProductsMenuEnter}
          onMouseLeave={handleProductsMenuLeave}
          onFocus={handleProductsMenuEnter}
          onBlur={handleProductsMenuLeave}
        >
          <a
            href="/products"
            className="hover:text-purple-600 transition"
            tabIndex={0}
          >
            Our Products
          </a>
          {/* Mega Menu */}
          <div
            className={`absolute -left-12 -translate-x-1/2 top-full mt-3 w-[600px] bg-white rounded-xl shadow-2xl border border-gray-200 p-6  flex z-50 transition-opacity duration-200
              ${
                productsMenuOpen
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }`}
            tabIndex={-1}
            onMouseEnter={handleProductsMenuEnter}
            onMouseLeave={handleProductsMenuLeave}
          >
            {/* For Merchants */}
            <div className="flex-1 pr-6 border-r border-dotted border-gray-300 relative">
              <div className="text-xs font-semibold text-gray-500 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gray-400 inline-block"></span>
                FOR MERCHANTS
              </div>
              <div className="space-y-4">
                <div>
                  <a
                    href="#"
                    className="font-semibold text-blue-700 block mb-1"
                  >
                    QR UPI
                  </a>
                  <div className="text-xs text-gray-500">
                    Comprises a diverse range of products designed
                  </div>
                </div>
                <div>
                  <a
                    href="#"
                    className="font-semibold text-gray-800 block mb-1"
                  >
                    Cards
                  </a>
                  <div className="text-xs text-gray-500">
                    Comprises a diverse range of products designed
                  </div>
                </div>
                <div>
                  <a
                    href="#"
                    className="font-semibold text-gray-800 block mb-1"
                  >
                    Sound box
                  </a>
                  <div className="text-xs text-gray-500">
                    Comprises a diverse range of products designed
                  </div>
                </div>
              </div>
              {/* Decorative SVGs in bottom right for aesthetic feel */}
              <svg
                className="absolute bottom-2 right-2 w-10 h-10 opacity-20 pointer-events-none"
                viewBox="0 0 48 48"
                fill="none"
              >
                <circle
                  cx="24"
                  cy="24"
                  r="20"
                  stroke="#bdbdbd"
                  strokeWidth="2"
                />
              </svg>
              <svg
                className="absolute bottom-6 right-8 w-6 h-6 opacity-10 pointer-events-none"
                viewBox="0 0 48 48"
                fill="none"
              >
                <circle
                  cx="24"
                  cy="24"
                  r="16"
                  stroke="#bdbdbd"
                  strokeWidth="2"
                />
              </svg>
              <svg
                className="absolute bottom-12 right-4 w-4 h-4 opacity-10 pointer-events-none"
                viewBox="0 0 48 48"
                fill="none"
              >
                <circle
                  cx="24"
                  cy="24"
                  r="10"
                  stroke="#bdbdbd"
                  strokeWidth="2"
                />
              </svg>
            </div>
            {/* Point of Sale & Lending */}
            <div className="flex-1 px-6 border-r border-dotted border-gray-300">
              <div className="space-y-4 mt-7">
                <div>
                  <a
                    href="#"
                    className="font-semibold text-gray-800 block mb-1"
                  >
                    Point of sale
                  </a>
                  <div className="text-xs text-gray-500">
                    Comprises a diverse range of products designed
                  </div>
                </div>
                <div>
                  <a
                    href="#"
                    className="font-semibold text-gray-800 block mb-1"
                  >
                    Lending
                  </a>
                  <div className="text-xs text-gray-500">
                    Comprises a diverse range of products designed
                  </div>
                </div>
              </div>
            </div>
            {/* Solution */}
            <div className="flex-1 pl-6">
              <div className="text-xs font-semibold text-gray-500 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gray-400 inline-block"></span>
                SOLUTION
              </div>
              <div className="space-y-4">
                <div>
                  <a
                    href="#"
                    className="font-semibold text-gray-800 block mb-1"
                  >
                    Sense
                  </a>
                  <div className="text-xs text-gray-500">
                    Identify the Good from the Bad visitors
                  </div>
                </div>
                <div>
                  <a
                    href="#"
                    className="font-semibold text-gray-800 block mb-1"
                  >
                    Techfini
                  </a>
                  <div className="text-xs text-gray-500">
                    Comprises a diverse range of products designed
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a href="/Careers" className="hover:text-purple-600 transition">
          Careers
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
          {/* Prevent background scroll when menu is open */}
          <style>{`
            body { overflow: hidden !important; }
          `}</style>

          {/* Background overlay with enhanced glass effect */}
          <div
            className="fixed inset-0 z-40 bg-gradient-to-br from-white/30 via-purple-200/30 to-blue-200/30 backdrop-blur-[10px] border border-white/30 shadow-2xl transition-opacity duration-300"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu overlay"
            style={{ willChange: "opacity" }}
          ></div>

          {/* Menu Container with stronger glass effect and smooth animation */}
          <div
            className="fixed top-0 left-0 w-full min-h-screen z-50 animate-slide-down"
            style={{ willChange: "transform" }}
          >
            {/* Header with frosted glass effect */}
            <div className="bg-white/30 backdrop-blur-3xl border-b border-white/40 shadow-lg p-4">
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent drop-shadow-sm">
                  ACS
                </span>
                <button
                  className="p-2 rounded-md hover:bg-white/30 transition backdrop-blur-sm"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="w-7 h-7 text-gray-800 drop-shadow-sm" />
                </button>
              </div>
            </div>

            {/* Menu Links with glass effect */}
            <div className="bg-white/100 backdrop-blur-2xl border-x border-white/30 shadow-2xl">
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
