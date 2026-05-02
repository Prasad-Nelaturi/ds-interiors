// src/lib/sanity.js
import { createClient } from '@sanity/client';

// Sanity configuration
const projectId = 'y4qd00ml';
const dataset = 'production';
const apiVersion = '2024-03-15';

// Create Sanity client (works in both dev and production)
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Important for production - faster loading
});

// Get all blogs
export async function getAllBlogs() {
  try {
    const blogs = await client.fetch(`
      *[_type == "blog" && defined(publishedAt)] | order(publishedAt desc) {
        _id,
        title,
        "slug": slug.current,
        excerpt,
        category,
        tags,
        "mainImage": externalImage,
        author,
        readTime,
        featured,
        publishedAt,
        content
      }
    `);
    console.log('✅ Blogs loaded:', blogs?.length || 0);
    return blogs || [];
  } catch (error) {
    console.error('❌ Error fetching blogs:', error);
    return [];
  }
}

// Get featured blogs
export async function getFeaturedBlogs() {
  try {
    const featured = await client.fetch(`
      *[_type == "blog" && featured == true && defined(publishedAt)] | order(publishedAt desc)[0...3] {
        _id,
        title,
        "slug": slug.current,
        excerpt,
        category,
        "mainImage": externalImage,
        author,
        readTime,
        publishedAt
      }
    `);
    return featured || [];
  } catch (error) {
    console.error('❌ Error fetching featured blogs:', error);
    return [];
  }
}

// Search blogs
export async function searchBlogs(searchTerm) {
  try {
    const results = await client.fetch(`
      *[_type == "blog" && defined(publishedAt) && (title match $searchTerm || excerpt match $searchTerm)] {
        _id,
        title,
        "slug": slug.current,
        excerpt,
        category,
        "mainImage": externalImage,
        publishedAt
      }
    `, { searchTerm: `*${searchTerm}*` });
    return results || [];
  } catch (error) {
    console.error('❌ Error searching blogs:', error);
    return [];
  }
}