import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Award,
  Clock,
  ChevronDown,
  Sparkles,
  Zap,
  Heart,
} from "lucide-react";

import SEO from "../../components/SEO";
import StructuredData from '../components/StructuredData';

const ServiceTemplate = ({
  title,
  description,
  image,
  features = [],
  benefits = [],
  process = [],
  faqs = [],
  ctaText = "Get a Free Consultation",
  ctaLink = "/contact",
}) => {
  const [openFaq, setOpenFaq] = useState(null);

  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.2,
  });

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const stats = [
    {
      icon: Star,
      value: "4.9",
      label: "Average Rating",
      detail: "500+ Reviews",
    },
    {
      icon: CheckCircle,
      value: "1200+",
      label: "Projects Completed",
    },
    {
      icon: Award,
      value: "15+",
      label: "Industry Awards",
    },
    {
      icon: Users,
      value: "98%",
      label: "Client Satisfaction",
    },
  ];

  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 10 + 5,
    delay: Math.random() * 5,
  }));

  return (
    <>
      <SEO />
      <StructuredData />

      <div className="min-h-screen bg-white overflow-hidden">

        <section className="relative h-screen overflow-hidden">

          <div className="absolute inset-0">

            <img
              src={image}
              alt={`${title} services by Dsigner Studio Interiors`}
              className="w-full h-full object-cover transform scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/20 to-black/0" />

          </div>

          {/* Floating particles */}

          <div className="absolute inset-0 overflow-hidden pointer-events-none">

            {particles.map((p) => (
              <motion.div
                key={p.id}
                className="absolute bg-white/10 rounded-full"
                style={{
                  width: p.size,
                  height: p.size,
                  left: `${p.x}%`,
                  top: `${p.y}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: p.duration,
                  delay: p.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}

          </div>

          <div className="relative z-10 h-full flex items-center">

            <div className="container mx-auto px-6">

              <div className="grid lg:grid-cols-2 gap-12 items-center">

                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >

                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 backdrop-blur-sm rounded-full mb-6 border border-amber-400/30">

                    <Zap className="w-4 h-4 text-amber-400" />

                    <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider">
                      Premium Service
                    </span>

                  </div>

                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">

                    {title}

                    <span className="py-2 block bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
                      Reimagined
                    </span>

                  </h1>

                  <p className="text-sm md:text-lg text-gray-300 mb-8 leading-relaxed max-w-xl">
                    {description}
                  </p>

                  <div className="flex flex-wrap gap-4">

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >

                      <Link
                        to={ctaLink}
                        className="inline-flex items-center bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl"
                      >
                        {ctaText}

                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>

                    </motion.div>

                  </div>

                </motion.div>

              </div>

            </div>

          </div>

          {/* Scroll */}

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          >

            <div className="flex flex-col items-center gap-2">

              <span className="text-white/60 text-sm uppercase tracking-wider">
                Scroll
              </span>

              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">

                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                  className="w-1.5 h-3 bg-white/60 rounded-full mt-2"
                />

              </div>

            </div>

          </motion.div>

        </section>

        <section className="relative py-8 bg-gradient-to-r from-amber-600 to-orange-600">

          <div className="container mx-auto px-6 relative z-10">

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

              {stats.map((stat, index) => {

                const Icon = stat.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    className="text-center"
                  >

                    <div className="flex items-center justify-center gap-2 mb-1">

                      <Icon className="w-5 h-5 text-white/80" />

                      <span className="text-2xl md:text-3xl font-bold text-white">
                        {stat.value}
                      </span>

                    </div>

                    <div className="text-white/80 text-sm">
                      {stat.label}
                    </div>

                    {stat.detail && (
                      <div className="text-white/50 text-xs">
                        {stat.detail}
                      </div>
                    )}

                  </motion.div>
                );

              })}

            </div>

          </div>

        </section>

        <section
          ref={sectionRef}
          className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-amber-50/30"
        >

          <div className="container mx-auto px-6 relative">

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={
                isInView
                  ? {
                    opacity: 1,
                    y: 0,
                  }
                  : {}
              }
              transition={{
                duration: 0.6,
              }}
              className="text-center mb-16"
            >

              <div className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full mb-4">

                <Sparkles className="w-4 h-4 text-amber-600" />

                <span className="text-amber-700 text-sm font-semibold uppercase tracking-wider">
                  What We Offer
                </span>

              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">

                Why Choose Our{" "}

                <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                  {title}
                </span>

                ?

              </h2>

              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                We deliver exceptional quality with attention to every detail
              </p>

            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

              {features.map((feature, index) => (

                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={
                    isInView
                      ? {
                        opacity: 1,
                        y: 0,
                      }
                      : {}
                  }
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -10,
                  }}
                  className="group"
                >

                  <div className="relative h-full bg-white rounded-3xl p-6 shadow-xl border border-gray-100 overflow-hidden">

                    <div className="relative z-10">

                      <div className="relative mb-6">

                        <div className="relative w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-400 rounded-2xl flex items-center justify-center shadow-lg">

                          <div className="text-white">
                            {feature.icon}
                          </div>

                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center text-xs font-bold text-amber-600 shadow-md">
                            {String(index + 1).padStart(2, "0")}
                          </div>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>

                  </div>

                </motion.div>

              ))}

            </div>

          </div>

        </section>

        <section className="py-24 bg-gradient-to-br from-gray-50 to-amber-50/20">

          <div className="container mx-auto px-6">

            <div className="text-center mb-16">

              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full mb-4">

                <Award className="w-4 h-4 text-amber-600" />

                <span className="text-amber-700 text-sm font-semibold uppercase tracking-wider">
                  Our Promise
                </span>

              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Why Work With Us
              </h2>

            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">

              {benefits.map((benefit, index) => (

                <div
                  key={index}
                  className="flex items-center gap-5 p-5 bg-white rounded-2xl shadow-md border border-gray-100"
                >

                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center text-white font-bold text-lg">

                    {String(index + 1).padStart(2, "0")}

                  </div>

                  <p className="text-gray-800 font-medium">
                    {benefit}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>

        <section className="py-24 bg-white">

          <div className="container mx-auto px-6">

            <div className="text-center mb-16">

              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full mb-4">

                <Clock className="w-4 h-4 text-amber-600" />

                <span className="text-amber-700 text-sm font-semibold uppercase tracking-wider">
                  Our Process
                </span>

              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                How We Work
              </h2>

            </div>

            <div className="relative max-w-5xl mx-auto">

              {process.map((step, index) => (

                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="relative flex flex-col md:flex-row items-center gap-8 mb-12"
                >

                  <div className="flex-1">

                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">

                      <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                        {index + 1}
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {step.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>

                    </div>

                  </div>

                </motion.div>

              ))}

            </div>

          </div>

        </section>


        <section className="py-24 bg-white">

          <div className="container mx-auto px-6">

            <div className="text-center mb-16">

              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full mb-4">

                <Heart className="w-4 h-4 text-amber-600" />

                <span className="text-amber-700 text-sm font-semibold uppercase tracking-wider">
                  Got Questions?
                </span>

              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>

            </div>

            <div className="max-w-3xl mx-auto space-y-4">

              {faqs.map((faq, index) => (

                <div
                  key={index}
                  className="rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-lg"
                >

                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left"
                  >

                    <span className="text-lg font-semibold text-gray-800 pr-4">
                      {faq.question}
                    </span>

                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${openFaq === index ? "rotate-180" : ""
                        }`}
                    />

                  </button>

                  {openFaq === index && (

                    <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>

                  )}

                </div>

              ))}

            </div>

          </div>

        </section>

        <section className="relative py-24 overflow-hidden bg-gradient-to-r from-amber-600 to-orange-600">

          <div className="container mx-auto px-6 relative z-10">

            <div className="text-center max-w-4xl mx-auto">

              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">

                <Sparkles className="w-4 h-4 text-white" />

                <span className="text-white text-sm font-semibold uppercase tracking-wider">
                  Let's Create Something Amazing
                </span>

              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Ready to Transform Your Space?
              </h2>

              <p className="text-xl text-amber-100 mb-10 max-w-2xl mx-auto">
                Get in touch with our experts for a free consultation and let's
                bring your vision to life.
              </p>

              <Link
                to={ctaLink}
                className="inline-flex items-center bg-white text-amber-600 px-10 py-4 rounded-full text-lg font-semibold shadow-xl"
              >
                Book Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>

            </div>

          </div>

        </section>

      </div>
    </>
  );
};

export default ServiceTemplate;