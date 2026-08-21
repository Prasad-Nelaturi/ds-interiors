// src/lib/injectSEO.js

const fs = require('fs');
const path = require('path');

// Complete SEO data for ALL routes - using your routeSEO data
const routeSEO = {
    '/': {
        title: 'Interior Designers in Hyderabad | Dsigner Studio Interiors',
        description: 'Transform your space with Dsigner Studio Interiors - Hyderabad\'s leading interior design studio.',
        keywords: 'interior designers Hyderabad, residential interiors, commercial interiors',
    },
    '/about': {
        title: 'About Dsigner Studio Interiors | Interior Designers in Hyderabad',
        description: 'Learn about Dsigner Studio Interiors - Hyderabad\'s premium interior design studio.',
        keywords: 'about interior designers Hyderabad, interior design studio',
    },
    '/contact': {
        title: 'Contact Dsigner Studio Interiors | Interior Designers in Hyderabad',
        description: 'Get in touch with Hyderabad\'s top interior designers. Book a consultation.',
        keywords: 'contact interior designers Hyderabad, interior design consultation',
    },
    '/blogs': {
        title: 'Interior Design Blogs & Articles | Dsigner Studio Interiors',
        description: 'Explore interior design tips, trends, and inspiration.',
        keywords: 'interior design blog, home decor tips',
    },
    '/projects': {
        title: 'Our Interior Design Projects | Dsigner Studio Interiors Hyderabad',
        description: 'Browse our portfolio of residential, commercial, and luxury interior design projects.',
        keywords: 'interior design portfolio, interior design projects Hyderabad',
    },
    '/gallery': {
        title: 'Interior Design Gallery | Dsigner Studio Interiors Hyderabad',
        description: 'Explore our interior design gallery featuring beautiful residential, commercial, and luxury spaces.',
        keywords: 'interior design gallery, home interior photos',
    },
    '/modular-factory': {
        title: 'Modular Factory | Dsigner Studio Interiors Hyderabad',
        description: 'Discover our state-of-the-art modular factory for custom interior solutions.',
        keywords: 'modular factory Hyderabad, custom modular furniture',
    },
    '/services/interior-design': {
        title: 'Interior Design Services | Dsigner Studio Interiors Hyderabad',
        description: 'Professional interior design services in Hyderabad. Residential, commercial, and luxury design solutions.',
        keywords: 'interior design services Hyderabad, professional interior designers',
    },
    '/services/residential': {
        title: 'Residential Interior Designers Hyderabad | Dsigner Studio Interiors',
        description: 'Expert residential interior design services in Hyderabad. Transform your home.',
        keywords: 'residential interior designers Hyderabad, home interior design',
    },
    '/services/commercial': {
        title: 'Commercial Interior Designers Hyderabad | Dsigner Studio Interiors',
        description: 'Professional commercial interior design services in Hyderabad. Create inspiring workspaces.',
        keywords: 'commercial interior designers Hyderabad, office interiors',
    },
    '/services/luxury-villas': {
        title: 'Luxury Villa Interior Designers Hyderabad | Dsigner Studio Interiors',
        description: 'Premium luxury villa interior design services in Hyderabad. Elegant, sophisticated designs.',
        keywords: 'luxury villa interior designers Hyderabad, premium villa interiors',
    },
    '/services/3d-visualization': {
        title: '3D Visualization Services | Dsigner Studio Interiors Hyderabad',
        description: 'High-quality 3D visualization and rendering services. See your designs before implementation.',
        keywords: '3D visualization Hyderabad, interior rendering',
    },
    '/services/home-plans': {
        title: 'Home Plans & Layout Design | Dsigner Studio Interiors',
        description: 'Expert home planning and layout design services in Hyderabad. Optimize your space.',
        keywords: 'home plans Hyderabad, floor plan design',
    },
    '/services/landscaping': {
        title: 'Landscaping & Outdoor Design | Dsigner Studio Interiors Hyderabad',
        description: 'Professional landscaping and outdoor design services in Hyderabad. Create beautiful outdoor spaces.',
        keywords: 'landscaping Hyderabad, garden design',
    },
    '/services/home-automation': {
        title: 'Home Automation Solutions Hyderabad | Dsigner Studio Interiors',
        description: 'Smart home automation solutions in Hyderabad. Integrate technology seamlessly.',
        keywords: 'home automation Hyderabad, smart home',
    },
    '/services/curtains-blinds': {
        title: 'Curtains & Blinds Design | Dsigner Studio Interiors Hyderabad',
        description: 'Custom curtains and blinds design services in Hyderabad. Premium window treatments.',
        keywords: 'curtains Hyderabad, blinds Hyderabad',
    },
    '/services/chimneys-hobs': {
        title: 'Chimneys & Hobs Installation | Dsigner Studio Interiors',
        description: 'Professional chimneys and hobs installation services in Hyderabad. Modern kitchen solutions.',
        keywords: 'chimneys Hyderabad, hobs installation',
    },
    '/services/space-planning': {
        title: 'Space Planning & Optimization | Dsigner Studio Interiors',
        description: 'Expert space planning and optimization services in Hyderabad. Maximize your space.',
        keywords: 'space planning Hyderabad, space optimization',
    },
    '/services/styling': {
        title: 'Interior Styling & Decor | Dsigner Studio Interiors Hyderabad',
        description: 'Professional interior styling and decor services in Hyderabad. Elevate your space.',
        keywords: 'interior styling Hyderabad, home decor',
    },
    '/privacy-policy': {
        title: 'Privacy Policy | Dsigner Studio Interiors',
        description: 'Read our privacy policy to understand how Dsigner Studio Interiors protects your information.',
        keywords: 'privacy policy, data protection',
    },
    '/terms-conditions': {
        title: 'Terms & Conditions | Dsigner Studio Interiors',
        description: 'Review the terms and conditions for using Dsigner Studio Interiors website and services.',
        keywords: 'terms and conditions, website terms',
    },
};

