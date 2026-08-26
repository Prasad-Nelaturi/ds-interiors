import React from "react";
import ServiceTemplate from "./ServiceTemplate";
import { Move, Square, Puzzle, Building2, Layout, Ruler } from "lucide-react";

const SpacePlanning = () => {
  const serviceData = {
    title: "Space Planning",
    description:
      "Professional space planning services to optimize your interiors. Efficient layouts that maximize functionality and flow.",
    image:
      "/images/services_section/service_space_planning1.jpg",
    imageAlt: "Open-plan living and dining space with modular white sofas, a leather Barcelona-style lounge chair, wooden coffee table, and floor-to-ceiling glass doors opening onto an outdoor patio with plants.",
    features: [
      {
        icon: <Move />,
        title: "Flow Optimization",
        description: "Create seamless space transitions",
      },
      {
        icon: <Square />,
        title: "Layout Design",
        description: "Efficient and functional layouts",
      },
      {
        icon: <Puzzle />,
        title: "Space Utilization",
        description: "Maximize every square foot",
      },
      {
        icon: <Building2 />,
        title: "Zoning",
        description: "Strategic space zoning and organization",
      },
      {
        icon: <Layout />,
        title: "Furniture Planning",
        description: "Optimal furniture placement",
      },
      {
        icon: <Ruler />,
        title: "Measurements",
        description: "Precise space measurements and calculations",
      },
    ],
    benefits: [
      "Optimized space use",
      "Improved functionality",
      "Enhanced flow",
      "Better organization",
      "Cost efficiency",
      "Professional planning",
    ],
    process: [
      { title: "Assessment", description: "Analyze space and requirements" },
      { title: "Planning", description: "Create detailed space plans" },
      { title: "Review", description: "Review and refine layouts" },
      {
        title: "Finalization",
        description: "Finalize space planning documents",
      },
    ],
    faqs: [
      {
        question: "What is space planning?",
        answer:
          "Space planning is the process of analyzing and organizing spaces to ensure optimal functionality and flow.",
      },
      {
        question: "Why is space planning important?",
        answer:
          "Good space planning maximizes efficiency, improves functionality, and enhances overall user experience.",
      },
      {
        question: "Do you provide 3D layouts?",
        answer:
          "Yes, we provide detailed 2D and 3D space planning layouts for better visualization.",
      },
    ],
  };

  return <ServiceTemplate {...serviceData} />;
};

export default SpacePlanning;
