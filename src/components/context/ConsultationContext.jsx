import React, { createContext, useState, useContext } from "react";

const ConsultationContext = createContext();

export const useConsultation = () => {
  const context = useContext(ConsultationContext);
  if (!context) {
    throw new Error("useConsultation must be used within ConsultationProvider");
  }
  return context;
};

export const ConsultationProvider = ({ children }) => {
  const [showConsultationModal, setShowConsultationModal] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    serviceType: "",
    budget: "",
    location: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    contact: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const openConsultation = () => {
    setShowConsultationModal(true);
    setStep(1);
    setFormData({
      name: "",
      contact: "",
      serviceType: "",
      budget: "",
      location: "",
    });
    setFormErrors({ name: "", contact: "" });
  };

  const closeConsultation = () => {
    setShowConsultationModal(false);
    setStep(1);
    setFormData({
      name: "",
      contact: "",
      serviceType: "",
      budget: "",
      location: "",
    });
    setFormErrors({ name: "", contact: "" });
    setIsSubmitting(false);
  };

  const validateName = (name) => {
    if (!name.trim()) return "Name is required";
    if (name.length < 2) return "Name must be at least 2 characters";
    if (!/^[a-zA-Z\s\-']+$/.test(name))
      return "Name should only contain letters";
    return "";
  };

  const validateContact = (contact) => {
    const cleanContact = contact.replace(/\D/g, "");

    if (!contact.trim()) return "Contact number is required";

    if (cleanContact.length === 10) {
      if (/^[6-9]\d{9}$/.test(cleanContact)) {
        return "";
      }
      return "Enter a valid Indian mobile number (starts with 6-9)";
    }

    if (cleanContact.length === 12 && cleanContact.startsWith("91")) {
      const mobilePart = cleanContact.slice(2);
      if (/^[6-9]\d{9}$/.test(mobilePart)) {
        return "";
      }
      return "Enter a valid mobile number after +91";
    }

    if (cleanContact.length === 11 && cleanContact.startsWith("0")) {
      const mobilePart = cleanContact.slice(1);
      if (/^[6-9]\d{9}$/.test(mobilePart)) {
        return "";
      }
      return "Enter a valid mobile number";
    }

    return "Enter a valid 10-digit mobile number";
  };

  const handleNameChange = (name) => {
    setFormData({ ...formData, name });
    setFormErrors({ ...formErrors, name: validateName(name) });
  };

  const handleContactChange = (contact) => {
    const digitsOnly = contact.replace(/\D/g, "");
    let limitedDigits = digitsOnly;

    if (!contact.includes("+") && digitsOnly.length > 10) {
      limitedDigits = digitsOnly.slice(0, 10);
    } else if (contact.includes("+") && digitsOnly.length > 12) {
      limitedDigits = digitsOnly.slice(0, 12);
    }

    let displayValue = limitedDigits;
    if (limitedDigits.length === 12 && limitedDigits.startsWith("91")) {
      displayValue = `+91 ${limitedDigits.slice(2, 7)} ${limitedDigits.slice(7)}`;
    } else if (limitedDigits.length >= 6) {
      displayValue = `${limitedDigits.slice(0, 5)} ${limitedDigits.slice(5)}`;
    }

    setFormData({ ...formData, contact: displayValue });
    setFormErrors({ ...formErrors, contact: validateContact(displayValue) });
  };

  const handleStep1Submit = (e) => {
    e.preventDefault();
    const nameError = validateName(formData.name);
    const contactError = validateContact(formData.contact);

    if (!nameError && !contactError && formData.name && formData.contact) {
      setStep(2);
    } else {
      setFormErrors({
        name: nameError,
        contact: contactError,
      });
    }
  };

  const handleFinalSubmit = async () => {
    setIsSubmitting(true);

    const message = `🏠 *DS INTERIORS - NEW CONSULTATION REQUEST* 🏠
    
━━━━━━━━━━━━━━━━━━━━━━
📋 *CUSTOMER DETAILS*
━━━━━━━━━━━━━━━━━━━━━━
👤 *Name:* ${formData.name}
📞 *Contact:* ${formData.contact}
📍 *Location:* ${formData.location}

━━━━━━━━━━━━━━━━━━━━━━
📐 *PROJECT DETAILS*
━━━━━━━━━━━━━━━━━━━━━━
🏷️ *Service Type:* ${formData.serviceType}
💰 *Budget Range:* ${formData.budget}

━━━━━━━━━━━━━━━━━━━━━━
⏰ *Requested:* ${new Date().toLocaleString()}
━━━━━━━━━━━━━━━━━━━━━━

_*This is an automated consultation request from website*_`;

    const whatsappUrl = `https://wa.me/919010799991?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    setTimeout(() => {
      setIsSubmitting(false);
      closeConsultation();
    }, 1000);
  };

  const setServiceType = (type) => {
    setFormData({ ...formData, serviceType: type });
  };

  const setBudget = (budget) => {
    setFormData({ ...formData, budget });
  };

  const setLocation = (location) => {
    setFormData({ ...formData, location });
  };

  const goToStep1 = () => setStep(1);

  return (
    <ConsultationContext.Provider
      value={{
        showConsultationModal,
        openConsultation,
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
        validateName,
        validateContact,
      }}
    >
      {children}
    </ConsultationContext.Provider>
  );
};
