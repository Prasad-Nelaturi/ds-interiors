import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Sparkles,
  Users,
  Phone,
  ArrowRight,
  Check,
  Home,
  Building,
  Palette,
  Crown,
  Ruler,
  MapPin,
  ChevronRight,
} from "lucide-react";
import { useConsultation } from "./context/ConsultationContext";

const ConsultationModal = () => {
  const {
    showConsultationModal,
    closeConsultation,
    step,
    formData,
    formErrors,
    isSubmitting,
    handleNameChange,
    handleContactChange,
    handleStep1Submit,
    handleFinalSubmit,
    setServiceType,
    setBudget,
    setLocation,
    goToStep1,
  } = useConsultation();

  if (!showConsultationModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-3xl max-w-3xl shadow-2xl overflow-hidden"
      >
        {/* Modal Header */}
        <div className="relative bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-5">
          <button
            onClick={closeConsultation}
            className="absolute right-4 top-4 text-white/80 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-bold text-xl">
                Free Consultation
              </h3>
              <p className="text-white/80 text-sm">Step {step} of 2</p>
            </div>
          </div>
          <div className="flex gap-1 mt-4">
            <div
              className={`h-1 flex-1 rounded-full transition-all duration-300 ${step >= 1 ? "bg-white" : "bg-white/30"}`}
            />
            <div
              className={`h-1 flex-1 rounded-full transition-all duration-300 ${step >= 2 ? "bg-white" : "bg-white/30"}`}
            />
          </div>
        </div>

        {/* Step 1 - Basic Info */}
        {step === 1 && (
          <form onSubmit={handleStep1Submit} className="p-6">
            <div className="space-y-5">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Full Name <span className="text-orange-500">*</span>
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleNameChange(e.target.value)}
                    className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-200 ${
                      formErrors.name
                        ? "border-red-400 focus:border-red-400 focus:ring-red-200"
                        : formData.name
                          ? "border-green-400 focus:border-green-400 focus:ring-green-200"
                          : "border-gray-200 focus:border-orange-400 focus:ring-orange-200"
                    }`}
                    placeholder="Enter your full name"
                    required
                  />
                  {formData.name && !formErrors.name && (
                    <Check className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
                  )}
                </div>
                {formErrors.name && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <X className="w-3 h-3" />
                    {formErrors.name}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Contact Number <span className="text-orange-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    value={formData.contact}
                    onChange={(e) => handleContactChange(e.target.value)}
                    className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-200 ${
                      formErrors.contact
                        ? "border-red-400 focus:border-red-400 focus:ring-red-200"
                        : formData.contact && !formErrors.contact
                          ? "border-green-400 focus:border-green-400 focus:ring-green-200"
                          : "border-gray-200 focus:border-orange-400 focus:ring-orange-200"
                    }`}
                    placeholder="98765 43210"
                    required
                  />
                  {formData.contact && !formErrors.contact && (
                    <Check className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
                  )}
                </div>
                <p className="text-xs text-gray-400 mt-1 flex items-center gap-2">
                  <span>📱 Valid formats: 9876543210 | +91 98765 43210</span>
                </p>
                {formErrors.contact && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <X className="w-3 h-3" />
                    {formErrors.contact}
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={
                !formData.name ||
                !formData.contact ||
                formErrors.name ||
                formErrors.contact
              }
              className={`w-full mt-8 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                !formData.name ||
                !formData.contact ||
                formErrors.name ||
                formErrors.contact
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:scale-[1.02]"
              }`}
            >
              Continue
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        {/* Step 2 - Project Details */}
        {step === 2 && (
          <div className="p-6">
            <div className="space-y-5">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Service Type
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    {
                      value: "Residential Design",
                      icon: <Home className="w-4 h-4" />,
                    },
                    {
                      value: "Commercial Space",
                      icon: <Building className="w-4 h-4" />,
                    },
                    {
                      value: "Interior Styling",
                      icon: <Palette className="w-4 h-4" />,
                    },
                    {
                      value: "Luxury Villa",
                      icon: <Crown className="w-4 h-4" />,
                    },
                    {
                      value: "Space Planning",
                      icon: <Ruler className="w-4 h-4" />,
                    },
                    {
                      value: "3D Visualization",
                      icon: <Sparkles className="w-4 h-4" />,
                    },
                  ].map((service) => (
                    <button
                      key={service.value}
                      type="button"
                      onClick={() => setServiceType(service.value)}
                      className={`flex items-center justify-center gap-2 py-2 px-3 rounded-xl border transition-all duration-200 text-sm ${
                        formData.serviceType === service.value
                          ? "border-orange-500 bg-orange-50 text-orange-600"
                          : "border-gray-200 hover:border-orange-300 text-gray-600"
                      }`}
                    >
                      {service.icon}
                      <span className="text-xs">{service.value}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Budget Range
                </label>
                <div className="grid grid-cols-4 gap-3">
                  {["₹ 5L - 10L", "₹ 10L - 20L", "₹ 20L - 30L", "₹ 30L - 40L"].map(
                    (budget) => (
                      <button
                        key={budget}
                        type="button"
                        onClick={() => setBudget(budget)}
                        className={`py-2 px-3 rounded-xl border transition-all duration-200 text-sm ${
                          formData.budget === budget
                            ? "border-orange-500 bg-orange-50 text-orange-600"
                            : "border-gray-200 hover:border-orange-300 text-gray-600"
                        }`}
                      >
                        {budget}
                      </button>
                    ),
                  )}
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Location / City
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200 transition"
                    placeholder="e.g., Hyderabad, Mumbai, Delhi"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              <button
                onClick={goToStep1}
                className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition"
              >
                Back
              </button>
              <button
                onClick={handleFinalSubmit}
                disabled={
                  isSubmitting ||
                  !formData.serviceType ||
                  !formData.budget ||
                  !formData.location
                }
                className={`flex-1 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                  isSubmitting ||
                  !formData.serviceType ||
                  !formData.budget ||
                  !formData.location
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:scale-[1.02]"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Phone className="w-4 h-4" />
                    Send to WhatsApp
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ConsultationModal;
