import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { getSEOForRoute } from "../lib/seoData";

const SEO = ({
    title,
    description,
    keywords,
    image,
    imageAlt,
    canonical,
    noIndex,
}) => {
    const location = useLocation();
    const routeSEO = getSEOForRoute(location.pathname);

    const finalTitle = title || routeSEO.title;
    const finalDescription = description || routeSEO.description;
    const finalKeywords = keywords || routeSEO.keywords;
    const finalImage = image || routeSEO.image;
    const finalImageAlt = imageAlt || routeSEO.imageAlt;
    const finalCanonical = canonical || routeSEO.canonical;
    const finalNoIndex = noIndex ?? routeSEO.noIndex ?? false;
    const finalType = routeSEO.type || "website";
    const finalLocale = routeSEO.locale || "en_IN";

    // ============================================================
    // STRUCTURED DATA SCHEMAS
    // ============================================================
    const baseUrl = 'https://www.dsignerstudiointeriors.com';

    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'InteriorDesigner',
        '@id': `${baseUrl}/#business`,
        name: 'Dsigner Studio Interiors',
        url: baseUrl,
        logo: `${baseUrl}/ds-lg.jpeg`,
        image: `${baseUrl}/ds-lg.jpeg`,
        description: finalDescription,
        telephone: '+91 90109 89991',
        email: 'info@dsignerstudiointeriors.com',
        priceRange: '₹₹₹',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Hyderabad',
            addressRegion: 'Telangana',
            addressCountry: 'IN',
        },
        areaServed: {
            '@type': 'City',
            name: 'Hyderabad',
        },
        serviceType: [
            'Interior Design',
            'Residential Interior Design',
            'Commercial Interior Design',
            'Luxury Villa Interior Design',
            '3D Interior Visualization',
            'Home Automation',
            'Space Planning',
            'Landscaping',
            'Curtains and Blinds',
            'Chimneys and Hobs',
        ],
        openingHours: ['Mo-Sa 09:00-19:00'],
        sameAs: [
            'https://www.instagram.com/dsignerstudiointeriors/',
            'https://www.facebook.com/dsignerstudiointeriors/',
            'https://www.pinterest.com/dsignerstudiointeriors/',
        ],
    };

    const websiteSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${baseUrl}/#website`,
        url: baseUrl,
        name: 'Dsigner Studio Interiors',
        description: 'Premium interior design studio in Hyderabad',
        publisher: {
            '@id': `${baseUrl}/#business`,
        },
    };

    // Breadcrumb Schema
    const segments = location.pathname.split('/').filter(Boolean);
    const breadcrumbItems = [
        {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${baseUrl}/`,
        },
    ];

    let currentPath = '';
    segments.forEach((segment, index) => {
        currentPath += `/${segment}`;
        const name = segment
            .split('-')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        breadcrumbItems.push({
            '@type': 'ListItem',
            position: index + 2,
            name,
            item: `${baseUrl}${currentPath}`,
        });
    });

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        '@id': `${baseUrl}${location.pathname}#breadcrumb`,
        itemListElement: breadcrumbItems,
    };

    return (
        <Helmet>
            {/* ✅ ONLY ONE title tag */}
            <title>{finalTitle}</title>

            <meta name="description" content={finalDescription} />

            {finalKeywords && (
                <meta name="keywords" content={finalKeywords} />
            )}

            <link rel="canonical" href={finalCanonical} />

            <meta
                name="robots"
                content={finalNoIndex ? "noindex, nofollow" : "index, follow"}
            />

            <meta property="og:title" content={finalTitle} />
            <meta property="og:description" content={finalDescription} />
            <meta property="og:url" content={finalCanonical} />
            <meta property="og:type" content={finalType} />
            <meta property="og:image" content={finalImage} />
            <meta property="og:image:alt" content={finalImageAlt} />
            <meta property="og:locale" content={finalLocale} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={finalTitle} />
            <meta name="twitter:description" content={finalDescription} />
            <meta name="twitter:image" content={finalImage} />

            {/* ✅ Structured Data Scripts - Only here, no title tags */}
            <script type="application/ld+json">
                {JSON.stringify(organizationSchema)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(websiteSchema)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(breadcrumbSchema)}
            </script>
        </Helmet>
    );
};

export default SEO;