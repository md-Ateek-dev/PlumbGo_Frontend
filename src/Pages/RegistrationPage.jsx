import React, { useState } from "react";
import Client from "../Services/Client";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Wrench, User, Phone, Mail, Lock, NotebookPen } from "lucide-react";
import img from "../assets/image3.jpg"
import Swal from "sweetalert2";

const RegistrationPage = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");

    // if (!name || !phone || !email || !password) {
    //   setMsg("Please fill all fields");
    //   return;
    // }
 // 🔹 Name validation
  if (!name.trim()) {
Swal.fire({
      icon: "warning",
      title: "Required Fields Missing",
      text: "Name, Phone and Message are required.",
    });    
    return;
  }

  const nameRegex = /^[a-zA-Z\s]+$/;
  if (!nameRegex.test(name)) {
 Swal.fire({
      icon: "warning",
      title: "Invalid Name",
      text: "Name should only contain letters and spaces.",
    });    return;
  }

  // 🔹 Phone validation
  if (phone.length !== 10) {
Swal.fire({
      icon: "warning",
      title: "Invalid Phone Number",
      text: "Mobile number must be exactly 10 digits.",
    });
        return;
  }

  // if (phone.length !== 10) {
  //   toast.error("Phone number must be 10 digits");
  //   return;
  // }

  // 🔹 Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
