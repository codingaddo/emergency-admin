import { useMutation } from "@tanstack/react-query";
// import { useNavigate } from "react-router-dom";
import { forgotPassword } from "../services/apitAuth";
import toast from "react-hot-toast";

export interface ResetInface {
  email: string;
}

export const useForgortPassword = () => {
  //   const navigate = useNavigate();

  const {
    mutate: forgotPasswordFn,
    isPending: isLoading,
    error,
  } = useMutation({
    mutationFn: async (email: ResetInface) => {
      const res = await forgotPassword(email);

      return res;
    },
    onSuccess: () => {
      toast.success("Reset token sent to your mail");
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.message);
    },
  });

  return { forgotPasswordFn, isLoading, error };
};
