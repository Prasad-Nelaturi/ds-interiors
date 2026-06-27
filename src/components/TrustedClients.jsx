import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const TrustedClients = () => {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.2,
  });

  const clients = [
    {
      id: 1,
      name: "Lansum Eldorado",
      logo: "/trusted-clients/1-lansum-eldorado.jpeg",
    },
    {
      id: 2,
      name: "Prestige Beverly Hills",
      logo: "/trusted-clients/2-prestige-beverly-hills.jpeg",
    },
    {
      id: 4,
      name: "Vishnu Vistara",
      logo: "/trusted-clients/4-vishnu-vistara.gif",
    },
    {
      id: 5,
      name: "Pruthvi Aditya Belmont Greene Villas",
      logo: "/trusted-clients/5-pruthvi-aditya-belmont-greene-villas.jpeg",
    },
    {
      id: 6,
      name: "Aparna Sarovar",
      logo: "/trusted-clients/6-aparna-sarovar.jpg",
    },
    {
      id: 7,
      name: "MY Home Jewel",
      logo: "/trusted-clients/7-my-home-jewel.jpg",
    },
    {
      id: 8,
      name: "MY Home Vihanga",
      logo: "/trusted-clients/8-my-home-vihanga.jpg",
    },
    {
      id: 9,
      name: "MY Home Avatar",
      logo: "/trusted-clients/9-my-home-avatar.jpg",
    },
    {
      id: 10,
      name: "Ramky Cosmos",
      logo: "/trusted-clients/10-ramky-cosmos.webp",
    },
    {
      id: 11,
      name: "SMR Vinay Iconia - Masjid Banda",
      logo: "/trusted-clients/11-smr-vinay-iconia-masjid-banda.jpg",
    },
    {
      id: 12,
      name: "Prajay Megapolis",
      logo: "/trusted-clients/12-prajay-megapolis.jpg",
    },
    {
      id: 13,
      name: "Mahindra Ashvita Lifespaces",
      logo: "/trusted-clients/13-mahindra-ashvita-lifespaces.webp",
    },
    {
      id: 14,
      name: "Mahindra Ashvita Lifespaces",
      logo: "/trusted-clients/14-mahindra-ashvita-lifespaces.jpg",
    },
    {
      id: 15,
      name: "EPIL Corner Stone",
      logo: "/trusted-clients/15-epil-corner-stone.jpg",
    },
    {
      id: 16,
      name: "Vajra Pratik",
      logo: "/trusted-clients/16-vajra-pratik.png",
    },
    {
      id: 17,
      name: "Avani Homes",
      logo: "/trusted-clients/17-avani-homes.jpg",
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

    const updateCenterCard = () => {
      const cards = container.querySelectorAll(".client-card");

      const center = container.scrollLeft + container.offsetWidth / 2;

      let closestIndex = 0;
      let minDistance = Infinity;

      cards.forEach((card, index) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;

        const distance = Math.abs(center - cardCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    const scroll = () => {
      container.scrollLeft += speed;

      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }

      updateCenterCard();

      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section ref={sectionRef} className="container mx-auto py-16 bg-gray-50">
      <div className="container mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 px-6"
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
            className="flex gap-4 overflow-x-scroll scrollbar-hide py-6"
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
                className="flex-shrink-0 py-10"
              >
                <div
                  className={`client-card group flex flex-col items-center text-center w-[320px] transition-all duration-700 ${
                    activeIndex === idx
                      ? "scale-110 -translate-y-4"
                      : "scale-90 opacity-70"
                  }`}
                >
                  {/* Hanging Thread */}
                  <div className="relative flex flex-col items-center">
                    {/* Nail */}
                    <div className="w-4 h-4 rounded-full bg-gray-500 shadow-md z-20" />

                    {/* Thread */}
                    <div className="w-[2px] h-8 bg-gradient-to-b from-gray-400 to-gray-200" />

                    {/* Hanging Frame */}
                    <div
                      className={`relative bg-white rounded-[1.8rem] shadow-2xl transition-all duration-700 ${
                        activeIndex === idx
                          ? "animate-frameShake shadow-2xl"
                          : ""
                      }`}
                    >
                      {/* Frame Image */}
                      <div className="w-72 h-72 overflow-hidden rounded-[1.5rem] bg-gray-100">
                        <img
                          src={client.logo}
                          alt={client.name}
                          className={`w-full h-full object-cover transition-all duration-700 ${
                            activeIndex === idx ? "scale-105" : ""
                          }`}
                        />
                      </div>

                      {/* Inner premium shadow */}
                      <div className="absolute inset-0 rounded-[1.8rem] pointer-events-none shadow-inner" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 text-base md:text-lg font-semibold text-gray-800 leading-snug px-2">
                    {client.name}
                  </h3>
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
