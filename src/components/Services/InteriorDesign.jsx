import React from "react";
import ServiceTemplate from "./ServiceTemplate";
import {
  Paintbrush,
  Ruler,
  Layers,
  Palette,
  Lightbulb,
  Home,
} from "lucide-react";

const InteriorDesign = () => {
  const serviceData = {
    title: "Interior Design",
    description:
      "Transform your space with our expert interior design services. We create beautiful, functional spaces that reflect your style and personality.",
    image:
      "/images/services_section/service_interior_design.jpg",
    imageAlt: "Elegant living room with grey upholstered armchairs, a round glass coffee table with a floral centerpiece, sheer curtains, and a white staircase with under-stair storage shelving in the background.",
    features: [
      {
        icon: <Paintbrush className="w-8 h-8" />,
        title: "Custom Design",
        description:
          "Personalized designs tailored to your taste and requirements",
      },
      {
        icon: <Ruler className="w-8 h-8" />,
        title: "Space Planning",
        description:
          "Optimal utilization of available space with smart layouts",
      },
      {
        icon: <Layers className="w-8 h-8" />,
        title: "3D Visualization",
        description: "See your design in 3D before implementation",
      },
      {
        icon: <Palette className="w-8 h-8" />,
        title: "Color Consultation",
        description: "Expert color schemes that enhance your space",
      },
      {
        icon: <Lightbulb className="w-8 h-8" />,
        title: "Lighting Design",
        description: "Strategic lighting solutions for perfect ambiance",
      },
      {
        icon: <Home className="w-8 h-8" />,
        title: "Furniture Selection",
        description: "Curated furniture pieces that match your style",
      },
    ],
    benefits: [
      "Enhanced aesthetic appeal",
      "Improved functionality",
      "Increased property value",
      "Personalized living spaces",
      "Professional guidance",
      "Budget-friendly solutions",
    ],
    process: [
      {
        title: "Consultation",
        description: "Discuss your vision, requirements, and budget",
      },
      {
        title: "Concept Design",
        description: "Create initial design concepts and mood boards",
      },
      {
        title: "Design Development",
        description: "Detailed planning and material selection",
      },
      {
        title: "Implementation",
        description: "Professional execution of the design plan",
      },
    ],
    faqs: [
      {
        question: "How long does an interior design project take?",
        answer:
          "The timeline varies depending on the scope of work. A typical residential project takes 4-8 weeks.",
      },
      {
        question: "What is included in your interior design service?",
        answer:
          "Our comprehensive service includes space planning, furniture selection, color consultation, lighting design, material selection, and project management.",
      },
      {
        question: "Do you work within a budget?",
        answer:
          "Yes, we work with clients to create designs that fit their budget while maintaining quality and aesthetics.",
      },
    ],
  };
  return <ServiceTemplate {...serviceData} />;
};

export default InteriorDesign;
