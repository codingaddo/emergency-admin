import { useQuery } from "@tanstack/react-query";
import { getAgents } from "../services/apiAgents";

export const useGetAgents = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["agents"],
    queryFn: async () => {
      const agents = await getAgents();
      console.log(agents);
      return agents;
    },
  });

  return { data, isLoading };
};
