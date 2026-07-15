import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import YouTube from "react-youtube";

import {
  Award,
  Check,
  Users,
  Heart,
  Crown,
  Sparkles,
  Building,
  ArrowRight,
  ChevronRight,
  Play,
  Star,
  Quote,
  Target,
  Eye,
  Volume2, VolumeX
} from "lucide-react";

const AboutUs = () => {

  const playerRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const onReady = (event) => {
    playerRef.current = event.target;
    event.target.mute();
    event.target.playVideo();
    setIsPlaying(true);
  };

  const onStateChange = (event) => {
    if (event.data === 0) {
      playerRef.current?.playVideo();
    }
  };

  const toggleMute = () => {
    if (!playerRef.current) return;

    if (isMuted) {
      playerRef.current.unMute();
    } else {
      playerRef.current.mute();
    }

    setIsMuted(!isMuted);
  };

  const handleVideoClick = () => {
    if (!playerRef.current) return;

    if (!isPlaying) {
      playerRef.current.playVideo();
      setIsPlaying(true);
    }
  };

  const opts = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 1,
      mute: 1,
      controls: 0,
      rel: 0,
      modestbranding: 1,
      loop: 1,
      playlist: "nGfSVq7JK1o",
      playsinline: 1,
      enablejsapi: 1,
    },
  };

  const team = [
    {
      name: "Sarah Johnson",
      role: "Lead Interior Designer",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300",
      experience: "12+ years",
      specialty: "Luxury Residential",
      social: { linkedin: "#", instagram: "#" },
    },
    {
      name: "Michael Chen",
      role: "Creative Director",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300",
      experience: "15+ years",
      specialty: "Commercial Spaces",
      social: { linkedin: "#", instagram: "#" },
    },
    {
      name: "Priya Sharma",
      role: "Senior Architect",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300",
      experience: "10+ years",
      specialty: "Sustainable Design",
      social: { linkedin: "#", instagram: "#" },
    },
    {
      name: "David Wilson",
      role: "Project Manager",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300",
      experience: "8+ years",
      specialty: "Project Excellence",
      social: { linkedin: "#", instagram: "#" },
    },
  ];

  const milestones = [
    {
      year: "2012",
      title: "Company Founded",
      description: "Started our journey in Hyderabad",
    },
    {
      year: "2015",
      title: "First Award",
      description: "Best Interior Design Studio",
    },
    {
      year: "2018",
      title: "500 Projects",
      description: "Reached 500+ successful projects",
    },
    {
      year: "2023",
      title: "Global Recognition",
      description: "International design award",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Homeowner",
      text: "Absolutely transformed my home! The attention to detail is incredible.",
      rating: 5,
    },
    {
      name: "Neha Gupta",
      role: "Business Owner",
      text: "Professional, creative, and delivered on time. Highly recommended!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* ===== MODERN HERO BANNER SECTION ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-16">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/20 z-10"></div>

          <img
            src="https://cdn.mos.cms.futurecdn.net/Z5yngChp7VkWjDFcgzyFLf.gif"
            alt="Hero Banner"
            className="w-full h-full object-cover scale-110 animate-subtle-zoom"
          />

          {/* Floating glow */}
          <div className="absolute inset-0 z-20">
            <div className="absolute top-20 left-10 w-32 h-32 bg-amber-500/20 rounded-full blur-3xl animate-pulse-slow"></div>

            <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-30 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl text-center flex flex-col items-center"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-gray-600/60 backdrop-blur-md rounded-full my-4 border border-white/20">
              <Sparkles className="w-4 h-4 text-amber-400" />

              <span className="text-white/90 text-sm tracking-wide">
                Since 2012 • Award Winning Studio
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Crafting Dreams
              <span className="block py-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-500">
                into Reality
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl leading-relaxed">
              We don't just design spaces — we create premium living experiences
              that feel elegant, warm, and timeless.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-5 mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full font-semibold shadow-2xl flex items-center gap-2 transition-all duration-300"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex items-center gap-2"
              >
                <Play className="w-5 h-5" />
                Watch Our Story
              </motion.button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-10 border-t border-white/20 pt-4 w-full">
              {[
                {
                  number: "500+",
                  label: "Projects",
                  icon: <Building className="w-5 h-5" />,
                },
                {
                  number: "200+",
                  label: "Happy Clients",
                  icon: <Users className="w-5 h-5" />,
                },
                {
                  number: "12+",
                  label: "Years Excellence",
                  icon: <Award className="w-5 h-5" />,
                },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center"
                >
                  <div className="text-amber-400 mb-2">{stat.icon}</div>

                  <div className="text-white font-bold text-3xl">
                    {stat.number}
                  </div>

                  <div className="text-white/60 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-40">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white/50 rounded-full mt-2 animate-scroll"></div>
          </div>
        </div>
      </section>

      {/* ===== OUR STORY SECTION WITH MODERN LAYOUT ===== */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-amber-50/30 to-white"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Media Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full blur-2xl opacity-30"></div>

              {/* Video Container - Fixed */}
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <div className="bg-black rounded-t-2xl border border-neutral-700">
                  {/* Fixed Video Container */}
                  <div
                    className="relative w-full aspect-video overflow-hidden rounded-2xl cursor-pointer bg-black"
                    onClick={handleVideoClick}
                  >
                    <YouTube
                      videoId="nGfSVq7JK1o"
                      opts={{
                        ...opts,
                        width: '100%',
                        height: '100%',
                        playerVars: {
                          ...opts.playerVars,
                          modestbranding: 1,
                          rel: 0,
                        }
                      }}
                      onReady={onReady}
                      onStateChange={onStateChange}
                      className="absolute inset-0 w-full h-full"
                      iframeClassName="w-full h-full absolute inset-0"
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    />

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleMute();
                      }}
                      className="absolute top-1/2 right-3 z-20 bg-black/60 backdrop-blur-md p-3 rounded-full border border-white/20 hover:bg-black/80 transition"
                    >
                      {isMuted ? (
                        <VolumeX className="text-white w-5 h-5" />
                      ) : (
                        <Volume2 className="text-white w-5 h-5" />
                      )}
                    </button>

                    {!isPlaying && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleVideoClick();
                          }}
                          className="bg-white/20 backdrop-blur-md p-5 rounded-full border border-white/40 hover:bg-white/30 transition"
                        >
                          <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-2xl p-4 max-w-[200px]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">12+ Years</div>
                    <div className="text-gray-500 text-sm">Of Excellence</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span className="text-amber-700 text-sm font-semibold tracking-wide">
                  Our Journey
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Transforming Spaces,
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  {" "}
                  Transforming Lives
                </span>
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Founded in 2012, Dsigner Studio Interiors has evolved from a passionate
                design studio into one of Hyderabad's most celebrated interior
                design firms. Our journey is marked by creativity, innovation,
                and an unwavering commitment to excellence.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                With over 500 successful projects and a team of 15+ creative
                professionals, we continue to push boundaries, creating spaces
                that inspire and delight.
              </p>
            </motion.div>
          </div>

          {/* Milestone Timeline */}
          <div className="grid grid-cols-4 gap-4 mt-8">
            {milestones.map((milestone, idx) => (
              <div
                key={idx}
                className="relative bg-gray-200/60 shadow-2xl rounded-t-xl p-2 border-b-2 border-orange-400"
              >
                <div className="text-amber-600 font-bold text-lg">
                  {milestone.year}
                </div>
                <div className="font-semibold text-gray-900">
                  {milestone.title}
                </div>
                <div className="text-gray-500 text-sm">
                  {milestone.description}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===== MISSION & VISION WITH UNIQUE CARD SHAPES ===== */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                Purpose
              </span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Driven by passion, guided by purpose
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission Card - Unique Shape */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black rounded-[30%_70%_70%_30%/_30%_30%_70%_70%] opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-white/10 backdrop-blur-xl rounded-[30%_70%_40%_10%/_30%_30%_70%_70%] p-10 border border-white/20 hover:border-blue-400/50 transition-all duration-500">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-[40%_60%_70%_30%/_40%_50%_60%_50%] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  To transform spaces into inspiring environments that enhance
                  quality of life, through innovative design solutions and
                  exceptional craftsmanship. We strive to exceed expectations in
                  every project we undertake.
                </p>
                <div className="mt-6 flex items-center gap-2 text-cyan-400 group-hover:gap-3 transition-all">
                  <span className="text-sm font-medium">Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>

            {/* Vision Card - Different Unique Shape */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-800 rounded-[70%_30%_30%_70%/_70%_70%_30%_30%] opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-white/10 backdrop-blur-xl rounded-[60%_30%_30%_20%/_70%_70%_30%_30%] p-10 border border-white/20 hover:border-purple-400/50 transition-all duration-500">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-[30%_70%_70%_30%/_50%_50%_50%_50%] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Eye className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  To become India's most sought-after interior design studio,
                  recognized globally for creativity, innovation, and unwavering
                  commitment to client satisfaction. We envision a world where
                  every space tells a beautiful story.
                </p>
                <div className="mt-6 flex items-center gap-2 text-purple-400 group-hover:gap-3 transition-all">
                  <span className="text-sm font-medium">Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== CORE VALUES WITH DIFFERENT CARD SHAPES ===== */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span className="text-amber-700 text-sm font-semibold">
                What Drives Us
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core{" "}
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Value 1 - Hexagon Shape */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-red-50 to-pink-50 rounded-[60%_40%_30%_70%/_100%_85%_15%_0%] p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-pink-500 rounded-[30%_70%_70%_30%/_30%_35%_65%_70%] flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                  Passion for Design
                </h3>
                <p className="text-gray-600 text-center">
                  We pour our hearts into every project, ensuring exceptional
                  results that exceed expectations.
                </p>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </motion.div>

            {/* Value 2 - Pentagon Shape */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-[30%_70%_50%_30%/_50%_50%_50%_50%] p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-[70%_30%_30%_70%/_60%_40%_60%_40%] flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                  Client First
                </h3>
                <p className="text-gray-600 text-center">
                  Your satisfaction is our top priority. We listen, understand,
                  and deliver beyond expectations.
                </p>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </motion.div>

            {/* Value 3 - Unique Organic Shape */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-amber-50 to-orange-50 rounded-[70%_30%_30%_70%/_100%_67%_33%_0%] p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-24 h-24 bg-gradient-to-br from-amber-500 to-orange-500 rounded-[40%_60%_30%_70%/_40%_50%_50%_60%] flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                  Excellence
                </h3>
                <p className="text-gray-600 text-center">
                  We strive for perfection in every detail, ensuring the highest
                  quality in everything we do.
                </p>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== CEO PROFILE SECTION WITH 3D & WATER DROP EFFECT ===== */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-amber-50/20 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full mb-4">
              <Crown className="w-4 h-4 text-amber-600" />
              <span className="text-amber-700 text-sm font-semibold">
                Leadership
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Our{" "}
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                CEO
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The visionary behind Dsigner Studio Interiors
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotateX: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group perspective-1000"
            >
              <div className="relative bg-gradient-to-br from-white via-amber-50/10 to-white rounded-[40%_60%_30%_20%/_50%_40%_60%_50%] overflow-hidden shadow-2xl hover:shadow-[0_30px_60px_rgba(0,0,0,0.3)] transition-all duration-700 hover:-translate-y-3 border border-gray-100 hover:border-amber-200/50 transform-style-3d hover:rotate-y-2 hover:rotate-x-2">

                <div className="grid md:grid-cols-2 gap-0 relative">
                  {/* Image Section with 3D Effect */}
                  <div className="relative h-96 md:h-auto overflow-hidden transform-style-3d group-hover:rotate-y-2 transition-transform duration-700">
                    <img
                      src="/dsv3.jpeg"
                      alt="Shiva Kumar Varma - CEO"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 md:p-10 flex flex-col justify-center relative">

                    <div className="relative z-10">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full mb-4 w-fit shadow-inner">
                        <Sparkles className="w-3 h-3 text-amber-600" />
                        <span className="text-amber-700 text-xs font-semibold tracking-wide">
                          Founder & CEO
                        </span>
                      </div>

                      <div className="flex justiry-center gap-2 text-2xl">
                        <h3 className="font-bold text-gray-900 mb-2 tracking-tight">
                          Shiva Kumar Varma
                        </h3>
                        <p className="text-orange-400">( D.S Varms)</p>
                      </div>

                      <span className="inline-block mb-6 px-4 py-1 rounded-full bg-orange-100 text-orange-600 font-semibold text-sm">
                        Founder • Architect • Interior Designer
                      </span>
                      <p className="text-gray-600 leading-8 text-[15px] md:text-base mb-8">
                        With over{" "}
                        <span className="font-bold text-orange-500">12+ years</span> of expertise,
                        Shiva Kumar Varma has transformed hundreds of residential and commercial
                        spaces into timeless masterpieces. His passion for innovation, attention to
                        every detail, and commitment to quality have established{" "}
                        <span className="font-extrabold text-orange-500 text-lg">
                          Dsigner Studio Interiors
                        </span>{" "}
                        as one of the most trusted names in luxury interior design and turnkey
                        solutions.
                      </p>

                      {/* Stats with 3D Hover */}
                      <div className="grid grid-cols-3 gap-4 mb-8">
                        {[
                          { value: "500+", label: "Projects" },
                          { value: "12", label: "Years" },
                          { value: "4.8", label: "Rating" }
                        ].map((stat, idx) => (
                          <div
                            key={idx}
                            className="text-center p-3 bg-gradient-to-br from-gray-200 to-gray-400 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100/50"
                          >
                            <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                            <div className="text-gray-900 text-xs font-medium">{stat.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* Link Button - Only clickable area */}
                      <a
                        href="https://ds-varma-portfolio.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/30 hover:scale-105 hover:-translate-y-1 relative overflow-hidden"
                      >
                        {/* Button Shine Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                        {/* Button Water Drop Effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-amber-400/20 to-orange-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <span className="relative z-10 flex items-center gap-2">
                          View Full Profile
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-all duration-300" />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <style jsx>{`
    @keyframes float {
      0%, 100% { transform: translateY(0px) scale(1); opacity: 0.3; }
      50% { transform: translateY(-20px) scale(1.2); opacity: 0.6; }
    }
    @keyframes float-delayed {
      0%, 100% { transform: translateY(0px) scale(1); opacity: 0.2; }
      50% { transform: translateY(-15px) scale(1.3); opacity: 0.5; }
    }
    @keyframes droplet {
      0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.2; }
      50% { transform: translate(10px, -10px) scale(1.5); opacity: 0.5; }
    }
    @keyframes droplet-delayed {
      0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.15; }
      50% { transform: translate(-10px, -15px) scale(1.6); opacity: 0.4; }
    }
    @keyframes pulse-slow {
      0%, 100% { transform: scale(1); opacity: 0.2; }
      50% { transform: scale(1.1); opacity: 0.4; }
    }
    
    .perspective-1000 {
      perspective: 1000px;
    }
    .transform-style-3d {
      transform-style: preserve-3d;
    }
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
    .animate-float-delayed {
      animation: float-delayed 8s ease-in-out infinite;
    }
    .animate-droplet {
      animation: droplet 4s ease-in-out infinite;
    }
    .animate-droplet-delayed {
      animation: droplet-delayed 5s ease-in-out infinite;
    }
    .animate-pulse-slow {
      animation: pulse-slow 6s ease-in-out infinite;
    }
    .delay-1000 {
      animation-delay: 1s;
    }
    
    .group:hover .rotate-y-2 {
      transform: rotateY(2deg) rotateX(2deg);
    }
  `}</style>
      </section>

      {/* ===== STATS SECTION WITH MODERN DESIGN ===== */}
      <div className="py-4 relative overflow-hidden rounded-[0px] bg-gradient-to-r from-orange-500 to-amber-500">
        <div className="relative z-10">
          {/* Desktop: Simple Grid Layout */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-3 py-3 px-4">
            {/* Rating */}
            <div className="flex items-center justify-center gap-2 group cursor-pointer">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 fill-white/80 text-white/80"
                  />
                ))}
              </div>
              <span className="text-white text-lg font-semibold">4.8</span>
              <span className="text-white/60 text-sm">(128 reviews)</span>
            </div>

            {/* Projects */}
            <div className="flex items-center justify-center gap-2 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                <Check className="w-6 h-6 text-white/80" />
              </div>
              <span className="text-white text-lg font-semibold">500+</span>
              <span className="text-white/60 text-sm">Projects</span>
            </div>

            {/* Experience */}
            <div className="flex items-center justify-center gap-2 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                <Award className="w-6 h-6 text-white/80" />
              </div>
              <span className="text-white text-lg font-semibold">12+</span>
              <span className="text-white/60 text-sm">Years</span>
            </div>

            {/* Satisfaction */}
            <div className="flex items-center justify-center gap-2 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-white/80" />
              </div>
              <span className="text-white text-lg font-semibold">100%</span>
              <span className="text-white/60 text-sm">Satisfaction</span>
            </div>
          </div>

          {/* Mobile: Simple Horizontal Scroll */}
          <div className="lg:hidden overflow-x-auto scrollbar-hide">
            <div className="flex gap-6 items-center px-4 py-3 min-w-max">
              <div className="flex items-center gap-1">
                <div className="flex gap-0.5">
                  {[...Array(1)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 fill-white/80 text-white/80"
                    />
                  ))}
                </div>
                <span className="text-white text-xs font-semibold">4.8</span>
                <span className="text-white/50 text-xs">(128)</span>
              </div>

              <div className="flex items-center gap-1">
                <Check className="w-3 h-3 text-white/80" />
                <span className="text-white text-xs font-semibold">500+</span>
                <span className="text-white/50 text-xs">Projects</span>
              </div>

              <div className="flex items-center gap-1">
                <Award className="w-3 h-3 text-white/80" />
                <span className="text-white text-xs font-semibold">12+</span>
                <span className="text-white/50 text-xs">Years</span>
              </div>

              <div className="flex items-center gap-1">
                <Users className="w-3 h-3 text-white/80" />
                <span className="text-white text-xs font-semibold">100%</span>
                <span className="text-white/50 text-xs">Happy</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
  /* Hide scrollbar for Chrome, Safari and Opera */
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  
  /* Hide scrollbar for IE, Edge and Firefox */
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`}</style>

      {/* ===== TESTIMONIALS SECTION ===== */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full mb-4">
              <Quote className="w-4 h-4 text-amber-600" />
              <span className="text-amber-700 text-sm font-semibold">
                Client Love
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our{" "}
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                Clients Say
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-amber-50/30 rounded-[30%_70%_70%_30%/_30%_35%_65%_70%] p-8 shadow-lg hover:shadow-xl transition-all duration-500"
              >
                <Quote className="w-10 h-10 text-amber-400 mb-4" />
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-500 text-sm">
                      {testimonial.role}
                    </div>
                    <div className="flex gap-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3 h-3 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes subtle-zoom {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(10px); opacity: 0; }
        }
        
        .animate-subtle-zoom {
          animation: subtle-zoom 20s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        
        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

export default AboutUs;
