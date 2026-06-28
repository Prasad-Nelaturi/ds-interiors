import React from "react";
import {
  Shield,
  Lock,
  Cookie,
  Share2,
  Database,
  UserCheck,
  ExternalLink,
  RefreshCw,
  Mail,
  Phone,
  MapPin,
  Globe,
  ChevronRight,
  CheckCircle,
  Sparkles,
} from "lucide-react";

const PrivacyPolicy = ({
  privacyRef,
  contactRef,
  scrollToSection = () => {},
}) => {
  const policySections = [
    {
      icon: <Database className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Information We Collect",
      content:
        "We may collect your name, email address, phone number, address, project requirements, and any other information you voluntarily provide through forms or inquiries.",
      category: "DATA",
    },
    {
      icon: <UserCheck className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "How We Use Information",
      content:
        "We use your information to respond to inquiries, prepare quotations, deliver services, improve our website, send updates, and comply with legal obligations.",
      category: "USAGE",
    },
    {
      icon: <Cookie className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Cookies",
      content:
        "Our website may use cookies and similar technologies to understand visitor interactions, enhance functionality, and provide a smoother browsing experience.",
      category: "TECHNOLOGY",
    },
    {
      icon: <Share2 className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Information Sharing",
      content:
        "We use your personal information solely for business-related purposes and do not sell, lease, or rent it to third parties.",
      category: "PRIVACY",
    },
    {
      icon: <Lock className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Data Security",
      content:
        "We use reasonable security measures to protect your information against unauthorized access, disclosure, or misuse.",
      category: "SECURITY",
    },
    {
      icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Your Rights",
      content:
        "You may contact us at any time to review, update, correct, or request the removal of your personal information, subject to applicable legal requirements.",
      category: "RIGHTS",
    },
    {
      icon: <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Third-Party Websites",
      content:
        "We do not control or assume responsibility for the privacy policies, security measures, or content of any third-party websites linked from our website.",
      category: "EXTERNAL",
    },
    {
      icon: <RefreshCw className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Policy Updates",
      content:
        "This Privacy Policy may be updated periodically. Changes will be posted on this page.",
      category: "UPDATES",
    },
  ];

  const contactInfo = [
    {
      icon: <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />,
      label: "Address",
      value: "Hyderabad, Telangana, India",
    },
    {
      icon: <Phone className="w-4 h-4 sm:w-5 sm:h-5" />,
      label: "Phone",
      value: "+91 90107 99991",
      link: "tel:+919010799991",
    },
    {
      icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5" />,
      label: "Email",
      value: "dsignerstudiointeriors@gmail.com",
      link: "mailto:dsignerstudiointeriors@gmail.com",
    },
    {
      icon: <Globe className="w-4 h-4 sm:w-5 sm:h-5" />,
      label: "Website",
      value: "www.dsignerstudiointeriors.com",
      link: "https://www.dsignerstudiointeriors.com",
    },
  ];
  
  // Color mapping for different categories
  const getCategoryColors = (category) => {
    const colors = {
      DATA: {
        bg: "bg-blue-50",
        text: "text-blue-600",
        border: "border-blue-200",
        gradient: "from-blue-500 to-cyan-500",
      },
      USAGE: {
        bg: "bg-green-50",
        text: "text-green-600",
        border: "border-green-200",
        gradient: "from-green-500 to-emerald-500",
      },
      TECHNOLOGY: {
        bg: "bg-purple-50",
        text: "text-purple-600",
        border: "border-purple-200",
        gradient: "from-purple-500 to-pink-500",
      },
      PRIVACY: {
        bg: "bg-orange-50",
        text: "text-orange-600",
        border: "border-orange-200",
        gradient: "from-orange-500 to-amber-500",
      },
      SECURITY: {
        bg: "bg-red-50",
        text: "text-red-600",
        border: "border-red-200",
        gradient: "from-red-500 to-rose-500",
      },
      RIGHTS: {
        bg: "bg-indigo-50",
        text: "text-indigo-600",
        border: "border-indigo-200",
        gradient: "from-indigo-500 to-purple-500",
      },
      EXTERNAL: {
        bg: "bg-teal-50",
        text: "text-teal-600",
        border: "border-teal-200",
        gradient: "from-teal-500 to-cyan-500",
      },
      UPDATES: {
        bg: "bg-yellow-50",
        text: "text-yellow-600",
        border: "border-yellow-200",
        gradient: "from-yellow-500 to-orange-500",
      },
    };
    return colors[category] || colors["DATA"];
  };

  return (
    <section
      ref={privacyRef}
      className="py-8 sm:py-10 md:py-12 bg-gradient-to-br from-slate-50 via-white to-orange-50 relative overflow-hidden"
    >
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-48 sm:w-56 md:w-72 h-48 sm:h-56 md:h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-48 sm:w-56 md:w-72 h-48 sm:h-56 md:h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-48 sm:w-56 md:w-72 h-48 sm:h-56 md:h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="pt-14 container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-50 to-orange-50 rounded-full px-3 sm:px-5 py-1.5 sm:py-2 mb-4 sm:mb-6 shadow-md border border-orange-100">
            <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-orange-600" />
            <span className="text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wide">
              Privacy & Security
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">
            Privacy{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Policy
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            At Dsigner Studio Interiors, we value your privacy and are committed
            to protecting your personal information.
          </p>
          <div className="mt-4 sm:mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
              Last Updated: December 2024
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
              Effective Immediately
            </span>
          </div>
        </div>

        {/* Policy Sections Grid - 3 columns like services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {policySections.map((section, idx) => {
            const colors = getCategoryColors(section.category);
            return (
              <div
                key={idx}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <div className="bg-white rounded-[30px] p-5 sm:p-6 md:p-8 shadow-2xl hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 h-full">
                  <div className="flex flex-col items-start">
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${colors.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-3 sm:mb-4`}
                    >
                      <div className={colors.text}>{section.icon}</div>
                    </div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1.5 sm:mb-2 group-hover:text-orange-600 transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Information */}
        <div className="mt-12 sm:mt-16 md:mt-20 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
            <div className="text-center mb-6 sm:mb-8">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-50 to-amber-50 rounded-full px-3 sm:px-5 py-1.5 sm:py-2 mb-3 sm:mb-4 shadow-md border border-orange-100">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500" />
                <span className="text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wide">
                  Get in Touch
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                Have Questions?
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mt-1 sm:mt-2">
                Contact us anytime about our privacy policy
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {contactInfo.map((info, idx) => (
                <div
                  key={idx}
                  className="group bg-gradient-to-br from-slate-50 to-orange-50 rounded-xl p-4 sm:p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center text-orange-600 group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                        {info.label}
                      </p>
                      {info.link ? (
                        <a
                          href={info.link}
                          target={info.label === "Website" ? "_blank" : "_self"}
                          rel="noopener noreferrer"
                          className="text-sm sm:text-base text-gray-800 hover:text-orange-600 transition-colors font-medium break-words"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm sm:text-base text-gray-800 font-medium break-words">
                          {info.value}
                        </p>
                      )}
                    </div>
                    {info.link && (
                      <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 sm:mt-10 text-center">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-gray-500 bg-white/80 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-sm border border-gray-200">
            <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" />
            <span>
              Your privacy matters to us. We're committed to protecting your
              data.
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(20px, -30px) scale(1.05); }
          66% { transform: translate(-15px, 15px) scale(0.95); }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default PrivacyPolicy;
