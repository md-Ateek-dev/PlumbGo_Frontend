import Client from "./Client";

export const getGalleryImages = () =>
  Client.get("/gallery");
