import React from "react";
import ServiceTemplate from "./ServiceTemplate";
import { Home, Compass, Building, TreePine, Droplets, Sun } from "lucide-react";

const HomePlans = () => {
  const serviceData = {
    title: "Home Plans",
    description:
      "Comprehensive home planning services from concept to completion. We design homes that perfectly match your lifestyle and needs.",
    image:
      "/images/services_section/service_home_plans_elevations.png",
      imageAlt: "Infographic titled 'Home Plans & Elevations' showing a two-story modern house exterior, ground and first floor plans labeled with room dimensions (bedrooms, kitchen, living, dining, lounge, balcony), four elevation views (front, left, rear, right), and icons highlighting smart layout, natural light, modern design, and quality construction.",
    features: [
      {
        icon: <Compass className="w-8 h-8" />,
        title: "Custom Home Design",
        description: "Bespoke home designs tailored to your preferences",
      },
      {
        icon: <Building className="w-8 h-8" />,
        title: "Architectural Plans",
        description: "Detailed architectural drawings and specifications",
      },
      {
        icon: <Home className="w-8 h-8" />,
        title: "Floor Planning",
        description: "Efficient floor plans that maximize space utilization",
      },
      {
        icon: <TreePine className="w-8 h-8" />,
        title: "Site Planning",
        description: "Optimal positioning of your home on the property",
      },
      {
        icon: <Droplets className="w-8 h-8" />,
        title: "Sustainable Design",
        description: "Eco-friendly and energy-efficient home solutions",
      },
      {
        icon: <Sun className="w-8 h-8" />,
        title: "Natural Lighting",
        description: "Design strategies for optimal natural light",
      },
    ],
    benefits: [
      "Customized home design",
      "Efficient space utilization",
      "Cost-effective planning",
      "Sustainable solutions",
      "Professional guidance",
      "Permit-ready plans",
    ],
    process: [
      {
        title: "Initial Consultation",
        description: "Understand your requirements and vision",
      },
      {
        title: "Site Assessment",
        description: "Evaluate the property and surrounding environment",
      },
      {
        title: "Design Development",
        description: "Create comprehensive home plans and elevations",
      },
      {
        title: "Plan Finalization",
        description: "Review and finalize all design details",
      },
    ],
    faqs: [
      {
        question: "Do you provide building permits with your plans?",
        answer:
          "We prepare plans that meet all building code requirements and can assist you with the permit application process.",
      },
      {
        question: "Can I modify the home plans after completion?",
        answer:
          "Yes, we offer revision services to accommodate changes in your requirements.",
      },
      {
        question: "How much do home plans cost?",
        answer:
          "Costs vary depending on the complexity and size of the project. We provide detailed quotes after initial consultation.",
      },
    ],
  };
  return <ServiceTemplate {...serviceData} />;
};

export default HomePlans;
