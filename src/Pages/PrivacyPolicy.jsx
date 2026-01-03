import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4 overflow-hidden">
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-4xl mx-auto bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-10 md:p-12">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.h1 data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out"
            className="text-4xl md:text-5xl font-black bg-gradient-to-r from-slate-800 via-emerald-700 to-teal-600 bg-clip-text text-transparent mb-6"
            variants={itemVariants}
          >
            Privacy Policy
          </motion.h1>
          <motion.p 
            className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            At <span className="font-bold bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent">PlumbGo</span>, your privacy is our priority. 
            This policy explains how we collect, use, and protect your personal information with the highest standards.
          </motion.p>
        </motion.div>

        <motion.div 
          className="space-y-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.section variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 text-lg font-bold">1</span>
              Information We Collect
            </h2>
            <motion.ul 
              className="space-y-3 ml-6"
              variants={listVariants}
            >
              <motion.li variants={listItemVariants} className="text-slate-600 group">
                <span className="text-blue-600 font-semibold mr-2">→</span>
                Name, phone number, email address for service coordination
              </motion.li>
              <motion.li variants={listItemVariants} className="text-slate-600 group">
                <span className="text-blue-600 font-semibold mr-2">→</span>
                Service requests, booking details, and location information
              </motion.li>
              <motion.li variants={listItemVariants} className="text-slate-600 group">
                <span className="text-blue-600 font-semibold mr-2">→</span>
                Reviews, feedback, and ratings to improve our platform
              </motion.li>
            </motion.ul>
          </motion.section>

          <motion.section variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 text-lg font-bold">2</span>
              How We Use Your Information
            </h2>
            <motion.ul 
              className="space-y-3 ml-6"
              variants={listVariants}
            >
              <motion.li variants={listItemVariants} className="text-slate-600 group">
                <span className="text-emerald-600 font-semibold mr-2">→</span>
                Provide and coordinate professional plumbing services
              </motion.li>
              <motion.li variants={listItemVariants} className="text-slate-600 group">
                <span className="text-emerald-600 font-semibold mr-2">→</span>
                Contact you about bookings, updates, or service queries
              </motion.li>
              <motion.li variants={listItemVariants} className="text-slate-600 group">
                <span className="text-emerald-600 font-semibold mr-2">→</span>
                Analyze and improve services, website functionality
              </motion.li>
            </motion.ul>
          </motion.section>

          <motion.section variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 text-lg font-bold">3</span>
              Data Protection
            </h2>
            <motion.p 
              className="text-lg text-slate-600 leading-relaxed max-w-3xl"
              variants={itemVariants}
            >
              We implement industry-leading security measures including encryption, secure servers, and regular audits to protect your personal data from unauthorized access, misuse, or disclosure.[web:18]
            </motion.p>
          </motion.section>

          <motion.section variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 text-lg font-bold">4</span>
              Third-Party Sharing
            </h2>
            <motion.p 
              className="text-lg text-slate-600 leading-relaxed max-w-3xl"
              variants={itemVariants}
            >
              We never sell your personal information. Sharing occurs only with trusted service providers under strict agreements or when required by law.[web:18]
            </motion.p>
          </motion.section>

          <motion.section variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 text-lg font-bold">5</span>
              Changes to This Policy
            </h2>
            <motion.p 
              className="text-lg text-slate-600 leading-relaxed max-w-3xl"
              variants={itemVariants}
            >
              We may update this policy periodically. Significant changes will be notified via email or prominent website notice, with updates posted here.
            </motion.p>
          </motion.section>
        </motion.div>

        <motion.footer
          className="mt-16 pt-12 border-t border-slate-200 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <p className="text-slate-500 text-sm">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </motion.footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
