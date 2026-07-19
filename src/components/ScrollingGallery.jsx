import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HeroCarousel = () => {

    const slides = [
        {
            title: "Modern Luxury Living",
            subtitle: "Where contemporary design meets timeless elegance",
            image: "/sl4.jpg",
            mobileImage: "https://w0.peakpx.com/wallpaper/69/500/HD-wallpaper-interior-design-929-home-luxury-modern-morning-pretty-room-theme-upscale-view.jpg",
        },
        {
            title: "Minimalist Kitchen",
            subtitle: "Clean lines · Smart living",
            image: "/sl2.jpg",
            mobileImage: "https://img.magnific.com/premium-photo/dining-table-kitchen-room-with-cartoon-style-3d-rendering_772449-24762.jpg?semt=ais_hybrid&w=740&q=80",
        },
        {
            title: "Luxury Bedroom",
            subtitle: "Serenity · Comfort · Style",
            image: "/sl3.jpg",
            mobileImage: "https://oltdesign.ae/wp-content/uploads/sites/3/2025/07/bold-and-elegant-black-bedroom-designs-and-ideas-oltdesign_79596_black_and_white_luxury_bedroom_black_bed_frame_29fc7f0a-scaled-1.jpg",
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [loadedCount, setLoadedCount] = useState(0);
    const [glassVisible, setGlassVisible] = useState(false);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [direction, setDirection] = useState(1); // 1 for next, -1 for prev

    const autoTimerRef = useRef(null);
    const totalSlides = slides.length;

    // ===== WINDOW RESIZE LISTENER =====
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // ===== AUTO-PLAY =====
    const startAutoPlay = useCallback(() => {
        clearTimeout(autoTimerRef.current);
        if (isAutoPlaying && isLoaded) {
            autoTimerRef.current = setTimeout(() => {
                setDirection(1);
                setCurrentIndex((prev) => (prev + 1) % totalSlides);
            }, 5000);
        }
    }, [isAutoPlaying, isLoaded, totalSlides]);

    useEffect(() => {
        startAutoPlay();
        return () => clearTimeout(autoTimerRef.current);
    }, [currentIndex, startAutoPlay]);

    // ===== LOAD IMAGES =====
    useEffect(() => {
        let loaded = 0;
        slides.forEach((slide) => {
            const img = new Image();
            const imageUrl = windowWidth < 768 && slide.mobileImage ? slide.mobileImage : slide.image;
            img.src = imageUrl;
            img.onload = () => {
                loaded++;
                setLoadedCount(loaded);
                if (loaded === slides.length) {
                    setIsLoaded(true);
                    setTimeout(() => setGlassVisible(true), 300);
                }
            };
            img.onerror = () => {
                loaded++;
                setLoadedCount(loaded);
                if (loaded === slides.length) {
                    setIsLoaded(true);
                    setTimeout(() => setGlassVisible(true), 300);
                }
            };
        });
    }, [slides, windowWidth]);

    // ===== NAVIGATION =====
    const nextSlide = () => {
        if (isLoaded) {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % totalSlides);
            clearTimeout(autoTimerRef.current);
            startAutoPlay();
        }
    };

    const prevSlide = () => {
        if (isLoaded) {
            setDirection(-1);
            setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
            clearTimeout(autoTimerRef.current);
            startAutoPlay();
        }
    };

    const goToSlide = (index) => {
        if (isLoaded && index !== currentIndex) {
            setDirection(index > currentIndex ? 1 : -1);
            setCurrentIndex(index);
            clearTimeout(autoTimerRef.current);
            startAutoPlay();
        }
    };

    // ===== TOGGLE AUTO-PLAY =====
    const toggleAutoPlay = () => {
        setIsAutoPlaying(!isAutoPlaying);
        if (!isAutoPlaying) {
            clearTimeout(autoTimerRef.current);
            startAutoPlay();
        } else {
            clearTimeout(autoTimerRef.current);
        }
    };

    // ===== KEYBOARD NAVIGATION =====
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "ArrowRight") nextSlide();
            if (e.key === "ArrowLeft") prevSlide();
            if (e.key === " ") {
                e.preventDefault();
                toggleAutoPlay();
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);

    const currentSlide = slides[currentIndex];
    const isMobile = windowWidth < 768;

    const getImageUrl = (slide) => {
        if (isMobile && slide.mobileImage) {
            return slide.mobileImage;
        }
        return slide.image;
    };

    // Slide variants for animation
    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0,
            scale: 0.95,
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1],
            }
        },
        exit: (direction) => ({
            x: direction > 0 ? '-30%' : '30%',
            opacity: 0,
            scale: 0.95,
            transition: {
                duration: 0.6,
                ease: [0.76, 0, 0.24, 1],
            }
        })
    };

    // Content variants for animation
    const contentVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 60 : -60,
            opacity: 0,
            y: 20,
        }),
        center: {
            x: 0,
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                delay: 0.2,
                ease: [0.76, 0, 0.24, 1],
            }
        },
        exit: (direction) => ({
            x: direction > 0 ? -40 : 40,
            opacity: 0,
            y: -10,
            transition: {
                duration: 0.5,
                ease: [0.76, 0, 0.24, 1],
            }
        })
    };

    // Glass panel variants
    const glassVariants = {
        hidden: {
            y: '100%',
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.9,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
            }
        }
    };

    return (
        <div className="relative w-full h-screen overflow-hidden bg-[#0a0a0a] font-['DM_Sans',sans-serif]">

            {/* ===== LOAD BAR ===== */}
            <div
                className="absolute top-0 left-0 h-0.5 z-[9000] bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-300"
                style={{
                    width: `${(loadedCount / totalSlides) * 100}%`,
                    opacity: loadedCount === totalSlides ? 0 : 1
                }}
            />

            {/* ===== SLIDER LAYER WITH SLIDING ANIMATION ===== */}
            <div className="absolute inset-0 z-[1] overflow-hidden">
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="absolute inset-0"
                    >
                        <div className="absolute inset-0 w-full h-full">
                            <img
                                src={getImageUrl(currentSlide)}
                                alt={currentSlide.title}
                                className="w-full h-full object-cover object-center"
                                style={{
                                    objectPosition: isMobile ? 'center 30%' : 'center',
                                }}
                            />
                        </div>
                        {/* Gradient Overlay for better text visibility */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />

                        {/* Subtle zoom effect overlay */}
                        <motion.div
                            className="absolute inset-0"
                            initial={{ scale: 1.1 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 8, ease: "easeOut" }}
                        />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* ===== CONTENT WITH SLIDING ANIMATION ===== */}
            <div className={`absolute inset-0 z-[2] flex flex-col justify-end pb-[180px] sm:pb-[200px] md:pb-[220px] px-6 sm:px-8 md:px-12 lg:px-20`}>
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={`content-${currentIndex}`}
                        custom={direction}
                        variants={contentVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="max-w-4xl"
                    >


                        {/* Title */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-2 sm:mb-3">
                            {currentSlide.title}
                        </h1>

                        {/* Subtitle */}
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/60 font-light mb-1 sm:mb-2">
                            {currentSlide.subtitle}
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* ===== GLASS PANEL WITH SLIDING ANIMATION ===== */}
            <motion.div
                className={`absolute bottom-0 left-0 right-0 z-20 h-[40px] sm:h-[60px] md:h-[80px] 
rounded-[30%_70%_0_0/5%_7%_0_0] overflow-hidden`}
                variants={glassVariants}
                initial="hidden"
                animate={glassVisible ? "visible" : "hidden"}
            >
                {/* Blur Background */}
                <div className="absolute inset-0 backdrop-blur-[30px] saturate-[1.5] brightness-[0.8]" />

                {/* Tint */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-white/3 to-white/5" />

                {/* Glow */}
                <div className="absolute top-[-60%] left-[-20%] right-[-20%] h-[80%] rounded-full bg-radial from-white/5 to-transparent pointer-events-none" />

                {/* Content - Slide Counter & Dots */}
                <div className="relative z-[2] h-full flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-20">
                    {/* Slide Counter */}
                    <div className="flex items-center gap-2 sm:gap-3">
                        <span className="text-xl sm:text-2xl md:text-3xl font-light text-white/60 font-['Fraunces',serif]">
                            {String(currentIndex + 1).padStart(2, '0')}
                        </span>
                        <span className="text-xs sm:text-sm text-white/20 font-light">
                            / {String(totalSlides).padStart(2, '0')}
                        </span>
                    </div>

                    {/* Dots */}
                    <div className="flex gap-1.5 sm:gap-2">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`transition-all duration-500 rounded-full ${index === currentIndex
                                    ? 'w-6 sm:w-8 h-1.5 bg-white'
                                    : 'w-1.5 sm:w-2 h-1.5 bg-white/20 hover:bg-white/40'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Auto-Play Toggle */}
                    <button
                        onClick={toggleAutoPlay}
                        className="text-white/40 hover:text-white/80 transition-all duration-300 text-xs sm:text-sm font-light"
                    >
                        {isAutoPlaying ? '⏸' : '▶'}
                    </button>
                </div>
            </motion.div>

            {/* ===== NAVIGATION ARROWS ===== */}
            <motion.button
                className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-[300] p-2 sm:p-3 bg-white/5 hover:bg-white/15 backdrop-blur-sm rounded-full border border-white/10 hover:border-white/20 transition-all duration-300 group"
                onClick={prevSlide}
                aria-label="Previous slide"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white/60 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                </svg>
            </motion.button>

            <motion.button
                className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-[300] p-2 sm:p-3 bg-white/5 hover:bg-white/15 backdrop-blur-sm rounded-full border border-white/10 hover:border-white/20 transition-all duration-300 group"
                onClick={nextSlide}
                aria-label="Next slide"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white/60 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
            </motion.button>

            {/* ===== PROGRESS INDICATOR BAR ===== */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 z-[700] bg-white/5">
                <motion.div
                    className="h-full bg-gradient-to-r from-amber-400 to-amber-600"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 5, ease: "linear" }}
                    key={currentIndex}
                />
            </div>
        </div>
    );
};

export default HeroCarousel;