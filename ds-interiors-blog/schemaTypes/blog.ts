export default {
  name: 'blog',
  title: 'Blog Posts',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Blog Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'excerpt',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Residential', value: 'residential' },
          { title: 'Commercial', value: 'commercial' },
          { title: 'Trends', value: 'trends' },
          { title: 'Tips & Guides', value: 'tips-guides' },
          { title: 'Case Studies', value: 'case-studies' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'externalImage',
      title: 'Cover Image URL',
      type: 'url',
      description: 'Paste the image URL from Unsplash or other sources',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
      initialValue: 'DS Interiors Team',
    },
    {
      name: 'readTime',
      title: 'Read Time (minutes)',
      type: 'number',
      initialValue: 5,
    },
    {
      name: 'featured',
      title: 'Featured Post',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'publishedAt',
      title: 'Publish Date',
      type: 'datetime',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'content',
      title: 'Full Content',
      type: 'text',
      rows: 20,
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
    },
  },
}