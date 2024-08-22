import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateReport } from "../services/apiReports";
import { useNavigate } from "react-router-dom";

export const useUpdateReport = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isPending: isUpdating } = useMutation({
    mutationFn: async (reportId: string) => {
      await updateReport(reportId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["reports"],
      });
      toast.success("Report updated successfully");
      navigate("/complaints");
    },
    onError: (error) => {
      toast.error("Failed to update report");
      console.log(error);
    },
  });

  return { mutate, isUpdating };
};
