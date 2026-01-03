// import React from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { clearAuth, getCurrentUser } from "../Services/AuthUser"

// const Header = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const user = getCurrentUser();

//   const isActive = (path) =>
//     location.pathname === path
//       ? "text-blue-600 font-semibold"
//       : "text-slate-600";

//   const handleLogout = () => {
//     clearAuth();
//     navigate("/login");
//   };

//   return (
//     <header className="border-b border-slate-200 bg-white">
//       <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
//         {/* Logo */}
//         <Link to="/" className="text-lg font-bold text-blue-600">
//           PlumbGo
//         </Link>

//         {/* Links */}
//         <nav className="hidden items-center gap-4 text-sm md:flex">
//           <Link to="/" className={isActive("/")}>
//             Home
//           </Link>
//           <Link to="/services" className={isActive("/services")}>
//             Services
//           </Link>
//           <Link to="/booking" className={isActive("/booking")}>
//             Book Now
//           </Link>
//           {user && (
//             <Link to="/myBookings" className={isActive("/myBookings")}>
//               My Bookings
//             </Link>
//           )}
//         </nav>

//         {/* Right side auth buttons */}
//         <div className="flex items-center gap-2">
//           {user ? (
//             <>
//               <span className="hidden text-xs text-slate-500 sm:inline">
//                 Hi, {user.name}
//               </span>
//               <button
//                 onClick={handleLogout}
//                 className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-200"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <button
//               onClick={() => navigate("/login")}
//               className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-700"
//             >
//               Login
//             </button>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


// import React, { useState, useEffect } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { clearAuth, getCurrentUser } from "../Services/AuthUser";
// import { Menu, X, ChevronDown } from "lucide-react";

// const Header = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const user = getCurrentUser();
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [showUserMenu, setShowUserMenu] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const isActive = (path) => location.pathname === path;

//   const handleLogout = () => {
//     clearAuth();
//     setShowUserMenu(false);
//     navigate("/login");
//   };

//   const navLinks = [
//     { path: "/", label: "Home" },
//     { path: "/services", label: "Services" },
//     { path: "/booking", label: "Book Now" },
//     ...(user ? [{ path: "/myBookings", label: "My Bookings" }] : []),
//   ];

//   return (
//     <>
//       <header
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//           isScrolled
//             ? "bg-white/80 backdrop-blur-lg shadow-lg"
//             : "bg-white border-b border-slate-200"
//         }`}
//       >
//         <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
//           {/* Logo */}
//           <Link
//             to="/"
//             className="group flex items-center gap-2 text-xl font-bold"
//           >
//             <div className="relative">
//               <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent transition-all duration-300 group-hover:from-blue-500 group-hover:to-blue-600">
//                 PlumbGo
//               </span>
//               <div className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-600 to-blue-500 transition-all duration-300 group-hover:w-full"></div>
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden items-center gap-1 md:flex">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 className="group relative px-4 py-2"
//               >
//                 <span
//                   className={`text-sm font-medium transition-colors duration-200 ${
//                     isActive(link.path)
//                       ? "text-blue-600"
//                       : "text-slate-600 group-hover:text-blue-600"
//                   }`}
//                 >
//                   {link.label}
//                 </span>
//                 <div
//                   className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 bg-blue-600 transition-all duration-300 ${
//                     isActive(link.path)
//                       ? "w-8"
//                       : "w-0 group-hover:w-8"
//                   }`}
//                 ></div>
//               </Link>
//             ))}
//           </nav>

//           {/* Right side auth */}
//           <div className="flex items-center gap-3">
//             {user ? (
//               <div className="relative hidden md:block">
//                 <button
//                   onClick={() => setShowUserMenu(!showUserMenu)}
//                   className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-50 to-blue-100 px-4 py-2 text-sm font-medium text-blue-600 transition-all duration-300 hover:from-blue-100 hover:to-blue-200 hover:shadow-md"
//                 >
//                   <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
//                     {user.name.charAt(0).toUpperCase()}
//                   </div>
//                   <span className="max-w-24 truncate">{user.name}</span>
//                   <ChevronDown
//                     size={16}
//                     className={`transition-transform duration-300 ${
//                       showUserMenu ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>

