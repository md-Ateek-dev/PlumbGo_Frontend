import Client from "./Client";

// Yahi se hi token uthayenge
const getUserToken = () => localStorage.getItem("plumbgo_user_token");

// NEW BOOKING
export const createBooking = (data) => {
  const token = getUserToken();

  return Client.post("/Bookings", data, {
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  });
};

// MY BOOKINGS
export const getMyBookings = () => {
  const token = getUserToken();

  return Client.get("/Bookings/my", {
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  });
};


// NEW – cancel my booking
export const cancelMyBookings = (id) => {
  const token = getUserToken();

  return Client.delete(`/Bookings/my/${id}`, {
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  });
};
