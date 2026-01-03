// // import React, { useEffect, useState } from "react";
// // import { getServices } from "../Services/ServicesApi"
// // import ServicesCard from "../Components/ServicesCard";

// // const ServicesPage = () => {
// //   const [services, setServices] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   const fetchServices = async () => {
// //     try {
// //       setLoading(true);
// //       const res = await getServices();
// //       setServices(res.data);
// //     } catch (error) {
// //       console.error("Error fetching services:", error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchServices();
// //   }, []);

// //   const handleBookClick = (service) => {
// //     // yahan se baad me booking form / login pe navigate karenge
// //     console.log("Book clicked:", service);
// //   };

// //   if (loading) {
// //     return (
// //       <div className="flex min-h-screen items-center justify-center bg-slate-50">
// //         <p className="text-slate-600">Loading services...</p>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen bg-slate-50">
// //       <div className="mx-auto max-w-5xl px-4 py-8">
// //         <h2 className="mb-2 text-2xl font-bold text-slate-900">
// //           Our Plumbing Services
// //         </h2>
// //         <p className="mb-6 text-sm text-slate-600">
// //           Choose a service and proceed to booking. All services are managed
// //           from your PlumbGo admin panel.
// //         </p>

// //         {services.length === 0 ? (
// //           <p className="text-slate-600">No services available.</p>
// //         ) : (
// //           <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
// //             {services.map((s) => (
// //               <ServicesCard
// //                 key={s._id}
// //                 service={s}
// //                 onBook={handleBookClick}
// //               />
// //             ))}
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ServicesPage;


// import React, { useEffect, useState } from "react";
// import { getServices } from "../Services/ServicesApi";
// import { useNavigate } from "react-router-dom";

// const ServicesPage = () => {
//   const [services, setServices] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const load = async () => {
//       try {
//         setLoading(true);
//         const res = await getServices();
//         setServices(res.data);
//       } catch (err) {
//         console.error("Load services error", err);
//         setError("Failed to load services. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     load();
//   }, []);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-slate-50">
//         <p className="text-slate-600 text-sm">Loading services...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-slate-50">
//       <div className="max-w-6xl mx-auto px-4 py-8">
//         <h1 className="text-2xl font-bold text-slate-900 mb-2">Our Services</h1>
//         <p className="text-sm text-slate-600 mb-6">
//           Fixed price plumbing services. Book instantly – no negotiation, no confusion.
//         </p>

//         {error && (
//           <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
//             {error}
//           </div>
//         )}

//         <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//           {services.map((s) => (
//             <div
//               key={s._id}
//               className="rounded-xl bg-white border border-slate-100 shadow-sm p-4 flex flex-col justify-between"
//             >
//               <div>
//                 <p className="text-sm font-semibold text-slate-900">{s.name}</p>
//                 <p className="mt-1 text-xs text-slate-600 line-clamp-2">
//                   {s.description || "Professional plumbing service."}
//                 </p>
//                 <p className="mt-2 text-sm font-medium text-slate-900">
//                   ₹{s.price}
//                 </p>
//                 {s.duration && (
//                   <p className="text-xs text-slate-500">
//                     Approx. time: {s.duration}
//                   </p>
//                 )}
//               </div>
//               <button
//                 onClick={() =>
//                   navigate(`/booking?serviceId=${encodeURIComponent(s._id)}`)
//                 }
//                 className="mt-4 w-full rounded-lg bg-blue-600 text-white text-xs font-medium py-2 hover:bg-blue-700"
//               >
//                 Book this service
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServicesPage;



// import React, { useEffect, useState } from "react";
// import { getServices } from "../Services/ServicesApi";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// const cardVariants = {
//   hidden: { opacity: 0, y: 10 },
//   visible: i => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.1,
//       type: "spring",
//       stiffness: 100,
//       damping: 20
//     }
//   }),
//   hover: {
//     scale: 1.05,
//     boxShadow: "0 8px 20px rgba(59, 130, 246, 0.3)"
//   }
// };

// const ServicesPage = () => {
//   const [services, setServices] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const load = async () => {
//       try {
//         setLoading(true);
//         const res = await getServices();
//         setServices(res.data);
//       } catch (err) {
//         console.error("Load services error", err);
//         setError("Failed to load services. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     load();
//   }, []);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50">
//         <p className="text-slate-600 text-sm font-medium">Loading services...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white">
//       <div className="max-w-6xl mx-auto px-6 py-10">
//         <h1 className="text-3xl font-extrabold text-slate-900 mb-4">
//           Our Services
//         </h1>
//         <p className="text-sm text-slate-600 mb-8 max-w-xl">
//           Fixed price plumbing services. Book instantly – no negotiation, no confusion.
//         </p>

//         {error && (
//           <div className="mb-6 rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700 shadow-sm">
//             {error}
//           </div>
//         )}

//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {services.map((s, i) => (
//             <motion.div
//               key={s._id}
//               custom={i}
//               initial="hidden"
//               animate="visible"
//               whileHover="hover"
//               variants={cardVariants}
//               className="rounded-2xl bg-white border border-slate-200 shadow-md p-6 flex flex-col justify-between cursor-pointer"
//               onClick={() => navigate(`/booking?serviceId=${encodeURIComponent(s._id)}`)}
//             >
//               <div>
//                 <p className="text-base font-semibold text-slate-900">{s.name}</p>
//                 <p className="mt-1 text-sm text-slate-600 line-clamp-3">
//                   {s.description || "Professional plumbing service."}
//                 </p>
//                 <p className="mt-3 text-lg font-bold text-blue-600">₹{s.price}</p>
//                 {s.duration && (
//                   <p className="text-xs text-slate-500 mt-1">Approx. time: {s.duration}</p>
//                 )}
//               </div>

