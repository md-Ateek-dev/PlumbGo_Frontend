// // import React from "react";
// // import { useNavigate } from "react-router-dom";

// // const HomePage = () => {
// //   const navigate = useNavigate();

// //   return (
// //     <div className="min-h-[calc(100vh-56px)] bg-slate-50">
// //       <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-6 px-4 py-10 text-center md:flex-row md:text-left">
// //         <div className="flex-1 space-y-4">
// //           <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
// //             Fast & Reliable Plumbing Services,
// //             <span className="text-blue-600"> On-Demand</span>
// //           </h1>
// //           <p className="text-sm text-slate-600 md:text-base">
// //             Book professional plumbers in just a few clicks. PlumbGo connects
// //             you with trusted experts for leaks, repairs and full bathroom
// //             fittings.
// //           </p>
// //           <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
// //             <button
// //               onClick={() => navigate("/booking")}
// //               className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700"
// //             >
// //               Book a Service
// //             </button>
// //             <button
// //               onClick={() => navigate("/services")}
// //               className="rounded-lg border border-slate-300 px-5 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
// //             >
// //               View Services
// //             </button>
// //           </div>
// //         </div>

// //         <div className="flex-1">
// //           <div className="mx-auto h-56 w-56 rounded-3xl bg-blue-50 p-6 shadow-inner md:h-64 md:w-64">
// //             <div className="h-full w-full rounded-2xl border-2 border-dashed border-blue-200 bg-gradient-to-br from-blue-50 to-slate-50 flex items-center justify-center text-sm text-blue-500">
// //               Plumbing illustration here 🙂
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default HomePage;



// import React from "react";
// import { useNavigate } from "react-router-dom";
// import AboutUsPage from "./AboutUsPage";

// const HomePage = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-slate-50">
//       {/* Hero */}
//       <section className="max-w-6xl mx-auto px-4 pt-16 pb-10 flex flex-col md:flex-row items-center gap-10">
//         <div className="flex-1">
//           <p className="text-sm font-semibold text-blue-600 mb-2">
//             PlumbGo • Plumbing Services On-Demand
//           </p>
//           <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-snug">
//             Book professional plumbers in minutes, right from your home.
//           </h1>
//           <p className="text-slate-600 mb-6">
//             Tap repair, leak fix, jet spray, mixer, shower – sab kuchh ek hi jagah.
//             Choose service, pick a time slot and relax. Our plumber will reach
//             your doorstep.
//           </p>
//           <div className="flex gap-3">
//             <button
//               onClick={() => navigate("/booking")}
//               className="px-5 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700"
//             >
//               Book Now
//             </button>
//             <button
//               onClick={() => navigate("/services")}
//               className="px-5 py-2.5 rounded-lg border border-slate-300 text-sm font-medium text-slate-800 bg-white hover:bg-slate-50"
//             >
//               View Services
//             </button>
//           </div>
//         </div>

//         <div className="flex-1">
//           <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6">
//             <p className="text-sm font-medium text-slate-800 mb-2">
//               Why PlumbGo?
//             </p>
//             <ul className="space-y-2 text-sm text-slate-600">
//               <li>• Verified plumbers only</li>
//               <li>• Fixed pricing, no hidden charges</li>
//               <li>• Online payment + Cash on Delivery</li>
//               <li>• Live booking status: pending / confirmed / completed</li>
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* How it works */}
//       <section className="max-w-6xl mx-auto px-4 pb-12">
//         <h2 className="text-xl font-semibold text-slate-900 mb-4">
//           How it works
//         </h2>
//         <div className="grid gap-4 md:grid-cols-3">
//           {[
//             {
//               title: "Choose a service",
//               desc: "Tap repair, leakage, bathroom fitting and more.",
//             },
//             {
//               title: "Pick date & time",
//               desc: "Slot select karo, address share karo.",
//             },
//             {
//               title: "Plumber at your doorstep",
//               desc: "Admin confirm karega, plumber aa jayega time par.",
//             },
//           ].map((step) => (
//             <div
//               key={step.title}
//               className="rounded-xl bg-white border border-slate-100 shadow-sm p-4"
//             >
//               <p className="text-sm font-semibold text-slate-900">
//                 {step.title}
//               </p>
//               <p className="mt-1 text-sm text-slate-600">{step.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//        <AboutUsPage />

//     </div>
//   );
  
// };
// export default HomePage;



// new code start here 


import React from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import bgImage from "../assets/pattern3.jpg"
import bgImage1 from "../assets/image4.jpg"



