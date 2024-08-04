// src/components/DeleteConfirmation.tsx
import React from "react";
// import { useMutation, useQueryClient } from 'react-query';
import FormBtn from "../../ui/FormBtn";

interface ConfirmDeleteProps {
  //   userId: number;
  //   username: string;
  onClose: () => void;
}

const ConfirmDelete: React.FC<ConfirmDeleteProps> = ({ onClose }) => {
  //   const queryClient = useQueryClient();

  //   const mutation = useMutation({
  //     mutationFn: async () => {
  //       await axios.delete(`https://api.example.com/users/${userId}`);
  //     },
  //     onSuccess: () => {
  //       queryClient.invalidateQueries('users');
  //       onClose();
  //     },
  //   });

  //   const handleDelete = () => {
  //     mutation.mutate();
  //   };

  return (
    <div className="flex flex-col items-center justify-center gap-7 h-[280px]">
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
        <FormBtn del label="Delete" disable={false} onClick={onClose} />
      </div>
    </div>
  );
};

export default ConfirmDelete;
