import React from "react";
import ServiceTemplate from "./ServiceTemplate";
import { Trees, Droplets, Sun, Mountain, Sprout, Flower2 } from "lucide-react";

const Landscaping = () => {
  const serviceData = {
    title: "Landscaping",
    description:
      "Create stunning outdoor spaces with our professional landscaping services. From garden design to complete outdoor transformations.",
    image:
      "/images/services_section/service_landscaping.jpg",
    imageAlt: "Front yard of a house with a curving flagstone pathway lined with colorful flower beds, manicured lawn, path lighting, and a bright orange front door.",
    features: [
      {
        icon: <Trees />,
        title: "Garden Design",
        description: "Beautiful garden designs that enhance your property",
      },
      {
        icon: <Droplets />,
        title: "Water Features",
        description: "Ponds, fountains, and water elements",
      },
      {
        icon: <Sun />,
        title: "Outdoor Lighting",
        description: "Strategic lighting for outdoor spaces",
      },
      {
        icon: <Mountain />,
        title: "Hardscaping",
        description: "Patios, walkways, and outdoor structures",
      },
      {
        icon: <Sprout />,
        title: "Planting Design",
        description: "Expert plant selection and arrangement",
      },
      {
        icon: <Flower2 />,
        title: "Maintenance Plans",
        description: "Ongoing garden maintenance services",
      },
    ],
    benefits: [
      "Enhanced curb appeal",
      "Increased property value",
      "Outdoor living spaces",
      "Environmental benefits",
      "Professional maintenance",
      "Custom designs",
    ],
    process: [
      {
        title: "Site Assessment",
        description: "Evaluate the property and outdoor space",
      },
      {
        title: "Design Concept",
        description: "Create landscaping design concepts",
      },
      {
        title: "Implementation",
        description: "Professional landscaping execution",
      },
      {
        title: "Maintenance",
        description: "Ongoing care and maintenance plans",
      },
    ],
    faqs: [
      {
        question: "How much does landscaping cost?",
        answer:
          "Costs vary widely based on project scope. We provide detailed quotes after site assessment.",
      },
      {
        question: "Do you offer maintenance services?",
        answer:
          "Yes, we provide comprehensive maintenance plans to keep your landscape looking its best.",
      },
      {
        question: "How long does landscaping take?",
        answer:
          "Timeline depends on project complexity, typically 2-8 weeks for complete transformations.",
      },
    ],
  };

  return <ServiceTemplate {...serviceData} />;
};

export default Landscaping;
