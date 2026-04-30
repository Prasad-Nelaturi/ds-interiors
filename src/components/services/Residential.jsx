import React, { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  Home,
  Bed,
  Sofa,
  Bath,
  UtensilsCrossed,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Award,
  Star,
  Phone,
  Calendar,
  MessageCircle,
  ChevronRight,
  Paintbrush,
  Layout,
  Lightbulb,
  Ruler,
  Palette,
  Crown,
  Shield,
  TrendingUp,
  Heart,
  Zap,
  Leaf,
  Volume2,
  Thermometer,
  Wifi,
  Lock,
  Wind,
  Droplets,
} from "lucide-react";

const ResidentialService = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");

  const companyInfo = {
    phone: "+91 98765 43210",
    email: "hello@dsinteriors.com",
  };

  const features = [
    {
      icon: <Layout className="w-6 h-6" />,
      title: "Custom Layout Design",
      description: "Personalized floor plans optimized for your lifestyle",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Color Consultation",
      description: "Expert color psychology and palette selection",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Lighting Design",
      description: "Strategic lighting plans for every room",
      color: "from-yellow-500 to-amber-500",
    },
    {
      icon: <Ruler className="w-6 h-6" />,
      title: "Space Optimization",
      description: "Maximize every square foot of your home",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Crown className="w-6 h-6" />,
      title: "Luxury Finishes",
      description: "Premium materials and exquisite detailing",
      color: "from-amber-600 to-orange-600",
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Sustainable Design",
      description: "Eco-friendly materials and practices",
      color: "from-emerald-500 to-teal-500",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We discuss your vision, needs, and budget",
      icon: <MessageCircle className="w-6 h-6" />,
    },
    {
      step: "02",
      title: "Design Concept",
      description: "Creating mood boards and 3D visualizations",
      icon: <Paintbrush className="w-6 h-6" />,
    },
    {
      step: "03",
      title: "Material Selection",
      description: "Choosing premium materials and finishes",
      icon: <Palette className="w-6 h-6" />,
    },
    {
      step: "04",
      title: "Execution",
      description: "Professional implementation with quality control",
      icon: <Users className="w-6 h-6" />,
    },
    {
      step: "05",
      title: "Final Reveal",
      description: "Walkthrough and final touches",
      icon: <Sparkles className="w-6 h-6" />,
    },
  ];

  const rooms = [
    {
      name: "Living Room",
      icon: <Sofa className="w-8 h-8" />,
      image:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800",
      description:
        "Elegant and inviting spaces for entertainment and relaxation",
      features: [
        "Custom seating",
        "Entertainment units",
        "Accent walls",
        "Lighting design",
      ],
    },
    {
      name: "Bedroom",
      icon: <Bed className="w-8 h-8" />,
      image:
        "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800",
      description: "Tranquil retreats designed for rest and rejuvenation",
      features: [
        "Custom wardrobes",
        "Headboard designs",
        "Ambient lighting",
        "Window treatments",
      ],
    },
    {
      name: "Kitchen",
      icon: <UtensilsCrossed className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800",
      description: "Functional yet beautiful culinary spaces",
      features: [
        "Modular kitchens",
        "Smart storage",
        "Premium countertops",
        "Ventilation systems",
      ],
    },
    {
      name: "Bathroom",
      icon: <Bath className="w-8 h-8" />,
      image:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800",
      description: "Spa-like bathrooms with luxury fixtures",
      features: ["Vanity units", "Rain showers", "Bathtubs", "Premium tiles"],
    },
  ];

  const portfolio = [
    {
      id: 1,
      title: "Modern Luxury Villa",
      category: "Living Room",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800",
    },
    {
      id: 2,
      title: "Elegant Master Suite",
      category: "Bedroom",
      image:
        "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800",
    },
    {
      id: 3,
      title: "Contemporary Kitchen",
      category: "Kitchen",
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800",
    },
    {
      id: 4,
      title: "Spa Bathroom",
      category: "Bathroom",
      image:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800",
    },
    {
      id: 5,
      title: "Cozy Living Space",
      category: "Living Room",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    },
    {
      id: 6,
      title: "Luxury Bedroom",
      category: "Bedroom",
      image:
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Homeowner",
      text: "D S Interiors transformed our house into a dream home. The attention to detail is impeccable!",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
    },
    {
      name: "Priya Sharma",
      role: "Homeowner",
      text: "Professional team, stunning designs, and delivered on time. Highly recommended!",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    },
  ];

  const openMaps = () => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=Hyderabad`,
      "_blank",
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white overflow-x-hidden">
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600"
            alt="Residential Interior Design"
            className="w-full h-full object-cover scale-110 animate-subtle-zoom"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-md rounded-full mb-4 sm:mb-6 border border-white/20">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400" />
              <span className="text-white/90 text-xs sm:text-sm tracking-wide">
                Residential Design
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Create Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-amber-500">
                Dream Home
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed mb-6 sm:mb-8">
              Transform your house into a home that reflects your personality
              and lifestyle. Our expert designers create spaces that are both
              beautiful and functional.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openMaps}
                className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full font-semibold shadow-2xl hover:shadow-3xl flex items-center gap-2 transition-all duration-300 text-sm sm:text-base"
              >
                Start Your Journey
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex items-center gap-2 text-sm sm:text-base"
              >
                View Portfolio
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 py-4">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-white">
            <div>
              <div className="text-2xl sm:text-3xl font-bold">500+</div>
              <div className="text-xs sm:text-sm opacity-90">
                Projects Completed
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold">200+</div>
              <div className="text-xs sm:text-sm opacity-90">
                Happy Families
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold">12+</div>
              <div className="text-xs sm:text-sm opacity-90">
                Years Experience
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold">100%</div>
              <div className="text-xs sm:text-sm opacity-90">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== INTRODUCTION SECTION ===== */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 border-t-4 border-l-4 border-amber-300"></div>
                <div className="relative rounded-[10%_60%_10%_40%/_10%_70%_10%_80%] overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800"
                    alt="Luxury Home Interior"
                    className="w-full h-[400px] object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-2xl p-4 max-w-[240px]">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">
                        Award Winning
                      </div>
                      <div className="text-gray-500 text-sm">
                        Best Design Studio
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full mb-4">
                <Home className="w-4 h-4 text-amber-600" />
                <span className="text-amber-700 text-sm font-semibold">
                  Why Choose Us
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Transforming Houses Into
                <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                  {" "}
                  Dream Homes
                </span>
              </h2>
              <p className="text-gray-600 text-base sm:text-lg mb-6 leading-relaxed">
                We believe that every home should tell a story. Our residential
                design service focuses on creating spaces that are not just
                visually stunning but also deeply personal and functional.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    Personalized design solutions tailored to your lifestyle
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    End-to-end project management from concept to completion
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    Premium materials and quality craftsmanship
                  </p>
                </div>
              </div>
              <button className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 transition group">
                Learn More About Our Process
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-amber-50/20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-4 shadow-sm">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span className="text-amber-700 text-sm font-semibold">
                What We Offer
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Premium{" "}
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                Features
              </span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Every detail matters. We provide comprehensive design solutions
              that elevate your living experience.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                style={{
                  borderBottom: `4px solid ${
                    feature.color === "from-amber-500 to-orange-500"
                      ? "#f59e0b"
                      : feature.color === "from-purple-500 to-pink-500"
                        ? "#a855f7"
                        : feature.color === "from-yellow-500 to-amber-500"
                          ? "#eab308"
                          : feature.color === "from-blue-500 to-cyan-500"
                            ? "#3b82f6"
                            : feature.color === "from-amber-600 to-orange-600"
                              ? "#d97706"
                              : "#10b981"
                  }`,
                }}
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-[30%_70%_70%_30%/_30%_35%_65%_70%] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500`}
                >
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ROOMS SECTION ===== */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full mb-4">
              <Home className="w-4 h-4 text-amber-600" />
              <span className="text-amber-700 text-sm font-semibold">
                Every Space Matters
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Designed For{" "}
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                Every Room
              </span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Comprehensive design solutions for every corner of your home
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {rooms.map((room, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                        {room.icon}
                      </div>
                      <h3 className="text-2xl font-bold">{room.name}</h3>
                    </div>
                    <p className="text-white/90 text-sm mb-3">
                      {room.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {room.features.map((feature, i) => (
                        <span
                          key={i}
                          className="text-xs bg-white/20 backdrop-blur px-2 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS SECTION ===== */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur rounded-full mb-4">
              <TrendingUp className="w-4 h-4 text-amber-400" />
              <span className="text-amber-400 text-sm font-semibold">
                How We Work
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Our Design{" "}
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg">
              A streamlined approach to bring your vision to life
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {process.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative text-center group"
              >
                <div className="relative z-10">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-amber-500 to-orange-500 rounded-[40%_60%_30%_70%/_40%_50%_50%_60%] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                    <div className="text-white text-2xl font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div className="w-12 h-12 mx-auto bg-white/10 backdrop-blur rounded-full flex items-center justify-center mb-3">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>
                {idx < process.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 transform -translate-x-1/2">
                    <ChevronRight className="absolute right-0 top-1/2 -translate-y-1/2 text-amber-500" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PORTFOLIO GALLERY ===== */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span className="text-amber-700 text-sm font-semibold">
                Our Work
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Recent{" "}
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Explore some of our finest residential transformations
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden cursor-pointer rounded-2xl shadow-lg"
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <span className="text-amber-300 text-xs font-medium uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h4 className="text-white text-lg font-semibold mt-1">
                      {item.title}
                    </h4>
                    <div className="flex items-center gap-1 text-white/80 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span>View Project</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS SECTION ===== */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-4 shadow-sm">
              <Heart className="w-4 h-4 text-amber-600" />
              <span className="text-amber-700 text-sm font-semibold">
                Client Love
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our{" "}
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                Clients Say
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    <div className="flex gap-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  "{testimonial.text}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-16 mb-6 sm:py-20 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Ready to Design Your Dream Home?
            </h2>
            <p className="text-base sm:text-lg mb-8 text-white/90">
              Let's bring your vision to life. Schedule a free consultation with
              our expert designers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${companyInfo.phone}`}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-amber-600 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                Call Us Now
              </a>
              <a
                href={`mailto:${companyInfo.email}`}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                Book Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-lg">
          <div className="relative max-w-5xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-amber-400 transition"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full rounded-2xl shadow-2xl"
            />
            <div className="mt-6 text-center">
              <h3 className="text-white text-2xl font-bold">
                {selectedImage.title}
              </h3>
              <p className="text-amber-400 mt-1">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes subtle-zoom {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        .animate-subtle-zoom {
          animation: subtle-zoom 20s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ResidentialService;
