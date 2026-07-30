import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, Download } from "lucide-react";

const ProjectPDFView = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [project, setProject] = useState(null);

    useEffect(() => {
        if (location.state?.project) {
            setProject(location.state.project);
            document.title = location.state.project.title;
        } else {
            navigate("/projects", { replace: true });
        }
    }, [location.state, navigate]);

    if (!project) {
        return (
            <div className="w-full h-screen flex items-center justify-center bg-white">
                <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    return (
        <div
            className="pdf-viewer-page"
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: "100%",
                height: "100dvh",
                background: "#f5f5f5",
                display: "flex",
                flexDirection: "column",
                zIndex: 99999,
            }}
        >
            {/* HEADER */}
            <div
                style={{
                    height: "60px",
                    minHeight: "60px",
                    background: "#ffffff",
                    borderBottom: "1px solid #e5e7eb",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 12px",
                    flexShrink: 0,
                    zIndex: 10,
                }}
            >
                {/* BACK */}
                <button
                    onClick={() => navigate("/projects")}
                    style={{
                        border: 0,
                        background: "transparent",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "6px",
                    }}
                >
                    <span
                        style={{
                            width: "34px",
                            height: "34px",
                            borderRadius: "50%",
                            background: "#f3f4f6",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <ArrowLeft size={18} />
                    </span>

                    <span className="pdf-back-text">
                        Back
                    </span>
                </button>

                {/* TITLE */}
                <div
                    style={{
                        minWidth: 0,
                        flex: 1,
                        display: "flex",
                        justifyContent: "center",
                        padding: "0 8px",
                    }}
                >
                    <div
                        style={{
                            maxWidth: "400px",
                            background: "#f3f4f6",
                            border: "1px solid #e5e7eb",
                            borderRadius: "999px",
                            padding: "8px 16px",
                        }}
                    >
                        <h1
                            style={{
                                margin: 0,
                                fontSize: "14px",
                                fontWeight: 600,
                                color: "#1f2937",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                            }}
                        >
                            {project.title}
                        </h1>
                    </div>
                </div>

                {/* DOWNLOAD */}
                <a
                    href={project.pdfUrl}
                    download
                    style={{
                        height: "38px",
                        padding: "0 12px",
                        background: "#f97316",
                        color: "#ffffff",
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "7px",
                        textDecoration: "none",
                        flexShrink: 0,
                    }}
                >
                    <Download size={17} />

                    <span className="pdf-download-text">
                        Download
                    </span>
                </a>
            </div>

            {/* PDF */}
            <div
                style={{
                    position: "relative",
                    width: "100%",
                    flex: 1,
                    minHeight: 0,
                    overflow: "hidden",
                }}
            >
                <iframe
                    src={`${project.pdfUrl}#toolbar=0&navpanes=0&statusbar=0&messages=0`}
                    title={project.title}
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        border: "none",
                        display: "block",
                    }}
                />
            </div>

            <style>
                {`
                    .pdf-back-text,
                    .pdf-download-text {
                        display: inline;
                    }

                    @media (max-width: 640px) {
                        .pdf-back-text,
                        .pdf-download-text {
                            display: none;
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default ProjectPDFView;