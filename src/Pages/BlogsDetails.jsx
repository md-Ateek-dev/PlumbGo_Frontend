import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getBlogBySlug } from "../Services/BlogApi";
import { ArrowLeft } from "lucide-react";

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // 🔹 Fetch Blog
  useEffect(() => {
    setIsLoading(true);
    getBlogBySlug(slug)
      .then((res) => {
        setBlog(res.data.blog);
      })
      .finally(() => setIsLoading(false));
  }, [slug]);

  // 🔹 SEO + OpenGraph (React 19 SAFE)
  useEffect(() => {
    if (!blog) return;

    document.title = `${blog.title} | PlumbGo`;

    const setMeta = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    const setOG = (property, content) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    setMeta("description", blog.excerpt || blog.title);
    setOG("og:title", blog.title);
    setOG("og:description", blog.excerpt || blog.title);
    setOG("og:image", `http://localhost:5000${blog.coverImage}`);
  }, [blog]);

  // 🔹 Loading Skeleton
  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 py-20 px-4">
        <div className="max-w-4xl mx-auto animate-pulse space-y-6">
          <div className="h-6 bg-slate-200 rounded w-1/4" />
          <div className="h-10 bg-slate-200 rounded w-3/4" />
          <div className="h-64 bg-slate-200 rounded-xl" />
          <div className="space-y-3">
            <div className="h-4 bg-slate-200 rounded" />
            <div className="h-4 bg-slate-200 rounded w-5/6" />
          </div>
        </div>
      </div>
    );
  }

  if (!blog) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-600 hover:text-teal-600 font-semibold mb-8"
        >
          <ArrowLeft size={20} />
          Back to Blogs
        </button>

        {/* Blog Card */}
        <article className="bg-white rounded-2xl shadow-lg overflow-hidden animate-fadeIn">
          {/* Title */}
          <div className="p-6 sm:p-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-teal-700">
              {blog.title}
            </h1>
          </div>

          {/* Cover Image */}
          <div className="px-6 sm:px-8">
            <img
              src={`http://localhost:5000${blog.coverImage}`}
              alt={blog.title}
              className="w-full h-[220px] object-cover rounded-xl shadow"
            />
          </div>

          {/* Content */}
          <div className="px-6 sm:px-8 py-6 text-black leading-relaxed whitespace-pre-line">
            {blog.content}
          </div>
        </article>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default BlogDetail;
