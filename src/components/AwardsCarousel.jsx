import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AwardsCarousel = () => {

    const slides = [
        {
            id: 1,
            title: "Appreciation Certificate",
            category: "Recognition & Appreciation",
            year: "2023",
            image: "/award5.jpeg",
        },
        {
            id: 2,
            title: "India Design Award",
            category: "National Design Excellence",
            year: "2012",
            image: "/award2.jpg",
        },
        {
            id: 3,
            title: "India Design Award",
            category: "Interior Design Achievement",
            year: "2012",
            image: "/award3.jpg",
        },
        {
            id: 4,
            title: "Brandz Magazine",
            category: "Featured Brand Recognition",
            year: "2024",
            image: "/award4.jpg",
        },
        {
            id: 5,
            title: "Telangana Business Award",
            category: "Business Leadership Excellence",
            year: "2023",
            image: "/award6.jpeg",
        },
        {
            id: 6,
            title: "AATCOC Member Certificate",
            category: "Professional Membership",
            year: "2023",
            image: "/award7.jpeg",
        },
        {
            id: 7,
            title: "Business Excellence Awards",
            category: "Corporate Excellence Award",
            year: "2026",
            image: "/award8.JPG",
        },
        {
            id: 8,
            title: "Business Excellence Awards",
            category: "Outstanding Business Performance",
            year: "2026",
            image: "/award9.JPG",
        },
        {
            id: 9,
            title: "Business Excellence Awards",
            category: "Innovation & Excellence",
            year: "2026",
            image: "/award10.JPG",
        },
        {
            id: 10,
            title: "Business Excellence Awards",
            category: "Industry Excellence Recognition",
            year: "2026",
            image: "/award11.JPG",
        },
        {
            id: 11,
            title: "Business Excellence Awards",
            category: "Excellence in Business Leadership",
            year: "2023",
            image: "/award12.jpeg",
        },
    ];

    const totalSlides = slides.length;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [dragOffset, setDragOffset] = useState(0);
    const [startX, setStartX] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const stageRef = useRef(null);
    const timerRef = useRef(null);

    // Smooth slide transition with 3D effect
    const getSlideStyle = useCallback((index) => {
        let diff = index - currentIndex;
        // Normalize diff for circular navigation
        if (diff > totalSlides / 2) diff -= totalSlides;
        if (diff < -totalSlides / 2) diff += totalSlides;

        const absDiff = Math.abs(diff);
        const isActive = diff === 0;

        // Smooth slide animation with easing
        const translateX = diff * 60;
        const scale = 1 - absDiff * 0.12;
        const opacity = Math.max(0.3, 1 - absDiff * 0.3);
        const zIndex = 100 - absDiff;

        return {
            transform: `
                translate(-50%, -50%)
                translateX(${translateX}%)
                scale(${Math.max(0.7, scale)})
            `,
            opacity: isActive ? 1 : opacity,
            zIndex: isActive ? 200 : zIndex,
            isActive,
            diff
        };
    }, [currentIndex, totalSlides]);

    const goToSlide = useCallback((index) => {
        const next = ((index % totalSlides) + totalSlides) % totalSlides;
        setCurrentIndex(next);
        setDragOffset(0);
    }, [totalSlides]);

    const nextSlide = useCallback(() => {
        goToSlide(currentIndex + 1);
    }, [currentIndex, goToSlide]);

    const prevSlide = useCallback(() => {
        goToSlide(currentIndex - 1);
    }, [currentIndex, goToSlide]);

    const startAutoPlay = useCallback(() => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
        if (isAutoPlaying) {
            timerRef.current = setInterval(() => {
                nextSlide();
            }, 3000);
        }
    }, [isAutoPlaying, nextSlide]);

    const stopAutoPlay = useCallback(() => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
    }, []);

    // Auto-play management
    useEffect(() => {
        startAutoPlay();
        return () => {
            stopAutoPlay();
        };
    }, [startAutoPlay, stopAutoPlay]);

    const handlePointerDown = (e) => {
        setIsDragging(true);
        setStartX(e.clientX || e.touches?.[0]?.clientX || 0);
        stopAutoPlay();
    };

    const handlePointerMove = (e) => {
        if (!isDragging) return;
        const currentX = e.clientX || e.touches?.[0]?.clientX || 0;
        const distance = (currentX - startX) / 200;
        setDragOffset(Math.max(-1, Math.min(1, distance)));
    };

    const handlePointerUp = () => {
        if (!isDragging) return;
        setIsDragging(false);

        if (dragOffset > 0.3) {
            prevSlide();
        } else if (dragOffset < -0.3) {
            nextSlide();
        }

        setDragOffset(0);
        startAutoPlay();
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "ArrowRight") {
                e.preventDefault();
                nextSlide();
            } else if (e.key === "ArrowLeft") {
                e.preventDefault();
                prevSlide();
            } else if (e.key === " ") {
                e.preventDefault();
                setIsAutoPlaying(!isAutoPlaying);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [nextSlide, prevSlide, isAutoPlaying]);

    const toggleAutoPlay = useCallback(() => {
        setIsAutoPlaying((prev) => {
            const newState = !prev;
            if (newState) {
                startAutoPlay();
            } else {
                stopAutoPlay();
            }
            return newState;
        });
    }, [startAutoPlay, stopAutoPlay]);

    return (
        <section className="relative w-full overflow-hidden bg-[#080808] py-10">
            {/* Luxury Glow Effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#c8a45d22,transparent_55%)]" />

            {/* Animated Gold Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-[#d4af37]/30 rounded-full"
                        initial={{
                            x: Math.random() * 100 + "%",
                            y: Math.random() * 100 + "%",
                        }}
                        animate={{
                            y: [null, -10, 10, -5, 5, 0],
                            x: [null, 5, -5, 3, -3, 0],
                            opacity: [0.1, 0.5, 0.1],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            <div className="relative max-w-[1200px] mx-auto px-5 text-center">
                {/* HEADER with modern animation */}
                <motion.header
                    className="mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-lg uppercase tracking-[0.45em] text-[#d4af37] font-light">
                        Awards & Recognition
                    </p>

                    <h1 className="mt-4 text-white font-serif text-[clamp(2.2rem,6vw,4rem)] leading-tight">
                        Celebrating Excellence
                    </h1>

                    <p className="mt-3 text-gray-400 max-w-2xl mx-auto text-sm font-light tracking-wide">
                        Honoured with prestigious awards for creativity, craftsmanship and
                        exceptional design.
                    </p>
                </motion.header>

                {/* CAROUSEL AREA with smooth 3D effect */}
                <div
                    ref={stageRef}
                    className="relative h-[clamp(320px,65vw,520px)]"
                    style={{ perspective: "1200px" }}
                    onMouseEnter={stopAutoPlay}
                    onMouseLeave={startAutoPlay}
                >
                    <div
                        className="absolute inset-0"
                        style={{
                            transformStyle: "preserve-3d",
                            cursor: isDragging ? "grabbing" : "grab",
                            touchAction: "pan-y",
                        }}
                        onPointerDown={handlePointerDown}
                        onPointerMove={handlePointerMove}
                        onPointerUp={handlePointerUp}
                        onPointerCancel={handlePointerUp}
                    >
                        <AnimatePresence mode="sync">
                            {slides.map((slide, index) => {
                                const style = getSlideStyle(index);
                                return (
                                    <motion.article
                                        key={slide.id}
                                        className="absolute top-1/2 left-1/2 overflow-hidden rounded-[28px] bg-black select-none border-2 border-white/10"
                                        style={{
                                            width: "clamp(200px,55vw,340px)",
                                            height: "clamp(280px,70vw,460px)",
                                            transform: style.transform,
                                            opacity: style.opacity,
                                            zIndex: style.zIndex,
                                            boxShadow: style.isActive
                                                ? "0 40px 100px rgba(212,175,55,0.15), 0 20px 60px rgba(0,0,0,0.8)"
                                                : "0 20px 60px rgba(0,0,0,0.5)",
                                        }}
                                        initial={false}
                                        animate={{
                                            transform: style.transform,
                                            opacity: style.opacity,
                                        }}
                                        transition={{
                                            duration: 0.8,
                                            ease: [0.22, 0.61, 0.36, 1],
                                        }}
                                    >
                                        {/* Image with smooth zoom effect */}
                                        <motion.img
                                            src={slide.image}
                                            alt={slide.title}
                                            className="w-full h-full object-cover"
                                            animate={{
                                                scale: style.isActive ? 1 : 1.05,
                                            }}
                                            transition={{
                                                duration: 0.8,
                                                ease: [0.22, 0.61, 0.36, 1],
                                            }}
                                        />

                                        {/* Gradient Overlay with gold tint */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                                        {/* Gold border glow on active */}
                                        {style.isActive && (
                                            <motion.div
                                                className="absolute inset-0 rounded-[28px] border-4 border-[#d4af37]/40"
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.6 }}
                                            />
                                        )}

                                        {/* Content */}
                                        <motion.div
                                            className="absolute bottom-0 left-0 right-0 p-6 text-left"
                                            initial={!style.isActive ? { opacity: 0, y: 20 } : false}
                                            animate={style.isActive ? { opacity: 1, y: 0 } : { opacity: 0.3, y: 10 }}
                                            transition={{
                                                duration: 0.6,
                                                delay: style.isActive ? 0.2 : 0,
                                                ease: [0.22, 0.61, 0.36, 1],
                                            }}
                                        >
                                            <span className="text-[#d4af37] text-xs tracking-[0.3em] uppercase font-light">
                                                {slide.year}
                                            </span>

                                            <h2 className="mt-2 text-white font-serif text-xl leading-tight">
                                                {slide.title}
                                            </h2>

                                            <p className="mt-1 text-gray-300 text-sm font-light">
                                                {slide.category}
                                            </p>

                                            {/* Animated underline */}
                                            {style.isActive && (
                                                <motion.div
                                                    className="mt-3 h-0.5 w-12 bg-[#d4af37]"
                                                    initial={{ width: 0 }}
                                                    animate={{ width: 48 }}
                                                    transition={{ duration: 0.8, delay: 0.4 }}
                                                />
                                            )}
                                        </motion.div>
                                    </motion.article>
                                );
                            })}
                        </AnimatePresence>
                    </div>
                </div>

                {/* CONTROLS with modern design */}
                <div className="flex items-center justify-center gap-5 mt-6 flex-wrap">
                    <motion.button
                        onClick={prevSlide}
                        className="w-12 h-12 rounded-full border border-white/20 text-white text-2xl hover:border-[#d4af37] transition-all hover:bg-[#d4af37]/10 hover:scale-110"
                        aria-label="Previous slide"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        ‹
                    </motion.button>

                    <div className="flex gap-3 items-center">
                        {slides.map((_, i) => (
                            <motion.button
                                key={i}
                                onClick={() => goToSlide(i)}
                                className={`rounded-full transition-all ${i === currentIndex
                                    ? "bg-[#d4af37] w-8 h-1.5"
                                    : "bg-white/30 hover:bg-white/50 w-1.5 h-1.5"
                                    }`}
                                aria-label={`Go to slide ${i + 1}`}
                                whileHover={{ scale: i === currentIndex ? 1 : 1.5 }}
                            />
                        ))}
                    </div>

                    <motion.button
                        onClick={nextSlide}
                        className="w-12 h-12 rounded-full border border-white/20 text-white text-2xl hover:border-[#d4af37] transition-all hover:bg-[#d4af37]/10 hover:scale-110"
                        aria-label="Next slide"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        ›
                    </motion.button>

                    <motion.button
                        onClick={toggleAutoPlay}
                        className="w-12 h-12 rounded-full border border-white/20 text-white text-lg hover:border-[#d4af37] transition-all hover:bg-[#d4af37]/10 hover:scale-110"
                        aria-label="Toggle autoplay"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {isAutoPlaying ? "⏸" : "▶"}
                    </motion.button>
                </div>

                {/* Slide counter */}
                <div className="mt-4 text-white/20 text-xs tracking-widest font-light">
                    {String(currentIndex + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
                </div>
            </div>
        </section>
    );
};

export default AwardsCarousel;