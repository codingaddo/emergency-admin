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

export const deleteReport = async (id: string) => {
  try {
    const token = await localStorage.getItem("token");
    if (token) {
      API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    await API.delete(`/reports/deleteReport/${id}`, {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete");
  }
};

export const updateReport = async (id: string) => {
  try {
    const token = await localStorage.getItem("token");
    if (token) {
      API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    await API.patch(`/reports/updateReport/${id}`, {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update");
  }
};
