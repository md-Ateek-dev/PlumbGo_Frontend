// // import React, { useEffect, useState } from "react";
// // import { getMyBookings, cancelMyBookings } from "../Services/BookingApi";
// // import { useNavigate } from "react-router-dom";
// // import toast from "react-hot-toast";

// // const MyBookingsPage = () => {
// //   const [bookings, setBookings] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [msg, setMsg] = useState("");
// //   const navigate = useNavigate();

// //   const loadBookings = async () => {
// //     try {
// //       setLoading(true);
// //       const token = localStorage.getItem("plumbgo_user_token");
// //       if (!token) {
// //         setMsg("Please login to see your bookings.");
// //         setLoading(false);
// //         return;
// //       }

// //       const res = await getMyBookings();
// //         console.log("MY BOOKINGS RESPONSE:", res.data); // 👈 debug

// //       setBookings(res.data.bookings || []);
// //     } catch (error) {
// //       console.error("My bookings error:", error);
// //       setMsg(
// //         error.response?.data?.message || "Failed to load bookings. Try again."
// //       );
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     loadBookings();
// //   }, []);
  
// // // handle cancle Logic start
// // const handleCancel = async (id) => {
// //   if (!window.confirm("Are you sure you want to cancel this booking?")) return;

// //   try {
// //     const res = await cancelMyBookings(id);
// //     toast.success(res.data?.message || "Booking cancelled");

// //     // UI list update
// //     setBookings((prev) =>
// //       prev.map((b) =>
// //         b._id === id ? { ...b, status: "cancelled" } : b
// //       )
// //     );
// //   } catch (error) {
// //     const msg =
// //       error.response?.data?.message || "Failed to cancel booking";
// //     toast.error(msg);
// //     console.error("Cancel error:", error);
// //   }
// // };

// // // handle cancle logic end

// //   if (loading) {
// //     return (
// //       <div className="flex min-h-screen items-center justify-center bg-slate-50">
// //         <p className="text-slate-600">Loading your bookings...</p>
// //       </div>
// //     );
// //   }

// //   if (!localStorage.getItem("plumbgo_user_token")) {
// //     return (
// //       <div className="flex min-h-screen items-center justify-center bg-slate-50">
// //         <div className="rounded-xl bg-white p-6 shadow-sm text-center">
// //           <p className="mb-3 text-sm text-slate-700">
// //             You are not logged in.
// //           </p>
// //           <button
// //             onClick={() => navigate("/login")}
// //             className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
// //           >
// //             Go to Login
// //           </button>
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen bg-slate-50">
// //       <div className="mx-auto max-w-4xl px-4 py-8">
// //         <h1 className="mb-2 text-2xl font-bold text-slate-900">
// //           My Bookings
// //         </h1>
// //         {msg && (
// //           <div className="mb-4 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700">
// //             {msg}
// //           </div>
// //         )}

// //         {bookings.length === 0 ? (
// //           <p className="text-sm text-slate-600">
// //             You don&apos;t have any bookings yet.
// //           </p>
// //         ) : (
// //           <div className="space-y-3">
// //             {bookings.map((b) => (
// //               <div
// //                 key={b._id}
// //                 className="rounded-xl bg-white p-4 shadow-sm border border-slate-200 flex flex-col gap-1"
// //               >
// //                 <div className="flex items-center justify-between">
// //                   <p className="text-sm font-semibold text-slate-900">
// //                     {b.service?.name}
// //                   </p>
// //                   <span
// //                     className={`rounded-full px-2.5 py-0.5 text-xs font-medium
// //                     ${
// //                       b.status === "pending"
// //                         ? "bg-yellow-100 text-yellow-800"
// //                         : b.status === "confirmed"
// //                         ? "bg-blue-100 text-blue-800"
// //                         : b.status === "completed"
// //                         ? "bg-green-100 text-green-800"
// //                         : "bg-red-100 text-red-800"
// //                     }`}
// //                   >
// //                     {b.status}
// //                   </span>
// //                 </div>
                

// //                 <p className="text-xs text-slate-600">
// //                   Date: {b.date} • Time: {b.timeSlot}
// //                 </p>
// //                 <p className="text-xs text-slate-600">
// //                   Address: {b.address}
// //                 </p>
// //                 {b.notes && (
// //                   <p className="text-xs text-slate-500">
// //                     Notes: {b.notes}
// //                   </p>
// //                 )}
// //                 {b.service?.price != null && (
// //                   <p className="mt-1 text-sm font-medium text-slate-900">
// //                     ₹{b.service.price}
// //                   </p>
                  
