import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TrustedClients = () => {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const clients = [
    {
      id: 1,
      name: "Tech Mahindra",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=120&h=120&fit=crop",
    },
    {
      id: 2,
      name: "Reliance Retail",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=120&h=120&fit=crop",
    },
    {
      id: 3,
      name: "HDFC Bank",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=120&h=120&fit=crop",
    },
    {
      id: 4,
      name: "Marriott Hotels",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=120&h=120&fit=crop",
    },
    {
      id: 5,
      name: "My Home Group",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=120&h=120&fit=crop",
    },
    {
      id: 6,
      name: "Prestige Group",
      logo: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=120&h=120&fit=crop",
    },
    {
      id: 7,
      name: "Godrej Properties",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=120&h=120&fit=crop",
    },
    {
      id: 8,
      name: "Sobha Limited",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=120&h=120&fit=crop",
    },
    {
      id: 9,
      name: "Tata Group",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=120&h=120&fit=crop",
    },
    {
      id: 10,
      name: "Amazon India",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=120&h=120&fit=crop",
    },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Our Trusted{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
              Clients
            </span>
          </h2>
          <p className="text-gray-500">Proudly serving industry leaders</p>
        </motion.div>

        {/* Logo Slider with Navigation */}
        <div className="relative group">
          {/* Left Navigation Button */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-600 hover:bg-orange-500 hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-x-5 group-hover:translate-x-0"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Scrollable Logos Container */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide gap-8 py-8 px-4 scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {clients.map((client, idx) => (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="flex-shrink-0"
              >
                <div className="w-28 h-28 md:w-32 md:h-32 hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110 cursor-pointer rounded-2xl">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-full h-full object-contain rounded-2xl filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Navigation Button */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-600 hover:bg-orange-500 hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-5 group-hover:translate-x-0"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Gradient Overlays for smooth edges */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>
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
    </section>
  );
};

export default TrustedClients;
