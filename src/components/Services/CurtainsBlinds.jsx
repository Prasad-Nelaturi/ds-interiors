import React from "react";
import ServiceTemplate from "./ServiceTemplate";
import {
  Bolt,
  Sun,
  ArrowUp,
  ArrowDown,
  Maximize2,
  Palette,
} from "lucide-react";

const CurtainsBlinds = () => {
  const serviceData = {
    title: "Curtains & Blinds",
    description:
      "Custom window treatments that combine style and functionality. From elegant curtains to modern blinds.",
    image:
      "/images/services_section/service_curtains_blinds.jpg",
    features: [
      {
        icon: <Bolt />,
        title: "Motorized Blinds",
        description: "Automated window coverings for convenience",
      },
      {
        icon: <Sun />,
        title: "Light Control",
        description: "Perfect light filtering and blackout solutions",
      },
      {
        icon: <ArrowUp />,
        title: "Custom Curtains",
        description: "Bespoke curtains tailored to your windows",
      },
      {
        icon: <ArrowDown />,
        title: "Roller Blinds",
        description: "Modern roller blinds in various styles",
      },
      {
        icon: <Maximize2 />,
        title: "Vertical Blinds",
        description: "Practical and stylish vertical solutions",
      },
      {
        icon: <Palette />,
        title: "Design Consultation",
        description: "Expert advice on style and material selection",
      },
    ],
    benefits: [
      "Privacy and security",
      "Light control",
      "Energy efficiency",
      "Aesthetic appeal",
      "Easy maintenance",
      "Custom solutions",
    ],
    process: [
      {
        title: "Consultation",
        description: "Discuss needs, style preferences, and budget",
      },
      {
        title: "Measurement",
        description: "Precise measurements for perfect fit",
      },
      {
        title: "Selection",
        description: "Choose from our wide range of options",
      },
      {
        title: "Installation",
        description: "Professional installation service",
      },
    ],
    faqs: [
      {
        question: "How long does installation take?",
        answer:
          "Most installations are completed within a day, depending on the number of windows.",
      },
      {
        question: "Do you offer custom sizes?",
        answer:
          "Yes, we offer fully customized window treatments for any window size.",
      },
      {
        question: "What materials are available?",
        answer:
          "We offer a wide range including fabric, wood, aluminum, and composite materials.",
      },
    ],
  };

  return <ServiceTemplate {...serviceData} />;
};

export default CurtainsBlinds;