// //                 )}
// //                 <p className="text-xs text-slate-600">
// //   Payment:{" "}
// //   {b.paymentMethod === "online" ? "Online" : "Cash on Delivery"} •{" "}
// //   Status: {b.paymentStatus || "pending"}
// // </p>
// // {/* Cancle btn start */}
// //             {["pending", "confirmed"].includes(b.status) && (
// //     <button
// //       onClick={() => handleCancel(b._id)}
// //       className="mt-2 inline-flex items-center justify-center rounded-lg border border-red-300 px-3 py-1.5 text-xs font-medium text-red-600 hover:bg-red-50"
// //     >
// //       Cancel Booking
// //     </button>
// //   )}    
// //                 {/* Cancle btn End */}

// //               </div>
// //             ))}
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default MyBookingsPage;

// // import React, { useEffect, useState } from "react";
// // import { getMyBookings, cancelMyBookings } from "../Services/BookingApi";
// // import toast from "react-hot-toast";

// // const statusColors = {
// //   pending: "bg-yellow-100 text-yellow-700",
// //   confirmed: "bg-blue-100 text-blue-700",
// //   completed: "bg-green-100 text-green-700",
// //   cancelled: "bg-red-100 text-red-700",
// // };

// // const paymentColors = {
// //   paid: "bg-green-100 text-green-700",
// //   pending: "bg-orange-100 text-orange-700",
// // };

// // const MyBookingsPage = () => {
// //   const [bookings, setBookings] = useState([]);

// //   const loadBookings = async () => {
// //     try {
// //       const res = await getMyBookings();
// //       console.log("MY BOOKINGS RESPONSE:", res.data);
// //       setBookings(res.data.bookings);
// //     } catch (err) {
// //       console.log("MyBookings Error:", err);
// //       toast.error("Failed to load bookings");
// //     }
// //   };

// //   const handleCancel = async (id) => {
// //     if (!window.confirm("Are you sure you want to cancel this booking?")) return;

// //     try {
// //       const res = await cancelMyBookings(id);
// //       toast.success("Booking cancelled");
// //       loadBookings();
// //     } catch (err) {
// //       console.log("Cancel Error:", err);
// //       toast.error("Unable to cancel booking");
// //     }
// //   };

// //   useEffect(() => {
// //     loadBookings();
// //   }, []);

// //   return (
// //     <div className="p-4 max-w-3xl mx-auto">
// //       <h1 className="text-2xl font-bold mb-4">My Bookings</h1>

// //       {bookings.length === 0 ? (
// //         <p>No bookings found.</p>
// //       ) : (
// //         bookings.map((b) => (
// //           <div
// //             key={b._id}
// //             className="border p-4 rounded-lg shadow-sm mb-4 bg-white"
// //           >
// //             <div className="flex justify-between items-center">
// //               <h2 className="text-lg font-semibold">{b.service?.name}</h2>

// //               {/* Booking Status */}
// //               <span
// //                 className={`px-3 py-1 rounded-full text-sm ${statusColors[b.status]}`}
// //               >
// //                 {b.status.toUpperCase()}
// //               </span>
// //             </div>

// //             <p className="text-gray-700 mt-2">
// //               <strong>Date:</strong> {b.date}
// //             </p>
// //             <p className="text-gray-700">
// //               <strong>Time Slot:</strong> {b.timeSlot}
// //             </p>

// //             <p className="text-gray-700">
// //               <strong>Address:</strong> {b.address}
// //             </p>

// //             {/* Payment Method */}
// //             <p className="mt-2">
// //               <strong>Payment Method:</strong>{" "}
// //               <span className="font-medium">{b.paymentMethod.toUpperCase()}</span>
// //             </p>

// //             {/* Payment Status */}
// //             <p className="mt-1">
// //               <strong>Payment Status:</strong>{" "}
// //               <span
// //                 className={`px-2 py-1 rounded text-sm ${paymentColors[b.paymentStatus]}`}
// //               >
// //                 {b.paymentStatus.toUpperCase()}
// //               </span>
// //             </p>

// //             {/* Cancel Button */}
// //             {b.status !== "cancelled" && b.status !== "completed" && (
// //               <button
// //                 onClick={() => handleCancel(b._id)}
// //                 className="mt-3 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
// //               >
// //                 Cancel Booking
// //               </button>
// //             )}
// //           </div>
// //         ))
// //       )}
// //     </div>
// //   );
// // };

