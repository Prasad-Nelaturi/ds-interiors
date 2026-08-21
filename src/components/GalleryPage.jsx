import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  X,
  Search,
  Filter,
  Grid,
  LayoutGrid,
  Image as ImageIcon,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  Heart,
  Share2,
  Download,
  Calendar,
  MapPin,
  Layers,
  Home,
  Building,
  Palette,
  Crown,
  Ruler,
} from "lucide-react";

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState("grid"); // grid or masonry
  const [searchTerm, setSearchTerm] = useState("");
  const [likedImages, setLikedImages] = useState([]);

  // Gallery Data
  const galleryData = [
    // Living Room
    {
      id: 1,
      title: "Modern Living Room",
      category: "Living Room",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      description:
        "Contemporary living room with premium finishes and natural lighting",
      date: "2024-12-15",
      location: "Hyderabad",
      tags: ["Modern", "Luxury", "Natural Light"],
      featured: true,
    },
    {
      id: 2,
      title: "Minimalist Living Space",
      category: "Living Room",
      image:
        "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&h=600&fit=crop",
      description: "Clean lines and neutral tones create a serene atmosphere",
      date: "2024-11-20",
      location: "Hyderabad",
      tags: ["Minimalist", "Contemporary", "Neutral"],
      featured: false,
    },
    {
      id: 3,
      title: "Luxury Villa Living Room",
      category: "Living Room",
      image:
        "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=800&h=600&fit=crop",
      description: "Elegant living space with high-end furniture and decor",
      date: "2024-10-10",
      location: "Hyderabad",
      tags: ["Luxury", "Villa", "Elegant"],
      featured: true,
    },

    // Kitchen
    {
      id: 4,
      title: "Modern Modular Kitchen",
      category: "Kitchen",
      image:
        "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&h=600&fit=crop",
      description: "State-of-the-art modular kitchen with premium appliances",
      date: "2024-12-01",
      location: "Hyderabad",
      tags: ["Modular", "Modern", "Smart"],
      featured: false,
    },
    {
      id: 5,
      title: "Luxury Kitchen Design",
      category: "Kitchen",
      image:
        "https://images.unsplash.com/photo-1588854337115-1c67d9247e4d?w=800&h=600&fit=crop",
      description:
        "High-end kitchen with marble countertops and custom cabinetry",
      date: "2024-11-05",
      location: "Hyderabad",
      tags: ["Luxury", "Marble", "Custom"],
      featured: true,
    },
    {
      id: 6,
      title: "Contemporary Kitchen",
      category: "Kitchen",
      image:
        "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800&h=600&fit=crop",
      description: "Modern kitchen with island and smart storage solutions",
      date: "2024-10-25",
      location: "Hyderabad",
      tags: ["Contemporary", "Island", "Smart Storage"],
      featured: false,
    },

    // Bedroom
    {
      id: 7,
      title: "Master Bedroom Suite",
      category: "Bedroom",
      image:
        "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&h=600&fit=crop",
      description: "Spacious master bedroom with walk-in closet and ensuite",
      date: "2024-11-15",
      location: "Hyderabad",
      tags: ["Master", "Spacious", "Luxury"],
      featured: true,
    },
    {
      id: 8,
      title: "Minimalist Bedroom",
      category: "Bedroom",
      image:
        "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=800&h=600&fit=crop",
      description: "Peaceful bedroom with minimalist design and soft tones",
      date: "2024-10-30",
      location: "Hyderabad",
      tags: ["Minimalist", "Peaceful", "Soft Tones"],
      featured: false,
    },
    {
      id: 9,
      title: "Kids Bedroom Design",
      category: "Bedroom",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop",
      description: "Fun and functional kids bedroom with playful elements",
      date: "2024-10-15",
      location: "Hyderabad",
      tags: ["Kids", "Playful", "Functional"],
      featured: false,
    },

    // Bathroom
    {
      id: 10,
      title: "Luxury Bathroom",
      category: "Bathroom",
      image:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop",
      description: "Spa-inspired bathroom with premium fixtures and finishes",
      date: "2024-12-05",
      location: "Hyderabad",
      tags: ["Luxury", "Spa", "Premium"],
      featured: true,
    },
    {
      id: 11,
      title: "Modern Bathroom Design",
      category: "Bathroom",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTuQLbydXmXCST65Q40CddILjy9FZQBWhOuYxKnJOP0SJfulT3JjZKAwQ&s=10",
      description:
        "Contemporary bathroom with glass shower and floating vanity",
      date: "2024-11-10",
      location: "Hyderabad",
      tags: ["Modern", "Glass", "Contemporary"],
      featured: false,
    },

    // Office
    {
      id: 12,
      title: "Modern Home Office",
      category: "Office",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      description:
        "Ergonomic home office with natural light and modern furniture",
      date: "2024-12-10",
      location: "Hyderabad",
      tags: ["Home Office", "Ergonomic", "Modern"],
      featured: false,
    },
    {
      id: 13,
      title: "Corporate Office Interior",
      category: "Office",
      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop",
      description: "Professional office space with collaborative work areas",
      date: "2024-11-25",
      location: "Hyderabad",
      tags: ["Corporate", "Collaborative", "Professional"],
      featured: false,
    },

    // Commercial
    {
      id: 14,
      title: "Retail Store Design",
      category: "Commercial",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      description: "Modern retail space with strategic lighting and display",
      date: "2024-12-18",
      location: "Hyderabad",
      tags: ["Retail", "Commercial", "Lighting"],
      featured: true,
    },
    {
      id: 15,
      title: "Restaurant Interior",
      category: "Commercial",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
      description:
        "Elegant restaurant with warm ambiance and premium furnishings",
      date: "2024-12-20",
      location: "Hyderabad",
      tags: ["Restaurant", "Elegant", "Warm"],
      featured: false,
    },

    // Outdoor
    {
      id: 16,
      title: "Landscape Garden Design",
      category: "Outdoor",
      image:
        "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&h=600&fit=crop",
      description: "Beautiful garden with native plants and water features",
      date: "2024-12-08",
      location: "Hyderabad",
      tags: ["Garden", "Landscape", "Water Features"],
      featured: true,
    },
    {
      id: 17,
      title: "Outdoor Living Space",
      category: "Outdoor",
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
      description: "Premium outdoor patio with seating and outdoor kitchen",
      date: "2024-11-28",
      location: "Hyderabad",
      tags: ["Outdoor", "Patio", "Kitchen"],
      featured: false,
    },

    // Villa
    {
      id: 18,
      title: "Luxury Villa Exterior",
      category: "Villa",
      image:
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&h=600&fit=crop",
      description:
        "Stunning villa exterior with modern architecture and landscaping",
      date: "2024-12-22",
      location: "Hyderabad",
      tags: ["Villa", "Luxury", "Exterior"],
      featured: true,
    },
    {
      id: 19,
      title: "Villa Interior Design",
      category: "Villa",
      image:
        "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=800&h=600&fit=crop",
      description: "Premium villa interior with exquisite finishes and decor",
      date: "2024-12-19",
      location: "Hyderabad",
      tags: ["Villa", "Interior", "Premium"],
      featured: false,
    },

    // Decor
    {
      id: 20,
      title: "Interior Decor Styling",
      category: "Decor",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      description: "Curated decor pieces and styling for modern interiors",
      date: "2024-12-25",
      location: "Hyderabad",
      tags: ["Decor", "Styling", "Curated"],
      featured: false,
    },
  ];

  // Categories for filter
  const categories = [
    "All",
    "Living Room",
    "Kitchen",
    "Bedroom",
    "Bathroom",
    "Office",
    "Commercial",
    "Outdoor",
    "Villa",
    "Decor",
  ];

  // Filter images based on category and search
  const filteredImages = galleryData.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    return matchesCategory && matchesSearch;
  });

  // Get featured images
  const featuredImages = galleryData.filter((item) => item.featured);

  // Handle image click for lightbox
  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const navigateLightbox = (direction) => {
    const newIndex = currentIndex + direction;
    if (newIndex >= 0 && newIndex < filteredImages.length) {
      setCurrentIndex(newIndex);
      setSelectedImage(filteredImages[newIndex]);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage) {
        if (e.key === "ArrowRight") navigateLightbox(1);
        if (e.key === "ArrowLeft") navigateLightbox(-1);
        if (e.key === "Escape") closeLightbox();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, currentIndex]);

  // Toggle like
  const toggleLike = (id) => {
    setLikedImages((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  // Get category icon
  const getCategoryIcon = (category) => {
    const icons = {
      "Living Room": <Home className="w-4 h-4" />,
      Kitchen: <Layers className="w-4 h-4" />,
      Bedroom: <Home className="w-4 h-4" />,
      Bathroom: <Ruler className="w-4 h-4" />,
      Office: <Building className="w-4 h-4" />,
      Commercial: <Building className="w-4 h-4" />,
      Outdoor: <Palette className="w-4 h-4" />,
      Villa: <Crown className="w-4 h-4" />,
      Decor: <Palette className="w-4 h-4" />,
    };
    return icons[category] || <ImageIcon className="w-4 h-4" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50">
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-48 sm:w-56 md:w-72 h-48 sm:h-56 md:h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-48 sm:w-56 md:w-72 h-48 sm:h-56 md:h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-48 sm:w-56 md:w-72 h-48 sm:h-56 md:h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-orange-50 rounded-full px-3 sm:px-5 py-1.5 sm:py-2 mb-4 sm:mb-6 shadow-md border border-orange-100">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500" />
              <span className="text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wide">
                Our Portfolio
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4">
              Design{" "}
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                Gallery
              </span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our curated collection of stunning interior design
              projects
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      {selectedCategory === "All" && !searchTerm && (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-4 sm:-mt-6 mb-8 sm:mb-12">
          <div className="mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Crown className="w-5 h-5 text-orange-500" />
              Featured Projects
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {featuredImages.slice(0, 4).map((item, idx) => {
              const filteredIndex = filteredImages.findIndex(
                (img) => img.id === item.id,
              );
              return (
                <div
                  key={item.id}
                  onClick={() => openLightbox(item, filteredIndex)}
                  className="group relative cursor-pointer overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="relative h-56 sm:h-64 md:h-72 lg:h-80">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform duration-500">
                        <ZoomIn className="w-6 h-6 text-orange-500" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-sm sm:text-base font-bold">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-white/80">
                        {item.category}
                      </p>
                    </div>
                    <div className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      Featured
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Gallery Controls */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-4 sm:p-6 border border-gray-100">
          {/* Search and View Controls */}
          <div className="flex flex-row gap-4 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects by name or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 sm:py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex gap-2 items-center">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-all duration-300 ${viewMode === "grid"
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
              >
                <Grid className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={() => setViewMode("masonry")}
                className={`p-2 rounded-lg transition-all duration-300 ${viewMode === "masonry"
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
              >
                <LayoutGrid className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          {/* Category Filter - Scrollable */}
          <div className="relative">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`flex-shrink-0 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${selectedCategory === category
                    ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/30"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 md:pb-24">
        {filteredImages.length === 0 ? (
          <div className="text-center py-12 sm:py-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 max-w-md mx-auto">
              <ImageIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                No results found
              </h3>
              <p className="text-gray-500 text-sm sm:text-base">
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm"
              >
                Reset Filters
              </button>
            </div>
          </div>
        ) : (
          <div
            className={`grid ${viewMode === "grid"
              ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-6"
              : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
              }`}
          >
            {filteredImages.map((item, index) => (
              <div
                key={item.id}
                onClick={() => openLightbox(item, index)}
                className="group relative cursor-pointer overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div
                  className={`relative ${viewMode === "masonry" && index % 3 === 0
                    ? "h-72 sm:h-80 lg:h-96"
                    : "h-56 sm:h-64 md:h-72"
                    }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Hover Actions */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openLightbox(item, index);
                      }}
                      className="bg-white/90 backdrop-blur-sm rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform duration-500 hover:bg-white"
                    >
                      <ZoomIn className="w-5 h-5 text-orange-500" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLike(item.id);
                      }}
                      className="bg-white/90 backdrop-blur-sm rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform duration-500 hover:bg-white"
                    >
                      <Heart
                        className={`w-5 h-5 ${likedImages.includes(item.id)
                          ? "fill-red-500 text-red-500"
                          : "text-orange-500"
                          }`}
                      />
                    </button>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-700">
                    {getCategoryIcon(item.category)}
                    <span>{item.category}</span>
                  </div>

                  {/* Like Count */}
                  <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full text-white text-xs flex items-center gap-1">
                    <Heart
                      className={`w-3 h-3 ${likedImages.includes(item.id)
                        ? "fill-red-500 text-red-500"
                        : ""
                        }`}
                    />
                    {likedImages.includes(item.id) ? "1" : "0"}
                  </div>

                  {/* Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-sm sm:text-base font-bold">
                      {item.title}
                    </h3>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {item.tags.slice(0, 2).map((tag, i) => (
                        <span
                          key={i}
                          className="text-[10px] sm:text-xs bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-3 mt-2 text-xs text-white/80">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(item.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {item.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Results Count */}
        {filteredImages.length > 0 && (
          <div className="text-center mt-6 sm:mt-8 text-sm text-gray-500">
            Showing {filteredImages.length} of {galleryData.length} projects
          </div>
        )}
      </section>

      {/* Lightbox Modal */}
      {/* Lightbox Modal - Text Below Image */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl transition-all duration-500 animate-fadeIn"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/60 hover:text-white hover:rotate-90 transition-all duration-300 z-20 bg-black/30 hover:bg-black/50 rounded-full p-2 backdrop-blur-sm"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox(-1);
            }}
            className={`absolute left-3 sm:left-6 text-white/60 hover:text-white transition-all duration-300 z-20 bg-black/30 hover:bg-black/50 rounded-full p-2 sm:p-3 backdrop-blur-sm ${currentIndex === 0
              ? "opacity-30 cursor-not-allowed"
              : "hover:scale-110"
              }`}
            disabled={currentIndex === 0}
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox(1);
            }}
            className={`absolute right-3 sm:right-6 text-white/60 hover:text-white transition-all duration-300 z-20 bg-black/30 hover:bg-black/50 rounded-full p-2 sm:p-3 backdrop-blur-sm ${currentIndex === filteredImages.length - 1
              ? "opacity-30 cursor-not-allowed"
              : "hover:scale-110"
              }`}
            disabled={currentIndex === filteredImages.length - 1}
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          {/* Main Content Container */}
          <div
            className="relative w-full max-w-5xl max-h-[90vh] flex flex-col animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Container - No overlay */}
            <div className="relative flex-1 flex items-center justify-center overflow-hidden rounded-t-2xl bg-black/30">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[65vh] object-contain"
                loading="lazy"
              />

              {/* Image Counter - Top Left */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-white/90 text-xs sm:text-sm font-medium border border-white/10">
                <span className="text-orange-400 font-bold">
                  {currentIndex + 1}
                </span>
                <span className="text-white/50 mx-1">/</span>
                <span>{filteredImages.length}</span>
              </div>
            </div>

            {/* Info Panel - Below Image */}
            <div className="bg-white/10 backdrop-blur-xl border-t border-white/10 rounded-b-2xl p-4 sm:p-6 md:p-8">
              <div className="max-w-4xl mx-auto w-full">
                {/* Title & Description */}
                <div className="mb-3">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">
                    {selectedImage.title}
                  </h3>
                  <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                    {selectedImage.description}
                  </p>
                </div>

                {/* Meta Info - Responsive Grid */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
                  <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/5 text-white/60 text-xs sm:text-sm">
                    <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-400" />
                    {new Date(selectedImage.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/5 text-white/60 text-xs sm:text-sm">
                    <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-400" />
                    {selectedImage.location}
                  </span>
                  <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/5 text-white/60 text-xs sm:text-sm">
                    {getCategoryIcon(selectedImage.category)}
                    <span>{selectedImage.category}</span>
                  </span>
                </div>

                {/* Tags & Actions - Flex wrap */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {selectedImage.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs bg-orange-500/20 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-orange-300 border border-orange-500/20"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => toggleLike(selectedImage.id)}
                      className={`group flex items-center gap-1.5 px-3 py-1.5 rounded-full backdrop-blur-sm transition-all duration-300 text-sm ${likedImages.includes(selectedImage.id)
                        ? "bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30"
                        : "bg-white/10 text-white/70 border border-white/10 hover:bg-white/20 hover:text-white"
                        }`}
                    >
                      <Heart
                        className={`w-4 h-4 transition-transform duration-300 ${likedImages.includes(selectedImage.id)
                          ? "fill-red-400 text-red-400 scale-110"
                          : "group-hover:scale-110"
                          }`}
                      />
                      <span className="hidden xs:inline">
                        {likedImages.includes(selectedImage.id)
                          ? "Liked"
                          : "Like"}
                      </span>
                    </button>

                    <button
                      onClick={() => {
                        if (navigator.share) {
                          navigator.share({
                            title: selectedImage.title,
                            text: `Check out this amazing design: ${selectedImage.title}`,
                            url: window.location.href,
                          });
                        }
                      }}
                      className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/70 border border-white/10 hover:bg-white/20 hover:text-white transition-all duration-300 text-sm"
                    >
                      <Share2 className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                      <span className="hidden xs:inline">Share</span>
                    </button>

                    <button
                      onClick={() => {
                        const link = document.createElement("a");
                        link.href = selectedImage.image;
                        link.download = `${selectedImage.title.replace(/\s+/g, "-").toLowerCase()}.jpg`;
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                      className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/70 border border-white/10 hover:bg-white/20 hover:text-white transition-all duration-300 text-sm"
                    >
                      <Download className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                      <span className="hidden xs:inline">Download</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default GalleryPage;
