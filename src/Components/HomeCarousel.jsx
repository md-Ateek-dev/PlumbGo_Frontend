// import React, { useEffect, useState } from "react";
// import { getCarouselSlides } from "../Services/CarouselApi";

// const HomeCarousel = () => {
//   const [slides, setSlides] = useState([]);
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const load = async () => {
//       try {
//         const res = await getCarouselSlides();
//         setSlides(res.data.slides || []);
//       } catch (err) {
//         console.error("Carousel load error:", err);
//       }
//     };
//     load();
//   }, []);

//   // auto slide
//   useEffect(() => {
//     if (!slides.length) return;
//     const id = setInterval(() => {
//       setIndex((prev) => (prev + 1) % slides.length);
//     }, 4000);
//     return () => clearInterval(id);
//   }, [slides]);

//   if (!slides.length) return null;

//   const current = slides[index];

//   return (
//     <div className="w-full bg-slate-900 mt-21 text-white">
//       <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center gap-6">
//         {/* Left text */}
//         <div className="flex-1">
//           <p className="text-xs uppercase tracking-wide text-blue-300 mb-2">
//             PlumbGo
//           </p>
//           <h2 className="text-2xl font-bold mb-2">{current.title}</h2>
//           {current.subtitle && (
//             <p className="text-sm text-slate-200 mb-4">
//               {current.subtitle}
//             </p>
//           )}
//           {current.buttonLink && current.buttonText && (
//             <a
//               href={current.buttonLink}
//               className="inline-flex items-center rounded-lg bg-blue-500 px-4 py-2 text-xs font-medium hover:bg-blue-600"
//             >
//               {current.buttonText}
//             </a>
//           )}

//           {/* dots */}
//           <div className="flex gap-2 mt-4">
//             {slides.map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => setIndex(i)}
//                 className={`h-2 w-2 rounded-full ${
//                   i === index ? "bg-white" : "bg-slate-500"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Right image */}
//         <div className="flex-1">
//           <div className="rounded-2xl overflow-hidden bg-slate-800 aspect-video">
//             {current.imageUrl && (
//               <img
//                 src={current.imageUrl}
//                 alt={current.title}
//                 className="h-full w-full object-cover"
//               />
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeCarousel;


import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, Wrench } from "lucide-react";
import { getCarouselSlides } from "../Services/CarouselApi";

const HomeCarousel = () => {
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [loading, setLoading] = useState(true)
  
  // 🔹 Load slides from backend
  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true)
        const res = await getCarouselSlides();
        setSlides(res.data.slides || []);
      } catch (err) {
        console.error("Carousel load error:", err);
        
      }
      finally{
          setLoading(false)
        }
    };
    load();
  }, []);

  // 🔹 Auto slide
  useEffect(() => {
    if (!slides.length) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(timer);
  }, [slides, currentIndex]);
  
  if(loading){
    return(
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
        <div className="text-center">
          <div className="relative mx-auto mb-4 h-16 w-16">
            <div className="absolute inset-0 rounded-full border-4 border-teal-200"></div>
            <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-teal-600"></div>
            <Wrench className="absolute inset-0 m-auto text-teal-600 animate-pulse" size={24} />
          </div>
          <p className="text-sm font-medium text-slate-600 animate-pulse">
            Loading login...
          </p>
        </div>
      </div>
    )
  }
  
  if (!slides.length) return null;

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  const goToSlide = (index) => {
    if (!isAnimating && index !== currentIndex) {
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  const current = slides[currentIndex];
  

  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[75vh] overflow-hidden mt-20 group">
      {/* Fullscreen Width Background Images */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((s, index) => (
          <div
            key={s._id || index}
            className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-out ${
              index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
            }`}
          >
            <img
              src={current.imageUrl || `http://localhost:5000${s.image}`}
              alt={s.title || s.headline}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Dark Overlay */}
            {/* <div className="absolute inset-0 bg-black/60" /> */}
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative h-full flex items-center z-10">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl text-center lg:text-left">
            {/* Small Label */}
            <div
              className={`inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/50 backdrop-blur-md border border-white/20 rounded-full text-teal-600 text-xs sm:text-sm font-medium mb-3 sm:mb-4 transition-all duration-700 ${
                isAnimating ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'
              }`}
            >
              <span className="w-2 h-2 bg-teal-600 rounded-full animate-pulse"></span>
              PlumbGo
            </div>

            {/* Title */}
            <h1
              className={`text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-emerald-700 mb-2 sm:mb-3 leading-tight transition-all duration-700 delay-75 ${
                isAnimating ? 'opacity-0 -translate-y-8 blur-sm' : 'opacity-100 translate-y-0 blur-0'
              }`}
            >
              {current.title || current.headline}
            </h1>

            {/* Subtitle */}
            {(current.subtitle || current.subtext) && (
              <p
                className={`text-sm sm:text-base md:text-xl text-white/90 mb-4 sm:mb-6 max-w-2xl mx-auto lg:mx-0 transition-all duration-700 delay-150 ${
                  isAnimating ? 'opacity-0 -translate-y-12 blur-sm' : 'opacity-100 translate-y-0 blur-0'
                }`}
              >
                {current.subtitle || current.subtext}
              </p>
            )}

            {/* CTA Button */}
            {(current.buttonText || current.buttonLink) && (
              <div
                className={`flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start mb-4 sm:mb-6 transition-all duration-700 delay-300 ${
                  isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'
                }`}
              >
                <a
                  href={current.buttonLink || '#'}
                  className="group/btn px-6 py-2.5 sm:px-8 sm:py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:bg-slate-100 shadow-2xl shadow-amber-100 text-white rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
                >
                  {current.buttonText || 'Learn More'}
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            )}

            {/* Progress Dots */}
            <div
              className={`flex gap-2 justify-center lg:justify-start transition-all duration-700 delay-400 ${
                isAnimating ? 'opacity-0' : 'opacity-100'
              }`}
            >
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  disabled={isAnimating}
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
                    i === currentIndex ? "bg-white w-8" : "bg-white/40 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        disabled={isAnimating}
        className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full border border-white/20 transition-all duration-300 hover:scale-110 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 disabled:cursor-not-allowed"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        disabled={isAnimating}
        className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full border border-white/20 transition-all duration-300 hover:scale-110 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 disabled:cursor-not-allowed"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </button>
    </div>
  );
};

export default HomeCarousel;