Swal.fire({
      icon: "warning",
      title: "Invalid Email",
      text: "Please enter a valid email address.",
    });    return;
  }

  if (!emailRegex.test(email)) {
Swal.fire({
      icon: "warning",
      title: "Invalid Email",
      text: "Please enter a valid email address.",
    });    return;
  }

  // 🔹 Password validation
  if (!password) {
    toast.error("Password is required");
    return;
  }

  if (password.length < 6) {
Swal.fire({
      icon: "warning",
      title: "Invalid Password",
      text: "Please enter must at least 6 digit password.",
    });   
     return;
  }

    try {
      setLoading(true);

      const res = await Client.post("/User/register", {
        name,
        phone,
        email,
        password,
      });

      setMsg(res.data?.message || "Registration successful ✔");
      toast.success("Registration successful ✅");

      setTimeout(() => {
        navigate("/login");
      }, 800);
    } catch (err) {
      setMsg(err.response?.data?.message || "Registration failed");
      toast.error(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-teal-900 to-emerald-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxNGI4YTYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="text-center relative z-10 animate-[fadeIn_0.5s_ease-out]">
          <div className="relative mx-auto mb-6 h-20 w-20">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-400/20 to-emerald-400/20 animate-pulse"></div>
            <div className="absolute inset-2 rounded-full border-4 border-teal-500/30"></div>
            <div className="absolute inset-2 animate-spin rounded-full border-4 border-transparent border-t-teal-400 border-r-emerald-400"></div>
            <Wrench className="absolute inset-0 m-auto text-teal-400 animate-[pulse_2s_ease-in-out_infinite]" size={32} />
          </div>
          <p className="text-base font-semibold text-white/90 animate-pulse mb-1">
            Creating your account
          </p>
          <p className="text-sm text-teal-300/60">Please wait a moment...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden p-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.08),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.08),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxNGI4YTYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-teal-100/50 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite_2s]"></div>

      {/* Main Container */}
      <div className="relative w-full max-w-6xl bg-white shadow-2xl rounded-3xl overflow-hidden border border-gray-200 animate-[slideUp_0.6s_ease-out]">
        <div className="grid md:grid-cols-2 min-h-[600px]">
          
          {/* Left Side - Image */}
          <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-teal-50 to-blue-50 p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.1),transparent_70%)]"></div>
            
            {/* Placeholder for your image */}
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center space-y-6 animate-[fadeIn_0.8s_ease-out_0.3s_both]">
              <div className="w-96 h-96 rounded-3xl bg-white shadow-xl border border-gray-100 flex items-center justify-center">
                {/* Replace this div with your actual image */}
                <img 
                  src={img} 
                  alt="Registration"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
              <div className="text-center space-y-2">
                <h2 className="text-3xl font-bold text-gray-800">Welcome!</h2>
                <p className="text-gray-600 text-sm max-w-xs">
                  Join our community and unlock amazing features tailored just for you
                </p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-teal-100/60 animate-[float_6s_ease-in-out_infinite]"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-blue-100/60 animate-[float_8s_ease-in-out_infinite_1s]"></div>
          </div>

          {/* Right Side - Form */}
          <div className="p-8 md:p-12 flex items-center">
            <div className="w-full space-y-6">
              
              {/* Header */}
              <div className="text-center md:text-left space-y-3 animate-[fadeIn_0.8s_ease-out_0.2s_both]">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-700 to-teal-600 shadow-lg shadow-teal-500/30">
                  <NotebookPen className="text-white " size={24} />
                </div>
                <h1 className="text-3xl font-bold text-gray-800">
                  Create Account
                </h1>
                <p className="text-sm text-gray-600">
                  Start your journey with us today
                </p>
              </div>

              {msg && (
                <div className="text-sm text-teal-800 bg-teal-50 border border-teal-200 rounded-xl px-4 py-3 animate-[slideDown_0.3s_ease-out]">
                  {msg}
                </div>
              )}

              {/* Form Fields */}
              <div className="space-y-4">
                
                {/* Name Field */}
                <div className="space-y-2 animate-[fadeIn_0.8s_ease-out_0.4s_both]">
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <div className="relative group">
                    <User className={`absolute left-3 top-1/2 -translate-y-1/2 transition-all duration-300 ${focusedField === 'name' ? 'text-teal-500' : 'text-gray-400'}`} size={18} />
                    <input
                      type="text"
                      className="w-full bg-white border border-gray-300 rounded-xl pl-11 pr-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all duration-300 hover:border-gray-400"
                      placeholder="Enter your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                    />
                  </div>
                </div>

                {/* Phone Field */}
                <div className="space-y-2 animate-[fadeIn_0.8s_ease-out_0.5s_both]">
                  <label className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <div className="relative group">
                    <Phone className={`absolute left-3 top-1/2 -translate-y-1/2 transition-all duration-300 ${focusedField === 'phone' ? 'text-teal-500' : 'text-gray-400'}`} size={18} />
                    <input
                      type="tel"
                      className="w-full bg-white border border-gray-300 rounded-xl pl-11 pr-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all duration-300 hover:border-gray-400"
                      placeholder="Enter your phone number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="space-y-2 animate-[fadeIn_0.8s_ease-out_0.6s_both]">
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <div className="relative group">
                    <Mail className={`absolute left-3 top-1/2 -translate-y-1/2 transition-all duration-300 ${focusedField === 'email' ? 'text-teal-500' : 'text-gray-400'}`} size={18} />
                    <input
                      type="email"
                      className="w-full bg-white border border-gray-300 rounded-xl pl-11 pr-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all duration-300 hover:border-gray-400"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="space-y-2 animate-[fadeIn_0.8s_ease-out_0.7s_both]">
                  <label className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="relative group">
                    <Lock className={`absolute left-3 top-1/2 -translate-y-1/2 transition-all duration-300 ${focusedField === 'password' ? 'text-teal-500' : 'text-gray-400'}`} size={18} />
                    <input
                      type="password"
                      className="w-full bg-white border border-gray-300 rounded-xl pl-11 pr-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all duration-300 hover:border-gray-400"
                      placeholder="Create a password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onFocus={() => setFocusedField('password')}
                      onBlur={() => setFocusedField(null)}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full cursor-pointer rounded-xl bg-gradient-to-r from-teal-700 to-teal-600 text-white text-sm font-semibold py-3 hover:from-teal-600 hover:to-teal-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition-all duration-300 shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 hover:scale-[1.02] active:scale-[0.98] animate-[fadeIn_0.8s_ease-out_0.8s_both]"
                >
                  {loading ? "Creating account..." : "Sign Up"}
                </button>

                {/* Footer */}
                <p className="text-sm text-gray-600 text-center animate-[fadeIn_0.8s_ease-out_0.9s_both]">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => navigate("/login")}
                    className="text-teal-600 cursor-pointer hover:text-teal-700 font-medium transition-colors duration-200 hover:underline"
                  >
                    Login
                  </button>
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
};

export default RegistrationPage;