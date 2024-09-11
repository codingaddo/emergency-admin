import { useMutation } from "@tanstack/react-query";
import { PasswordInterface, resetPassword } from "../services/apitAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useResetPaassword = () => {
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationFn: async ({
      token,
      passwordData,
    }: {
      token: string;
      passwordData: PasswordInterface;
    }) => {
      const res = await resetPassword(token, passwordData);

      return res;
    },
    onSuccess: () => {
      toast.success("Success. Redirecting...", { duration: 5000 });
      setTimeout(() => {
        navigate("/login");
      }, 5000);
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  return { mutate, isPending };
};
