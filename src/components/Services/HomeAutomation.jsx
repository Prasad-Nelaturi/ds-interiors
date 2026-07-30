import React from "react";
import ServiceTemplate from "./ServiceTemplate";
import { Lightbulb, Video, Lock, Thermometer, Music, Wifi } from "lucide-react";

const HomeAutomation = () => {
  const serviceData = {
    title: "Home Automation",
    description:
      "Transform your home with smart technology. Control lighting, security, climate, and entertainment with ease.",
    image:
      "https://cionlabs.com/wp-content/uploads/2025/11/homeautomation.jpg",
    features: [
      {
        icon: <Lightbulb />,
        title: "Smart Lighting",
        description: "Automated and energy-efficient lighting systems",
      },
      {
        icon: <Video />,
        title: "Security Systems",
        description: "Smart cameras and security solutions",
      },
      {
        icon: <Lock />,
        title: "Access Control",
        description: "Smart locks and entry systems",
      },
      {
        icon: <Thermometer />,
        title: "Climate Control",
        description: "Smart thermostats and HVAC automation",
      },
      {
        icon: <Music />,
        title: "Audio Systems",
        description: "Whole-home audio and entertainment",
      },
      {
        icon: <Wifi />,
        title: "Network Infrastructure",
        description: "Reliable smart home connectivity",
      },
    ],
    benefits: [
      "Convenience and control",
      "Energy efficiency",
      "Enhanced security",
      "Increased comfort",
      "Property value increase",
      "Remote monitoring",
    ],
    process: [
      {
        title: "Assessment",
        description: "Evaluate your home and automation needs",
      },
      {
        title: "System Design",
        description: "Create custom automation system design",
      },
      {
        title: "Installation",
        description: "Professional installation and setup",
      },
      {
        title: "Training",
        description: "Comprehensive training on system use",
      },
    ],
    faqs: [
      {
        question: "Can existing homes be automated?",
        answer:
          "Yes, we can integrate smart technology into existing homes with minimal disruption.",
      },
      {
        question: "What systems can be automated?",
        answer:
          "Lighting, climate, security, entertainment, blinds, and more can be fully automated.",
      },
      {
        question: "Is home automation expensive?",
        answer:
          "Costs vary based on the scope. We offer solutions for different budgets and needs.",
      },
    ],
  };

  return <ServiceTemplate {...serviceData} />;
};

export default HomeAutomation;
