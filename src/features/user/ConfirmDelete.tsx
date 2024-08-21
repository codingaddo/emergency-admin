import React from "react";
import FormBtn from "../../ui/FormBtn";
import { useDeleteReport } from "../../hooks/useDeleteReports";
import { useQueryClient } from "@tanstack/react-query";
// import { useNavigate } from "react-router-dom";

interface ConfirmDeleteProps {
  id: string;
  onClose: () => void;
}

const ConfirmDelete: React.FC<ConfirmDeleteProps> = ({ onClose, id }) => {
  const queryClient = useQueryClient();
  // const navigate = useNavigate();
  const { isDeleting, mutate } = useDeleteReport();
  const handleDelete = () => {
    mutate(id, {
      onSuccess: () => {
        queryClient.invalidateQueries();
        onClose();
      },
    });
  };

  return (
    <div className="flex flex-col items-center justify-center gap-7 h-[280px] max-w-[100%]">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold">
          Are you sure you want to delete
        </h2>
        <p className="text-xl font-normal text-red-500">
          This action cannot be undo
        </p>
      </div>
      <div className="flex gap-10">
        <FormBtn label="Cancel" disable={false} onClick={onClose} />
        <FormBtn
          del={true}
          label={isDeleting ? "Deleting" : "Delete"}
          disable={isDeleting}
          onClick={handleDelete}
        />
      </div>
    </div>
  );
};

export default ConfirmDelete;
