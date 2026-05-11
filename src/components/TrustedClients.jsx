import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const TrustedClients = () => {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.2,
  });

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

  // duplicate for endless effect
  const duplicatedClients = [...clients, ...clients];

  // auto scroll - FASTER
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrameId;

    const speed = 1;

    const scroll = () => {
      if (!container) return;

      container.scrollLeft += speed;

      // seamless infinite reset
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Our Trusted <span className="text-orange-500">Clients</span>
          </h2>
          <p className="text-gray-500">Proudly serving industry leaders</p>
        </motion.div>

        {/* Logo Slider */}
        <div className="relative overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-10 overflow-x-scroll scrollbar-hide"
          >
            {duplicatedClients.map((client, idx) => (
              <motion.div
                key={`${client.id}-${idx}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.4,
                  delay: idx * 0.03,
                }}
                className="flex-shrink-0"
              >
                <div className="group">
                  <div className="w-28 h-28 md:w-32 md:h-32 bg-gradient-to-r from-amber-200 to-orange-500 rounded-[50%] group-hover:rounded-2xl shadow-md flex items-center justify-center p-2 transition-all duration-300">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="w-full h-full object-contain rounded-[50%] group-hover:rounded-2xl transition-all duration-300"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
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
    </section>
  );
};

export default TrustedClients;
