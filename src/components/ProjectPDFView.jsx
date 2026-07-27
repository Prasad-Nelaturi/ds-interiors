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
        } else {
            navigate("/projects");
        }
    }, [location, navigate]);

    if (!project) {
        return (
            <div className="h-screen flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 z-[9999] bg-white flex flex-col">
            {/* Modern PDF Header */}
            <header
                className="
        flex-shrink-0
        sticky top-0
        z-50
        bg-white/80
        backdrop-blur-xl
        border-b
        border-gray-200/70
        shadow-sm
    "
            >
                <div
                    className="
            flex
            items-center
            justify-between
            w-full
            px-3
            sm:px-5
            lg:px-8
            py-3
        "
                >

                    {/* Back Button */}
                    <button
                        onClick={() => navigate("/projects")}
                        className="
                group
                flex
                items-center
                gap-2
                px-3
                py-2
                rounded-xl
                text-gray-600
                hover:bg-orange-50
                hover:text-orange-500
                transition-all
                duration-300
            "
                    >
                        <div
                            className="
                    flex
                    items-center
                    justify-center
                    w-8
                    h-8
                    rounded-full
                    bg-gray-100
                    group-hover:bg-orange-100
                    transition
                "
                        >
                            <ArrowLeft
                                className="
                        w-4
                        h-4
                        sm:w-5
                        sm:h-5
                    "
                            />
                        </div>

                        <span
                            className="
                    hidden
                    sm:block
                    text-sm
                    font-medium
                "
                        >
                            Back
                        </span>
                    </button>



                    {/* Center Title */}
                    <div
                        className="
                flex-1
                flex
                justify-center
                px-3
            "
                    >
                        <div
                            className="
                    max-w-[180px]
                    sm:max-w-[350px]
                    lg:max-w-[600px]
                    px-4
                    py-2
                    rounded-full
                    bg-gray-100/80
                    border
                    border-gray-200
                "
                        >
                            <h1
                                className="
                        text-xs
                        sm:text-sm
                        lg:text-base
                        font-semibold
                        text-gray-800
                        truncate
                        text-center
                    "
                            >
                                {project.title}
                            </h1>
                        </div>
                    </div>



                    {/* Download Button */}
                    <a
                        href={project.pdfUrl}
                        download
                        className="
                group
                flex
                items-center
                gap-2
                px-3
                py-2
                rounded-xl
                bg-orange-500
                text-white
                hover:bg-orange-600
                shadow-md
                shadow-orange-200
                transition-all
                duration-300
            "
                        title="Download PDF"
                    >

                        <Download
                            className="
                    w-4
                    h-4
                    sm:w-5
                    sm:h-5
                    group-hover:translate-y-0.5
                    transition
                "
                        />

                        <span
                            className="
                    hidden
                    sm:inline
                    text-sm
                    font-medium
                "
                        >
                            Download
                        </span>

                    </a>

                </div>
            </header>

            <div className="flex-1 min-h-0 w-full">
                <iframe
                    src={`${project.pdfUrl}#toolbar=0&navpanes=0&scrollbar=0&view=Fit`}
                    title={project.title}
                    className="w-full h-full border-0"
                    style={{ display: 'block' }}
                />
            </div>
        </div>
    );
};

export default ProjectPDFView;