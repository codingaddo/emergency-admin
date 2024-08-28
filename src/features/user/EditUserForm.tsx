import { useForm } from "react-hook-form";
import TextInput from "../../ui/TextInput";
import FormBtn from "../../ui/FormBtn";
import { useEffect } from "react";

interface userData {
  name: string;
  email: string;
  phone: string;
}

const EditUserForm = (data) => {
  const {
    handleSubmit,
    reset,
    register,
    // getValues,
    formState: { isDirty },
  } = useForm();
  useEffect(() => {
    if (data) {
      console.log(data.data.name);
      reset({
        name: data.data.name,
        email: data.data.email,
        phone: data.data.phone,
      });
    }
  }, [data, reset]);

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form
      className="flex flex-col gap-3 items-center justify-center  "
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextInput
        register={register}
        label="Full name"
        title="name"
        placeholder="Agent full name"
        rules={{ required: "Agent name is required" }}
      />
      <TextInput
        register={register}
        label="Email"
        title="email"
        placeholder="Agent email"
        rules={{
          required: "Email is required",
          pattern: {
            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            message: "Invalid email address",
          },
        }}
      />
      <TextInput
        register={register}
        label="Phone"
        title="phone"
        placeholder="Agent phone"
        rules={{
          required: "Phone number is required",
          // pattern: {
          //   value: /^\+?[1-9]\d{1,14}$/,
          //   message: "Invalid phone number",
          // },
        }}
      />
      <FormBtn label={"Edit"} disable={!isDirty} />
    </form>
  );
};

export default EditUserForm;
