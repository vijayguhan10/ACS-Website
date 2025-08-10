import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Add this import
import { Menu, X } from "lucide-react";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsMenuOpen, setProductsMenuOpen] = useState(false);
  const productsMenuTimeout = React.useRef();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
    };
    if (location.pathname === "/" || location.pathname === "/viewproducts") {
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

  return (
    <nav
      className={`sticky top-0 h-20 left-0 w-full z-11 px-4 sm:px-6 py-4 flex justify-between items-center
        rounded-b-2xl rounded-t-2xl mx-auto mt-
        backdrop-blur-xl  
        glassmorphism-nav transition-all duration-300
        max-w-7xl
      `}
      style={{
        // Extra glassmorphism: subtle border, shadow, and background blur
   
        // background: "rgba(255,255,255,0.40)",
        backdropFilter: "blur(16px) saturate(180%)",
        WebkitBackdropFilter: "blur(16px) saturate(180%)",
      }}
    >
      {/* Logo */}
      <div className="text-2xl sm:text-3xl font-bold text-gradient">
        Autom Consultancy <span className="text-purple-600">ACS</span>
        <span className="block text-xs sm:text-sm font-semibold text-purple-600 mb-2 tracking-wide">
            Simplify Processes, Amplify Efficiency
          </span>
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
          <span
            className="hover:text-purple-600 transition cursor-pointer"
            tabIndex={0}
          >
            Our Products
          </span>
          {/* Mega Menu */}
          <div
            className={`absolute -left-12 -translate-x-1/2 top-full mt-3 w-[560px] bg-white rounded-xl shadow-2xl border border-gray-200 p-4 flex z-50 transition-opacity duration-200
              ${
                productsMenuOpen
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }`}
            tabIndex={-1}
            onMouseEnter={handleProductsMenuEnter}
            onMouseLeave={handleProductsMenuLeave}
          >
            {/* ERP & Business Solutions */}
            <div className="flex-1 pr-4 border-r border-dotted border-gray-300 relative">
              <div className="text-xs font-semibold text-gray-500 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500 inline-block"></span>
                ERP & BUSINESS
              </div>
              <div className="space-y-3">
                <div>
                  <a
                    href="/viewproducts"
                    className="font-semibold text-blue-700 block mb-1 text-sm whitespace-nowrap hover:text-blue-800 transition"
                  >
                    InvoTrack
                  </a>
                  <div className="text-xs text-gray-500 leading-tight">
                    Billing & inventory management
                  </div>
                </div>
                <div>
                  <a
                    href="/viewproducts"
                    className="font-semibold text-gray-800 block mb-1 text-sm whitespace-nowrap hover:text-purple-600 transition"
                  >
                    LeadFlow CRM
                  </a>
                  <div className="text-xs text-gray-500 leading-tight">
                    Lead tracking with WhatsApp
                  </div>
                </div>
                <div>
                  <a
                    href="/viewproducts"
                    className="font-semibold text-gray-800 block mb-1 text-sm whitespace-nowrap hover:text-purple-600 transition"
                  >
                    LeaveEase
                  </a>
                  <div className="text-xs text-gray-500 leading-tight">
                    Automated leave management
                  </div>
                </div>
              </div>
              {/* Decorative SVGs */}
              <svg
                className="absolute bottom-1 right-1 w-8 h-8 opacity-15 pointer-events-none"
                viewBox="0 0 48 48"
                fill="none"
              >
                <circle
                  cx="24"
                  cy="24"
                  r="20"
                  stroke="#bdbddb"
                  strokeWidth="2"
                />
              </svg>
            </div>

            {/* Specialized Solutions */}
            <div className="flex-1 px-4 border-r border-dotted border-gray-300">
              <div className="text-xs font-semibold text-gray-500 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
                SPECIALIZED
              </div>
              <div className="space-y-3">
                <div>
                  <a
                    href="/viewproducts"
                    className="font-semibold text-gray-800 block mb-1 text-sm whitespace-nowrap hover:text-purple-600 transition"
                  >
                    EventSync
                  </a>
                  <div className="text-xs text-gray-500 leading-tight">
                    End-to-end event management
                  </div>
                </div>
                <div>
                  <a
                    href="/viewproducts"
                    className="font-semibold text-gray-800 block mb-1 text-sm whitespace-nowrap hover:text-purple-600 transition"
                  >
                    Revozen
                  </a>
                  <div className="text-xs text-gray-500 leading-tight">
                    Tyre center management
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Apps */}
            <div className="flex-1 pl-4">
              <div className="text-xs font-semibold text-gray-500 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500 inline-block"></span>
                MOBILE APPS
              </div>
              <div className="space-y-3">
                <div>
                  <a
                    href="/viewproducts"
                    className="font-semibold text-gray-800 block mb-1 text-sm whitespace-nowrap hover:text-purple-600 transition"
                  >
                    4Trip
                  </a>
                  <div className="text-xs text-gray-500 leading-tight">
                    Trip booking & management
                  </div>
                </div>
                <div className="mt-4">
                  <a
                    href="/viewproducts"
                    className="font-semibold text-purple-600 block text-sm whitespace-nowrap hover:text-purple-700 transition"
                  >
                    View All Products →
                  </a>
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
                  href="/viewproducts"
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-800 hover:text-purple-600 transition py-2 border-b border-gray-200"
                >
                  Our Products
                </a>
                <a
                  href="/Careers"
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-800 hover:text-purple-600 transition py-2 border-b border-gray-200"
                >
                  Careers
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
