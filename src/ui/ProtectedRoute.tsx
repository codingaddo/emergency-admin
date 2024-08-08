import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/getUser";

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
  const navigete = useNavigate();
  const { user, isLoading } = useAuth();
  // const isAuthenticated = false;
  // const isLoading = false;
  //1. Load the authenticated user

  //2. If there is no aunthenticated user, redirect to login page
  useEffect(
    function () {
      if (!user && !isLoading) {
        navigete("/login");
      }
    },
    [user, isLoading, navigete]
  );

  //3. Show a spinner while loading the user
  if (isLoading)
    return (
      <div className="bg-img">
        <div className="content">
          <div>
            <div className="spinner"></div>
            <h1 className="text-3xl font-medium text-red-50 animate-pulse">
              Authenticating . . .
            </h1>
          </div>
        </div>
      </div>
    );

  //4. If there is an authenticated user render the app
  if (user?.data?.user.role !== "admin")
    return <h1>You don't have access to this resouce</h1>;
  if (user?.data?.user?.role === "admin") return children;
}

export default ProtectedRoute;
