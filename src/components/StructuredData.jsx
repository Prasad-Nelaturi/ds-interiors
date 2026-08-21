// src/components/StructuredData.jsx

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const StructuredData = () => {
  // Use try-catch to handle if useLocation is not available
  let pathname = '/';
  try {
    const location = useLocation();
    pathname = location.pathname;
  } catch (error) {
    // If outside Router, use default path
    console.warn('StructuredData: useLocation not available, using default path');
  }
  
  const baseUrl = 'https://www.dsignerstudiointeriors.com';
  
  // Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'InteriorDesigner',
    '@id': `${baseUrl}/#business`,
    'name': 'Dsigner Studio Interiors',
    'url': baseUrl,
    'logo': `${baseUrl}/ds-lg.jpeg`,
    'image': `${baseUrl}/ds-lg.jpeg`,
    'description': 'Premium interior design studio in Hyderabad offering residential interiors, commercial interiors, luxury villa design, 3D visualization and complete interior solutions.',
    'telephone': '+91 90109 89991',
    'email': 'info@dsignerstudiointeriors.com',
    'priceRange': '₹₹₹',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Hyderabad',
      'addressRegion': 'Telangana',
      'addressCountry': 'IN',
    },
    'areaServed': {
      '@type': 'City',
      'name': 'Hyderabad',
    },
    'serviceType': [
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
    'openingHours': ['Mo-Sa 09:00-19:00'],
    'sameAs': [
      'https://www.instagram.com/dsignerstudiointeriors/',
      'https://www.facebook.com/dsignerstudiointeriors/',
      'https://www.pinterest.com/dsignerstudiointeriors/',
    ],
  };
  
  // Website Schema
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    'url': baseUrl,
    'name': 'Dsigner Studio Interiors',
    'description': 'Premium interior design studio in Hyderabad',
    'publisher': {
      '@id': `${baseUrl}/#business`,
    },
  };
  
  // Breadcrumb Schema - only include if pathname is available
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${baseUrl}${pathname}#breadcrumb`,
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': baseUrl,
      },
      ...(pathname !== '/' && pathname !== '' 
        ? pathname.split('/')
            .filter(Boolean)
            .map((segment, index) => ({
              '@type': 'ListItem',
              'position': index + 2,
              'name': segment.split('-').map(word => 
                word.charAt(0).toUpperCase() + word.slice(1)
              ).join(' '),
              'item': `${baseUrl}/${segment}`,
            }))
        : []
      ),
    ],
  };
  
  return (
    <Helmet>
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

export default StructuredData;