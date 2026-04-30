import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  MessageCircle,
  User,
  FileText,
  ArrowRight,
  Sparkles,
  Award,
  Users,
  Building,
  ChevronRight,
  Copy,
  Check,
  ExternalLink,
  Menu,
  X,
} from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });

  const [copied, setCopied] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showEmailOptions, setShowEmailOptions] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: true, margin: "-100px" });

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const companyInfo = {
    name: "D S Interiors",
    phone: "+91 90107 99991",
    email: "dsinteriorshyd1@gmail.com",
    address: "Door No 1-31/1, Raja Ram Enclave, Kondapur, Hyderabad-500084",
    hours: "Mon - Sat: 9AM - 7PM",
    sunday: "Sunday: Closed",
  };

  const services = [
    "Residential Design",
    "Commercial Spaces",
    "Interior Styling",
    "Luxury Villas",
    "Space Planning",
    "3D Visualization",
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitted: true, success: false, message: "Sending..." });

    setTimeout(() => {
      setFormStatus({
        submitted: true,
        success: true,
        message: "Thank you! We'll get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

      setTimeout(() => {
        setFormStatus({ submitted: false, success: false, message: "" });
      }, 5000);
    }, 1500);
  };

  const copyAddress = () => {
    navigator.clipboard.writeText(companyInfo.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const copyEmailAddress = () => {
    navigator.clipboard.writeText(companyInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
    setShowEmailOptions(false);
  };

  const openMaps = () => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(companyInfo.address)}`,
      "_blank",
    );
  };

  const handleEmailClick = () => {
    // Try to open default email client
    window.location.href = `mailto:${companyInfo.email}?subject=Inquiry%20from%20Website&body=Hello%20DS%20Interiors,%0A%0A`;

    // Show options modal after a short delay
    setTimeout(() => {
      setShowEmailOptions(true);
    }, 300);
  };

  const openGmail = () => {
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${companyInfo.email}&su=Inquiry%20from%20DS%20Interiors`,
      "_blank",
    );
    setShowEmailOptions(false);
  };

  const openOutlook = () => {
    window.open(
      `https://outlook.live.com/mail/0/deeplink/compose?to=${companyInfo.email}&subject=Inquiry%20from%20DS%20Interiors`,
      "_blank",
    );
    setShowEmailOptions(false);
  };

  const openYahoo = () => {
    window.open(
      `https://compose.mail.yahoo.com/?to=${companyInfo.email}&subject=Inquiry%20from%20DS%20Interiors`,
      "_blank",
    );
    setShowEmailOptions(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white overflow-x-hidden">
      {/* Email Options Modal */}
      {showEmailOptions && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl animate-fadeInUp">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-900">Send Email</h3>
              <button
                onClick={() => setShowEmailOptions(false)}
                className="p-1 hover:bg-gray-100 rounded-full transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-gray-600 mb-4">
              Choose how you'd like to send an email to {companyInfo.email}
            </p>
            <div className="space-y-3">
              <button
                onClick={copyEmailAddress}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors"
              >
                <Copy className="w-4 h-4" />
                Copy Email Address
              </button>
              <button
                onClick={openGmail}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                Open in Gmail
              </button>
              <button
                onClick={openOutlook}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
                </svg>
                Open in Outlook
              </button>
              <button
                onClick={openYahoo}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-purple-50 text-purple-600 rounded-xl hover:bg-purple-100 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                </svg>
                Open in Yahoo Mail
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[55vh] sm:min-h-[60vh] md:min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/0 via-black/60 to-black/0 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600"
            alt="Contact Hero"
            className="w-full h-full object-cover scale-110 animate-subtle-zoom"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-md rounded-full mb-4 sm:mb-6 border border-white/20">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400" />
              <span className="text-white/90 text-xs sm:text-sm tracking-wide">
                Get In Touch
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Let's Start a
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-amber-500">
                Conversation
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto px-4">
              Have a project in mind? We'd love to hear about it. Reach out to
              us and let's create something beautiful together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== MAIN CONTENT SECTION ===== */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* LEFT COLUMN - Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Section Header */}
              <div className="mb-6 sm:mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-amber-100 rounded-full mb-3 sm:mb-4">
                  <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 text-amber-600" />
                  <span className="text-amber-700 text-xs sm:text-sm font-semibold tracking-wide">
                    Contact Info
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Get in Touch With
                  <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                    {" "}
                    Us Today
                  </span>
                </h2>
                <p className="text-gray-600 text-base sm:text-lg">
                  We're here to answer your questions and bring your vision to
                  life.
                </p>
              </div>

              {/* Contact Cards Grid */}
              <div className="space-y-3 sm:space-y-4">
                {/* Phone Card */}
                <motion.div
                  whileHover={{ x: 5, sm: { x: 10 } }}
                  className="group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-500 text-xs sm:text-sm mb-1">
                        Phone Number
                      </p>
                      <a
                        href={`tel:${companyInfo.phone}`}
                        className="text-gray-900 font-semibold text-sm sm:text-lg hover:text-amber-600 transition break-all"
                      >
                        {companyInfo.phone}
                      </a>
                      <p className="text-gray-400 text-xs mt-1">
                        Available 24/7 for emergencies
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Email Card - FIXED with modal options */}
                <motion.div
                  whileHover={{ x: 5, sm: { x: 10 } }}
                  className="group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-500 text-xs sm:text-sm mb-1">
                        Email Address
                      </p>

                      {/* Clickable Email Link */}
                      <button
                        onClick={handleEmailClick}
                        className="text-gray-900 font-semibold text-sm sm:text-lg hover:text-amber-600 transition break-all text-left"
                      >
                        {companyInfo.email}
                      </button>

                      {/* Email Action Buttons */}
                      <div className="flex flex-wrap gap-2 mt-2">
                        <button
                          onClick={copyEmailAddress}
                          className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg hover:bg-gray-200 transition-colors"
                        >
                          {copiedEmail ? (
                            <Check className="w-3 h-3" />
                          ) : (
                            <Copy className="w-3 h-3" />
                          )}
                          {copiedEmail ? "Copied!" : "Copy Email"}
                        </button>
                        <button
                          onClick={openGmail}
                          className="inline-flex items-center gap-1 px-2 py-1 bg-red-50 text-red-600 text-xs rounded-lg hover:bg-red-100 transition-colors"
                        >
                          <svg
                            className="w-3 h-3"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                          </svg>
                          Gmail
                        </button>
                        <button
                          onClick={openOutlook}
                          className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-lg hover:bg-blue-100 transition-colors"
                        >
                          <svg
                            className="w-3 h-3"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
                          </svg>
                          Outlook
                        </button>
                      </div>

                      <p className="text-gray-400 text-xs mt-2">
                        We reply within 24 hours
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Address Card */}
                <motion.div
                  whileHover={{ x: 5, sm: { x: 10 } }}
                  className="group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-500 text-xs sm:text-sm mb-1">
                        Our Location
                      </p>
                      <p className="text-gray-900 font-semibold text-sm sm:text-lg break-words">
                        {companyInfo.address}
                      </p>
                      <div className="flex flex-wrap gap-2 sm:gap-3 mt-2">
                        <button
                          onClick={copyAddress}
                          className="text-amber-600 text-xs sm:text-sm hover:text-amber-700 flex items-center gap-1 transition"
                        >
                          {copied ? (
                            <Check className="w-3 h-3" />
                          ) : (
                            <Copy className="w-3 h-3" />
                          )}
                          {copied ? "Copied!" : "Copy Address"}
                        </button>
                        <button
                          onClick={openMaps}
                          className="text-amber-600 text-xs sm:text-sm hover:text-amber-700 flex items-center gap-1 transition"
                        >
                          <ExternalLink className="w-3 h-3" />
                          Get Directions
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Hours Card */}
                <motion.div
                  whileHover={{ x: 5, sm: { x: 10 } }}
                  className="group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-500 text-xs sm:text-sm mb-1">
                        Business Hours
                      </p>
                      <p className="text-gray-900 font-semibold text-sm sm:text-base">
                        {companyInfo.hours}
                      </p>
                      <p className="text-gray-500 text-xs sm:text-sm">
                        {companyInfo.sunday}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-6 sm:mt-8"
              >
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
                  Follow Us
                </h3>
                <div className="flex justify-between gap-2 sm:gap-3 flex-wrap">
                  {[
                    {
                      icon: <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />,
                      name: "Facebook",
                      color: "hover:bg-blue-600",
                      href: "#",
                    },
                    {
                      icon: <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />,
                      name: "Instagram",
                      color:
                        "hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600",
                      href: "#",
                    },
                    {
                      icon: <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />,
                      name: "Twitter",
                      color: "hover:bg-sky-500",
                      href: "#",
                    },
                    {
                      icon: <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />,
                      name: "LinkedIn",
                      color: "hover:bg-blue-700",
                      href: "#",
                    },
                    {
                      icon: <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />,
                      name: "YouTube",
                      color: "hover:bg-red-600",
                      href: "#",
                    },
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 transition-all duration-300 ${social.color} hover:text-white hover:scale-110`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT COLUMN - Contact Form (keep as is) */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-8 border border-gray-100">
                <div className="mb-5 sm:mb-6">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    Send Us a Message
                  </h3>
                  <p className="text-gray-500 text-sm sm:text-base">
                    Fill out the form and we'll get back to you shortly
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-5"
                >
                  {/* Name Field */}
                  <div className="group">
                    <label className="block text-gray-700 text-xs sm:text-sm font-semibold mb-1 sm:mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-focus-within:text-amber-500 transition-colors" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 text-sm sm:text-base border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="group">
                    <label className="block text-gray-700 text-xs sm:text-sm font-semibold mb-1 sm:mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-focus-within:text-amber-500 transition-colors" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 text-sm sm:text-base border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div className="group">
                    <label className="block text-gray-700 text-xs sm:text-sm font-semibold mb-1 sm:mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-focus-within:text-amber-500 transition-colors" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 text-sm sm:text-base border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div className="group">
                    <label className="block text-gray-700 text-xs sm:text-sm font-semibold mb-1 sm:mb-2">
                      Service Interested In *
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-focus-within:text-amber-500 transition-colors" />
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 text-sm sm:text-base border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all appearance-none bg-white"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, idx) => (
                          <option key={idx} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="group">
                    <label className="block text-gray-700 text-xs sm:text-sm font-semibold mb-1 sm:mb-2">
                      Your Message *
                    </label>
                    <div className="relative">
                      <FileText className="absolute left-3 top-3 sm:top-4 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-focus-within:text-amber-500 transition-colors" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="3"
                        className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 text-sm sm:text-base border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                        placeholder="Tell us about your project..."
                      ></textarea>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={formStatus.submitted && !formStatus.success}
                    className="w-full py-3 sm:py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-70 text-sm sm:text-base"
                  >
                    {formStatus.submitted && !formStatus.success ? (
                      <>
                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </motion.button>

                  {/* Form Status Message */}
                  {formStatus.submitted && formStatus.success && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 p-3 sm:p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm sm:text-base"
                    >
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                      <span>{formStatus.message}</span>
                    </motion.div>
                  )}

                  {formStatus.submitted &&
                    !formStatus.success &&
                    formStatus.message !== "Sending..." && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 p-3 sm:p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm sm:text-base"
                      >
                        <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                        <span>{formStatus.message}</span>
                      </motion.div>
                    )}
                </form>

                {/* Form Guarantee */}
                <div className="mt-2 sm:mt-4 pt-3 sm:pt-6 border-t border-gray-100">
                  <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      Privacy Guaranteed
                    </span>
                    <span className="hidden sm:inline">•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-amber-500" />
                      24hr Response
                    </span>
                    <span className="hidden sm:inline">•</span>
                    <span className="flex items-center gap-1">
                      <Award className="w-3 h-3 text-amber-500" />
                      Free Consultation
                    </span>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-r from-amber-100 to-orange-200 rounded-xl sm:rounded-2xl shadow-2xl"
              >
                <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-4 sm:gap-6 justify-between">
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-amber-600">
                      500+
                    </div>
                    <div className="text-xs text-gray-600">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-amber-600">
                      200+
                    </div>
                    <div className="text-xs text-gray-600">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-amber-600">
                      12+
                    </div>
                    <div className="text-xs text-gray-600">Years</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-amber-600">
                      24/7
                    </div>
                    <div className="text-xs text-gray-600">Support</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== MAP SECTION ===== */}
      <section className="py-8 sm:py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
              <iframe
                title="D S Interiors Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5!2d78.3!3d17.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI0JzAwLjAiTiA3OMKwMTgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
                className="absolute inset-0 w-full h-full"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* Map Overlay Card */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-auto sm:right-4 sm:bottom-4 sm:w-80 bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-900 font-semibold text-xs sm:text-sm">
                      Visit Our Studio
                    </p>
                    <p className="text-gray-500 text-xs truncate">
                      {companyInfo.address.split(",")[0]}
                    </p>
                    <button
                      onClick={openMaps}
                      className="text-amber-600 text-xs font-medium mt-1 hover:text-amber-700 flex items-center gap-1"
                    >
                      Get Directions
                      <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-8 sm:mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-amber-100 rounded-full mb-3 sm:mb-4">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-amber-600" />
              <span className="text-amber-700 text-xs sm:text-sm font-semibold">
                FAQs
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Frequently Asked
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                {" "}
                Questions
              </span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg">
              Find answers to common questions about our services
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {[
              {
                q: "How long does a typical project take?",
                a: "Project duration varies based on scope. Small projects take 2-4 weeks, while complete home renovations may take 2-3 months.",
              },
              {
                q: "Do you offer free consultations?",
                a: "Yes! We offer a free initial consultation to understand your needs and provide a project estimate.",
              },
              {
                q: "What areas do you serve?",
                a: "We primarily serve Hyderabad and surrounding areas, but we're open to projects across India.",
              },
              {
                q: "Can I see your portfolio?",
                a: "Absolutely! Visit our Portfolio section to see examples of our completed projects.",
              },
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">
                  {faq.q}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="mb-6 py-12 sm:py-16 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-4">
              Ready to Transform Your Space?
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-white/90 px-4">
              Let's discuss your project and bring your vision to life
            </p>
            <a
              href={`tel:${companyInfo.phone}`}
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-amber-600 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              Call Us Now
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition" />
            </a>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        @keyframes subtle-zoom {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
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
        
        .animate-subtle-zoom {
          animation: subtle-zoom 20s ease-in-out infinite;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ContactUs;
