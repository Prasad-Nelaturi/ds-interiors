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
      logo: "https://is1-3.housingcdn.com/4f2250e8/86d1bf56384dee4ced588894d6044e4e/v0/fs/lansum_el_dorado-narsingi-hyderabad-lansum_properties_llp.jpeg",
    },
    {
      id: 2,
      name: "Prestige Beverly Hills",
      logo: "https://housing4all.in/storage/prestige-beverly-hills-10.jpeg",
    },
    {
      id: 3,
      name: "Sumadhura Horizon",
      logo: "https://sumadhuragroup.com/images/horizon/ame1.jpg",
    },
    {
      id: 4,
      name: "Vishnu Vistara",
      logo: "https://teja12.kuikr.com/is/a/c/655x525/gallery_images/original/cf5c1ccf6661c4e.gif",
    },
    {
      id: 5,
      name: "Pruthvi Aditya Belmont Greene Villas",
      logo: "https://s3.ap-south-1.amazonaws.com/website-prod-public/home/ubuntu/pp-website/public/assets/images/147593/original/images_%2811%29_%282%29_%281%29.jpeg?1744124080",
    },
    {
      id: 6,
      name: "Aparna Sarovar",
      logo: "https://static.squareyards.com/resources/images/hyderabad/project-image/aparna-sarovar-project-project-large-image1.jpg?aio=w-520;h-260;crop;",
    },
    {
      id: 7,
      name: "MY Home Jewel",
      logo: "https://ysrealty.co.in/wp-content/uploads/2024/08/elevation.jpg",
    },
    {
      id: 8,
      name: "MY Home Vihanga",
      logo: "https://s3-ap-southeast-1.amazonaws.com/housingman-v2/projects/banner_images/1628/original/My_Home_Vihanga-Banner.jpg?1481723942",
    },
    {
      id: 9,
      name: "MY Home Avatar",
      logo: "https://www.pakkajameen.com/wp-content/uploads/2023/09/Myhome-avatar_01.jpg",
    },
    {
      id: 10,
      name: "Ramky Cosmos",
      logo: "https://img.staticmb.com/mbimages/project/Photo_h310_w462/Project-Photo-111-One-Kosmos-Hyderabad-5038138_560_800_310_462.jpg.webp",
    },
    {
      id: 11,
      name: "SMR Vinay Iconia - Masjid Banda",
      logo: "https://propertyadviser.in/property-images/s1/smr-vinay-iconia-cristallo-224-s1.jpg",
    },
    {
      id: 12,
      name: "Prajay Megapolis",
      logo: "https://apnacomplexdocs.s3-ap-southeast-1.amazonaws.com/user_content/communities_photo/e563501eeb4c7e30de5c8cbdb9b0d5ab5701_profile_picture.jpg",
    },
    {
      id: 13,
      name: "Mahindra Ashvita Lifespaces",
      logo: "https://img.staticmb.com/mbimages/project/Photo_h310_w462/Project-Photo-111-One-Kosmos-Hyderabad-5038138_560_800_310_462.jpg.webp",
    },
    {
      id: 14,
      name: "Mahindra Ashvita Lifespaces",
      logo: "https://content.jdmagicbox.com/v2/comp/hyderabad/g3/040pxx40.xx40.170208224824.q5g3/catalogue/mahindra-ashvita-kukatpally-hyderabad-residential-buildings-pn61b3n0by.jpg",
    },
    {
      id: 15,
      name: "EPIL Corner Stone",
      logo: "https://cdn.prod.website-files.com/67911e0441efb94621754b0c/6842ed1566a701ada97c28db_CPW01193-enterance%201%20(1).jpg",
    },
    {
      id: 16,
      name: "Vajra Pratik",
      logo: "https://s3.ap-south-1.amazonaws.com/website-prod-public/home/ubuntu/pp-website/public/assets/images/110194/original/download_%284%29.png?1742383824",
    },
    {
      id: 17,
      name: "Avani Homes",
      logo: "https://nnk.co.in/wp-content/uploads/2023/05/avani-img1.jpg",
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
