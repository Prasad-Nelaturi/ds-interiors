import React from "react";
import ServiceTemplate from "./ServiceTemplate";
import { Flame, Utensils, Wrench, Wind, Settings, Shield } from "lucide-react";

const ChimneysHobs = () => {
  const serviceData = {
    title: "Chimneys & Hobs",
    description:
      "Professional installation and maintenance of chimneys and hobs. Enhance your kitchen with quality appliances.",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&h=800&fit=crop",
    features: [
      {
        icon: <Flame />,
        title: "Chimney Installation",
        description: "Professional chimney system installation",
      },
      {
        icon: <Utensils />,
        title: "Hob Selection",
        description: "Expert guidance in choosing the right hob",
      },
      {
        icon: <Wrench />,
        title: "Maintenance Services",
        description: "Regular maintenance for optimal performance",
      },
      {
        icon: <Wind />,
        title: "Ventilation Systems",
        description: "Complete kitchen ventilation solutions",
      },
      {
        icon: <Settings />,
        title: "Custom Installation",
        description: "Tailored installation for your kitchen layout",
      },
      {
        icon: <Shield />,
        title: "Safety Checks",
        description: "Comprehensive safety inspections and testing",
      },
    ],
    benefits: [
      "Improved air quality",
      "Enhanced kitchen aesthetics",
      "Increased property value",
      "Professional installation",
      "Safety assurance",
      "Energy efficiency",
    ],
    process: [
      {
        title: "Assessment",
        description: "Evaluate your kitchen and requirements",
      },
      {
        title: "Selection",
        description: "Choose from quality chimney and hob options",
      },
      {
        title: "Installation",
        description: "Professional installation and setup",
      },
      {
        title: "Testing",
        description: "Thorough testing and safety verification",
      },
    ],
    faqs: [
      {
        question: "How often should chimneys be cleaned?",
        answer:
          "We recommend annual cleaning and inspection for optimal safety and performance.",
      },
      {
        question: "What types of hobs do you install?",
        answer:
          "We install gas, induction, ceramic, and electric hobs from leading brands.",
      },
      {
        question: "Do you offer warranty on installations?",
        answer:
          "Yes, we provide comprehensive warranty coverage on all installations.",
      },
    ],
  };

  return <ServiceTemplate {...serviceData} />;
};

export default ChimneysHobs;