const HomePage = () => {
  const navigate = useNavigate();

  const steps = [
    {
      title: "Choose Service",
      desc: "Tap repair, leakage, bathroom fitting and 20+ more services",
      icon: "🔧",
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Pick Slot",
      desc: "Select date, time & share your address instantly",
      icon: "📅",
      color: "from-emerald-500 to-teal-600"
    },
    {
      title: "Plumber Arrives",
      desc: "Admin confirms → Expert reaches on time → Problem solved",
      icon: "🚀",
      color: "from-purple-500 to-pink-600"
    }
  ];

  return ( 
    <>
    <div className="min-h-screen relative pt-20 bg-white overflow-x-hidden overflow-y-hidden">
      {/* Hero Section */}
  {/* <HomeCarousel /> */}

      <section className="relative overflow-hidden max-w-7xl mx-auto px-4 pt-24 pb-20 md:pt-32 md:pb-28">
        {/* Floating Elements */}
        <motion.div 
          className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 rounded-3xl blur-xl animate-pulse"
          animate={{ y: [0, -20, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-1/2 right-10 w-24 h-24 bg-indigo-200/40 rounded-full blur-2xl"
          animate={{ x: [0, 20, 0], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        <div className="relative grid md:grid-cols-2 items-center gap-12 lg:gap-20">
          {/* Hero Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-600/90 to-teal-600/90 text-white text-xs font-bold rounded-full shadow-lg mb-6 backdrop-blur-sm"
            >
              🚿 PlumbGo • India's #1 On-Demand Plumbing
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.9 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6"
            >
              Fix Leaks in 
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-teal-600 bg-clip-text text-transparent"> Minutes</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl text-slate-700 mb-8 leading-relaxed max-w-lg"
            >
              Professional plumbers at your doorstep. Tap repair, leak fix, full bathroom fittings – 
              <span className="font-semibold text-teal-600"> All work in 30 minutes!</span>
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate("/booking")}
                className="group relative cursor-pointer px-8 py-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-teal-600 text-white font-bold text-lg rounded-3xl shadow-2xl hover:shadow-3xl hover:from-emerald-700 hover:via-teal-700 hover:to-teal-700 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  🚀 Book Now
                </span>
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent -skew-x-12 -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000"
                  initial={false}
                />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate("/services")}
                className="px-8 py-4 border-2 cursor-pointer border-slate-200 bg-white/80 backdrop-blur-sm text-slate-800 font-semibold text-lg rounded-3xl shadow-xl hover:shadow-2xl hover:border-emerald-300 hover:text-teal-700 transition-all duration-300"
              >
                👀 View Services
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Hero Stats */}
          <motion.div 
  initial={{ opacity: 0, x: 40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: 0.5, duration: 0.8 }}
  className="space-y-8"
>
  {/* CARD 1 */}
  <div
    className="relative rounded-3xl p-8 border-1 border-gray-300 shadow-xl overflow-hidden"
    style={{
backgroundImage: `
  url(${bgImage})`,
        backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {/* overlay */}
    {/* <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div> */}

    {/* content */}
    <div className="relative z-10">
      <div className="text-4xl font-black text-blue-600 mb-2">👨‍🔧</div>
      <h3 className="text-2xl font-bold text-slate-900 mb-1">500+</h3>
      <p className="text-slate-600 font-medium">Verified Plumbers</p>
    </div>
  </div>

  {/* CARD 2 */}
  <div
    className="relative rounded-3xl p-8 border-1 border-gray-300 shadow-xl overflow-hidden"
    style={{
backgroundImage: `
  url(${bgImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {/* <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div> */}

    <div className="relative z-10">
      <div className="text-4xl font-black text-emerald-600 mb-2">📱</div>
      <h3 className="text-2xl font-bold text-slate-900 mb-1">10K+</h3>
      <p className="text-slate-600 font-medium">Happy Customers</p>
    </div>
  </div>
</motion.div>

        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-4 pb-24">
        <motion.h2 data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-4xl font-black bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent mb-4"
        >
          How It Works in 3 Clicks
        </motion.h2>
        
        <motion.div data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out"
          className="grid md:grid-cols-3 gap-8 mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2, delayChildren: 0.2 }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.6 }}
              className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border-1 border-gray-200 shadow-xl hover:shadow-3xl hover:border-gray-300/50 transition-all duration-500 cursor-pointer overflow-hidden"
              style={{
backgroundImage: `
  url(${bgImage})`,
        backgroundSize: "cover",
      backgroundPosition: "center",
    }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <motion.div 
                className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-2xl shadow-2xl mx-auto mb-6 group-hover:scale-110 transition-all duration-500`}
                whileHover={{ rotate: 5 }}
              >
                {step.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 text-center group-hover:text-teal-700 transition-colors">{step.title}</h3>
              <p className="text-black text-center leading-relaxed">{step.desc}</p>
              {/* <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-24 bg-gradient-to-r from-red-500 to-teal-500 rounded-full opacity-20 blur-xl group-hover:opacity-40 transition-all duration-500"></div> */}
            </motion.div>
          ))}
        </motion.div>
      </section>

    </div>
          


        </>

  );
};

export default HomePage;
