import React, { useState } from "react";
import Client from "../Services/Client";
import { useNavigate } from "react-router-dom";
import { saveAuth } from "../Services/AuthUser";
// import toast from "react-hot-toast";
import { GoogleLogin } from "@react-oauth/google";
import { Wrench, Mail, Lock, ArrowRight, KeyRound } from "lucide-react";
import Swal from "sweetalert2";
import bgImage from "../assets/image5.jpg"

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");

    if (!email || !password) {
      setMsg("Please enter email and password");
      return;
    }

    try {
      setLoading(true);

      const res = await Client.post("/User/login", { email, password });
      const { token, user } = res.data;

      saveAuth(user, token);
      Swal.fire({
              icon: "success",
              title: "Success!",
              text: "Login successful",
              confirmButtonColor: "#0f766e"
            });

      setMsg("Login successful ✅");
      setTimeout(() => {
        navigate("/booking");
      }, 500);

    } catch (err) {
      setMsg(err.response?.data?.message || "Login failed");
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Login Error Please try again",
        confirmButtonColor: "#dc2626"
         });
         
    } finally {
      setLoading(false);
    }
  };

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

  return (
    <div className="min-h-screen flex items-center justify-center  px-4 sm:px-6 py-12"
    style={{
    backgroundImage: `
      url(${bgImage})`,
            backgroundSize: "cover",
          backgroundPosition: "center",
        }}
    >
      <div className="w-full max-w-md">
        {/* Card with smooth entrance animation */}
        <div className="bg-transparent backdrop-blur-xl shadow-2xl shadow-slate-400/90 rounded-2xl p-8 sm:p-10 space-y-6 border border-gray-300 animate-[fadeIn_0.5s_ease-out]">
          
          {/* Header */}
          <div className="text-center space-y-2">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl mb-3 shadow-lg shadow-teal-500/30 animate-[bounce_1s_ease-in-out]">
              <KeyRound className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Welcome Back
            </h1>
            <p className="text-sm text-slate-500">
              Login to continue to PlumbGo
            </p>
          </div>

          {/* Error Message with smooth animation */}
          {msg && (
            <div className="text-sm text-slate-700 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 animate-[slideDown_0.3s_ease-out]">
              {msg}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div className="space-y-2 group">
              <label className="block text-sm font-semibold text-slate-700 transition-colors group-focus-within:text-teal-600">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 transition-colors group-focus-within:text-teal-600" />
                <input
                  type="email"
                  className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl text-sm 
                    focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 
                    transition-all duration-300 bg-white hover:border-slate-300"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2 group">
              <label className="block text-sm font-semibold text-slate-700 transition-colors group-focus-within:text-teal-600">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 transition-colors group-focus-within:text-teal-600" />
                <input
                  type="password"
                  className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl text-sm 
                    focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 
                    transition-all duration-300 bg-white hover:border-slate-300"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="group w-full rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-sm 
                font-semibold py-3 hover:from-emerald-700 hover:to-teal-700 
                disabled:from-slate-300 disabled:to-slate-300 disabled:cursor-not-allowed 
                transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/30 hover:-translate-y-0.5
                active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer"
            >
              {loading ? (
                "Logging in..."
              ) : (
                <>
                  Login
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-white text-slate-500">Or continue with</span>
            </div>
          </div>

          {/* Google Login */}
          <div className="flex justify-center">
            <GoogleLogin 
              width={320}
              onSuccess={async (credentialResponse) => {
                try {
                  const res = await Client.post("/User/google-login", {
                    credential: credentialResponse.credential,
                  });

                  saveAuth(res.data.user, res.data.token);
                  toast.success("Google login successful");
                  navigate("/booking");
                } catch (err) {
                  toast.error("Google login failed");
                }
              }}
              onError={() => {
                toast.error("Google Login Failed");
              }}
            />
          </div>

          {/* Sign Up Link */}
          <p className="text-sm text-slate-600 text-center pt-2">
            Don't have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/register")}
              className="text-teal-600 cursor-pointer hover:text-teal-700 font-semibold hover:underline transition-colors"
            >
              Sign up
            </button>
          </p>
        </div>

        {/* Bottom decorative element */}
        <p className="text-center text-xs text-black mt-6">
          © 2024 PlumbGo. All rights reserved.
        </p>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
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

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
};

export default LoginPage;