import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

const TestimonialsSlider = () => {
  const scrollRef = useRef(null);
  const modalVideoRef = useRef(null);

  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  // const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted] = useState(false);

  // Function to extract YouTube video ID from various URL formats
  const getYouTubeVideoId = (url) => {
    const patterns = [
      /(?:youtube\.com\/watch\?v=)([\w-]+)/,
      /(?:youtu\.be\/)([\w-]+)/,
      /(?:youtube\.com\/shorts\/)([\w-]+)/,
      /(?:youtube\.com\/embed\/)([\w-]+)/,
      /(?:youtube\.com\/v\/)([\w-]+)/
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }
    return null;
  };

  // Function to get embed URL
  const getEmbedUrl = (url) => {
    const videoId = getYouTubeVideoId(url);
    if (!videoId) return null;
    return `https://www.youtube.com/embed/${videoId}`;
  };

  const customerReviews = [
    {
      name: "Rajesh Kumar",
      role: "Homeowner",
      text: "Exceptional work! The team transformed our home beautifully.",
      rating: 5,
      videoUrl: "https://youtu.be/jxepjIvKuqQ?si=C7DlO0UvCxnGvlwP",
      thumbnail: "https://youtu.be/jxepjIvKuqQ?si=C7DlO0UvCxnGvlwP"
    },
    {
      name: "Priya Sharma",
      role: "Business Owner",
      text: "Professional, creative and delivered on time.",
      rating: 5,
      videoUrl: "https://youtube.com/shorts/6vwUkvNABsE?si=QMIcGT2rMG5iaX2S",
      thumbnail: "https://youtube.com/shorts/6vwUkvNABsE?si=QMIcGT2rMG5iaX2S"
    },
    {
      name: "Amit Singh",
      role: "Architect",
      text: "Best interior designers with amazing detailing.",
      rating: 5,
      videoUrl: "https://youtu.be/1LUI1tJBsm4?si=ZrdOQGDTHiNFoA7t",
      thumbnail: "https://youtu.be/1LUI1tJBsm4?si=ZrdOQGDTHiNFoA7t"
    },
    {
      name: "Amit Singh",
      role: "Architect",
      text: "Best interior designers with amazing detailing.",
      rating: 5,
      videoUrl: "https://youtube.com/shorts/cP2mqCnisvo?feature=share",
      thumbnail: "https://youtube.com/shorts/cP2mqCnisvo?feature=share"
    }
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
    // setIsPlaying(false);
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
            Don't just take our word for it — hear from our happy clients
          </p>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-scroll scrollbar-hide py-4 px-2"
          >
            {duplicatedReviews.map((review, idx) => {
              const videoId = getYouTubeVideoId(review.videoUrl);

              return (
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
                    // setIsPlaying(true);
                  }}
                >
                  <div className="relative h-64 bg-black group overflow-hidden">
                    {/* YouTube Thumbnail */}
                    <img
                      src={review.thumbnail || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                      alt={review.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback if maxresdefault doesn't exist
                        e.target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                      }}
                    />

                    {/* YouTube Logo Badge */}
                    <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-xl">
                      Dsigner Studio Interiors
                    </div>

                    <div className="absolute inset-0 bg-transparant flex items-center justify-center group-hover:bg-black/40 transition-all duration-300">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-7 h-7 text-white ml-1" />
                      </div>
                    </div>
                  </div>

                  {/* <div className="p-4">
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
                  </div> */}
                </motion.div>
              );
            })}
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
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* YouTube Embed */}
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  ref={modalVideoRef}
                  src={`${getEmbedUrl(selectedVideo.videoUrl)}?autoplay=1&mute=${isMuted ? 1 : 0}`}
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={selectedVideo.name}
                />
              </div>

              {/* Review info */}
              {/* <div className="bg-white p-6">
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
              </div> */}
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