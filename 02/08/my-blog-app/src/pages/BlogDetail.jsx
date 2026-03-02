import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Backendless from "../api/backendless";

const BlogDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    Backendless.Data.of("Posts")
      .findById(id)
      .then((res) => setPost(res))
      .catch((err) => console.error(err));
  }, [id]);

  if (!post) return <div className="text-center mt-20">Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
      <Link to="/feeds" className="text-blue-500 mb-6 inline-block font-medium">
        ← Back to Feeds
      </Link>
      <h1 className="text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
        {post.title}
      </h1>
      <div className="flex items-center text-gray-500 mb-8 pb-8 border-b italic">
        <span>
          Written by{" "}
          <span className="font-semibold text-gray-700">{post.author}</span>
        </span>
        <span className="mx-2">•</span>
        <span>{new Date(post.created).toLocaleDateString()}</span>
      </div>
      <div className="prose lg:prose-xl text-gray-700 leading-relaxed whitespace-pre-wrap">
        {post.content}
      </div>
    </div>
  );
};

export default BlogDetail;
