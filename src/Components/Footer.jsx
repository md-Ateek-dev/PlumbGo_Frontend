import React from 'react';
import { 
  PhoneIcon, 
  EnvelopeIcon,
  MapPinIcon,
  ShieldCheckIcon 
} from '@heroicons/react/24/outline';
import { MdWaterDrop } from "react-icons/md";

import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-white/90 overflow-hidden">
      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/50">
                <MdWaterDrop className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-black bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Plumb<span className="text-teal-600">Go</span>
                </h3>
                <p className="text-sm text-gray-400 mt-1">Building Excellence</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 text-sm">
              Licensed plumbers serving your community with fast, reliable service. 
              No job too big or small - we fix leaks, unclog drains, and install systems.
            </p>
            
            {/* Social Media */}
            <div>
              <h4 className="font-semibold text-gray-200 mb-4">Connect With Us</h4>
              <div className="flex space-x-3">
                {[
                  { Icon: Facebook, label: "Facebook" },
                  { Icon: Twitter, label: "Twitter" },
                  { Icon: Instagram, label: "Instagram" },
                  { Icon: Linkedin, label: "LinkedIn" },
                ].map(({ Icon, label }, index) => (
                  <a
                    key={index}
                    href="#"
                    aria-label={label}
                    className="group relative w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 hover:from-emerald-600 hover:to-teal-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-teal-500/25"
                  >
                    <Icon
                      size={18}
                      className="text-teal-600 group-hover:text-white transition-colors duration-300"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                // { name: "Home", path: "home" },
                { name: "About Us", path: "about" },
                { name: "Services", path: "services" },
                { name: "Blogs", path: "blogs" },
                { name: "Gallery", path: "gallery" },
                { name: "Review", path: "reviews" },
                { name: "24/7 Emergency", path: "contact", highlight: true },
              ].map((link, index) => (
                <li key={index} className="group">
                  <a
                    href={link.path}
                    className="flex items-center text-gray-300 hover:text-white transition-all duration-300 group-hover:translate-x-2"
                  >
                    <div className="w-1 h-1 bg-white rounded-full mr-3 group-hover:w-2 group-hover:h-2 transition-all duration-300"></div>
                    <span className={`text-sm ${link.highlight ? 'text-yellow-400 font-semibold' : 'group-hover:text-teal-400'}`}>
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Drain Cleaning", path: "#drain" },
                { name: "Water Heaters", path: "#water-heater" },
                { name: "Leak Detection", path: "#leaks" },
                { name: "Installations", path: "#installations" },
                { name: "Sewer Repair", path: "#sewer" },
              ].map((service, index) => (
                <li key={index} className="group">
                  <a
                    href={service.path}
                    className="flex items-center text-gray-300 hover:text-white transition-all duration-300 group-hover:translate-x-2"
                  >
                    <div className="w-1 h-1 bg-white rounded-full mr-3 group-hover:w-2 group-hover:h-2 transition-all duration-300"></div>
                    <span className="text-sm group-hover:text-teal-400">
                      {service.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Map */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">
              Get In Touch
            </h4>

            {/* Contact Info */}
            <ul className="space-y-4">
              <li className="flex items-start group">
                <div className="w-10 h-10 bg-teal-600/20 rounded-xl flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-teal-600/30 transition-all duration-300 border border-teal-500/30">
                  <PhoneIcon className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <a
                    href="tel:+917054375826"
                    className="text-white font-semibold hover:text-teal-400 transition-colors duration-300 block"
                  >
                    (+91) 7054375826
                  </a>
                  <p className="text-xs text-gray-400">24/7 Emergency Line</p>
                </div>
              </li>
              
              <li className="flex items-start group">
                <div className="w-10 h-10 bg-teal-600/20 rounded-xl flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-teal-600/30 transition-all duration-300 border border-teal-500/30">
                  <EnvelopeIcon className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <a
                    href="mailto:info@plumbgo.com"
                    className="text-white font-semibold hover:text-teal-400 transition-colors duration-300 text-sm block break-all"
                  >
                    info@plumbgo.com
                  </a>
                </div>
              </li>
              
              <li>
                <div className="mt-4 rounded-xl overflow-hidden border-2 border-teal-600 shadow-xl">
                  <iframe
                    className="h-32 w-full"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.276235802433!2d80.99633347523792!3d26.95815027662017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bff2addd9b239%3A0xc21a9bbd557936ec!2sIntegral%20University!5e0!3m2!1sen!2sin!4v1766818587269!5m2!1sen!2sin" allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Location Map"
                  ></iframe>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
              <div className="flex items-center space-x-3">
                <ShieldCheckIcon className="w-5 h-5 text-green-400" />
                <span className="text-sm text-white">Fully Licensed & Insured</span>
              </div>
              <div className="hidden md:block w-1 h-1 bg-gray-600 rounded-full"></div>
              <span className="text-sm text-white">Free Estimates</span>
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <span className="text-sm text-white">© 2025 PlumbGo Plumbing. All rights reserved.</span>
              <div className="flex items-center space-x-6">
                {[
                  { name: "Privacy Policy", path: "PrivacyPolicy" },
                  { name: "Terms & Conditions", path: "termCondition" },
                  // { name: "Sitemap", path: "#sitemap" },
                ].map((link, index) => (
                  <a
                    key={index}
                    href={link.path}
                    className="text-sm text-white hover:text-teal-600 transition-colors duration-300 relative group"
                  >
                    {link.name}
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-700 to-teal-600 group-hover:w-full transition-all duration-300"></div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// import React from 'react';
// import { 
//   PhoneIcon, 
//   EnvelopeIcon,
//   MapPinIcon
// } from '@heroicons/react/24/outline';
// import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
// import { Link } from 'react-router-dom';
// const services = [
//   { name: "Plumbing Services" },
//   { name: "Water Heater Installation"},
//   {  name: "Drain Cleaning" },
//   { name: "Leak Detection"},
// ]
// const Footer = () => {
//   return (
//     <footer className="bg-black text-white/90">
//       {/* Main Footer Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
//           {/* Company Info */}
//           <div className="lg:col-span-1">
//             <div className="flex items-center space-x-3 mb-6">
//               <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
//                 <span className="text-white font-bold text-xl">JK</span>
//               </div>
//               <div className="block">
//                       <div
//                         className={`font-bold text-xl transition-colors duration-300 `}
//                       >
//                         JKContractor
//                       </div>
//                       <div
//                         className={`text-xs font-medium transition-colors duration-300 `}
//                       >
//                         Building Excellence
//                       </div>
//                     </div>
//             </div>
//             <p className="text-gray-400 leading-relaxed mb-6 text-sm">
//               Leading the future of infrastructure with innovative solutions and sustainable practices. Excellence in every project since 2005.
//             </p>
//             <h4 className="text-white font-semibold mb-4">Connect With Us</h4>
//             <div className="flex space-x-3">
//                   {[
//                     { Icon: Facebook, label: "Facebook" },
//                     { Icon: Twitter, label: "Twitter" },
//                     { Icon: Instagram, label: "Instagram" },
//                     { Icon: Linkedin, label: "LinkedIn" },
//                   ].map(({ Icon, label }, index) => (
//                     <a
//                       key={index}
//                       href="#"
//                       aria-label={label}
//                       className="group relative w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 hover:from-red-600 hover:to-red-700 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-500/25"
//                     >
//                       <Icon
//                         size={18}
//                         className="text-red-600 group-hover:text-white transition-colors duration-300"
//                       />
//                     </a>
//                   ))}
//                 </div>
//           </div>

//           {/* Our Services
//           <div>
//             <h4 className="text-lg font-bold text-white mb-6">
//               Our Services
//             </h4>
//             <ul className="space-y-3 text-sm">
//               <li><a href="#waste" className="text-gray-400 hover:text-white transition-colors">• Waste Management</a></li>
//               <li><a href="#housekeeping" className="text-gray-400 hover:text-white transition-colors">• Housekeeping & Facilities</a></li>
//               <li><a href="#transport" className="text-gray-400 hover:text-white transition-colors">• Transport & Logistics</a></li>
//               <li><a href="#sweeping" className="text-gray-400 hover:text-white transition-colors">• Sweeping Machines & Cleaning Solutions</a></li>
//               <li><a href="#food" className="text-gray-400 hover:text-white transition-colors">• Food & Beverage</a></li>
//               <li><a href="#civil" className="text-gray-400 hover:text-white transition-colors">• Civil & Horticulture</a></li>
//             </ul>
//           </div> */}
          
//           {/* Our Services */}
//             <div>
//               <h3 className="text-2xl play font-bold text-white mb-6">
//                 Our Services
//               </h3>
//               <ul className="space-y-3">
//   {services.map()}
//               </ul>
//             </div>

//           {/* Quick Links
//           <div>
//             <h4 className="text-lg font-bold text-white mb-6">
//               Quick Links
//             </h4>
//             <ul className="space-y-3 text-sm">
//               <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">• About Us</a></li>
//               <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">• Projects</a></li>
//               <li><a href="#equipment" className="text-gray-400 hover:text-white transition-colors">• Equipment & Machinary</a></li>
//               <li><a href="#gallery" className="text-gray-400 hover:text-white transition-colors">• Gallery</a></li>
//               <li><a href="#blogs" className="text-gray-400 hover:text-white transition-colors">• Blogs</a></li>
//               <li><a href="#team" className="text-gray-400 hover:text-white transition-colors">• Our Team</a></li>
//             </ul>
//           </div> */}
          
//           {/* Quick Links */}
//             <div>
//               <h3 className="text-2xl play font-bold text-white mb-6">
//                 Quick Links
//               </h3>
//               <ul className="space-y-3">
//                 {[
//                   { name: "About Us", path: "/about" },
//                   // { name: "Our Team", path: "/team" },
//                   // { name: "Careers", path: "/careers" },
//                   { name: "Projects", path: "/project" },
//                   { name: "Equipment & Machinary", path: "/vehicles" },
//                   { name: "Gallery", path: "/gallery" },
//                   { name: "Blogs", path: "/blog" },
//                   { name: "Our Team", path: "/about/team" },
               
//                 ].map((link, index) => (
//                   <li key={index} className="group">
//                     <Link
//                       to={link.path}
//                       className="flex items-center text-gray-300 hover:text-white transition-all duration-300 group-hover:translate-x-2"
//                     >
//                       <div className="w-1 h-1 bg-white rounded-full mr-3 group-hover:w-2 group-hover:h-2 transition-all duration-300"></div>
//                       <span className="text-sm group-hover:text-red-400">
//                         {link.name}
//                       </span>
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//           {/* Get In Touch */}
//           <div>
//             <h4 className="text-lg font-bold text-white mb-6">
//               Get In Touch
//             </h4>
//             <div className="space-y-4">
//               <div className="flex items-start space-x-3">
//                 <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
//                   <PhoneIcon className="w-5 h-5 text-emerald-500" />
//                 </div>
//                 <div>
//                   <p className="text-white font-semibold">+91 9560424031</p>
//                 </div>
//               </div>
              
//               <div className="flex items-start space-x-3">
//                 <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
//                   <EnvelopeIcon className="w-5 h-5 text-emerald-500" />
//                 </div>
//                 <div>
//                   <p className="text-white font-semibold text-sm break-all">jkcontractor786@gmail.com</p>
//                 </div>
//               </div>
              
//               {/* Interactive Map */}
//               {/* <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 border border-gray-700/50">
//                 <div className="flex items-center justify-between mb-3">
//                   <h4 className="font-semibold text-gray-200 text-sm">Our Location</h4>
//                   <a
//                     href="https://maps.google.com/?q=New+Delhi+India"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center text-red-400 hover:text-red-300 transition-colors duration-300 text-xs"
//                   >
//                     View on Maps
//                     <ExternalLink size={12} className="ml-1" />
//                   </a>
//                 </div>
//                 <div className="w-full h-32 bg-gradient-to-br from-red-900/20 to-red-800/20 rounded-lg flex items-center justify-center border border-red-500/20">
//                   <div className="text-center">
//                     <MapPin size={24} className="text-red-500 mx-auto mb-2" />
//                     <p className="text-gray-400 text-xs">New Delhi, India</p>
//                     <p className="text-gray-500 text-xs">Click "View on Maps" above</p>
//                   </div>
//                 </div>
//               </div> */}
//                <li className='list-none'>
//                   <iframe
//                   className="h-32 w-full p-0 lg:mt-0 mt-2  rounded-2xl"
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.276235802433!2d80.99633347523792!3d26.95815027662017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bff2addd9b239%3A0xc21a9bbd557936ec!2sIntegral%20University!5e0!3m2!1sen!2sin!4v1766818587269!5m2!1sen!2sin" 
//                    allowFullScreen=""
//                     loading="lazy"
//                     referrerPolicy="no-referrer-when-downgrade"
//                   ></iframe>
//                 </li>
              
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-gray-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
//             <div className="flex items-center space-x-3">
//               <span>© 2025 JK Contractor. All rights reserved.</span>
//               <span className="hidden md:inline">•</span>
//               <span className="hidden md:inline text-gray-600">Building Tomorrow's Infrastructure Today</span>
//             </div>
            
//             <div className="flex items-center gap-6 text-xs">
//               <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
//               <a href="#admin" className="hover:text-white transition-colors">Admin Login</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;