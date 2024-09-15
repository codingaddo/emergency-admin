import React from "react";
import FormBtn from "../../ui/FormBtn";
import { useQueryClient } from "@tanstack/react-query";

interface ConfirmDeleteProps {
  id: string;
  onClose: () => void;
  mutateFunction: (id: string, options: object) => void;
  isMutating: boolean;
}

const ConfirmDelete: React.FC<ConfirmDeleteProps> = ({
  onClose,
  id,
  isMutating,
  mutateFunction,
}) => {
  const queryClient = useQueryClient();
  const handleAction = () => {
    mutateFunction(id, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["reports", "agents"],
        });
        queryClient.invalidateQueries({ queryKey: ["agents"] });
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
          label={isMutating ? "Processing..." : "Confirm"}
          disable={isMutating}
          onClick={handleAction}
        />
      </div>
    </div>
  );
};

export default ConfirmDelete;
