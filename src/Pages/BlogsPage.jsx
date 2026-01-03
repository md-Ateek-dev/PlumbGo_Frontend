import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBlogs } from "../Services/BlogApi";
import { FileText, Calendar, ArrowRight, Sparkles } from "lucide-react";

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    getBlogs().then((res) => {
      setBlogs(res.data.blogs || []);
      setIsLoading(false);
    });
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const handleShowLess = () => {
    setVisibleCount(6);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fadeIn">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-4">
            <Sparkles size={16} />
            <span>Our Blog</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-emerald-700 via-teal-600 to-teal-600 bg-clip-text text-transparent mb-5">
            Plumbing Tips & Insights
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Expert advice, industry insights, and helpful tips to keep your plumbing in perfect condition
          </p>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                  <div className="h-48 bg-slate-200"></div>
                  <div className="p-6 space-y-3">
                    <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                    <div className="h-4 bg-slate-200 rounded w-full"></div>
                    <div className="h-4 bg-slate-200 rounded w-2/3"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Blogs Grid */}
        {!isLoading && blogs.length > 0 && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {blogs.slice(0, visibleCount).map((blog, index) => (
                <Link
                  key={blog._id}
                  to={`/blogs/${blog.slug}`}
                  className="group block"
                  style={{
                    animation: `slideUp 0.5s ease-out ${index * 0.1}s both`
                  }}
                >
                  <div className="h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100">
                    {/* Image Container */}
                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-100 to-indigo-100">
                      <img
                        src={`http://localhost:5000${blog.coverImage}`}
                        alt={blog.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Floating Icon */}
                      <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <ArrowRight size={18} className="text-teal-600" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Title */}
                      <h3 className="text-lg font-bold text-slate-800 mb-3 line-clamp-2 group-hover:text-teal-600 transition-colors duration-300">
                        {blog.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-2">
                        {blog.excerpt}
                      </p>

                      {/* Read More Link */}
                      <div className="flex items-center gap-2 text-teal-600 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                        <span>Read More</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Load More / Show Less Buttons */}
            {blogs.length > 6 && (
              <div className="mt-12 flex justify-center gap-4">
                {visibleCount < blogs.length && (
                  <button
                    onClick={handleLoadMore}
                    className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
                  >
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"></div>
                    <span className="relative flex items-center gap-2">
                      Explore More Blogs
                      <ArrowRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>
                  </button>
                )}

                {visibleCount > 6 && (
                  <button
                    onClick={handleShowLess}
                    className="group relative overflow-hidden rounded-xl border-2 border-emerald-600 bg-white px-8 py-3 font-semibold text-emerald-600 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-emerald-50 hover:shadow-xl active:scale-95"
                  >
                    <span className="relative flex items-center gap-2">
                      Show Less
                      <ArrowRight
                        size={18}
                        className="rotate-180 transition-transform duration-300 group-hover:-translate-x-1"
                      />
                    </span>
                  </button>
                )}
              </div>
            )}
          </>
        )}

        {/* Empty State */}
        {!isLoading && blogs.length === 0 && (
          <div className="text-center py-20 animate-fadeIn">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText size={40} className="text-teal-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-700 mb-2">No Blogs Yet</h3>
            <p className="text-slate-500 max-w-md mx-auto">
              We're working on creating amazing content for you. Check back soon for expert plumbing tips and insights!
            </p>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
          
      `}</style>
    </div>
  );
};

export default BlogsPage;