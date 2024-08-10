import axios from "axios";

const baseUrl = "https://emergency-reporting-system-2.onrender.com/api/v1";

export interface LoginRequest {
  username: string;
  password: string;
}

const api = axios.create({
  baseURL: baseUrl,
});

export const login = async (loginData: LoginRequest) => {
  try {
    const response = await api.post("/users/login", loginData, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to login");
  }
};

export const logout = async () => {
  try {
    await api.get("/users/logout");
  } catch (error) {
    throw new Error("Failed to logout");
  }
};
