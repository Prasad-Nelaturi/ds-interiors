import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  Phone,
  X,
  Heart,
  Menu,
  ChevronDown,
  Home,
  Building,
  Palette,
  Crown,
  Ruler,
  Sparkles,
  ChevronRight,
} from "lucide-react";

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const dropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null);

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const companyInfo = {
    name: "D S Interiors",
    tagline: "Creating Spaces That Inspire",
    rating: 4.8,
    reviews: 128,
    status: "Premium",
    location: "Kondapur, Hyderabad",
    hours: "Mon - Sat: 9AM - 7PM",
    experience: "12+ Years",
    phone: "+91 90107 99991",
    address: "Door No 1-31/1, Raja Ram Enclave, Kondapur, Hyderabad-500084",
    email: "dsinteriorshyd1@gmail.com",
  };

  const servicesList = [
    {
      name: "Residential Design",
      icon: <Home className="w-4 h-4" />,
      description: "Transform your home into a stunning living space",
      path: "/services/residential",
    },
    {
      name: "Commercial Spaces",
      icon: <Building className="w-4 h-4" />,
      description: "Create inspiring workspaces that boost productivity",
      path: "/services/commercial",
    },
    {
      name: "Interior Styling",
      icon: <Palette className="w-4 h-4" />,
      description: "Complete styling solutions with curated furniture",
      path: "/services/styling",
    },
    {
      name: "Luxury Villas",
      icon: <Crown className="w-4 h-4" />,
      description: "Premium villa designs with exquisite finishes",
      path: "/services/luxury-villas",
    },
    {
      name: "Space Planning",
      icon: <Ruler className="w-4 h-4" />,
      description: "Optimized layouts for maximum functionality",
      path: "/services/space-planning",
    },
    {
      name: "3D Visualization",
      icon: <Sparkles className="w-4 h-4" />,
      description: "Realistic 3D renderings of your dream space",
      path: "/services/3d-visualization",
    },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollToSection = useCallback(
    (ref) => {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      } else {
        ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setIsMenuOpen(false);
      setIsServicesDropdownOpen(false);
      setIsMobileServicesOpen(false);
    },
    [location.pathname, navigate],
  );

  const handleServiceClick = (servicePath) => {
    navigate(servicePath);
    setIsMenuOpen(false);
    setIsServicesDropdownOpen(false);
    setIsMobileServicesOpen(false);
  };

  const copyAddress = () => {
    navigator.clipboard.writeText(companyInfo.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isHomePage = location.pathname === "/";

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/10 backdrop-blur-xl shadow-lg shadow-black/5"
            : "bg-white bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <Link
              to="/"
              className="flex items-center gap-2 sm:gap-3 group cursor-pointer"
              onClick={() => {
                if (isHomePage && heroRef.current) {
                  heroRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
                setIsMenuOpen(false);
              }}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
                <img
                  src="logo3.png"
                  alt="D S Interiors Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h1 className="font-bold text-orange-600 text-lg sm:text-xl md:text-2xl tracking-tight">
                  D S Interiors
                </h1>
                <p className="text-blue-900 text-xs tracking-wide">
                  INTERIOR DESIGN STUDIO
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 lg:gap-10">
              <Link
                to="/"
                onClick={() => {
                  if (isHomePage && heroRef.current) {
                    heroRef.current.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
                className="text-gray-700 hover:text-gray-900 transition-all duration-300 text-sm font-bold tracking-wide relative group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-gray-900 transition-all duration-300 text-sm font-bold tracking-wide relative group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
              </Link>

              {/* Services Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() =>
                    setIsServicesDropdownOpen(!isServicesDropdownOpen)
                  }
                  className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-all duration-300 text-sm font-bold tracking-wide relative group"
                >
                  Services
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${isServicesDropdownOpen ? "rotate-180" : ""}`}
                  />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
                </button>

                {/* Dropdown Menu */}
                {isServicesDropdownOpen && (
                  <div className="absolute top-full left-0 mt-[28px] w-80 bg-white rounded-2xl shadow-3xl border border-gray-300 overflow-hidden z-50 animate-fadeInUp">
                    <div className="py-2">
                      {servicesList.map((service, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleServiceClick(service.path)}
                          className="w-full px-4 py-3 flex items-start gap-3 hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 transition-all duration-300 group"
                        >
                          <div className="w-8 h-8 bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg flex items-center justify-center text-amber-600 group-hover:scale-110 transition-transform">
                            {service.icon}
                          </div>
                          <div className="flex-1 text-left">
                            <p className="text-sm font-semibold text-gray-900 group-hover:text-amber-600">
                              {service.name}
                            </p>
                            <p className="text-xs text-gray-500">
                              {service.description}
                            </p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-all" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/contact"
                className="text-gray-700 hover:text-gray-900 transition-all duration-300 text-sm font-bold tracking-wide relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                to="/blogs"
                className="text-gray-700 hover:text-gray-900 transition-all duration-300 text-sm font-bold tracking-wide relative group"
              >
                Blogs
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>

            <button
              onClick={() => setShowContact(true)}
              className="hidden md:flex items-center gap-2 px-4 lg:px-6 py-2.5 rounded-full text-sm font-medium
             relative overflow-hidden group
             bg-gradient-to-r from-orange-500 to-amber-500 text-white
             shadow-md hover:shadow-lg
             transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
            >
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition duration-500
                   bg-gradient-to-r from-orange-400 to-amber-400 blur-xl"
              ></span>
              <span className="absolute -left-1/2 top-0 w-1/2 h-full bg-white/30 skew-x-12 blur-md group-hover:animate-shine"></span>
              <span className="relative z-10 flex items-center gap-2">
                <Phone className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                <span>Get Quote</span>
              </span>
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-orange-400 hover:bg-orange-100 transition"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu with Services Dropdown */}
          <div
            className={`md:hidden fixed inset-x-0 top-[73px] bg-white/98 backdrop-blur-xl shadow-xl transition-all duration-500 overflow-y-auto max-h-[calc(100vh-73px)] ${
              isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="py-4 px-4 sm:px-6 space-y-3 bg-gray-50 rounded-b-2xl">
              <Link
                to="/"
                onClick={() => {
                  if (isHomePage && heroRef.current) {
                    heroRef.current.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left text-gray-700 py-3 border-b border-gray-100 font-bold"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left text-gray-700 py-3 border-b border-gray-100 font-bold"
              >
                About
              </Link>

              {/* Mobile Services Dropdown */}
              <div className="border-b border-gray-100">
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="flex items-center justify-between w-full text-left text-gray-700 py-3 font-bold"
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${isMobileServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isMobileServicesOpen && (
                  <div className="pb-3 space-y-2">
                    {servicesList.map((service, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleServiceClick(service.path)}
                        className="w-full pl-4 py-2 flex items-center gap-3 hover:bg-amber-50 rounded-lg transition"
                      >
                        <div className="w-6 h-6 bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg flex items-center justify-center text-amber-600">
                          {service.icon}
                        </div>
                        <span className="text-sm text-gray-700">
                          {service.name}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left text-gray-700 py-3 border-b border-gray-100 font-bold"
              >
                Contact
              </Link>
              <Link
                to="/blogs"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left text-gray-700 py-3 border-b border-gray-100 font-bold"
              >
                Blogs
              </Link>
              <button
                onClick={() => {
                  setShowContact(true);
                  setIsMenuOpen(false);
                }}
                className="w-full py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full font-medium"
              >
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-[73px]">
        <Outlet context={{ heroRef, aboutRef, servicesRef, contactRef }} />
      </main>

      {/* Footer with Services Dropdown */}
      <footer className="bg-gray-900 mx-4 sm:mx-6 rounded-t-3xl text-white py-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12">
            <div>
              <Link to="/" className="flex items-center gap-3 mb-6 group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
                  <img
                    src="logo3.png"
                    alt="D S Interiors Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h1 className="font-bold text-orange-600 text-lg sm:text-xl md:text-2xl tracking-tight">
                    D S Interiors
                  </h1>
                </div>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed">
                Creating beautiful spaces that inspire and delight. Transforming
                visions into reality since 2012.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-6 relative inline-block">
                Quick Links
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-amber-500"></span>
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/"
                    className="text-gray-400 hover:text-amber-400 transition text-sm block"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-gray-400 hover:text-amber-400 transition text-sm block"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-400 hover:text-amber-400 transition text-sm block"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blogs"
                    className="text-gray-400 hover:text-amber-400 transition text-sm block"
                  >
                    Blogs
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-6 relative inline-block">
                Our Services
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-amber-500"></span>
              </h4>
              <ul className="space-y-2">
                {servicesList.slice(0, 4).map((service, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => handleServiceClick(service.path)}
                      className="text-gray-400 hover:text-amber-400 transition text-sm block"
                    >
                      {service.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-6 relative inline-block">
                Business Hours
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-amber-500"></span>
              </h4>
              <div className="space-y-2">
                <p className="text-gray-400 text-sm">
                  Monday - Saturday: 9AM - 7PM
                </p>
                <p className="text-gray-400 text-sm">Sunday: Closed</p>
                <div className="pt-4">
                  <p className="text-amber-400 text-sm font-medium">
                    Emergency Contact
                  </p>
                  <a
                    href={`tel:${companyInfo.phone}`}
                    className="text-gray-300 text-sm hover:text-amber-400 transition-colors duration-300 block"
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log("Calling:", companyInfo.phone);
                    }}
                  >
                    {companyInfo.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>
              &copy; 2026 D S Interiors. All rights reserved. | Designed with{" "}
              <Heart className="w-3 h-3 inline text-amber-500" /> for luxury
              living
            </p>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      {/* Contact Modal */}
      {showContact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl animate-fadeInUp mx-4">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                Contact Us
              </h3>
              <button
                onClick={() => setShowContact(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-5">
              {/* Phone Section */}
              <div>
                <p className="text-gray-500 text-sm mb-1">Phone</p>
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="text-gray-900 font-medium text-base sm:text-lg hover:text-orange-600 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-orange-500" />
                  {companyInfo.phone}
                </a>
              </div>

              {/* Email Section - FIXED */}
              <div>
                <p className="text-gray-500 text-sm mb-2">Email</p>
                <div className="space-y-2">
                  {/* Direct mailto link */}
                  <a
                    href={`mailto:${companyInfo.email}?subject=Inquiry%20from%20Website&body=Hello%20DS%20Interiors,%0A%0AI%20would%20like%20to%20inquire%20about...`}
                    className="text-gray-900 text-sm sm:text-base break-all hover:text-orange-600 transition-colors flex items-center gap-2 group"
                    onClick={(e) => {
                      // Fallback for devices that don't handle mailto properly
                      setTimeout(() => {
                        if (!window.location.href.includes("mailto:")) {
                          alert(
                            "Please configure your email client or use Gmail/Outlook web version",
                          );
                        }
                      }, 100);
                    }}
                  >
                    <svg
                      className="w-4 h-4 text-orange-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    {companyInfo.email}
                  </a>

                  {/* Alternative buttons for webmail services */}
                  <div className="flex flex-col sm:flex-row gap-2 mt-3">
                    <button
                      onClick={() => {
                        window.open(
                          `https://mail.google.com/mail/?view=cm&fs=1&to=${companyInfo.email}&su=Inquiry%20from%20Website&body=Hello%20DS%20Interiors,%0A%0AI%20would%20like%20to%20inquire%20about...`,
                          "_blank",
                        );
                      }}
                      className="flex items-center justify-center gap-2 px-3 py-2 bg-red-50 text-red-600 rounded-lg text-sm hover:bg-red-100 transition-colors"
                    >
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                      Gmail
                    </button>
                    <button
                      onClick={() => {
                        window.open(
                          `https://outlook.live.com/mail/0/deeplink/compose?to=${companyInfo.email}&subject=Inquiry%20from%20Website&body=Hello%20DS%20Interiors,%0A%0AI%20would%20like%20to%20inquire%20about...`,
                          "_blank",
                        );
                      }}
                      className="flex items-center justify-center gap-2 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm hover:bg-blue-100 transition-colors"
                    >
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 7h10v2H7zm0 4h10v2H7zm0 4h7v2H7z" />
                      </svg>
                      Outlook
                    </button>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(companyInfo.email);
                        alert("Email address copied to clipboard!");
                      }}
                      className="flex items-center justify-center gap-2 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition-colors"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                        />
                      </svg>
                      Copy Email
                    </button>
                  </div>
                </div>
              </div>

              {/* Address Section */}
              <div>
                <p className="text-gray-500 text-sm mb-1">Address</p>
                <p className="text-gray-900 text-sm">{companyInfo.address}</p>
                <button
                  onClick={copyAddress}
                  className="text-amber-600 text-xs mt-2 flex items-center gap-1 hover:gap-2 transition-all"
                >
                  {copied ? (
                    <>
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2"
                        />
                      </svg>
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Call Button */}
            <button
              onClick={() =>
                (window.location.href = `tel:${companyInfo.phone}`)
              }
              className="w-full py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl hover:shadow-lg transition-all duration-300 font-medium mt-6 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Layout;