//               <button
//                 onClick={e => {
//                   e.stopPropagation();  // Prevent card onclick
//                   navigate(`/booking?serviceId=${encodeURIComponent(s._id)}`);
//                 }}
//                 className="mt-6 w-full rounded-full bg-blue-600 py-2 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-blue-700 active:bg-blue-800"
//               >
//                 Book this service
//               </button>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServicesPage;

import React, { useEffect, useState } from "react";
import { getServices } from "../Services/ServicesApi";
import { useNavigate } from "react-router-dom";
import { Clock, ArrowRight, Sparkles, Wrench, AlertCircle } from "lucide-react";

const ServiceCard = ({ service, onBook, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition-all duration-500 hover:border-gray-200 hover:shadow-xl hover:-translate-y-2 animate-fadeInUp opacity-0"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

      {/* Animated corner accent */}
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-teal-400/20 to-purple-400/20 transition-transform duration-700 group-hover:scale-150"></div>

      {/* Content */}
      <div className="relative flex flex-col gap-3 p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="flex-1 text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-emerald-600">
            {service.name}
          </h3>
          <div
            className={`rounded-full bg-blue-100 p-2 transition-all duration-500 ${
              isHovered ? "rotate-12 scale-110" : ""
            }`}
          >
            <Sparkles size={18} className="text-teal-600" />
          </div>
        </div>

        {/* Description */}
        <p className="text-sm leading-relaxed text-slate-600 line-clamp-2 min-h-[40px]">
          {service.description || "Professional plumbing service."}
        </p>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

        {/* Price and Duration */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs font-medium text-slate-500">
              Starting from
            </span>
            <span className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              ₹{service.price}
            </span>
          </div>

          {service.duration && (
            <div className="flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5 transition-colors duration-300 group-hover:bg-blue-50">
              <Clock size={14} className="text-slate-600 transition-colors duration-300 group-hover:text-teal-600" />
              <span className="text-xs font-medium text-slate-600 transition-colors duration-300 group-hover:text-teal-600">
                {service.duration}
              </span>
            </div>
          )}
        </div>

        {/* Book Button */}
        <button
          onClick={() => onBook(service)}
          className="group/btn relative cursor-pointer mt-2 overflow-hidden rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]"
        >
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full"></div>
          <span className="relative flex items-center justify-center gap-2">
            Book this service
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover/btn:translate-x-1"
            />
          </span>
        </button>
      </div>

      {/* Bottom accent */}
      {/* <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-emerald-600 to-teal-500 transition-all duration-500 group-hover:w-full"></div> */}
    </div>
  );
};

const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);
  const navigate = useNavigate();

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const res = await getServices();
        setServices(res.data);
      } catch (err) {
        console.error("Load services error", err);
        setError("Failed to load services. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const handleBook = (service) => {
    navigate(`/booking?serviceId=${encodeURIComponent(service._id)}`);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const handleShowLess = () => {
    setVisibleCount(6);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden border-b border-slate-200 bg-white/50 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl"></div>
        <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-purple-400/10 blur-3xl"></div>
        
        <div className="relative mx-auto max-w-6xl px-4 py-12">
          <div className="animate-fadeInDown">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-teal-700">
              <Wrench size={16} />
              Professional Services
            </div>
            <h1 className="mb-3 text-4xl font-bold text-slate-900 md:text-5xl">
              Our <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Plumbing</span> Services
            </h1>
            <p className="max-w-2xl text-lg text-slate-600">
              Fixed price plumbing services. Book instantly – no negotiation, no confusion.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="mx-auto max-w-6xl px-4 py-12">
        {error && (
          <div className="mb-8 flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 animate-slideInLeft">
            <AlertCircle size={20} className="flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {services.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-white/50 py-16 animate-fadeIn">
            <div className="mb-4 rounded-full bg-slate-100 p-4">
              <Wrench size={32} className="text-slate-400" />
            </div>
            <p className="text-lg font-medium text-slate-600">No services available</p>
            <p className="text-sm text-slate-500">Check back later for updates</p>
          </div>
        ) : (
          <>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.slice(0, visibleCount).map((service, index) => (
                <ServiceCard
                  key={service._id}
                  service={service}
                  onBook={handleBook}
                  index={index}
                />
              ))}
            </div>

            {/* Load More / Show Less Buttons */}
            {services.length > 6 && (
              <div className="mt-10 flex justify-center gap-4">
                {visibleCount < services.length && (
                  <button
                    onClick={handleLoadMore}
                    className="group cursor-pointer relative overflow-hidden rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
                  >
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"></div>
                    <span className="relative flex items-center gap-2">
                      More Services
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
                    className="group cursor-pointer relative overflow-hidden rounded-xl border-2 border-emerald-600 bg-white px-8 py-3 font-semibold text-emerald-600 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-emerald-50 hover:shadow-xl active:scale-95"
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
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-fadeInDown {
          animation: fadeInDown 0.8s ease-out;
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.5s ease-out;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ServicesPage;
