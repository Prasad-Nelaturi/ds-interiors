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
      logo: "/images/trusted-clients/lansum-eldorado.jpeg",
      alt: "Nighttime aerial view of the Lansum El Dorado high-rise tower in Narsingi, Hyderabad, illuminated and surrounded by lower residential buildings, with the project's 'El Dorado' logo in the corner.",
    },
    {
      id: 2,
      name: "Prestige Beverly Hills",
      logo: "/images/trusted-clients/prestige-beverly-hills.jpeg",
      alt: "Nighttime aerial view of the Lansum El Dorado high-rise tower in Narsingi, Hyderabad, illuminated and surrounded by lower residential buildings, with the project's 'El Dorado' logo in the corner.",
    },
    {
      id: 3,
      name: "Pruthvi Aditya Belmont Greene Villas",
      logo: "/images/trusted-clients/pruthvi-aditya-belmont.jpeg",
      alt: "Nighttime rendering of a row of modern two-story villas with wood-paneled balconies, illuminated interiors, and cars parked in the driveways along a tree-lined street.",
    },
    {
      id: 4,
      name: "Aparna Sarovar",
      logo: "/images/trusted-clients/aparna-sarovar.jpg",
      alt: "Aerial view of the Aparna Sarovar apartment complex with multiple white high-rise towers surrounding a central clubhouse, swimming pools, and sports courts.",
    },
    {
      id: 5,
      name: "MY Home Jewel",
      logo: "/images/trusted-clients/my-home-jewel.jpg",
      alt: "Front elevation of a large pink-and-white multi-tower residential apartment complex with a landscaped lawn and palm trees in the foreground.",
    },
    {
      id: 6,
      name: "MY Home Vihanga",
      logo: "/images/trusted-clients/my-home-vihanga.jpg",
      alt: "Daytime rendering of the My Home Vihanga residential towers alongside a wavy-facade clubhouse building, with a green wall, palm-lined driveway, and parked buses in front.",
    },
    {
      id: 7,
      name: "MY Home Avatar",
      logo: "/images/trusted-clients/my-home-avatar.jpg",
      alt: "Aerial daytime view of the My Home Bhooja apartment complex, showing several tall white-and-brown towers arranged around a landscaped central garden with walking paths and palm trees.",
    },
    {
      id: 8,
      name: "Ramky Cosmos",
      logo: "/images/trusted-clients/ramky-cosmos.webp",
      alt: "Rendering of the One Kosmos residential towers in Hyderabad with a glass-fronted clubhouse, swimming pool, palm trees, and people walking on the landscaped grounds.",
    },
    {
      id: 9,
      name: "Prajay Megapolis",
      logo: "/images/trusted-clients/prajay-megapolis.jpg",
      alt: "Sunset view of a tall residential tower with lit windows, seen from a curving paved walkway lined with palm trees and lawn.",
    },
    {
      id: 10,
      name: "Mahindra Ashvita Lifespaces",
      logo: "/images/trusted-clients/mahindra-ashvita-2.jpg",
      alt: "Daytime rendering of Mahindra Ashvita high-rise apartment towers in Kukatpally, Hyderabad, with a landscaped entrance plaza, pergola, and ground-floor retail units",
    },
    {
      id: 11,
      name: "EPIL Corner Stone",
      logo: "/images/trusted-clients/epil-corner-stone.jpg",
      alt: "Entrance of the EIPL Cornerstone residential towers, featuring a curved wooden canopy over the driveway, stone-clad pillars with illuminated 'EIPL' signage, and surrounding trees.",
    },
    {
      id: 12,
      name: "Avani Homes",
      logo: "/images/trusted-clients/avani-homes.jpg",
      alt: "Daytime rendering of a low-rise beige apartment building with wood-slat balcony screens, glass-walled entrance, and cars parked under trees in front.",
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
                  className={`client-card group flex flex-col items-center text-center w-[320px] transition-all duration-700 ${activeIndex === idx
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
                      className={`relative bg-white rounded-[1.8rem] shadow-2xl transition-all duration-700 ${activeIndex === idx
                        ? "animate-frameShake shadow-2xl"
                        : ""
                        }`}
                    >
                      {/* Frame Image */}
                      <div className="w-72 h-72 overflow-hidden rounded-[1.5rem] bg-gray-100">
                        <img
                          src={client.logo}
                          alt={client.alt}
                          className={`w-full h-full object-cover transition-all duration-700 ${activeIndex === idx ? "scale-105" : ""
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
