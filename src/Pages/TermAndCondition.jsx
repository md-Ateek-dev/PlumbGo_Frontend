import React from "react";
import { motion } from "framer-motion";
import { 
  FileText, Shield, CreditCard, AlertTriangle, XCircle, Scale, 
  CheckCircle, Clock, Phone, Mail, MapPin 
} from "lucide-react";
import { Link } from "react-router-dom";

const TermAndCondition = () => {
  const sections = [
    {
      icon: <FileText className="text-blue-500" size={28} />,
      title: "1. Services",
      content: "PlumbGo provides comprehensive plumbing services including installation, repair, and maintenance. Service availability may vary by location. We strive to deliver high-quality workmanship and customer satisfaction in every job we undertake.",
      color: "from-blue-500 to-indigo-600",
      bg: "from-slate-50 via-blue-50 to-indigo-50"
    },
    {
      icon: <Shield className="text-emerald-500" size={28} />,
      title: "2. User Responsibilities",
      content: "To ensure smooth service delivery, users must:",
      list: [
        "Provide accurate information while booking services",
        "Ensure safe and clear access to service locations",
        "Be present or have a representative during service",
        "Do not misuse the website or services",
        "Maintain respectful communication with our staff"
      ],
      color: "from-emerald-500 to-teal-600",
      bg: "from-slate-50 via-emerald-50 to-teal-50"
    },
    {
      icon: <CreditCard className="text-purple-500" size={28} />,
      title: "3. Payments",
      content: "Service charges will be clearly communicated before service delivery. We accept multiple payment methods for your convenience. PlumbGo reserves the right to update pricing at any time with prior notice. Payment terms include:",
      list: [
        "Transparent pricing with no hidden charges",
        "Payment due upon completion of service",
        "Accepted methods: Cash, Card, UPI, Net Banking",
        "Invoice provided for all services"
      ],
      color: "from-purple-500 to-pink-600",
      bg: "from-slate-50 via-purple-50 to-pink-50"
    },
    {
      icon: <AlertTriangle className="text-orange-500" size={28} />,
      title: "4. Limitation of Liability",
      content: "PlumbGo shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our liability is limited to the amount paid for the specific service. We maintain insurance coverage for accidental damages during service delivery.",
      color: "from-orange-500 to-red-500",
      bg: "from-slate-50 via-orange-50 to-red-50"
    },
    {
      icon: <XCircle className="text-red-500" size={28} />,
      title: "5. Termination",
      content: "We reserve the right to suspend or terminate access to our services if users violate these terms. This includes but is not limited to fraudulent activities, abusive behavior, or non-payment. Users may also cancel services as per our cancellation policy.",
      color: "from-red-500 to-rose-600",
      bg: "from-slate-50 via-red-50 to-rose-50"
    },
    {
      icon: <Scale className="text-indigo-500" size={28} />,
      title: "6. Governing Law",
      content: "These terms and conditions are governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Lucknow, Uttar Pradesh, India.",
      color: "from-indigo-500 to-violet-600",
      bg: "from-slate-50 via-indigo-50 to-violet-50"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.4
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
  };

  return (
    <div className="min-h-screen bg-white py-20 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s', animationDelay: '2s' }} />
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Hero Header */}
        <motion.section
          className="text-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-emerald-700 to-teal-600 backdrop-blur-xl rounded-3xl shadow-2xl mb-8 border border-white/50"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FileText className="text-3xl text-white drop-shadow-lg" />
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-6xl font-black bg-gradient-to-r from-slate-900 via-emerald-700 to-teal-600 bg-clip-text text-transparent mb-6 leading-tight"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
          >
            Terms & Conditions
          </motion.h1>
          <p className="text-xl md:text-2xl text-slate-600 font-medium mb-8 max-w-2xl mx-auto leading-relaxed">
            Legal agreement governing your use of PlumbGo services
          </p>
          <div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-xl border border-white/50">
            <Clock className="text-slate-600" size={20} />
            <span className="text-lg font-semibold text-slate-700">
              Last Updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
          </div>
        </motion.section>

        {/* Introduction Card */}
        <motion.div data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out"
          className="bg-white/70 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/50 p-10 md:p-12 mb-20 overflow-hidden"
          variants={itemVariants}
          whileHover={{ y: -8 }}
        >
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl">
              <CheckCircle className="text-white drop-shadow-lg" size={32} />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">Welcome to PlumbGo</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                By accessing or using our website and services, you agree to be bound by these Terms &amp; Conditions. 
                These terms constitute a legally binding agreement between you and PlumbGo. Continued use constitutes acceptance.[web:34]
              </p>
            </div>
          </div>
        </motion.div>

        {/* Main Sections */}
        <motion.div 
          className="grid gap-8 mb-20 "
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {sections.map((section, index) => (
            <motion.section data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" 
              key={index}
              className="group"
              variants={itemVariants}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" className={`bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-xl border border-white/60 overflow-hidden hover:shadow-2xl transition-all duration-500 group-hover:bg-white`}>
                <div className="flex items-start gap-6 mb-6">
                  <motion.div 
                    className={`w-20 h-20 ${section.bg} rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300`}
                    style={{ backgroundImage: `linear-gradient(to bottom right, ${section.color})` }}
                  >
                    {section.icon}
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-2xl md:text-3xl font-black text-slate-800 mb-4 group-hover:text-slate-900">
                      {section.title}
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">{section.content}</p>
                    {section.list && (
                      <motion.ul 
                        className="space-y-3"
                        variants={listVariants}
                      >
                        {section.list.map((item, idx) => (
                          <motion.li 
                            key={idx}
                            className="flex items-start gap-4 p-4 bg-slate-50/50 rounded-xl group-hover:bg-slate-100 transition-colors duration-300 pl-4 border-l-4 border-slate-200 hover:border-slate-300"
                            variants={listItemVariants}
                            whileHover={{ x: 8 }}
                          >
                            <CheckCircle className="text-emerald-500 flex-shrink-0 mt-1" size={20} />
                            <span className="text-slate-700 font-medium">{item}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </div>
                </div>
              </div>
            </motion.section>
          ))}
        </motion.div>

        {/* Policy Cards */}
        <motion.section 
          className="grid md:grid-cols-2 gap-8 mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" 
            className="group bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 cursor-pointer"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg">
                <AlertTriangle className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Warranty Information</h3>
            </div>
            <p className="text-slate-600 leading-relaxed">
              All services include warranty. Specific terms provided with your invoice. Parts and labor coverage varies by service type.
            </p>
          </motion.div>

          <motion.div data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out"
            className="group bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 cursor-pointer"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                <XCircle className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Cancellation Policy</h3>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Cancel 24+ hours prior with no fees. Late cancellations may incur nominal scheduling charges.
            </p>
          </motion.div>
        </motion.section>

        {/* Acceptance & CTA */}
        <motion.section data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out"
          className="text-center mb-20"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" className="bg-white/80 backdrop-blur-2xl rounded-3xl p-12 shadow-2xl border border-white/50">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl flex items-center justify-center shadow-2xl">
                <CheckCircle className="text-white" size={40} />
              </div>
              <div className="text-left md:text-center">
                <h3 className="text-3xl font-black text-slate-800 mb-4">Acceptance of Terms</h3>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                  Continued use of services constitutes acceptance of these terms. Updates notified via email or site notice.
                </p>
              </div>
            </div>
            <Link to="/contact">
            <motion.button 
              className="group bg-gradient-to-r from-emerald-800 to-teal-700 text-white font-bold px-12 py-5 rounded-2xl text-lg shadow-2xl hover:shadow-3xl hover:from-emerald-800 hover:to-teal-800 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 inline-flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone className="w-5 h-5" />
              Contact Support for Questions
            </motion.button>
            </Link>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out"
          className="text-center pb-12 pt-16 border-t-2 border-slate-200/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          <p className="text-2xl font-black text-slate-800 mb-4">@ 2026 PlumbGo. All rights reserved.</p>
          <p className="text-lg text-slate-600 mb-6">
            Effective: {new Date().toLocaleDateString('en-IN')}
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center text-slate-500">
            <div className="flex items-center gap-2">
              <Mail size={20} />
              <span>support@plumbgo.com</span>
            </div>
            <div className="w-px h-6 bg-slate-300 hidden md:block" />
            <div className="flex items-center gap-2">
              <MapPin size={20} />
              <span>Lucknow, Uttar Pradesh</span>
            </div>
          </div>
        </motion.footer>
      </div>
    </div>
  );
};

export default TermAndCondition;
