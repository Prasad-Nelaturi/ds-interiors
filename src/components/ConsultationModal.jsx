import React from "react";
import { motion } from "framer-motion";
import {
  X,
  Phone,
  Mail,
  MapPin,
  Copy,
  Check,
  Clock,
  ExternalLink,
} from "lucide-react";
import { useConsultation } from "./context/ConsultationContext";

const ConsultationModal = () => {
  const { showConsultationModal, closeConsultation } = useConsultation();
  const [copiedField, setCopiedField] = React.useState(null);
  const [showEmailOptions, setShowEmailOptions] = React.useState(false);

  const companyInfo = {
    phone: "+91 90109 89991",
    email: "dsinteriorshyd1@gmail.com",
    address: "Door No 1-31/1, Raja Ram Enclave, Kondapur, Hyderabad-500084",
    hours: "Mon - Sat: 9AM - 7PM",
  };

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  // Method 1: Direct mailto (works on most devices)
  const openEmailClient = () => {
    window.location.href = `mailto:${companyInfo.email}?subject=Inquiry%20from%20Website&body=Hello%20DS%20Interiors,%0A%0AI%20would%20like%20to%20inquire%20about...`;
  };

  // Method 2: Gmail web
  const openGmail = () => {
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${companyInfo.email}&su=Inquiry%20from%20Website&body=Hello%20DS%20Interiors,%0A%0AI%20would%20like%20to%20inquire%20about...`,
      "_blank",
    );
    setShowEmailOptions(false);
    closeConsultation();
  };

  // Method 3: Outlook web
  const openOutlook = () => {
    window.open(
      `https://outlook.live.com/mail/0/deeplink/compose?to=${companyInfo.email}&subject=Inquiry%20from%20Website&body=Hello%20DS%20Interiors,%0A%0AI%20would%20like%20to%20inquire%20about...`,
      "_blank",
    );
    setShowEmailOptions(false);
    closeConsultation();
  };

  // Method 4: Yahoo Mail
  const openYahooMail = () => {
    window.open(
      `https://compose.mail.yahoo.com/?to=${companyInfo.email}&subject=Inquiry%20from%20Website&body=Hello%20DS%20Interiors,%0A%0AI%20would%20like%20to%20inquire%20about...`,
      "_blank",
    );
    setShowEmailOptions(false);
    closeConsultation();
  };

  const handleEmailClick = () => {
    setShowEmailOptions(true);
  };

  if (!showConsultationModal) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white rounded-2xl max-w-md w-full shadow-xl overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3 bg-gradient-to-r from-orange-500 to-amber-500">
            <h3 className="text-white font-semibold text-base">Contact Us</h3>
            <button
              onClick={closeConsultation}
              className="text-white/80 hover:text-white transition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Content */}
          <div className="p-5 space-y-3">
            {/* Phone */}
            <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 text-orange-500" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Phone</p>
                  <a
                    href={`tel:${companyInfo.phone}`}
                    className="text-gray-800 text-sm font-medium hover:text-orange-600"
                  >
                    {companyInfo.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(companyInfo.phone, "phone")}
                className="p-1"
              >
                {copiedField === "phone" ? (
                  <Check className="w-3.5 h-3.5 text-green-500" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-gray-400 hover:text-orange-500" />
                )}
              </button>
            </div>

            {/* Email - Shows options on click */}
            <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 text-orange-500" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Email</p>
                  <button
                    onClick={handleEmailClick}
                    className="text-gray-800 text-sm font-medium hover:text-orange-600 text-left flex items-center gap-1"
                  >
                    {companyInfo.email}
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(companyInfo.email, "email")}
                className="p-1"
              >
                {copiedField === "email" ? (
                  <Check className="w-3.5 h-3.5 text-green-500" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-gray-400 hover:text-orange-500" />
                )}
              </button>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition">
              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 h-4 text-orange-500" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-400">Address</p>
                <p className="text-gray-700 text-xs leading-relaxed">
                  {companyInfo.address}
                </p>
                <div className="flex items-center gap-1 mt-1">
                  <Clock className="w-3 h-3 text-gray-400" />
                  <span className="text-gray-400 text-xs">
                    {companyInfo.hours}
                  </span>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(companyInfo.address, "address")}
                className="p-1 mt-1"
              >
                {copiedField === "address" ? (
                  <Check className="w-3.5 h-3.5 text-green-500" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-gray-400 hover:text-orange-500" />
                )}
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-2 p-5 pt-0">
            <a
              href={`tel:${companyInfo.phone}`}
              className="flex-1 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-lg text-sm font-medium text-center hover:opacity-90 transition"
            >
              Call Now
            </a>
            <button
              onClick={handleEmailClick}
              className="flex-1 py-2 border border-orange-500 text-orange-600 rounded-lg text-sm font-medium text-center hover:bg-orange-50 transition"
            >
              Send Email
            </button>
          </div>
        </motion.div>
      </div>

      {/* Email Options Modal */}
      {showEmailOptions && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-2xl max-w-sm w-full shadow-xl overflow-hidden"
          >
            <div className="px-5 py-4 border-b border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900">
                Choose Email App
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Select how you want to send email
              </p>
            </div>

            <div className="p-3 space-y-2">
              {/* Default Email Client */}
              <button
                onClick={() => {
                  openEmailClient();
                  setShowEmailOptions(false);
                  closeConsultation();
                }}
                className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition group"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1 text-left">
                  <p className="font-medium text-gray-800">Default Email App</p>
                  <p className="text-xs text-gray-400">
                    Outlook, Thunderbird, Apple Mail
                  </p>
                </div>
              </button>

              {/* Gmail */}
              <button
                onClick={openGmail}
                className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition group"
              >
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-red-600"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <div className="flex-1 text-left">
                  <p className="font-medium text-gray-800">Gmail</p>
                  <p className="text-xs text-gray-400">Open in web browser</p>
                </div>
              </button>

              {/* Outlook */}
              <button
                onClick={openOutlook}
                className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition group"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 7h10v2H7zm0 4h10v2H7zm0 4h7v2H7z" />
                  </svg>
                </div>
                <div className="flex-1 text-left">
                  <p className="font-medium text-gray-800">Outlook</p>
                  <p className="text-xs text-gray-400">Open in web browser</p>
                </div>
              </button>

              {/* Yahoo Mail */}
              <button
                onClick={openYahooMail}
                className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition group"
              >
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-purple-600"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M22 6.5L16 14.5L22 22.5L16 22.5L12 17.5L8 22.5L2 22.5L8 14.5L2 6.5L8 6.5L12 11.5L16 6.5Z" />
                  </svg>
                </div>
                <div className="flex-1 text-left">
                  <p className="font-medium text-gray-800">Yahoo Mail</p>
                  <p className="text-xs text-gray-400">Open in web browser</p>
                </div>
              </button>
            </div>

            <div className="p-4 pt-2">
              <button
                onClick={() => setShowEmailOptions(false)}
                className="w-full py-2 bg-red-100 border border-red-300 text-red-600 rounded-xl text-sm font-medium hover:bg-red-200 transition"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default ConsultationModal;
