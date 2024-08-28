import { API } from "./apitAuth";

export const createAgent = async (userData: object) => {
  try {
    const token = await localStorage.getItem("token");
    if (token) {
      API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    const res = await API.post("/users/create-agent", userData, {
      headers: { "Content-Type": "application/json" },
    });
    return res.data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update");
  }
};

export const getAgents = async () => {
  try {
    const token = localStorage.getItem("token");
    if (token) {
      API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    const res = await API.get("/users");

    return res.data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update");
  }
};
