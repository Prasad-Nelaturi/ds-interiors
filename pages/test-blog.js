// pages/test-blog.js
import { getAllBlogs } from '../lib/sanity';
import { useEffect, useState } from 'react';

export default function TestBlog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllBlogs()
      .then(data => {
        console.log('Blogs:', data);
        setBlogs(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div style={{ padding: '32px', textAlign: 'center' }}>
        <div style={{ display: 'inline-block', width: '32px', height: '32px', border: '4px solid #f97316', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
        <p style={{ marginTop: '16px' }}>Loading blogs from Sanity...</p>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: '32px', textAlign: 'center', color: 'red' }}>
        <p>Error: {error}</p>
        <p style={{ fontSize: '14px', marginTop: '8px' }}>Make sure you have created a blog post in Sanity Studio!</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '32px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '24px', textAlign: 'center' }}>DS Interiors Blogs</h1>
      
      {blogs.length === 0 && (
        <div style={{ textAlign: 'center', padding: '32px', backgroundColor: '#fefce8', borderRadius: '8px' }}>
          <p style={{ fontSize: '18px' }}>No blogs found!</p>
          <p style={{ fontSize: '14px', marginTop: '8px' }}>Go to http://localhost:3333 and create your first blog post.</p>
        </div>
      )}

      <div style={{ display: 'grid', gap: '24px' }}>
        {blogs.map(blog => (
          <div key={blog._id} style={{ border: '1px solid #e5e7eb', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 1px 2px 0 rgba(0,0,0,0.05)' }}>
            {blog.mainImage && (
              <img 
                src={blog.mainImage} 
                alt={blog.title} 
                style={{ width: '100%', height: '280px', objectFit: 'cover' }}
              />
            )}
            <div style={{ padding: '20px' }}>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                <span style={{ backgroundColor: '#f3f4f6', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', textTransform: 'capitalize' }}>{blog.category}</span>
                <span style={{ color: '#6b7280', fontSize: '12px' }}>•</span>
                <span style={{ color: '#6b7280', fontSize: '12px' }}>{blog.readTime} min read</span>
              </div>
              <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px' }}>{blog.title}</h2>
              <p style={{ color: '#4b5563', marginBottom: '16px' }}>{blog.excerpt}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#6b7280' }}>By {blog.author || 'DS Interiors'}</span>
                <button style={{ color: '#f97316', fontWeight: 'bold', background: 'none', border: 'none', cursor: 'pointer' }}>
                  Read More →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}