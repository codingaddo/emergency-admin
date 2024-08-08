import { useQuery } from "@tanstack/react-query";

const getUser = async () => {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");

  if (!token || !user) {
    throw new Error("No token or user data found");
  }

  return JSON.parse(user); // Parse user data from local storage
};

export const useAuth = () => {
  const {
    data: user,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["user"], // React Query v5 uses `queryKey` instead of the positional parameter
    queryFn: getUser,
    // cacheTime: 10 * 60 * 1000, // Cache time in milliseconds (10 minutes)
    staleTime: 0, // Data is considered stale immediately
  });

  return { user, isLoading, isError };
};
