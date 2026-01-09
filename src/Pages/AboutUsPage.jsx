// import React from "react";

// const AboutUsPage = () => {
//   return (
//     <div className="min-h-screen bg-slate-50">
//       <div className="max-w-4xl mx-auto px-4 py-10">
//         <h1 className="text-2xl font-bold text-slate-900 mb-4">
//           About PlumbGo
//         </h1>
//         <p className="text-sm text-slate-700 mb-4">
//           PlumbGo ek online plumbing service platform hai jahan se aap
//           verified plumbers ko ghar baithe book kar sakte hain. 
//           Hamara focus hai fast response, transparent pricing aur safe service.
//         </p>

//         <h2 className="text-lg font-semibold text-slate-900 mt-6 mb-2">
//           Our Mission
//         </h2>
//         <p className="text-sm text-slate-700">
//           Local plumbers ko digital platform dena, aur customers ko 
//           reliable service provide karna – bina bargaining, bina tension.
//         </p>

//         <h2 className="text-lg font-semibold text-slate-900 mt-6 mb-2">
//           What we do
//         </h2>
//         <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
//           <li>Tap repair & leakage fix</li>
//           <li>Kitchen sink & drainage problems</li>
//           <li>Bathroom fittings installation & repair</li>
//           <li>Water line related basic plumbing work</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default AboutUsPage;




import React from "react";
import { motion } from "framer-motion";

const AboutUsPage = () => {
  const stats = [
    { number: "500+", label: "Verified Plumbers", icon: "👨‍🔧", color: "from-blue-500 to-indigo-600" },
    { number: "10K+", label: "Happy Customers", icon: "😊", color: "from-emerald-500 to-teal-600" },
    { number: "24/7", label: "Service Availability", icon: "⏰", color: "from-purple-500 to-pink-600" },
    { number: "99%", label: "On-Time Arrival", icon: "🚀", color: "from-orange-500 to-red-600" }
  ];

  const services = [
    { title: "Tap Repair & Leakage", desc: "Drip-stop solutions for kitchen & bathroom taps", icon: "🔧" },
    { title: "Sink & Drainage", desc: "Unclog kitchen sinks & bathroom drains instantly", icon: "🚿" },
    { title: "Bathroom Fittings", desc: "Shower, mixer, flush installation & repair", icon: "🛁" },
    { title: "Water Lines", desc: "Basic pipeline repairs & maintenance", icon: "💧" }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 pt-24 pb-20 md:pt-32 md:pb-28">
         {/* Animated Plumbing-themed Icon Background Elements */}
        
        {/* Bathtub Icon */}
        <motion.div 
          className="absolute top-20 left-10 text-6xl opacity-10"
          animate={{ y: [0, -20, 0], rotate: [-5, 5, -5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          🛁
        </motion.div>
        
        {/* Shower Icon */}
        <motion.div 
          className="absolute top-40 right-20 text-7xl opacity-10"
          animate={{ y: [0, 15, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          🚿
        </motion.div>

        {/* Droplet Icon */}
        <motion.div 
          className="absolute bottom-32 left-1/4 text-5xl opacity-10"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          💧
        </motion.div>

        {/* Wrench Icon */}
        <motion.div 
          className="absolute bottom-20 right-1/3 text-6xl opacity-10"
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          🔧
        </motion.div>
        
        {/* Toilet Icon */}
        <motion.div 
          className="absolute top-60 left-1/3 text-5xl opacity-8"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 7, repeat: Infinity }}
        >
          🚽
        </motion.div>
        {/* Animated Background Elements */}
        <motion.div 
          className="absolute top-32 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-40 h-40 bg-indigo-200/30 rounded-2xl blur-2xl"
          animate={{ x: [0, 30, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center mb-20"
        >
          <motion.span 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
            className="inline-block px-6 py-3 bg-gradient-to-r from-emerald-700/90 via-teal-600/90 to-teal-600/90 text-white text-sm font-bold rounded-3xl shadow-2xl mb-6 backdrop-blur-md tracking-wide"
          >
            🚿 About PlumbGo
          </motion.span>
          
          <motion.h1 data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-5xl md:text-7xl font-black bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent leading-tight mb-6"
          >
            India's Most Trusted
            <span className="block bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent">
              Plumbing Network
            </span>
          </motion.h1>
          
          <motion.p data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.9 }}
            className="text-xl md:text-2xl text-slate-700 max-w-3xl mx-auto leading-relaxed"
          >
Book verified plumbers instantly from the comfort of your home. Fast response, transparent pricing, and  <span className="font-bold text-emerald-700"> 100% reliable service</span> – no bargaining, no stress.           
          </motion.p>
        </motion.div>
      </section>

      {/* Stats Grid */}
      <section className="max-w-6xl mx-auto px-4 pb-24">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={{ y: -8, scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 400 }}
              className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-white/50 shadow-xl hover:shadow-3xl hover:border-blue-200/50 transition-all duration-500 overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-3xl md:text-4xl shadow-2xl mx-auto mb-4 group-hover:scale-110 transition-all duration-500`}>
                {stat.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 text-center mb-2 group-hover:text-teal-600 transition-colors">
                {stat.number}
              </h3>
              <p className="text-slate-600 font-medium text-center text-sm md:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="max-w-5xl mx-auto px-4 pb-24">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <motion.h2 
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="text-4xl md:text-5xl font-black bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6"
          >
            Our, Mission
          </motion.h2>
         <motion.p
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4 }}
  className="text-xl md:text-2xl text-slate-700 max-w-4xl mx-auto leading-relaxed px-4"
>
  We empower local plumbers with a digital platform while giving customers <br />
  <span className="font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
    reliable, hassle-free plumbing services
  </span>
  — no delays, no bargaining, just trusted professionals.
</motion.p>

        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-4 pb-24">
        <motion.h3 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-4xl font-black bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4"
        >
          
          What We Do 
           </motion.h3>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15, delayChildren: 0.3 }}
        >
          {services.map((service, index) => (
            <motion.div data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out"
              key={service.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -12, scale: 1.03, rotateX: 5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-2xl hover:shadow-3xl hover:border-teal-600/50 transition-all duration-500 overflow-hidden cursor-pointer h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-purple-500/10 -translate-y-full group-hover:translate-y-0 transition-transform duration-1000"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-3xl mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-all duration-500">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4 text-center group-hover:text-teal-600 transition-all duration-300">
                  {service.title}
                </h4>
                <p className="text-slate-600 text-center leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default AboutUsPage;

