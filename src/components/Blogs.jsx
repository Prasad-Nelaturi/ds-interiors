import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  TrendingUp,
  X,
  Grid3x3,
  LayoutList,
  Share2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { getAllBlogs, getFeaturedBlogs } from "../lib/sanity";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [featuredBlogs, setFeaturedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const postsPerPage = 6;

  const scrollContainerRef = useRef(null);

  useEffect(() => {
    loadBlogs();
  }, []);

  const loadBlogs = async () => {
    setLoading(true);
    try {
      const allBlogs = await getAllBlogs();
      const featured = await getFeaturedBlogs();
      setBlogs(allBlogs);
      setFeaturedBlogs(featured);
    } catch (error) {
      console.error("Error loading blogs:", error);
    }
    setLoading(false);
  };

  const categories = [
    "All",
    ...new Set(blogs.map((blog) => blog.category).filter(Boolean)),
  ];

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" ||
      blog.category === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  // Pagination logic - 6 blogs per page
  const totalPages = Math.ceil(filteredBlogs.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredBlogs.slice(indexOfFirstPost, indexOfLastPost);

  const formatDate = (dateString) => {
    if (!dateString) return "Recent";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const scrollCategories = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading amazing content...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative min-h-[55vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600"
          alt="Blogs Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-md rounded-full mb-4 sm:mb-6 border border-white/20">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400" />
              <span className="text-white/90 text-xs sm:text-sm tracking-wide">
                Our Blog
              </span>
            </div>
            <h1 className="flex justify-center text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Design
              <span className="py-1 block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-amber-500">
                Blog
              </span>
            </h1>

            <p className="text-base md:text-lg max-w-2xl mx-auto opacity-90">
              Inspiration, tips, and trends from DS Interiors
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Section */}
      {featuredBlogs.length > 0 && (
        <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
                <TrendingUp className="w-4 h-4 text-amber-600" />
                <span className="text-amber-700 font-semibold text-sm">
                  Featured Articles
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-3">
                Editor's{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
                  Picks
                </span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredBlogs.map((blog, idx) => (
                <motion.div
                  key={blog._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedBlog(blog)}
                  className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={
                        blog.mainImage ||
                        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800"
                      }
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    <div className="absolute bottom-3 left-3">
                      <span className="px-2 py-0.5 bg-amber-500 text-white text-xs font-semibold rounded-full">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                      <Calendar className="w-3 h-3" />
                      <span>{formatDate(blog.publishedAt)}</span>
                      <span>•</span>
                      <Clock className="w-3 h-3" />
                      <span>{blog.readTime} min read</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                      {blog.excerpt}
                    </p>
                    <button className="text-amber-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition">
                      Read More <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Blog Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          {/* Desktop: Search + Categories + View Options in ONE ROW */}
          <div className="hidden md:flex items-center gap-4 mb-8">
            {/* Search Bar */}
            <div className="relative w-2/4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            {/* Horizontal Scrollable Categories */}
            <div className="relative flex-1">
              <button
                onClick={() => scrollCategories("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 transition"
              >
                <ChevronLeft className="w-3 h-3 text-gray-600" />
              </button>

              <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto scrollbar-hide gap-1.5 px-7 py-1"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setCurrentPage(1);
                    }}
                    className={`px-3 py-1 rounded-full text-xs whitespace-nowrap transition ${
                      selectedCategory === cat
                        ? "bg-orange-500 text-white shadow-sm"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {cat === "All"
                      ? "All"
                      : cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </button>
                ))}
              </div>

              <button
                onClick={() => scrollCategories("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 transition"
              >
                <ChevronRight className="w-3 h-3 text-gray-600" />
              </button>
            </div>

            {/* View Toggle Buttons */}
            <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-1.5 rounded-md transition ${
                  viewMode === "grid"
                    ? "bg-white text-amber-600 shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <Grid3x3 className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-1.5 rounded-md transition ${
                  viewMode === "list"
                    ? "bg-white text-amber-600 shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <LayoutList className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Mobile: Search + Categories + View Options */}
          <div className="md:hidden">
            {/* Search Bar - Centered */}
            <div className="flex justify-center mb-6">
              <div className="relative w-full max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            {/* Categories + View Toggle Row */}
            <div className="flex flex-col items-center gap-3 mb-6">
              <div className="relative w-full">
                <button
                  onClick={() => scrollCategories("left")}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-7 h-7 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 transition"
                >
                  <ChevronLeft className="w-3.5 h-3.5 text-gray-600" />
                </button>

                <div
                  ref={scrollContainerRef}
                  className="flex overflow-x-auto scrollbar-hide gap-2 px-8 py-2"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setCurrentPage(1);
                      }}
                      className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap transition ${
                        selectedCategory === cat
                          ? "bg-orange-500 text-white shadow-md"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {cat === "All"
                        ? "All"
                        : cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => scrollCategories("right")}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-7 h-7 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 transition"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
                </button>
              </div>

              {/* View Toggle Buttons - Centered on mobile */}
              <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-1.5 rounded-md transition ${
                    viewMode === "grid"
                      ? "bg-white text-amber-600 shadow-sm"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <Grid3x3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-1.5 rounded-md transition ${
                    viewMode === "list"
                      ? "bg-white text-amber-600 shadow-sm"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <LayoutList className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Blog Grid/List */}
          {currentPosts.length > 0 ? (
            <>
              <div
                className={
                  viewMode === "grid"
                    ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    : "space-y-4"
                }
              >
                {currentPosts.map((blog, idx) => (
                  <motion.div
                    key={blog._id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={viewMode === "grid" ? { y: -3 } : { x: 3 }}
                    onClick={() => setSelectedBlog(blog)}
                    className={`group cursor-pointer bg-white rounded-xl overflow-hidden shadow-2xl hover:shadow-md transition-all ${
                      viewMode === "list" ? "flex flex-col md:flex-row" : ""
                    }`}
                  >
                    {blog.mainImage && (
                      <div
                        className={
                          viewMode === "grid"
                            ? "relative h-48 overflow-hidden"
                            : "md:w-56 h-44 md:h-auto relative overflow-hidden"
                        }
                      >
                        <img
                          src={blog.mainImage}
                          alt={blog.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute top-2 left-2">
                          <span className="px-2 py-0.5 bg-amber-500 text-white text-xs rounded-full">
                            {blog.category}
                          </span>
                        </div>
                      </div>
                    )}
                    <div className="p-4 flex-1">
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                        <Calendar className="w-3 h-3" />
                        <span>{formatDate(blog.publishedAt)}</span>
                        <span>•</span>
                        <Clock className="w-3 h-3" />
                        <span>{blog.readTime} min read</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-amber-600 transition line-clamp-2">
                        {blog.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                        {blog.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center text-white text-xs font-bold">
                            {blog.author?.charAt(0) || "D"}
                          </div>
                          <span className="text-xs text-gray-500">
                            {blog.author || "DS Interiors"}
                          </span>
                        </div>
                        <button className="text-amber-600 font-semibold text-xs flex items-center gap-1 group-hover:gap-2 transition">
                          Read <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-10">
                  <button
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition ${
                      currentPage === 1
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-white text-gray-700 hover:bg-amber-500 hover:text-white shadow-sm"
                    }`}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  {/* Page Numbers */}
                  <div className="flex gap-1.5">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (pageNum) => {
                        // Show limited page numbers with ellipsis
                        if (
                          totalPages <= 7 ||
                          pageNum === 1 ||
                          pageNum === totalPages ||
                          (pageNum >= currentPage - 1 &&
                            pageNum <= currentPage + 1)
                        ) {
                          return (
                            <button
                              key={pageNum}
                              onClick={() => goToPage(pageNum)}
                              className={`w-8 h-8 rounded-full text-sm font-medium transition ${
                                currentPage === pageNum
                                  ? "bg-amber-500 text-white shadow-sm"
                                  : "bg-white text-gray-600 hover:bg-gray-100"
                              }`}
                            >
                              {pageNum}
                            </button>
                          );
                        } else if (
                          (pageNum === currentPage - 2 && currentPage > 3) ||
                          (pageNum === currentPage + 2 &&
                            currentPage < totalPages - 2)
                        ) {
                          return (
                            <span
                              key={pageNum}
                              className="w-8 h-8 flex items-center justify-center text-gray-400"
                            >
                              ...
                            </span>
                          );
                        }
                        return null;
                      },
                    )}
                  </div>

                  <button
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition ${
                      currentPage === totalPages
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-white text-gray-700 hover:bg-amber-500 hover:text-white shadow-sm"
                    }`}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* Showing info */}
              <p className="text-center text-xs text-gray-400 mt-8">
                Showing {indexOfFirstPost + 1} -{" "}
                {Math.min(indexOfLastPost, filteredBlogs.length)} of{" "}
                {filteredBlogs.length} articles
              </p>
            </>
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <Search className="w-6 h-6 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                No articles found
              </h3>
              <p className="text-sm text-gray-500">
                Try adjusting your search or check back later for new content!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Blog Modal - Keep as is */}
      <AnimatePresence>
        {selectedBlog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm overflow-y-auto"
            onClick={() => setSelectedBlog(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full bg-white rounded-2xl overflow-y-auto max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedBlog(null)}
                className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all"
              >
                <X className="w-4 h-4" />
              </button>

              {selectedBlog.mainImage && (
                <img
                  src={selectedBlog.mainImage}
                  alt={selectedBlog.title}
                  className="w-full h-72 object-cover"
                />
              )}

              <div className="p-6 md:p-8">
                {/* Category and Share Row - Responsive */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  {/* Category Badge */}
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs md:text-sm rounded-full">
                    {selectedBlog.category || "General"}
                  </span>

                  {/* Share Buttons */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400 hidden sm:inline">
                      Share:
                    </span>
                    <button
                      onClick={() => {
                        if (navigator.share) {
                          navigator.share({
                            title: selectedBlog.title,
                            text: selectedBlog.excerpt,
                            url: window.location.href,
                          });
                        } else {
                          navigator.clipboard.writeText(window.location.href);
                          alert("Link copied to clipboard!");
                        }
                      }}
                      className="p-2 bg-gray-100 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
                      aria-label="Share article"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  {selectedBlog.title}
                </h1>

                <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-5 pb-4 border-b">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center text-white text-xs font-bold">
                      {selectedBlog.author?.charAt(0) || "D"}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">
                        {selectedBlog.author || "DS Interiors"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{formatDate(selectedBlog.publishedAt)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{selectedBlog.readTime} min read</span>
                  </div>
                </div>

                {selectedBlog.tags && selectedBlog.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {selectedBlog.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 bg-gray-300 text-gray-800 text-xs rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="prose prose-sm max-w-none">
                  <p className="text-gray-700 text-base leading-relaxed mb-4 italic text-amber-700 border-l-3 border-amber-500 pl-3">
                    {selectedBlog.excerpt}
                  </p>
                  <div className="text-gray-700 leading-relaxed space-y-3 text-sm">
                    {selectedBlog.content ? (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: selectedBlog.content,
                        }}
                      />
                    ) : (
                      <p>
                        Full article content coming soon. Stay tuned for more
                        interior design insights from DS Interiors!
                      </p>
                    )}
                  </div>
                </div>
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
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Blogs;
