import React from "react";
import { Sparkles } from "lucide-react";

const ScrollingText = () => {
  const texts = [
    "Lansum Eldorado",
    "Prestige Beverly Hills",
    "Sumadhura Horizon",
    "Vishnu Vistara",
    "Pruthvi Aditya Belmont Greene Villas",
    "Aparna Sarovar",
    "MY Home Jewel",
    "MY Home Vihanga",
    "MY Home Avatar",
    "Ramky Cosmos",
    "SMR Vinay Iconia",
    "Prajay Megapolis",
    "Mahindra Ashvita Lifespaces",
    "EPIL Corner Stone",
    "Vajra Pratik",
    "Avani Homes",
  ];

  const loopTexts = [...texts, ...texts];

  return (
    <section className="container mx-auto relative overflow-hidden py-20">
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-orange-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-amber-400/10 blur-[120px] rounded-full"></div>

      <div className="relative z-20">
        {/* ===== HEADER ===== */}
        <div className="text-center px-6 max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-orange-50 rounded-full px-5 py-2 mb-6 shadow-md border border-orange-100">
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
              Trusted By Leading Brands
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Valued Partners
            </span>
          </h2>
          <p className="mt-6 text-gray-500 text-sm md:text-lg max-w-3xl mx-auto leading-relaxed">
            Proudly delivering exceptional interior experiences with over{" "}
            <span className="text-gray-900 font-semibold">
              1000+ successful projects
            </span>{" "}
            and transforming{" "}
            <span className="text-orange-400 font-semibold">
              200+ premium communities
            </span>{" "}
            across INDIA.
          </p>
        </div>

        {/* Marquee Section */}
        <div className="relative bg-[#0b0b0b] py-2">
         
          {/* Scrolling Track */}
          <div className="marquee-wrapper">
            <div className="marquee-track">
              {loopTexts.map((text, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-2 md:gap-4 px-4 md:px-4"
                >
                  {/* Text */}
                  <h2 className="text-xs md:text-sm font-extrabold uppercase tracking-[0.18em] text-white/90 transition-all duration-500 group-hover:text-orange-400">
                    {text}
                  </h2>
                  {/* Dot Divider */}
                  <span className="text-orange-500 text-sm md:text-lg">
                    ✦
                  </span>{" "}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

       <style>{`
        .marquee-wrapper {
          overflow: hidden;
          width: 100%;
        }

        .marquee-track {
          display: flex;
          align-items: center;
          width: max-content;
          animation: marquee 35s linear infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }

          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default ScrollingText;
