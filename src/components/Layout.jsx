import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import ConsultationButton from "../components/ConsultationButton";
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
  Briefcase,
  Image,
  Mail,
  Info,
  FolderKanban,
  Grid,
  BookOpen,
  Users,
  Factory,
} from "lucide-react";

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileMoreOpen, setIsMobileMoreOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showContact, setShowContact] = useState(false);
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

  const moreList = [
    {
      name: "Blogs",
      icon: <BookOpen className="w-4 h-4" />,
      description: "Latest design trends & insights",
      path: "/blogs",
    },
    {
      name: "Careers",
      icon: <Users className="w-4 h-4" />,
      description: "Join our creative team",
      path: "/careers",
    },
    {
      name: "Modular Factory",
      icon: <Factory className="w-4 h-4" />,
      description: "State-of-the-art manufacturing",
      path: "/modular-factory",
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

  const handleServiceClick = (servicePath) => {
    navigate(servicePath);
    setIsMenuOpen(false);
    setIsServicesDropdownOpen(false);
    setIsMoreDropdownOpen(false);
    setIsMobileServicesOpen(false);
    setIsMobileMoreOpen(false);
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
            ? "bg-white/10 backdrop-blur-xl shadow-lg shadow-black/5 py-2"
            : "bg-transparent bg-white py-3"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 sm:gap-3 flex-shrink-0"
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
              <div className="w-10 h-10 sm:w-12 sm:h-12">
                <img
                  src="logo3.png"
                  alt="D S Interiors Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <h1
                  className={`font-bold text-sm sm:text-base md:text-lg tracking-tight transition-colors duration-300 ${
                    scrolled ? "text-orange-600" : "text-orange-600"
                  }`}
                >
                  D S Interiors
                </h1>
                <p
                  className={`text-[10px] tracking-wide transition-colors duration-300 ${
                    scrolled ? "text-blue-900" : "text-blue-900"
                  }`}
                >
                  INTERIOR DESIGN STUDIO
                </p>
              </div>
            </Link>

            {/* Desktop Navigation - Center */}
            <div className="hidden lg:flex items-center gap-5 xl:gap-8 absolute left-1/2 -translate-x-1/2">
              <Link
                to="/"
                className={`transition-all duration-300 text-sm font-medium tracking-wide relative group whitespace-nowrap ${
                  scrolled
                    ? "text-gray-700 hover:text-orange-600"
                    : "text-gray-700 hover:text-orange-600"
                }`}
              >
                Home
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    scrolled ? "bg-orange-500" : "bg-orange-500"
                  }`}
                ></span>
              </Link>

              <Link
                to="/about"
                className={`transition-all duration-300 text-sm font-medium tracking-wide relative group whitespace-nowrap ${
                  scrolled
                    ? "text-gray-700 hover:text-orange-600"
                    : "text-gray-700 hover:text-orange-600"
                }`}
              >
                About Us
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    scrolled ? "bg-orange-500" : "bg-orange-500"
                  }`}
                ></span>
              </Link>

              {/* Services Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() =>
                    setIsServicesDropdownOpen(!isServicesDropdownOpen)
                  }
                  className={`flex items-center gap-1 transition-all duration-300 text-sm font-medium tracking-wide relative group whitespace-nowrap ${
                    scrolled
                      ? "text-gray-700 hover:text-orange-600"
                      : "text-gray-700 hover:text-orange-600"
                  }`}
                >
                  Services
                  <ChevronDown
                    className={`w-3 h-3 transition-transform duration-300 ${isServicesDropdownOpen ? "rotate-180" : ""}`}
                  />
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                      scrolled ? "bg-orange-500" : "bg-orange-500"
                    }`}
                  ></span>
                </button>

                {isServicesDropdownOpen && (
                  <div className="absolute top-full left-0 mt-3 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50">
                    <div className="py-2">
                      {servicesList.map((service, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleServiceClick(service.path)}
                          className="w-full px-4 py-2.5 flex items-center gap-3 hover:bg-orange-50 transition-all duration-300 text-left"
                        >
                          <div className="w-7 h-7 bg-orange-100 rounded-lg flex items-center justify-center text-orange-500">
                            {service.icon}
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-800">
                              {service.name}
                            </p>
                            <p className="text-xs text-gray-400">
                              {service.description}
                            </p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/projects"
                className={`transition-all duration-300 text-sm font-medium tracking-wide relative group whitespace-nowrap ${
                  scrolled
                    ? "text-gray-700 hover:text-orange-600"
                    : "text-gray-700 hover:text-orange-600"
                }`}
              >
                Our Projects
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    scrolled ? "bg-orange-500" : "bg-orange-500"
                  }`}
                ></span>
              </Link>

              <Link
                to="/gallery"
                className={`transition-all duration-300 text-sm font-medium tracking-wide relative group whitespace-nowrap ${
                  scrolled
                    ? "text-gray-700 hover:text-orange-600"
                    : "text-gray-700 hover:text-orange-600"
                }`}
              >
                Gallery
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    scrolled ? "bg-orange-500" : "bg-orange-500"
                  }`}
                ></span>
              </Link>

              <Link
                to="/contact"
                className={`transition-all duration-300 text-sm font-medium tracking-wide relative group whitespace-nowrap ${
                  scrolled
                    ? "text-gray-700 hover:text-orange-600"
                    : "text-gray-700 hover:text-orange-600"
                }`}
              >
                Contact Us
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    scrolled ? "bg-orange-500" : "bg-orange-500"
                  }`}
                ></span>
              </Link>

              {/* More Dropdown */}
              <div className="relative" ref={moreDropdownRef}>
                <button
                  onClick={() => setIsMoreDropdownOpen(!isMoreDropdownOpen)}
                  className={`flex items-center gap-1 transition-all duration-300 text-sm font-medium tracking-wide relative group whitespace-nowrap ${
                    scrolled
                      ? "text-gray-700 hover:text-orange-600"
                      : "text-gray-700 hover:text-orange-600"
                  }`}
                >
                  More
                  <ChevronDown
                    className={`w-3 h-3 transition-transform duration-300 ${isMoreDropdownOpen ? "rotate-180" : ""}`}
                  />
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                      scrolled ? "bg-orange-500" : "bg-orange-500"
                    }`}
                  ></span>
                </button>

                {isMoreDropdownOpen && (
                  <div className="absolute top-full right-0 mt-3 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50">
                    <div className="py-2">
                      {moreList.map((item, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleServiceClick(item.path)}
                          className="w-full px-4 py-2.5 flex items-center gap-3 hover:bg-orange-50 transition-all duration-300 text-left"
                        >
                          <div className="w-7 h-7 bg-orange-100 rounded-lg flex items-center justify-center text-orange-500">
                            {item.icon}
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-800">
                              {item.name}
                            </p>
                            <p className="text-xs text-gray-400">
                              {item.description}
                            </p>
                          </div>
                        </button>
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
                  variant={scrolled ? "secondary" : "primary"}
                  size="sm"
                >
                  Free Quote
                </ConsultationButton>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`lg:hidden p-2 rounded-lg transition ${
                  scrolled
                    ? "text-orange-500 hover:bg-orange-100"
                    : "text-gray-600 hover:bg-white/10"
                }`}
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden fixed left-0 right-0 bg-white shadow-xl transition-all duration-500 overflow-y-auto ${
              isMenuOpen
                ? "top-[55px] opacity-100 visible"
                : "top-[-100%] opacity-0 invisible"
            }`}
            style={{ maxHeight: "calc(100vh - 60px)" }}
          >
            <div className="py-4 px-4 space-y-2">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left text-gray-700 py-2.5 px-3 rounded-lg hover:bg-orange-50 font-medium"
              >
                Home
              </Link>

              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left text-gray-700 py-2.5 px-3 rounded-lg hover:bg-orange-50 font-medium"
              >
                About Us
              </Link>

              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="flex items-center justify-between w-full text-left text-gray-700 py-2.5 px-3 rounded-lg hover:bg-orange-50 font-medium"
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${isMobileServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isMobileServicesOpen && (
                  <div className="ml-4 mt-1 space-y-1 border-l-2 border-orange-200 pl-3">
                    {servicesList.map((service, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleServiceClick(service.path)}
                        className="w-full text-left py-2 px-3 text-sm text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg"
                      >
                        {service.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/projects"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left text-gray-700 py-2.5 px-3 rounded-lg hover:bg-orange-50 font-medium"
              >
                Our Projects
              </Link>

              <Link
                to="/gallery"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left text-gray-700 py-2.5 px-3 rounded-lg hover:bg-orange-50 font-medium"
              >
                Gallery
              </Link>

              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left text-gray-700 py-2.5 px-3 rounded-lg hover:bg-orange-50 font-medium"
              >
                Contact Us
              </Link>

              {/* Mobile More Dropdown */}
              <div>
                <button
                  onClick={() => setIsMobileMoreOpen(!isMobileMoreOpen)}
                  className="flex items-center justify-between w-full text-left text-gray-700 py-2.5 px-3 rounded-lg hover:bg-orange-50 font-medium"
                >
                  <span>More</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${isMobileMoreOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isMobileMoreOpen && (
                  <div className="ml-4 mt-1 space-y-1 border-l-2 border-orange-200 pl-3">
                    {moreList.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleServiceClick(item.path)}
                        className="w-full text-left py-2 px-3 text-sm text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg"
                      >
                        {item.name}
                      </button>
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-orange-500 font-bold text-xl mb-4">
                D S Interiors
              </h3>
              <p className="text-gray-400 text-sm">
                Creating beautiful spaces that inspire since 2012.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <Link to="/" className="hover:text-orange-400">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-orange-400">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="hover:text-orange-400">
                    Our Projects
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="hover:text-orange-400">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-orange-400">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                {servicesList.slice(0, 4).map((service, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => handleServiceClick(service.path)}
                      className="hover:text-orange-400"
                    >
                      {service.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-400 text-sm">{companyInfo.phone}</p>
              <p className="text-gray-400 text-sm mt-2">{companyInfo.email}</p>
              <p className="text-gray-400 text-sm mt-2">
                {companyInfo.address}
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 text-sm">
            <p>
              {" "}
              &copy; 2026 D S Interiors. All rights reserved. | Designed with{" "}
              <Heart className="w-3 h-3 inline text-amber-500" /> for luxury
              living.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
