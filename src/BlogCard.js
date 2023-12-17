// BlogCard.js
export default function BlogCard({ title, description, imageUrl }) {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={imageUrl} alt="Blog Image"/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">
            {description}
          </p>
        </div>
      </div>
    );
  }
  function App() {
    // Rest of the header code...

    // Example blog post
    return (
      <div>
        <header>{/* Header content as updated above */}</header>
        <main className="p-5">
          <BlogCard
            title="Test Blog Title"
            description="This is a short description for the test blog post."
            imageUrl="path_to_your_image.jpg"
          />
        </main>
      </div>
    );
  }
  
  