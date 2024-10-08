import { useForm } from "react-hook-form";
import TextInput from "../../ui/TextInput";
import FormBtn from "../../ui/FormBtn";
import { useCreateAgent } from "../../hooks/useCreateAgent";

interface userData {
  name: string;
  email: string;
  phone: string;
}

const AddUserForm = () => {
  const { mutate, isPending } = useCreateAgent();
  const {
    handleSubmit,
    reset,
    register,
    // getValues,
    formState: { errors },
  } = useForm({
    defaultValues: { name: "", email: "", phone: "" },
  });

  const onSubmit = (data: userData) => {
    console.log(data);
    mutate(data, {
      onSuccess: () => {
        reset();
      },
    });
  };
  return (
    <form
      className="flex flex-col gap-3 items-center justify-center  "
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextInput
        register={register}
        label="Full name"
        error={errors.name}
        title="name"
        placeholder="Agent full name"
        rules={{ required: "Agent name is required" }}
      />
      <TextInput
        register={register}
        error={errors.email}
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
        error={errors.phone}
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
      <FormBtn
        label={isPending ? "Adding agent..." : "Add"}
        disable={isPending}
      />
    </form>
  );
};

export default AddUserForm;
