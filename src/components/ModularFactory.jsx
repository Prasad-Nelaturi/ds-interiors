import React, { useState, useRef, useEffect } from "react";
import {
  Factory,
  ArrowRight,
  Play,
  Pause,
  Maximize2,
  Minimize2,
  Shield,
  Award,
  Users,
  Truck,
  Settings,
  Wrench,
  HardHat,
  Cpu,
  MapPin,
  Sofa,
  Bed,
  Bath,
  DoorOpen,
  DraftingCompass,
  Armchair,
  Table,
  TreeDeciduous,
  PaintRoller,
  VenetianMask,
  Home,
  Volume2,
  VolumeX
} from "lucide-react";
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';

const ModularFactory = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true); // Start muted
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const videoContainerRef = useRef(null);
  const iframeRef = useRef(null);

  // YouTube Video ID - Using the provided link
  const videoId = "9RX1tQT6pwM";

  // Build embed URL - Start with autoplay and mute
  const getEmbedUrl = (mute = true) => {
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=${mute ? 1 : 0}&controls=0&modestbranding=1&rel=0&loop=1&playlist=${videoId}&enablejsapi=1`;
  };

  const [embedUrl] = useState(getEmbedUrl(true));

  const sectionRefs = {
    overview: useRef(null),
    process: useRef(null),
    products: useRef(null),
    quality: useRef(null),
    gallery: useRef(null),
    contact: useRef(null),
  };

  // Toggle play/pause
  const togglePlay = () => {
    if (iframeRef.current) {
      const message = isVideoPlaying ? 'pause' : 'play';
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({
          event: 'command',
          func: message,
          args: []
        }),
        '*'
      );
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  // Toggle mute/unmute - This actually works now
  const toggleMute = () => {
    if (iframeRef.current) {
      const newMutedState = !isMuted;
      const message = newMutedState ? 'mute' : 'unMute';

      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({
          event: 'command',
          func: message,
          args: []
        }),
        '*'
      );

      setIsMuted(newMutedState);

      // If unmuting, make sure video is playing
      if (!newMutedState && !isVideoPlaying) {
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({
            event: 'command',
            func: 'play',
            args: []
          }),
          '*'
        );
        setIsVideoPlaying(true);
      }
    }
  };

  // Toggle fullscreen
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      videoContainerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  // Listen for fullscreen change events
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Show controls briefly on load
  useEffect(() => {
    setShowControls(true);
    const timer = setTimeout(() => setShowControls(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Factory Statistics
  const statistics = [
    {
      icon: <Factory className="w-6 h-6 sm:w-8 sm:h-8" />,
      value: "50,000+",
      label: "Sq. Ft. Area",
      color: "from-orange-500 to-amber-500",
    },
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
      value: "200+",
      label: "Skilled Workers",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Truck className="w-6 h-6 sm:w-8 sm:h-8" />,
      value: "1000+",
      label: "Projects Delivered",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Award className="w-6 h-6 sm:w-8 sm:h-8" />,
      value: "15+",
      label: "Years Excellence",
      color: "from-purple-500 to-pink-500",
    },
  ];

  // Manufacturing Process - Interior Design Focused
  const processSteps = [
    {
      step: "01",
      title: "Premium Wood Selection",
      description:
        "Sourcing high-quality teak, oak, and engineered wood for furniture",
      icon: <TreeDeciduous className="w-8 h-8" />,
      color: "bg-amber-50 border-amber-200",
      iconColor: "text-amber-600",
    },
    {
      step: "02",
      title: "Precision Cutting & Shaping",
      description: "CNC cutting for perfect furniture components and joinery",
      icon: <Wrench className="w-8 h-8" />,
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600",
    },
    {
      step: "03",
      title: "Assembly & Joinery",
      description:
        "Expert craftsmanship in assembling sofas, tables, and cabinetry",
      icon: <Settings className="w-8 h-8" />,
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-600",
    },
    {
      step: "04",
      title: "Finishing & Polishing",
      description: "Sanding, staining, and polishing for a flawless finish",
      icon: <PaintRoller className="w-8 h-8" />,
      color: "bg-rose-50 border-rose-200",
      iconColor: "text-rose-600",
    },
    {
      step: "05",
      title: "Hardware Installation",
      description: "Premium handles, hinges, and fittings from leading brands",
      icon: <DraftingCompass className="w-8 h-8" />,
      color: "bg-emerald-50 border-emerald-200",
      iconColor: "text-emerald-600",
    },
    {
      step: "06",
      title: "Quality Inspection",
      description: "Rigorous testing of every furniture piece for durability",
      icon: <Shield className="w-8 h-8" />,
      color: "bg-indigo-50 border-indigo-200",
      iconColor: "text-indigo-600",
    },
  ];

  // Product Categories - Interior Design Focused
  const productCategories = [
    {
      name: "Living Room Furniture",
      icon: <Sofa className="w-6 h-6" />,
      items: ["Sofas", "Coffee Tables", "TV Units", "Bookshelves"],
      image:
        "https://images.unsplash.com/photo-1618220179428-22790b461013?w=400&h=300&fit=crop",
    },
    {
      name: "Dining Room Furniture",
      icon: <Table className="w-6 h-6" />,
      items: ["Dining Tables", "Chairs", "Sideboards", "Cabinets"],
      image:
        "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=400&h=300&fit=crop",
    },
    {
      name: "Bedroom Furniture",
      icon: <Bed className="w-6 h-6" />,
      items: ["Beds", "Wardrobes", "Dressers", "Nightstands"],
      image:
        "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=400&h=300&fit=crop",
    },
    {
      name: "Bathroom Vanities",
      icon: <Bath className="w-6 h-6" />,
      items: ["Vanities", "Mirrors", "Cabinets", "Storage Units"],
      image:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop",
    },
    {
      name: "Window Treatments",
      icon: <VenetianMask className="w-6 h-6" />,
      items: ["Curtains", "Blinds", "Drapes", "Shutters"],
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
    },
    {
      name: "Doors & Hardware",
      icon: <DoorOpen className="w-6 h-6" />,
      items: ["Interior Doors", "Hardware", "Handles", "Hinges"],
      image:
        "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400&h=300&fit=crop",
    },
  ];

  // Factory Gallery - Interior Design Focused Images
  const factoryImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&h=600&fit=crop",
      title: "Premium Sofa Collection",
      category: "Living Room",
      icon: <Sofa className="w-4 h-4" />,
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&h=600&fit=crop",
      title: "Custom Dining Tables",
      category: "Dining Room",
      icon: <Table className="w-4 h-4" />,
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&h=600&fit=crop",
      title: "Luxury Bedroom Furniture",
      category: "Bedroom",
      icon: <Bed className="w-4 h-4" />,
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop",
      title: "Bathroom Vanity Units",
      category: "Bathroom",
      icon: <Bath className="w-4 h-4" />,
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      title: "Premium Curtains & Blinds",
      category: "Window Treatments",
      icon: <VenetianMask className="w-4 h-4" />,
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&h=600&fit=crop",
      title: "Interior Doors & Hardware",
      category: "Hardware",
      icon: <DoorOpen className="w-4 h-4" />,
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=800&h=600&fit=crop",
      title: "High-End Kitchen Cabinets",
      category: "Kitchen",
      icon: <Home className="w-4 h-4" />,
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&h=600&fit=crop",
      title: "Modern Wardrobes",
      category: "Storage",
      icon: <Home className="w-4 h-4" />,
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      title: "Luxury Living Room Sets",
      category: "Living Room",
      icon: <Armchair className="w-4 h-4" />,
    },
  ];

  // Quality Certifications
  const certifications = [
    {
      name: "ISO 9001:2015",
      icon: <Award className="w-6 h-6" />,
      description: "Quality Management System",
    },
    {
      name: "FSC Certified Wood",
      icon: <TreeDeciduous className="w-6 h-6" />,
      description: "Sustainable Forestry",
    },
    {
      name: "OHSAS 18001",
      icon: <HardHat className="w-6 h-6" />,
      description: "Occupational Health & Safety",
    },
    {
      name: "BIS Certified",
      icon: <Award className="w-6 h-6" />,
      description: "Bureau of Indian Standards",
    },
  ];

  // Hardware & Materials Used
  const materials = [
    {
      name: "Premium Hardwood",
      icon: <TreeDeciduous className="w-6 h-6" />,
      description: "Teak, Oak, and Engineered Wood",
      use: "Furniture Frames, Cabinets",
    },
    {
      name: "High-Quality Fabric",
      icon: <VenetianMask className="w-6 h-6" />,
      description: "Linen, Velvet, and Leather",
      use: "Sofas, Chairs, Upholstery",
    },
    {
      name: "Hardware & Fittings",
      icon: <Settings className="w-6 h-6" />,
      description: "Premium Handles, Hinges, Rails",
      use: "Doors, Drawers, Cabinets",
    },
    {
      name: "Finishes & Coatings",
      icon: <PaintRoller className="w-6 h-6" />,
      description: "PU, Melamine, and Wood Polish",
      use: "Furniture Finishing",
    },
  ];

  // Scroll to section
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
       <SEO />
      <StructuredData />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50">
        {/* Hero Section */}
        <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-48 sm:w-56 md:w-72 h-48 sm:h-56 md:h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-40 right-10 w-48 sm:w-56 md:w-72 h-48 sm:h-56 md:h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-20 left-1/2 w-48 sm:w-56 md:w-72 h-48 sm:h-56 md:h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-[40%_56%] gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left">

                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-orange-50 rounded-full px-3 sm:px-5 py-1.5 sm:py-2 mb-4 sm:mb-6 shadow-md border border-orange-100">
                  <Factory className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500" />
                  <span className="text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wide">
                    Premium Furniture Manufacturing
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Crafting
                  <br />
                  <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                    Exquisite Interiors
                  </span>
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8">
                  From premium hardwoods to luxurious fabrics, our
                  state-of-the-art facility creates furniture that transforms
                  spaces into masterpieces.
                </p>
                <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
                  <button
                    onClick={() => scrollToSection(sectionRefs.overview)}
                    className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/30 hover:scale-105 text-sm sm:text-base"
                  >
                    Explore Collection
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={() => scrollToSection(sectionRefs.contact)}
                    className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-700 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 border-2 border-gray-200 hover:border-orange-500 text-sm sm:text-base"
                  >
                    Custom Order
                  </button>
                </div>
              </div>

              {/* Right YouTube Video - Updated with better audio controls */}
              <div className="relative group">
                <div
                  ref={videoContainerRef}
                  className="relative rounded-2xl overflow-hidden shadow-2xl bg-black"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  {/* YouTube Video */}
                  <div className="relative w-full rounded-xl" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      ref={iframeRef}
                      src={embedUrl}
                      className="absolute top-0 left-0 w-full h-full rounded-xl border-[10px] border-gray-200"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="Furniture Making Workshop"
                      style={{ pointerEvents: 'none' }}
                    />
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute rounded-xl inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Main Play/Pause Button - Center */}
                  <button
                    onClick={togglePlay}
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 bg-orange-500/90 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-2xl z-10 ${isHovering || showControls ? 'opacity-100' : 'opacity-80'
                      }`}
                  >
                    {isVideoPlaying ? (
                      <Pause className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    ) : (
                      <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-1" />
                    )}
                  </button>

                  {/* Controls - Bottom Row - Always visible on mobile, visible on hover on desktop */}
                  <div className={`absolute bottom-4 left-4 right-4 flex items-center justify-between z-10 transition-opacity duration-300 ${isHovering || showControls ? 'opacity-100' : 'opacity-0 sm:opacity-0'
                    }`}>
                    {/* Left Controls */}
                    <div className="flex items-center gap-2">
                      {/* Mute/Unmute Button - This will actually work now */}
                      <button
                        onClick={toggleMute}
                        className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors backdrop-blur-sm"
                        aria-label={isMuted ? 'Unmute' : 'Mute'}
                      >
                        {isMuted ? (
                          <VolumeX className="w-4 h-4 sm:w-5 sm:h-5" />
                        ) : (
                          <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" />
                        )}
                      </button>

                      {/* Volume Status */}
                      <span className="text-white/80 text-xs bg-black/50 px-2 py-1 rounded backdrop-blur-sm">
                        {isMuted ? '🔇 Muted' : '🔊 Unmuted'}
                      </span>

                      {/* Hint to click to unmute */}
                      {isMuted && (
                        <span className="text-white/60 text-[10px] bg-black/50 px-2 py-1 rounded backdrop-blur-sm hidden sm:block animate-pulse">
                          Click 🔊 to unmute
                        </span>
                      )}
                    </div>

                    {/* Right Controls */}
                    <div className="flex items-center gap-2">
                      {/* Play/Pause Status */}
                      <span className="text-white/80 text-xs bg-black/50 px-2 py-1 rounded backdrop-blur-sm">
                        {isVideoPlaying ? '▶ Playing' : '⏸ Paused'}
                      </span>

                      {/* Fullscreen Button */}
                      <button
                        onClick={toggleFullscreen}
                        className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors backdrop-blur-sm"
                        aria-label={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
                      >
                        {isFullscreen ? (
                          <Minimize2 className="w-4 h-4 sm:w-5 sm:h-5" />
                        ) : (
                          <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Always visible controls indicator */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
                    <div className="w-1 h-1 rounded-full bg-white/30" />
                    <div className="w-1 h-1 rounded-full bg-white/30" />
                    <div className="w-1 h-1 rounded-full bg-white/30" />
                  </div>

                  {/* Unmute hint overlay - Shows when video is muted */}
                  {isMuted && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 animate-pulse">
                        <VolumeX className="w-5 h-5" />
                        Click 🔊 to unmute
                      </div>
                    </div>
                  )}
                </div>

                {/* Mobile Touch Controls Hint */}
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full z-10 sm:hidden">
                  Tap to control
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rest of your sections remain the same... */}
        {/* Statistics Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 mb-8 sm:mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {statistics.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl shadow-lg p-4 sm:p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${stat.color} mx-auto flex items-center justify-center text-white mb-3`}
                >
                  {stat.icon}
                </div>
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-2 sm:p-3 border border-gray-100 overflow-x-auto">
            <div className="flex gap-1 sm:gap-2 min-w-max">
              {[
                { id: "overview", label: "Overview" },
                { id: "process", label: "Process" },
                { id: "products", label: "Products" },
                { id: "quality", label: "Quality" },
                { id: "gallery", label: "Gallery" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    scrollToSection(sectionRefs[tab.id] || sectionRefs.overview);
                  }}
                  className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${activeTab === tab.id
                    ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/30"
                    : "text-gray-600 hover:bg-gray-100"
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section
          ref={sectionRefs.overview}
          className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-6 sm:p-8 md:p-12 border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Premium Furniture
                  <br />
                  <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                    Manufacturing Facility
                  </span>
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                  Our state-of-the-art facility specializes in crafting high-end
                  furniture and interior solutions. From premium hardwoods to
                  luxurious fabrics, every piece is meticulously crafted by
                  skilled artisans using cutting-edge technology.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-4 border border-orange-100">
                    <div className="flex items-center gap-2 mb-2">
                      <TreeDeciduous className="w-5 h-5 text-orange-500" />
                      <span className="font-semibold text-gray-800 text-sm">
                        Materials
                      </span>
                    </div>
                    <p className="text-xs text-gray-600">
                      Premium Hardwoods & Fabrics
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-100">
                    <div className="flex items-center gap-2 mb-2">
                      <Cpu className="w-5 h-5 text-blue-500" />
                      <span className="font-semibold text-gray-800 text-sm">
                        Technology
                      </span>
                    </div>
                    <p className="text-xs text-gray-600">
                      CNC & Modern Machinery
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-5 h-5 text-green-500" />
                      <span className="font-semibold text-gray-800 text-sm">
                        Expertise
                      </span>
                    </div>
                    <p className="text-xs text-gray-600">Master Craftsmen</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-100">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-5 h-5 text-purple-500" />
                      <span className="font-semibold text-gray-800 text-sm">
                        Quality
                      </span>
                    </div>
                    <p className="text-xs text-gray-600">
                      ISO Certified Excellence
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1618220179428-22790b461013?w=400&h=300&fit=crop"
                  alt="Premium Sofa"
                  className="rounded-xl object-cover w-full h-24 sm:h-28 lg:h-32"
                />
                <img
                  src="https://images.unsplash.com/photo-1617806118233-18e1de247200?w=400&h=300&fit=crop"
                  alt="Dining Table"
                  className="rounded-xl object-cover w-full h-24 sm:h-28 lg:h-32"
                />
                <img
                  src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=400&h=300&fit=crop"
                  alt="Bedroom Set"
                  className="rounded-xl object-cover w-full h-48 sm:h-56 lg:h-64 col-span-2"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Manufacturing Process */}
        <section
          ref={sectionRefs.process}
          className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16"
        >
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Furniture Making
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              From raw wood to finished masterpiece, every step is executed with
              precision and passion
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className={`${step.color} border rounded-2xl p-3 md:p-6 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`${step.iconColor} p-3 bg-white rounded-xl shadow-md`}
                  >
                    {step.icon}
                  </div>
                  <span className="text-3xl font-bold text-gray-300">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Product Categories */}
        <section
          ref={sectionRefs.products}
          className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-6 sm:p-8 md:p-12 border border-gray-100">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-orange-50 rounded-full px-3 sm:px-5 py-1.5 sm:py-2 mb-4 shadow-md border border-orange-100">
                <Sofa className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500" />
                <span className="text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wide">
                  Our Collections
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Premium Furniture
                <br />
                <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                  Collections
                </span>
              </h2>
              <p className="text-sm sm:text-base text-gray-600">
                Exquisitely crafted furniture for every room in your home
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {productCategories.map((category, idx) => (
                <div
                  key={idx}
                  className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 text-white">
                      <div className="flex items-center gap-2">
                        <span className="text-orange-400">{category.icon}</span>
                        <span className="font-bold text-sm">{category.name}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex flex-wrap gap-1">
                      {category.items.map((item, i) => (
                        <span
                          key={i}
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Materials Used */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-6 sm:p-8 md:p-12 border border-gray-100">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Premium Materials
                <br />
                <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                  & Hardware
                </span>
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                We source only the finest materials and hardware to ensure your
                furniture stands the test of time with elegance and durability.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {materials.map((material, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 border border-gray-200"
                  >
                    <div className="flex justify-between">
                      <div className="text-orange-500 mb-2">{material.icon}</div>
                      <h4 className="font-semibold text-gray-800 text-sm">
                        {material.name}
                      </h4>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">
                      {material.description}
                    </p>
                    <p className="text-xs text-orange-600 mt-1 font-medium">
                      {material.use}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop"
                alt="Premium Fabrics"
                className="rounded-2xl object-cover w-full h-48 sm:h-56"
              />
              <img
                src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400&h=300&fit=crop"
                alt="Hardware"
                className="rounded-2xl object-cover w-full h-48 sm:h-56 mt-4 sm:mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=400&h=300&fit=crop"
                alt="Wood Finishing"
                className="rounded-2xl object-cover w-full h-48 sm:h-56 lg:h-64 col-span-2"
              />
            </div>
          </div>
        </section>

        {/* Quality Section */}
        <section
          ref={sectionRefs.quality}
          className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-6 sm:p-8 md:p-12 border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Quality Assurance
                  <br />
                  <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                    & Certifications
                  </span>
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                  Every furniture piece undergoes rigorous quality checks to
                  ensure it meets our exacting standards of excellence.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {certifications.map((cert, idx) => (
                    <div
                      key={idx}
                      className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 text-center border border-gray-200"
                    >
                      <div className="text-orange-500 mb-2 flex justify-center">
                        {cert.icon}
                      </div>
                      <h4 className="font-semibold text-gray-800 text-sm">
                        {cert.name}
                      </h4>
                      <p className="text-xs text-gray-600">{cert.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1618220179428-22790b461013?w=400&h=300&fit=crop"
                  alt="Quality Check"
                  className="rounded-xl object-cover w-full h-24 sm:h-28 lg:h-32"
                />
                <img
                  src="https://images.unsplash.com/photo-1617806118233-18e1de247200?w=400&h=300&fit=crop"
                  alt="Finishing"
                  className="rounded-xl object-cover w-full h-24 sm:h-28 lg:h-32"
                />
                <img
                  src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=400&h=300&fit=crop"
                  alt="Inspection"
                  className="rounded-2xl object-cover w-full h-48 sm:h-56 lg:h-64 col-span-2"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section
          ref={sectionRefs.gallery}
          className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16"
        >
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Furniture
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                Gallery
              </span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Explore our exquisite collection of handcrafted furniture pieces
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {factoryImages.map((image) => (
              <div
                key={image.id}
                className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-56 sm:h-64 md:h-72">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-sm sm:text-base font-bold">
                      {image.title}
                    </h3>
                    <p className="text-xs text-white/80 flex items-center gap-1">
                      {image.icon}
                      {image.category}
                    </p>
                  </div>
                  <div className="absolute top-3 right-3 bg-orange-500/80 backdrop-blur-sm px-2 py-1 rounded-full text-white text-xs font-medium flex items-center gap-1">
                    {image.icon}
                    {image.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section
          ref={sectionRefs.contact}
          className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16"
        >
          <div className="relative rounded-3xl overflow-hidden group">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1618220179428-22790b461013?w=1600&h=600&fit=crop"
                alt="Furniture Workshop"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/70 to-black/60"></div>
            </div>

            <div className="relative z-10 text-center py-12 sm:py-16 md:py-20 px-4 sm:px-6">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                <span className="text-white">Custom Furniture</span>
                <br />
                <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  Made to Order
                </span>
              </h3>
              <p className="text-white/90 mb-6 sm:mb-8 text-sm sm:text-base max-w-2xl mx-auto">
                From concept to creation, we bring your furniture dreams to life
                with premium materials and expert craftsmanship.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => {
                    window.location.href = "tel:+919010989991";
                  }}
                  className="group/btn relative inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/30 hover:scale-105 overflow-hidden text-sm sm:text-base"
                >
                  <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  <span className="relative z-10">Get a Quote</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                </button>
                <button className="group/btn relative inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold transition-all duration-300 hover:bg-white/20 hover:scale-105 border border-white/20 text-sm sm:text-base">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Visit Showroom</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(20px, -30px) scale(1.05); }
          66% { transform: translate(-15px, 15px) scale(0.95); }
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

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
      </div>
    </>
  );
};

export default ModularFactory;