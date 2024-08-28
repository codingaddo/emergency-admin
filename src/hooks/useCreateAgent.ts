import { useMutation } from "@tanstack/react-query";
import { createAgent } from "../services/apiAgents";
import toast from "react-hot-toast";

interface userData {
  name: string;
  email: string;
  phone: string;
}

export const useCreateAgent = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: async (userData: userData) => {
      const user = await createAgent(userData);

      return user;
    },

    onSuccess: (user) => {
      //   if (!user) return;
      //   quryClient.invalidateQueries({
      //     queryKey: ["users"],
      //   });
      console.log(user);
      toast.success("User created successfully");
    },
    onError: (error) => {
      toast.error("Error creating user");
      console.log(error);
    },
  });

  return { mutate, isPending };
};
