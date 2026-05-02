import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'y4qd00ml',
  dataset: 'production',
  apiVersion: '2024-03-15',
  token: 'skrautZv6i3mzD7Hg4A5W0NjeOKpqwquTCybVpVr6nO7xDmJSHJA6OxwTAcEgUs75UavfR7aIoIukXz3APvhnF3E8r7GVAwdKGughXskYZ1fMZBchn5FqoHXEFx8FN6SImdnuiu5ctWdyGGg4EsZRqxc68lcxatBqUiPiqda7XTrXHhZfU3Y',
  useCdn: false,
});

async function createBlog() {
  try {
    const blog = {
      _type: 'blog',
      title: 'My First Interior Design Blog',
      slug: {
        current: 'my-first-interior-design-blog'
      },
      excerpt: 'Welcome to DS Interiors! Learn about beautiful interior design tips and trends for your home.',
      category: 'trends',
      tags: ['modern-design', 'interior-tips'],
      author: 'Prasad',
      readTime: 5,
      publishedAt: new Date().toISOString(),
      // ✅ ADDED content field
      content: `
        <p>Welcome to DS Interiors! In this article, we'll explore the latest interior design trends that will transform your home.</p>
        
        <h2>Top Interior Design Trends for 2024</h2>
        
        <p>Modern interior design is all about creating spaces that are both beautiful and functional. Here are some key trends to watch:</p>
        
        <ul>
          <li><strong>Biophilic Design</strong> - Bringing nature indoors with plants and natural materials</li>
          <li><strong>Bold Colors</strong> - Moving beyond neutrals to embrace vibrant hues</li>
          <li><strong>Sustainable Materials</strong> - Eco-friendly choices for furniture and decor</li>
          <li><strong>Multi-functional Spaces</strong> - Rooms that adapt to changing needs</li>
        </ul>
        
        <h2>How DS Interiors Can Help</h2>
        
        <p>At DS Interiors, we specialize in creating spaces that reflect your unique style while maximizing functionality. Our team of expert designers works closely with you to bring your vision to life.</p>
        
        <p>Contact us today for a free consultation and let's transform your space together!</p>
      `,
    };
    
    console.log('Creating blog post with content...');
    const result = await client.create(blog);
    console.log('✅ Blog created successfully!');
    console.log('Blog ID:', result._id);
    console.log('Title:', result.title);
    console.log('Content length:', result.content?.length || 0, 'characters');
  } catch (error) {
    console.error('❌ Error:', error.message);
    if (error.message.includes('schema')) {
      console.log('\n⚠️ You need to create the "blog" schema in Sanity Studio first!');
      console.log('Go to http://localhost:3333 and create a schema type called "blog"');
    }
  }
}

createBlog();