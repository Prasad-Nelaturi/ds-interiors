import React from "react";
import { Sparkles } from "lucide-react";

const ScrollingText = () => {
  const texts = [
    "Interior Design",
    "Luxury Spaces",
    "Modern Architecture",
    "Commercial Projects",
    "Home Renovation",
    "Office Interiors",
    "Premium Furniture",
    "Creative Designs",
  ];

  // Duplicate for seamless loop
  const loopTexts = [...texts, ...texts];

  return (
    <section className="relative overflow-hidden py-20">
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-orange-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-amber-400/10 blur-[120px] rounded-full"></div>

      <div className="relative z-20">
        {/* ===== HEADER ===== */}
        <div className="text-center max-w-3xl mx-auto mb-20">
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
          {/* Left Gradient Fade */}
          <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#0b0b0b] to-transparent pointer-events-none"></div>

          {/* Right Gradient Fade */}
          <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#0b0b0b] to-transparent pointer-events-none"></div>

          {/* Scrolling Track */}
          <div className="marquee-wrapper">
            <div className="marquee-track">
              {loopTexts.map((text, index) => (
                <div key={index} className="group flex items-center gap-8 px-8">
                  {/* Text */}
                  <h2 className="text-lG md:text-xl font-extrabold uppercase tracking-[0.18em] text-white/90 transition-all duration-500 group-hover:text-orange-400">
                    {text}
                  </h2>
                  {/* Dot Divider */}
                  <span className="text-orange-500 text-3xl md:text-4xl">
                    ✦
                  </span>{" "}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
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
