import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { submitContactForm } from "../Services/ContactUsApi";
import Swal from "sweetalert2";

const ContactPage = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "Plumbing Service",
    message: "",
    city: "",
    preferredTime: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  // Live Location Logic *********
const getLiveLocation = (auto = false) => {
    if (!navigator.geolocation) {
      Swal.fire("Error", "Geolocation not supported", "error");
      return;
    }

    if (!auto) {
      Swal.fire({
        title: "Fetching location...",
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

          const city =
            data.address.city ||
            data.address.town ||
            data.address.village ||
            data.address.suburb ||
            "";

          setForm((prev) => ({ ...prev, city }));

          if (!auto) {
            Swal.fire({
              icon: "success",
              title: "Location Added",
              text: city || "Location detected",
            });
          }
        } catch {
          Swal.fire("Error", "Unable to fetch address", "error");
        }
      },
      () => {
        if (!auto) {
          Swal.fire("Permission Denied", "Location access denied", "error");
        }
      }
    );
  };

  /* -------- AUTO LOCATION ON PAGE LOAD -------- */
  useEffect(() => {
    getLiveLocation(true);
  }, []);
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) {
      Swal.fire({
      icon: "warning",
      title: "Required Fields Missing",
      text: "Name, Phone and Message are required.",
    });
    return;
  }
  
  if (form.phone.length !== 10) {
    Swal.fire({
      icon: "warning",
      title: "Invalid Phone Number",
      text: "Mobile number must be exactly 10 digits.",
    });
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (form.email && !emailRegex.test(form.email)) {
    Swal.fire({
      icon: "warning",
      title: "Invalid Email",
      text: "Please enter a valid email address.",
    });
    return;
  }
  const nameRegex = /^[a-zA-Z\s]+$/;
  if (!nameRegex.test(form.name)) {
    Swal.fire({
      icon: "warning",
      title: "Invalid Name",
      text: "Name should only contain letters and spaces.",
    });
    return;
  }

    try {
      setLoading(true);
      await submitContactForm(form);
Swal.fire({
  icon: "success",
  title: "Message Sent!",
  text: "Hum jald hi aap se contact karenge.",
  confirmButtonColor: "#2563eb"
});
      setForm({
        name: "",
        phone: "",
        email: "",
        subject: "Plumbing Service",
        message: "",
        city: "",
        preferredTime: "",
      });
    } catch (err) {
      console.error("Contact submit error:", err);
      Swal.fire({
  icon: "error",
  title: "Failed!",
  text: err.response?.data?.message || "Please try again.",
  confirmButtonColor: "#e11d48"
});

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-5xl px-4 py-10">
        {/* Intro */}
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-wide text-teal-600">
            Contact PlumbGo
          </p>
          <h1 className="mt-1 text-3xl font-bold text-slate-900">
  Fast & Reliable Leak, Repair and Installation Services
</h1>

          <p className="mt-2 text-sm text-slate-600">
  Fill out the form or contact us directly via call or WhatsApp. We respond quickly.
</p>

        </div>

        <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)]">
          {/* LEFT – Info */}
          <div className="space-y-5">
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h2 className="mb-3 text-lg font-semibold text-slate-900">
                Quick Contact
              </h2>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-slate-500">Phone</p>
                  <a
                    href="tel:+919999999999"
                    className="text-base font-medium text-teal-600 hover:underline"
                  >
                    +91 7054375826
                  </a>
                </div>
                <div>
                  <p className="text-slate-500">WhatsApp</p>
                  <a
                    href="https://wa.me/917054375826?text=Hi%20I%20need%20a%20plumber"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-base font-medium text-teal-600 hover:underline"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
                <div>
                  <p className="text-slate-500">Email</p>
                  <a
                    href="mailto:mohdateek.dev@gmail.com"
                    className="text-sm font-medium text-teal-600 hover:underline"
                  >
                    mohdateek.dev@gamil.com
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h2 className="mb-3 text-lg font-semibold text-slate-900">
                Office & Timing
              </h2>
              <div className="space-y-3 text-sm text-slate-700">
                <div>
                  <p className="text-slate-500">Address</p>
                  <p>
                    PlumbGo Services,
                    <br />
                  kurshi Road, Near Integral University,
                    <br />
                    Lucknow, Uttar Pradesh
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-slate-500">Working Hours</p>
                    <p>Mon – Sun</p>
                    <p>9:00 AM – 9:00 PM</p>
                  </div>
                  <div>
                    <p className="text-slate-500">Service Areas</p>
                    <p>Lucknow & Nearby</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-4 text-xs text-slate-500">
 <iframe
                    className="h-32 w-full"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.276235802433!2d80.99633347523792!3d26.95815027662017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bff2addd9b239%3A0xc21a9bbd557936ec!2sIntegral%20University!5e0!3m2!1sen!2sin!4v1766818587269!5m2!1sen!2sin" allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Location Map"
                  ></iframe>            </div>
          </div>

          {/* RIGHT – Form */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="mb-1 text-lg font-semibold text-slate-900">
              Contact Form
            </h2>
            <p className="mb-4 text-xs text-slate-500">
              * Required all fields. Usually response after 15-30 minutes
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-xs font-medium text-slate-700">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-teal-600 focus:outline-none focus:ring-1 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-medium text-slate-700">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-teal-600 focus:outline-none focus:ring-1 focus:ring-teal-500"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-xs font-medium text-slate-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-teal-600 focus:outline-none focus:ring-1 focus:ring-teal-500"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-medium text-slate-700">
                  Subject
                </label>
                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-teal-600 focus:outline-none focus:ring-1 focus:ring-teal-500"
                >
                  <option value="Plumbing Service">Plumbing Service</option>
                  <option value="Complaint / Issue">Complaint / Issue</option>
                  <option value="Quotation / Pricing">
                    Quotation / Pricing
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="mb-1 block text-xs font-medium text-slate-700">
                  Message / Description *
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-teal-600 focus:outline-none focus:ring-1 focus:ring-teal-500"
                />
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-xs font-medium text-slate-700">
                    Address / Location
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-teal-600 focus:outline-none focus:ring-1 focus:ring-teal-500"
                  />
                  
                </div>
                
                <div>
                  <label className="mb-1 block text-xs font-medium text-slate-700">
                    Preferred Time
                  </label>
                  <input
                    type="text"
                    name="preferredTime"
                    value={form.preferredTime}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-teal-600 focus:outline-none focus:ring-1 focus:ring-teal-500"
                  />
                </div>
              </div>

              <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                {/* <p className="text-xs text-slate-500">
                  We usually reply within{" "}
                  <span className="font-semibold">15–30 minutes</span>. Urgent
                  ho to direct call karein.
                </p> */}
<button
      type="button"
      onClick={()=> getLiveLocation(false)}
      className="rounded-lg bg-teal-600 px-3 py-2 text-xs font-medium text-white cursor-pointer hover:bg-teal-700"
    >
      📍 Use Location
    </button>

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-2 inline-flex items-center justify-center cursor-pointer rounded-lg bg-teal-600 px-5 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-700 disabled:cursor-not-allowed disabled:bg-teal-300 sm:mt-0"
                >
                  {loading ? "Submitting..." : "Submit Request"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
