import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
    generateServiceSchema,
    generateHomepageSchema,
    generateLocalBusinessSchema,
    generateFAQSchema,
    generateHowToSchema,
    generateOrganizationSchema,
    generateBreadcrumbSchema
} from '../utils/schemaGenerator';

const SchemaMarkup = ({
    // Service page props
    serviceData,
    // Homepage props
    homepageData,
    businessData,
    faqs,
    processData,
    // Common props
    pageUrl,
    includeOrganization = true,
    breadcrumbItems = null,
    isHomepage = false
}) => {
    const schemas = [];

    // Add organization schema (global)
    if (includeOrganization) {
        schemas.push(generateOrganizationSchema());
    }

    // Add homepage specific schemas
    if (isHomepage) {
        if (homepageData) {
            schemas.push(generateHomepageSchema(homepageData));
        }
        if (businessData) {
            schemas.push(generateLocalBusinessSchema(businessData));
        }
        if (faqs && faqs.length > 0) {
            const faqSchema = generateFAQSchema(faqs);
            if (faqSchema) schemas.push(faqSchema);
        }
        if (processData) {
            const howToSchema = generateHowToSchema(processData);
            if (howToSchema) schemas.push(howToSchema);
        }
    } else {
        // Add service schema
        if (serviceData) {
            schemas.push(generateServiceSchema(serviceData, pageUrl));
        }
    }

    // Add breadcrumb schema
    if (breadcrumbItems) {
        schemas.push(generateBreadcrumbSchema(breadcrumbItems));
    }

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(schemas)}
            </script>
        </Helmet>
    );
};

export default SchemaMarkup;