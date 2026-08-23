import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { getSEOForRoute, defaultSEO } from '../lib/seoData';

const SEO = ({
    title,
    description,
    canonical,
    image,
    imageAlt,
    type = 'website',
    locale = 'en_IN',
    keywords,
    noIndex = false,
    publishedDate,
    modifiedDate,
    author = 'Dsigner Studio Interiors',
    children
}) => {
    const location = useLocation();
    const pathname = location.pathname;

    const routeSEO = getSEOForRoute(pathname);

    const finalTitle = title || routeSEO.title || defaultSEO.title;
    const finalDescription = description || routeSEO.description || defaultSEO.description;
    const finalCanonical = canonical || `${defaultSEO.canonical}${pathname}`;
    const finalImage = image || defaultSEO.image;
    const finalImageAlt = imageAlt || defaultSEO.imageAlt;
    const finalKeywords = keywords || routeSEO.keywords || defaultSEO.keywords;
    const finalNoIndex = noIndex || routeSEO.noIndex || false;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{finalTitle}</title>
            <meta name="description" content={finalDescription} />
            <meta name="keywords" content={finalKeywords} />

            {finalNoIndex ? (
                <meta name="robots" content="noindex, nofollow" />
            ) : (
                <meta name="robots" content="index, follow" />
            )}

            <link rel="canonical" href={finalCanonical} />

            {/* Open Graph Tags */}
            <meta property="og:type" content={type} />
            <meta property="og:site_name" content="Dsigner Studio Interiors" />
            <meta property="og:title" content={finalTitle} />
            <meta property="og:description" content={finalDescription} />
            <meta property="og:url" content={finalCanonical} />
            <meta property="og:image" content={finalImage} />
            <meta property="og:image:alt" content={finalImageAlt} />
            <meta property="og:locale" content={locale} />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={finalTitle} />
            <meta name="twitter:description" content={finalDescription} />
            <meta name="twitter:image" content={finalImage} />
            <meta name="twitter:image:alt" content={finalImageAlt} />

            {/* Article Meta Tags */}
            {type === 'article' && (
                <>
                    {publishedDate && <meta property="article:published_time" content={publishedDate} />}
                    {modifiedDate && <meta property="article:modified_time" content={modifiedDate} />}
                    <meta property="article:author" content={author} />
                </>
            )}

            {/* Additional Meta Tags */}
            <meta name="author" content={author} />
            <meta name="geo.region" content="IN-TG" />
            <meta name="geo.placename" content="Hyderabad" />
            <meta name="geo.position" content="17.385044;78.486671" />
            <meta name="ICBM" content="17.385044, 78.486671" />

            {/* Mobile App Links */}
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

            {/* Favicon */}
            <link rel="icon" type="image/jpeg" sizes="32x32" href="/ds-lg.jpeg" />
            <link rel="apple-touch-icon" href="/ds-lg.jpeg" />

            {children}
        </Helmet>
    );
};

export default SEO;