import React from "react";
import ServiceTemplate from "./ServiceTemplate";
import { Crown, Waves, Mountain, Trophy, Wine, Star } from "lucide-react";

const LuxuryVillaDesign = () => {
  const serviceData = {
    title: "Luxury Villa Design",
    description:
      "Premium villa design services for discerning clients. Create magnificent living spaces with unparalleled luxury.",
    image:
      "/images/services_section/service_luxury_villa_design.jpg",
    imageAlt: "Illustrated rendering of a modern two-story villa with orange and white facades, glass walls, and wraparound balconies, surrounded by tropical palm trees and rocks beside an infinity pool.",
    features: [
      {
        icon: <Crown />,
        title: "Premium Design",
        description: "Exclusive, luxury design concepts",
      },
      {
        icon: <Waves />,
        title: "Pool & Outdoor",
        description: "Luxurious pool and outdoor spaces",
      },
      {
        icon: <Mountain />,
        title: "Scenic Integration",
        description: "Design that captures views and surroundings",
      },
      {
        icon: <Trophy />,
        title: "Leisure Spaces",
        description: "Entertainment and recreation areas",
      },
      {
        icon: <Wine />,
        title: "Entertainment Areas",
        description: "Spaces for hosting and entertainment",
      },
      {
        icon: <Star />,
        title: "Bespoke Details",
        description: "Custom luxury features and finishes",
      },
    ],
    benefits: [
      "Exclusive luxury design",
      "Premium quality materials",
      "Bespoke features",
      "Increased property value",
      "Unmatched elegance",
      "Complete service",
    ],
    process: [
      {
        title: "Luxury Consultation",
        description: "Discuss your vision and expectations",
      },
      {
        title: "Concept Development",
        description: "Create luxury design concepts",
      },
      {
        title: "Detailed Design",
        description: "Develop comprehensive luxury plans",
      },
      {
        title: "Execution",
        description: "Premium implementation and delivery",
      },
    ],
    faqs: [
      {
        question: "What defines luxury villa design?",
        answer:
          "Luxury design features premium materials, bespoke details, innovative technology, and exceptional craftsmanship.",
      },
      {
        question: "How long does a luxury villa project take?",
        answer:
          "Luxury villa projects typically take 6-18 months depending on complexity and scope.",
      },
      {
        question: "Do you provide turnkey solutions?",
        answer:
          "Yes, we offer comprehensive turnkey solutions including furnishings, technology, and landscaping.",
      },
    ],
  };

  return <ServiceTemplate {...serviceData} />;
};

export default LuxuryVillaDesign;