// // export default MyBookingsPage;


// import React, { useEffect, useState, useTransition } from "react";
// import { getMyBookings, cancelMyBookings } from "../Services/BookingApi";
// import { motion, AnimatePresence } from "framer-motion";
// import toast from "react-hot-toast";

// const statusColors = {
//   pending: "bg-amber-100/80 border-amber-200/60 text-amber-800",
//   confirmed: "bg-blue-100/80 border-blue-200/60 text-blue-800", 
//   completed: "bg-emerald-100/80 border-emerald-200/60 text-emerald-800",
//   cancelled: "bg-rose-100/80 border-rose-200/60 text-rose-800",
// };

// const paymentColors = {
//   paid: "bg-emerald-100/80 border-emerald-200/60 text-emerald-800",
//   pending: "bg-orange-100/80 border-orange-200/60 text-orange-800",
// };

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.08, delayChildren: 0.2 }
//   }
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 25, scale: 0.96 },
//   visible: { 
//     opacity: 1, 
//     y: 0, 
//     scale: 1,
//     transition: { type: "spring", stiffness: 400, damping: 25 }
//   }
// };

// const MyBookingsPage = () => {
//   const [bookings, setBookings] = useState([]);
//   const [isPending, startTransition] = useTransition();
//   const [isLoading, setIsLoading] = useState(true);

//   const loadBookings = async () => {
//     setIsLoading(true);
//     try {
//       const res = await getMyBookings();
//       console.log("MY BOOKINGS RESPONSE:", res.data);
//       startTransition(() => {
//         setBookings(res.data.bookings || []);
//       });
//     } catch (err) {
//       console.log("MyBookings Error:", err);
//       toast.error("Failed to load bookings");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleCancel = async (id) => {
//     if (!window.confirm("Are you sure you want to cancel this booking?")) return;
//     try {
//       const res = await cancelMyBookings(id);
//       toast.success("Booking cancelled");
//       loadBookings();
//     } catch (err) {
//       console.log("Cancel Error:", err);
//       toast.error("Unable to cancel booking");
//     }
//   };

//   useEffect(() => {
//     loadBookings();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/50 p-6">
//       <motion.div 
//         className="max-w-4xl mx-auto"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         {/* Header */}
//         <motion.h1 
//           className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-900 bg-clip-text text-transparent mb-12 text-center"
//           initial={{ scale: 0.9, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ delay: 0.2, duration: 0.5 }}
//         >
//           My Bookings
//         </motion.h1>

//         {/* Loading */}
//         {isLoading ? (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="flex flex-col items-center justify-center py-24"
//           >
//             <motion.div 
//               animate={{ rotate: 360 }}
//               transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//               className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full mb-6"
//             />
//             <p className="text-xl text-slate-600 font-medium">Loading your bookings...</p>
//           </motion.div>
//         ) : (
//           <AnimatePresence>
//             <motion.div
//               variants={containerVariants}
//               initial="hidden"
//               animate="visible"
//               className="space-y-6"
//             >
//               {bookings.length === 0 ? (
//                 <motion.div variants={itemVariants} className="text-center py-20">
//                   <motion.div 
//                     initial={{ scale: 0 }}
//                     animate={{ scale: 1 }}
//                     className="w-24 h-24 bg-gradient-to-br from-slate-200 to-slate-300 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl"
//                   >
//                     <svg className="w-12 h-12 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
//                     </svg>
//                   </motion.div>
//                   <h3 className="text-2xl font-bold text-slate-800 mb-2">No bookings found</h3>
//                   <p className="text-slate-600 max-w-md mx-auto">Your bookings will appear here when you make them.</p>
//                 </motion.div>
//               ) : (
//                 bookings.map((b) => (
//                   <motion.div 
//                     key={b._id}
//                     variants={itemVariants}
//                     whileHover={{ y: -6 }}
//                     className="group"
//                   >
//                     <div className="bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-3xl shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-500">
//                       {/* Header */}
//                       <div className="p-8 border-b border-slate-100">
//                         <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
//                           <h2 className="text-2xl lg:text-3xl font-black text-slate-900 group-hover:text-blue-700 transition-colors duration-300">
//                             {b.service?.name}
//                           </h2>
//                           <motion.span
//                             initial={{ scale: 0.9 }}
//                             animate={{ scale: 1 }}
//                             whileHover={{ scale: 1.05 }}
//                             className={`px-5 py-2 rounded-2xl text-sm font-bold border-2 ${statusColors[b.status]} shadow-md`}
//                           >
//                             {b.status.toUpperCase()}
//                           </motion.span>
//                         </div>
//                       </div>

