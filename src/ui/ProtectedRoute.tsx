import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface ProtectProps {
  children: React.ReactNode;
}
function ProtectedRoute({ children }: ProtectProps) {
  const navigete = useNavigate();
  const isAuthenticated = true;
  const isLoading = false;
  //1. Load the authenticated user

  //2. If there is no aunthenticated user, redirect to login page
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) {
        navigete("/login");
      }
    },
    [isAuthenticated, isLoading, navigete]
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

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
