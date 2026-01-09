// src/Pages/BookingPage.jsx
import React, { useEffect, useState } from "react";
import { getServices } from "../Services/ServicesApi";
import { createBooking } from "../Services/BookingApi";
import { createRazorpayOrder, verifyRazorpayPayment } from "../Services/PaymentApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { Wrench, Calendar, Clock, MapPin, FileText, CreditCard, CheckCircle2, MapPinPlus } from "lucide-react";
import Swal from "sweetalert2";
import bgImage from "../assets/img_img.webp"
/* ---------------- TIME SLOTS ---------------- */
const TIME_SLOTS = [
  "09:00 AM - 10:00 AM",
  "10:00 AM - 11:00 AM",
  "11:00 AM - 12:00 PM",
  "12:00 PM - 01:00 PM",
  "02:00 PM - 03:00 PM",
  "03:00 PM - 04:00 PM",
  "04:00 PM - 05:00 PM",
  "05:00 PM - 06:00 PM",
];

/* ---------------- HELPERS ---------------- */
const getTodayDate = () => new Date().toISOString().split("T")[0];

const isPastTimeSlot = (selectedDate, selectedSlot) => {
  if (!selectedDate || !selectedSlot) return false;

  const now = new Date();
  const selected = new Date(selectedDate);

  // agar date future hai → allow
  if (selected > now && selected.toDateString() !== now.toDateString())
    return false;

  // agar aaj ki date hai → time check
  if (selected.toDateString() !== now.toDateString()) return false;

  const startTime = selectedSlot.split("-")[0].trim(); // "09:00 AM"
  const slotDateTime = new Date(`${selectedDate} ${startTime}`);

  return slotDateTime < now;
};


const loadRazorpayScript = () =>
  new Promise((resolve, reject) => {
    if (window.Razorpay) return resolve(true);
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => reject(new Error("Razorpay SDK failed to load."));
    document.body.appendChild(script);
  });

const BookingPage = () => {
  const [services, setServices] = useState([]);
  const [serviceId, setServiceId] = useState("");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cod");

  const [loading, setLoading] = useState(false);
  const [fetchingServices, setFetchingServices] = useState(true);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [lat, setLat] = useState("");
const [lng, setLng] = useState("");

  // Live Location Logic
  const getLiveLocation = (auto = false) => {
  if (!navigator.geolocation) {
    Swal.fire("Error", "Geolocation not supported", "error");
    return;
  }

  if (!auto) {
    Swal.fire({
      title: "Detecting location...",
      text: "Please allow location access",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });
  }

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const { latitude, longitude } = position.coords;

      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
        );
        const data = await res.json();

        const fullAddress = data.display_name || "";

        // ✅ CORRECT STATE UPDATE
        setAddress(fullAddress);
        setLat(latitude);
        setLng(longitude);

        if (!auto) {
          Swal.fire({
            icon: "success",
            title: "Location Added",
            text: "Exact location detected",
          });
        }
      } catch (err) {
        Swal.fire("Error", "Unable to fetch address", "error");
      }
    },
    () => {
      if (!auto) {
        Swal.fire("Permission Denied", "Location access denied", "error");
      }
    },
    {
      enableHighAccuracy: true,
      timeout: 15000,
      maximumAge: 0,
    }
  );
};


  useEffect(() => {
    const fromUrl = searchParams.get("serviceId");
    if (fromUrl) setServiceId(fromUrl);

    const loadServices = async () => {
      try {
        setFetchingServices(true);
        const res = await getServices();
        const srv = res?.data?.data ?? res?.data ?? [];
        setServices(srv);
      } catch (err) {
        console.error("Load services error:", err);
        toast.error("Failed to load services");
      } finally {
        setFetchingServices(false);
      }
    };

    loadServices();
  }, [searchParams]);
  
