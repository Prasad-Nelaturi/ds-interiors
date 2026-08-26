import React from "react";
import {
  ChefHat,
  Microwave,
  Refrigerator,
  Flame,
  Coffee,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import ConsultationButton from "../components/ConsultationButton";

const KitchenAppliances = () => {
  const appliances = [
    {
      id: 1,
      title: "Smart Modular Kitchen",
      category: "Luxury Kitchen",
      icon: <ChefHat className="w-4 h-4" />,
      image: "/images/kitchen/smart-modular-kitchen.gif",
      alt: "Smart modular luxury kitchen interior design",
      description:
        "Elegant modular kitchens crafted for premium functionality.",
    },
    {
      id: 2,
      title: "Built-In Microwave",
      category: "Modern Appliance",
      icon: <Microwave className="w-4 h-4" />,
      image: "/images/kitchen/built-in-microwave.jpg",
      alt: "Built-in microwave in a modern kitchen",
      description:
        "Seamlessly integrated microwaves for modern living.",
    },
    {
      id: 3,
      title: "Luxury Refrigerators",
      category: "Smart Cooling",
      icon: <Refrigerator className="w-4 h-4" />,
      image: "/images/kitchen/luxury-refrigerators.png",
      alt: "Modern dark kitchen with built-in Miele wall ovens and coffee maker, an open refrigerator stocked with fresh produce, and a marble-and-wood kitchen island with a gas cooktop.",
      description:
        "Energy-efficient refrigerators with smart storage.",
    },
    {
      id: 4,
      title: "Premium Cooktops",
      category: "Cooking Essentials",
      icon: <Flame className="w-4 h-4" />,
      image: "/images/kitchen/premium-cooktops.jpg",
      alt: "Premium kitchen cooktop for modern cooking",
      description:
        "High-performance cooktops for precision cooking.",
    },
    {
      id: 5,
      title: "Coffee & Beverage",
      category: "Lifestyle Appliance",
      icon: <Coffee className="w-4 h-4" />,
      image: "/images/kitchen/coffee-beverage.jpg",
      alt: "Built-in kitchen coffee station with open cabinet doors revealing a pink-paneled backsplash, glassware, crockery, and a espresso machine, next to a black wall oven and microwave, with a tan leather chair at a marble-topped island in the foreground.",
      description:
        "Create café-style experiences at home.",
    },
  ];

  return (
    <section className="container mx-auto bg-[#0b0b0b] relative py-12 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-orange-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-400/10 blur-[120px] rounded-full"></div>

      <div className="px-6 relative z-10">
        {/* Header - Keep as is */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-5xl mx-auto mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
            Smart Kitchen
            <span className="ml-3 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">
              Appliances & Solutions
            </span>
          </h2>

          <p className="mt-4 text-gray-400 text-base md:text-lg leading-relaxed">
            Discover premium kitchen appliances crafted to enhance
            functionality, comfort, and modern luxury living.
          </p>
        </motion.div>

        {/* Featured Appliance - Keep as is */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[2rem] shadow-2xl h-[340px]"
          >
            <img
              src={appliances[0].image}
              alt={appliances[0].title}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-[4000ms]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

            <div className="absolute bottom-0 left-0 p-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500 text-white text-sm font-semibold mb-2">
                {appliances[0].icon}
                Featured Design
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                {appliances[0].title}
              </h3>

              <p className="text-gray-300 max-w-lg leading-relaxed">
                {appliances[0].description}
              </p>
            </div>
          </motion.div>

          {/* Right Content - Keep as is */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                  Elevate Your Cooking Experience
                </h3>

                <p className="text-gray-400 mt-3 leading-relaxed text-lg">
                  Our premium kitchen appliance solutions combine elegant
                  aesthetics with cutting-edge technology.
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-5">
                {[
                  "Smart Automation",
                  "Luxury Finishes",
                  "Energy Efficient",
                  "Premium Quality",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
                  >
                    <ShieldCheck className="w-5 h-5 text-orange-400" />
                    <span className="text-white font-medium">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <ConsultationButton />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {appliances.slice(1, 5).map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl bg-gray-100/10 border-2 border-white hover:border-orange-400 transition-all duration-300 hover:scale-105">
                {/* Small Image */}
                <div className="h-24 overflow-hidden bg-gradient-to-br from-orange-500/10 to-amber-500/10">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Minimal Content */}
                <div className="p-2">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-orange-500/20 text-orange-400">
                      {item.icon}
                    </div>
                    <h4 className="text-white text-sm font-semibold">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed overflow-hidden text-ellipsis whitespace-nowrap">
                    {item.description}
                  </p>
                  <button className="mt-2 inline-flex items-center gap-1 text-orange-400 text-xs font-semibold group-hover:gap-2 transition-all duration-300">
                    Learn More
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KitchenAppliances;
