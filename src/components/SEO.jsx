import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { getSEOForRoute } from "../lib/seoData";

const SEO = () => {
    const { pathname } = useLocation();
    const seo = getSEOForRoute(pathname);

    return (
        <Helmet>
            <title>{seo.title}</title>

            <meta
                name="description"
                content={seo.description}
            />

            {seo.keywords && (
                <meta
                    name="keywords"
                    content={seo.keywords}
                />
            )}

            <link
                rel="canonical"
                href={seo.canonical}
            />

            <meta
                name="robots"
                content={
                    seo.noIndex
                        ? "noindex, nofollow"
                        : "index, follow"
                }
            />

            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:url" content={seo.canonical} />
            <meta property="og:type" content={seo.type || "website"} />
            <meta property="og:image" content={seo.image} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:image" content={seo.image} />
        </Helmet>
    );
};

export default SEO;