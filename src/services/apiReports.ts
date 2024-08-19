import { API } from "./apitAuth";

export const getReports = async () => {
  try {
    const token = await localStorage.getItem("token");
    if (token) {
      API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    const response = await API.get("/reports", {
      headers: { "Content-Type": "application/json" },
    });

    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch reports");
  }
};
