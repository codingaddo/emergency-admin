import { useQuery } from "@tanstack/react-query";
import { getReports } from "../services/apiReports.ts";

export const useGetReports = () => {
  const {
    data: reports,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["reports"],
    queryFn: () => getReports(),
  });

  return {
    reports,
    isLoading,
    refetch,
  };
};
