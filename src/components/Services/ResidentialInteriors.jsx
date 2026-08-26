import React from "react";
import ServiceTemplate from "./ServiceTemplate";
import { Bed, Bath, CookingPot, Sofa, Baby, DoorOpen } from "lucide-react";

const ResidentialInteriors = () => {
  const serviceData = {
    title: "Residential Interiors",
    description:
      "Complete interior design solutions for homes. Create living spaces that reflect your lifestyle and personality.",
    image:
      "/images/services_section/service_residential_interiors1.jpg",
    imageAlt: "Moody navy-blue living room with built-in display shelving, colorful abstract wall art, a burnt-orange sofa, mustard and grey accent chairs, and round dark blue ottomans on a patterned rug.",
    features: [
      {
        icon: <Bed />,
        title: "Bedroom Design",
        description: "Comfortable and stylish bedroom interiors",
      },
      {
        icon: <Bath />,
        title: "Bathroom Design",
        description: "Luxurious bathroom spaces and fittings",
      },
      {
        icon: <CookingPot />,
        title: "Kitchen Design",
        description: "Functional and beautiful kitchen spaces",
      },
      {
        icon: <Sofa />,
        title: "Living Room Design",
        description: "Elegant and welcoming living spaces",
      },
      {
        icon: <Baby />,
        title: "Children's Rooms",
        description: "Playful and functional kids' spaces",
      },
      {
        icon: <DoorOpen />,
        title: "Hallway Design",
        description: "Impressive entrance and hallway designs",
      },
    ],
    benefits: [
      "Personalized living spaces",
      "Enhanced comfort",
      "Increased home value",
      "Professional design",
      "Quality materials",
      "Complete solutions",
    ],
    process: [
      {
        title: "Consultation",
        description: "Discuss your vision and requirements",
      },
      {
        title: "Design Phase",
        description: "Create detailed design plans and concepts",
      },
      {
        title: "Implementation",
        description: "Professional execution of designs",
      },
      {
        title: "Final Touch",
        description: "Add finishing touches and styling",
      },
    ],
    faqs: [
      {
        question: "How do you personalize designs?",
        answer:
          "We work closely with you to understand your style, preferences, and lifestyle requirements.",
      },
      {
        question: "Do you handle complete home interiors?",
        answer:
          "Yes, we provide comprehensive interior design services for entire homes.",
      },
      {
        question: "What is the project timeline?",
        answer:
          "Timelines vary by project size, typically 4-12 weeks for complete home interiors.",
      },
    ],
  };

  return <ServiceTemplate {...serviceData} />;
};

export default ResidentialInteriors;
