import React, { useState, useEffect, useRef } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import ConsultationButton from "../components/ConsultationButton";
import {
  Phone,
  X,
  Heart,
  Clock,
  Menu,
  ChevronDown,
  Home,
  Building,
  Palette,
  Crown,
  Ruler,
  Sparkles,
  Mail,
  BookOpen,
  Factory,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  MapPin,
  Layers,
  DraftingCompass,
  TreeDeciduous,
  Cctv,
  Radio,
  VenetianMask,
  Shield,
  FileText
} from "lucide-react";
import StructuredData from './StructuredData';

const Layout = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileMoreOpen, setIsMobileMoreOpen] = useState(false);
  const dropdownRef = useRef(null);
  const moreDropdownRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const servicesList = [
    {
      name: "Interior Design",
      icon: <Layers className="w-4 h-4" />,
      description: "Complete interior solutions on turnkey & consultant basis",
      path: "/services/interior-design",
    },
    {
      name: "Home Plans & Elevations",
      icon: <DraftingCompass className="w-4 h-4" />,
      description: "Detailed floor plans & architectural elevations",
      path: "/services/home-plans",
    },
    {
      name: "3D Views & Visualization",
      icon: <Sparkles className="w-4 h-4" />,
      description: "Realistic 3D renderings of your dream space",
      path: "/services/3d-visualization",
    },
    {
      name: "Landscaping",
      icon: <TreeDeciduous className="w-4 h-4" />,
      description: "Beautiful outdoor spaces & garden designs",
      path: "/services/landscaping",
    },
    {
      name: "Home Automation",
      icon: <Cctv className="w-4 h-4" />,
      description: "Smart home solutions for modern living",
      path: "/services/home-automation",
    },
    {
      name: "Curtains & Blinds",
      icon: <VenetianMask className="w-4 h-4" />,
      description: "Premium window treatments & furnishings",
      path: "/services/curtains-blinds",
    },
    {
      name: "Chimneys & Hobs",
      icon: <Radio className="w-4 h-4" />,
      description: "Modern kitchen ventilation & cooking solutions",
      path: "/services/chimneys-hobs",
    },
    {
      name: "Residential Interiors",
      icon: <Home className="w-4 h-4" />,
      description: "Complete home interiors on turnkey basis",
      path: "/services/residential",
    },
    {
      name: "Commercial Interiors",
      icon: <Building className="w-4 h-4" />,
      description: "Office spaces, retail & commercial interiors",
      path: "/services/commercial",
    },
    {
      name: "Interior Styling & Decor",
      icon: <Palette className="w-4 h-4" />,
      description: "Curated furniture & decor solutions",
      path: "/services/styling",
    },
    {
      name: "Luxury Villa Design",
      icon: <Crown className="w-4 h-4" />,
      description: "Premium villa interiors with exquisite finishes",
      path: "/services/luxury-villas",
    },
    {
      name: "Space Planning",
      icon: <Ruler className="w-4 h-4" />,
      description: "Optimized layouts for maximum functionality",
      path: "/services/space-planning",
    },
  ];

  const moreList = [
    {
      name: "Blogs",
      icon: <BookOpen className="w-4 h-4" />,
      description: "Latest design trends & insights",
      path: "/blogs",
    },
    {
      name: "Modular Factory",
      icon: <Factory className="w-4 h-4" />,
      description: "State-of-the-art manufacturing",
      path: "/modular-factory",
    },
    {
      name: "Privacy Policy",
      icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />,
      description: "Your privacy & data security",
      path: "/privacy-policy",
    },
    {
      name: "Terms and Conditions",
      icon: <FileText className="w-5 h-5 sm:w-6 sm:h-6" />,
      description: "Your privacy & data security",
      path: "/terms-conditions",
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesDropdownOpen(false);
      }
      if (
        moreDropdownRef.current &&
        !moreDropdownRef.current.contains(event.target)
      ) {
        setIsMoreDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setIsServicesDropdownOpen(false);
    setIsMoreDropdownOpen(false);
    setIsMobileServicesOpen(false);
    setIsMobileMoreOpen(false);
  };

  const isHomePage = location.pathname === "/";

  return (
    <>
      <StructuredData />
      <div className="container mx-auto min-h-screen bg-white overflow-x-hidden">
        {/* Navigation */}
        <nav
          className={`container mx-auto fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
            ? "bg-white/10 backdrop-blur-xl shadow-lg shadow-black/5 py-2"
            : "bg-transparent bg-white py-2"
            }`}
        >
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center">
              {/* Logo - Fixed */}
              <Link
                to="/"
                className="flex items-center gap-3 flex-shrink-0 group"
                onClick={closeAllMenus}
              >
                <div className="relative w-12 h-12 rounded-xl overflow-hidden group-hover:shadow-lg transition-all duration-300">
                  <img
                    src="/ds-lg.jpeg"
                    alt="Dsigner Studio Interiors"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex flex-col leading-tight">
                  <span
                    className={`font-bold text-lg tracking-tight transition-colors duration-300 ${scrolled ? "text-orange-500" : "text-orange-500"
                      }`}
                  >
                    Dsigner Studio
                  </span>
                  <span className="text-xs font-bold text-gray-800 tracking-wider uppercase">
                    Interiors
                  </span>
                </div>
              </Link>

              {/* Desktop Navigation - Center */}
              <div className="hidden lg:flex items-center gap-6 xl:gap-8 absolute left-1/2 -translate-x-1/2">
                <Link
                  to="/"
                  className={`transition-all duration-300 text-sm font-semibold tracking-wide relative group whitespace-nowrap ${scrolled
                    ? "text-gray-700 hover:text-orange-600"
                    : "text-gray-700 hover:text-orange-600"
                    }`}
                  onClick={closeAllMenus}
                >
                  Home
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-orange-500`}
                  ></span>
                </Link>

                <Link
                  to="/about"
                  className={`transition-all duration-300 text-sm font-semibold tracking-wide relative group whitespace-nowrap ${scrolled
                    ? "text-gray-700 hover:text-orange-600"
                    : "text-gray-700 hover:text-orange-600"
                    }`}
                  onClick={closeAllMenus}
                >
                  About Us
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-orange-500`}
                  ></span>
                </Link>

                {/* Services Dropdown - ✅ Now uses Link */}
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() =>
                      setIsServicesDropdownOpen(!isServicesDropdownOpen)
                    }
                    className={`flex items-center gap-1 transition-all duration-300 text-sm font-semibold tracking-wide relative group whitespace-nowrap ${scrolled
                      ? "text-gray-700 hover:text-orange-600"
                      : "text-gray-700 hover:text-orange-600"
                      }`}
                  >
                    Services
                    <ChevronDown
                      className={`w-3 h-3 transition-transform duration-300 ${isServicesDropdownOpen ? "rotate-180" : ""
                        }`}
                    />
                    <span
                      className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-orange-500`}
                    ></span>
                  </button>

                  {isServicesDropdownOpen && (
                    <div className="absolute top-full left-0 mt-3 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 animate-fadeIn">
                      <div className="py-2 max-h-[60vh] overflow-y-auto">
                        {servicesList.map((service, idx) => (
                          // ✅ CHANGED: button → Link
                          <Link
                            key={idx}
                            to={service.path}
                            onClick={closeAllMenus}
                            className="w-full px-4 py-3 flex items-center gap-3 hover:bg-orange-50 transition-all duration-300 text-left group"
                          >
                            <div className="w-8 h-8 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform duration-300">
                              {service.icon}
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-gray-800 group-hover:text-orange-600 transition-colors">
                                {service.name}
                              </p>
                              <p className="text-xs text-gray-400">
                                {service.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <Link
                  to="/projects"
                  className={`transition-all duration-300 text-sm font-semibold tracking-wide relative group whitespace-nowrap ${scrolled
                    ? "text-gray-700 hover:text-orange-600"
                    : "text-gray-700 hover:text-orange-600"
                    }`}
                  onClick={closeAllMenus}
                >
                  Our Projects
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-orange-500`}
                  ></span>
                </Link>

                <Link
                  to="/gallery"
                  className={`transition-all duration-300 text-sm font-semibold tracking-wide relative group whitespace-nowrap ${scrolled
                    ? "text-gray-700 hover:text-orange-600"
                    : "text-gray-700 hover:text-orange-600"
                    }`}
                  onClick={closeAllMenus}
                >
                  Gallery
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-orange-500`}
                  ></span>
                </Link>

                <Link
                  to="/contact"
                  className={`transition-all duration-300 text-sm font-semibold tracking-wide relative group whitespace-nowrap ${scrolled
                    ? "text-gray-700 hover:text-orange-600"
                    : "text-gray-700 hover:text-orange-600"
                    }`}
                  onClick={closeAllMenus}
                >
                  Contact Us
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-orange-500`}
                  ></span>
                </Link>

                {/* More Dropdown - ✅ Now uses Link */}
                <div className="relative" ref={moreDropdownRef}>
                  <button
                    onClick={() => setIsMoreDropdownOpen(!isMoreDropdownOpen)}
                    className={`flex items-center gap-1 transition-all duration-300 text-sm font-semibold tracking-wide relative group whitespace-nowrap ${scrolled
                      ? "text-gray-700 hover:text-orange-600"
                      : "text-gray-700 hover:text-orange-600"
                      }`}
                  >
                    More
                    <ChevronDown
                      className={`w-3 h-3 transition-transform duration-300 ${isMoreDropdownOpen ? "rotate-180" : ""
                        }`}
                    />
                    <span
                      className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-orange-500`}
                    ></span>
                  </button>

                  {isMoreDropdownOpen && (
                    <div className="absolute top-full right-0 mt-3 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 animate-fadeIn">
                      <div className="py-2">
                        {moreList.map((item, idx) => (
                          // ✅ CHANGED: button → Link
                          <Link
                            key={idx}
                            to={item.path}
                            onClick={closeAllMenus}
                            className="w-full px-4 py-3 flex items-center gap-3 hover:bg-orange-50 transition-all duration-300 text-left group"
                          >
                            <div className="w-8 h-8 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform duration-300">
                              {item.icon}
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-gray-800 group-hover:text-orange-600 transition-colors">
                                {item.name}
                              </p>
                              <p className="text-xs text-gray-400">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Free Quote Button - Hidden on mobile, visible on desktop */}
              <div className="flex items-center gap-3">
                <div className="hidden lg:block">
                  <ConsultationButton
                    variant={scrolled ? "secondary" : "secondary"}
                    size="sm"
                  >
                    Free Quote
                  </ConsultationButton>
                </div>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`lg:hidden p-2 rounded-lg transition ${scrolled
                    ? "text-orange-500 hover:bg-orange-50"
                    : "text-gray-600 hover:bg-gray-50"
                    }`}
                >
                  {isMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Menu - ✅ All converted to Link */}
            <div
              className={`lg:hidden fixed left-0 right-0 bg-white rounded-b-2xl shadow-xl transition-all duration-500 overflow-y-auto ${isMenuOpen
                ? "top-[64px] opacity-100 visible z-50"
                : "top-[-100%] opacity-0 invisible"
                }`}
              style={{ maxHeight: "calc(100vh - 60px)" }}
            >
              <div className="py-4 px-4 space-y-2">
                <Link
                  to="/"
                  onClick={closeAllMenus}
                  className="block w-full text-left text-gray-700 py-2.5 px-3 rounded-lg hover:bg-orange-50 font-medium"
                >
                  Home
                </Link>

                <Link
                  to="/about"
                  onClick={closeAllMenus}
                  className="block w-full text-left text-gray-700 py-2.5 px-3 rounded-lg hover:bg-orange-50 font-medium"
                >
                  About Us
                </Link>

                {/* Mobile Services Dropdown - ✅ uses Link */}
                <div>
                  <button
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    className="flex items-center justify-between w-full text-left text-gray-700 py-2.5 px-3 rounded-lg hover:bg-orange-50 font-medium"
                  >
                    <span>Services</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${isMobileServicesOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  {isMobileServicesOpen && (
                    <div className="ml-4 mt-1 space-y-1 border-l-2 border-orange-200 pl-3">
                      {servicesList.map((service, idx) => (
                        // ✅ CHANGED: button → Link
                        <Link
                          key={idx}
                          to={service.path}
                          onClick={closeAllMenus}
                          className="block w-full text-left py-2 px-3 text-sm text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  to="/projects"
                  onClick={closeAllMenus}
                  className="block w-full text-left text-gray-700 py-2.5 px-3 rounded-lg hover:bg-orange-50 font-medium"
                >
                  Our Projects
                </Link>

                <Link
                  to="/gallery"
                  onClick={closeAllMenus}
                  className="block w-full text-left text-gray-700 py-2.5 px-3 rounded-lg hover:bg-orange-50 font-medium"
                >
                  Gallery
                </Link>

                <Link
                  to="/contact"
                  onClick={closeAllMenus}
                  className="block w-full text-left text-gray-700 py-2.5 px-3 rounded-lg hover:bg-orange-50 font-medium"
                >
                  Contact Us
                </Link>

                {/* Mobile More Dropdown - ✅ uses Link */}
                <div>
                  <button
                    onClick={() => setIsMobileMoreOpen(!isMobileMoreOpen)}
                    className="flex items-center justify-between w-full text-left text-gray-700 py-2.5 px-3 rounded-lg hover:bg-orange-50 font-medium"
                  >
                    <span>More</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${isMobileMoreOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  {isMobileMoreOpen && (
                    <div className="ml-4 mt-1 space-y-1 border-l-2 border-orange-200 pl-3">
                      {moreList.map((item, idx) => (
                        // ✅ CHANGED: button → Link
                        <Link
                          key={idx}
                          to={item.path}
                          onClick={closeAllMenus}
                          className="block w-full text-left py-2 px-3 text-sm text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-3">
                  <ConsultationButton
                    variant="secondary"
                    size="default"
                    fullWidth
                  >
                    Free Quote
                  </ConsultationButton>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="pt-0">
          <Outlet context={{ heroRef, aboutRef, servicesRef, contactRef }} />
        </main>

        {/* Footer - ✅ All converted to Link */}
        <footer className="bg-gray-900 text-white border-t border-gray-800 relative overflow-hidden">
          {/* Premium Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800/50"></div>
          <div className="absolute top-0 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 relative z-10">

            {/* Social Media - Premium Row */}
            <div className="border-y border-gray-800/60 mb-8 sm:mb-10 pb-6 sm:pb-8 relative">
              <div className="absolute left-0 top-0 w-20 h-px bg-gradient-to-r from-orange-500 to-transparent"></div>
              <div className="absolute right-0 bottom-0 w-20 h-px bg-gradient-to-l from-orange-500 to-transparent"></div>

              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <Link to="/" className="inline-block group" onClick={closeAllMenus}>
                    <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500 font-bold text-2xl sm:text-3xl md:text-4xl leading-tight tracking-tight">
                      Dsigner Studio Interiors
                    </h3>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-orange-500 to-transparent mt-1 group-hover:w-24 transition-all duration-500"></div>
                  </Link>
                  <p className="text-gray-400 text-sm sm:text-base max-w-md mt-3">
                    Creating beautiful spaces that inspire since 2012.
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3">
                  <a
                    href="https://www.facebook.com/profile.php?id=61590853052566"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-gray-800/50 hover:bg-[#1877f2] p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#1877f2]/20 border border-gray-700/50 hover:border-[#1877f2]"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href="https://www.instagram.com/dsignerstudiointeriors/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-gray-800/50 hover:bg-[#e4405f] p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#e4405f]/20 border border-gray-700/50 hover:border-[#e4405f]"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/dsigner-studio-interiors-889670417/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-gray-800/50 hover:bg-[#0a66c2] p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#0a66c2]/20 border border-gray-700/50 hover:border-[#0a66c2]"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href="https://www.youtube.com/@DsignerstudioInteriors"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-gray-800/50 hover:bg-[#ff0000] p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#ff0000]/20 border border-gray-700/50 hover:border-[#ff0000]"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Main Footer Grid - 4 Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">

              {/* Column 1 - Quick Links */}
              <div>
                <h4 className="text-white font-semibold text-base sm:text-lg mb-4 relative inline-block">
                  Quick Links
                  <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"></span>
                </h4>
                <ul className="space-y-2.5">
                  <li>
                    <Link to="/" onClick={closeAllMenus} className="text-gray-400 hover:text-white transition-all duration-300 text-sm flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full group-hover:scale-150 transition-transform"></span>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" onClick={closeAllMenus} className="text-gray-400 hover:text-white transition-all duration-300 text-sm flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full group-hover:scale-150 transition-transform"></span>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/gallery" onClick={closeAllMenus} className="text-gray-400 hover:text-white transition-all duration-300 text-sm flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full group-hover:scale-150 transition-transform"></span>
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" onClick={closeAllMenus} className="text-gray-400 hover:text-white transition-all duration-300 text-sm flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full group-hover:scale-150 transition-transform"></span>
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/blogs" onClick={closeAllMenus} className="text-gray-400 hover:text-white transition-all duration-300 text-sm flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full group-hover:scale-150 transition-transform"></span>
                      Blogs
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 2 - Services - ✅ Now uses Link */}
              <div>
                <h4 className="text-white font-semibold text-base sm:text-lg mb-4 relative inline-block">
                  Services
                  <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"></span>
                </h4>
                <ul className="space-y-2.5">
                  <li>
                    <Link
                      to="/services/interior-design"
                      onClick={closeAllMenus}
                      className="text-gray-400 hover:text-white transition-all duration-300 text-sm text-left flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full group-hover:scale-150 transition-transform"></span>
                      Interior Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/residential"
                      onClick={closeAllMenus}
                      className="text-gray-400 hover:text-white transition-all duration-300 text-sm text-left flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full group-hover:scale-150 transition-transform"></span>
                      Residential Interiors
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/commercial"
                      onClick={closeAllMenus}
                      className="text-gray-400 hover:text-white transition-all duration-300 text-sm text-left flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full group-hover:scale-150 transition-transform"></span>
                      Commercial Interiors
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/luxury-villas"
                      onClick={closeAllMenus}
                      className="text-gray-400 hover:text-white transition-all duration-300 text-sm text-left flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full group-hover:scale-150 transition-transform"></span>
                      Luxury Villa Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/3d-visualization"
                      onClick={closeAllMenus}
                      className="text-gray-400 hover:text-white transition-all duration-300 text-sm text-left flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full group-hover:scale-150 transition-transform"></span>
                      3D Visualization
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 3 - More */}
              <div>
                <h4 className="text-white font-semibold text-base sm:text-lg mb-4 relative inline-block">
                  More
                  <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"></span>
                </h4>
                <ul className="space-y-2.5">
                  <li>
                    <Link to="/modular-factory" onClick={closeAllMenus} className="text-gray-400 hover:text-white transition-all duration-300 text-sm flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full group-hover:scale-150 transition-transform"></span>
                      Modular Factory
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy" onClick={closeAllMenus} className="text-gray-400 hover:text-white transition-all duration-300 text-sm flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full group-hover:scale-150 transition-transform"></span>
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/terms-conditions" onClick={closeAllMenus} className="text-gray-400 hover:text-white transition-all duration-300 text-sm flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full group-hover:scale-150 transition-transform"></span>
                      Terms and Conditions
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 4 - Contact Info */}
              <div>
                <h4 className="text-white font-semibold text-base sm:text-lg mb-4 relative inline-block">
                  Contact Info
                  <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"></span>
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 group">
                    <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/20 transition-colors">
                      <Phone className="w-4 h-4 text-orange-500" />
                    </div>
                    <span className="text-gray-400 group-hover:text-white transition-colors text-sm break-words">
                      +91 90109 89991
                    </span>
                  </div>
                  <div className="flex items-start gap-3 group">
                    <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/20 transition-colors">
                      <Mail className="w-4 h-4 text-orange-500" />
                    </div>
                    <span className="text-gray-400 group-hover:text-white transition-colors text-sm break-all">
                      dsinteriorshyd1@gmail.com
                    </span>
                  </div>
                  <div className="flex items-start gap-3 group">
                    <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/20 transition-colors">
                      <MapPin className="w-4 h-4 text-orange-500" />
                    </div>
                    <span className="text-gray-400 group-hover:text-white transition-colors text-sm">
                      Door No 1-31/1, Raja Ram Enclave, Kondapur, Hyderabad-500084
                    </span>
                  </div>
                  <div className="flex items-start gap-3 group">
                    <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/20 transition-colors">
                      <Clock className="w-4 h-4 text-orange-500" />
                    </div>
                    <span className="text-gray-400 group-hover:text-white transition-colors text-sm">
                      Mon - Sat: 9AM - 7PM
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar - Premium */}
            <div className="border-t border-gray-800/60 mt-8 pt-6 relative">
              <div className="absolute left-0 top-0 w-32 h-px bg-gradient-to-r from-orange-500 to-transparent"></div>

              <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
                <p className="text-center text-gray-400 text-xs sm:text-sm">
                  &copy; {new Date().getFullYear()} <span className="text-orange-400 font-medium">Dsigner Studio Interiors</span>. All rights reserved.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm">
                  <Link to="/privacy-policy" onClick={closeAllMenus} className="text-gray-400 hover:text-orange-400 transition-all duration-300 relative group">
                    Privacy Policy
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-orange-400 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                  <span className="text-gray-700">|</span>
                  <Link to="/terms-conditions" onClick={closeAllMenus} className="text-gray-400 hover:text-orange-400 transition-all duration-300 relative group">
                    Terms and Conditions
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-orange-400 group-hover:w-full transition-all duration-300"></span>
                  </Link>

                  <span className="text-gray-700">|</span>
                  <span className="text-gray-400 flex items-center gap-1.5">
                    Designed with
                    <Heart className="w-3.5 h-3.5 text-orange-500 animate-pulse fill-orange-500/20" />
                    <span className="text-orange-400">for luxury living</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;