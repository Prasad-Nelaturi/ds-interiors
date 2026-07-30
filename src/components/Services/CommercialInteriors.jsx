import React from "react";
import ServiceTemplate from "./ServiceTemplate";
import {
  Building,
  Briefcase,
  Store,
  Hotel,
  Hospital,
  GraduationCap,
} from "lucide-react";

const CommercialInteriors = () => {
  const serviceData = {
    title: "Commercial Interiors",
    description:
      "Professional interior design services for commercial spaces. Create environments that enhance productivity and brand image.",
    image:
      "/images/services_section/service_commercial_interiors1.jpg",
    features: [
      {
        icon: <Briefcase />,
        title: "Office Design",
        description: "Productive and inspiring office environments",
      },
      {
        icon: <Store />,
        title: "Retail Spaces",
        description: "Engaging retail store designs",
      },
      {
        icon: <Hotel />,
        title: "Hospitality Design",
        description: "Welcoming hotel and restaurant interiors",
      },
      {
        icon: <Hospital />,
        title: "Healthcare Spaces",
        description: "Comfortable and functional healthcare designs",
      },
      {
        icon: <Building />,
        title: "Corporate Interiors",
        description: "Professional corporate office designs",
      },
      {
        icon: <GraduationCap />,
        title: "Educational Spaces",
        description: "Inspiring learning environments",
      },
    ],
    benefits: [
      "Enhanced brand image",
      "Increased productivity",
      "Improved employee satisfaction",
      "Professional environment",
      "Functional spaces",
      "Regulatory compliance",
    ],
    process: [
      {
        title: "Needs Assessment",
        description: "Understand business requirements and goals",
      },
      {
        title: "Design Strategy",
        description: "Develop commercial design strategy",
      },
      {
        title: "Implementation",
        description: "Professional execution of commercial design",
      },
      { title: "Completion", description: "Final inspection and handover" },
    ],
    faqs: [
      {
        question: "How do you handle commercial projects?",
        answer:
          "We follow a structured process that minimizes disruption to your business operations.",
      },
      {
        question: "Do you work with specific industries?",
        answer:
          "We have experience across various industries including corporate, retail, hospitality, and healthcare.",
      },
      {
        question: "What about building codes and regulations?",
        answer:
          "Our designs comply with all commercial building codes and safety regulations.",
      },
    ],
  };

  return <ServiceTemplate {...serviceData} />;
};

export default CommercialInteriors;