//                 {/* User Dropdown */}
//                 <div
//                   className={`absolute right-0 top-full mt-2 w-48 overflow-hidden rounded-xl bg-white shadow-xl transition-all duration-300 ${
//                     showUserMenu
//                       ? "opacity-100 translate-y-0"
//                       : "pointer-events-none opacity-0 -translate-y-2"
//                   }`}
//                 >
//                   <div className="border-b border-slate-100 px-4 py-3">
//                     <p className="text-xs text-slate-500">Signed in as</p>
//                     <p className="truncate text-sm font-medium text-slate-900">
//                       {user.name}
//                     </p>
//                   </div>
//                   <button
//                     onClick={handleLogout}
//                     className="w-full px-4 py-2.5 text-left text-sm font-medium text-red-600 transition-colors duration-200 hover:bg-red-50"
//                   >
//                     Logout
//                   </button>
//                 </div>
//               </div>
//             ) : (
//               <button
//                 onClick={() => navigate("/login")}
//                 className="hidden rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-2 text-sm font-medium text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg md:block"
//               >
//                 Login
//               </button>
//             )}

//             {/* Mobile menu button */}
//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="rounded-lg p-2 text-slate-600 transition-colors duration-200 hover:bg-slate-100 md:hidden"
//             >
//               {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Mobile Menu */}
//       <div
//         className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
//           isMobileMenuOpen
//             ? "opacity-100"
//             : "pointer-events-none opacity-0"
//         }`}
//         onClick={() => setIsMobileMenuOpen(false)}
//       ></div>

//       <div
//         className={`fixed right-0 top-0 z-50 h-full w-64 bg-white shadow-2xl transition-transform duration-300 md:hidden ${
//           isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <div className="flex h-full flex-col">
//           <div className="flex items-center justify-between border-b border-slate-200 px-4 py-4">
//             <span className="text-lg font-bold text-blue-600">Menu</span>
//             <button
//               onClick={() => setIsMobileMenuOpen(false)}
//               className="rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100"
//             >
//               <X size={24} />
//             </button>
//           </div>

//           <nav className="flex flex-col gap-1 p-4">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 onClick={() => setIsMobileMenuOpen(false)}
//                 className={`rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 ${
//                   isActive(link.path)
//                     ? "bg-blue-50 text-blue-600"
//                     : "text-slate-600 hover:bg-slate-50"
//                 }`}
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </nav>

//           <div className="mt-auto border-t border-slate-200 p-4">
//             {user ? (
//               <div className="space-y-3">
//                 <div className="rounded-lg bg-slate-50 px-4 py-3">
//                   <p className="text-xs text-slate-500">Signed in as</p>
//                   <p className="truncate text-sm font-medium text-slate-900">
//                     {user.name}
//                   </p>
//                 </div>
//                 <button
//                   onClick={handleLogout}
//                   className="w-full rounded-lg bg-red-50 px-4 py-2.5 text-sm font-medium text-red-600 transition-colors hover:bg-red-100"
//                 >
//                   Logout
//                 </button>
//               </div>
//             ) : (
//               <button
//                 onClick={() => {
//                   navigate("/login");
//                   setIsMobileMenuOpen(false);
//                 }}
//                 className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-2.5 text-sm font-medium text-white transition-all hover:shadow-lg"
//               >
//                 Login
//               </button>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Spacer to prevent content from going under fixed header */}
//       <div className="h-16"></div>
//     </>
//   );
// };

// export default Header;


