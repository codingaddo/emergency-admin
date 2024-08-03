import { useForm } from "react-hook-form";
const AddUserForm = () => {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return <form></form>;
};

export default AddUserForm;
