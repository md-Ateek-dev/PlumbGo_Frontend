import Client from "./Client";

export const submitContactForm = (data) => {
  return Client.post("/Contact", data);
};
