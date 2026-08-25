import React from 'react';
import { useLocation } from 'react-router-dom';

const StructuredData = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const baseUrl = 'https://www.dsignerstudiointeriors.com';

  /*
   * ============================================================
   * ORGANIZATION / BUSINESS SCHEMA
   * ============================================================
   */

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'InteriorDesigner',
    '@id': `${baseUrl}/#business`,
    name: 'Dsigner Studio Interiors',
    url: baseUrl,
    logo: `${baseUrl}/ds-lg.jpeg`,
    image: `${baseUrl}/ds-lg.jpeg`,
    description:
      'Premium interior design studio in Hyderabad offering residential interiors, commercial interiors, luxury villa design, 3D visualization and complete interior solutions.',
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

  /*
   * ============================================================
   * WEBSITE SCHEMA
   * ============================================================
   */

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

  /*
   * ============================================================
   * BREADCRUMB SCHEMA
   * ============================================================
   */

  const segments = pathname
    .split('/')
    .filter(Boolean);

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
      .map(
        (word) =>
          word.charAt(0).toUpperCase() +
          word.slice(1)
      )
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
    '@id': `${baseUrl}${pathname}#breadcrumb`,
    itemListElement: breadcrumbItems,
  };

  /*
   * ============================================================
   * RETURN STRUCTURED DATA - NO HELMET WRAPPER
   * ============================================================
   */

  return (
    <>
      {/* Organization / Business Schema */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      {/* Website Schema */}
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>

      {/* Breadcrumb Schema */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </>
  );
};

export default StructuredData;