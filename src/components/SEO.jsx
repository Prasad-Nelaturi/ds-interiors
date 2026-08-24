import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { getSEOForRoute } from "../config/seo";

const SEO = ({
    title,
    description,
    keywords,
    image,
    imageAlt,
    noIndex,
}) => {
    const location = useLocation();

    const routeSEO = getSEOForRoute(location.pathname);

    if (!routeSEO) {
        return (
            <Helmet>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>
        );
    }

    const finalTitle = title || routeSEO.title;
    const finalDescription = description || routeSEO.description;
    const finalKeywords = keywords || routeSEO.keywords;
    const finalImage = image || routeSEO.image;
    const finalImageAlt = imageAlt || routeSEO.imageAlt;
    const finalCanonical = routeSEO.canonical;

    return (
        <Helmet>
            <title>{finalTitle}</title>

            <meta
                name="description"
                content={finalDescription}
            />

            {finalKeywords && (
                <meta
                    name="keywords"
                    content={finalKeywords}
                />
            )}

            <link
                rel="canonical"
                href={finalCanonical}
            />

            <meta
                name="robots"
                content={
                    noIndex || routeSEO.noIndex
                        ? "noindex, nofollow"
                        : "index, follow"
                }
            />

            <meta
                property="og:title"
                content={finalTitle}
            />

            <meta
                property="og:description"
                content={finalDescription}
            />

            <meta
                property="og:url"
                content={finalCanonical}
            />

            <meta
                property="og:type"
                content={routeSEO.type || "website"}
            />

            <meta
                property="og:image"
                content={finalImage}
            />

            <meta
                property="og:image:alt"
                content={finalImageAlt}
            />

            <meta
                property="og:locale"
                content={routeSEO.locale || "en_IN"}
            />

            <meta
                name="twitter:card"
                content="summary_large_image"
            />

            <meta
                name="twitter:title"
                content={finalTitle}
            />

            <meta
                name="twitter:description"
                content={finalDescription}
            />

            <meta
                name="twitter:image"
                content={finalImage}
            />
        </Helmet>
    );
};

export default SEO;