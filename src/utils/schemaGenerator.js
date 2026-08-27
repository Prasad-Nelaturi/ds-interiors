export const generateServiceSchema = (serviceData, pageUrl) => {
    const {
        title,
        description,
        image,
        features = [],
        benefits = [],
        process = [],
        faqs = [],
        serviceType,
        priceRange = "₹₹",
        rating = "4.9",
        reviewCount = "500+"
    } = serviceData;

    // Base schema
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": title,
        "description": description,
        "url": pageUrl,
        "provider": {
            "@type": "LocalBusiness",
            "name": "Dsigner Studio Interiors",
            "image": "https://www.dsignerstudiointeriors.com/images/logo.png",
            "url": "https://www.dsignerstudiointeriors.com",
            "telephone": "+91-XXXXXXXXXX",
            "email": "info@dsignerstudiointeriors.com",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Your Street Address",
                "addressLocality": "Hyderabad",
                "addressRegion": "Telangana",
                "postalCode": "500001",
                "addressCountry": "IN"
            },
            "priceRange": priceRange,
            "openingHours": "Mo-Sa 09:00-18:00",
            "sameAs": [
                "https://www.facebook.com/dsignerstudiointeriors",
                "https://www.instagram.com/dsignerstudiointeriors",
                "https://www.youtube.com/dsignerstudiointeriors"
            ]
        },
        "serviceType": serviceType || title,
        "areaServed": {
            "@type": "City",
            "name": "Hyderabad"
        },
        "audience": {
            "@type": "Audience",
            "name": "Homeowners and businesses in Hyderabad"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": `${title} Services`,
            "itemListElement": features.map((feature, index) => ({
                "@type": "Offer",
                "position": index + 1,
                "name": feature.title,
                "description": feature.description,
                "itemOffered": {
                    "@type": "Service",
                    "name": feature.title
                }
            }))
        }
    };

    // Add image if available
    if (image) {
        schema.image = image.startsWith('http') ? image : `https://www.dsignerstudiointeriors.com${image}`;
    }

    // Add aggregate rating
    if (rating) {
        schema.aggregateRating = {
            "@type": "AggregateRating",
            "ratingValue": rating,
            "reviewCount": reviewCount,
            "bestRating": "5"
        };
    }

    // Add benefits as potential action
    if (benefits && benefits.length > 0) {
        schema.potentialAction = benefits.map(benefit => ({
            "@type": "Action",
            "name": benefit,
            "description": benefit
        }));
    }

    // Add process steps
    if (process && process.length > 0) {
        schema.hasProcedure = {
            "@type": "HowTo",
            "name": `How we deliver ${title}`,
            "step": process.map((step, index) => ({
                "@type": "HowToStep",
                "position": index + 1,
                "name": step.title,
                "text": step.description
            }))
        };
    }

    // Add FAQ schema
    if (faqs && faqs.length > 0) {
        schema.mainEntity = {
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                }
            }))
        };
    }

    return schema;
};

// Breadcrumb schema generator
export const generateBreadcrumbSchema = (items) => {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
        }))
    };
};

// Organization schema
export const generateOrganizationSchema = () => {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Dsigner Studio Interiors",
        "url": "https://www.dsignerstudiointeriors.com",
        "logo": "https://www.dsignerstudiointeriors.com/images/logo.png",
        "description": "Premium interior design services in Hyderabad offering residential, commercial, and luxury interior design solutions.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Your Street Address",
            "addressLocality": "Hyderabad",
            "addressRegion": "Telangana",
            "postalCode": "500001",
            "addressCountry": "IN"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-XXXXXXXXXX",
            "contactType": "Sales",
            "availableLanguage": ["English", "Telugu", "Hindi"]
        },
        "sameAs": [
            "https://www.facebook.com/dsignerstudiointeriors",
            "https://www.instagram.com/dsignerstudiointeriors",
            "https://www.youtube.com/dsignerstudiointeriors",
            "https://www.linkedin.com/company/dsignerstudiointeriors"
        ]
    };
};