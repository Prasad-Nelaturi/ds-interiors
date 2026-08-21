const generateSitemap = () => {
    const baseUrl = 'https://www.dsignerstudiointeriors.com';

    const routes = [
        { path: '/', priority: '1.0', changefreq: 'daily' },
        { path: '/about', priority: '0.9', changefreq: 'monthly' },
        { path: '/contact', priority: '0.8', changefreq: 'monthly' },
        { path: '/blogs', priority: '0.9', changefreq: 'weekly' },
        { path: '/projects', priority: '0.9', changefreq: 'weekly' },
        { path: '/gallery', priority: '0.8', changefreq: 'weekly' },
        { path: '/modular-factory', priority: '0.7', changefreq: 'monthly' },
        { path: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
        { path: '/terms-conditions', priority: '0.3', changefreq: 'yearly' },
        { path: '/services/interior-design', priority: '0.9', changefreq: 'monthly' },
        { path: '/services/residential', priority: '0.9', changefreq: 'monthly' },
        { path: '/services/commercial', priority: '0.9', changefreq: 'monthly' },
        { path: '/services/luxury-villas', priority: '0.9', changefreq: 'monthly' },
        { path: '/services/3d-visualization', priority: '0.8', changefreq: 'monthly' },
        { path: '/services/home-plans', priority: '0.8', changefreq: 'monthly' },
        { path: '/services/landscaping', priority: '0.8', changefreq: 'monthly' },
        { path: '/services/home-automation', priority: '0.8', changefreq: 'monthly' },
        { path: '/services/curtains-blinds', priority: '0.7', changefreq: 'monthly' },
        { path: '/services/chimneys-hobs', priority: '0.7', changefreq: 'monthly' },
        { path: '/services/space-planning', priority: '0.8', changefreq: 'monthly' },
        { path: '/services/styling', priority: '0.8', changefreq: 'monthly' },
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${routes.map(route => `
  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}${route.path}" />
    <xhtml:link rel="alternate" hreflang="en-IN" href="${baseUrl}${route.path}" />
  </url>
  `).join('')}
</urlset>`;

    return sitemap;
};

export default generateSitemap;