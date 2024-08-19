import axios from "axios";
import toast from "react-hot-toast";

export const BASE_URL =
  "https://emergency-reporting-system-2.onrender.com/api/v1";

export interface LoginRequest {
  username: string;
  password: string;
}

export const API = axios.create({
  baseURL: BASE_URL,
});

API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Check if it's an error response and handle verification-related errors
    if (error.response) {
      const { status, data } = error.response;

      // Handle 400 Bad Request with verification-related message
      if (status === 401 && data.message === "invalid email or password") {
        console.log(data);
        toast.error("Invalid email or password");
        // Optionally, redirect to a help page or take other actions
      }
    } else {
      // Handle network errors or unknown errors
      toast.error("Network error. Please check your connection.");
    }

    return Promise.reject(error);
  }
);

export const login = async (loginData: LoginRequest) => {
  try {
    const response = await API.post("/users/login", loginData, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to login");
  }
};

export const logout = async () => {
  try {
    await API.get("/users/logout");
  } catch (error) {
    throw new Error("Failed to logout");
  }
};
