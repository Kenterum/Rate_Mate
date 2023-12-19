import React from 'react';

const blogs = [
  {
    id: 1,
    image: 'https://source.unsplash.com/random/600x600?face',
    title: "The Dark Side of Being a Digital",
    author: "Suleyman Mammadov",
    description: 'Description',
    content: 'Content....',
  },
  {
    id: 2,
    image: 'https://source.unsplash.com/random/600x600?face',
    title: "The Dark Side of Being a Digital",
    author: "Suleyman Mammadov",
    description: 'Description',
    content: 'Content....',
  },
  {
    id: 3,
    image: 'https://source.unsplash.com/random/600x600?face',
    title: "The Dark Side of Being a Digital",
    author: "Suleyman Mammadov",
    description: 'Description',
    content: 'Content....',
  },

  {
    id: 4,
    image: 'https://source.unsplash.com/random/600x600?face',
    title: "The Dark Side of Being a Digital",
    author: "Suleyman Mammadov",
    description: 'Description',
    content: 'Content....',
  },

  {
    id: 5,
    image: 'https://source.unsplash.com/random/600x600?face',
    title: "The Dark Side of Being a Digital",
    author: "Suleyman Mammadov",
    description: 'Description',
    content: 'Content....',
  },

];

export default function BlogCard() {
  return (
    <>
    <h1 className='text-center text-6xl'>Blog</h1>
    <div className="px-28 mt-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {blogs.map((blog) => (
        <div key={blog.id} className="max-w-sm rounded-lg overflow-hidden shadow-lg hover:bg-sky-700 transition-colors bg-sky-50 self-start">
          <div className='h-80'>
          <img className="w-full h-full object-cover" src={blog.image} alt={`Blog ${blog.id}`} />
          </div>
          <div className="p-5">
          <div className="font-bold text-xl mb-2 text-left">{blog.title}</div>
          <div className="text-sm	text-stone-400 text-left">{blog.author}</div>
          <div className="font-bold text-m mb-2 text-left">{blog.description}</div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};
