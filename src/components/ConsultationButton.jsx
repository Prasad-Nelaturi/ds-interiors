import React from "react";
import { ArrowRight, Phone } from "lucide-react";
import { useConsultation } from "./context/ConsultationContext";

const ConsultationButton = ({
  variant = "primary",
  size = "default",
  className = "",
  children = "Get Free Consultation",
  icon = true,
  fullWidth = false,
}) => {
  const { openConsultation } = useConsultation();

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3",
    lg: "px-8 py-4 text-lg",
  };

  const variantClasses = {
    primary:
      "bg-white text-gray-900 hover:bg-gradient-to-r from-amber-400 to-orange-500 hover:text-white shadow-xl",
    secondary:
      "bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:shadow-xl hover:scale-[1.02]",
    outline: "border-2 border-white text-white hover:bg-white/10",
    whatsapp:
      "bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:shadow-xl hover:scale-[1.02]",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      onClick={openConsultation}
      className={`group rounded-full transition-all duration-300 flex items-center justify-center gap-2 font-semibold ${sizeClasses[size]} ${variantClasses[variant]} ${widthClass} ${className}`}
    >
      {variant === "whatsapp" && <Phone className="w-4 h-4" />}
      <span>{children}</span>
      {icon && variant !== "whatsapp" && (
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
      )}
    </button>
  );
};

export default ConsultationButton;
