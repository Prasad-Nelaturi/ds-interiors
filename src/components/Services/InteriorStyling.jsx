import React from "react";
import ServiceTemplate from "./ServiceTemplate";
import {
  Sparkles,
  PaintRoller,
  Armchair,
  Lamp,
  Image,
  Wand2,
} from "lucide-react";

const InteriorStyling = () => {
  const serviceData = {
    title: "Interior Styling",
    description:
      "Expert interior styling services that bring life to your spaces. From accessories to furniture arrangement.",
    image:
      "/images/services_section/service_interior_styling_decor.png",
    features: [
      {
        icon: <Sparkles />,
        title: "Space Styling",
        description: "Professional styling for any room",
      },
      {
        icon: <PaintRoller />,
        title: "Color Coordination",
        description: "Perfect color schemes for your space",
      },
      {
        icon: <Armchair />,
        title: "Furniture Arrangement",
        description: "Optimal furniture placement and selection",
      },
      {
        icon: <Lamp />,
        title: "Accessories Selection",
        description: "Curated accessories and décor items",
      },
      {
        icon: <Image />,
        title: "Art & Wall Décor",
        description: "Professional art and wall décor placement",
      },
      {
        icon: <Wand2 />,
        title: "Transformational Design",
        description: "Complete space transformations",
      },
    ],
    benefits: [
      "Enhanced aesthetics",
      "Cohesive design",
      "Professional touch",
      "Budget-friendly",
      "Quick transformations",
      "Personalized style",
    ],
    process: [
      {
        title: "Style Consultation",
        description: "Understand your style preferences",
      },
      {
        title: "Design Plan",
        description: "Create styling plan and mood board",
      },
      {
        title: "Implementation",
        description: "Apply styling elements to your space",
      },
      {
        title: "Final Polish",
        description: "Add finishing touches and details",
      },
    ],
    faqs: [
      {
        question: "What is the difference between styling and design?",
        answer:
          "Styling focuses on aesthetics, accessories, and finishing touches, while design includes structural and functional planning.",
      },
      {
        question: "Can you style an existing room?",
        answer:
          "Absolutely! We can transform any existing space with styling elements.",
      },
      {
        question: "How long does a styling project take?",
        answer:
          "Most styling projects are completed in 2-4 weeks, depending on the scope.",
      },
    ],
  };

  return <ServiceTemplate {...serviceData} />;
};

export default InteriorStyling;
