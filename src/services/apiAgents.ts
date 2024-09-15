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

export const deleteAgent = async (id: string) => {
  try {
    const token = await localStorage.getItem("token");
    if (token) {
      API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    await API.delete(`users/delete-user/${id}`, {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete user");
  }
};

export const updateAgent = async (id: string, userData: object) => {
  try {
    const token = localStorage.getItem("token");
    if (token) {
      API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    const res = await API.patch(`/users/update-user/${id}`, userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