import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { clearAuth, getCurrentUser } from "../Services/AuthUser";
import {
  WaterDrop as WaterDropIcon
} from "@mui/icons-material";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = getCurrentUser();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isActive = (path) =>
    location.pathname === path
      ? "text-emerald-600 bg-teal-50 shadow-lg shadow-emerald-100/50"
      : "text-slate-700 hover:text-emerald-600 hover:bg-slate-50";

  const handleLogout = () => {
    clearAuth();
    navigate("/login");
    setMobileMenuOpen(false);
  };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
    { path: "/booking", label: "Book Now" },
    { path: "/About", label: "About Us" },
    ...(user ? [{ path: "/myBookings", label: "My Bookings" }] : [])
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-transparent backdrop-blur-xl shadow-sm border-b border-slate-200/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link 
              to="/" 
              className="group relative flex items-center gap-2 transition-all duration-300 hover:scale-105"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:shadow-teal-500/50 transition-all duration-300 group-hover:rotate-3">
                  {/* <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /> */}
                              <WaterDropIcon sx={{ color: 'white', fontSize: 28 }} />
                  
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  PlumbGo
                </span>
                <span className="text-[10px] font-medium text-slate-500 -mt-1 hidden sm:block">
                  Professional Services
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navItems.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`relative px-4 xl:px-5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 group ${isActive(path)} hover:scale-105`}
                >
                  <span className="relative z-10">{label}</span>
                  {location.pathname === path && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full"></span>
                  )}
                </Link>
              ))}
            </nav>

            {/* Desktop Auth Section */}
            <div className="hidden lg:flex items-center gap-3">
              {user ? (
                <>
                  <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-r from-slate-50 to-blue-50 border border-slate-200/50 shadow-sm">
                    <div className="w-8 h-8 bg-transparent rounded-full flex items-center justify-center shadow-md">
                      <span className="text-black text-sm font-bold">{user.name?.charAt(0).toUpperCase()}</span>
                    </div>
                    <span className="text-sm font-semibold text-slate-700 max-w-24 truncate">
                      {user.name}
                    </span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="group relative px-5 py-2.5 text-sm font-semibold text-black bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                      Logout
                    </span>
                  </button>
                </>
              ) : (
                <button
                  onClick={() => navigate("/login")}
                  className="group relative px-6 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl shadow-lg shadow-teal-500/40 hover:shadow-xl hover:shadow-teal-500/50 hover:-translate-y-1 hover:scale-105 transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10">Get Started</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden relative w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 transition-all duration-300 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-slate-700 rounded-full transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`w-full h-0.5 bg-slate-700 rounded-full transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-full h-0.5 bg-slate-700 rounded-full transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden fixed inset-x-0 top-16 sm:top-20 bg-white border-t border-slate-200 shadow-2xl transition-all duration-500 ease-out ${
            mobileMenuOpen 
              ? 'max-h-[calc(100vh-4rem)] sm:max-h-[calc(100vh-5rem)] opacity-100' 
              : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="overflow-y-auto max-h-[calc(100vh-4rem)] sm:max-h-[calc(100vh-5rem)]">
            <div className="px-4 py-6 space-y-1">
              {/* User Info in Mobile */}
              {user && (
                <div className="flex items-center gap-3 p-4 mb-4 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 shadow-sm">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-lg font-bold">{user.name?.charAt(0).toUpperCase()}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-700">Welcome back!</p>
                    <p className="text-xs font-medium text-slate-500 truncate max-w-[200px]">{user.name}</p>
                  </div>
                </div>
              )}

              {/* Mobile Navigation Links */}
              {navItems.map(({ path, label }, index) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3.5 text-base font-semibold rounded-xl transition-all duration-300 ${isActive(path)} hover:translate-x-1`}
                  style={{
                    animation: mobileMenuOpen ? `slideInRight 0.4s ease-out ${index * 0.05}s both` : 'none'
                  }}
                >
                  <span className="flex items-center justify-between">
                    {label}
                    {location.pathname === path && (
                      <svg className="w-5 h-5 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </span>
                </Link>
              ))}

              {/* Mobile Auth Actions */}
              <div className="pt-4 border-t border-slate-200 mt-4">
                {user ? (
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3.5 text-base font-semibold text-red-600 bg-red-50 hover:bg-red-100 rounded-xl transition-all duration-300 hover:scale-[1.02]"
                    style={{
                      animation: mobileMenuOpen ? `slideInRight 0.4s ease-out ${navItems.length * 0.05}s both` : 'none'
                    }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    Logout
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      navigate("/login");
                      setMobileMenuOpen(false);
                    }}
                    className="w-full px-4 py-3.5 text-base font-bold text-white bg-gradient-to-r from-emerald-700 to-teal-600 rounded-xl shadow-lg hover:shadow-xl hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 hover:scale-[1.02]"
                    style={{
                      animation: mobileMenuOpen ? `slideInRight 0.4s ease-out ${navItems.length * 0.05}s both` : 'none'
                    }}
                  >
                    Get Started
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Backdrop overlay for mobile menu */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
          style={{ top: '4rem' }}
        />
      )}

      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </>
  );
};

export default Header;

// import React, { useState, useEffect } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { clearAuth, getCurrentUser } from "../Services/AuthUser";
// import { Menu, X, ChevronDown } from "lucide-react";

// const Header = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const user = getCurrentUser();
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [showUserMenu, setShowUserMenu] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const isActive = (path) => location.pathname === path;

//   const handleLogout = () => {
//     clearAuth();
//     setShowUserMenu(false);
//     navigate("/login");
//   };

//   const navLinks = [
//     { path: "/", label: "Home" },
//     { path: "/services", label: "Services" },
//     { path: "/booking", label: "Book Now" },
//     ...(user ? [{ path: "/myBookings", label: "My Bookings" }] : []),
//   ];

//   return (
//     <>
//       <header
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//           isScrolled
//             ? "bg-white/80 backdrop-blur-lg shadow-lg"
//             : "bg-white border-b border-slate-200"
//         }`}
//       >
//         <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
//           {/* Logo */}
//           <Link
//             to="/"
//             className="group flex items-center gap-2 text-xl font-bold"
//           >
//             <div className="relative">
//               <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent transition-all duration-300 group-hover:from-blue-500 group-hover:to-blue-600">
//                 PlumbGo
//               </span>
//               <div className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-600 to-blue-500 transition-all duration-300 group-hover:w-full"></div>
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden items-center gap-1 md:flex">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 className="group relative px-4 py-2"
//               >
//                 <span
//                   className={`text-sm font-medium transition-colors duration-200 ${
//                     isActive(link.path)
//                       ? "text-blue-600"
//                       : "text-slate-600 group-hover:text-blue-600"
//                   }`}
//                 >
//                   {link.label}
//                 </span>
//                 <div
//                   className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 bg-blue-600 transition-all duration-300 ${
//                     isActive(link.path)
//                       ? "w-8"
//                       : "w-0 group-hover:w-8"
//                   }`}
//                 ></div>
//               </Link>
//             ))}
//           </nav>

