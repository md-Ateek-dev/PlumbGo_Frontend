import React, { useState } from "react";
import { submitTestimonial } from "../Services/TestimonialApi";
// import toast from "react-hot-toast";
import { Star, Send, User, MapPin, MessageSquare } from "lucide-react";
import Swal from "sweetalert2";
import TestimonialsPage from "./TestimonialsPage";

const ReviewForm = () => {
  const [form, setForm] = useState({
    name: "",
    rating: 5,
    message: "",
    city: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitTestimonial(form);
      Swal.fire({
        icon: "success",
        title: "Thank You!",
        text: "Review submitted for approval",
        confirmButtonColor: "#0f766e"
      });
      setForm({ name: "", rating: 5, message: "", city: "" });
    } catch {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Failed to submit review Please try again",
        confirmButtonColor: "#dc2626"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
        <div className="w-full min-h-screen bg-white py-8">
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8 m-3 border border-gray-100 transform transition-all duration-300 hover:shadow-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-700 to-teal-600 rounded-full mb-4 shadow-lg">
            <MessageSquare className="text-white" size={28} />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Share Your Experience</h2>
          <p className="text-gray-500 text-sm">We'd love to hear your feedback</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name Input */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <User className="text-gray-400 group-focus-within:text-teal-600 transition-colors duration-200" size={20} />
            </div>
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-teal-600 focus:ring-4 focus:ring-teal-100 outline-none transition-all duration-200 placeholder-gray-400"
            />
          </div>

          {/* Rating Select */}
          <div className="relative group">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Rating
            </label>
            <div className="flex gap-2 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border-2 border-yellow-200">
              {[1, 2, 3, 4, 5].map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setForm({ ...form, rating: r })}
                  className="transform transition-all duration-200 hover:scale-125 focus:outline-none"
                >
                  <Star
                    size={32}
                    className={`${
                      r <= form.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    } transition-all duration-200`}
                  />
                </button>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              {form.rating === 5 ? "Excellent!" : form.rating === 4 ? "Great!" : form.rating === 3 ? "Good" : form.rating === 2 ? "Fair" : "Poor"}
            </p>
          </div>

          {/* Message Textarea */}
          <div className="relative group">
            <div className="absolute top-4 left-4 pointer-events-none">
              <MessageSquare className="text-gray-400 group-focus-within:text-teal-500 transition-colors duration-200" size={20} />
            </div>
            <textarea
              placeholder="Share your experience with us..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              rows={4}
              className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-teal-600 focus:ring-4 focus:ring-teal-100 outline-none transition-all duration-200 placeholder-gray-400 resize-none"
            />
          </div>

          {/* City Input */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <MapPin className="text-gray-400 group-focus-within:text-teal-600 transition-colors duration-200" size={20} />
            </div>
            <input
              type="text"
              placeholder="Your City"
              value={form.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
              required
              className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-teal-600 focus:ring-4 focus:ring-teal-100 outline-none transition-all duration-200 placeholder-gray-400"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-emerald-700 to-teal-600 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <Send size={20} />
                <span>Submit Review</span>
              </>
            )}
          </button>
        </form>

        {/* Footer Note */}
        <p className="text-center text-xs text-gray-400 mt-6">
          Your review will be published after approval
        </p>
      </div>
    </div>
<div className="overflow-hidden">
  <TestimonialsPage />
</div>    </div>
  );
};

export default ReviewForm;