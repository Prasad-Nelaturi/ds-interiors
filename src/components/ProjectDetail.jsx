import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
    ArrowLeft,
    ArrowRight,
    Calendar,
    MapPin,
    Home,
    Building,
    Palette,
    Crown,
    Ruler,
    Layers,
    Users,
    Clock,
    ChevronLeft,
    ChevronRight,
    X,
    Award,
    CheckCircle,
    TrendingUp,
    Briefcase,
    Sparkles,
    Star,
    MessageCircle,
    Phone,
    ChevronDown,
    ChevronUp,
    Maximize2,
    Image as ImageIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectDetail = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [activeTab, setActiveTab] = useState("overview");
    const [expandedSections, setExpandedSections] = useState({
        materials: false,
        process: false,
        timeline: false,
    });
    const [selectedImage, setSelectedImage] = useState(null);

    const projectsData = [
        {
            id: 1,
            title: "Modern Living Room",
            category: "Living Room",
            type: "Residential",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
            description: "Contemporary living room with premium finishes and natural lighting",
            longDescription: "This stunning modern living room features floor-to-ceiling windows, a custom marble fireplace, and carefully curated furniture pieces. The space seamlessly blends comfort with luxury, creating an inviting atmosphere perfect for both relaxation and entertaining. The design incorporates natural materials, warm tones, and sophisticated lighting to create a timeless aesthetic.",
            date: "2024-12-15",
            location: "Hyderabad, Telangana",
            client: "Rajesh Kumar",
            area: "450 sq.ft",
            duration: "3 months",
            budget: "₹25 Lakhs",
            status: "Completed",
            featured: true,
            rating: 4.9,
            reviews: 28,
            tags: ["Modern", "Luxury", "Natural Light", "Contemporary", "Premium"],
            gallery: [
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
                "https://images.unsplash.com/photo-1618220179428-22790b461013?w=1200&h=800&fit=crop",
                "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=1200&h=800&fit=crop",
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
                "https://images.unsplash.com/photo-1618220179428-22790b461013?w=1200&h=800&fit=crop",
            ],
            materials: [
                { name: "Italian Marble", usage: "Flooring & Fireplace", quantity: "120 sq.ft" },
                { name: "Walnut Wood", usage: "Custom Furniture", quantity: "80 sq.ft" },
                { name: "Linen Fabric", usage: "Upholstery & Curtains", quantity: "150 sq.ft" },
                { name: "Brass Finish", usage: "Lighting & Hardware", quantity: "25 pieces" },
                { name: "Glass Panels", usage: "Partitions & Windows", quantity: "40 sq.ft" },
            ],
            process: [
                { phase: "Concept Design", duration: "2 weeks", description: "Initial consultation, mood boards, and preliminary sketches" },
                { phase: "3D Visualization", duration: "3 weeks", description: "Detailed 3D renderings and virtual walkthrough" },
                { phase: "Material Selection", duration: "2 weeks", description: "Curating materials, finishes, and furniture" },
                { phase: "Execution", duration: "6 weeks", description: "Construction, installation, and styling" },
                { phase: "Handover", duration: "1 week", description: "Final inspection, client walkthrough, and project completion" },
            ],
            timeline: [
                { phase: "Design Phase", start: "Oct 2024", end: "Nov 2024", status: "Completed" },
                { phase: "Material Procurement", start: "Nov 2024", end: "Dec 2024", status: "Completed" },
                { phase: "Construction", start: "Dec 2024", end: "Jan 2025", status: "Completed" },
                { phase: "Finishing", start: "Jan 2025", end: "Feb 2025", status: "Completed" },
                { phase: "Project Handover", start: "Feb 2025", end: "Feb 2025", status: "Completed" },
            ],
            similarProjects: [
                { id: 2, title: "Minimalist Living Space", image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=400&h=300&fit=crop" },
                { id: 3, title: "Luxury Villa Living Room", image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=400&h=300&fit=crop" },
                { id: 6, title: "Master Bedroom Suite", image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=400&h=300&fit=crop" },
            ],
            testimonials: [
                { name: "Rajesh Kumar", text: "Dsigner Studio exceeded our expectations. The attention to detail and quality of work is outstanding.", rating: 5, date: "Dec 2024" },
                { name: "Priya Sharma", text: "Professional team that delivered on time and within budget. Highly recommended!", rating: 5, date: "Nov 2024" },
            ],
            keyFeatures: [
                "Floor-to-ceiling windows for natural light",
                "Custom marble fireplace",
                "Premium Italian furniture",
                "Smart home automation",
                "Ambient lighting system",
                "Acoustic paneling",
            ],
            sustainability: [
                "Energy-efficient LED lighting",
                "Sustainable wood sourcing",
                "Low-VOC paints",
                "Recycled materials used",
            ],
        },
        {
            id: 2,
            title: "Minimalist Living Space",
            category: "Living Room",
            type: "Residential",
            image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=1200&h=800&fit=crop",
            description: "Clean lines and neutral tones create a serene atmosphere",
            longDescription: "A minimalist masterpiece featuring clean lines, neutral tones, and carefully selected decor pieces. The open-plan layout maximizes space and natural light, creating a peaceful sanctuary in the heart of the city. Every element has been thoughtfully considered to create a harmonious living environment.",
            date: "2024-11-20",
            location: "Hyderabad, Telangana",
            client: "Priya Sharma",
            area: "380 sq.ft",
            duration: "2.5 months",
            budget: "₹18 Lakhs",
            status: "Completed",
            featured: false,
            rating: 4.8,
            reviews: 24,
            tags: ["Minimalist", "Contemporary", "Neutral", "Serene"],
            gallery: [
                "https://images.unsplash.com/photo-1618220179428-22790b461013?w=1200&h=800&fit=crop",
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
                "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=1200&h=800&fit=crop",
            ],
            materials: [
                { name: "Engineered Wood", usage: "Flooring", quantity: "100 sq.ft" },
                { name: "Cotton Fabric", usage: "Upholstery", quantity: "80 sq.ft" },
                { name: "Glass", usage: "Partitions", quantity: "30 sq.ft" },
            ],
            process: [
                { phase: "Concept Design", duration: "1.5 weeks", description: "Initial consultation and design concepts" },
                { phase: "3D Visualization", duration: "2 weeks", description: "Detailed renderings" },
                { phase: "Material Selection", duration: "1.5 weeks", description: "Material curation" },
                { phase: "Execution", duration: "4 weeks", description: "Construction and installation" },
                { phase: "Handover", duration: "1 week", description: "Project completion" },
            ],
            timeline: [
                { phase: "Design Phase", start: "Sep 2024", end: "Oct 2024", status: "Completed" },
                { phase: "Material Procurement", start: "Oct 2024", end: "Nov 2024", status: "Completed" },
                { phase: "Construction", start: "Nov 2024", end: "Dec 2024", status: "Completed" },
                { phase: "Project Handover", start: "Dec 2024", end: "Dec 2024", status: "Completed" },
            ],
            similarProjects: [
                { id: 1, title: "Modern Living Room", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop" },
                { id: 3, title: "Luxury Villa Living Room", image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=400&h=300&fit=crop" },
            ],
            testimonials: [
                { name: "Priya Sharma", text: "Amazing work! The team understood exactly what we wanted.", rating: 5, date: "Nov 2024" },
            ],
            keyFeatures: [
                "Open-plan layout",
                "Natural light optimization",
                "Neutral color palette",
                "Minimalist furniture",
                "Integrated storage",
            ],
            sustainability: [
                "Energy-efficient lighting",
                "Sustainable materials",
                "Water-saving fixtures",
            ],
        },
        // Add more projects with rich data...
    ];

    useEffect(() => {
        // Simulate API call
        setTimeout(() => {
            const found = projectsData.find((p) => p.id === parseInt(id));
            if (found) {
                setProject(found);
                setSelectedImage(found.image);
            }
            setLoading(false);
        }, 500);
    }, [id]);

    // Get category icon
    const getCategoryIcon = (category) => {
        const icons = {
            "Living Room": <Home className="w-5 h-5" />,
            Kitchen: <Layers className="w-5 h-5" />,
            Bedroom: <Home className="w-5 h-5" />,
            Bathroom: <Ruler className="w-5 h-5" />,
            Office: <Building className="w-5 h-5" />,
            Commercial: <Building className="w-5 h-5" />,
            Outdoor: <Palette className="w-5 h-5" />,
            Villa: <Crown className="w-5 h-5" />,
            Decor: <Palette className="w-5 h-5" />,
        };
        return icons[category] || <Palette className="w-5 h-5" />;
    };

    const openLightbox = (index) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        document.body.style.overflow = "auto";
    };

    const navigateLightbox = (direction) => {
        const newIndex = lightboxIndex + direction;
        if (newIndex >= 0 && newIndex < project.gallery.length) {
            setLightboxIndex(newIndex);
        }
    };

    const toggleSection = (section) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading project details...</p>
                </div>
            </div>
        );
    }

    if (!project) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="text-6xl mb-4">🔍</div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Project Not Found</h2>
                    <p className="text-gray-600">The project you're looking for doesn't exist.</p>
                    <Link
                        to="/projects"
                        className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Back to Projects
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50">
            {/* Back Button */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
                <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-orange-500 transition-colors group"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span>Back to Projects</span>
                </Link>
            </div>

            {/* Hero Section with Full Image */}
            <section className="relative overflow-hidden">
                <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                    {/* Floating Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-12 text-white">
                        <div className="container mx-auto max-w-6xl">
                            <div className="flex flex-wrap items-center gap-2 mb-3">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-orange-500 rounded-full text-sm font-medium">
                                    {getCategoryIcon(project.category)}
                                    {project.category}
                                </span>
                                {project.featured && (
                                    <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full text-sm font-medium flex items-center gap-1">
                                        <Award className="w-4 h-4" />
                                        Featured
                                    </span>
                                )}
                                <span className="px-3 py-1 bg-green-500 rounded-full text-sm font-medium">
                                    {project.status}
                                </span>
                            </div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                                {project.title}
                            </h1>
                            <p className="text-lg sm:text-xl text-white/80 max-w-2xl">
                                {project.description}
                            </p>
                            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-white/70">
                                <span className="flex items-center gap-1.5">
                                    <Calendar className="w-4 h-4" />
                                    {new Date(project.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <MapPin className="w-4 h-4" />
                                    {project.location}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <Users className="w-4 h-4" />
                                    {project.client}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== Quick Stats Bar ===== */}
            <section className="sticky top-0 z-20 bg-white/90">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">

                        {/* Area */}
                        <div className="shadow-2xl flex flex-col items-center justify-center py-5 border-r-2 border-gray-200 last:border-r-0">
                            <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-gray-400">
                                Area
                            </span>
                            <span className="mt-2 text-lg font-bold text-gray-900">
                                {project.area}
                            </span>
                        </div>

                        {/* Duration */}
                        <div className="shadow-2xl flex flex-col items-center justify-center py-5 border-r-2 border-gray-200 last:border-r-0">
                            <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-gray-400">
                                Duration
                            </span>
                            <span className="mt-2 text-lg font-bold text-gray-900">
                                {project.duration}
                            </span>
                        </div>

                        {/* Budget */}
                        <div className="shadow-2xl flex flex-col items-center justify-center py-5 border-r-2 border-gray-200 last:border-r-0">
                            <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-gray-400">
                                Budget
                            </span>
                            <span className="mt-2 text-lg font-bold text-gray-900">
                                {project.budget}
                            </span>
                        </div>

                        {/* Client */}
                        <div className="shadow-2xl flex flex-col items-center justify-center py-5 border-r-2 border-gray-200 last:border-r-0">
                            <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-gray-400">
                                Client
                            </span>
                            <span className="mt-2 text-lg font-bold text-gray-900 truncate max-w-[140px]">
                                {project.client}
                            </span>
                        </div>

                        {/* Rating */}
                        <div className="shadow-2xl flex flex-col items-center justify-center py-5 border-r-2 border-gray-200 last:border-r-0">
                            <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-gray-400">
                                Rating
                            </span>
                            <span className="mt-2 flex items-center gap-1 text-lg font-bold text-gray-900">
                                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                                {project.rating}
                            </span>
                        </div>

                        {/* Reviews */}
                        <div className="shadow-2xl flex flex-col items-center justify-center py-5">
                            <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-gray-400">
                                Reviews
                            </span>
                            <span className="mt-2 text-lg font-bold text-gray-900">
                                {project.reviews}
                            </span>
                        </div>

                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                <div className="max-w-6xl mx-auto">
                    {/* Tab Navigation */}
                    <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200">
                        {[
                            { id: "overview", label: "Overview", icon: <Sparkles className="w-4 h-4" /> },
                            { id: "gallery", label: "Gallery", icon: <ImageIcon className="w-4 h-4" /> },
                            { id: "materials", label: "Materials", icon: <Layers className="w-4 h-4" /> },
                            { id: "process", label: "Process", icon: <Clock className="w-4 h-4" /> },
                            { id: "testimonials", label: "Testimonials", icon: <MessageCircle className="w-4 h-4" /> },
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 border-b-2 ${activeTab === tab.id
                                    ? "border-orange-500 text-orange-600"
                                    : "border-transparent text-gray-500 hover:text-gray-700"
                                    }`}
                            >
                                {tab.icon}
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                        {/* Overview Tab */}
                        {activeTab === "overview" && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="prose prose-orange max-w-none">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
                                    <p className="text-gray-600 leading-relaxed">{project.longDescription}</p>
                                </div>

                                {/* Key Features */}
                                <div className="mt-8">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {project.keyFeatures.map((feature, index) => (
                                            <div key={index} className="flex items-center gap-2 text-gray-600">
                                                <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Sustainability */}
                                <div className="mt-8">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Sustainability Features</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {project.sustainability.map((item, index) => (
                                            <div key={index} className="flex items-center gap-2 text-gray-600">
                                                <TrendingUp className="w-5 h-5 text-green-500 flex-shrink-0" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Tags */}
                                <div className="mt-8">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Project Tags</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-sm"
                                            >
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Project Timeline */}
                                <div className="mt-8">
                                    <button
                                        onClick={() => toggleSection('timeline')}
                                        className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                                    >
                                        <span className="font-bold text-gray-900">Project Timeline</span>
                                        {expandedSections.timeline ? (
                                            <ChevronUp className="w-5 h-5 text-gray-500" />
                                        ) : (
                                            <ChevronDown className="w-5 h-5 text-gray-500" />
                                        )}
                                    </button>
                                    <AnimatePresence>
                                        {expandedSections.timeline && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="mt-4 space-y-3">
                                                    {project.timeline.map((item, index) => (
                                                        <div key={index} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                                                            <div className="flex-1">
                                                                <div className="font-medium text-gray-900">{item.phase}</div>
                                                                <div className="text-sm text-gray-500">
                                                                    {item.start} - {item.end}
                                                                </div>
                                                            </div>
                                                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                                                                {item.status}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        )}

                        {/* Gallery Tab */}
                        {activeTab === "gallery" && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Gallery</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {project.gallery.map((img, index) => (
                                        <div
                                            key={index}
                                            onClick={() => openLightbox(index)}
                                            className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
                                        >
                                            <img
                                                src={img}
                                                alt={`${project.title} - ${index + 1}`}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                                                    <Maximize2 className="w-5 h-5 text-orange-500" />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* Materials Tab */}
                        {activeTab === "materials" && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Materials Used</h2>
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="bg-gray-50">
                                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Material</th>
                                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Usage</th>
                                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Quantity</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            {project.materials.map((material, index) => (
                                                <tr key={index} className="hover:bg-orange-50 transition-colors">
                                                    <td className="px-4 py-3 font-medium text-gray-900">{material.name}</td>
                                                    <td className="px-4 py-3 text-gray-600">{material.usage}</td>
                                                    <td className="px-4 py-3 text-gray-600">{material.quantity}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </motion.div>
                        )}

                        {/* Process Tab */}
                        {activeTab === "process" && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Process</h2>
                                <div className="space-y-4">
                                    {project.process.map((phase, index) => (
                                        <div key={index} className="flex gap-4 p-4 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                                            <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                                                {index + 1}
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex flex-wrap items-center justify-between gap-2">
                                                    <h3 className="font-bold text-gray-900">{phase.phase}</h3>
                                                    <span className="text-sm text-orange-600 font-medium">{phase.duration}</span>
                                                </div>
                                                <p className="text-gray-600 text-sm mt-1">{phase.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* Testimonials Tab */}
                        {activeTab === "testimonials" && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Client Testimonials</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {project.testimonials.map((testimonial, index) => (
                                        <div key={index} className="p-6 bg-gray-50 rounded-xl">
                                            <div className="flex items-center gap-1 mb-2">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className={`w-4 h-4 ${i < testimonial.rating ? "text-orange-500 fill-orange-500" : "text-gray-300"}`}
                                                    />
                                                ))}
                                            </div>
                                            <p className="text-gray-600 italic">"{testimonial.text}"</p>
                                            <div className="mt-4">
                                                <div className="font-medium text-gray-900">{testimonial.name}</div>
                                                <div className="text-sm text-gray-500">{testimonial.date}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </section>

            {/* Similar Projects */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Similar Projects</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {project.similarProjects.map((similar) => (
                            <Link
                                key={similar.id}
                                to={`/project/${similar.id}`}
                                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={similar.image}
                                        alt={similar.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <ArrowRight className="w-8 h-8 text-white" />
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                                        {similar.title}
                                    </h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-orange-600 to-orange-400 py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            Inspired by This Project?
                        </h2>
                        <p className="text-lg text-orange-50 mb-8">
                            Let's create something amazing for your space
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 px-8 py-3 bg-white text-orange-600 rounded-full font-medium hover:shadow-xl transition-all duration-300"
                            >
                                <Phone className="w-5 h-5" />
                                Get Free Consultation
                            </Link>
                            <Link
                                to="/services/interior-design"
                                className="inline-flex items-center gap-2 px-8 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-orange-600 transition-all duration-300"
                            >
                                <Briefcase className="w-5 h-5" />
                                View Our Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            {lightboxOpen && project.gallery && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-lg"
                    onClick={closeLightbox}
                >
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors z-20 bg-black/30 hover:bg-black/50 rounded-full p-2"
                    >
                        <X className="w-8 h-8" />
                    </button>

                    {project.gallery.length > 1 && (
                        <>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    navigateLightbox(-1);
                                }}
                                className={`absolute left-4 text-white/60 hover:text-white transition-colors z-20 bg-black/30 hover:bg-black/50 rounded-full p-3 ${lightboxIndex === 0 ? "opacity-30 cursor-not-allowed" : ""
                                    }`}
                                disabled={lightboxIndex === 0}
                            >
                                <ChevronLeft className="w-8 h-8" />
                            </button>

                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    navigateLightbox(1);
                                }}
                                className={`absolute right-4 text-white/60 hover:text-white transition-colors z-20 bg-black/30 hover:bg-black/50 rounded-full p-3 ${lightboxIndex === project.gallery.length - 1
                                    ? "opacity-30 cursor-not-allowed"
                                    : ""
                                    }`}
                                disabled={lightboxIndex === project.gallery.length - 1}
                            >
                                <ChevronRight className="w-8 h-8" />
                            </button>
                        </>
                    )}

                    <div
                        className="relative max-w-6xl max-h-[90vh] w-full mx-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={project.gallery[lightboxIndex]}
                            alt={`${project.title} - ${lightboxIndex + 1}`}
                            className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                        />
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm">
                            {lightboxIndex + 1} / {project.gallery.length}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectDetail;