import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Calendar,
  User,
  Clock,
  Tag,
  Heart,
  Share2,
  Bookmark,
  Eye,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  TrendingUp,
  Award,
  MessageCircle,
  Facebook,
  Twitter,
  Linkedin,
  Link2,
  X,
  Menu,
  Filter,
  Grid3x3,
  LayoutList,
  Star,
  Quote,
  Briefcase,
  Home,
  Building,
  Palette,
  Crown,
} from "lucide-react";

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTag, setSelectedTag] = useState("All");
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [likedPosts, setLikedPosts] = useState([]);
  const [bookmarkedPosts, setBookmarkedPosts] = useState([]);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const postsPerPage = 6;

  const categories = [
    "All",
    "Residential",
    "Commercial",
    "Trends",
    "Tips & Guides",
    "Case Studies",
  ];

  const tags = [
    "All",
    "Modern Design",
    "Luxury Interiors",
    "Sustainable",
    "Minimalist",
    "Smart Homes",
    "Color Theory",
    "Space Planning",
  ];

  const blogs = [
    {
      id: 1,
      title: "10 Interior Design Trends That Will Dominate 2024",
      excerpt:
        "Discover the hottest interior design trends that are shaping the future of home decor this year.",
      content: "Full article content here...",
      category: "Trends",
      tags: ["Modern Design", "Trends"],
      author: "Sarah Johnson",
      authorAvatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
      date: "March 15, 2024",
      readTime: "5 min read",
      views: 12450,
      likes: 342,
      comments: 28,
      image:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800",
      featured: true,
    },
    {
      id: 2,
      title: "How to Maximize Small Spaces: A Complete Guide",
      excerpt:
        "Expert tips and tricks to make the most out of your compact living spaces without compromising on style.",
      content: "Full article content here...",
      category: "Tips & Guides",
      tags: ["Space Planning", "Minimalist"],
      author: "Michael Chen",
      authorAvatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
      date: "March 10, 2024",
      readTime: "8 min read",
      views: 8920,
      likes: 267,
      comments: 19,
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      featured: false,
    },
    {
      id: 3,
      title: "Sustainable Materials for Eco-Friendly Homes",
      excerpt:
        "Explore the best sustainable materials for creating an environmentally conscious home.",
      content: "Full article content here...",
      category: "Trends",
      tags: ["Sustainable", "Modern Design"],
      author: "Priya Sharma",
      authorAvatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
      date: "March 5, 2024",
      readTime: "6 min read",
      views: 6730,
      likes: 198,
      comments: 15,
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800",
      featured: true,
    },
    {
      id: 4,
      title: "Luxury Villa Design: Creating Timeless Elegance",
      excerpt:
        "Behind the scenes of our latest luxury villa project featuring exquisite finishes.",
      content: "Full article content here...",
      category: "Case Studies",
      tags: ["Luxury Interiors", "Modern Design"],
      author: "David Wilson",
      authorAvatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
      date: "February 28, 2024",
      readTime: "10 min read",
      views: 15420,
      likes: 456,
      comments: 32,
      image:
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800",
      featured: true,
    },
    {
      id: 5,
      title: "The Psychology of Color in Interior Design",
      excerpt:
        "Understanding how different colors affect mood and how to choose the perfect palette.",
      content: "Full article content here...",
      category: "Tips & Guides",
      tags: ["Color Theory", "Modern Design"],
      author: "Sarah Johnson",
      authorAvatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
      date: "February 20, 2024",
      readTime: "7 min read",
      views: 5210,
      likes: 167,
      comments: 12,
      image:
        "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800",
      featured: false,
    },
    {
      id: 6,
      title: "Smart Home Integration: Future-Proof Your Space",
      excerpt:
        "Latest smart home technologies that combine functionality with aesthetic appeal.",
      content: "Full article content here...",
      category: "Trends",
      tags: ["Smart Homes", "Modern Design"],
      author: "Michael Chen",
      authorAvatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
      date: "February 15, 2024",
      readTime: "9 min read",
      views: 9870,
      likes: 289,
      comments: 21,
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
      featured: false,
    },
    {
      id: 7,
      title: "Office Space Optimization for Productivity",
      excerpt:
        "Design strategies to create an inspiring and productive workspace environment.",
      content: "Full article content here...",
      category: "Commercial",
      tags: ["Space Planning", "Modern Design"],
      author: "Priya Sharma",
      authorAvatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
      date: "February 10, 2024",
      readTime: "6 min read",
      views: 4450,
      likes: 134,
      comments: 9,
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
      featured: false,
    },
    {
      id: 8,
      title: "Kitchen Remodel: Before & After Transformation",
      excerpt:
        "See how we transformed this outdated kitchen into a modern culinary masterpiece.",
      content: "Full article content here...",
      category: "Case Studies",
      tags: ["Modern Design", "Luxury Interiors"],
      author: "David Wilson",
      authorAvatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
      date: "February 5, 2024",
      readTime: "8 min read",
      views: 11230,
      likes: 345,
      comments: 27,
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800",
      featured: false,
    },
  ];

  // Filter blogs based on search, category, and tag
  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || blog.category === selectedCategory;
    const matchesTag = selectedTag === "All" || blog.tags.includes(selectedTag);
    return matchesSearch && matchesCategory && matchesTag;
  });

  // Pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredBlogs.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredBlogs.length / postsPerPage);

  // Featured blogs
  const featuredBlogs = blogs.filter((blog) => blog.featured).slice(0, 3);

  const handleLike = (blogId) => {
    if (likedPosts.includes(blogId)) {
      setLikedPosts(likedPosts.filter((id) => id !== blogId));
    } else {
      setLikedPosts([...likedPosts, blogId]);
    }
  };

  const handleBookmark = (blogId) => {
    if (bookmarkedPosts.includes(blogId)) {
      setBookmarkedPosts(bookmarkedPosts.filter((id) => id !== blogId));
    } else {
      setBookmarkedPosts([...bookmarkedPosts, blogId]);
    }
  };

  const BlogCard = ({ blog, index }) => (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
      onClick={() => setSelectedBlog(blog)}
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-semibold rounded-full">
            {blog.category}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleLike(blog.id);
            }}
            className={`w-8 h-8 rounded-full bg-white/90 backdrop-blur flex items-center justify-center transition-all hover:scale-110 ${
              likedPosts.includes(blog.id) ? "text-red-500" : "text-gray-600"
            }`}
          >
            <Heart
              className={`w-4 h-4 ${likedPosts.includes(blog.id) ? "fill-red-500" : ""}`}
            />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleBookmark(blog.id);
            }}
            className={`w-8 h-8 rounded-full bg-white/90 backdrop-blur flex items-center justify-center transition-all hover:scale-110 ${
              bookmarkedPosts.includes(blog.id)
                ? "text-amber-500"
                : "text-gray-600"
            }`}
          >
            <Bookmark
              className={`w-4 h-4 ${bookmarkedPosts.includes(blog.id) ? "fill-amber-500" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta Info */}
        <div className="flex flex-wrap gap-4 text-xs text-gray-500 mb-3">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>{blog.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{blog.readTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <Eye className="w-3 h-3" />
            <span>{blog.views.toLocaleString()} views</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors line-clamp-2">
          {blog.title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {blog.excerpt}
        </p>

        {/* Author & Read More */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <img
              src={blog.authorAvatar}
              alt={blog.author}
              className="w-8 h-8 rounded-full object-cover"
            />
            <div>
              <p className="text-xs font-semibold text-gray-900">
                {blog.author}
              </p>
              <p className="text-xs text-gray-500">{blog.comments} comments</p>
            </div>
          </div>
          <button className="text-amber-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
            Read More
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </motion.article>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white overflow-x-hidden">
      {/* ===== HERO SECTION ===== */}
      <section className="relative py-8 min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/0 via-black/60 to-black/0 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600"
            alt="Blogs Hero"
            className="w-full h-full object-cover scale-110 animate-subtle-zoom"
          />
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/20">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-white/90 text-sm tracking-wide">
                Our Blog
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Design
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-amber-500">
                Inspiration & Insights
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Discover the latest trends, expert tips, and inspiring stories
              from the world of interior design
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== FEATURED POSTS SECTION ===== */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-4 shadow-sm">
              <TrendingUp className="w-4 h-4 text-amber-600" />
              <span className="text-amber-700 text-sm font-semibold">
                Featured Articles
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Editor's
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                {" "}
                Picks
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Handpicked articles you don't want to miss
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredBlogs.map((blog, idx) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
                onClick={() => setSelectedBlog(blog)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-amber-500 text-white text-xs font-semibold rounded-full">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                    <Calendar className="w-3 h-3" />
                    <span>{blog.date}</span>
                    <span>•</span>
                    <Clock className="w-3 h-3" />
                    <span>{blog.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src={blog.authorAvatar}
                        alt={blog.author}
                        className="w-6 h-6 rounded-full"
                      />
                      <span className="text-xs text-gray-600">
                        {blog.author}
                      </span>
                    </div>
                    <button className="text-amber-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read More
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MAIN BLOG SECTION ===== */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {/* Search and Filter Bar */}
          <div className="mb-8">
            {/* Search Bar */}
            <div className="flex flex-col lg:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                />
              </div>

              {/* View Toggle & Mobile Filter Button */}
              <div className="flex gap-3">
                <button
                  onClick={() => setShowMobileFilters(!showMobileFilters)}
                  className="lg:hidden px-4 py-3 border border-gray-200 rounded-xl flex items-center gap-2 hover:bg-gray-50 transition"
                >
                  <Filter className="w-5 h-5" />
                  <span>Filters</span>
                </button>
                <div className="hidden lg:flex gap-2">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-3 rounded-xl transition ${
                      viewMode === "grid"
                        ? "bg-amber-500 text-white"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    <Grid3x3 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-3 rounded-xl transition ${
                      viewMode === "list"
                        ? "bg-amber-500 text-white"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    <LayoutList className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Filters - Desktop */}
            <div className="hidden lg:block">
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="text-sm font-semibold text-gray-700">
                  Categories:
                </span>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm transition-all ${
                      selectedCategory === cat
                        ? "bg-amber-500 text-white shadow-md"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="text-sm font-semibold text-gray-700">
                  Tags:
                </span>
                {tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-3 py-1 rounded-full text-xs transition-all ${
                      selectedTag === tag
                        ? "bg-amber-500 text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Filters - Mobile (Slide Down) */}
            <AnimatePresence>
              {showMobileFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="lg:hidden mt-4 p-4 bg-white rounded-xl shadow-lg border border-gray-100"
                >
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Categories
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((cat) => (
                        <button
                          key={cat}
                          onClick={() => setSelectedCategory(cat)}
                          className={`px-3 py-1 rounded-full text-xs transition-all ${
                            selectedCategory === cat
                              ? "bg-amber-500 text-white"
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Tags</h4>
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <button
                          key={tag}
                          onClick={() => setSelectedTag(tag)}
                          className={`px-3 py-1 rounded-full text-xs transition-all ${
                            selectedTag === tag
                              ? "bg-amber-500 text-white"
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          #{tag}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Blog Posts Grid/List */}
          {currentPosts.length > 0 ? (
            <>
              <div
                className={
                  viewMode === "grid"
                    ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    : "space-y-6"
                }
              >
                {currentPosts.map((blog, idx) =>
                  viewMode === "grid" ? (
                    <BlogCard key={blog.id} blog={blog} index={idx} />
                  ) : (
                    <motion.div
                      key={blog.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 8 }}
                      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col md:flex-row"
                      onClick={() => setSelectedBlog(blog)}
                    >
                      <div className="md:w-72 h-56 md:h-auto relative overflow-hidden">
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-semibold rounded-full">
                            {blog.category}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex flex-wrap gap-4 text-xs text-gray-500 mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>{blog.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{blog.readTime}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            <span>{blog.views.toLocaleString()} views</span>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                          {blog.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {blog.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <img
                              src={blog.authorAvatar}
                              alt={blog.author}
                              className="w-8 h-8 rounded-full"
                            />
                            <div>
                              <p className="text-sm font-semibold text-gray-900">
                                {blog.author}
                              </p>
                              <p className="text-xs text-gray-500">
                                {blog.comments} comments
                              </p>
                            </div>
                          </div>
                          <button className="text-amber-600 font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                            Read More
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ),
                )}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center gap-2 mt-12">
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                    className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  {[...Array(totalPages)].map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentPage(idx + 1)}
                      className={`w-10 h-10 rounded-full transition-all ${
                        currentPage === idx + 1
                          ? "bg-amber-500 text-white"
                          : "border border-gray-200 hover:bg-amber-500 hover:text-white"
                      }`}
                    >
                      {idx + 1}
                    </button>
                  ))}
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <Search className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                No articles found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ===== NEWSLETTER SECTION ===== */}
      <section className="py-16 mb-6 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-white max-w-2xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6 backdrop-blur">
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm font-semibold">Stay Updated</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-white/90 mb-8">
              Get the latest design trends and tips delivered straight to your
              inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-8 py-3 bg-white text-amber-600 rounded-full font-semibold hover:shadow-xl transition-all hover:scale-105">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== BLOG MODAL ===== */}
      <AnimatePresence>
        {selectedBlog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md overflow-y-auto"
            onClick={() => setSelectedBlog(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedBlog(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-gray-600 hover:bg-amber-500 hover:text-white transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <img
                src={selectedBlog.image}
                alt={selectedBlog.title}
                className="w-full h-96 object-cover"
              />

              <div className="p-8">
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{selectedBlog.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{selectedBlog.readTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    <span>{selectedBlog.views.toLocaleString()} views</span>
                  </div>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {selectedBlog.title}
                </h2>

                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-100">
                  <img
                    src={selectedBlog.authorAvatar}
                    alt={selectedBlog.author}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">
                      {selectedBlog.author}
                    </p>
                    <p className="text-sm text-gray-500">
                      Interior Design Expert
                    </p>
                  </div>
                </div>

                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {selectedBlog.excerpt}
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>

                <div className="flex gap-3 mt-8 pt-6 border-t border-gray-100">
                  <button className="flex-1 py-3 bg-amber-500 text-white rounded-xl font-semibold hover:bg-amber-600 transition">
                    Share Article
                  </button>
                  <button className="flex-1 py-3 border border-gray-200 rounded-xl font-semibold hover:bg-gray-50 transition">
                    Save for Later
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes subtle-zoom {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        .animate-subtle-zoom {
          animation: subtle-zoom 20s ease-in-out infinite;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Blogs;
