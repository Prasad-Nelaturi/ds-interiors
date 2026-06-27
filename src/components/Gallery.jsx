// components/Gallery.jsx
import React, { useState, useEffect } from "react";
import { 
  X, 
  ChevronLeft, 
  ChevronRight,
  Camera,
  Sparkles,
  Maximize2
} from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState("all");
  const [likedImages, setLikedImages] = useState({});

  // Gallery Images - Replace with your actual images
  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop",
      title: "Modern Living Room",
      category: "Living Room",
      date: "2024"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&h=600&fit=crop",
      title: "Luxury Bedroom",
      category: "Bedroom",
      date: "2024"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      title: "Corporate Office",
      category: "Office",
      date: "2023"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
      title: "Restaurant Interior",
      category: "Restaurant",
      date: "2024"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop",
      title: "Kitchen Design",
      category: "Kitchen",
      date: "2024"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      title: "Bathroom Luxury",
      category: "Bathroom",
      date: "2023"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop",
      title: "Outdoor Patio",
      category: "Outdoor",
      date: "2024"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&h=600&fit=crop",
      title: "Home Theater",
      category: "Theater",
      date: "2024"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&h=600&fit=crop",
      title: "Luxury Villa",
      category: "Villa",
      date: "2023"
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      title: "Modern Kitchen",
      category: "Kitchen",
      date: "2024"
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
      title: "Master Bedroom",
      category: "Bedroom",
      date: "2024"
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=600&fit=crop",
      title: "Living Area",
      category: "Living Room",
      date: "2023"
    }
  ];

  // Categories
  const categories = [
    { id: "all", label: "All" },
    { id: "Living Room", label: "Living Room" },
    { id: "Bedroom", label: "Bedroom" },
    { id: "Kitchen", label: "Kitchen" },
    { id: "Office", label: "Office" },
    { id: "Bathroom", label: "Bathroom" },
    { id: "Restaurant", label: "Restaurant" },
    { id: "Villa", label: "Villa" }
  ];

  // Filter images
  const filteredImages = filter === "all" 
    ? images 
    : images.filter(img => img.category === filter);

  // Open modal
  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    document.body.style.overflow = "hidden";
  };

  // Close modal
  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  // Previous image
  const prevImage = () => {
    const newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  // Next image
  const nextImage = () => {
    const newIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage) {
        if (e.key === "Escape") closeModal();
        if (e.key === "ArrowLeft") prevImage();
        if (e.key === "ArrowRight") nextImage();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, currentIndex]);

  // Toggle like
  const toggleLike = (id, e) => {
    e.stopPropagation();
    setLikedImages(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-orange-50 rounded-full px-4 py-1.5 mb-4 border border-orange-100/50">
            <Camera className="w-3.5 h-3.5 text-orange-500" />
            <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Our Portfolio
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Our <span className="text-orange-500">Interior Designs</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Explore our portfolio of stunning interior design projects
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                filter === cat.id
                  ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/25"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid - 4 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer bg-white"
              onClick={() => openModal(image, index)}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Category Badge */}
                <div className="absolute top-2 sm:top-3 left-2 sm:left-3 px-2 py-0.5 sm:px-2.5 sm:py-1 bg-white/90 backdrop-blur-sm rounded-full text-[8px] sm:text-[10px] font-semibold text-gray-700 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {image.category}
                </div>
                {/* Image Title - Bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white font-semibold text-xs sm:text-sm">
                    {image.title}
                  </h3>
                  <p className="text-white/70 text-[10px] sm:text-xs">
                    {image.date}
                  </p>
                </div>

                {/* Expand Icon - Center */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-500">
                    <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No images message */}
        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No images found in this category</p>
          </div>
        )}

        {/* Load More Button */}
        {filteredImages.length > 0 && (
          <div className="text-center mt-8 sm:mt-10">
            <button className="group inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full font-medium hover:shadow-lg hover:shadow-orange-500/25 hover:scale-105 transition-all duration-300 text-sm">
              <span>Load More</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div 
              className="relative max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors p-2 z-10"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Main Image */}
              <div className="relative bg-black/40 rounded-2xl overflow-hidden">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full max-h-[70vh] object-contain"
                />

                {/* Image Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white text-lg sm:text-xl font-bold">
                        {selectedImage.title}
                      </h3>
                      <p className="text-white/70 text-sm">
                        {selectedImage.category} • {selectedImage.date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              {filteredImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors backdrop-blur-sm"
                  >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors backdrop-blur-sm"
                  >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </>
              )}

              {/* Image Counter */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white/80 text-xs">
                {currentIndex + 1} / {filteredImages.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;