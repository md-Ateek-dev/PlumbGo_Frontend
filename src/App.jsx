import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ServicesPage from "./Pages/ServicesPage";
import BookingPage from "./Pages/BookingPage";
import LoginPage from "./Pages/LoginPage";
import MyBookingsPage from "./Pages/MyBookingsPage";
import HomePage from "./Pages/HomePage";
import Header from "./Components/Header";
import RegistrationPage from "./Pages/RegistrationPage";
import UserProtectedRoute from "./Routes/UserProtectRouted";
import { Toaster } from "react-hot-toast";
import HomeCarousel from "./Components/HomeCarousel";
import Footer from "./Components/Footer";
import AboutUsPage from "./Pages/AboutUsPage";
import ContactUsPage from "./Pages/ContactUsPage";
import BlogsPage from "./Pages/BlogsPage";
import BlogDetail from "./Pages/BlogsDetails";
import GalleryPage from "./Pages/GalleryPage";
import TestimonialsPage from "./Pages/TestimonialsPage";
import ReviewForm from "./Pages/ReviewForm";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermAndCondition from "./Pages/TermAndCondition";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();


const App = () => {
  return (
    <BrowserRouter>

     <div className="min-h-screen bg-slate-50">
      <Header />
     <HomeCarousel /> 
      <Toaster position="top-right" />   {/* 👈 ye add karo */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="blogs" element={<BlogsPage/>}/>
        <Route path="blogs/:slug" element={<BlogDetail/>} />
        <Route path="/gallery" element={<GalleryPage/>} />
        <Route path="/testimonials" element={<TestimonialsPage/>} />
        <Route path="/reviews" element={<ReviewForm/>} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy/>} />
        <Route path="/termCondition" element={<TermAndCondition/>}/>
        
         <Route path="/booking" element={
          <UserProtectedRoute>
            <BookingPage />
            </UserProtectedRoute>} />
     <Route path="/myBookings" element={
      <UserProtectedRoute>
        <MyBookingsPage />
      </UserProtectedRoute>}/>
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactUsPage />} />

     <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegistrationPage />} /> 

      </Routes>
      <Footer/>
      </div>
    </BrowserRouter>
  );
};

export default App;