/* -------- FILTER TIME SLOTS (PAST DISABLED) -------- */
  const filteredSlots = TIME_SLOTS.filter(
    (slot) => !isPastTimeSlot(date, slot)
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!serviceId || !date || !timeSlot || !address || !paymentMethod) {
      toast.error("Please fill all required fields");
      return;
    }
    
 // 🔴 Past time validation
    if (isPastTimeSlot(date, timeSlot)) {
      Swal.fire({
        icon: "warning",
        title: "Invalid Time Slot",
        text: "You cannot select a past time slot.",
        confirmButtonColor: "#0f766e",
      });
      return;
    }
    setLoading(true);

    try {
      const bookingRes = await createBooking({
        service: serviceId,
        date,
        timeSlot,
        address,
        notes,
        paymentMethod,
      });

      const booking = bookingRes?.data?.booking ?? bookingRes?.data ?? null;

      if (!booking || !booking._id) {
        throw new Error("Booking creation failed. Try again.");
      }

      if (paymentMethod === "cod") {
        // toast.success("Booking Created Successfully ✅");
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Booking Created Successfully ✅",
          confirmButtonColor: "#0f766e"
        });
        navigate("/myBookings");
        return;
      }

      await loadRazorpayScript();

      const orderRes = await createRazorpayOrder(booking._id);
      const orderData = orderRes?.data?.order ?? orderRes?.data ?? null;
      const key =
        orderRes?.data?.key ??
        orderRes?.data?.key_id ??
        import.meta.env.VITE_RAZORPAY_KEY_ID;

      if (!orderData) {
        throw new Error("Failed to create payment order");
      }

      const rOrderId = orderData.id ?? orderData.order_id ?? orderData._id ?? orderData.id;

      const options = {
        key: key,
        amount: orderData.amount || orderData.amount_due || undefined,
        currency: orderData.currency || "INR",
        name: "PlumbGo",
        description: `Payment for booking ${booking._id}`,
        order_id: rOrderId,
        handler: async function (response) {
          try {
            const verifyRes = await verifyRazorpayPayment({
              bookingId: booking._id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            });

            const success = verifyRes?.data?.success ?? false;
            if (success) {
              // toast.success("Payment successful & booking confirmed ✅");
              Swal.fire({
                icon: "success",
                title: "Success!",
                text: "Payment successful & booking confirmed ✅",
                confirmButtonColor: "#0f766e"
              });
              navigate("/myBookings");
            } else {
              console.error("Verify response:", verifyRes?.data);
              toast.error("Payment verification failed. Contact support.");
            }
          } catch (err) {
            console.error("Verify error:", err);
            toast.error("Payment verification failed. Contact support.");
          }
        },
        prefill: {
          name: JSON.parse(localStorage.getItem("plumbgo_user") || "null")?.name || "",
          email: JSON.parse(localStorage.getItem("plumbgo_user") || "null")?.email || "",
          contact: JSON.parse(localStorage.getItem("plumbgo_user") || "null")?.phone || "",
        },
        theme: {
          color: "#2563eb",
        },
        modal: {
          ondismiss: function () {
            toast("Payment popup closed");
          },
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      const errorMsg = error?.response?.data?.message || error.message || "Booking / Payment failed";
      toast.error(errorMsg);
      console.error("BookingPage error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (fetchingServices) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
        <div className="text-center">
          <div className="relative mx-auto mb-4 h-16 w-16">
            <div className="absolute inset-0 rounded-full border-4 border-teal-200"></div>
            <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-teal-600"></div>
            <Wrench className="absolute inset-0 m-auto text-teal-600 animate-pulse" size={24} />
          </div>
          <p className="text-sm font-medium text-slate-600 animate-pulse">
            Loading services...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white px-4 sm:px-6 py-8 sm:py-12"
    style={{
    backgroundImage: `
      url(${bgImage})`,
            backgroundSize: "cover",
          backgroundPosition: "center",
        }}
    >
      <div className="mx-auto max-w-2xl">
        
        {/* Header with animation */}
        <div className="text-center mb-8 animate-[fadeIn_0.5s_ease-out]">
          <div data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl mb-4 shadow-lg shadow-teal-500/30">
            <Wrench className="w-8 h-8 text-white" />
          </div>
          <h1 data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-emerald-800 to-teal-600 bg-clip-text text-transparent mb-2">
            Book Your Service
          </h1>
          <p data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" className="text-black text-sm sm:text-base">
            Fill in the details below to schedule your plumbing service
          </p>
        </div>

        {/* Form Card with glassmorphism */}
        <form data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out"
          onSubmit={handleSubmit}
          className="bg-white/80 backdrop-blur-xl shadow-2xl shadow-slate-200/50 rounded-2xl p-6 sm:p-8 space-y-6 border border-white/20 animate-[slideUp_0.6s_ease-out]"
        >
          
          {/* Service Selection */}
          <div className="space-y-2 group">
            <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 transition-colors group-focus-within:text-teal-600">
              <Wrench className="w-4 h-4" />
              Select Service *
            </label>
            <select
              value={serviceId}
              onChange={(e) => setServiceId(e.target.value)}
              className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm 
                focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 
                transition-all duration-300 bg-white hover:border-slate-300"
            >
              <option value="">Choose a service...</option>
              {services.map((s) => (
                <option key={s._id} value={s._id}>
                  {s.name} — ₹{s.price}
                </option>
              ))}
            </select>
          </div>

          {/* Date and Time in Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {/* Date */}
            <div className="space-y-2 group">
              <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 transition-colors group-focus-within:text-teal-600">
                <Calendar className="w-4 h-4" />
                Date *
              </label>
              <input
                type="date"
                value={date}
                min={getTodayDate()}
                onChange={(e) => setDate(e.target.value)}
                className="w-full  px-4 py-3 border border-slate-200 rounded-xl text-sm 
                  focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 
                  transition-all duration-300 bg-white hover:border-slate-300"
              />
            </div>

            {/* Time Slot */}
            <div className="space-y-2 group">
              <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 transition-colors group-focus-within:text-teal-600">
                <Clock className="w-4 h-4" />
                Time Slot *
              </label>
               <select
          value={timeSlot}
          onChange={(e) => setTimeSlot(e.target.value)}
          className="w-full p-3 border border-slate-200 bg-white hover:border-slate-300 rounded-xl"
        >
          <option value="">Select Time Slot</option>
          {filteredSlots.length === 0 && (
            <option disabled>No slots available</option>
          )}
          {filteredSlots.map((slot) => (
            <option key={slot} value={slot}>
              {slot}
            </option>
          ))}
        </select>
            </div>
          </div>

          {/* Address */}
          <div className="space-y-2 group">
            <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 transition-colors group-focus-within:text-teal-600">
              <MapPin className="w-4 h-4" />
              Service Address *
            </label>
            <textarea
              placeholder="Enter your complete address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              rows={3}
              className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm 
                focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 
                transition-all duration-300 bg-white hover:border-slate-300 resize-none"
            />
            <button
      type="button"
      onClick={()=> getLiveLocation(false)}
      className="rounded-lg bg-teal-600 px-3 py-2 text-xs font-medium text-white cursor-pointer hover:bg-teal-700"
    >
      <span className="flex gap-2 mt-2"> <MapPinPlus /> Use Live Location</span>
    </button>
          </div>

          {/* Notes */}
          <div className="space-y-2 group">
            <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 transition-colors group-focus-within:text-teal-600">
              <FileText className="w-4 h-4" />
              Additional Notes (Optional)
            </label>
            <textarea
              placeholder="Any specific requirements or instructions..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
              className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm 
                focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 
                transition-all duration-300 bg-white hover:border-slate-300 resize-none"
            />
          </div>

          {/* Payment Method */}
          <div className="space-y-2 group">
            <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 transition-colors group-focus-within:text-teal-600">
              <CreditCard className="w-4 h-4" />
              Payment Method *
            </label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm 
                focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 
                transition-all duration-300 bg-white hover:border-slate-300"
            >
              <option value="cod">Cash on Delivery</option>
              <option value="online">Online Payment</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="group w-full rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-base 
              font-semibold py-3.5 hover:from-emerald-700 hover:to-teal-700 
              disabled:from-slate-300 disabled:to-slate-300 disabled:cursor-not-allowed 
              transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/30 hover:-translate-y-0.5
              active:translate-y-0 flex items-center justify-center cursor-pointer gap-2"
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Processing...
              </>
            ) : (
              <>
                <CheckCircle2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Confirm Booking
              </>
            )}
          </button>

          {/* Info Box */}
          <div className="bg-teal-50 border border-teal-100 rounded-xl p-4">
            <p className="text-xs text-teal-700 text-center">
              🔒 Your information is secure. We'll contact you shortly to confirm your booking.
            </p>
          </div>
        </form>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

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
      `}</style>
    </div>
  );
};

export default BookingPage;