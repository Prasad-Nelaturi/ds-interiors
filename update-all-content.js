import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'y4qd00ml',
  dataset: 'production',
  apiVersion: '2024-03-15',
  token: 'skrautZv6i3mzD7Hg4A5W0NjeOKpqwquTCybVpVr6nO7xDmJSHJA6OxwTAcEgUs75UavfR7aIoIukXz3APvhnF3E8r7GVAwdKGughXskYZ1fMZBchn5FqoHXEFx8FN6SImdnuiu5ctWdyGGg4EsZRqxc68lcxatBqUiPiqda7XTrXHhZfU3Y',
  useCdn: false,
});

async function updateAllBlogsWithContent() {
  // Fetch all blogs without content
  const blogs = await client.fetch('*[_type == "blog" && content == null]');
  
  console.log(`📝 Found ${blogs.length} blogs without content`);
  
  for (const blog of blogs) {
    const defaultContent = `
      <h2>About This Article</h2>
      <p>${blog.excerpt || 'Welcome to DS Interiors blog!'}</p>
      
      <h2>Key Takeaways</h2>
      <ul>
        <li>Discover amazing interior design ideas</li>
        <li>Learn about the latest trends in home decor</li>
        <li>Get expert tips from professional designers</li>
      </ul>
      
      <h2>Why Choose DS Interiors?</h2>
      <p>With over 12 years of experience, DS Interiors has established itself as a premier interior design studio in Hyderabad. We specialize in creating beautiful spaces that reflect your personality and lifestyle.</p>
      
      <h2>Contact Us</h2>
      <p>Ready to transform your space? Contact DS Interiors today for a free consultation!</p>
      <p>📞 Phone: +91 90107 99991</p>
      <p>📧 Email: dsinteriorshyd1@gmail.com</p>
    `;
    
    try {
      const result = await client
        .patch(blog._id)
        .set({ content: defaultContent })
        .commit();
      
      console.log(`✅ Updated: ${blog.title}`);
    } catch (error) {
      console.error(`❌ Failed to update ${blog.title}:`, error.message);
    }
  }
  
  console.log('🎉 All blogs updated with content!');
}

updateAllBlogsWithContent();