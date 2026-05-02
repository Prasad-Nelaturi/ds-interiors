import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { createClient } from "@sanity/client";
import { Upload, X, Image as ImageIcon, Lock, Eye, EyeOff } from "lucide-react";

const sanityClient = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: process.env.REACT_APP_SANITY_DATASET,
  apiVersion: '2024-03-15',
  token: process.env.REACT_APP_SANITY_TOKEN,
  useCdn: false,
});

const SECURITY_KEY = process.env.REACT_APP_ADMIN_KEY;

const AdminCreateBlog = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [showKey, setShowKey] = useState(false);
  const [securityKeyInput, setSecurityKeyInput] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const fileInputRef = useRef(null);

  const [blog, setBlog] = useState({
    title: "",
    excerpt: "",
    category: "trends",
    tags: [],
    author: "DS Interiors Team",
    readTime: 5,
    imageUrl: "",
    imageFile: null,
    imagePreview: null,
    content: "",
    featured: false,
  });

  const categories = [
    { value: "residential", label: "Residential" },
    { value: "commercial", label: "Commercial" },
    { value: "trends", label: "Trends" },
    { value: "tips-guides", label: "Tips & Guides" },
    { value: "case-studies", label: "Case Studies" },
  ];

  // Handle security key submission
  const handleSecurityKeySubmit = (e) => {
    e.preventDefault();
    if (securityKeyInput === SECURITY_KEY) {
      setIsAuthenticated(true);
      setMessage({
        type: "success",
        text: "✅ Access granted! You can now create blog posts.",
      });
      setTimeout(() => setMessage({ type: "", text: "" }), 3000);
    } else {
      setMessage({
        type: "error",
        text: "❌ Invalid security key! Access denied.",
      });
    }
    setSecurityKeyInput("");
  };

  // Handle image upload to Sanity
  const handleImageUpload = async (file) => {
    if (!file) return null;

    setUploadingImage(true);
    try {
      // Upload image to Sanity
      const asset = await sanityClient.assets.upload("image", file, {
        filename: file.name,
        contentType: file.type,
      });

      setUploadingImage(false);
      return asset.url;
    } catch (error) {
      console.error("Image upload error:", error);
      setUploadingImage(false);
      setMessage({
        type: "error",
        text: "❌ Failed to upload image. Please try again.",
      });
      return null;
    }
  };

  // Handle file selection
  const handleFileSelect = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Check file type
    if (!file.type.startsWith("image/")) {
      setMessage({
        type: "error",
        text: "❌ Please select an image file (JPEG, PNG, GIF, etc.)",
      });
      return;
    }

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setMessage({
        type: "error",
        text: "❌ Image size should be less than 5MB",
      });
      return;
    }

    // Create preview
    const previewUrl = URL.createObjectURL(file);
    setBlog({
      ...blog,
      imageFile: file,
      imagePreview: previewUrl,
      imageUrl: "",
    });
  };

  // Handle image URL input
  const handleImageUrlChange = (url) => {
    setBlog({
      ...blog,
      imageUrl: url,
      imageFile: null,
      imagePreview: null,
    });
  };

  // Remove selected image
  const removeImage = () => {
    if (blog.imagePreview) {
      URL.revokeObjectURL(blog.imagePreview);
    }
    setBlog({
      ...blog,
      imageFile: null,
      imagePreview: null,
      imageUrl: "",
    });
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      // Create slug from title
      const slug = blog.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");

      let finalImageUrl = blog.imageUrl;

      // Upload image if a file was selected
      if (blog.imageFile) {
        const uploadedUrl = await handleImageUpload(blog.imageFile);
        if (uploadedUrl) {
          finalImageUrl = uploadedUrl;
        } else {
          setLoading(false);
          return;
        }
      }

      // Create blog post in Sanity
      const result = await sanityClient.create({
        _type: "blog",
        title: blog.title,
        slug: { current: slug },
        excerpt: blog.excerpt,
        category: blog.category,
        tags: blog.tags ? blog.tags.split(",").map((tag) => tag.trim()) : [],
        author: blog.author,
        readTime: parseInt(blog.readTime),
        featured: blog.featured,
        publishedAt: new Date().toISOString(),
        externalImage: finalImageUrl,
        content: blog.content, 
      });

      console.log("Blog created:", result);
      setMessage({
        type: "success",
        text: "✅ Blog created successfully! Redirecting...",
      });

      setTimeout(() => {
        navigate("/blogs");
      }, 2000);
    } catch (error) {
      console.error("Error:", error);
      setMessage({ type: "error", text: "❌ Error: " + error.message });
    }
    setLoading(false);
  };

  // Security Key Modal
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-amber-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Admin Access</h2>
            <p className="text-gray-500 mt-2">
              Enter security key to create blog posts
            </p>
          </div>

          <form onSubmit={handleSecurityKeySubmit}>
            <div className="relative mb-6">
              <input
                type={showKey ? "text" : "password"}
                value={securityKeyInput}
                onChange={(e) => setSecurityKeyInput(e.target.value)}
                placeholder="Enter security key"
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShowKey(!showKey)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showKey ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>

            {message.text && (
              <div
                className={`p-3 rounded-lg mb-4 text-sm ${
                  message.type === "success"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {message.text}
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Verify Access
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Main Blog Creation Form
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6 max-w-3xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Create New Blog Post
          </h1>
          <p className="text-gray-600 mt-2">
            Fill in the details below to publish a new article
          </p>
        </div>

        {/* Message */}
        {message.text && (
          <div
            className={`p-4 rounded-lg mb-6 ${
              message.type === "success"
                ? "bg-green-100 text-green-700 border border-green-300"
                : "bg-red-100 text-red-700 border border-red-300"
            }`}
          >
            {message.text}
          </div>
        )}

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-lg p-8 space-y-6"
        >
          {/* Title */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Blog Title *
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Enter a catchy title..."
              value={blog.title}
              onChange={(e) => setBlog({ ...blog, title: e.target.value })}
            />
          </div>

          {/* Excerpt/Short Description */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Short Description *
            </label>
            <textarea
              required
              rows="3"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Brief summary of the article (shown in blog listings)..."
              value={blog.excerpt}
              onChange={(e) => setBlog({ ...blog, excerpt: e.target.value })}
            />
          </div>

          {/* Category & Read Time */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Category *
              </label>
              <select
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                value={blog.category}
                onChange={(e) => setBlog({ ...blog, category: e.target.value })}
              >
                {categories.map((cat) => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Read Time (minutes) *
              </label>
              <input
                type="number"
                required
                min="1"
                max="30"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                value={blog.readTime}
                onChange={(e) => setBlog({ ...blog, readTime: e.target.value })}
              />
            </div>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Tags (comma separated)
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
              placeholder="modern-design, luxury, sustainable"
              value={blog.tags}
              onChange={(e) => setBlog({ ...blog, tags: e.target.value })}
            />
            <p className="text-xs text-gray-500 mt-1">
              Example: modern-design, home-decor, luxury
            </p>
          </div>

          {/* Author */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Author Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
              placeholder="DS Interiors Team"
              value={blog.author}
              onChange={(e) => setBlog({ ...blog, author: e.target.value })}
            />
          </div>

          {/* Cover Image - Upload OR URL */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Cover Image *
            </label>

            {/* Image Preview Area */}
            {blog.imagePreview && (
              <div className="relative mb-4">
                <img
                  src={blog.imagePreview}
                  alt="Preview"
                  className="w-full h-48 object-cover rounded-lg border"
                />
                <button
                  type="button"
                  onClick={removeImage}
                  className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Upload Option */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload Image (JPEG, PNG, GIF - Max 5MB)
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="file"
                  ref={fileInputRef}
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="hidden"
                  id="imageUpload"
                />
                <label
                  htmlFor="imageUpload"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg cursor-pointer hover:bg-gray-200 transition"
                >
                  <Upload className="w-4 h-4" />
                  Choose File
                </label>
                {uploadingImage && (
                  <span className="text-sm text-gray-500">Uploading...</span>
                )}
              </div>
            </div>

            {/* OR Divider */}
            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">OR</span>
              </div>
            </div>

            {/* Image URL Option */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Image URL
              </label>
              <input
                type="url"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                placeholder="https://images.unsplash.com/..."
                value={blog.imageUrl}
                onChange={(e) => handleImageUrlChange(e.target.value)}
                disabled={!!blog.imagePreview}
              />
              <p className="text-xs text-gray-500 mt-1">
                Use free images from Unsplash, Pexels, or upload your own
              </p>
            </div>

            {/* Show warning if no image */}
            {!blog.imagePreview && !blog.imageUrl && (
              <p className="text-xs text-amber-600 mt-2">
                ⚠️ Please upload an image or provide an image URL
              </p>
            )}
          </div>

          {/* Featured Checkbox */}
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="featured"
              className="w-4 h-4 text-orange-500 rounded focus:ring-orange-500"
              checked={blog.featured}
              onChange={(e) => setBlog({ ...blog, featured: e.target.checked })}
            />
            <label
              htmlFor="featured"
              className="text-sm font-semibold text-gray-900"
            >
              Feature this post (appears at top of blog page)
            </label>
          </div>

          {/* Full Content */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Full Article Content *
            </label>
            <textarea
              required
              rows="10"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 font-mono text-sm"
              placeholder="Write your blog content here..."
              value={blog.content}
              onChange={(e) => setBlog({ ...blog, content: e.target.value })}
            />
            <p className="text-xs text-gray-500 mt-1">
              Tip: For formatting, use HTML tags like &lt;p&gt;, &lt;h2&gt;,
              &lt;ul&gt;, &lt;li&gt;, &lt;strong&gt;
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading || (!blog.imagePreview && !blog.imageUrl)}
            className="w-full py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Publishing...
              </span>
            ) : (
              "Publish Blog Post"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminCreateBlog;
