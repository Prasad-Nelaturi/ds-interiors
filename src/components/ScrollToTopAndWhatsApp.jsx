import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
    MessageCircle,
    ArrowUp,
    X,
    Send,
    Phone,
    Clock,
    Sparkles,
} from "lucide-react";

const ScrollToTopAndWhatsApp = () => {
    const { pathname } = useLocation();

    const [showScroll, setShowScroll] = useState(false);
    const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
    const [showTooltip, setShowTooltip] = useState(true);

    const phoneNumber = "919010989991";

    const message =
        "Hello! I'm interested in your interior design services. Can you help me?";

    useEffect(() => {
        if (pathname.startsWith("/project/")) {
            return;
        }

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        });
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setShowScroll(window.scrollY > 400);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowTooltip(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const openWhatsApp = () => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            message,
        )}`;

        window.open(url, "_blank");

        setIsWhatsAppOpen(false);
    };

    const quickReplies = [
        {
            label: "🏠 Home Interiors",
            msg: "Hi! I need a free consultation for my home interiors.",
        },
        {
            label: "🏢 Commercial",
            msg: "Hi! I'm interested in commercial interior design for my office.",
        },
        {
            label: "📋 Get Quote",
            msg: "Hi! I need a quote for my interior design project.",
        },
        {
            label: "🎨 Luxury Villa",
            msg: "Hi! I'm interested in luxury villa interior design.",
        },
    ];

    return (
        <>
            <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-3">
                {showScroll && (
                    <button
                        onClick={scrollToTop}
                        className="
            fixed
            bottom-4
            left-4
            sm:bottom-6
            sm:left-6
            z-50
            group
            flex
            items-center
            justify-center
            w-12
            h-12
            sm:w-14
            sm:h-14
            bg-gradient-to-br
            from-amber-500
            to-orange-500
            rounded-full
            shadow-xl
            hover:shadow-amber-500/40
            transition-all
            duration-300
            hover:scale-105
        "
                        aria-label="Scroll to top"
                    >
                        <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6 text-white relative z-10" />

                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 bg-gray-900/95 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap shadow-lg pointer-events-none">
                            Back to Top
                        </div>
                    </button>
                )}

                <div className="relative group">
                    {isWhatsAppOpen && (
                        <div
                            className="
                                fixed
                                bottom-20
                                left-1/2
                                -translate-x-1/2
                                w-[calc(100vw-24px)]
                                max-w-[340px]

                                sm:absolute
                                sm:bottom-20
                                sm:left-auto
                                sm:right-0
                                sm:translate-x-0
                                sm:w-[340px]

                                bg-white
                                rounded-2xl
                                shadow-2xl
                                border
                                border-gray-100
                                overflow-hidden
                                animate-slide-up
                                z-[60]
                            "
                        >
                            <div className="relative bg-gradient-to-r from-green-600 to-emerald-600 px-4 py-4">
                                <div className="flex items-center gap-3">
                                    {/* Avatar */}
                                    <div className="relative shrink-0">
                                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                                            <MessageCircle className="w-5 h-5 text-white" />
                                        </div>

                                        <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-white animate-pulse" />
                                    </div>

                                    {/* Text */}
                                    <div className="flex-1 min-w-0">
                                        <h4 className="text-white font-bold text-sm">
                                            Dsigner Studio
                                        </h4>

                                        <p className="text-green-100 text-[10px] flex items-center gap-1 leading-tight">
                                            <span className="w-1.5 h-1.5 bg-green-300 rounded-full animate-pulse shrink-0" />
                                            Online • Usually replies in minutes
                                        </p>
                                    </div>

                                    {/* Close */}
                                    <button
                                        onClick={() => setIsWhatsAppOpen(false)}
                                        className="text-white/70 hover:text-white p-1.5 hover:bg-white/10 rounded-full transition-colors"
                                        aria-label="Close WhatsApp chat"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </div>

                                {/* Decorative circles */}
                                <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full blur-2xl pointer-events-none" />

                                <div className="absolute bottom-0 left-0 w-14 h-14 bg-white/5 rounded-full blur-xl pointer-events-none" />
                            </div>

                            <div className="p-4">
                                {/* Welcome message */}
                                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-3.5 mb-3 border border-gray-100">
                                    <p className="text-gray-700 text-xs leading-relaxed">
                                        👋 Hi there! Welcome to{" "}
                                        <strong className="text-amber-600">
                                            Dsigner Studio Interiors
                                        </strong>
                                        .
                                    </p>

                                    <p className="text-gray-600 text-xs mt-1.5 leading-relaxed">
                                        How can we help you today? Choose an option below or chat
                                        with us directly.
                                    </p>

                                    <div className="flex items-center gap-2 mt-2.5 pt-2.5 border-t border-gray-300">
                                        <Clock className="w-3.5 h-3.5 text-green-500 shrink-0" />

                                        <span className="text-[10px] text-gray-500">
                                            Response time: Less than 2 minutes
                                        </span>
                                    </div>
                                </div>

                                {/* ===================================== */}
                                {/* QUICK REPLIES                         */}
                                {/* ===================================== */}
                                <div className="grid grid-cols-2 gap-1.5 mb-3">
                                    {quickReplies.map((reply, index) => (
                                        <button
                                            key={index}
                                            onClick={() => {
                                                const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                                                    reply.msg,
                                                )}`;

                                                window.open(url, "_blank");

                                                setIsWhatsAppOpen(false);
                                            }}
                                            className="
                                                text-[10px]
                                                sm:text-xs
                                                bg-gray-50
                                                hover:bg-green-50
                                                text-gray-700
                                                hover:text-green-700
                                                px-2
                                                py-2
                                                rounded-lg
                                                border
                                                border-gray-200
                                                hover:border-green-300
                                                transition-all
                                                duration-200
                                                text-center
                                                font-medium
                                            "
                                        >
                                            {reply.label}
                                        </button>
                                    ))}
                                </div>

                                {/* ===================================== */}
                                {/* MAIN WHATSAPP BUTTON                  */}
                                {/* ===================================== */}
                                <button
                                    onClick={openWhatsApp}
                                    className="
                                        w-full
                                        bg-gradient-to-r
                                        from-green-500
                                        to-emerald-500
                                        text-white
                                        py-2.5
                                        rounded-xl
                                        font-semibold
                                        flex
                                        items-center
                                        justify-center
                                        gap-2
                                        hover:shadow-lg
                                        hover:shadow-green-500/25
                                        transition-all
                                        duration-300
                                        text-xs
                                        group/chat
                                    "
                                >
                                    <MessageCircle className="w-4 h-4 group-hover/chat:scale-110 transition-transform" />
                                    Chat on WhatsApp
                                    <Send className="w-3.5 h-3.5 group-hover/chat:translate-x-1 transition-transform" />
                                </button>

                                {/* ===================================== */}
                                {/* PHONE NUMBER                          */}
                                {/* ===================================== */}
                                <div className="flex items-center justify-center gap-1.5 mt-2.5">
                                    <Phone className="w-3 h-3 text-gray-400" />

                                    <span className="text-[10px] text-gray-400">
                                        Or call us at
                                    </span>

                                    <a
                                        href="tel:+919010989991"
                                        className="text-[10px] font-semibold text-green-600 hover:text-green-700 transition-colors"
                                    >
                                        +91 90109 89991
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}

                    <button
                        onClick={() => setIsWhatsAppOpen(!isWhatsAppOpen)}
                        onMouseEnter={() => setShowTooltip(true)}
                        className="
                            relative
                            flex
                            items-center
                            justify-center
                            w-12
                            h-12
                            sm:w-14
                            sm:h-14
                            bg-gradient-to-br
                            from-green-500
                            to-emerald-500
                            rounded-full
                            shadow-xl
                            hover:shadow-green-500/40
                            transition-all
                            duration-300
                            hover:scale-105
                        "
                        aria-label="Chat on WhatsApp"
                    >
                        {/* Ping */}
                        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />

                        {/* Glow */}
                        <div className="absolute inset-0 rounded-full bg-green-400 blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300" />

                        {/* Inner */}
                        <div className="absolute inset-1 rounded-full bg-gradient-to-br from-green-400/20 to-emerald-400/20" />

                        {/* Icon */}
                        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white relative z-10 drop-shadow-lg" />

                        {/* Notification */}
                        <span className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-[9px] sm:text-[10px] font-bold shadow-lg ring-2 ring-white animate-pulse">
                            1
                        </span>

                        {/* Tooltip */}
                        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900/95 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap shadow-xl pointer-events-none">
                            <span className="flex items-center gap-1.5">
                                <MessageCircle className="w-3 h-3 text-green-400" />
                                Chat with us
                            </span>

                            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1.5 w-2 h-2 bg-gray-900 rotate-45" />
                        </div>
                    </button>

                    <div className="absolute top-full right-0 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                        <span className="text-[9px] sm:text-[10px] text-gray-500 font-medium bg-white/95 backdrop-blur px-2.5 py-1.5 rounded-full shadow-md border border-gray-100 flex items-center gap-1 whitespace-nowrap">
                            <Phone className="w-2.5 h-2.5 text-green-500" />
                            +91 90109 89991
                        </span>
                    </div>
                </div>
            </div>

            {/* ========================================================= */}
            {/* CSS ANIMATIONS                                            */}
            {/* ========================================================= */}
            <style jsx>{`
                @keyframes slide-up {
                    0% {
                        opacity: 0;
                        transform: translateY(20px) scale(0.96);
                    }

                    100% {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }

                .animate-slide-up {
                    animation: slide-up 0.3s ease-out forwards;
                }

                @keyframes pulse-ring {
                    0% {
                        transform: scale(1);
                        opacity: 0.8;
                    }

                    100% {
                        transform: scale(1.8);
                        opacity: 0;
                    }
                }

                .animate-pulse-ring {
                    animation: pulse-ring 1.5s ease-out infinite;
                }

                @media (max-width: 640px) {
                    .animate-slide-up {
                        animation: slide-up-mobile 0.3s ease-out forwards;
                    }

                    @keyframes slide-up-mobile {
                        0% {
                            opacity: 0;
                            transform: translate(-50%, 20px) scale(0.96);
                        }

                        100% {
                            opacity: 1;
                            transform: translate(-50%, 0) scale(1);
                        }
                    }
                }
            `}</style>
        </>
    );
};

export default ScrollToTopAndWhatsApp;
