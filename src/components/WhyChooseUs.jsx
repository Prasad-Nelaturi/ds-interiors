import React from "react";
import {
  Sparkles,
  Clock,
  ShieldCheck,
  Home,
  MapPin,
  Package,
  Users,
} from "lucide-react";

const WhyChooseUs = ({ scrollToContact }) => {
  const features = [
    {
      number: "45",
      label: "Day Move-in Guarantee",
      icon: <Clock className="w-6 h-6 sm:w-8 sm:h-8" />,
    },
    {
      number: "146",
      label: "Quality Checks",
      icon: <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8" />,
    },
    {
      number: "100K+",
      label: "Happy Homes",
      icon: <Home className="w-6 h-6 sm:w-8 sm:h-8" />,
    },
    {
      number: "100+",
      label: "Cities",
      icon: <MapPin className="w-6 h-6 sm:w-8 sm:h-8" />,
    },
    {
      number: "20L+",
      label: "Catalogue Products",
      icon: <Package className="w-6 h-6 sm:w-8 sm:h-8" />,
    },
    {
      number: "2000+",
      label: "Designers",
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
    },
  ];

  const colors = [
    "from-blue-400 to-cyan-500",
    "from-emerald-400 to-teal-500",
    "from-amber-400 to-orange-500",
    "from-purple-400 to-pink-500",
    "from-rose-400 to-red-500",
    "from-indigo-400 to-violet-500",
  ];

  return (
    <section className="py-8 sm:py-12 bg-gradient-to-b from-blue-50/20 via-white to-cyan-50/20 relative overflow-hidden">
      {/* Subtle Water Ripple Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-48 h-48 rounded-full bg-blue-400/5 animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-cyan-400/5 animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-amber-400/5 animate-pulse-slow delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Compact Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-orange-50 rounded-full px-3 sm:px-5 py-1.5 sm:py-2 mb-4 sm:mb-6 shadow-md border border-orange-100">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500" />
            <span className="text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wide">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">
            Trusted{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              by Thousands
            </span>
          </h2>
        </div>

        {/* Water Drop Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 max-w-6xl mx-auto">
          {features.map((item, index) => (
            <div key={index} className="group relative">
              <div className="relative flex flex-col items-center">
                {/* Water Drop */}
                <div className="relative w-full aspect-[0.85] max-w-[120px] sm:max-w-[140px] mx-auto">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${colors[index]} rounded-[40%_60%_70%_30%/_40%_50%_60%_50%] shadow-md group-hover:shadow-xl transition-all duration-500 group-hover:scale-105`}
                  >
                    {/* Water Shine */}
                    <div className="absolute inset-0 rounded-[40%_60%_70%_30%/_40%_50%_60%_50%] bg-gradient-to-br from-white/30 via-transparent to-white/5"></div>

                    {/* Top Highlight */}
                    <div className="absolute top-[18%] left-[28%] w-[18%] h-[10%] bg-white/60 rounded-full blur-[1px]"></div>
                    <div className="absolute top-[23%] left-[33%] w-[8%] h-[6%] bg-white/40 rounded-full blur-[1px]"></div>

                    {/* Content with Icon */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-2">
                      {/* Icon - Bigger */}
                      <div className="mb-0.5 text-white/90">{item.icon}</div>
                      {/* Number */}
                      <span className="text-base sm:text-lg md:text-xl font-bold drop-shadow-lg leading-none">
                        {item.number}
                      </span>
                      {/* Label */}
                      <span className="text-[12px] sm:text-[14px] font-medium text-center leading-tight mt-0.5 text-white/95 drop-shadow max-w-[90%]">
                        {item.label}
                      </span>
                    </div>

                    {/* Bottom Shine */}
                    <div className="absolute bottom-[12%] right-[18%] w-[12%] h-[6%] bg-white/20 rounded-full blur-[1px]"></div>
                  </div>

                  {/* Ripple Effect */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-[-15%] rounded-[40%_60%_70%_30%/_40%_50%_60%_50%] border border-white/0 group-hover:border-white/20 group-hover:scale-105 transition-all duration-500"></div>
                    <div className="absolute inset-[-30%] rounded-[40%_60%_70%_30%/_40%_50%_60%_50%] border border-white/0 group-hover:border-white/10 group-hover:scale-110 transition-all duration-500 delay-100"></div>
                  </div>

                  {/* Reflection Shadow */}
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-[70%] h-2 bg-gradient-to-r from-transparent via-current/5 to-transparent rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.6;
          }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
        
        .delay-2000 {
          animation-delay: 2s;
        }

        .group:hover .rounded-\\[40\\%_60\\%_70\\%_30\\%\\/_40\\%_50\\%_60\\%_50\\%\\] {
          animation: drop-ripple 0.8s ease-out;
        }

        @keyframes drop-ripple {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.03);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
