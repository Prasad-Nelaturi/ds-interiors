// src/lib/sanity.js
const isDevelopment = process.env.NODE_ENV === 'development';
const API_BASE = isDevelopment 
  ? '/api/sanity' 
  : 'https://y4qd00ml.api.sanity.io';

export async function getAllBlogs() {
  try {
    const query = encodeURIComponent('*[_type == "blog" && defined(publishedAt)] | order(publishedAt desc) { _id, title, "slug": slug.current, excerpt, category, tags, "mainImage": externalImage, author, readTime, featured, publishedAt, content }');
    const response = await fetch(`${API_BASE}/v2024-03-15/data/query/production?query=${query}`);
    const data = await response.json();
    
    console.log('✅ Blogs loaded:', data.result?.length || 0);
    return data.result || [];
  } catch (error) {
    console.error('❌ Error:', error);
    return [];
  }
}

export async function getFeaturedBlogs() {
  try {
    const query = encodeURIComponent('*[_type == "blog" && featured == true && defined(publishedAt)] | order(publishedAt desc)[0...3] { _id, title, "slug": slug.current, excerpt, category, "mainImage": externalImage, author, readTime, publishedAt }');
    const response = await fetch(`${API_BASE}/v2024-03-15/data/query/production?query=${query}`);
    const data = await response.json();
    
    return data.result || [];
  } catch (error) {
    console.error('❌ Error:', error);
    return [];
  }
}

export const client = { fetch: getAllBlogs };