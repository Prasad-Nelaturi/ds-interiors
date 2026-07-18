import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HeroCarousel = () => {

    const slides = [
        {
            title: "Modern Luxury Living",
            subtitle: "Contemporary elegance meets comfort",
            date: "2012",
            tags: [{ t: "Luxury", hi: true }, { t: "Modern" }, { t: "Residential" }],
            image: "https://i.pinimg.com/736x/9c/e6/5c/9ce65c5fbde0a8c016addef2b76634ed.jpg",
        },
        {
            title: "Minimalist Kitchen",
            subtitle: "Clean lines · Smart living",
            date: "2012",
            tags: [{ t: "Minimalist", hi: true }, { t: "Kitchen" }, { t: "Modern" }],
            image: "https://hips.hearstapps.com/hmg-prod/images/edc-web-tour-delia-kenza-3-copy-1658771574.jpg",
        },
        {
            title: "Luxury Bedroom",
            subtitle: "Serenity · Comfort · Style",
            date: "2012",
            tags: [{ t: "Luxury", hi: true }, { t: "Bedroom" }, { t: "Serene" }],
            image: "https://oltdesign.ae/wp-content/uploads/sites/3/2025/07/bold-and-elegant-black-bedroom-designs-and-ideas-oltdesign_79596_black_and_white_luxury_bedroom_black_bed_frame_29fc7f0a-scaled-1.jpg",
        },
        {
            title: "Elegant Living Room",
            subtitle: "Sophisticated · Spacious · Bright",
            date: "2012",
            tags: [{ t: "Contemporary", hi: true }, { t: "Living Room" }, { t: "Elegant" }],
            image: "https://www.decorilla.com/online-decorating/wp-content/uploads/2022/06/Sophisticated-black-and-white-living-room-before-after-by-Decorilla.jpg",
        },
        {
            title: "Modern Bathroom",
            subtitle: "Spa · Minimal · Pure",
            date: "2012",
            tags: [{ t: "Spa", hi: true }, { t: "Bathroom" }, { t: "Minimal" }],
            image: "https://fancyhouse-design.com/wp-content/uploads/2024/05/This-charcoal-and-white-lavatory-featuring-dual-sinks-and-geometric-tile-backsplash.jpg",
        },
        {
            title: "Home Office",
            subtitle: "Productive · Stylish · Modern",
            date: "2012",
            tags: [{ t: "Office", hi: true }, { t: "Modern" }, { t: "Productive" }],
            image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?fit=crop&w=1900&q=88",
        },
        {
            title: "Dining Room",
            subtitle: "Elegant · Warm · Inviting",
            date: "2012",
            tags: [{ t: "Luxury", hi: true }, { t: "Dining" }, { t: "Elegant" }],
            image: "https://images.squarespace-cdn.com/content/v1/63dde481bbabc6724d988548/0e8f6d72-bd0e-4d50-9fe3-cfa8f000ede1/2.jfif",
        },
        {
            title: "Entryway Design",
            subtitle: "Welcome · Style · First Impressions",
            date: "2012",
            tags: [{ t: "Modern", hi: true }, { t: "Entryway" }, { t: "Luxury" }],
            image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?fit=crop&w=1900&q=88",
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isBusy, setIsBusy] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [loadedCount, setLoadedCount] = useState(0);
    const [glassVisible, setGlassVisible] = useState(false);
    const [progress, setProgress] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true); // Auto-play state

    const autoTimerRef = useRef(null);
    const totalSlides = slides.length;

    const startAutoPlay = useCallback(() => {
        clearTimeout(autoTimerRef.current);
        if (isAutoPlaying) {
            autoTimerRef.current = setTimeout(() => {
                goToSlide((currentIndex + 1) % totalSlides);
            }, 100);
        }
    }, [currentIndex, totalSlides, isAutoPlaying]);

    useEffect(() => {
        if (!isBusy && totalSlides > 0 && isLoaded) {
            startAutoPlay();
        }
        return () => clearTimeout(autoTimerRef.current);
    }, [currentIndex, isBusy, startAutoPlay, totalSlides, isLoaded]);

    useEffect(() => {
        let loaded = 0;
        slides.forEach((slide) => {
            const img = new Image();
            img.src = slide.image;
            img.onload = () => {
                loaded++;
                setLoadedCount(loaded);
                if (loaded === slides.length) {
                    setIsLoaded(true);
                    setTimeout(() => setGlassVisible(true), 150);
                }
            };
            img.onerror = () => {
                loaded++;
                setLoadedCount(loaded);
                if (loaded === slides.length) {
                    setIsLoaded(true);
                    setTimeout(() => setGlassVisible(true), 150);
                }
            };
        });
    }, [slides]);

    // ===== NAVIGATION =====
    const goToSlide = (to) => {
        if (isBusy || to === currentIndex || !isLoaded) return;
        setIsBusy(true);
        clearTimeout(autoTimerRef.current);

        setCurrentIndex(to);
        setProgress(((to + 1) / totalSlides) * 100);

        setTimeout(() => {
            setIsBusy(false);
        }, 800);
    };

    const nextSlide = () => {
        if (!isBusy) goToSlide((currentIndex + 1) % totalSlides);
    };

    const prevSlide = () => {
        if (!isBusy) goToSlide((currentIndex - 1 + totalSlides) % totalSlides);
    };

    // ===== TOGGLE AUTO-PLAY =====
    const toggleAutoPlay = () => {
        setIsAutoPlaying(!isAutoPlaying);
        clearTimeout(autoTimerRef.current);
    };

    // ===== KEYBOARD NAVIGATION =====
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "ArrowRight") nextSlide();
            if (e.key === "ArrowLeft") prevSlide();
            if (e.key === " ") { // Space bar to toggle auto-play
                e.preventDefault();
                toggleAutoPlay();
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [currentIndex, isBusy]);

    const currentSlide = slides[currentIndex];

    return (
        <div className="relative w-full h-screen overflow-hidden bg-[#0a0a0a] font-['DM_Sans',sans-serif]">

            {/* ===== LOAD BAR ===== */}
            <div
                className="absolute top-0 left-0 h-0.5 z-[9000] bg-white/30 pointer-events-none transition-all duration-300"
                style={{
                    width: `${(loadedCount / totalSlides) * 100}%`,
                    opacity: loadedCount === totalSlides ? 0 : 1
                }}
            />

            {/* ===== SLIDER LAYER ===== */}
            <div className="absolute inset-0 z-[1] overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        className="absolute inset-0"
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
                    >
                        <div className="absolute inset-0 w-full h-full">
                            <img
                                src={currentSlide.image}
                                alt={currentSlide.title}
                                className="w-full h-full object-cover object-center"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    objectPosition: 'center'
                                }}
                            />
                        </div>
                        {/* Dark overlay for better text visibility */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10" />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* ===== AMBIENT TEXT LAYER ===== */}
            <div className="absolute inset-0 z-[2] pointer-events-none">
                {/* Wordmark */}
                <div className="absolute top-[5vh] left-[5vw] text-[10px] font-light tracking-[0.42em] uppercase text-white/30">
                    interiors
                </div>

                {/* Slide Counter */}
                <div className="absolute top-[5vh] right-[5vw] text-right">
                    <div className="font-['Fraunces',serif] font-light italic text-[clamp(32px,5vw,72px)] leading-none text-white/15 tracking-[-0.02em]">
                        {String(currentIndex + 1).padStart(2, '0')}
                    </div>
                    <div className="text-[10px] font-light tracking-[0.2em] text-white/20 mt-[-4px]">
                        / {String(totalSlides).padStart(2, '0')}
                    </div>
                </div>

                {/* Subtitle - bottom left */}
                <div className="absolute left-[5vw] bottom-[calc(20vh+30px)]">
                    <div className="font-['Fraunces',serif] font-light italic text-[clamp(14px,1.5vw,22px)] text-white/20 leading-none tracking-[-0.02em]">
                        {currentSlide.subtitle}
                    </div>
                </div>
            </div>

            {/* ===== GLASS PANEL ===== */}
            <div
                className={`absolute bottom-0 left-0 right-0 z-20 h-[16vh] sm:h-[17vh] md:h-[18vh] lg:h-[19vh] xl:h-[20vh]
min-h-[110px] max-h-[190px] rounded-[30%_70%_0_0/5%_7%_0_0] overflow-hidden transition-all duration-800 ${glassVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                    }`}
                style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
                {/* Blur Background */}
                <div className="absolute inset-0 backdrop-blur-[40px] saturate-[1.8] brightness-[0.85]" />

                {/* Tint */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/12 via-white/6 to-white/6" />

                {/* Glow */}
                <div className="absolute top-[-80%] left-[-20%] right-[-20%] h-[90%] rounded-full bg-radial from-white/12 to-transparent pointer-events-none" />

                {/* Content */}
                <div className="relative z-[2] h-full grid grid-cols-1 md:grid-cols-[1fr_auto] grid-rows-[1fr_auto] p-[clamp(16px,2.8vh,32px)_clamp(16px,3.5vw,44px)_clamp(12px,2.2vh,24px)] items-end">

                    {/* Title */}
                    <motion.div
                        key={`title-${currentIndex}`}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.25, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="col-span-1 md:col-span-2 row-start-1 self-end font-['Fraunces',serif] font-black italic text-[clamp(36px,7.5vw,110px)] leading-[0.85] tracking-[-0.04em] text-white whitespace-nowrap"
                        style={{
                            textShadow: '0 2px 24px rgba(0,0,0,0.15)',
                        }}
                    >
                        {currentSlide.title}
                    </motion.div>

                    {/* Tags */}
                    <motion.div
                        key={`tags-${currentIndex}`}
                        initial={{ y: 12, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.35, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="col-start-1 row-start-2 flex flex-wrap gap-1.5 items-center"
                    >
                        {currentSlide.tags.map((tag, i) => (
                            <span
                                key={i}
                                className={`text-[8px] font-normal tracking-[0.2em] uppercase px-2.5 py-0.5 rounded-full border transition-all duration-300 ${tag.hi
                                    ? 'bg-white/20 text-white border-white/35'
                                    : 'bg-white/5 text-white/40 border-white/12'
                                    }`}
                            >
                                {tag.t}
                            </span>
                        ))}
                    </motion.div>

                    {/* Meta */}
                    <motion.div
                        key={`meta-${currentIndex}`}
                        initial={{ y: 12, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="col-start-1 md:col-start-2 row-start-2 text-right"
                    >
                        <div className="font-['Fraunces',serif] font-light italic text-[clamp(16px,2vw,28px)] text-white/70 leading-none">
                            {currentSlide.date}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* ===== NAVIGATION CONTROLS ===== */}
            <button
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-[300] p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all duration-300 group"
                onClick={prevSlide}
                aria-label="Previous slide"
            >
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-[300] p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all duration-300 group"
                onClick={nextSlide}
                aria-label="Next slide"
            >
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* ===== AUTO-PLAY TOGGLE ===== */}
            <button
                className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[300] px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-white/60 hover:text-white text-xs font-medium transition-all duration-300"
                onClick={toggleAutoPlay}
            >
                {isAutoPlaying ? '⏸ Pause' : '▶ Play'}
            </button>

            {/* ===== PROGRESS BAR ===== */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 z-[700] bg-white/5">
                <div
                    className="h-full bg-white/40 transition-all duration-500"
                    style={{
                        width: `${progress || ((currentIndex + 1) / totalSlides) * 100}%`,
                        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                />
            </div>

            {/* ===== DOTS NAVIGATION ===== */}
            <div className="absolute right-[2.2vw] top-1/2 -translate-y-1/2 z-[700] flex flex-col gap-2.5">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`transition-all duration-300 ${index === currentIndex
                            ? 'w-0.5 h-[16px] rounded-[2px] bg-white/60'
                            : 'w-0.5 h-0.5 rounded-full bg-white/20'
                            }`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroCarousel;