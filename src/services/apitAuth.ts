import axios from "axios";
import toast from "react-hot-toast";

// export const BASE_URL = "http://127.0.0.1:8000/api/v1";
export const BASE_URL =
  "https://emergency-reporting-system-2.onrender.com/api/v1";

export interface PasswordInterface {
  password: string;
  passwordConfirm: string;
}
export interface LoginRequest {
  username: string;
  password: string;
}

export interface ResetInface {
  email: string;
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
    const res = await API.get("/users/logout");
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to logout");
  }
};

export const forgotPassword = async (email: ResetInface) => {
  try {
    const res = await API.post("/users/forgot-password", email, {
      headers: { "Content-Type": "application/json" },
    });
    console.log(res);
    return res.data;
  } catch (error: any) {
    console.log(error.response.data.message);
    if (error.response.status === 404) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Failed, Please try again");
    }
  }
};

export const resetPassword = async (
  token: string,
  passwordData: PasswordInterface
) => {
  try {
    const res = await API.patch(
      `/users/reset-password/${token}`,
      passwordData,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    console.log(res);
    return res.data;
  } catch (error: any) {
    console.log(error.response.data.message);
    throw new Error(error.response.data.message);
  }
};
