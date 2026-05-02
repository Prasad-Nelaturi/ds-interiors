import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'y4qd00ml',
  dataset: 'production',
  apiVersion: '2024-03-15',
  useCdn: false,
});

async function test() {
  try {
    const blogs = await client.fetch('*[_type == "blog"]');
    console.log('Total blogs:', blogs.length);
    blogs.forEach(blog => {
      console.log('-', blog.title);
      console.log('  Published:', blog.publishedAt);
    });
  } catch (error) {
    console.error('Error:', error.message);
  }
}

test();