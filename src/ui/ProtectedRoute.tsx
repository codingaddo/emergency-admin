import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/getUser";
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
  const { user, isLoading } = useAuth();
  const isAuthenticated = user?.data?.user?.role === "admin";
  const navigate = useNavigate();

  //1. Show a spinner while loading the user
  if (isLoading) return <AppLoader />;

  if (!isAuthenticated) {
    navigate("/login", { replace: true });
    return;
  }

  //2. If there is an authenticated user render the app
  if (!isLoading && isAuthenticated) return children;

  return null;
}

export default ProtectedRoute;
