import React from "react";
import { useNavigate } from "react-router-dom";
import { Eye, ChevronRight, Sparkles } from "lucide-react";

const OurProjects = () => {
  const navigate = useNavigate();

  const projectsData = [
    {
      id: 1,
      title: "PRESTIGE BEVERLY HILLS",
      pdfUrl: "/images/projects/Prestige_Beverly_Hills.pdf",
    },
    {
      id: 2,
      title: "RAJAPUSHPA IMPERIA",
      pdfUrl: "/images/projects/RAJAPUSHPA_IMPERIA.pdf",
    },
    {
      id: 3,
      title: "MADHU PARK VILLE",
      pdfUrl: "/images/projects/Mdhu_Park_Ville.pdf",
    },
    {
      id: 4,
      title: "LAKSHMI CADILLAC B",
      pdfUrl: "/images/projects/Lakshmi_Cadillac_B.pdf",
    },
    {
      id: 5,
      title: "KHAMMAM OPTION",
      pdfUrl: "/images/projects/KHAMMAM_OPTION.pdf",
    },
    {
      id: 6,
      title: "ARUNACHALAM RESIDENCY",
      pdfUrl: "/images/projects/ARUNACHALAM_RESIDENCY.pdf",
    },
  ];

  const viewPDF = (project) => {
    document.title = project.title;
    navigate(`/project/${project.id}`, {
      state: { project },
    });
  };

  return (
    <section className="min-h-screen bg-[#faf8f6] py-24 relative">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-amber-50/50 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-stone-50/50 to-transparent rounded-full blur-3xl -z-10" />

      {/* Page Header - New Style */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-14">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-orange-50 rounded-full px-3 sm:px-5 py-1.5 sm:py-2 mb-4 sm:mb-6 shadow-md border border-orange-100">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500" />
            <span className="text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wide">
              Our Projects
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Where timeless elegance meets contemporary vision
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              onClick={() => viewPDF(project)}
              className="group cursor-pointer animate-fade-in"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-700 hover:-translate-y-2 border border-stone-100/50">
                {/* PDF Preview with Classic Frame */}
                <div className="relative h-[240px] sm:h-[260px] lg:h-[280px] overflow-hidden bg-stone-50">
                  {/* Classic Inner Frame */}
                  <div className="absolute inset-2 border border-stone-200/30 rounded-lg z-10 pointer-events-none" />

                  <iframe
                    src={`${project.pdfUrl}#page=1&toolbar=0&navpanes=0&scrollbar=0`}
                    title={project.title}
                    className="absolute top-0 left-0 w-full h-[420px] border-0 pointer-events-none"
                    style={{
                      transform: "scale(1)",
                      transformOrigin: "top left",
                    }}
                  />

                  {/* Modern Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-stone-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-xl">
                        <Eye className="w-6 h-6 text-stone-800" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Info with Classic Typography */}
                <div className="px-6 py-5 bg-white relative">
                  {/* Classic Corner Accent */}
                  <div className="absolute top-0 left-6 w-8 h-px bg-gradient-to-r from-amber-400 to-transparent" />

                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h2 className="text-lg text-orange-500 font-bold group-hover:text-orange-500 transition-colors duration-300 line-clamp-2">
                        {project.title}
                      </h2>
                      <p className="mt-1.5 text-xs text-gray-800 font-light tracking-widest uppercase">
                        View Project
                      </p>
                    </div>
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-8 h-8 rounded-full border border-stone-200 group-hover:border-orange-400 group-hover:bg-orange-50 flex items-center justify-center transition-all duration-300">
                        <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-orange-500 transition-colors duration-300" />
                      </div>
                    </div>
                  </div>

                  {/* Classic Underline */}
                  <div className="mt-3 h-px w-8 bg-gradient-to-r from-orange-300/50 to-transparent group-hover:w-16 transition-all duration-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Decoration */}
      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-4 text-stone-300">
          <span className="text-xs tracking-[0.2em] font-light">—</span>
          <span className="text-orange-300/30 text-sm">◆</span>
          <span className="text-xs tracking-[0.2em] font-light">—</span>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-in {
                    animation: fade-in 0.6s ease-out both;
                }
            `}</style>
    </section>
  );
};

export default OurProjects;