//           {/* Right side auth */}
//           <div className="flex items-center gap-3">
//             {user ? (
//               <div className="relative hidden md:block">
//                 <button
//                   onClick={() => setShowUserMenu(!showUserMenu)}
//                   className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-50 to-blue-100 px-4 py-2 text-sm font-medium text-blue-600 transition-all duration-300 hover:from-blue-100 hover:to-blue-200 hover:shadow-md"
//                 >
//                   <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
//                     {user.name.charAt(0).toUpperCase()}
//                   </div>
//                   <span className="max-w-24 truncate">{user.name}</span>
//                   <ChevronDown
//                     size={16}
//                     className={`transition-transform duration-300 ${
//                       showUserMenu ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>

//                 {/* User Dropdown */}
//                 <div
//                   className={`absolute right-0 top-full mt-2 w-48 overflow-hidden rounded-xl bg-white shadow-xl transition-all duration-300 ${
//                     showUserMenu
//                       ? "opacity-100 translate-y-0"
//                       : "pointer-events-none opacity-0 -translate-y-2"
//                   }`}
//                 >
//                   <div className="border-b border-slate-100 px-4 py-3">
//                     <p className="text-xs text-slate-500">Signed in as</p>
//                     <p className="truncate text-sm font-medium text-slate-900">
//                       {user.name}
//                     </p>
//                   </div>
//                   <button
//                     onClick={handleLogout}
//                     className="w-full px-4 py-2.5 text-left text-sm font-medium text-red-600 transition-colors duration-200 hover:bg-red-50"
//                   >
//                     Logout
//                   </button>
//                 </div>
//               </div>
//             ) : (
//               <button
//                 onClick={() => navigate("/login")}
//                 className="hidden rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-2 text-sm font-medium text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg md:block"
//               >
//                 Login
//               </button>
//             )}

//             {/* Mobile menu button */}
//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="rounded-lg p-2 text-slate-600 transition-colors duration-200 hover:bg-slate-100 md:hidden"
//             >
//               {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Mobile Menu */}
//       <div
//         className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
//           isMobileMenuOpen
//             ? "opacity-100"
//             : "pointer-events-none opacity-0"
//         }`}
//         onClick={() => setIsMobileMenuOpen(false)}
//       ></div>

//       <div
//         className={`fixed right-0 top-0 z-50 h-full w-64 bg-white shadow-2xl transition-transform duration-300 md:hidden ${
//           isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <div className="flex h-full flex-col">
//           <div className="flex items-center justify-between border-b border-slate-200 px-4 py-4">
//             <span className="text-lg font-bold text-blue-600">Menu</span>
//             <button
//               onClick={() => setIsMobileMenuOpen(false)}
//               className="rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100"
//             >
//               <X size={24} />
//             </button>
//           </div>

//           <nav className="flex flex-col gap-1 p-4">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 onClick={() => setIsMobileMenuOpen(false)}
//                 className={`rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 ${
//                   isActive(link.path)
//                     ? "bg-blue-50 text-blue-600"
//                     : "text-slate-600 hover:bg-slate-50"
//                 }`}
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </nav>

//           <div className="mt-auto border-t border-slate-200 p-4">
//             {user ? (
//               <div className="space-y-3">
//                 <div className="rounded-lg bg-slate-50 px-4 py-3">
//                   <p className="text-xs text-slate-500">Signed in as</p>
//                   <p className="truncate text-sm font-medium text-slate-900">
//                     {user.name}
//                   </p>
//                 </div>
//                 <button
//                   onClick={handleLogout}
//                   className="w-full rounded-lg bg-red-50 px-4 py-2.5 text-sm font-medium text-red-600 transition-colors hover:bg-red-100"
//                 >
//                   Logout
//                 </button>
//               </div>
//             ) : (
//               <button
//                 onClick={() => {
//                   navigate("/login");
//                   setIsMobileMenuOpen(false);
//                 }}
//                 className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-2.5 text-sm font-medium text-white transition-all hover:shadow-lg"
//               >
//                 Login
//               </button>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Spacer to prevent content from going under fixed header */}
//       <div className="h-16"></div>
//     </>
//   );
// };

// export default Header;