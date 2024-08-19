import { useQuery } from "@tanstack/react-query";

const getUser = async () => {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");

  if (!token || !user) {
    throw new Error("No user data found");
  }

  return JSON.parse(user);
};

export const useAuth = () => {
  const {
    data: user,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });

  return { user, isLoading, isError, refetch };
};
