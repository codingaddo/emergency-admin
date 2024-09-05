import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../services/apitAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

interface LoginRequest {
  username: string;
  password: string;
}

export const useLogin = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate, isPending, error } = useMutation({
    mutationFn: async (loginData: LoginRequest) => {
      const user = await login(loginData);

      return user;
    },
    onSuccess: (user) => {
      console.log(user);
      if (!user) return;
      if (
        user.data &&
        user.data.user.role !== "agent" &&
        user.data.user.role !== "admin"
      ) {
        toast.error("Permission denied");
        navigate("/login", { replace: true });
        return;
      }
      if (
        user.data &&
        (user.data.user.role === "admin" || user.data.user.role === "agent")
      ) {
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", user.token);
        queryClient.setQueryData(["user"], user);
        console.log(user);
        toast.success("Logged in successfully");
        navigate("/dashboard", { replace: true });
        return user;
      }
    },
    onError: (error) => {
      console.error("Error during login:", error);
    },
  });

  return { mutate, isPending, error };
};
