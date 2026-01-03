import React, { useEffect, useState } from "react";
import { getTestimonials } from "../Services/TestimonialApi";
import { Star, MapPin, Quote, User, Wrench } from "lucide-react";

const TestimonialsPage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getTestimonials().then(res => {
      setItems(res.data.testimonials || []);
      setLoading(false);
    }).catch(() => {
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
        <div className="text-center">
          <div className="relative mx-auto mb-4 h-16 w-16">
            <div className="absolute inset-0 rounded-full border-4 border-teal-200"></div>
            <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-teal-600"></div>
            <Wrench className="absolute inset-0 m-auto text-teal-600 animate-pulse" size={24} />
          </div>
          <p className="text-sm font-medium text-slate-600 animate-pulse">
            Loading services...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-emerald-700 via-teal-600 to-teal-600 rounded-3xl mb-8 shadow-2xl border-4 border-white/50 backdrop-blur-sm">
            <Quote className="text-white drop-shadow-lg" size={40} />
          </div>
          <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-emerald-700 via-teal-600 to-teal-600 bg-clip-text text-transparent mb-6 leading-tight">
            Real Stories
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Hear directly from customers who've transformed their experience with us.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-slate-600">
            <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg border border-slate-200/50">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="text-amber-400 fill-amber-400 drop-shadow-sm h-6 w-6" />
                ))}
              </div>
              <span className="font-bold text-lg ml-2">4.9/5</span>
            </div>
            <div className="text-2xl font-bold bg-white/70 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg border border-slate-200/50">
              {items.length} Happy Customers
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        {items.length === 0 ? (
          <div className="text-center py-32">
            <div className="relative mx-auto w-32 h-32 mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-200 to-indigo-200 rounded-3xl blur-xl"></div>
              <Quote className="mx-auto relative text-slate-400 drop-shadow-lg" size={80} />
            </div>
            <h3 className="text-3xl font-bold text-slate-500 mb-4">No reviews yet</h3>
            <p className="text-xl text-slate-500 max-w-md mx-auto">Be the first to share your experience and help others discover us!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {items.map((t, index) => (
              <TestimonialCard key={t._id} testimonial={t} index={index} />
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        @keyframes card-enter {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .float-animation {
          animation: float 6s ease-in-out infinite;
        }
        
        .shimmer {
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e7ff 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
        
        .card-enter {
          animation: card-enter 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

const TestimonialCard = ({ testimonial, index }) => {
  const { name, message, rating, city } = testimonial;

  return (
    <div 
      className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50 hover:border-indigo-200/50 hover:shadow-3xl hover:bg-white/95 transition-all duration-500 overflow-hidden card-enter"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-3xl"></div>
      
      {/* Quote badge */}
      <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-emerald-700 to-teal-600 rounded-2xl flex items-center justify-center shadow-2xl border-4 border-white/50 group-hover:scale-110 transition-all duration-300 float-animation">
        <Quote className="text-white drop-shadow-lg" size={20} />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Stars */}
        <div className="flex items-center gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={20}
              className={`${
                i < rating ? "text-amber-400 fill-amber-400 drop-shadow-sm" : "text-slate-300"
              } transition-all duration-300 group-hover:scale-110`}
              style={{ transitionDelay: `${i * 50}ms` }}
            />
          ))}
          <span className="ml-3 text-sm font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            {rating}/5
          </span>
        </div>

        {/* Message */}
        <blockquote className="text-lg leading-relaxed text-slate-800 mb-8 font-medium italic group-hover:text-slate-900 transition-colors duration-300">
          "{message}"
        </blockquote>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent mb-8 w-24 mx-auto"></div>

        {/* Author */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-700 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-xl border-4 border-white/50 group-hover:scale-110 transition-all duration-300">
              {name.charAt(0).toUpperCase()}
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-400 rounded-full border-3 border-white shadow-md"></div>
          </div>
          <div className="min-w-0 flex-1">
            <h4 className="font-bold text-xl text-slate-900 group-hover:text-emerald-600 transition-colors duration-300 truncate">
              {name}
            </h4>
            <div className="flex items-center gap-2 text-sm text-slate-500 mt-1">
              <MapPin size={16} />
              <span>{city}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom glow effect */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-indigo-500/10 to-transparent rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
};

export default TestimonialsPage;



// import React, { useEffect, useState } from "react";
// import { getTestimonials } from "../Services/TestimonialApi";
// import { Star, MapPin, Quote, User } from "lucide-react";

// const TestimonialsPage = () => {
//   const [items, setItems] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setLoading(true);
//     getTestimonials().then(res => {
//       setItems(res.data.testimonials || []);
//       setLoading(false);
//     }).catch(() => {
//       setLoading(false);
//     });
//   }, []);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
//         <div className="text-center p-8">
//           <div className="relative mx-auto mb-6 w-24 h-24">
//             <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur-xl opacity-30 animate-pulse"></div>
//             <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/50">
//               <Quote className="mx-auto text-indigo-600" size={32} />
//             </div>
//           </div>
//           <div className="space-y-2">
//             <div className="h-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full w-24 mx-auto animate-pulse"></div>
//             <p className="text-lg font-medium text-slate-600">Loading customer stories...</p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-24">
//           <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-3xl mb-8 shadow-2xl border-4 border-white/50 backdrop-blur-sm">
//             <Quote className="text-white drop-shadow-lg" size={40} />
//           </div>
//           <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-slate-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent mb-6 leading-tight">
//             Real Stories
//           </h1>
//           <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
//             Don't just take our word for it. Hear directly from customers who've transformed their experience with us.
//           </p>
//           <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-slate-600">
//             <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg border border-slate-200/50">
//               <div className="flex">
//                 {[1, 2, 3, 4, 5].map((star) => (
//                   <Star key={star} className="text-amber-400 fill-amber-400 drop-shadow-sm h-6 w-6" />
//                 ))}
//               </div>
//               <span className="font-bold text-lg ml-2">4.9/5</span>
//             </div>
//             <div className="text-2xl font-bold bg-white/70 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg border border-slate-200/50">
//               {items.length} Happy Customers
//             </div>
//           </div>
//         </div>

//         {/* Testimonials Grid */}
//         {items.length === 0 ? (
//           <div className="text-center py-32">
//             <div className="relative mx-auto w-32 h-32 mb-8">
//               <div className="absolute inset-0 bg-gradient-to-r from-slate-200 to-indigo-200 rounded-3xl blur-xl"></div>
//               <Quote className="mx-auto relative text-slate-400 drop-shadow-lg" size={80} />
//             </div>
//             <h3 className="text-3xl font-bold text-slate-500 mb-4">No reviews yet</h3>
//             <p className="text-xl text-slate-500 max-w-md mx-auto">Be the first to share your experience and help others discover us!</p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
//             {items.map((t, index) => (
//               <TestimonialCard key={t._id} testimonial={t} index={index} />
//             ))}
//           </div>
//         )}
//       </div>

//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-12px); }
//         }
        
//         @keyframes shimmer {
//           0% { background-position: -200% 0; }
//           100% { background-position: 200% 0; }
//         }
        
//         @keyframes card-enter {
//           from {
//             opacity: 0;
//             transform: translateY(40px) scale(0.95);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0) scale(1);
//           }
//         }
        
//         .float-animation {
//           animation: float 6s ease-in-out infinite;
//         }
        
//         .shimmer {
//           background: linear-gradient(90deg, #f0f0f0 25%, #e0e7ff 50%, #f0f0f0 75%);
//           background-size: 200% 100%;
//           animation: shimmer 2s infinite;
//         }
        
//         .card-enter {
//           animation: card-enter 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
//           opacity: 0;
//         }
//       `}</style>
//     </div>
//   );
// };

// const TestimonialCard = ({ testimonial, index }) => {
//   const { name, message, rating, city } = testimonial;

//   return (
//     <div 
//       className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50 hover:border-indigo-200/50 hover:shadow-3xl hover:bg-white/95 transition-all duration-500 overflow-hidden card-enter"
//       style={{ animationDelay: `${index * 150}ms` }}
//     >
//       {/* Decorative background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-3xl"></div>
      
//       {/* Quote badge */}
//       <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl border-4 border-white/50 group-hover:scale-110 transition-all duration-300 float-animation">
//         <Quote className="text-white drop-shadow-lg" size={20} />
//       </div>

//       {/* Content */}
//       <div className="relative z-10">
//         {/* Stars */}
//         <div className="flex items-center gap-1 mb-6">
//           {[...Array(5)].map((_, i) => (
//             <Star
//               key={i}
//               size={20}
//               className={`${
//                 i < rating ? "text-amber-400 fill-amber-400 drop-shadow-sm" : "text-slate-300"
//               } transition-all duration-300 group-hover:scale-110`}
//               style={{ transitionDelay: `${i * 50}ms` }}
//             />
//           ))}
//           <span className="ml-3 text-sm font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
//             {rating}/5
//           </span>
//         </div>

//         {/* Message */}
//         <blockquote className="text-lg leading-relaxed text-slate-800 mb-8 font-medium italic group-hover:text-slate-900 transition-colors duration-300">
//           "{message}"
//         </blockquote>

//         {/* Divider */}
//         <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent mb-8 w-24 mx-auto"></div>

//         {/* Author */}
//         <div className="flex items-center gap-4">
//           <div className="relative">
//             <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-xl border-4 border-white/50 group-hover:scale-110 transition-all duration-300">
//               {name.charAt(0).toUpperCase()}
//             </div>
//             <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-400 rounded-full border-3 border-white shadow-md"></div>
//           </div>
//           <div className="min-w-0 flex-1">
//             <h4 className="font-bold text-xl text-slate-900 group-hover:text-indigo-600 transition-colors duration-300 truncate">
//               {name}
//             </h4>
//             <div className="flex items-center gap-2 text-sm text-slate-500 mt-1">
//               <MapPin size={16} />
//               <span>{city}</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom glow effect */}
//       <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-indigo-500/10 to-transparent rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//     </div>
//   );
// };

// export default TestimonialsPage;
