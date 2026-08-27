import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
    generateServiceSchema,
    generateBreadcrumbSchema,
    generateOrganizationSchema
} from '../utils/schemaGenerator';

const SchemaMarkup = ({
    serviceData,
    pageUrl,
    includeOrganization = true,
    breadcrumbItems = null
}) => {
    const schemas = [];

    // Add organization schema (global)
    if (includeOrganization) {
        schemas.push(generateOrganizationSchema());
    }

    // Add service schema
    if (serviceData) {
        schemas.push(generateServiceSchema(serviceData, pageUrl));
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