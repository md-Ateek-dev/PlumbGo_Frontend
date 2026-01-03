// import React, { useEffect, useState } from "react";
// import Client from "../Services/Client";
// import Grid from "@mui/material/Grid";
// import { Button, Skeleton, Stack } from "@mui/material";

// const GalleryPage = () => {
//   const [items, setItems] = useState([]);
//   const [total, setTotal] = useState(0);
//   const [limit] = useState(10);
//   const [loading, setLoading] = useState(false);

//   const loadGallery = async () => {
//     try {
//       setLoading(true);
//       const res = await Client.get(
//         `/gallery?limit=${limit}&skip=${items.length}`
//       );

//       setItems((prev) => [...prev, ...res.data.items]);
//       setTotal(res.data.total);
//     } catch (err) {
//       console.error("Gallery load error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     loadGallery();
//   }, []);

//   return (
//     <div className="p-4">
//       <Grid container spacing={2}>
//         {items.map((img) => (
//           <Grid key={img._id} size={4}>
//             <img
//               src={`http://localhost:5000${img.imageUrl}`}
//               alt="gallery"
//               style={{
//                 width: "100%",
//                 height: 200,
//                 objectFit: "cover",
//                 borderRadius: 10,
//               }}
//               loading="lazy"
//             />
//           </Grid>
//         ))}

//         {loading &&
//           Array.from({ length: 4 }).map((_, i) => (
//             <Grid key={i} size={4}>
//               <Skeleton
//                 variant="rectangular"
//                 height={200}
//                 sx={{ borderRadius: 2 }}
//               />
//             </Grid>
//           ))}
//       </Grid>

//       {items.length < total && (
//         <Stack alignItems="center" mt={3}>
//           <Button
//             variant="contained"
//             onClick={loadGallery}
//             disabled={loading}
//           >
//             {loading ? "Loading..." : "Show More"}
//           </Button>
//         </Stack>
//       )}
//     </div>
//   );
// };

// export default GalleryPage;
import React, { useEffect, useState } from "react";
import Client from "../Services/Client";
import Skeleton from "@mui/material/Skeleton";
import Dialog from "@mui/material/Dialog";
import { useNavigate } from "react-router-dom";

const GalleryPage = () => {
  const [images, setImages] = useState([]);
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [activeImage, setActiveImage] = useState("");
  const [imageLoaded, setImageLoaded] = useState({});
  const [displayCount, setDisplayCount] = useState(8);
  const navigate = useNavigate();
  
  const LIMIT_FIRST = 8;
  const LIMIT_MORE = 4;
  
  const loadGallery = async () => {
    setLoading(true);
    const res = await Client.get(`/gallery?limit=100&skip=0`);
    setImages(res.data.items);
    setTotal(res.data.total);
    setLoading(false);
  };

  const handleShowMore = () => {
    setDisplayCount(prev => prev + LIMIT_MORE);
  };

  const handleShowLess = () => {
    setDisplayCount(8);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  useEffect(() => {
    loadGallery();
  }, []);
  
  const openImage = (img) => {
    setActiveImage(img);
    setOpen(true);
  };
  
  const handleImageLoad = (id) => {
    setImageLoaded(prev => ({ ...prev, [id]: true }));
  };
  
  const handleImageClick = (item) => {
  if (item.blogSlug) {
    navigate(`/blogs/${item.blogSlug}`);
  }
};

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section with Animation */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-block">
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 bg-clip-text text-transparent mb-4">
              Our Gallery
            </h1>
            <div className="h-1.5 w-32 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mx-auto mb-4"></div>
          </div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Real plumbing work photos from PlumbGo projects showcasing our expertise and quality craftsmanship
          </p>
        </div>

        {/* Masonry Grid Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-4 gap-4 space-y-4">
          {images.slice(0, displayCount).map((img, index) => (
            <div
              key={img._id}
              className="break-inside-avoid group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden bg-slate-200">
                
                {img.blogSlug && (
  <span
    onClick={(e) => {
      e.stopPropagation();       // 🔥 image popup ko roko
      navigate(`/blogs/${img.blogSlug}`);
    }}
    className="absolute top-3 left-3 z-10 
      bg-emerald-600 text-white text-xs font-semibold 
      px-3 py-1 rounded-full shadow cursor-pointer
      hover:bg-emerald-700 transition"
  >
    Read Blog
  </span>
)}


                <img
  src={`http://localhost:5000${img.imageUrl}`}
  alt="Plumbing Work"
  loading="lazy"
  onLoad={() => handleImageLoad(img._id)}
  onClick={(e) => {
    e.stopPropagation();           // 🔥 IMPORTANT
    handleImageClick(img);
  }}
  className={`w-full h-auto transform transition-all duration-700 
    group-hover:scale-110 
    ${imageLoaded[img._id] ? "opacity-100" : "opacity-0"} 
    ${img.blogSlug ? "cursor-pointer" : ""}`}
 />

                
                {/* Overlay on Hover */}
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-teal-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6 cursor-pointer"
                  onClick={() => openImage(img.imageUrl)}
                >
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-2 text-white">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <span className="font-medium">View Full Image</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Skeleton Loaders */}
          {loading &&
            Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="break-inside-avoid">
                <Skeleton
                  variant="rectangular"
                  height={Math.random() * 200}
                  className="rounded-2xl"
                  sx={{
                    bgcolor: 'rgba(16, 185, 129, 0.1)',
                    animation: 'pulse 1.5s ease-in-out infinite'
                  }}
                />
              </div>
            ))}
        </div>

        {/* Load More / Show Less Button */}
        {images.length > 8 && !loading && (
          <div className="text-center mt-12 animate-fade-in">
            {displayCount < images.length ? (
              <button
                onClick={handleShowMore}
                className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Show More
                  <svg className="w-5 h-5 transform group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-teal-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            ) : (
              <button
                onClick={handleShowLess}
                className="group relative px-8 py-4 bg-gradient-to-r from-slate-600 to-slate-700 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Show Less
                  <svg className="w-5 h-5 transform group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-700 to-slate-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            )}
          </div>
        )}

        {/* Empty State */}
        {!loading && images.length === 0 && (
          <div className="text-center py-20 animate-fade-in">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-2">No Images Yet</h3>
            <p className="text-slate-600">Check back soon for new gallery updates!</p>
          </div>
        )}
      </div>

      {/* Image Dialog with Enhanced Styling */}
      <Dialog 
        open={open} 
        onClose={() => setOpen(false)} 
        maxWidth="lg"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: '24px',
            overflow: 'hidden',
            maxWidth: '70vw',
            maxHeight: '95vh',
            backgroundColor: 'transparent',
            boxShadow: 'none',
            margin: '16px'
          }
        }}
      >
        <div className="relative bg-emerald-100/35 backdrop-blur-sm rounded-3xl overflow-hidden">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/95 hover:bg-white rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 hover:rotate-90"
          >
            <svg className="w-6 h-6 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="p-4 max-h-[90vh] flex items-center justify-center">
            <img
              src={`http://localhost:5000${activeImage}`}
              alt="Gallery"
              className="max-w-full max-h-[85vh] object-contain animate-zoom-in rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </Dialog>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes zoom-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-zoom-in {
          animation: zoom-in 0.3s ease-out forwards;
        }
         .gallery-img:hover {
  transform: scale(1.03);
}
 
      `}</style>
    </div>
  );
};

export default GalleryPage;