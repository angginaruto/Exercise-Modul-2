import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Backendless from "../api/backendless";

const BlogFeeds = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Backendless.Data.of("Posts")
      .find()
      .then((res) => setPosts(res))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Latest Stories
      </h1>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div
            key={post.objectId}
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition duration-300"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {post.title}
            </h2>
            <p className="text-sm text-gray-500 mb-4 italic">
              By {post.author}
            </p>

            <p className="text-gray-600 mb-4 line-clamp-3">
              {post.content.substring(0, 100)}...
            </p>
            <Link
              to={`/feeds/${post.objectId}`}
              className="text-blue-600 font-medium hover:underline inline-flex items-center"
            >
              Read More <span className="ml-1">→</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogFeeds;
