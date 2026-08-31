import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { getSEOForRoute } from "../lib/seoData";

const SEO = () => {
    const { pathname } = useLocation();
    const seo = getSEOForRoute(pathname);

    // Force remove any duplicate title tags
    useEffect(() => {
        // Remove all existing title tags
        const titles = document.querySelectorAll('title');
        if (titles.length > 1) {
            // Keep only the last one (which is the most recent)
            for (let i = 0; i < titles.length - 1; i++) {
                titles[i].remove();
            }
        }

        // Also check if there's a title in the head that's not from Helmet
        const headTitle = document.querySelector('head > title');
        if (headTitle && headTitle.textContent !== seo.title) {
            headTitle.textContent = seo.title;
        }

        const gtmScripts = document.querySelectorAll('script[src*="googletagmanager.com/gtm.js"]');
        if (gtmScripts.length > 1) {
            for (let i = 1; i < gtmScripts.length; i++) {
                gtmScripts[i].remove();
            }
        }

    }, [seo.title]);

    return (
        <Helmet>
            {/* Force override with current route title */}
            <title>{seo.title}</title>

            {/* Add a unique identifier to ensure this is the only title */}
            {/* <title data-seo="true">{seo.title}</title> */}

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
            <meta property="og:image:alt" content={seo.imageAlt} />
            <meta property="og:locale" content={seo.locale || "en_IN"} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:image" content={seo.image} />
        </Helmet>
    );
};

export default SEO;