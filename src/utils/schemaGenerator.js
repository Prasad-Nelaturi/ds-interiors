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
            "telephone": "+91-9010989991",
            "email": "dsinteriorshyd1@gmail.com",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Door No 1-31/1, Raja Ram Enclave, Kondapur",
                "addressLocality": "Hyderabad",
                "addressRegion": "Telangana",
                "postalCode": "500084",
                "addressCountry": "IN"
            },
            "priceRange": priceRange,
            "openingHours": "Mo-Sa 09:00-19:00",
            "sameAs": [
                "https://www.facebook.com/profile.php?id=61590853052566",
                "https://www.instagram.com/dsignerstudiointeriors/",
                "https://www.linkedin.com/in/dsigner-studio-interiors-889670417/",
                "https://www.youtube.com/@DsignerstudioInteriors"
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
            "streetAddress": "Door No 1-31/1, Raja Ram Enclave, Kondapur",
            "addressLocality": "Hyderabad",
            "addressRegion": "Telangana",
            "postalCode": "500084",
            "addressCountry": "IN"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-9010989991",
            "contactType": "Sales",
            "availableLanguage": ["English", "Telugu", "Hindi"]
        },
        "sameAs": [
            "https://www.facebook.com/profile.php?id=61590853052566",
            "https://www.instagram.com/dsignerstudiointeriors/",
            "https://www.linkedin.com/in/dsigner-studio-interiors-889670417/",
            "https://www.youtube.com/@DsignerstudioInteriors"
        ]
    };
};

// ===== HOMEPAGE SCHEMAS =====

// Homepage Website Schema
export const generateHomepageSchema = (homepageData) => {
    const {
        title = "Dsigner Studio Interiors - Premium Interior Design in Hyderabad",
        description = "Dsigner Studio Interiors offers premium residential, commercial, and luxury interior design services in Hyderabad. Transform your space with our expert designers.",
        image = "/images/logo.png"
    } = homepageData;

    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Dsigner Studio Interiors",
        "url": "https://www.dsignerstudiointeriors.com",
        "description": description,
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.dsignerstudiointeriors.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    };
};

// LocalBusiness Schema for Homepage
export const generateLocalBusinessSchema = (businessData) => {
    const {
        name = "Dsigner Studio Interiors",
        description = "Premium interior design services in Hyderabad offering residential, commercial, and luxury interior design solutions.",
        image = "/images/logo.png",
        telephone = "+91-9010989991",
        email = "dsinteriorshyd1@gmail.com",
        address = {
            streetAddress: "Door No 1-31/1, Raja Ram Enclave, Kondapur",
            addressLocality: "Hyderabad",
            addressRegion: "Telangana",
            postalCode: "500084",
            addressCountry: "IN"
        },
        geo = {
            latitude: "17.4341",
            longitude: "78.3942"
        },
        priceRange = "₹₹₹",
        openingHours = "Mo-Sa 09:00-19:00",
        sameAs = [
            "https://www.facebook.com/profile.php?id=61590853052566",
            "https://www.instagram.com/dsignerstudiointeriors/",
            "https://www.linkedin.com/in/dsigner-studio-interiors-889670417/",
            "https://www.youtube.com/@DsignerstudioInteriors"
        ],
        services = [],
        awards = [],
        aggregateRating = {
            ratingValue: "4.8",
            reviewCount: "128",
            bestRating: "5"
        }
    } = businessData;

    return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": name,
        "description": description,
        "url": "https://www.dsignerstudiointeriors.com",
        "logo": `https://www.dsignerstudiointeriors.com${image}`,
        "image": `https://www.dsignerstudiointeriors.com${image}`,
        "telephone": telephone,
        "email": email,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": address.streetAddress,
            "addressLocality": address.addressLocality,
            "addressRegion": address.addressRegion,
            "postalCode": address.postalCode,
            "addressCountry": address.addressCountry
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": geo.latitude,
            "longitude": geo.longitude
        },
        "priceRange": priceRange,
        "openingHours": openingHours,
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "09:00",
                "closes": "19:00"
            }
        ],
        "sameAs": sameAs,
        "aggregateRating": aggregateRating,
        "hasOfferCatalog": services.length > 0 ? {
            "@type": "OfferCatalog",
            "name": "Interior Design Services",
            "itemListElement": services.map((service, index) => ({
                "@type": "Offer",
                "position": index + 1,
                "name": service.name || service.title,
                "description": service.description || service.subtitle,
                "url": service.url || `https://www.dsignerstudiointeriors.com/services/${service.slug || service.name?.toLowerCase().replace(/\s+/g, '-')}`
            }))
        } : undefined,
        "award": awards.length > 0 ? awards.map(award => award.name || award).join(", ") : undefined
    };
};

// FAQ Schema for Homepage
export const generateFAQSchema = (faqs) => {
    if (!faqs || faqs.length === 0) return null;

    return {
        "@context": "https://schema.org",
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
};

// HowTo Schema for Process
export const generateHowToSchema = (processData) => {
    const {
        name = "Our Interior Design Process",
        description = "Step-by-step guide to our interior design process",
        steps = []
    } = processData;

    if (!steps || steps.length === 0) return null;

    return {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": name,
        "description": description,
        "step": steps.map((step, index) => ({
            "@type": "HowToStep",
            "position": index + 1,
            "name": step.title,
            "text": step.description,
            "image": step.image ? `https://www.dsignerstudiointeriors.com${step.image}` : undefined
        }))
    };
};