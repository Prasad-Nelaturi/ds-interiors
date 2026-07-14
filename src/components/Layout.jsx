import React, { useState, useEffect, useRef } from "react";
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
  Mail,
  BookOpen,
  Users,
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
} from "lucide-react";

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();
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

  const companyInfo = {
    name: "Dsigner Studio Interiors",
    tagline: "Creating Spaces That Inspire",
    rating: 4.8,
    reviews: 128,
    status: "Premium",
    location: "Kondapur, Hyderabad",
    hours: "Mon - Sat: 9AM - 7PM",
    experience: "12+ Years",
    phone: "+91 90109 89991",
    address: "Door No 1-31/1, Raja Ram Enclave, Kondapur, Hyderabad-500084",
    email: "dsinteriorshyd1@gmail.com",
  };

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
    {
      name: "Privacy Policy",
      icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />,
      description: "Your privacy & data security",
      path: "/privacy-policy",
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

  const isHomePage = location.pathname === "/";

  return (
    <div className="container mx-auto min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <nav
        className={`container mx-auto fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
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
              <div className="relative w-12 h-12 rounded-xl overflow-hidden group-hover:shadow-lg transition-all duration-300">
                <img
                  src="/ds-lg.jpeg"
                  alt="Dsigner Studio Interiors"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span
                  className={`font-bold text-lg tracking-tight transition-colors duration-300 ${
                    scrolled ? "text-orange-500" : "text-orange-500"
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
                className={`transition-all duration-300 text-sm font-semibold tracking-wide relative group whitespace-nowrap ${
                  scrolled
                    ? "text-gray-700 hover:text-orange-600"
                    : "text-gray-700 hover:text-orange-600"
                }`}
              >
                Home
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-orange-500`}
                ></span>
              </Link>

              <Link
                to="/about"
                className={`transition-all duration-300 text-sm font-semibold tracking-wide relative group whitespace-nowrap ${
                  scrolled
                    ? "text-gray-700 hover:text-orange-600"
                    : "text-gray-700 hover:text-orange-600"
                }`}
              >
                About Us
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-orange-500`}
                ></span>
              </Link>

              {/* Services Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() =>
                    setIsServicesDropdownOpen(!isServicesDropdownOpen)
                  }
                  className={`flex items-center gap-1 transition-all duration-300 text-sm font-semibold tracking-wide relative group whitespace-nowrap ${
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
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-orange-500`}
                  ></span>
                </button>

                {isServicesDropdownOpen && (
                  <div className="absolute top-full left-0 mt-3 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 animate-fadeIn">
                    <div className="py-2 max-h-[70vh] overflow-y-auto">

                      {servicesList.map((service, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleServiceClick(service.path)}
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
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/projects"
                className={`transition-all duration-300 text-sm font-semibold tracking-wide relative group whitespace-nowrap ${
                  scrolled
                    ? "text-gray-700 hover:text-orange-600"
                    : "text-gray-700 hover:text-orange-600"
                }`}
              >
                Our Projects
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-orange-500`}
                ></span>
              </Link>

              <Link
                to="/gallery"
                className={`transition-all duration-300 text-sm font-semibold tracking-wide relative group whitespace-nowrap ${
                  scrolled
                    ? "text-gray-700 hover:text-orange-600"
                    : "text-gray-700 hover:text-orange-600"
                }`}
              >
                Gallery
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-orange-500`}
                ></span>
              </Link>

              <Link
                to="/contact"
                className={`transition-all duration-300 text-sm font-semibold tracking-wide relative group whitespace-nowrap ${
                  scrolled
                    ? "text-gray-700 hover:text-orange-600"
                    : "text-gray-700 hover:text-orange-600"
                }`}
              >
                Contact Us
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-orange-500`}
                ></span>
              </Link>

              {/* More Dropdown */}
              <div className="relative" ref={moreDropdownRef}>
                <button
                  onClick={() => setIsMoreDropdownOpen(!isMoreDropdownOpen)}
                  className={`flex items-center gap-1 transition-all duration-300 text-sm font-semibold tracking-wide relative group whitespace-nowrap ${
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
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-orange-500`}
                  ></span>
                </button>

                {isMoreDropdownOpen && (
                  <div className="absolute top-full right-0 mt-3 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 animate-fadeIn">
                    <div className="py-2">
                      {moreList.map((item, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleServiceClick(item.path)}
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
                  variant={scrolled ? "secondary" : "secondary"}
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

          {/* Mobile Menu */}
          <div
            className={`lg:hidden fixed left-0 right-0 bg-white rounded-b-2xl shadow-xl transition-all duration-500 overflow-y-auto ${
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
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Column 1 - Brand & Social */}
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="text-orange-500 font-bold text-2xl mb-4">
                Dsigner Studio Interiors
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Creating beautiful spaces that inspire since 2012.
              </p>

              {/* Social Icons - Fully Responsive */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.facebook.com/profile.php?id=61590853052566"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-orange-500 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/20"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a
                  href="https://www.instagram.com/dsignerstudiointeriors/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-orange-500 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/20"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/dsigner-studio-interiors-889670417/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-orange-500 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/20"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a
                  href=" https://www.youtube.com/@DsignerstudioInteriors"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-orange-500 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/20"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              </div>
            </div>

            {/* Column 2 - Quick Links */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/"
                    className="text-gray-400 hover:text-orange-400 transition-colors text-sm"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-gray-400 hover:text-orange-400 transition-colors text-sm"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/projects"
                    className="text-gray-400 hover:text-orange-400 transition-colors text-sm"
                  >
                    Our Projects
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gallery"
                    className="text-gray-400 hover:text-orange-400 transition-colors text-sm"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-400 hover:text-orange-400 transition-colors text-sm"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 - Services */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">
                Services
              </h4>
              <ul className="space-y-3">
                {servicesList.slice(0, 4).map((service, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => handleServiceClick(service.path)}
                      className="text-gray-400 hover:text-orange-400 transition-colors text-sm text-left"
                    >
                      {service.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 - Contact */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">Contact</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400 text-sm break-words">
                    {companyInfo.phone}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400 text-sm break-all">
                    {companyInfo.email}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400 text-sm">
                    {companyInfo.address}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <p className="text-center text-gray-400 text-sm flex flex-wrap items-center justify-center gap-1">
              &copy; 2026 Dsigner Studio Interiors. All rights reserved.
              <span className="hidden sm:inline">|</span>
              <span className="flex items-center gap-1">
                Designed with
                <Heart className="w-4 h-4 text-amber-500 animate-pulse" />
                for luxury living.
              </span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
