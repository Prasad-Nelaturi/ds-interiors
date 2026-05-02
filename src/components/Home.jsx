import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  Menu,
  Layers,
  Users,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Sparkles,
  Building,
  Ruler,
  Palette,
  Crown,
  Shield,
  ArrowRight,
  Play,
  Quote,
  Pause,
  Home,
  Sofa,
  ChevronRight,
  Heart,
  Zap,
  TrendingUp,
  Calendar,
  Briefcase,
  ChevronLeft,
} from "lucide-react";

const DSInteriorsWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredService, setHoveredService] = useState(null);
  const [hoveredPortfolio, setHoveredPortfolio] = useState(null);
  const [isCarouselPlaying, setIsCarouselPlaying] = useState(true);

  const [selectedVideo, setSelectedVideo] = useState(null);
const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
const [isPlaying, setIsPlaying] = useState(false);
const [isMuted, setIsMuted] = useState(true);
const modalVideoRef = useRef(null);

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);
  const testimonialsRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);
  const autoPlayInterval = useRef(null);
  const carouselInterval = useRef(null);

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

  // Hero Carousel Images - Endless Loop
  const carouselImages = [
    {
      url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600",
      title: "Modern Living Room",
      subtitle: "Elegant & Comfortable",
    },
    {
      url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1600",
      title: "Luxury Bedroom",
      subtitle: "Peaceful Retreat",
    },
    {
      url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600",
      title: "Corporate Office",
      subtitle: "Inspiring Workspace",
    },
    {
      url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600",
      title: "Restaurant Design",
      subtitle: "Welcoming Atmosphere",
    },
    {
      url: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1600",
      title: "Modern Kitchen",
      subtitle: "Functional & Stylish",
    },
    {
      url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600",
      title: "Interior Styling",
      subtitle: "Perfect Details",
    },
  ];

  // Customer Reviews with Videos
  const customerReviews = [
    {
      name: "Rajesh Kumar",
      role: "Homeowner",
      text: "Exceptional work! The team transformed our home into a masterpiece. Every detail was carefully considered and executed perfectly.",
      rating: 5,
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      name: "Priya Sharma",
      role: "Business Owner",
      text: "Professional, creative, and delivered on time. Highly recommended! They understood our vision and brought it to life beautifully.",
      rating: 5,
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      name: "Amit Singh",
      role: "Architect",
      text: "Best interior designers in Hyderabad. The attention to detail is amazing! A true pleasure to work with such talented professionals.",
      rating: 5,
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      name: "Neha Gupta",
      role: "Interior Designer",
      text: "Incredible creativity and execution. They turned our outdated office into a modern workspace that inspires everyone.",
      rating: 5,
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
  ];

  const services = [
    {
      icon: <Home className="w-6 h-6" />,
      title: "Residential Design",
      desc: "Transform your home into a stunning living space with our expert design services.",
      category: "POPULAR",
      gradient: "from-amber-500 to-orange-500",
      color: "text-amber-600",
      bgLight: "bg-amber-50",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&h=400&fit=crop",
      features: ["Custom Layouts", "3D Visualizations", "Material Selection"],
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Commercial Spaces",
      desc: "Create inspiring workspaces that boost productivity and reflect your brand identity.",
      category: "BUSINESS",
      gradient: "from-blue-500 to-indigo-500",
      color: "text-blue-600",
      bgLight: "bg-blue-50",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
      features: ["Office Planning", "Retail Design", "Brand Integration"],
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Interior Styling",
      desc: "Complete styling solutions with curated furniture, art, and accessories for your space.",
      category: "STYLING",
      gradient: "from-purple-500 to-pink-500",
      color: "text-purple-600",
      bgLight: "bg-purple-50",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
      features: ["Furniture Curation", "Art Selection", "Accessories"],
    },
    {
      icon: <Crown className="w-6 h-6" />,
      title: "Luxury Villas",
      desc: "Premium villa designs with exquisite finishes and unparalleled attention to detail.",
      category: "PREMIUM",
      gradient: "from-yellow-500 to-amber-500",
      color: "text-amber-600",
      bgLight: "bg-amber-50",
      image:
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&h=400&fit=crop",
      features: ["Luxury Finishes", "Smart Home", "Landscape Design"],
    },
    {
      icon: <Ruler className="w-6 h-6" />,
      title: "Space Planning",
      desc: "Optimized layouts for maximum functionality and seamless flow in any environment.",
      category: "PLANNING",
      gradient: "from-emerald-500 to-teal-500",
      color: "text-emerald-600",
      bgLight: "bg-emerald-50",
      image:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=400&fit=crop",
      features: ["Floor Planning", "Traffic Flow", "Zoning Strategy"],
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "3D Visualization",
      desc: "Realistic 3D renderings that bring your dream space to life before execution begins.",
      category: "TECHNOLOGY",
      gradient: "from-rose-500 to-red-500",
      color: "text-rose-600",
      bgLight: "bg-rose-50",
      image:
        "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&h=400&fit=crop",
      features: ["3D Renderings", "Virtual Tours", "Material Previews"],
    },
  ];

  const portfolio = [
    {
      id: 1,
      title: "Modern Living Room",
      category: "Residential",
      image: "https://cdn.mos.cms.futurecdn.net/Z5yngChp7VkWjDFcgzyFLf.gif",
    },
    {
      id: 2,
      title: "Luxury Bedroom",
      category: "Residential",
      image:
        "https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/92/2025/01/23045200/GIF-Deluxe-Twins-650-x-434-px-Charlotte.gif",
    },
    {
      id: 3,
      title: "Corporate Office",
      category: "Commercial",
      image:
        "https://www.mmoser.com/wp-content/uploads/2022/02/global-media-company-london-office-flexible-work-settings.gif",
    },
    {
      id: 4,
      title: "Restaurant Interior",
      category: "Commercial",
      image: "https://i.makeagif.com/media/12-21-2017/dSLVxb.gif",
    },
    {
      id: 5,
      title: "Kitchen Design",
      category: "Residential",
      image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/hd/e73fbd127166603.613c3c5346de6.gif",
    },
    {
      id: 6,
      title: "Bathroom Luxury",
      category: "Residential",
      image:
        "https://stamperlloyd.com/wp-content/uploads/2019/04/stamperlloyd-bathrooms.gif",
    },
  ];

  // Carousel auto-play
  useEffect(() => {
    if (isCarouselPlaying) {
      carouselInterval.current = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % carouselImages.length);
      }, 5000);
    }
    return () => clearInterval(carouselInterval.current);
  }, [isCarouselPlaying, carouselImages.length]);

  // Intersection Observer for scroll animations
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
      { ref: portfolioRef, id: "portfolio" },
      { ref: testimonialsRef, id: "testimonials" },
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

  const scrollToSection = useCallback((ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsMenuOpen(false);
  }, []);

  const copyAddress = () => {
    navigator.clipboard.writeText(companyInfo.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const StarRating = ({ rating }) => (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < Math.floor(rating)
              ? "text-yellow-400 fill-yellow-400"
              : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );

  const AnimatedSection = ({ children, id, className = "" }) => (
    <div
      className={`transition-all duration-700 ${
        isVisible[id] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${className}`}
    >
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section with Endless Carousel */}
      {/* Hero Section with Endless Carousel - Instant Transition */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        {/* Carousel Background - Crossfade without blank screen */}
        <div className="absolute inset-0">
          {carouselImages.map((image, idx) => (
            <motion.div
              key={idx}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: idx === activeSlide ? 1 : 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 z-10"></div>
            </motion.div>
          ))}
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {carouselImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveSlide(idx);
                setIsCarouselPlaying(false);
                setTimeout(() => setIsCarouselPlaying(true), 5000);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === activeSlide
                  ? "w-8 bg-amber-400"
                  : "w-2 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>

        {/* Carousel Navigation Arrows */}
        <button
          onClick={() => {
            setActiveSlide(
              (prev) =>
                (prev - 1 + carouselImages.length) % carouselImages.length,
            );
            setIsCarouselPlaying(false);
            setTimeout(() => setIsCarouselPlaying(true), 5000);
          }}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-white/40 transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={() => {
            setActiveSlide((prev) => (prev + 1) % carouselImages.length);
            setIsCarouselPlaying(false);
            setTimeout(() => setIsCarouselPlaying(true), 5000);
          }}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-white/40 transition-all duration-300"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        <div className="container mx-auto px-6 relative z-20">
          <AnimatedSection id="hero">
            <div className="max-w-4xl">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-8 border border-white/20">
                  <Sparkles className="w-4 h-4 text-yellow-400" />
                  <span className="text-white text-sm tracking-wide">
                    Since 2012 • Award Winning Studio
                  </span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
                  DS Interiors
                  <span className="block py-1 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                    {carouselImages[activeSlide].title}
                  </span>
                </h1>
                <p className="text-xl text-white/90 mb-3">
                  {carouselImages[activeSlide].subtitle}
                </p>
                <p className="text-base md:text-lg text-white/70 mb-10 max-w-xl leading-relaxed">
                  We design simple, beautiful spaces for your home. Comfort,
                  style, and quality in every corner.
                </p>
                <div className="flex flex-wrap gap-5">
                  <button
                    onClick={() => setShowContact(true)}
                    className="group px-6 py-3 bg-white text-gray-900 rounded-full hover:bg-gradient-to-r from-amber-400 to-orange-500 hover:text-white transition-all duration-300 shadow-2xl flex items-center gap-2 font-semibold"
                  >
                    Start Your Journey
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                  </button>
                  <button
                    onClick={() => scrollToSection(portfolioRef)}
                    className="px-6 py-3 border-2 border-white text-white rounded-full hover:bg-white/10 transition-all duration-300 font-semibold"
                  >
                    Explore Portfolio
                  </button>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== TRUST BADGES - MINIMAL & DECENT ===== */}
      <div className="relative overflow-hidden rounded-[0px] bg-gradient-to-r from-orange-500 to-amber-500">
        <div className="relative z-10">
          {/* Desktop: Simple Grid Layout */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-3 py-3 px-4">
            {/* Rating */}
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

            {/* Projects */}
            <div className="flex items-center justify-center gap-2 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                <Check className="w-3 h-3 text-white/80" />
              </div>
              <span className="text-white text-lg font-semibold">500+</span>
              <span className="text-white/60 text-sm">Projects</span>
            </div>

            {/* Experience */}
            <div className="flex items-center justify-center gap-2 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                <Award className="w-3 h-3 text-white/80" />
              </div>
              <span className="text-white text-lg font-semibold">12+</span>
              <span className="text-white/60 text-sm">Years</span>
            </div>

            {/* Satisfaction */}
            <div className="flex items-center justify-center gap-2 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                <Users className="w-3 h-3 text-white/80" />
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

      {/* Stats Section with Luxury Design & Water Drop Effect */}
      <section className="py-6 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Animated Water Ripple Background */}
        <div className="absolute inset-1 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-violet-400/20"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-cyan-400/15"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                number: "500+",
                label: "Projects Completed",
                icon: <Layers className="w-6 h-6" />,
                color: "from-blue-500 to-cyan-500",
                dropColor: "blue-400",
              },
              {
                number: "200+",
                label: "Happy Clients",
                icon: <Users className="w-6 h-6" />,
                color: "from-emerald-500 to-teal-500",
                dropColor: "emerald-400",
              },
              {
                number: "12+",
                label: "Years Experience",
                icon: <Award className="w-6 h-6" />,
                color: "from-amber-500 to-orange-500",
                dropColor: "amber-400",
              },
              {
                number: "15+",
                label: "Expert Team",
                icon: <Sparkles className="w-6 h-6" />,
                color: "from-purple-500 to-pink-500",
                dropColor: "purple-400",
              },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="group relative text-center cursor-pointer"
              >
                {/* Water Drop / Ripple Effect Container */}
                <div className="relative inline-block w-full">
                  {/* Ripple rings - animate on hover */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="absolute w-20 h-20 rounded-full border-2 border-transparent group-hover:border-opacity-50 group-hover:animate-ripple"></div>
                    <div className="absolute w-20 h-20 rounded-full border-2 border-transparent group-hover:border-opacity-30 group-hover:animate-ripple-delay"></div>
                    <div className="absolute w-20 h-20 rounded-full border-2 border-transparent group-hover:border-opacity-15 group-hover:animate-ripple-slow"></div>
                  </div>

                  {/* Main Icon Card with Water Drop Reflection */}
                  <div className="relative">
                    {/* Water drop shadow / reflection underneath */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-14 h-4 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative w-16 h-16 mx-auto mb-4">
                      {/* Water droplet shape background */}
                      <div className="absolute inset-0 rounded-[40%_60%_70%_30%/_40%_50%_60%_50%] animate-drop-float"></div>

                      {/* Main icon background with water ripple effect */}
                      <div
                        className={`relative w-full h-full bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center text-white shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl overflow-hidden`}
                      >
                        {/* Water ripple overlay on icon */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        {/* Animated water wave inside icon */}
                        <div className="absolute bottom-0 left-0 right-0 h-0 bg-white/20 group-hover:h-full transition-all duration-700 rounded-2xl"></div>

                        {/* Icon with water ripple animation */}
                        <div className="relative z-10 transform transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1">
                          {stat.icon}
                        </div>

                        {/* Water drop highlight */}
                        <div className="absolute top-1 left-2 w-2 h-2 bg-white/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </div>

                    {/* Water drop drip effect from icon */}
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0.5 h-0 bg-gradient-to-b from-white to-transparent rounded-full opacity-0 group-hover:opacity-100 group-hover:h-3 transition-all duration-500"></div>
                  </div>

                  {/* Number with water ripple text effect */}
                  <div className="relative">
                    <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 relative inline-block group-hover:animate-text-wave">
                      <span className="relative inline-block transition-all duration-300 group-hover:-translate-y-1 inline-block animate-float-1">
                        {stat.number.charAt(0)}
                      </span>
                      <span className="relative inline-block transition-all duration-300 group-hover:-translate-y-1 delay-75 inline-block animate-float-2">
                        {stat.number.charAt(1)}
                      </span>
                      <span className="relative inline-block transition-all duration-300 group-hover:-translate-y-1 delay-100 inline-block animate-float-3">
                        {stat.number.charAt(2)}
                      </span>
                      <span className="relative inline-block transition-all duration-300 group-hover:-translate-y-1 delay-150 inline-block animate-float-4">
                        {stat.number.charAt(3)}
                      </span>
                      {stat.number.length > 4 && (
                        <span className="relative inline-block transition-all duration-300 group-hover:-translate-y-1 delay-200 inline-block animate-float-5">
                          +
                        </span>
                      )}
                    </div>
                    <div className="text-gray-500 text-sm tracking-wide group-hover:text-gray-700 transition-colors duration-300">
                      {stat.label}
                    </div>

                    {/* Underline water ripple effect */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent rounded-full group-hover:w-12 transition-all duration-500"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add custom styles for water drop animations */}
        <style jsx>{`
          @keyframes ripple {
            0% {
              width: 40px;
              height: 40px;
              opacity: 0.6;
              border-color: rgba(59, 130, 246, 0.5);
            }
            100% {
              width: 100px;
              height: 100px;
              opacity: 0;
              border-color: rgba(59, 130, 246, 0);
            }
          }
          
          @keyframes ripple-delay {
            0% {
              width: 40px;
              height: 40px;
              opacity: 0.4;
              border-color: rgba(59, 130, 246, 0.4);
            }
            100% {
              width: 120px;
              height: 120px;
              opacity: 0;
              border-color: rgba(59, 130, 246, 0);
            }
          }
          
          @keyframes ripple-slow {
            0% {
              width: 40px;
              height: 40px;
              opacity: 0.2;
              border-color: rgba(59, 130, 246, 0.3);
            }
            100% {
              width: 140px;
              height: 140px;
              opacity: 0;
              border-color: rgba(59, 130, 246, 0);
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
          
          @keyframes float-1 {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-4px); }
          }
          @keyframes float-2 {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-6px); }
          }
          @keyframes float-3 {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-3px); }
          }
          @keyframes float-4 {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-7px); }
          }
          @keyframes float-5 {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-5px); }
          }
          
          .animate-float-1 { animation: float-1 3s ease-in-out infinite; }
          .animate-float-2 { animation: float-2 3.5s ease-in-out infinite; }
          .animate-float-3 { animation: float-3 2.8s ease-in-out infinite; }
          .animate-float-4 { animation: float-4 4s ease-in-out infinite; }
          .animate-float-5 { animation: float-5 3.2s ease-in-out infinite; }
          
          @keyframes text-wave {
            0%, 100% { letter-spacing: normal; }
            50% { letter-spacing: 2px; }
          }
          
          .group:hover .animate-text-wave {
            animation: text-wave 0.5s ease-in-out;
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
          
          .delay-75 {
            transition-delay: 75ms;
          }
          
          .delay-100 {
            transition-delay: 100ms;
          }
          
          .delay-150 {
            transition-delay: 150ms;
          }
          
          .delay-200 {
            transition-delay: 200ms;
          }
        `}</style>
      </section>

{/* Customer Reviews Section with Videos - Horizontal Scrollable */}
<section ref={testimonialsRef} className="py-12 relative overflow-hidden">
  <div className="container mx-auto px-6 relative z-10">
    <AnimatedSection id="testimonials">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-block px-4 py-1 bg-amber-500/20 rounded-full mb-4 backdrop-blur-sm">
          <span className="text-amber-700 text-lg font-medium tracking-wide">
            Customer Reviews
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          What Our Clients{" "}
          <span className="bg-gradient-to-r from-amber-300 to-orange-500 bg-clip-text text-transparent">
            Say
          </span>
        </h2>
        <p className="text-gray-600 text-lg">
          Don't just take our word for it — hear from our satisfied clients
        </p>
      </div>
    </AnimatedSection>

    {/* Horizontal Scrollable Cards with Videos */}
    <div className="relative group">
      <div
        className="flex overflow-x-auto scrollbar-hide gap-6 pb-6 px-2 scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {customerReviews.map((review, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -5 }}
            className="flex-shrink-0 w-70 md:w-86 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 cursor-pointer"
            onClick={() => {
              setSelectedVideo(review);
              setIsVideoModalOpen(true);
              setIsPlaying(true);
            }}
          >
            {/* Video Thumbnail with Play Button */}
            <div className="relative h-48 bg-gray-900 group/video">
              <video
                src={review.videoUrl}
                className="w-full h-full object-cover"
                loop
                muted
                playsInline
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-100 group-hover/video:bg-black/40 transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-white/30 backdrop-blur flex items-center justify-center group-hover/video:scale-110 transition-all duration-300">
                  <Play className="w-7 h-7 text-white ml-0.5" />
                </div>
              </div>
            </div>

            <div className="p-4">            
              {/* Customer Name & Role */}
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  <p className="text-xs text-gray-500">{review.role}</p>
                </div>
                <div className="text-amber-500">
                  <Quote className="w-5 h-5 opacity-50" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Scroll Hint (Mobile) */}
    <div className="text-center mt-6 lg:hidden">
      <p className="text-xs text-gray-400 flex items-center justify-center gap-1">
        <ChevronLeft className="w-3 h-3" />
        Scroll to see more reviews
        <ChevronRight className="w-3 h-3" />
      </p>
    </div>
  </div>
</section>

{/* Video Modal with Pay Button and Sound Controls */}
<AnimatePresence>
  {isVideoModalOpen && selectedVideo && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
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
        className="relative max-w-4xl w-full bg-black rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            setIsVideoModalOpen(false);
            setIsPlaying(false);
            if (modalVideoRef.current) {
              modalVideoRef.current.pause();
            }
          }}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur flex items-center justify-center text-white hover:bg-amber-500 hover:text-white transition-all duration-300"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video Player */}
        <div className="relative">
          <video
            ref={modalVideoRef}
            src={selectedVideo.videoUrl}
            className="w-full h-auto max-h-[60vh] object-contain"
            autoPlay
            playsInline
          />
          
          {/* Video Controls Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <div className="flex items-center justify-between">
              {/* Play/Pause Button */}
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
                className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-amber-500 transition-all duration-300"
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5 text-white" />
                ) : (
                  <Play className="w-5 h-5 text-white ml-0.5" />
                )}
              </button>

              {/* Sound Mute/Unmute Button */}
              <button
                onClick={() => {
                  if (modalVideoRef.current) {
                    modalVideoRef.current.muted = !isMuted;
                    setIsMuted(!isMuted);
                  }
                }}
                className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-amber-500 transition-all duration-300"
              >
                {isMuted ? (
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51c.66-1.24 1.03-2.65 1.03-4.15 0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM9.6 9.6l-1.1-1.1-2.5 2.5H3v6h3l3 3h1v-6.4l2.5-2.5-.9-.9z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77 0-4.28-2.99-7.86-7-8.77z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Review Info Below Video */}
        <div className="py-4 px-6 bg-white">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-xl font-bold text-gray-900">{selectedVideo.name}</h3>
              <p className="text-sm text-gray-500">{selectedVideo.role}</p>
            </div>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
          </div>
          <p className="text-gray-600 leading-relaxed">
            {selectedVideo.text}
          </p>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

      {/* About Section with Luxury Layout */}
      <section ref={aboutRef} className="py-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-50 rounded-full blur-3xl opacity-50 -z-10"></div>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection id="about">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 border-t-4 border-l-4 border-amber-300"></div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-4 border-r-4 border-amber-300"></div>
                <img
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800"
                  alt="About"
                  className="rounded-3xl shadow-2xl w-full relative z-10"
                />
                <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-4 z-20">
                  <div className="flex items-center gap-3">
                    <Award className="w-8 h-8 text-amber-600" />
                    <div>
                      <div className="font-bold text-gray-900">
                        Best Design Studio
                      </div>
                      <div className="text-gray-500 text-sm">
                        2023 Award Winner
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection id="about">
              <div>
                {/* Animated badge with pulse effect */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-amber-50 to-orange-50 rounded-full mb-6 group cursor-pointer hover:scale-105 transition-all duration-300">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></div>
                  <span className="text-amber-700 text-lg font-medium tracking-wide">
                    About Us
                  </span>
                  <Sparkles className="w-3 h-3 text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Animated heading with gradient shift */}
                <div className="relative">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    Creating Beautiful
                    <div className="relative inline-block ml-2">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-orange-600 to-gray-900 bg-300% animate-gradient">
                        Spaces Since 2012
                      </span>
                      {/* Animated underline */}
                      <svg
                        className="absolute -bottom-2 left-0 w-full h-2"
                        viewBox="0 0 300 10"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 5 Q 75 10, 150 5 T 300 5"
                          stroke="orangered"
                          fill="none"
                          strokeWidth="2"
                          strokeLinecap="round"
                          className="animate-dash"
                        />
                      </svg>
                    </div>
                  </h2>
                </div>

                {/* Animated paragraph with fade-up effect for each sentence */}
                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxed text-lg transform transition-all duration-500 hover:translate-x-2 hover:text-gray-800">
                    <span className="inline-block w-1 h-1 bg-amber-500 rounded-full mr-2 align-middle"></span>
                    D S Interiors is a premier interior design studio based in
                    Hyderabad, specializing in residential and commercial
                    spaces. We believe that great design transforms not just
                    spaces, but lives.
                  </p>
                  <p className="text-gray-600 leading-relaxed transform transition-all duration-500 delay-100 hover:translate-x-2 hover:text-gray-800">
                    <span className="inline-block w-1 h-1 bg-amber-500 rounded-full mr-2 align-middle"></span>
                    Our team of expert designers works closely with clients to
                    create personalized spaces that reflect their unique style
                    and needs, blending aesthetics with functionality.
                  </p>
                </div>

                {/* Dynamic feature cards with hover effects - Responsive Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 mt-8">
                  {/* Card 2 */}
                  <div className="group relative overflow-hidden rounded-2xl p-4 bg-gradient-to-br from-gray-50 to-violet-200 border border-gray-100 hover:border-violet-200 transition-all duration-500 hover:shadow-xl cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative flex items-center gap-3">
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-br from-violet-100 to-orange-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Clock className="w-5 h-5 text-violet-600 group-hover:text-violet-700 transition-colors" />
                        </div>
                        <div className="absolute inset-0 rounded-2xl border-2 border-violet-400 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500"></div>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 group-hover:text-violet-700 transition-colors duration-300">
                          On-Time Delivery
                        </div>
                        <div className="text-gray-500 text-sm group-hover:text-gray-600">
                          100% commitment & tracking
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-violet-200 to-violet-500 w-0 group-hover:w-full transition-all duration-700"></div>
                  </div>

                  {/* Card 3 (Optional - Add more cards as needed) */}
                  <div className="group relative overflow-hidden rounded-2xl p-3 bg-gradient-to-br from-gray-50 to-green-200 border border-gray-100 hover:border-green-200 transition-all duration-500 hover:shadow-xl cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative flex items-center gap-3">
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-50 to-orange-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Headphones className="w-5 h-5 text-green-600 group-hover:text-green-700 transition-colors" />
                        </div>
                        <div className="absolute inset-0 rounded-2xl border-2 border-green-400 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500"></div>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 group-hover:text-green-700 transition-colors duration-300">
                          24/7 Customer Support
                        </div>
                        <div className="text-gray-500 text-sm group-hover:text-gray-600">
                          Always here to help you
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-200 to-green-500 w-0 group-hover:w-full transition-all duration-700"></div>
                  </div>
                </div>
                {/* Dynamic CTA Button with micro-interactions */}
                <button
                  onClick={() => scrollToSection(contactRef)}
                  className="group relative inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-full transition-all duration-300 font-medium overflow-hidden shadow-lg hover:shadow-2xl"
                >
                  {/* Animated shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                  {/* Ripple effect container */}
                  <span className="relative z-10 flex items-center gap-2">
                    Learn More About Us
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </span>

                  {/* Animated dots on hover */}
                  <div className="absolute -right-8 -top-8 w-16 h-16 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500"></div>
                  <div className="absolute -left-8 -bottom-8 w-16 h-16 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500 delay-100"></div>
                </button>

                {/* Animated decorative elements */}
                <div className="absolute -right-20 top-20 w-40 h-40 bg-gradient-to-r from-amber-100/20 to-orange-100/20 rounded-full blur-2xl -z-10 animate-pulse-slow"></div>
                <div className="absolute -left-20 bottom-20 w-40 h-40 bg-gradient-to-r from-amber-100/20 to-orange-100/20 rounded-full blur-2xl -z-10 animate-pulse-slow delay-1000"></div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== MODERN SERVICES SECTION ===== */}
      <section
        ref={servicesRef}
        className="py-8 md:py-12 bg-gradient-to-br from-slate-50 via-white to-orange-50 relative overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-10 relative z-10">
          {/* ===== HEADER ===== */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-orange-50 rounded-full px-5 py-2 mb-6 shadow-md border border-orange-100">
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                What We Do
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Premium{" "}
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Delivering exceptional quality with innovative solutions tailored
              to your needs
            </p>
          </div>

          {/* ===== SERVICES GRID ===== */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Card Container */}
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  {/* Image Container with Overlay */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                    {/* Service Icon on Image */}
                    <div
                      className={`absolute bottom-4 left-4 w-12 h-12 rounded-xl ${service.bgLight} flex items-center justify-center shadow-lg backdrop-blur-sm border border-white/30`}
                    >
                      <div className={service.color}>{service.icon}</div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700">
                      {service.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {service.desc}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <Check className="w-4 h-4 text-green-500" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-100 pt-4">
                      <button
                        onClick={() => scrollToSection(contactRef)}
                        className="w-full flex items-center justify-between text-orange-600 font-semibold group/btn hover:text-orange-700 transition-colors"
                      >
                        <span>Learn More</span>
                        <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ===== CTA SECTION ===== */}
          <div className="relative mt-24 rounded-3xl overflow-hidden">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&h=600&fit=crop"
                alt="interior"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative z-10 text-center py-16 px-6">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-orange-100 mb-8 text-lg max-w-2xl mx-auto">
                Get a free consultation with our expert team and bring your
                vision to life
              </p>
              <button
                onClick={() => scrollToSection(contactRef)}
                className="inline-flex items-center gap-2 px-8 py-3 bg-white text-orange-600 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <span>Get Free Consultation</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <style jsx>{`
    @keyframes blob {
      0%, 100% { transform: translate(0px, 0px) scale(1); }
      33% { transform: translate(30px, -50px) scale(1.1); }
      66% { transform: translate(-20px, 20px) scale(0.9); }
    }
    
    @keyframes fade-in-up {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .animate-blob {
      animation: blob 7s infinite;
    }
    
    .animation-delay-2000 {
      animation-delay: 2s;
    }
    
    .animation-delay-4000 {
      animation-delay: 4s;
    }
    
    .animate-fade-in-up {
      animation: fade-in-up 0.6s ease-out forwards;
      opacity: 0;
    }
  `}</style>
      </section>

      {/* Portfolio Section with Masonry Layout */}
      <section ref={portfolioRef} className="py-12">
        <div className="container mx-auto px-6">
          <AnimatedSection id="portfolio">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-orange-50 rounded-full px-5 py-2 mb-6 shadow-md border border-orange-100">
                <Sparkles className="w-4 h-4 text-orange-500" />
                <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                  Our Work
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Featured{" "}
                <span className="bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">
                  Projects
                </span>
              </h2>
              <p className="text-gray-600 text-lg">
                Explore some of our finest interior design projects
              </p>
            </div>
          </AnimatedSection>

          {/* ===== BALANCED PORTFOLIO GRID ===== */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Featured Card - Takes 2 columns on desktop */}
            <div className="lg:col-span-2 lg:row-span-2">
              <AnimatedSection id="portfolio">
                <div
                  className="group relative overflow-hidden cursor-pointer rounded-3xl shadow-2xl h-[300px] md:h-[400px] lg:h-[500px]"
                  onMouseEnter={() => setHoveredPortfolio(portfolio[0].id)}
                  onMouseLeave={() => setHoveredPortfolio(null)}
                  onClick={() => setSelectedImage(portfolio[0])}
                >
                  <img
                    src={portfolio[0].image}
                    alt={portfolio[0].title}
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500" />

                  {/* Gradient Border Animation */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <div className="mb-2">
                      <span className="px-3 py-1 rounded-full bg-amber-500 text-white text-xs font-bold">
                        FEATURED
                      </span>
                    </div>
                    <h3 className="text-white text-3xl md:text-4xl font-bold mb-2">
                      {portfolio[0].title}
                    </h3>
                    <p className="text-gray-200 text-sm md:text-base mb-4">
                      {portfolio[0].category}
                    </p>
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white text-gray-900 font-semibold hover:gap-3 transition-all duration-300">
                      <span>Explore Project</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Other Cards */}
            {portfolio.slice(1).map((item, idx) => (
              <AnimatedSection key={item.id} id="portfolio">
                <div
                  className="group relative overflow-hidden cursor-pointer rounded-2xl shadow-lg h-[300px] md:h-[280px] lg:h-[238px]"
                  onMouseEnter={() => setHoveredPortfolio(item.id)}
                  onMouseLeave={() => setHoveredPortfolio(null)}
                  onClick={() => setSelectedImage(item)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <span className="text-amber-300 text-xs font-medium uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h4 className="text-white text-lg font-semibold mt-1">
                      {item.title}
                    </h4>
                    <div className="flex items-center gap-1 text-white/80 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span>View</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MODERN CONTACT SECTION WITH LUXURY DESIGN ===== */}
      <section
        ref={contactRef}
        className="py-12 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
      >
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-100/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-100/20 to-transparent rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Left Column - Contact Info */}
            <AnimatedSection id="contact">
              <div>
                {/* Animated Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block px-4 py-1 bg-gradient-to-r from-amber-100 to-amber-50 rounded-full mb-6 shadow-sm"
                >
                  <span className="text-amber-700 text-sm font-medium tracking-wide flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></span>
                    Get In Touch
                  </span>
                </motion.div>

                {/* Title with Animation */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
                >
                  Let's Discuss
                  <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent block sm:inline">
                    {" "}
                    Your Project
                  </span>
                </motion.h2>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-gray-600 text-lg mb-10 leading-relaxed"
                >
                  Ready to transform your space? Contact us for a consultation
                  and let's bring your vision to life.
                </motion.p>

                {/* Contact Details with Staggered Animation */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={{
                    visible: { transition: { staggerChildren: 0.1 } },
                  }}
                  className="space-y-6"
                >
                  {/* Phone - Clickable */}
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    className="flex items-start gap-5 group cursor-pointer"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a
                      href={`tel:${companyInfo.phone}`}
                      className="flex items-start gap-5 w-full"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-md">
                        <Phone className="w-5 h-5 text-amber-700" />
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm mb-1">Phone</p>
                        <p className="text-gray-900 font-medium text-lg hover:text-amber-600 transition-colors">
                          {companyInfo.phone}
                        </p>
                      </div>
                    </a>
                  </motion.div>

                  {/* Email - Clickable with Webmail Options */}
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    className="flex items-start gap-5 group"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-md">
                      <Mail className="w-5 h-5 text-amber-700" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-500 text-sm mb-1">Email</p>
                      <div className="flex flex-col gap-2">
                        <a
                          href={`mailto:${companyInfo.email}?subject=Inquiry%20from%20Website&body=Hello%20DS%20Interiors,%0A%0A`}
                          className="text-gray-900 font-medium text-lg hover:text-amber-600 transition-colors break-all"
                        >
                          {companyInfo.email}
                        </a>
                        <div className="flex flex-wrap gap-2">
                          <button
                            onClick={() => {
                              navigator.clipboard.writeText(companyInfo.email);
                              alert("Email copied to clipboard! 📋");
                            }}
                            className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg hover:bg-gray-200 transition-colors"
                          >
                            <Copy className="w-3 h-3" />
                            Copy Email
                          </button>
                          <button
                            onClick={() => {
                              window.open(
                                `https://mail.google.com/mail/?view=cm&fs=1&to=${companyInfo.email}&su=Inquiry%20from%20DS%20Interiors`,
                                "_blank",
                              );
                            }}
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
                            onClick={() => {
                              window.open(
                                `https://outlook.live.com/mail/0/deeplink/compose?to=${companyInfo.email}&subject=Inquiry%20from%20DS%20Interiors`,
                                "_blank",
                              );
                            }}
                            className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-lg hover:bg-blue-100 transition-colors"
                          >
                            <svg
                              className="w-3 h-3"
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
                  </motion.div>

                  {/* Address */}
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    className="flex items-start gap-5 group"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-md">
                      <MapPin className="w-5 h-5 text-amber-700" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm mb-1">Address</p>
                      <p className="text-gray-900 font-medium">
                        {companyInfo.address}
                      </p>
                      <button
                        onClick={copyAddress}
                        className="text-amber-600 text-sm hover:text-amber-700 mt-2 flex items-center gap-1 transition-all duration-300 hover:gap-2"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3 h-3" />
                            <span>Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy Address</span>
                          </>
                        )}
                      </button>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Social Icons with Modern Animations */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex gap-4 mt-10"
                >
                  {[
                    {
                      icon: <Facebook className="w-5 h-5" />,
                      href: "#",
                      label: "Facebook",
                      color: "from-blue-600 to-blue-800",
                      hoverColor: "hover:bg-blue-600",
                    },
                    {
                      icon: <Instagram className="w-5 h-5" />,
                      href: "#",
                      label: "Instagram",
                      color: "from-pink-500 to-purple-600",
                      hoverColor:
                        "hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600",
                    },
                    {
                      icon: <Twitter className="w-5 h-5" />,
                      href: "#",
                      label: "Twitter",
                      color: "from-sky-500 to-blue-600",
                      hoverColor: "hover:bg-sky-500",
                    },
                    {
                      icon: <Linkedin className="w-5 h-5" />,
                      href: "#",
                      label: "LinkedIn",
                      color: "from-blue-700 to-indigo-800",
                      hoverColor: "hover:bg-blue-700",
                    },
                    {
                      icon: <Youtube className="w-5 h-5" />,
                      href: "#",
                      label: "YouTube",
                      color: "from-red-500 to-red-700",
                      hoverColor: "hover:bg-red-600",
                    },
                  ].map((social, idx) => (
                    <motion.a
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
                      {/* Animated Background Glow */}
                      <div
                        className={`absolute inset-0 rounded-full bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500`}
                      ></div>

                      {/* Social Icon Container */}
                      <div
                        className={`relative w-11 h-11 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 transition-all duration-500 group-hover:text-white overflow-hidden shadow-md group-hover:shadow-xl ${social.hoverColor}`}
                      >
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                        {/* Icon with Bounce Animation */}
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          {social.icon}
                        </motion.div>
                      </div>

                      {/* Tooltip */}
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none">
                        {social.label}
                      </span>
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </AnimatedSection>

            {/* Right Column - Map with Modern Design */}
            <AnimatedSection id="contact">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 relative group"
              >
                {/* Animated Border */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 via-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700"></div>

                <div className="relative bg-white rounded-3xl overflow-hidden">
                  {/* Map Container */}
                  <div className="p-6">
                    <div className="relative rounded-xl overflow-hidden shadow-lg">
                      <iframe
                        title="Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5!2d78.3!3d17.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI0JzAwLjAiTiA3OMKwMTgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
                        className="w-full h-80 rounded-xl transition-all duration-500 group-hover:scale-105"
                        allowFullScreen
                        loading="lazy"
                      ></iframe>

                      {/* Map Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                    </div>

                    {/* Get Directions Button with Animation */}
                    <motion.button
                      onClick={() =>
                        window.open(
                          `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(companyInfo.address)}`,
                          "_blank",
                        )
                      }
                      className="w-full mt-6 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl hover:from-gray-800 hover:to-gray-700 transition-all duration-500 font-medium flex items-center justify-center gap-2 group overflow-hidden relative"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Button Shimmer */}
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                      <span>Get Directions</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.button>
                  </div>

                  {/* Decorative Corner Elements */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-amber-200 rounded-tl-xl"></div>
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-amber-200 rounded-br-xl"></div>
                </div>
              </motion.div>

              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="bg-white p-4 rounded-2xl rounded-2xl shadow-2xl overflow-hidden border border-gray-100 mt-8 flex items-center gap-4 text-sm justify-center text-gray-600"
              >
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
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

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

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-lg">
          <div className="relative max-w-4xl w-full h-[70%]">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-amber-400 transition"
            >
              <X className="w-6 h-6" />
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
    </div>
  );
};

export default DSInteriorsWebsite;
