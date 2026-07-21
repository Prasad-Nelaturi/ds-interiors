import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    Calendar,
    MapPin,
    Users,
    Ruler,
    Clock,
    Award,
    TrendingUp,
    CheckCircle,
    Play,
    ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const OurProjects = () => {
    const [activeFilter, setActiveFilter] = useState("All");
    const [hoveredProject, setHoveredProject] = useState(null);
    const [showAll, setShowAll] = useState(false);

    // Project Data
    const projectsData = [
        {
            id: 1,
            title: "Modern Living Room",
            category: "Residential",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
            description: "Contemporary living space with premium finishes",
            location: "Hyderabad",
            year: "2024",
            client: "Rajesh Kumar",
            area: "450 sq.ft",
            duration: "3 months",
            status: "Completed",
            featured: true,
            tags: ["Modern", "Luxury", "Natural Light"],
        },
        {
            id: 2,
            title: "Minimalist Living Space",
            category: "Residential",
            image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&h=600&fit=crop",
            description: "Clean lines and neutral tones create serenity",
            location: "Hyderabad",
            year: "2024",
            client: "Priya Sharma",
            area: "380 sq.ft",
            duration: "2.5 months",
            status: "Completed",
            featured: false,
            tags: ["Minimalist", "Contemporary"],
        },
        {
            id: 3,
            title: "Luxury Villa Interior",
            category: "Villa",
            image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=800&h=600&fit=crop",
            description: "Elegant villa with high-end finishes",
            location: "Hyderabad",
            year: "2024",
            client: "Amit Singh",
            area: "550 sq.ft",
            duration: "4 months",
            status: "Completed",
            featured: true,
            tags: ["Luxury", "Villa", "Elegant"],
        },
        {
            id: 4,
            title: "Modern Modular Kitchen",
            category: "Kitchen",
            image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&h=600&fit=crop",
            description: "State-of-the-art modular kitchen",
            location: "Hyderabad",
            year: "2024",
            client: "Sneha Reddy",
            area: "220 sq.ft",
            duration: "2 months",
            status: "Completed",
            featured: false,
            tags: ["Modular", "Modern"],
        },
        {
            id: 5,
            title: "Luxury Kitchen Design",
            category: "Kitchen",
            image: "https://images.unsplash.com/photo-1588854337115-1c67d9247e4d?w=800&h=600&fit=crop",
            description: "High-end kitchen with marble countertops",
            location: "Hyderabad",
            year: "2024",
            client: "Vikram Patel",
            area: "280 sq.ft",
            duration: "3 months",
            status: "Completed",
            featured: true,
            tags: ["Luxury", "Marble"],
        },
        {
            id: 6,
            title: "Master Bedroom Suite",
            category: "Residential",
            image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&h=600&fit=crop",
            description: "Spacious master bedroom with walk-in closet",
            location: "Hyderabad",
            year: "2024",
            client: "Deepak Kumar",
            area: "500 sq.ft",
            duration: "3.5 months",
            status: "Completed",
            featured: true,
            tags: ["Master", "Luxury"],
        },
        {
            id: 7,
            title: "Corporate Office Interior",
            category: "Commercial",
            image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop",
            description: "Professional office with collaborative spaces",
            location: "Hyderabad",
            year: "2024",
            client: "Tech Innovations",
            area: "2500 sq.ft",
            duration: "6 months",
            status: "Completed",
            featured: false,
            tags: ["Corporate", "Collaborative"],
        },
        {
            id: 8,
            title: "Restaurant Interior",
            category: "Commercial",
            image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
            description: "Elegant restaurant with warm ambiance",
            location: "Hyderabad",
            year: "2024",
            client: "Gourmet Kitchen",
            area: "1800 sq.ft",
            duration: "5 months",
            status: "Completed",
            featured: false,
            tags: ["Restaurant", "Elegant"],
        },
        {
            id: 9,
            title: "Landscape Garden Design",
            category: "Outdoor",
            image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&h=600&fit=crop",
            description: "Beautiful garden with water features",
            location: "Hyderabad",
            year: "2024",
            client: "Green Living Estates",
            area: "5000 sq.ft",
            duration: "8 months",
            status: "Completed",
            featured: true,
            tags: ["Garden", "Landscape"],
        },
        {
            id: 10,
            title: "Luxury Bathroom Design",
            category: "Residential",
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop",
            description: "Spa-inspired bathroom with premium fixtures",
            location: "Hyderabad",
            year: "2024",
            client: "Meera Reddy",
            area: "200 sq.ft",
            duration: "2.5 months",
            status: "Completed",
            featured: false,
            tags: ["Luxury", "Spa"],
        },
        {
            id: 11,
            title: "Modern Home Office",
            category: "Commercial",
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
            description: "Ergonomic home office with natural light",
            location: "Hyderabad",
            year: "2024",
            client: "Rahul Verma",
            area: "180 sq.ft",
            duration: "1.5 months",
            status: "Completed",
            featured: false,
            tags: ["Home Office", "Ergonomic"],
        },
        {
            id: 12,
            title: "Retail Store Design",
            category: "Commercial",
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
            description: "Modern retail with strategic lighting",
            location: "Hyderabad",
            year: "2024",
            client: "Fashion Boutique",
            area: "1200 sq.ft",
            duration: "4 months",
            status: "Completed",
            featured: false,
            tags: ["Retail", "Commercial"],
        },
    ];

    const categories = ["All", "Residential", "Commercial", "Kitchen", "Villa", "Outdoor"];

    const filteredProjects = useMemo(() => {
        if (activeFilter === "All") return projectsData;
        return projectsData.filter(p => p.category === activeFilter);
    }, [activeFilter]);

    const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

    // Stats
    const stats = [
        { value: "500+", label: "Projects", icon: <Award className="w-5 h-5 text-orange-500" /> },
        { value: "480+", label: "Happy Clients", icon: <Users className="w-5 h-5 text-orange-500" /> },
        { value: "98%", label: "Satisfaction", icon: <CheckCircle className="w-5 h-5 text-orange-500" /> },
        { value: "12+", label: "Years Experience", icon: <TrendingUp className="w-5 h-5 text-orange-500" /> },
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 24,
            },
        },
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
            {/* Hero Section - Different from Gallery */}
            <section className="relative overflow-hidden bg-gradient-to-r from-orange-600 to-orange-400 pt-24 pb-16">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-4">
                                Our Portfolio
                            </span>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
                                Featured <span className="text-orange-200">Projects</span>
                            </h1>
                            <p className="text-lg text-orange-50 max-w-2xl mx-auto">
                                Explore our curated collection of exceptional interior design projects
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Bar - Different layout */}
            <section className="relative -mt-8 mb-12">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white rounded-2xl shadow-xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6"
                    >
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center group">
                                <div className="flex items-center justify-center mb-2">
                                    <div className="p-2 bg-orange-50 rounded-full group-hover:scale-110 transition-transform duration-300">
                                        {stat.icon}
                                    </div>
                                </div>
                                <div className="text-2xl md:text-3xl font-bold text-gray-900">{stat.value}</div>
                                <div className="text-sm text-gray-500">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Filter Section - With Horizontal Scroll */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-10">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    {/* Categories - Horizontal Scroll */}
                    <div className="w-full md:w-auto overflow-x-auto scrollbar-hide">
                        <div className="flex items-center gap-2 min-w-max pb-2 md:pb-0">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveFilter(category)}
                                    className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${activeFilter === category
                                            ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30"
                                            : "bg-white text-gray-600 hover:bg-orange-50 border border-gray-200"
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Results Count */}
                    <div className="flex-shrink-0 text-sm text-gray-500 whitespace-nowrap">
                        Showing {displayedProjects.length} of {filteredProjects.length} projects
                    </div>
                </div>
            </section>

            {/* Projects Grid - Unique card design */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                >
                    <AnimatePresence>
                        {displayedProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                variants={itemVariants}
                                layout
                                onMouseEnter={() => setHoveredProject(project.id)}
                                onMouseLeave={() => setHoveredProject(null)}
                                className="group"
                            >
                                <Link to={`/project/${project.id}`} className="block">
                                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                                        {/* Image Section */}
                                        <div className="relative overflow-hidden h-64">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                loading="lazy"
                                            />

                                            {/* Status Badge */}
                                            <div className="absolute top-4 left-4">
                                                <span className="px-3 py-1 bg-green-500 text-white text-xs font-medium rounded-full">
                                                    {project.status}
                                                </span>
                                            </div>

                                            {/* Featured Badge */}
                                            {project.featured && (
                                                <div className="absolute top-4 right-4">
                                                    <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-medium rounded-full flex items-center gap-1">
                                                        <Award className="w-3 h-3" />
                                                        Featured
                                                    </span>
                                                </div>
                                            )}

                                            {/* Hover Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                                <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform duration-500">
                                                    <ArrowRight className="w-6 h-6 text-orange-500" />
                                                </div>
                                            </div>

                                            {/* Category Tag */}
                                            <div className="absolute bottom-4 left-4">
                                                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700">
                                                    {project.category}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content Section */}
                                        <div className="p-5">
                                            <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors">
                                                {project.title}
                                            </h3>
                                            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                                                {project.description}
                                            </p>

                                            {/* Project Meta */}
                                            <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="w-3.5 h-3.5" />
                                                    {project.year}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <MapPin className="w-3.5 h-3.5" />
                                                    {project.location}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Ruler className="w-3.5 h-3.5" />
                                                    {project.area}
                                                </span>
                                            </div>

                                            {/* Tags */}
                                            <div className="mt-3 flex flex-wrap gap-1.5">
                                                {project.tags.slice(0, 3).map((tag, i) => (
                                                    <span
                                                        key={i}
                                                        className="text-[10px] bg-orange-50 text-orange-600 px-2 py-0.5 rounded-full"
                                                    >
                                                        #{tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Load More Button - Different style */}
                {filteredProjects.length > 6 && (
                    <div className="text-center mt-12">
                        <motion.button
                            onClick={() => setShowAll(!showAll)}
                            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full font-medium hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 group"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {showAll ? "Show Less" : "View All Projects"}
                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`} />
                        </motion.button>
                    </div>
                )}
            </section>

            {/* CTA Section - Different from gallery */}
            <section className="relative bg-gradient-to-r from-orange-600 to-orange-400 py-16 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                                Ready to Create Your <span className="text-orange-200">Dream Space?</span>
                            </h2>
                            <p className="text-lg text-orange-50 mb-8">
                                Let's discuss your project and bring your vision to life
                            </p>
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-orange-600 rounded-full font-medium hover:shadow-xl transition-all duration-300 group"
                            >
                                Start Your Project
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            <style>{`
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

export default OurProjects;