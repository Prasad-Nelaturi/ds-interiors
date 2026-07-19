import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HeroCarousel = () => {

    const slides = [
        {
            image: "/sl1.jpg",
            mobileImage: "/m-sl1.jpg",
        },
        {
            image: "/sl2.jpg",
            mobileImage: "/m-sl2.jpg",
        },
        {
            image: "/sl3.jpg",
            mobileImage: "/m-sl3.jpg",
        }
    ];

    const slogan = "Design Without Limits";

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [loadedCount, setLoadedCount] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [direction, setDirection] = useState(1);

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
                }
            };
            img.onerror = () => {
                loaded++;
                setLoadedCount(loaded);
                if (loaded === slides.length) {
                    setIsLoaded(true);
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
            x: direction > 0 ? "100%" : "-100%",
            scale: 1.05,
        }),

        center: {
            x: "0%",
            scale: 1,
            transition: {
                x: {
                    duration: 1,
                    ease: [0.65, 0, 0.35, 1],
                },
                scale: {
                    duration: 1.2,
                    ease: "easeOut",
                },
            },
        },

        exit: (direction) => ({
            x: direction > 0 ? "-20%" : "20%",
            scale: 1.05,
            transition: {
                x: {
                    duration: 1,
                    ease: [0.65, 0, 0.35, 1],
                },
            },
        }),
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
            <div className="absolute inset-0 z-[1] overflow-hidden bg-black">
                <AnimatePresence initial={false} mode="popLayout">
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
                                className="w-full h-full object-cover object-center will-change-transform"
                                style={{
                                    objectPosition: isMobile ? 'center 30%' : 'center 50%',
                                }}
                            />
                        </div>

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
            <div className="absolute inset-0 z-[2] flex items-center justify-center px-6 sm:px-8 md:px-12 lg:px-20 text-center">
                <AnimatePresence mode="popLayout" custom={direction}>
                    <motion.div
                        key={`content-${currentIndex}`}
                        custom={direction}
                        variants={contentVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="max-w-6xl mx-auto"
                    >

                        <p className="hero-slogan">
                            {slogan}
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>

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