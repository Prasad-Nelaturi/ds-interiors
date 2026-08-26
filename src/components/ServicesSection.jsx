import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Home,
  Building,
  Palette,
  Crown,
  Ruler,
  Sparkles,
  Layers,
  DraftingCompass,
  TreeDeciduous,
  Cctv,
  VenetianMask,
  Radio,
  Check,
  ChevronRight,
  ArrowRight,
  Plus,
  Minus,
} from "lucide-react";

const ServicesSection = ({
  servicesRef,
  contactRef,
  scrollToSection = () => { },
}) => {
  const [showAll, setShowAll] = useState(false);
  const servicesList = [
    {
      name: "Interior Design",
      icon: <Layers className="w-5 h-5 sm:w-6 sm:h-6" />,
      description: "Complete interior solutions on turnkey & consultant basis",
      category: "DESIGN",
      image: "/images/services_section/service_interior_design.jpg",
      alt: "Elegant living room with grey upholstered armchairs, a round glass coffee table with a floral centerpiece, sheer curtains, and a white staircase with under-stair storage shelving in the background.",
      features: ["Custom Layouts", "3D Visualizations", "Material Selection"],
      path: "/services/interior-design",
    },
    {
      name: "Home Plans & Elevations",
      icon: <DraftingCompass className="w-5 h-5 sm:w-6 sm:h-6" />,
      description: "Detailed floor plans & architectural elevations",
      category: "ARCHITECTURE",
      image: "/images/services_section/service_home_plans_elevations.png",
      alt: "Infographic titled 'Home Plans & Elevations' showing a two-story modern house exterior, ground and first floor plans labeled with room dimensions (bedrooms, kitchen, living, dining, lounge, balcony), four elevation views (front, left, rear, right), and icons highlighting smart layout, natural light, modern design, and quality construction.",
      features: ["Floor Plans", "Elevations", "Structural Design"],
      path: "/services/home-plans",
    },
    {
      name: "3D Views & Visualization",
      icon: <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />,
      description: "Realistic 3D renderings of your dream space",
      category: "TECHNOLOGY",
      image: "/images/services_section/service_3D_views_visualization.avif",
      alt: "Split image showing a hand-drawn architectural sketch with measurements on the left transitioning into a fully rendered 3D visualization of a modern villa with a pool, palm trees, and red outdoor furniture on the right.",
      features: ["3D Renderings", "Virtual Tours", "Material Previews"],
      path: "/services/3d-visualization",
    },
    {
      name: "Landscaping",
      icon: <TreeDeciduous className="w-5 h-5 sm:w-6 sm:h-6" />,
      description: "Beautiful outdoor spaces & garden designs",
      category: "OUTDOOR",
      image: "/images/services_section/service_landscaping.jpg",
      alt: "Front yard of a house with a curving flagstone pathway lined with colorful flower beds, manicured lawn, path lighting, and a bright orange front door.",
      features: ["Garden Design", "Outdoor Lighting", "Irrigation Systems"],
      path: "/services/landscaping",
    },
    {
      name: "Home Automation",
      icon: <Cctv className="w-5 h-5 sm:w-6 sm:h-6" />,
      description: "Smart home solutions for modern living",
      category: "TECHNOLOGY",
      image: "/images/services_section/service_home_automation.jpg",
      alt: "Illuminated modern house with a pool at dusk, overlaid with icons for smart home features including heating, lighting, hot water, camera, motion sensor, temperature, and plug controls, plus a smartphone showing a home automation app.",
      features: ["Smart Lighting", "Security Systems", "Voice Control"],
      path: "/services/home-automation",
    },
    {
      name: "Curtains & Blinds",
      icon: <VenetianMask className="w-5 h-5 sm:w-6 sm:h-6" />,
      description: "Premium window treatments & furnishings",
      category: "FURNISHINGS",
      image: "/images/services_section/service_curtains_blinds.jpg",
      alt: "Luxurious living room with floor-to-ceiling beige and sheer drapery, a green accent armchair, tufted cream sofas, and a decorative mirrored console table with candles and vases.",
      features: ["Custom Curtains", "Motorized Blinds", "Fabric Selection"],
      path: "/services/curtains-blinds",
    },
    {
      name: "Chimneys & Hobs",
      icon: <Radio className="w-5 h-5 sm:w-6 sm:h-6" />,
      description: "Modern kitchen ventilation & cooking solutions",
      category: "KITCHEN",
      image: "/images/services_section/service_chimneys_hobs.avif",
      alt: "Woman giving a thumbs-up while cooking at a gas hob in a modern kitchen, with steam rising into a black chimney hood, built-in oven and microwave, marble backsplash, and pendant lights overhead.",
      features: [
        "Chimney Installation",
        "Hob Selection",
        "Kitchen Ventilation",
      ],
      path: "/services/chimneys-hobs",
    },
    {
      name: "Residential Interiors",
      icon: <Home className="w-5 h-5 sm:w-6 sm:h-6" />,
      description: "Complete home interiors on turnkey basis",
      category: "POPULAR",
      image: "/images/services_section/service_residential_interiors.jpg",
      alt: "Moody navy-blue living room with built-in display shelving, colorful abstract wall art, a burnt-orange sofa, mustard and grey accent chairs, and round dark blue ottomans on a patterned rug.",
      features: [
        "Full Home Design",
        "Furniture Selection",
        "Project Management",
      ],
      path: "/services/residential",
    },
    {
      name: "Commercial Interiors",
      icon: <Building className="w-5 h-5 sm:w-6 sm:h-6" />,
      description: "Office spaces, retail & commercial interiors",
      category: "BUSINESS",
      image: "/images/services_section/service_commercial_interiors.jpg",
      alt: "Contemporary restaurant interior with beige booth seating, white dome pendant lights, a curved feature wall with illuminated circular light fixtures, and floor-to-ceiling windows overlooking city buildings.",
      features: ["Office Planning", "Retail Design", "Brand Integration"],
      path: "/services/commercial",
    },
    {
      name: "Interior Styling & Decor",
      icon: <Palette className="w-5 h-5 sm:w-6 sm:h-6" />,
      description: "Curated furniture & decor solutions",
      category: "STYLING",
      image: "/images/services_section/service_interior_styling_decor.png",
      alt: "Warm, textured living room with a grey sectional sofa, wooden sculptural side tables, a woven pendant lamp, carved wood wall panel, potted plants, and a view into a lush garden through glass doors.",
      features: ["Furniture Curation", "Art Selection", "Accessories"],
      path: "/services/styling",
    },
    {
      name: "Luxury Villa Design",
      icon: <Crown className="w-5 h-5 sm:w-6 sm:h-6" />,
      description: "Premium villa interiors with exquisite finishes",
      category: "PREMIUM",
      image: "/images/services_section/service_luxury_villa_design.jpg",
      alt: "Illustrated rendering of a modern two-story villa with orange and white facades, glass walls, and wraparound balconies, surrounded by tropical palm trees and rocks beside an infinity pool.",
      features: ["Luxury Finishes", "Smart Home", "Landscape Design"],
      path: "/services/luxury-villas",
    },
    {
      name: "Space Planning",
      icon: <Ruler className="w-5 h-5 sm:w-6 sm:h-6" />,
      description: "Optimized layouts for maximum functionality",
      category: "PLANNING",
      image: "/images/services_section/service_space_planning.jpg",
      alt: "Open-plan living and dining space with modular white sofas, a leather Barcelona-style lounge chair, wooden coffee table, and floor-to-ceiling glass doors opening onto an outdoor patio with plants.",
      features: ["Floor Planning", "Traffic Flow", "Zoning Strategy"],
      path: "/services/space-planning",
    },
  ];
  // Function to handle scroll to contact section
  const handleScrollToContact = () => {
    if (contactRef && contactRef.current) {
      contactRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    } else {
      window.location.href = '/contact';
    }
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  // Get only first 6 services initially
  const displayedServices = showAll ? servicesList : servicesList.slice(0, 6);

  // Color mapping for different categories
  const getCategoryColors = (category) => {
    const colors = {
      DESIGN: {
        bg: "bg-amber-50",
        text: "text-amber-600",
        border: "border-amber-200",
      },
      ARCHITECTURE: {
        bg: "bg-blue-50",
        text: "text-blue-600",
        border: "border-blue-200",
      },
      TECHNOLOGY: {
        bg: "bg-purple-50",
        text: "text-purple-600",
        border: "border-purple-200",
      },
      OUTDOOR: {
        bg: "bg-emerald-50",
        text: "text-emerald-600",
        border: "border-emerald-200",
      },
      FURNISHINGS: {
        bg: "bg-pink-50",
        text: "text-pink-600",
        border: "border-pink-200",
      },
      KITCHEN: {
        bg: "bg-red-50",
        text: "text-red-600",
        border: "border-red-200",
      },
      POPULAR: {
        bg: "bg-orange-50",
        text: "text-orange-600",
        border: "border-orange-200",
      },
      BUSINESS: {
        bg: "bg-indigo-50",
        text: "text-indigo-600",
        border: "border-indigo-200",
      },
      STYLING: {
        bg: "bg-rose-50",
        text: "text-rose-600",
        border: "border-rose-200",
      },
      PREMIUM: {
        bg: "bg-yellow-50",
        text: "text-yellow-600",
        border: "border-yellow-200",
      },
      PLANNING: {
        bg: "bg-cyan-50",
        text: "text-cyan-600",
        border: "border-cyan-200",
      },
    };
    return colors[category] || colors["DESIGN"];
  };

  return (
    <section
      ref={servicesRef}
      className="container mx-auto py-8 sm:py-10 md:py-12 bg-gradient-to-br from-slate-50 via-white to-orange-50 relative overflow-hidden"
    >
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-48 sm:w-56 md:w-72 h-48 sm:h-56 md:h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-48 sm:w-56 md:w-72 h-48 sm:h-56 md:h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-48 sm:w-56 md:w-72 h-48 sm:h-56 md:h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-orange-50 rounded-full px-3 sm:px-5 py-1.5 sm:py-2 mb-4 sm:mb-6 shadow-md border border-orange-100">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500" />
            <span className="text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wide">
              What We Do
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">
            Our Premium{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Delivering exceptional quality with innovative solutions tailored to
            your needs
          </p>
        </div>

        {/* Services Grid - Fixed 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayedServices.map((service, idx) => {
            const colors = getCategoryColors(service.category);
            return (
              <div
                key={idx}
                className="group relative animate-fade-in-up h-full"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="relative bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                  {/* Image Section - Fixed height */}
                  <div className="relative h-48 sm:h-56 md:h-64 flex-shrink-0 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent"></div>

                    {/* Icon */}
                    <div
                      className={`absolute bottom-3 sm:bottom-4 left-3 sm:left-4 w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${colors.bg} flex items-center justify-center shadow-lg backdrop-blur-sm border border-white/30`}
                    >
                      <div className={colors.text}>{service.icon}</div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 px-2 py-0.5 sm:px-3 sm:py-1 bg-white backdrop-blur-sm rounded-full text-[10px] sm:text-xs font-semibold text-gray-700 shadow-2xl">
                      {service.category}
                    </div>
                  </div>

                  {/* Content - Flexible height */}
                  <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-orange-600 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6 flex-1">
                      {service.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-xs sm:text-sm text-gray-600"
                        >
                          <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Learn More Button - Now using Link */}
                    <div className="border-t border-gray-100 pt-3 sm:pt-4 mt-auto">
                      <Link
                        to={service.path}
                        className="w-full flex items-center justify-between text-orange-600 font-semibold group/btn hover:text-orange-700 transition-colors text-xs sm:text-sm"
                      >
                        <span>Learn More</span>
                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Show More / Show Less Button */}
        {servicesList.length > 6 && (
          <div className="text-center mt-10 sm:mt-12">
            <button
              onClick={toggleShowAll}
              className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/30 hover:scale-105 text-sm sm:text-base"
            >
              <span>{showAll ? "Show Less" : "Show More Services"}</span>
              {showAll ? (
                <Minus className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:rotate-90" />
              ) : (
                <Plus className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:rotate-90" />
              )}
            </button>
            {!showAll && (
              <p className="text-gray-500 text-xs sm:text-sm mt-3">
                Showing 6 of {servicesList.length} services
              </p>
            )}
          </div>
        )}

        {/* CTA Section */}
        <div className="relative mt-16 sm:mt-20 md:mt-24 rounded-2xl sm:rounded-3xl overflow-hidden group">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&h=600&fit=crop"
              alt="interior"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/60 to-black/40"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/40"></div>
          </div>

          <div className="relative z-10 text-center py-10 sm:py-14 md:py-16 px-4 sm:px-6">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              <span className="text-white">Ready to Start</span>
              <br className="sm:hidden" />
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                Your Project?
              </span>
            </h3>
            <p className="text-white/90 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              <span className="relative inline-block">
                <span className="absolute -inset-1 bg-amber-400/10 blur-sm rounded-full"></span>
                <span className="relative">
                  Get a free consultation with our expert team
                </span>
              </span>
              <br />
              <span className="text-amber-300/90 font-medium">
                and bring your vision to life
              </span>
            </p>

            {/* FIXED: Start Your Project Button */}
            <button
              onClick={handleScrollToContact}
              className="group/btn relative inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/30 hover:scale-105 overflow-hidden text-sm sm:text-base"
            >
              <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              <span className="relative z-10">Start Your Project</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-orange-400/20 blur-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(20px, -30px) scale(1.05); }
          66% { transform: translate(-15px, 15px) scale(0.95); }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
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
          animation: fade-in-up 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;