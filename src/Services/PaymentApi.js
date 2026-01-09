import Client from "./Client";
import { getUserToken } from "../Services/AuthUser";

// create razorpay order
export const createRazorpayOrder = async (bookingId) => {
  const token = getUserToken();

  return Client.post(
    "/payments/create-order",
    { bookingId },
    {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    }
  );
};

// verify payment
export const verifyRazorpayPayment = async (payload) => {
  const token = getUserToken();

  return Client.post("/payments/verify", payload, {
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  });
};
