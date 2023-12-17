import React from 'react';

const blogs = [
  {
    id: 1,
    image: '/path-to-your-image-1.jpg',
    description: 'Description',
    content: 'Content....',
  },
  {
    id: 2,
    image: '/path-to-your-image-6.jpg',
    description: 'Description for Blog 6',
    content: 'Content for Blog 6',
  },
  {
    id: 3,
    image: '/path-to-your-image-6.jpg',
    description: 'Description for Blog 6',
    content: 'Content for Blog 6',
  },
  {
    id: 4,
    image: '/path-to-your-image-6.jpg',
    description: 'Description for Blog 6',
    content: 'Content for Blog 6',
  },
  {
    id: 5,
    image: '/path-to-your-image-6.jpg',
    description: 'Description for Blog 6',
    content: 'Content for Blog 6',
  },
  
];

export default function BlogCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {blogs.map((blog) => (
        <div key={blog.id} className="max-w-sm rounded overflow-hidden shadow-lg hover:bg-sky-700 transition-colors bg-sky-50">
          <img className="w-full" src={blog.image} alt={`Blog ${blog.id}`} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{blog.description}</div>
            <p className="text-white-700 text-base">
              {blog.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
