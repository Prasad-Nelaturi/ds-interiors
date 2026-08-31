import React, { useEffect, useRef, useState } from "react";
import {
  Eye,
  ChevronRight,
  Sparkles,
  ArrowLeft,
  Download,
} from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";

// PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.8.69/pdf.worker.min.js";

const OurProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [containerWidth, setContainerWidth] = useState({});
  const [pdfErrors, setPdfErrors] = useState({});
  const containerRefs = useRef({});

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

  const getPdfUrl = (pdfPath) => {
    if (pdfPath.startsWith("http")) {
      return pdfPath;
    }

    return `${window.location.origin}${pdfPath}`;
  };

  // Update PDF preview widths
  useEffect(() => {
    const updateWidths = () => {
      const widths = {};

      projectsData.forEach((project) => {
        const container = containerRefs.current[project.id];

        if (container) {
          widths[project.id] = container.offsetWidth;
        }
      });

      setContainerWidth(widths);
    };

    updateWidths();

    window.addEventListener("resize", updateWidths);

    return () => {
      window.removeEventListener("resize", updateWidths);
    };
  }, []);

  // Open PDF viewer
  const openProject = (project) => {
    setSelectedProject(project);
    document.title = project.title;

    // Prevent background page from scrolling
    document.body.style.overflow = "hidden";
  };

  // Close PDF viewer
  const closeProject = () => {
    setSelectedProject(null);

    document.title = "Our Projects";

    document.body.style.overflow = "";
  };

  // Browser back button
  useEffect(() => {
    const handlePopState = () => {
      if (selectedProject) {
        closeProject();
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  // Escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && selectedProject) {
        closeProject();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedProject]);

  /*
   * FULL SCREEN PDF VIEWER
   */
  if (selectedProject) {
    const pdfUrl = getPdfUrl(selectedProject.pdfUrl);

    return (
      <div className="fixed inset-0 z-[99999] flex h-[100dvh] w-full flex-col bg-[#f5f5f5]">
        {/* HEADER */}
        <header className="flex h-[60px] min-h-[60px] w-full shrink-0 items-center border-b border-gray-200 bg-white px-2 sm:px-4">
          {/* BACK BUTTON */}
          <button
            type="button"
            onClick={closeProject}
            className="flex shrink-0 items-center gap-2 rounded-lg p-1.5 transition hover:bg-gray-100 sm:p-2"
            aria-label="Back to projects"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100">
              <ArrowLeft size={19} />
            </span>

            <span className="hidden text-sm font-medium text-gray-700 sm:inline">
              Back
            </span>
          </button>

          {/* TITLE */}
          <div className="min-w-0 flex-1 px-2 sm:px-4">
            <div className="mx-auto w-fit max-w-full rounded-full border border-gray-200 bg-gray-100 px-3 py-2 sm:px-5">
              <h1 className="max-w-[180px] truncate text-center text-xs font-semibold text-gray-800 sm:max-w-[450px] sm:text-sm md:max-w-[600px]">
                {selectedProject.title}
              </h1>
            </div>
          </div>

          {/* DOWNLOAD */}
          <a
            href={selectedProject.pdfUrl}
            download
            className="flex h-9 shrink-0 items-center justify-center gap-2 rounded-lg bg-orange-500 px-3 text-white transition hover:bg-orange-600 sm:px-4"
            aria-label={`Download ${selectedProject.title}`}
          >
            <Download size={17} />

            <span className="hidden text-sm font-medium sm:inline">
              Download
            </span>
          </a>
        </header>

        {/* PDF AREA */}
        <main className="relative min-h-0 flex-1 overflow-hidden">
          <iframe
            src={`${pdfUrl}#toolbar=0&navpanes=0&statusbar=0&messages=0`}
            title={selectedProject.title}
            className="absolute inset-0 h-full w-full border-0"
          />
        </main>
      </div>
    );
  }

  /*
   * PROJECT LIST
   */
  return (
    <section className="relative min-h-screen bg-[#faf8f6] py-20 sm:py-24">
      {/* Background decoration */}
      <div className="absolute right-0 top-0 -z-0 h-1/3 w-1/3 rounded-full bg-gradient-to-bl from-amber-50/50 to-transparent blur-3xl" />

      <div className="absolute bottom-0 left-0 -z-0 h-1/4 w-1/4 rounded-full bg-gradient-to-tr from-stone-50/50 to-transparent blur-3xl" />

      {/* HEADER */}
      <div className="relative z-10 mx-auto mb-12 max-w-7xl px-4 sm:mb-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-100 bg-gradient-to-r from-amber-50 to-orange-50 px-3 py-1.5 shadow-md sm:mb-6 sm:px-5 sm:py-2">
            <Sparkles className="h-3 w-3 text-orange-500 sm:h-4 sm:w-4" />

            <span className="text-xs font-semibold uppercase tracking-wide text-gray-700 sm:text-sm">
              Our Projects
            </span>
          </div>

          {/* Heading */}
          <h1 className="mb-3 text-3xl font-bold text-gray-900 sm:mb-4 sm:text-4xl md:text-5xl lg:text-6xl">
            Our{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto max-w-2xl text-sm text-gray-600 sm:text-base md:text-lg">
            Where timeless elegance meets contemporary vision
          </p>
        </div>
      </div>

      {/* PROJECT GRID */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
          {projectsData.map((project, index) => (
            <button
              key={project.id}
              type="button"
              onClick={() => openProject(project)}
              className="group block w-full cursor-pointer text-left focus:outline-none"
              style={{
                animation: `fade-in 0.6s ease-out both ${index * 100
                  }ms`,
              }}
            >
              <div className="overflow-hidden rounded-2xl border border-stone-100/50 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                {/* PDF PREVIEW */}
                <div
                  ref={(el) => {
                    containerRefs.current[project.id] = el;
                  }}
                  className="relative flex h-[220px] w-full items-center justify-center overflow-hidden bg-stone-50 sm:h-[260px] lg:h-[280px]"
                >
                  {/* Border */}
                  <div className="pointer-events-none absolute inset-2 z-10 rounded-lg border border-stone-200/30" />

                  {/* PDF */}
                  {!pdfErrors[project.id] ? (
                    <Document
                      file={getPdfUrl(project.pdfUrl)}
                      loading={
                        <div className="flex h-full w-full items-center justify-center">
                          <div className="text-sm text-gray-400">
                            Loading preview...
                          </div>
                        </div>
                      }
                      error={(error) => {
                        console.error(
                          "PDF Error:",
                          project.title,
                          error
                        );

                        setPdfErrors((prev) => ({
                          ...prev,
                          [project.id]: true,
                        }));

                        return (
                          <div className="flex h-full w-full items-center justify-center">
                            <span className="text-sm text-gray-400">
                              Preview not available
                            </span>
                          </div>
                        );
                      }}
                    >
                      <Page
                        pageNumber={1}
                        width={containerWidth[project.id] || 400}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                      />
                    </Document>
                  ) : (
                    <iframe
                      src={`https://docs.google.com/viewer?url=${encodeURIComponent(
                        getPdfUrl(project.pdfUrl)
                      )}&embedded=true`}
                      title={project.title}
                      className="h-full w-full border-0"
                    />
                  )}

                  {/* HOVER OVERLAY */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-stone-900/60 via-stone-900/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                      <div className="rounded-full bg-white/90 p-3 shadow-xl backdrop-blur-sm">
                        <Eye className="h-6 w-6 text-stone-800" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* PROJECT INFO */}
                <div className="relative bg-white px-5 py-5 sm:px-6">
                  {/* Accent */}
                  <div className="absolute left-6 top-0 h-px w-8 bg-gradient-to-r from-amber-400 to-transparent" />

                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <h2 className="line-clamp-2 text-base font-bold text-orange-500 transition-colors duration-300 sm:text-lg">
                        {project.title}
                      </h2>

                      <p className="mt-1.5 text-xs font-light uppercase tracking-widest text-gray-800">
                        View Project
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="mt-0.5 shrink-0">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-stone-200 transition-all duration-300 group-hover:border-orange-400 group-hover:bg-orange-50">
                        <ChevronRight className="h-4 w-4 text-stone-400 transition-colors duration-300 group-hover:text-orange-500" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom accent */}
                  <div className="mt-3 h-px w-8 bg-gradient-to-r from-orange-300/50 to-transparent transition-all duration-500 group-hover:w-16" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom decoration */}
      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-4 text-stone-300">
          <span className="text-xs font-light tracking-[0.2em]">
            —
          </span>

          <span className="text-sm text-orange-300/30">◆</span>

          <span className="text-xs font-light tracking-[0.2em]">
            —
          </span>
        </div>
      </div>

      <style>{`
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

        .react-pdf__Page {
          width: 100% !important;
          height: 100% !important;
        }

        .react-pdf__Page canvas {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
        }
      `}</style>
    </section>
  );
};

export default OurProjects;
