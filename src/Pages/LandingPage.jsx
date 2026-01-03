// import React, { useState, useEffect } from "react";
// import Swal from "sweetalert2";
// import { submitContactForm } from "../Services/ContactUsApi";

// const ContactPage = () => {
//   const [loading, setLoading] = useState(false);
//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     subject: "Plumbing Service",
//     message: "",
//     city: "",
//     preferredTime: "",
//   });

//   /* -------------------- INPUT CHANGE -------------------- */
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   /* -------------------- LIVE LOCATION -------------------- */
//   const getLiveLocation = (auto = false) => {
//     if (!navigator.geolocation) {
//       Swal.fire("Error", "Geolocation not supported", "error");
//       return;
//     }

//     if (!auto) {
//       Swal.fire({
//         title: "Fetching location...",
//         text: "Please allow location access",
//         allowOutsideClick: false,
//         didOpen: () => Swal.showLoading(),
//       });
//     }

//     navigator.geolocation.getCurrentPosition(
//       async (position) => {
//         const { latitude, longitude } = position.coords;

//         try {
//           const res = await fetch(
//             `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
//           );
//           const data = await res.json();

//           const city =
//             data.address.city ||
//             data.address.town ||
//             data.address.village ||
//             data.address.suburb ||
//             "";

//           setForm((prev) => ({ ...prev, city }));

//           if (!auto) {
//             Swal.fire({
//               icon: "success",
//               title: "Location Added",
//               text: city || "Location detected",
//             });
//           }
//         } catch {
//           Swal.fire("Error", "Unable to fetch address", "error");
//         }
//       },
//       () => {
//         if (!auto) {
//           Swal.fire("Permission Denied", "Location access denied", "error");
//         }
//       }
//     );
//   };

//   /* -------- AUTO LOCATION ON PAGE LOAD -------- */
//   useEffect(() => {
//     getLiveLocation(true);
//   }, []);

//   /* -------------------- SUBMIT -------------------- */
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!form.name || !form.phone || !form.message) {
//       Swal.fire("Warning", "Name, Phone and Message are required", "warning");
//       return;
//     }

//     if (form.phone.length !== 10) {
//       Swal.fire("Warning", "Phone number must be 10 digits", "warning");
//       return;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (form.email && !emailRegex.test(form.email)) {
//       Swal.fire("Warning", "Invalid email address", "warning");
//       return;
//     }

//     try {
//       setLoading(true);
//       await submitContactForm(form);

//       Swal.fire({
//         icon: "success",
//         title: "Message Sent!",
//         text: "We will contact you shortly.",
//         confirmButtonColor: "#0f766e",
//       });

//       setForm({
//         name: "",
//         phone: "",
//         email: "",
//         subject: "Plumbing Service",
//         message: "",
//         city: "",
//         preferredTime: "",
//       });
//     } catch (err) {
//       Swal.fire(
//         "Error",
//         err.response?.data?.message || "Something went wrong",
//         "error"
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   /* -------------------- UI -------------------- */
//   return (
//     <div className="min-h-screen bg-white">
//       <div className="mx-auto max-w-3xl px-4 py-10">
//         <h1 className="text-3xl font-bold text-slate-900 mb-6">
//           Contact PlumbGo
//         </h1>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* NAME */}
//           <input
//             type="text"
//             name="name"
//             placeholder="Full Name"
//             value={form.name}
//             onChange={(e) =>
//               setForm({
//                 ...form,
//                 name: e.target.value.replace(/[^a-zA-Z\s]/g, ""),
//               })
//             }
//             className="w-full rounded-lg border px-3 py-2"
//           />

//           {/* PHONE */}
//           <input
//             type="tel"
//             name="phone"
//             placeholder="10-digit Mobile Number"
//             value={form.phone}
//             onChange={(e) =>
//               setForm({
//                 ...form,
//                 phone: e.target.value.replace(/\D/g, "").slice(0, 10),
//               })
//             }
//             className="w-full rounded-lg border px-3 py-2"
//           />

//           {/* EMAIL */}
//           <input
//             type="email"
//             name="email"
//             placeholder="Email (optional)"
//             value={form.email}
//             onChange={handleChange}
//             className="w-full rounded-lg border px-3 py-2"
//           />
// {/* SERVICE / SUBJECT */}
// <div>
//   <label className="block text-xs font-medium text-slate-700 mb-1">
//     Service Required
//   </label>
//   <select
//     name="subject"
//     value={form.subject}
//     onChange={handleChange}
//     className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm
//                focus:border-teal-600 focus:outline-none focus:ring-1 focus:ring-teal-500"
//   >
//     <option value="Plumbing Service">Plumbing Service</option>
//     <option value="Tap Repair">Tap Repair</option>
//     <option value="Pipe Leakage">Pipe Leakage</option>
//     <option value="Bathroom Fitting">Bathroom Fitting</option>
//     <option value="Water Tank Issue">Water Tank Issue</option>
//     <option value="Complaint / Issue">Complaint / Issue</option>
//     <option value="Quotation / Pricing">Quotation / Pricing</option>
//     <option value="Other">Other</option>
//   </select>
// </div>

//           {/* MESSAGE */}
//           <textarea
//             name="message"
//             placeholder="Your Message"
//             rows={4}
//             value={form.message}
//             onChange={handleChange}
//             className="w-full rounded-lg border px-3 py-2"
//           />

//           {/* CITY + LOCATION */}
//           <div className="flex gap-2">
//             <input
//               type="text"
//               name="city"
//               placeholder="Auto-detected location (editable)"
//               value={form.city}
//               onChange={handleChange}
//               className="flex-1 rounded-lg border px-3 py-2"
//             />
//             <button
//               type="button"
//               onClick={() => getLiveLocation(false)}
//               className="rounded-lg bg-teal-600 px-3 py-2 text-white"
//             >
//               📍 Use Location
//             </button>
//           </div>

//           {/* SUBMIT */}
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full rounded-lg bg-teal-600 py-3 text-white font-semibold disabled:opacity-50"
//           >
//             {loading ? "Submitting..." : "Submit Request"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ContactPage;
