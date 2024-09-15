import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteAgent } from "../services/apiAgents";

export const useDeleteAgent = () => {
  const { mutate, isPending: isDeleting } = useMutation({
    mutationFn: async (Id: string) => {
      await deleteAgent(Id);
    },
    onSuccess: () => {
      toast.success("Agent deleted successfully");
    },
    onError: (error) => {
      toast.error("Failed to delete Agent");
      console.log(error);
    },
  });

  return { mutate, isDeleting };
};
