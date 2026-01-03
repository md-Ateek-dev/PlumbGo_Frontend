// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight, Droplet, Wrench, Clock, Shield } from 'lucide-react';
//   import Carousel1 from "../assets/Carousel1.avif";
//   import Carousel2 from "../assets/Carousel2.avif";
//   import Carousel3 from "../assets/Carousel3.avif";

// const Carousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState('next');
//   const [isAnimating, setIsAnimating] = useState(false);

//   const slides = [
//     {
//       id: 1,
//       image:Carousel1,
//       headline: 'Premium Plumbing Services',
//       subtext: 'Expert repairs & installations',
//     //   color: 'from-blue-600 to-cyan-500',
//       icon: Wrench
//     },
//     {
//       id: 2,
//       image:Carousel2,
//       headline: '24/7 Emergency Plumbing',
//       subtext: 'Fast response, reliable service',
//     //   color: 'from-indigo-600 to-blue-500',
//       icon: Clock
//     },
//     {
//       id: 3,
//       image:Carousel3,
//       headline: 'Pipe Repair Specialists',
//       subtext: 'Leak detection & prevention',
//     //   color: 'from-blue-700 to-indigo-600',
//       icon: Shield
//     }
//   ];

//   const nextSlide = () => {
//     if (!isAnimating) {
//       setDirection('next');
//       setIsAnimating(true);
//       setCurrentIndex((prev) => (prev + 1) % slides.length);
//       setTimeout(() => setIsAnimating(false), 700);
//     }
//   };

//   const prevSlide = () => {
//     if (!isAnimating) {
//       setDirection('prev');
//       setIsAnimating(true);
//       setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
//       setTimeout(() => setIsAnimating(false), 700);
//     }
//   };

//   const goToSlide = (index) => {
//     if (!isAnimating && index !== currentIndex) {
//       setDirection(index > currentIndex ? 'next' : 'prev');
//       setIsAnimating(true);
//       setCurrentIndex(index);
//       setTimeout(() => setIsAnimating(false), 700);
//     }
//   };

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 6000);
//     return () => clearInterval(interval);
//   }, [isAnimating]);

//   const currentSlide = slides[currentIndex];
//   const IconComponent = currentSlide.icon;

//   return (
//     <div className="relative w-full h-[500px] overflow-hidden group">
//       {/* Background with Parallax Effect */}
//       <div className="absolute inset-0">
//         {slides.map((slide, index) => (
//           <div
//             key={slide.id}
//             className={`absolute inset-0 transition-all duration-1000 ease-out ${
//               index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
//             }`}
//           >
//             <img 
//               src={slide.image} 
//               alt={slide.headline}
//               className="w-full h-full object-cover"
//             />
//             <div className={`absolute inset-0 bg-gradient-to-br ${slide.color} opacity-70`} />
//             <div className="absolute inset-0 " />
//           </div>
//         ))}
//       </div>

//       {/* Animated Background Blobs */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className={`absolute top-0 right-0 w-96 h-96 rounded-full transition-all duration-[3000ms] ${
//           currentIndex === 0 ? 'translate-x-0 translate-y-0' : 'translate-x-20 -translate-y-20'
//         }`} />
//         <div className={`absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl transition-all duration-[3000ms] ${
//           currentIndex === 1 ? 'translate-x-0 translate-y-0' : '-translate-x-20 translate-y-20'
//         }`} />
//       </div>

//       {/* Content Container */}
//       <div className="relative h-full flex items-center px-8 md:px-16 z-10">
//         <div className="max-w-2xl">
//           {/* Icon with Animation */}
//           <div 
//             className={`mb-6 transition-all duration-700 ${
//               isAnimating 
//                 ? direction === 'next' ? 'opacity-0 -translate-x-8' : 'opacity-0 translate-x-8'
//                 : 'opacity-100 translate-x-0'
//             }`}
//           >
//             <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 shadow-2xl">
//               <IconComponent className="w-8 h-8 text-white" />
//             </div>
//           </div>

//           {/* Headline with Stagger Animation */}
//           <h2 
//             className={`text-5xl md:text-6xl font-bold text-white mb-4 leading-tight transition-all duration-700 delay-75 ${
//               isAnimating 
//                 ? direction === 'next' ? 'opacity-0 -translate-x-12 blur-sm' : 'opacity-0 translate-x-12 blur-sm'
//                 : 'opacity-100 translate-x-0 blur-0'
//             }`}
//           >
//             {currentSlide.headline}
//           </h2>

