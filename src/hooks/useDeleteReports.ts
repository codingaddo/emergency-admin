import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteReport } from "../services/apiReports";
import { useNavigate } from "react-router-dom";

export const useDeleteReport = () => {
  const navigate = useNavigate();
  const { mutate, isPending: isDeleting } = useMutation({
    mutationFn: async (reportId: string) => {
      await deleteReport(reportId);
    },
    onSuccess: () => {
      toast.success("Report deleted successfully");
      navigate("/complaints");
    },
    onError: (error) => {
      toast.error("Failed to delete report");
      console.log(error);
    },
  });

  return { mutate, isDeleting };
};
