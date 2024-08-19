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
      if (!user) return;
      if (user.data && user.data.user.role !== "admin") {
        toast.error("Permission denied");
        navigate("/login", { replace: true });
        return;
      }
      if (user.data && user.data.user.role === "admin") {
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", user.token);
        queryClient.setQueryData(["user"], user);
        navigate("/", { replace: true });
        return user;
      }
    },
    onError: (error) => {
      console.error("Error during login:", error);
    },
  });

  return { mutate, isPending, error };
};
