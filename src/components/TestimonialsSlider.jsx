import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Pause,
  Quote,
  ChevronLeft,
  ChevronRight,
  X,
  Star,
} from "lucide-react";

const TestimonialsSlider = () => {
  const scrollRef = useRef(null);
  const modalVideoRef = useRef(null);

  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  const customerReviews = [
    {
      name: "Rajesh Kumar",
      role: "Homeowner",
      text: "Exceptional work! The team transformed our home beautifully.",
      rating: 5,
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      name: "Priya Sharma",
      role: "Business Owner",
      text: "Professional, creative and delivered on time.",
      rating: 5,
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      name: "Amit Singh",
      role: "Architect",
      text: "Best interior designers with amazing detailing.",
      rating: 5,
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      name: "Neha Gupta",
      role: "Interior Designer",
      text: "Incredible creativity and premium execution.",
      rating: 5,
      videoUrl: "https://www.w3schools.com/html/movie.mp4",
    },
    {
      name: "Kiran Reddy",
      role: "Villa Owner",
      text: "Amazing quality and premium finishing.",
      rating: 5,
      videoUrl: "https://www.w3schools.com/html/movie.mp4",
    },
    {
      name: "Anjali Verma",
      role: "Apartment Owner",
      text: "Professional team and excellent service.",
      rating: 5,
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
  ];

  const duplicatedReviews = [...customerReviews, ...customerReviews];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrameId;
    let isPaused = false;
    const speed = 2;

    const scroll = () => {
      if (!container || isPaused) {
        animationFrameId = requestAnimationFrame(scroll);
        return;
      }

      container.scrollLeft += speed;

      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    const pause = () => (isPaused = true);
    const resume = () => (isPaused = false);

    container.addEventListener("mouseenter", pause);

    container.addEventListener("mouseleave", resume);

    return () => {
      cancelAnimationFrame(animationFrameId);

      container.removeEventListener("mouseenter", pause);

      container.removeEventListener("mouseleave", resume);
    };
  }, []);

  const closeModal = () => {
    setIsVideoModalOpen(false);
    setIsPlaying(false);

    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
    }
  };

  return (
    <section className="py-10 relative overflow-hidden bg-white">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 px-6">
          <h2 className="text-4xl md:text-5xl uppercase font-bold text-gray-900 mb-4">
            What Our Clients{" "}
            <span className="bg-gradient-to-r from-amber-300 to-orange-500 bg-clip-text text-transparent">
              Say's
            </span>
          </h2>

          <p className="text-gray-600 text-lg">
            Don’t just take our word for it — hear from our happy clients
          </p>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-scroll scrollbar-hide py-4 px-2"
          >
            {duplicatedReviews.map((review, idx) => (
              <motion.div
                key={idx}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="flex-shrink-0 w-[320px] md:w-[380px] bg-white rounded-[2rem] overflow-hidden shadow-2xl hover:shadow-2xl transition-all duration-500 border border-gray-100 cursor-pointer"
                onClick={() => {
                  setSelectedVideo(review);
                  setIsVideoModalOpen(true);
                  setIsPlaying(true);
                }}
              >
                <div className="relative h-64 bg-black group overflow-hidden">
                  <video
                    src={review.videoUrl}
                    className="w-full h-full object-cover"
                    loop
                    muted
                    autoPlay
                    playsInline
                  />

                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                      <Play className="w-7 h-7 text-white ml-1" />
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex justify-between">
                    <div>
                      <h4 className="font-bold text-lg text-gray-900">
                        {review.name}
                      </h4>

                      <p className="text-sm text-gray-500">{review.role}</p>
                    </div>

                    <Quote className="w-5 h-5 text-orange-400 opacity-60" />
                  </div>

                  <p className="text-sm text-gray-600 mt-2">{review.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Hint */}
        <div className="text-center mt-6 lg:hidden">
          <p className="text-xs text-gray-400 flex items-center justify-center gap-1">
            <ChevronLeft className="w-3 h-3" />
            Scroll to see more reviews
            <ChevronRight className="w-3 h-3" />
          </p>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={closeModal}
          >
            <motion.div
              initial={{
                scale: 0.9,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.9,
                opacity: 0,
              }}
              className="relative max-w-3xl w-full bg-black rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Video */}
              <video
                ref={modalVideoRef}
                src={selectedVideo.videoUrl}
                className="w-full max-h-[55vh] object-cover"
                autoPlay
                playsInline
              />

              {/* Controls */}
              <div className="absolute top-1/2 left-0 right-0 p-4">
                <div className="flex items-center justify-between">
                  {/* Play/Pause Button */}
                  <button
                    onClick={() => {
                      if (modalVideoRef.current) {
                        if (isPlaying) {
                          modalVideoRef.current.pause();
                        } else {
                          modalVideoRef.current.play();
                        }
                        setIsPlaying(!isPlaying);
                      }
                    }}
                    className="w-10 h-10 rounded-full bg-gray-900 border border-white flex items-center justify-center hover:bg-amber-500 transition-all duration-300"
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5 text-white" />
                    ) : (
                      <Play className="w-5 h-5 text-white ml-0.5" />
                    )}
                  </button>

                  {/* Sound Mute/Unmute Button */}
                  <button
                    onClick={() => {
                      if (modalVideoRef.current) {
                        modalVideoRef.current.muted = !isMuted;
                        setIsMuted(!isMuted);
                      }
                    }}
                    className="w-10 h-10 rounded-full bg-gray-900 border border-white flex items-center justify-center hover:bg-amber-500 transition-all duration-300"
                  >
                    {isMuted ? (
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51c.66-1.24 1.03-2.65 1.03-4.15 0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM9.6 9.6l-1.1-1.1-2.5 2.5H3v6h3l3 3h1v-6.4l2.5-2.5-.9-.9z" />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77 0-4.28-2.99-7.86-7-8.77z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Review info */}
              <div className="bg-white p-6">
                <h3 className="font-bold text-xl">{selectedVideo.name}</h3>

                <p className="text-gray-500">{selectedVideo.role}</p>

                <div className="flex mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-gray-600 mt-3">{selectedVideo.text}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSlider;
