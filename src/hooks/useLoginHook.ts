import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../services/apitAuth";
import { setUser } from "../features/slices/userSlice";
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";

interface LoginRequest {
  username: string;
  password: string;
}

export const useLogin = () => {
  // const navigate = useNavigate();
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const { mutate, isPending, error } = useMutation({
    mutationFn: async (loginData: LoginRequest) => {
      const user = await login(loginData);
      dispatch(setUser({ user: user, token: user.token }));
      localStorage.setItem("token", user.token);
      localStorage.setItem("user", JSON.stringify(user));

      return user;
    },
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user);
      // navigate("/", { replace: true });

      console.log(user);
      return user;
    },
    onError: (error) => {
      console.error("Error during login:", error);
    },
  });

  return { mutate, isPending, error };
};