//           {/* Subtext */}
//           <p 
//             className={`text-xl md:text-2xl text-white/90 mb-8 transition-all duration-700 delay-150 ${
//               isAnimating 
//                 ? direction === 'next' ? 'opacity-0 -translate-x-16 blur-sm' : 'opacity-0 translate-x-16 blur-sm'
//                 : 'opacity-100 translate-x-0 blur-0'
//             }`}
//           >
//             {currentSlide.subtext}
//           </p>

//           {/* CTA Button */}
//           <div 
//             className={`transition-all duration-700 delay-200 ${
//               isAnimating 
//                 ? direction === 'next' ? 'opacity-0 -translate-x-20 blur-sm' : 'opacity-0 translate-x-20 blur-sm'
//                 : 'opacity-100 translate-x-0 blur-0'
//             }`}
//           >
//             <button className="group/btn relative px-8 py-4 text-blue-600 rounded-full font-semibold text-lg overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-white/25 hover:scale-105 active:scale-95">
//               <span className="relative z-10 flex items-center gap-2">
//                 Get Started
//                 <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
//               </span>
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left" />
//             </button>
//           </div>

//           {/* Feature Pills */}
//           <div 
//             className={`mt-8 flex gap-3 transition-all duration-700 delay-300 ${
//               isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
//             }`}
//           >
//             <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white text-sm font-medium">
//               Licensed & Insured
//             </div>
//             <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white text-sm font-medium">
//               Same Day Service
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Navigation Arrows */}
//       <button
//         onClick={prevSlide}
//         disabled={isAnimating}
//         className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14  hover:bg-white/20 backdrop-blur-md rounded-full border border-white/20 transition-all duration-300 hover:scale-110 active:scale-95 z-20 flex items-center justify-center group/arrow opacity-0 group-hover:opacity-100 disabled:cursor-not-allowed"
//         aria-label="Previous slide"
//       >
//         <ChevronLeft className="w-6 h-6 text-white transition-transform group-hover/arrow:-translate-x-0.5" />
//       </button>
      
//       <button
//         onClick={nextSlide}
//         disabled={isAnimating}
//         className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full border border-white/20 transition-all duration-300 hover:scale-110 active:scale-95 z-20 flex items-center justify-center group/arrow opacity-0 group-hover:opacity-100 disabled:cursor-not-allowed"
//         aria-label="Next slide"
//       >
//         <ChevronRight className="w-6 h-6 text-white transition-transform group-hover/arrow:translate-x-0.5" />
//       </button>

//       {/* Progress Indicators */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             disabled={isAnimating}
//             className="group/indicator relative disabled:cursor-not-allowed"
//             aria-label={`Go to slide ${index + 1}`}
//           >
//             <div className={`h-1.5 rounded-full transition-all duration-500 ${
//               index === currentIndex
//                 ? 'w-12 bg-white shadow-lg shadow-white/50'
//                 : 'w-8 bg-white/40 hover:bg-white/60'
//             }`} />
//             {index === currentIndex && (
//               <div className="absolute inset-0 rounded-full bg-white/30 blur-sm animate-pulse" />
//             )}
//           </button>
//         ))}
//       </div>

//       {/* Decorative Floating Elements */}
//       <div className="absolute top-8 right-8 flex gap-3 opacity-60 pointer-events-none z-10">
//         <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center animate-bounce" style={{ animationDuration: '3s' }}>
//           <Wrench className="w-5 h-5 text-white" />
//         </div>
//         <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center animate-bounce" style={{ animationDuration: '3s', animationDelay: '0.5s' }}>
//           <Droplet className="w-5 h-5 text-white" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Carousel;

import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getCarouselSlides } from "../Services/CarouselApi";

const Carousel = () => {
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // 🔹 Load slides from backend
  useEffect(() => {
    getCarouselSlides().then((res) => {
      setSlides(res.data.slides || []);
    });
  }, []);

  // 🔹 Auto slide
  useEffect(() => {
    if (!slides.length) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides]);

  if (!slides.length) return null;

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % slides.length);

  const prevSlide = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );

  const slide = slides[currentIndex];

  return (
    <div className="relative w-full h-[420px] overflow-hidden">
      {/* Image */}
      <img
        src={`http://localhost:5000${slide.image}`}
        alt={slide.headline}
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center px-6 md:px-16">
        <div className="max-w-xl text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-3">
            {slide.headline}
          </h2>
          <p className="text-lg md:text-xl text-white/90">
            {slide.subtext}
          </p>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2"
      >
        <ChevronLeft className="text-black" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2"
      >
        <ChevronRight className="text-white" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <span
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-2 w-2 rounded-full cursor-pointer ${
              i === currentIndex ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
