import React from "react";
import ServiceTemplate from "./ServiceTemplate";
import {
  LucideBox as Cube,
  LucideCamera as Camera,
  LucideImage as Image,
  LucidePlay as Play,
  LucideMonitor as Monitor,
  LucideEye as Eye,
} from "lucide-react";

const Visualization3D = () => {
  const serviceData = {
    title: "3D Visualization",
    description:
      "Bring your projects to life with stunning 3D visualizations. Experience your design before construction begins.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=800&fit=crop",
    features: [
      {
        icon: <Cube className="w-8 h-8" />,
        title: "3D Modeling",
        description: "Detailed 3D models of your space and design",
      },
      {
        icon: <Camera className="w-8 h-8" />,
        title: "Photorealistic Rendering",
        description: "High-quality, realistic visualizations",
      },
      {
        icon: <Image className="w-8 h-8" />,
        title: "Virtual Walkthroughs",
        description: "Interactive tours of your future space",
      },
      {
        icon: <Play className="w-8 h-8" />,
        title: "Animation",
        description: "Dynamic presentations of your design",
      },
      {
        icon: <Monitor className="w-8 h-8" />,
        title: "VR Experience",
        description: "Immersive virtual reality tours",
      },
      {
        icon: <Eye className="w-8 h-8" />,
        title: "Design Visualization",
        description: "Visualize design concepts with clarity",
      },
    ],
    benefits: [
      "Visualize before construction",
      "Easier decision making",
      "Cost-effective changes",
      "Marketing materials",
      "Client presentations",
      "Design verification",
    ],
    process: [
      {
        title: "Requirements Gathering",
        description: "Collect design specifications and requirements",
      },
      {
        title: "3D Modeling",
        description: "Create detailed 3D models of the space",
      },
      {
        title: "Texturing & Lighting",
        description: "Apply realistic textures and lighting",
      },
      {
        title: "Final Rendering",
        description: "Produce high-quality renderings and animations",
      },
    ],
    faqs: [
      {
        question: "How long does 3D visualization take?",
        answer:
          "A typical project takes 2-4 weeks depending on complexity and level of detail required.",
      },
      {
        question: "What formats do you deliver?",
        answer:
          "We deliver high-resolution images, videos, interactive 3D models, and VR-ready files.",
      },
      {
        question: "Can you create visualizations from blueprints?",
        answer:
          "Yes, we can work from architectural plans, sketches, or even basic concepts.",
      },
    ],
  };
  return <ServiceTemplate {...serviceData} />;
};

export default Visualization3D;
