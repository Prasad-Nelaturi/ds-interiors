import { useEffect } from "react";

const SEO = ({
    title,
    description,
    keywords,
    canonical,
    noIndex = false,
}) => {
    useEffect(() => {
        // TITLE
        document.title = title || "Dsigner Studio Interiors";

        // DESCRIPTION
        let descriptionTag = document.querySelector(
            'meta[name="description"]'
        );

        if (!descriptionTag) {
            descriptionTag = document.createElement("meta");
            descriptionTag.setAttribute("name", "description");
            document.head.appendChild(descriptionTag);
        }

        descriptionTag.setAttribute(
            "content",
            description || ""
        );

        // KEYWORDS
        if (keywords) {
            let keywordsTag = document.querySelector(
                'meta[name="keywords"]'
            );

            if (!keywordsTag) {
                keywordsTag = document.createElement("meta");
                keywordsTag.setAttribute("name", "keywords");
                document.head.appendChild(keywordsTag);
            }

            keywordsTag.setAttribute("content", keywords);
        }

        // CANONICAL
        if (canonical) {
            let canonicalTag = document.querySelector(
                'link[rel="canonical"]'
            );

            if (!canonicalTag) {
                canonicalTag = document.createElement("link");
                canonicalTag.setAttribute("rel", "canonical");
                document.head.appendChild(canonicalTag);
            }

            canonicalTag.setAttribute("href", canonical);
        }

        // ROBOTS
        let robotsTag = document.querySelector(
            'meta[name="robots"]'
        );

        if (!robotsTag) {
            robotsTag = document.createElement("meta");
            robotsTag.setAttribute("name", "robots");
            document.head.appendChild(robotsTag);
        }

        robotsTag.setAttribute(
            "content",
            noIndex
                ? "noindex, nofollow"
                : "index, follow"
        );
    }, [
        title,
        description,
        keywords,
        canonical,
        noIndex,
    ]);

    return null;
};

export default SEO;