//                       {/* Details */}
//                       <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
//                         <div className="space-y-4">
//                           <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100/60">
//                             <div className="w-3 h-3 bg-blue-500 rounded-full mt-1 flex-shrink-0" />
//                             <div>
//                               <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1">Date</p>
//                               <p className="text-xl font-bold text-slate-900">{b.date}</p>
//                             </div>
//                           </div>
                          
//                           <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl border border-emerald-100/60">
//                             <div className="w-3 h-3 bg-emerald-500 rounded-full mt-1 flex-shrink-0" />
//                             <div>
//                               <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1">Time Slot</p>
//                               <p className="text-xl font-bold text-slate-900">{b.timeSlot}</p>
//                             </div>
//                           </div>
//                         </div>

//                         <div className="space-y-4">
//                           <div className="p-5 bg-gradient-to-r from-slate-50 to-gray-50 rounded-2xl border border-slate-200/60">
//                             <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-2">Address</p>
//                             <p className="text-lg font-medium text-slate-900 leading-relaxed">{b.address}</p>
//                           </div>
                          
//                           <div className="grid grid-cols-2 gap-4">
//                             <div className="p-4 bg-gradient-to-r from-violet-50 to-purple-50 rounded-2xl border border-violet-200/60 text-center">
//                               <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1">Payment Method</p>
//                               <p className="text-sm font-bold text-slate-900">{b.paymentMethod?.toUpperCase()}</p>
//                             </div>
//                             <motion.span
//                               whileHover={{ scale: 1.02 }}
//                               className={`p-4 rounded-2xl border-2 font-bold text-sm ${paymentColors[b.paymentStatus]} shadow-md text-center`}
//                             >
//                               {b.paymentStatus.toUpperCase()}
//                             </motion.span>
//                           </div>
//                         </div>
//                       </div>

//                       {/* Cancel Button */}
//                       {b.status !== "cancelled" && b.status !== "completed" && (
//                         <div className="px-8 pb-8">
//                           <motion.button
//                             whileHover={{ 
//                               scale: 1.02, 
//                               boxShadow: "0 10px 25px rgba(239,68,68,0.3)" 
//                             }}
//                             whileTap={{ scale: 0.98 }}
//                             onClick={() => handleCancel(b._id)}
//                             className="w-full bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-600 hover:to-red-700 text-white font-bold py-4 px-6 rounded-2xl text-lg shadow-lg transition-all duration-200"
//                           >
//                             Cancel Booking
//                           </motion.button>
//                         </div>
//                       )}
//                     </div>
//                   </motion.div>
//                 ))
//               )}
//             </motion.div>
//           </AnimatePresence>
//         )}
//       </motion.div>
//     </div>
//   );
// };

// export default MyBookingsPage;


import React, { useEffect, useState } from "react";
import { getMyBookings, cancelMyBookings } from "../Services/BookingApi";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import { Wrench } from "lucide-react";

const statusColors = {
  pending: "bg-amber-50 border-amber-200 text-amber-700",
  confirmed: "bg-blue-50 border-blue-200 text-blue-700", 
  completed: "bg-emerald-50 border-emerald-200 text-emerald-700",
  cancelled: "bg-rose-50 border-rose-200 text-rose-700",
};

const statusIcons = {
  pending: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  confirmed: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  completed: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  ),
  cancelled: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  }
};

