import Clients from "./Client";

export const getBlogs = () => Clients.get("/blogs");

export const getBlogBySlug = (slug) =>
  Clients.get(`/blogs/${slug}`);
