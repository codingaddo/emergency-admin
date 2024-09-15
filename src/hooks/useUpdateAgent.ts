import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateAgent } from "../services/apiAgents";

export const useUpdateAgent = () => {
  const quryClient = useQueryClient();

  const { mutate, isError, isPending } = useMutation({
    mutationFn: async ({ id, userData }) => {
      console.log(id);
      const res = await updateAgent(id, userData);

      return res;
    },
    onSuccess: (user) => {
      if (!user) return;
      quryClient.invalidateQueries({
        queryKey: ["agents"],
      });
      toast.success("User updated successfully");
    },
    onError: (error) => {
      toast.error("Error updating user");
      console.log(error);
    },
  });

  return { mutate, isError, isPending };
};
