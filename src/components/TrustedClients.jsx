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
    <section ref={sectionRef} className="container mx-auto py-16 bg-gray-50">
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
                  <div className="w-32 h-32 md:w-48 md:h-48 bg-gradient-to-r from-amber-200 to-orange-500 group-hover:rounded-[50%] rounded-3xl shadow-md flex items-center justify-center p-2 transition-all duration-300">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="w-full h-full object-cover group-hover:rounded-[50%] rounded-3xl transition-all duration-300"
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
