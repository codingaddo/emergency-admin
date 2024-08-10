import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/getUser";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import { useCallback, useEffect } from "react";
import AppLoader from "./AppLoader";

export interface User {
  id: string;
  username: string;
  email: string;
  token: string;
}

interface ProtectProps {
  children: React.ReactNode;
}
function ProtectedRoute({ children }: ProtectProps) {
  const navigate = useNavigate();
  const { user, isLoading } = useAuth();
  const queryClient = useQueryClient();
  const isAuthenticated = user?.data?.user?.role === "admin";

  const clearUser = useCallback(async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    queryClient.invalidateQueries({
      queryKey: ["user"],
    });
  }, [queryClient]);

  //2. If there is no aunthenticated user or uset is not an admin, redirect to login page
  useEffect(() => {
    const checkUser = async () => {
      if (isLoading) return;
      if (!user || (user.data && user.data.user.role !== "admin")) {
        toast.error("Permission denied");
        await clearUser();
        navigate("/login");
        return;
      }
    };

    checkUser();
  }, [user, isLoading, navigate, clearUser]);

  //3. Show a spinner while loading the user
  if (isLoading) return <AppLoader />;

  //4. If there is an authenticated user render the app

  if (!isLoading && isAuthenticated) return children;

  return null;
}

export default ProtectedRoute;
