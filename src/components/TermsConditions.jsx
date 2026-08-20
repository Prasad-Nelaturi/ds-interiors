import React from "react";
import {
  Shield,
  Lock,
  FileText,
  Scale,
  Clock,
  ExternalLink,
  AlertTriangle,
  RefreshCw,
  Mail,
  Phone,
  MapPin,
  Globe,
  ChevronRight,
  CheckCircle,
  Sparkles,
  Building2,
  Palette,
  TrendingUp,
  Edit,
  Gavel,
  AlertCircle,
} from "lucide-react";

const TermsConditions = ({ termsRef }) => {
  const termsSections = [
    {
      icon: Building2,
      title: "About Us",
      content:
        "Dsigner Studio Interiors is an interior design and turnkey interior solutions company based in Door No 1-31/1, Raja Ram Enclave, Kondapur, Hyderabad-500084. We provide residential and commercial interior design, modular kitchens, wardrobes, false ceilings, space planning, renovation, and related services.",
    },
    {
      icon: Globe,
      title: "Website Usage",
      content:
        "You agree to use this website only for lawful purposes. You must not violate laws, gain unauthorized access, upload malicious software, or copy content without permission.",
    },
    {
      icon: Shield,
      title: "Intellectual Property",
      content:
        "All logos, images, designs, graphics, videos, text, and website content are the property of Dsigner Studio Interiors unless otherwise stated and are protected by applicable intellectual property laws.",
    },
    {
      icon: Palette,
      title: "Design Images & Portfolio",
      content:
        "Portfolio images are for reference only. Actual outcomes may vary depending on site conditions, materials, client preferences, budget, lighting, and construction limitations.",
    },
    {
      icon: TrendingUp,
      title: "Quotations & Pricing",
      content:
        "Quotations are subject to site inspection and may change based on material costs, taxes, and labor charges.",
    },
    {
      icon: Clock,
      title: "Project Timelines",
      content:
        "Timelines depend on project scope, approvals, material availability, and site readiness. Delays beyond our control may occur.",
    },
    {
      icon: Lock,
      title: "Payments",
      content:
        "Payment terms are specified in the quotation or agreement. Projects typically require advance and milestone-based payments.",
    },
    {
      icon: ExternalLink,
      title: "Third-Party Links",
      content:
        "Certain sections of our website may include references or links to independent third-party websites. These links are provided solely as an additional resource for visitors.",
    },
    {
      icon: AlertTriangle,
      title: "Limitation of Liability",
      content:
        "We are not liable for damages arising from website use, technical issues, or inaccurate information.",
    },
    {
      icon: Edit,
      title: "Accuracy of Information",
      content:
        "We strive to keep information accurate but reserve the right to update content without notice.",
    },
    {
      icon: FileText,
      title: "Privacy",
      content: "Use of this website is also governed by our Privacy Policy.",
    },
    {
      icon: RefreshCw,
      title: "Cancellation & Refund",
      content:
        "Cancellation and refund terms are governed by the signed project agreement. Advances may be non-refundable once work has commenced.",
    },
    {
      icon: Gavel,
      title: "Governing Law",
      content:
        "These Terms are governed by the laws of India. Disputes are subject to the courts of Hyderabad, Telangana.",
    },
    {
      icon: AlertCircle,
      title: "Changes to Terms",
      content:
        "Dsigner Studio Interiors reserves the right to update these Terms & Conditions from time to time to reflect changes in our services, operational practices, or applicable legal requirements.",
    },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      label: "Address",
      value: "Door No 1-31/1, Raja Ram Enclave, Kondapur, Hyderabad-500084",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 90107 99991",
      link: "tel:+919010799991",
    },
    {
      icon: Mail,
      label: "Email",
      value: "dsinteriorshyd1@gmail.com",
      link: "mailto:dsinteriorshyd1@gmail.com",
    },
    {
      icon: Globe,
      label: "Website",
      value: "www.dsignerstudiointeriors.com",
      link: "https://www.dsignerstudiointeriors.com",
    },
  ];

  return (
    <section
      ref={termsRef}
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-slate-50 via-white to-orange-50/30 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-5 py-2.5 mb-6 shadow-lg border border-orange-100/50">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center">
              <Scale className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
              Legal Agreement
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Terms &{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Conditions
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Please read these terms and conditions carefully before using our
            website and services.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span>
              Last Updated: December 2024
            </span>
            <span className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              Effective Immediately
            </span>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {termsSections.map((section, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100/50 hover:border-orange-200/50 h-full relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center text-white shadow-lg shadow-orange-200 mb-4 group-hover:scale-110 transition-transform duration-300">
                <section.icon className="w-6 h-6" />
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                {section.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {section.content}
              </p>

              <div className="absolute -bottom-8 -right-8 w-20 h-20 rounded-full bg-gradient-to-br from-orange-100/30 to-amber-100/30 blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-16 md:mt-20 max-w-5xl mx-auto">
          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100/50 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-100/30 to-amber-100/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-yellow-100/20 to-orange-100/20 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-50 to-amber-50 rounded-full px-5 py-2.5 mb-4 shadow-md border border-orange-100/50">
                  <Sparkles className="w-5 h-5 text-orange-500" />
                  <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    Get in Touch
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Have Questions About Our Terms?
                </h3>
                <p className="text-gray-600 mt-2">
                  Reach out to us anytime for clarification
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((info, idx) => (
                  <div
                    key={idx}
                    className="group bg-gradient-to-br from-slate-50 to-orange-50/50 rounded-2xl p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100/50 hover:border-orange-200/50"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center text-orange-600 group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                          {info.label}
                        </p>
                        {info.link ? (
                          <a
                            href={info.link}
                            target={info.label === "Website" ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            className="text-sm text-gray-800 hover:text-orange-600 transition-colors font-medium break-words"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-sm text-gray-800 font-medium break-words">
                            {info.value}
                          </p>
                        )}
                      </div>
                      {info.link && (
                        <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-md border border-gray-100/50 hover:shadow-lg transition-all duration-300">
            <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
            <span className="text-sm text-gray-600">
              By using our website, you agree to these Terms & Conditions.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsConditions;