import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TrustedClients from "../components/TrustedClients";
import ScrollingText from "../components/ScrollingText";
import KitchenAppliances from "../components/KitchenAppliances";
import TestimonialsSlider from "../components/TestimonialsSlider";
import WhyChooseUs from "../components/WhyChooseUs";
import GallerySection from "../components/GallerySection";
import ServicesSection from "./ServicesSection";
import ScrollingGallery from '../components/ScrollingGallery';
import AwardsCarousel from '../components/AwardsCarousel';

import {
  Star,
  Phone,
  MapPin,
  Clock,
  Youtube,
  Headphones,
  Award,
  ExternalLink,
  Copy,
  Check,
  X,
  Layers,
  Users,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Sparkles,
  ArrowRight,
  Play,
  Pause,
  Heart,
  Trophy,
} from "lucide-react";

const DSInteriorsWebsite = () => {
  // ===== ALL STATE DECLARATIONS AT TOP LEVEL =====
  const [setIsMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [isVisible, setIsVisible] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo] = useState(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const modalVideoRef = useRef(null);

  // ===== STATS COUNTING STATE =====
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
    team: 0,
    satisfaction: 0,
    awards: 0,
  });
  const [hasCounted, setHasCounted] = useState(false);
  const statsRef = useRef(null);

  // ===== REFS =====
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  // ===== COMPANY INFO =====
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

  const scrollToServices = useCallback(() => {
    console.log("scrollToServices called");
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }, [servicesRef]);

  // ===== STATS COUNTER ANIMATION =====
  useEffect(() => {
    const statsData = [
      { key: "projects", target: 500, suffix: "+" },
      { key: "clients", target: 480, suffix: "+" },
      { key: "experience", target: 12, suffix: "+" },
      { key: "team", target: 15, suffix: "+" },
      { key: "satisfaction", target: 98, suffix: "%" },
      { key: "awards", target: 50, suffix: "+" },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasCounted) {
            setHasCounted(true);

            statsData.forEach((stat) => {
              const duration = 2000;
              const steps = 60;
              const increment = stat.target / steps;
              let current = 0;
              let step = 0;

              const timer = setInterval(() => {
                step++;
                current += increment;
                if (step >= steps) {
                  current = stat.target;
                  clearInterval(timer);
                }
                setCounts((prev) => ({
                  ...prev,
                  [stat.key]: Math.floor(current),
                }));
              }, duration / steps);
            });
          }
        });
      },
      { threshold: 0.3 },
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasCounted]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const sections = [
      { ref: heroRef, id: "hero" },
      { ref: aboutRef, id: "about" },
      { ref: servicesRef, id: "services" },
      { ref: contactRef, id: "contact" },
    ];

    sections.forEach(({ ref, id }) => {
      if (ref.current) {
        ref.current.id = id;
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  // ===== FUNCTIONS =====
  const scrollToSection = useCallback((ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    if (typeof setIsMenuOpen === 'function') {
      setIsMenuOpen(false);
    }
  }, [setIsMenuOpen]); // Add setIsMenuOpen to dependencies

  const copyAddress = () => {
    navigator.clipboard.writeText(companyInfo.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const AnimatedSection = ({ children, id, className = "" }) => (
    <div
      className={`transition-all duration-700 ${isVisible[id] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        } ${className}`}
    >
      {children}
    </div>
  );

  return (

    <>
      <div className="min-h-screen bg-white overflow-x-hidden">
        {/* Hero Section - Smooth Endless Slider */}
        <ScrollingGallery />

        {/* Customer Reviews Section */}
        <TestimonialsSlider />

        {/* ===== TRUST BADGES - COMPLETELY RESPONSIVE ===== */}
        <div className="container mx-auto relative overflow-hidden rounded-[0px] bg-gradient-to-r from-orange-500 to-amber-500">
          <div className="relative z-10">
            {/* Desktop: Grid Layout */}
            <div className="hidden lg:grid lg:grid-cols-4 gap-3 py-3 px-4">
              <div className="flex items-center justify-center gap-2 group cursor-pointer">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-white/80 text-white/80"
                    />
                  ))}
                </div>
                <span className="text-white text-lg font-semibold">4.8</span>
                <span className="text-white/60 text-sm">(128 reviews)</span>
              </div>

              <div className="flex items-center justify-center gap-2 group cursor-pointer">
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                  <Check className="w-3 h-3 text-white/80" />
                </div>
                <span className="text-white text-lg font-semibold">500+</span>
                <span className="text-white/60 text-sm">Projects</span>
              </div>

              <div className="flex items-center justify-center gap-2 group cursor-pointer">
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                  <Award className="w-3 h-3 text-white/80" />
                </div>
                <span className="text-white text-lg font-semibold">12+</span>
                <span className="text-white/60 text-sm">Years</span>
              </div>

              <div className="flex items-center justify-center gap-2 group cursor-pointer">
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                  <Users className="w-3 h-3 text-white/80" />
                </div>
                <span className="text-white text-lg font-semibold">100%</span>
                <span className="text-white/60 text-sm">Satisfaction</span>
              </div>
            </div>

            {/* Tablet: 2 Column Grid */}
            <div className="hidden sm:grid lg:hidden grid-cols-2 gap-2 py-2.5 px-3">
              <div className="flex items-center justify-center gap-1.5">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 fill-white/80 text-white/80"
                    />
                  ))}
                </div>
                <span className="text-white text-sm font-semibold">4.8</span>
                <span className="text-white/60 text-xs">(128)</span>
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <Check className="w-3 h-3 text-white/80" />
                <span className="text-white text-sm font-semibold">500+</span>
                <span className="text-white/60 text-xs">Projects</span>
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <Award className="w-3 h-3 text-white/80" />
                <span className="text-white text-sm font-semibold">12+</span>
                <span className="text-white/60 text-xs">Years</span>
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <Users className="w-3 h-3 text-white/80" />
                <span className="text-white text-sm font-semibold">100%</span>
                <span className="text-white/60 text-xs">Happy</span>
              </div>
            </div>

            {/* Mobile: Horizontal Scroll */}
            <div className="sm:hidden overflow-x-auto scrollbar-hide">
              <div className="flex gap-4 items-center px-3 py-2 min-w-max">
                <div className="flex items-center gap-1 flex-shrink-0">
                  <div className="flex gap-0.5">
                    {[...Array(1)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-2.5 h-2.5 fill-white/80 text-white/80"
                      />
                    ))}
                  </div>
                  <span className="text-white text-xs font-semibold">4.8</span>
                  <span className="text-white/50 text-[10px]">(128)</span>
                </div>

                <div className="flex items-center gap-1 flex-shrink-0">
                  <Check className="w-2.5 h-2.5 text-white/80" />
                  <span className="text-white text-xs font-semibold">500+</span>
                  <span className="text-white/50 text-[10px]">Projects</span>
                </div>

                <div className="flex items-center gap-1 flex-shrink-0">
                  <Award className="w-2.5 h-2.5 text-white/80" />
                  <span className="text-white text-xs font-semibold">12+</span>
                  <span className="text-white/50 text-[10px]">Years</span>
                </div>

                <div className="flex items-center gap-1 flex-shrink-0">
                  <Users className="w-2.5 h-2.5 text-white/80" />
                  <span className="text-white text-xs font-semibold">100%</span>
                  <span className="text-white/50 text-[10px]">Happy</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

        <style jsx>{`
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }

        @keyframes pulseSlow {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.2); opacity: 1; }
        }

        .animate-scale-in {
          animation: scaleIn 0.3s ease-out forwards;
          opacity: 0;
        }

        .animate-bounce-slow {
          animation: bounceSlow 2s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulseSlow 2s ease-in-out infinite;
        }
      `}</style>

        {/* Stats Section - Responsive Grid */}
        <section
          ref={statsRef}
          className="container mx-auto py-4 sm:py-6 md:py-8 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden"
        >
          <div className="absolute inset-1 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 rounded-full bg-violet-400/20 animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 rounded-full bg-cyan-400/15 animate-pulse-slow delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 sm:w-56 md:w-72 h-36 sm:h-56 md:h-72 rounded-full bg-amber-400/10 animate-pulse-slow delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
              {[
                {
                  key: "projects",
                  number: counts.projects,
                  label: "Projects",
                  icon: (
                    <Layers className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  ),
                  color: "from-blue-500 to-cyan-500",
                  dropColor: "blue-400",
                  suffix: "+",
                },
                {
                  key: "clients",
                  number: counts.clients,
                  label: "Happy Clients",
                  icon: <Users className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
                  color: "from-emerald-500 to-teal-500",
                  dropColor: "emerald-400",
                  suffix: "+",
                },
                {
                  key: "experience",
                  number: counts.experience,
                  label: "Years",
                  icon: <Award className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
                  color: "from-amber-500 to-orange-500",
                  dropColor: "amber-400",
                  suffix: "+",
                },
                {
                  key: "team",
                  number: counts.team,
                  label: "Expert Team",
                  icon: (
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  ),
                  color: "from-purple-500 to-pink-500",
                  dropColor: "purple-400",
                  suffix: "+",
                },
                {
                  key: "satisfaction",
                  number: counts.satisfaction,
                  label: "Satisfaction",
                  icon: <Heart className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
                  color: "from-rose-500 to-red-500",
                  dropColor: "rose-400",
                  suffix: "%",
                },
                {
                  key: "awards",
                  number: counts.awards,
                  label: "Awards",
                  icon: (
                    <Trophy className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  ),
                  color: "from-yellow-500 to-amber-500",
                  dropColor: "yellow-400",
                  suffix: "+",
                },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="group relative text-center cursor-pointer"
                >
                  <div className="relative inline-block w-full">
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="absolute w-10 sm:w-14 md:w-16 h-10 sm:h-14 md:h-16 rounded-full border-2 border-transparent group-hover:border-opacity-50 group-hover:animate-ripple"></div>
                      <div className="absolute w-10 sm:w-14 md:w-16 h-10 sm:h-14 md:h-16 rounded-full border-2 border-transparent group-hover:border-opacity-30 group-hover:animate-ripple-delay"></div>
                      <div className="absolute w-10 sm:w-14 md:w-16 h-10 sm:h-14 md:h-16 rounded-full border-2 border-transparent group-hover:border-opacity-15 group-hover:animate-ripple-slow"></div>
                    </div>

                    <div className="relative">
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 sm:w-12 md:w-14 h-2 sm:h-3 md:h-4 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mx-auto mb-2 sm:mb-3">
                        <div className="absolute inset-0 rounded-[40%_60%_70%_30%/_40%_50%_60%_50%] animate-drop-float"></div>

                        <div
                          className={`relative w-full h-full bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center text-white shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl overflow-hidden`}
                        >
                          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          <div className="absolute bottom-0 left-0 right-0 h-0 bg-white/20 group-hover:h-full transition-all duration-700 rounded-2xl"></div>
                          <div className="relative z-10 transform transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1">
                            {stat.icon}
                          </div>
                          <div className="absolute top-1 left-1.5 w-1 h-1 bg-white/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                      </div>

                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0.5 h-0 bg-gradient-to-b from-white to-transparent rounded-full opacity-0 group-hover:opacity-100 group-hover:h-2 sm:group-hover:h-3 transition-all duration-500"></div>
                    </div>

                    <div className="relative">
                      <div className="text-sm sm:text-xl md:text-2xl font-bold text-gray-900 mb-0.5 sm:mb-1 relative inline-block group-hover:animate-text-wave">
                        <span className="relative inline-block transition-all duration-300 group-hover:-translate-y-1 text-xs sm:text-base md:text-lg">
                          {stat.number}
                          {stat.suffix}
                        </span>
                      </div>
                      <div className="text-[10px] sm:text-xs md:text-sm text-gray-500 tracking-wide group-hover:text-gray-700 transition-colors duration-300">
                        {stat.label}
                      </div>
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent rounded-full group-hover:w-6 sm:group-hover:w-8 md:group-hover:w-10 transition-all duration-500"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <style jsx>{`
          @keyframes ripple {
            0% {
              width: 30px;
              height: 30px;
              opacity: 0.6;
              border-color: rgba(59, 130, 246, 0.5);
            }
            100% {
              width: 80px;
              height: 80px;
              opacity: 0;
              border-color: rgba(59, 130, 246, 0);
            }
          }
          
          @keyframes ripple-delay {
            0% {
              width: 30px;
              height: 30px;
              opacity: 0.4;
              border-color: rgba(59, 130, 246, 0.4);
            }
            100% {
              width: 90px;
              height: 90px;
              opacity: 0;
              border-color: rgba(59, 130, 246, 0);
            }
          }
          
          @keyframes ripple-slow {
            0% {
              width: 30px;
              height: 30px;
              opacity: 0.2;
              border-color: rgba(59, 130, 246, 0.3);
            }
            100% {
              width: 100px;
              height: 100px;
              opacity: 0;
              border-color: rgba(59, 130, 246, 0);
            }
          }
          
          @media (min-width: 640px) {
            @keyframes ripple {
              0% {
                width: 40px;
                height: 40px;
              }
              100% {
                width: 100px;
                height: 100px;
              }
            }
            @keyframes ripple-delay {
              0% {
                width: 40px;
                height: 40px;
              }
              100% {
                width: 120px;
                height: 120px;
              }
            }
            @keyframes ripple-slow {
              0% {
                width: 40px;
                height: 40px;
              }
              100% {
                width: 140px;
                height: 140px;
              }
            }
          }
          
          .group:hover .animate-ripple {
            animation: ripple 1s ease-out forwards;
          }
          .group:hover .animate-ripple-delay {
            animation: ripple-delay 1s ease-out 0.2s forwards;
          }
          .group:hover .animate-ripple-slow {
            animation: ripple-slow 1s ease-out 0.4s forwards;
          }
          
          @keyframes drop-float {
            0%, 100% {
              border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
            }
            25% {
              border-radius: 60% 40% 30% 70% / 50% 40% 60% 50%;
            }
            50% {
              border-radius: 30% 70% 60% 40% / 50% 60% 40% 50%;
            }
            75% {
              border-radius: 70% 30% 40% 60% / 60% 50% 50% 40%;
            }
          }
          
          .animate-drop-float {
            animation: drop-float 6s ease-in-out infinite;
          }
          
          @keyframes pulse-slow {
            0%, 100% {
              opacity: 0.05;
              transform: scale(1);
            }
            50% {
              opacity: 0.1;
              transform: scale(1.05);
            }
          }
          
          .animate-pulse-slow {
            animation: pulse-slow 6s ease-in-out infinite;
          }
          
          .delay-1000 {
            animation-delay: 1s;
          }
          .delay-2000 {
            animation-delay: 2s;
          }

          @keyframes text-wave {
            0%, 100% { letter-spacing: normal; }
            50% { letter-spacing: 1px; }
          }
          
          .group:hover .animate-text-wave {
            animation: text-wave 0.5s ease-in-out;
          }
        `}</style>
        </section>

        {/* Video Modal */}
        <AnimatePresence>
          {isVideoModalOpen && selectedVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-md"
              onClick={() => {
                setIsVideoModalOpen(false);
                setIsPlaying(false);
                if (modalVideoRef.current) {
                  modalVideoRef.current.pause();
                }
              }}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative w-full max-w-4xl bg-black rounded-xl sm:rounded-2xl overflow-hidden mx-2 sm:mx-4"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => {
                    setIsVideoModalOpen(false);
                    setIsPlaying(false);
                    if (modalVideoRef.current) {
                      modalVideoRef.current.pause();
                    }
                  }}
                  className="absolute top-2 sm:top-4 right-2 sm:right-4 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/50 backdrop-blur flex items-center justify-center text-white hover:bg-amber-500 hover:text-white transition-all duration-300"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                <div className="relative">
                  <video
                    ref={modalVideoRef}
                    src={selectedVideo.videoUrl}
                    className="w-full h-auto max-h-[50vh] sm:max-h-[60vh] object-contain"
                    autoPlay
                    playsInline
                  />

                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-4">
                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => {
                          if (modalVideoRef.current) {
                            if (isPlaying) {
                              modalVideoRef.current.pause();
                            } else {
                              modalVideoRef.current.play();
                            }
                            setIsPlaying(!isPlaying);
                          }
                        }}
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-amber-500 transition-all duration-300"
                      >
                        {isPlaying ? (
                          <Pause className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        ) : (
                          <Play className="w-4 h-4 sm:w-5 sm:h-5 text-white ml-0.5" />
                        )}
                      </button>

                      <button
                        onClick={() => {
                          if (modalVideoRef.current) {
                            modalVideoRef.current.muted = !isMuted;
                            setIsMuted(!isMuted);
                          }
                        }}
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-amber-500 transition-all duration-300"
                      >
                        {isMuted ? (
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51c.66-1.24 1.03-2.65 1.03-4.15 0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM9.6 9.6l-1.1-1.1-2.5 2.5H3v6h3l3 3h1v-6.4l2.5-2.5-.9-.9z" />
                          </svg>
                        ) : (
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77 0-4.28-2.99-7.86-7-8.77z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="py-3 sm:py-4 px-4 sm:px-6 bg-white">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 sm:mb-3 gap-2">
                    <div>
                      <h3 className="text-base sm:text-xl font-bold text-gray-900">
                        {selectedVideo.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500">
                        {selectedVideo.role}
                      </p>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {selectedVideo.text}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* About Section - Responsive */}
        <section
          ref={aboutRef}
          className="py-8 sm:py-12 md:py-16 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-amber-50 rounded-full blur-3xl opacity-50 -z-10"></div>
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
              <AnimatedSection id="about">
                <div className="relative">
                  <div className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 border-t-4 border-l-4 border-amber-300"></div>
                  <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 border-b-4 border-r-4 border-amber-300"></div>
                  <img
                    src="/dsv1.jpeg"
                    alt="Sarah Dsigner - Interior Designer"
                    className="rounded-2xl w-full h-auto object-cover"
                    loading="lazy"
                  />
                  <div className="absolute -bottom-4 sm:-bottom-8 -left-4 sm:-left-8 bg-white rounded-xl sm:rounded-2xl shadow-xl p-3 sm:p-4 z-20">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Award className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600" />
                      <div>
                        <div className="font-bold text-gray-900 text-xs sm:text-sm">
                          Best Design Studio
                        </div>
                        <div className="text-gray-500 text-[10px] sm:text-xs">
                          2023 Award Winner
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection id="about">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 bg-gradient-to-r from-amber-50 to-orange-50 rounded-full mb-4 sm:mb-6 group cursor-pointer hover:scale-105 transition-all duration-300">
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-amber-500 rounded-full animate-pulse"></div>
                    <span className="text-amber-700 text-xs sm:text-sm md:text-base font-medium tracking-wide">
                      About Us
                    </span>
                    <Sparkles className="w-2 h-2 sm:w-3 sm:h-3 text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="relative">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                      Creating Beautiful
                      <div className="relative inline-block ml-1 sm:ml-2">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-orange-600 to-gray-900 bg-300% animate-gradient">
                          Spaces Since 2012
                        </span>
                        <svg
                          className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-1.5 sm:h-2"
                          viewBox="0 0 300 10"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 5 Q 75 10, 150 5 T 300 5"
                            stroke="orangered"
                            fill="none"
                            strokeWidth="1.5 sm:strokeWidth-2"
                            strokeLinecap="round"
                            className="animate-dash"
                          />
                        </svg>
                      </div>
                    </h2>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed transform transition-all duration-500 hover:translate-x-2 hover:text-gray-800">
                      <span className="inline-block w-1 h-1 bg-amber-500 rounded-full mr-2 align-middle"></span>
                      Dsigner Studio Interiors is a premier interior design studio
                      based in Hyderabad, specializing in residential and
                      commercial spaces. We believe that great design transforms
                      not just spaces, but lives.
                    </p>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed transform transition-all duration-500 delay-100 hover:translate-x-2 hover:text-gray-800">
                      <span className="inline-block w-1 h-1 bg-amber-500 rounded-full mr-2 align-middle"></span>
                      Our team of expert designers works closely with clients to
                      create personalized spaces that reflect their unique style
                      and needs, blending aesthetics with functionality.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 mt-6 sm:mt-8">
                    <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl p-3 sm:p-4 bg-gradient-to-br from-gray-50 to-violet-200 border border-gray-100 hover:border-violet-200 transition-all duration-500 hover:shadow-xl cursor-pointer">
                      <div className="absolute inset-0 bg-gradient-to-r from-violet-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative flex items-center gap-3">
                        <div className="relative">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-violet-100 to-orange-100 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-violet-600 group-hover:text-violet-700 transition-colors" />
                          </div>
                          <div className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-violet-400 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500"></div>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 group-hover:text-violet-700 transition-colors duration-300 text-sm sm:text-base">
                            On-Time Delivery
                          </div>
                          <div className="text-gray-500 text-xs sm:text-sm group-hover:text-gray-600">
                            100% commitment & tracking
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-violet-200 to-violet-500 w-0 group-hover:w-full transition-all duration-700"></div>
                    </div>

                    <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl p-3 sm:p-4 bg-gradient-to-br from-gray-50 to-green-200 border border-gray-100 hover:border-green-200 transition-all duration-500 hover:shadow-xl cursor-pointer">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative flex items-center gap-3">
                        <div className="relative">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-50 to-orange-100 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Headphones className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 group-hover:text-green-700 transition-colors" />
                          </div>
                          <div className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-green-400 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500"></div>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 group-hover:text-green-700 transition-colors duration-300 text-sm sm:text-base">
                            24/7 Customer Support
                          </div>
                          <div className="text-gray-500 text-xs sm:text-sm group-hover:text-gray-600">
                            Always here to help you
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-200 to-green-500 w-0 group-hover:w-full transition-all duration-700"></div>
                    </div>
                  </div>

                  <button
                    onClick={() => scrollToSection(contactRef)}
                    className="group relative inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3.5 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-full transition-all duration-300 font-medium overflow-hidden shadow-lg hover:shadow-2xl text-sm sm:text-base"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <span className="relative z-10 flex items-center gap-2">
                      Learn More About Us
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-all duration-300" />
                    </span>
                    <div className="absolute -right-8 -top-8 w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500"></div>
                    <div className="absolute -left-8 -bottom-8 w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500 delay-100"></div>
                  </button>

                  <div className="absolute -right-20 top-20 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-r from-amber-100/20 to-orange-100/20 rounded-full blur-2xl -z-10 animate-pulse-slow"></div>
                  <div className="absolute -left-20 bottom-20 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-r from-amber-100/20 to-orange-100/20 rounded-full blur-2xl -z-10 animate-pulse-slow delay-1000"></div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <WhyChooseUs />
        <TrustedClients />
        <ServicesSection />
        <AwardsCarousel />

        <GallerySection />
        <ScrollingText />
        <KitchenAppliances />

        {/* ===== CONTACT SECTION - RESPONSIVE ===== */}
        <section
          ref={contactRef}
          className="py-10 sm:py-12 md:py-16 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-gradient-to-br from-amber-100/30 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-gradient-to-tr from-purple-100/20 to-transparent rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
              {/* Left Column - Contact Info */}
              <AnimatedSection id="contact">
                <div>
                  <div className="inline-block px-3 sm:px-4 py-1 bg-gradient-to-r from-amber-100 to-amber-50 rounded-full mb-4 sm:mb-6 shadow-sm">
                    <span className="text-amber-700 text-xs sm:text-sm font-medium tracking-wide flex items-center gap-2">
                      <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-amber-500 rounded-full animate-pulse"></span>
                      Get In Touch
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                    Let's Discuss
                    <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent block sm:inline">
                      {" "}
                      Your Project
                    </span>
                  </h2>

                  <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 md:mb-10 leading-relaxed">
                    Ready to transform your space? Contact us for a consultation
                    and let's bring your vision to life.
                  </p>

                  <div className="space-y-4 sm:space-y-5 md:space-y-6">
                    {/* Phone */}
                    <div className="flex items-start gap-3 sm:gap-4 md:gap-5 group cursor-pointer">
                      <a
                        href={`tel:${companyInfo.phone}`}
                        className="flex items-start gap-3 sm:gap-4 md:gap-5 w-full"
                      >
                        <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-md flex-shrink-0">
                          <Phone className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-amber-700" />
                        </div>
                        <div>
                          <p className="text-gray-500 text-xs sm:text-sm mb-0.5 sm:mb-1">
                            Phone
                          </p>
                          <p className="text-gray-900 font-medium text-sm sm:text-base md:text-lg hover:text-amber-600 transition-colors">
                            {companyInfo.phone}
                          </p>
                        </div>
                      </a>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-3 sm:gap-4 md:gap-5 group">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-md flex-shrink-0">
                        <Mail className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-amber-700" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-gray-500 text-xs sm:text-sm mb-0.5 sm:mb-1">
                          Email
                        </p>
                        <div className="space-y-2">
                          <a
                            href={`mailto:${companyInfo.email}?subject=Inquiry%20from%20Website&body=Hello%20DS%20Interiors,%0A%0A`}
                            className="text-gray-900 font-medium text-sm sm:text-base md:text-lg hover:text-amber-600 transition-colors break-all"
                          >
                            {companyInfo.email}
                          </a>
                          <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            <button
                              onClick={() => {
                                navigator.clipboard.writeText(companyInfo.email);
                                alert("Email copied to clipboard! 📋");
                              }}
                              className="inline-flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 bg-gray-100 text-gray-600 text-[10px] sm:text-xs rounded-lg hover:bg-gray-200 transition-colors"
                            >
                              <Copy className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                              Copy
                            </button>
                            <button
                              onClick={() => {
                                window.open(
                                  `https://mail.google.com/mail/?view=cm&fs=1&to=${companyInfo.email}&su=Inquiry%20from%20DS%20Interiors`,
                                  "_blank",
                                );
                              }}
                              className="inline-flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 bg-red-50 text-red-600 text-[10px] sm:text-xs rounded-lg hover:bg-red-100 transition-colors"
                            >
                              <svg
                                className="w-2.5 h-2.5 sm:w-3 sm:h-3"
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
                                  `https://outlook.live.com/mail/0/deeplink/compose?to=${companyInfo.email}&subject=Inquiry%20from%20DS%20Interiors`,
                                  "_blank",
                                );
                              }}
                              className="inline-flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 bg-blue-50 text-blue-600 text-[10px] sm:text-xs rounded-lg hover:bg-blue-100 transition-colors"
                            >
                              <svg
                                className="w-2.5 h-2.5 sm:w-3 sm:h-3"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 7h10v2H7zm0 4h10v2H7zm0 4h7v2H7z" />
                              </svg>
                              Outlook
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-start gap-3 sm:gap-4 md:gap-5 group">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-md flex-shrink-0">
                        <MapPin className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-amber-700" />
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs sm:text-sm mb-0.5 sm:mb-1">
                          Address
                        </p>
                        <p className="text-gray-900 font-medium text-sm sm:text-base">
                          {companyInfo.address}
                        </p>
                        <button
                          onClick={copyAddress}
                          className="text-amber-600 text-xs sm:text-sm hover:text-amber-700 mt-1 sm:mt-2 flex items-center gap-1 transition-all duration-300 hover:gap-2"
                        >
                          {copied ? (
                            <>
                              <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                              <span>Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                              <span>Copy Address</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Social Icons */}
                  <div className="flex gap-3 sm:gap-4 mt-8 sm:mt-10">
                    {[
                      {
                        icon: <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />,
                        href: " https://www.facebook.com/profile.php?id=61590853052566",
                        label: "Facebook",
                        color: "from-blue-600 to-blue-800",
                        hoverColor: "hover:bg-blue-600",
                      },
                      {
                        icon: <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />,
                        href: "https://www.instagram.com/dsignerstudiointeriors/",
                        label: "Instagram",
                        color: "from-pink-500 to-purple-600",
                        hoverColor:
                          "hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600",
                      },
                      {
                        icon: <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />,
                        href: "https://www.linkedin.com/in/dsigner-studio-interiors-889670417/",
                        label: "LinkedIn",
                        color: "from-blue-700 to-indigo-800",
                        hoverColor: "hover:bg-blue-700",
                      },
                      {
                        icon: <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />,
                        href: " https://www.youtube.com/@DsignerstudioInteriors",
                        label: "YouTube",
                        color: "from-red-500 to-red-700",
                        hoverColor: "hover:bg-red-600",
                      },
                    ].map((social, idx) => (
                      <a
                        key={idx}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.6 + idx * 0.05 }}
                        whileHover={{ y: -5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div
                          className={`absolute inset-0 rounded-full bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500`}
                        ></div>
                        <div
                          className={`relative w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 transition-all duration-500 group-hover:text-white overflow-hidden shadow-md group-hover:shadow-xl ${social.hoverColor}`}
                        >
                          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                          <div
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                          >
                            {social.icon}
                          </div>
                        </div>
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 sm:px-2.5 sm:py-1 bg-gray-900 text-white text-[10px] sm:text-xs rounded opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none">
                          {social.label}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Right Column - Map */}
              <AnimatedSection id="contact">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-gray-100 relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 via-purple-500 to-pink-500 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700"></div>
                  <div className="relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden">
                    <div className="p-4 sm:p-5 md:p-6">
                      <div className="relative rounded-xl overflow-hidden shadow-lg">
                        <iframe
                          title="Map"
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5!2d78.3!3d17.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI0JzAwLjAiTiA3OMKwMTgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
                          className="w-full h-48 sm:h-56 md:h-64 lg:h-80 rounded-xl transition-all duration-500 group-hover:scale-105"
                          allowFullScreen
                          loading="lazy"
                        ></iframe>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                      </div>
                      <button
                        onClick={() =>
                          window.open(
                            `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(companyInfo.address)}`,
                            "_blank",
                          )
                        }
                        className="w-full mt-4 sm:mt-5 md:mt-6 py-3 sm:py-3.5 md:py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl hover:from-gray-800 hover:to-gray-700 transition-all duration-500 font-medium flex items-center justify-center gap-2 group overflow-hidden text-sm sm:text-base"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                        <span>Get Directions</span>
                        <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-amber-200 rounded-tl-xl"></div>
                    <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-amber-200 rounded-br-xl"></div>
                  </div>
                </div>

                <div className="bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl overflow-hidden border border-gray-100 mt-4 sm:mt-6 md:mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <span className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></span>
                    24/7 Support
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <span className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></span>
                    Free Consultation
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <span className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></span>
                    No Hidden Fees
                  </span>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Contact Modal - Responsive */}
        {showContact && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
            <div className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 max-w-md w-full shadow-2xl animate-fadeInUp mx-4 max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                  Contact Us
                </h3>
                <button
                  onClick={() => setShowContact(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
              <div className="space-y-4 sm:space-y-5">
                <div>
                  <p className="text-gray-500 text-xs sm:text-sm mb-1">Phone</p>
                  <a
                    href={`tel:${companyInfo.phone}`}
                    className="text-gray-900 font-medium text-sm sm:text-base md:text-lg hover:text-orange-600 transition-colors flex items-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-500" />
                    {companyInfo.phone}
                  </a>
                </div>

                <div>
                  <p className="text-gray-500 text-xs sm:text-sm mb-1">Email</p>
                  <div className="space-y-2">
                    <a
                      href={`mailto:${companyInfo.email}?subject=Inquiry%20from%20Website&body=Hello%20DS%20Interiors,%0A%0AI%20would%20like%20to%20inquire%20about...`}
                      className="text-gray-900 text-xs sm:text-sm break-all hover:text-orange-600 transition-colors flex items-center gap-2 group"
                    >
                      <svg
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-500 flex-shrink-0"
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
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      <button
                        onClick={() => {
                          window.open(
                            `https://mail.google.com/mail/?view=cm&fs=1&to=${companyInfo.email}&su=Inquiry%20from%20Website&body=Hello%20DS%20Interiors,%0A%0AI%20would%20like%20to%20inquire%20about...`,
                            "_blank",
                          );
                        }}
                        className="flex items-center justify-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-2 bg-red-50 text-red-600 rounded-lg text-[10px] sm:text-xs hover:bg-red-100 transition-colors"
                      >
                        <svg
                          className="w-3 h-3 sm:w-3.5 sm:h-3.5"
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
                        className="flex items-center justify-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-2 bg-blue-50 text-blue-600 rounded-lg text-[10px] sm:text-xs hover:bg-blue-100 transition-colors"
                      >
                        <svg
                          className="w-3 h-3 sm:w-3.5 sm:h-3.5"
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
                        className="flex items-center justify-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-2 bg-gray-100 text-gray-700 rounded-lg text-[10px] sm:text-xs hover:bg-gray-200 transition-colors"
                      >
                        <svg
                          className="w-3 h-3 sm:w-3.5 sm:h-3.5"
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
                        Copy
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-gray-500 text-xs sm:text-sm mb-1">Address</p>
                  <p className="text-gray-900 text-xs sm:text-sm">
                    {companyInfo.address}
                  </p>
                  <button
                    onClick={copyAddress}
                    className="text-amber-600 text-[10px] sm:text-xs mt-1 sm:mt-2 flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    {copied ? (
                      <>
                        <svg
                          className="w-2.5 h-2.5 sm:w-3 sm:h-3"
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
                          className="w-2.5 h-2.5 sm:w-3 sm:h-3"
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

              <button
                onClick={() =>
                  (window.location.href = `tel:${companyInfo.phone}`)
                }
                className="w-full py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl hover:shadow-lg transition-all duration-300 font-medium mt-4 sm:mt-5 md:mt-6 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                Call Now
              </button>
            </div>
          </div>
        )}

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-lg">
            <div className="relative max-w-4xl w-full h-[70%]">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 sm:-top-12 right-0 text-white hover:text-amber-400 transition"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full rounded-xl sm:rounded-2xl shadow-2xl max-h-[60vh] object-contain"
              />
              <div className="mt-4 sm:mt-6 text-center">
                <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold">
                  {selectedImage.title}
                </h3>
                <p className="text-amber-400 text-sm sm:text-base mt-1">
                  {selectedImage.category}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DSInteriorsWebsite;