const MyBookingsPage = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [displayCount, setDisplayCount] = useState(6);

  const loadBookings = async () => {
    setIsLoading(true);
    try {
      const res = await getMyBookings();
      console.log("MY BOOKINGS RESPONSE:", res.data);
      setBookings(res.data.bookings || []);
    } catch (err) {
      console.log("MyBookings Error:", err);
      toast.error("Failed to load bookings");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = async (id) => {
    if (!window.confirm("Are you sure you want to cancel this booking?")) return;
    try {
      await cancelMyBookings(id);
      toast.success("Booking cancelled successfully");
      loadBookings();
    } catch (err) {
      console.log("Cancel Error:", err);
      toast.error("Unable to cancel booking");
    }
  };

  const handleShowMore = () => {
    setDisplayCount(prev => prev + 6);
  };

  const handleShowLess = () => {
    setDisplayCount(6);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    loadBookings();
  }, []);

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block"
          >
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 bg-clip-text text-transparent mb-4">
              My Bookings
            </h1>
            <div className="h-1.5 w-32 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mx-auto"></div>
          </motion.div>
          <p className="text-lg text-slate-600 mt-4">Track and manage all your service bookings</p>
        </div>

        {/* Loading */}
        {isLoading ? (
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
        ) : (
          <AnimatePresence mode="wait">
            {bookings.length === 0 ? (
              <motion.div 
                key="empty"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="text-center py-20"
              >
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">No Bookings Yet</h3>
                <p className="text-slate-600">Your bookings will appear here when you make them</p>
              </motion.div>
            ) : (
              <motion.div
                key="bookings"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {bookings.slice(0, displayCount).map((booking, index) => (
                    <motion.div 
                      key={booking._id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.3,
                        delay: index * 0.05,
                        ease: "easeOut"
                      }}
                      whileHover={{ y: -8, transition: { duration: 0.2 } }}
                      className="group"
                    >
                      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300 h-full flex flex-col">
                        {/* Card Header */}
                        <div className="bg-gradient-to-r from-emerald-700 to-teal-600 p-5">
                          <div className="flex items-start justify-between gap-3">
                            <h3 className="text-xl font-bold text-white line-clamp-2 flex-1">
                              {booking.service?.name}
                            </h3>
                            <motion.div
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border-2 ${statusColors[booking.status]} bg-white`}
                            >
                              {statusIcons[booking.status]}
                              <span>{booking.status}</span>
                            </motion.div>
                          </div>
                        </div>

                        {/* Card Body */}
                        <div className="p-5 flex-1 space-y-4">
                          {/* Date */}
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <div>
                              <p className="text-xs text-slate-500 font-medium">Date</p>
                              <p className="text-sm font-bold text-slate-900">{booking.date}</p>
                            </div>
                          </div>

                          {/* Time Slot */}
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0">
                              <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <div>
                              <p className="text-xs text-slate-500 font-medium">Time Slot</p>
                              <p className="text-sm font-bold text-slate-900">{booking.timeSlot}</p>
                            </div>
                          </div>

                          {/* Address */}
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-xs text-slate-500 font-medium mb-1">Address</p>
                              <p className="text-sm text-slate-700 line-clamp-2">{booking.address}</p>
                            </div>
                          </div>

                          {/* Payment Info */}
                          <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-100">
                            <div className="text-center p-3 bg-gradient-to-br from-violet-50 to-violet-100/50 rounded-xl">
                              <p className="text-xs text-slate-600 font-medium mb-1">Payment</p>
                              <p className="text-sm font-bold text-slate-900">{booking.paymentMethod?.toUpperCase()}</p>
                            </div>
                            <div className={`text-center p-3 rounded-xl border-2 ${booking.paymentStatus === 'paid' ? 'bg-emerald-50 border-emerald-200' : 'bg-orange-50 border-orange-200'}`}>
                              <p className="text-xs text-slate-600 font-medium mb-1">Status</p>
                              <p className={`text-sm font-bold ${booking.paymentStatus === 'paid' ? 'text-emerald-700' : 'text-orange-700'}`}>
                                {booking.paymentStatus?.toUpperCase()}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Cancel Button */}
                        {booking.status !== "cancelled" && booking.status !== "completed" && (
                          <div className="p-5 pt-0">
                            <motion.button
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => handleCancel(booking._id)}
                              className="w-full cursor-pointer bg-gradient-to-r from-rose-700 to-red-600 hover:from-rose-600 hover:to-red-600 text-white font-bold py-3 px-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
                            >
                              Cancel Booking
                            </motion.button>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Show More / Show Less Button */}
                {bookings.length > 6 && (
                  <div className="text-center mt-12">
                    {displayCount < bookings.length ? (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleShowMore}
                        className="group cursor-pointer relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          Show More
                          <svg className="w-5 h-5 transform group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-teal-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                      </motion.button>
                    ) : (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleShowLess}
                        className="group relative cursor-pointer px-8 py-4 bg-gradient-to-r from-slate-600 to-slate-700 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          Show Less
                          <svg className="w-5 h-5 transform group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                          </svg>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-700 to-slate-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                      </motion.button>
                    )}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </motion.div>
    </div>
  );
};

export default MyBookingsPage;