const defaultSEO = {
    canonical: 'https://www.dsignerstudiointeriors.com',
    image: 'https://www.dsignerstudiointeriors.com/ds-lg.jpeg',
    imageAlt: 'Dsigner Studio Interiors - Interior Design Studio in Hyderabad',
};

const baseUrl = 'https://www.dsignerstudiointeriors.com';

const generateAllPages = () => {
    console.log('🚀 Generating SEO pages...');

    const buildDir = path.join(__dirname, '../../build');

    // Check if build exists
    if (!fs.existsSync(buildDir)) {
        console.log('❌ Build folder not found! Run "npm run build" first.');
        return;
    }

    // IMPORTANT: Use the BUILT index.html as template
    const templatePath = path.join(buildDir, 'index.html');
    if (!fs.existsSync(templatePath)) {
        console.log('❌ build/index.html not found! Run "npm run build" first.');
        return;
    }

    let template = fs.readFileSync(templatePath, 'utf8');

    // Remove existing SEO tags
    template = template.replace(/<title>.*?<\/title>/, '');
    template = template.replace(/<meta name="description".*?\/>/, '');
    template = template.replace(/<meta name="keywords".*?\/>/, '');
    template = template.replace(/<link rel="canonical".*?\/>/, '');
    template = template.replace(/<meta property="og:.*?\/>/g, '');
    template = template.replace(/<meta name="twitter:.*?\/>/g, '');
    template = template.replace(/<meta name="robots".*?\/>/, '');
    template = template.replace(/<meta name="geo.region".*?\/>/, '');
    template = template.replace(/<meta name="geo.placename".*?\/>/, '');
    template = template.replace(/<meta name="author".*?\/>/, '');

    let successCount = 0;
    const routes = Object.keys(routeSEO);

    routes.forEach(route => {
        const seo = { ...defaultSEO, ...routeSEO[route] };
        const routePath = route === '/' ? '' : route.slice(1);

        const metaTags = `
    <title>${seo.title}</title>
    <meta name="description" content="${seo.description}" />
    <meta name="keywords" content="${seo.keywords}" />
    <link rel="canonical" href="${baseUrl}${route}" />
    
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Dsigner Studio Interiors" />
    <meta property="og:title" content="${seo.title}" />
    <meta property="og:description" content="${seo.description}" />
    <meta property="og:url" content="${baseUrl}${route}" />
    <meta property="og:image" content="${defaultSEO.image}" />
    <meta property="og:image:alt" content="${defaultSEO.imageAlt}" />
    <meta property="og:locale" content="en_IN" />
    
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${seo.title}" />
    <meta name="twitter:description" content="${seo.description}" />
    <meta name="twitter:image" content="${defaultSEO.image}" />
    <meta name="twitter:image:alt" content="${defaultSEO.imageAlt}" />
    
    <meta name="robots" content="index, follow" />
    <meta name="geo.region" content="IN-TG" />
    <meta name="geo.placename" content="Hyderabad" />
    <meta name="author" content="Dsigner Studio Interiors" />
    `;

        let html = template.replace(
            '<meta charset="utf-8"/>',
            `<meta charset="utf-8"/>${metaTags}`
        );

        const outputDir = path.join(buildDir, routePath);
        const outputFile = path.join(outputDir, 'index.html');

        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        fs.writeFileSync(outputFile, html);
        console.log(`✅ ${routePath || 'Home'}`);
        successCount++;
    });

    console.log(`🎉 Generated ${successCount} pages with SEO!`);
    console.log(`📁 Build folder: ${buildDir}`);

    // List all generated files
    console.log('\n📄 Generated pages:');
    const allFiles = fs.readdirSync(buildDir, { recursive: true });
    const htmlFiles = allFiles
        .filter(file => {
            if (typeof file !== 'string') return false;
            if (!file.endsWith('index.html')) return false;
            if (file.includes('node_modules')) return false;
            if (file.includes('sanity')) return false;
            if (file.includes('studio')) return false;
            if (file.includes('dist')) return false;
            if (file.includes('template')) return false;
            return true;
        })
        .sort();

    htmlFiles.forEach(file => {
        const title = file.replace('/index.html', '') || 'Home';
        console.log(`   📄 ${title}`);
    });
};

// Run the generation
generateAllPages();