import Clients from "./Client";

// USER submits review
export const submitTestimonial = (data) =>
  Clients.post("/testimonials", data);

// USER sees approved testimonials
export const getTestimonials = () =>
  Clients.get("/testimonials");
