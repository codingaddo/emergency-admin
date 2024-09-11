import { useForm } from "react-hook-form";
import TextInput from "../ui/TextInput";
import FormBtn from "../ui/FormBtn";
import AppLoader from "../ui/AppLoader";
import { NavLink, useParams } from "react-router-dom";
import { useResetPaassword } from "../hooks/useResetPassword";

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password: "",
      passwordConfirm: "",
    },
  });

  const { mutate, isPending } = useResetPaassword();
  const { token } = useParams(); // Extract the token from the URL
  const password = watch("password");

  const onSubmit = (values: object) => {
    console.log(values);
    console.log(token);
    mutate({ token, passwordData: values });
    // login(values as LoginRequest);
  };

  return (
    <>
      <div className="bg-img">
        <div className="content px-5">
          <div className="bg-[#f1f1f8]  flex gap-5 flex-col justify-center items-center h-[350px] py-14 px-16 rounded-lg shadow">
            <h1 className="text-blue-950 text-2xl font-semibold">
              Reset Password
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <TextInput
                register={register}
                rules={{
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                }}
                title="password"
                placeholder="New password"
                error={errors.password}
                type="password"
              />
              <TextInput
                register={register}
                rules={{
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === password || "Passwords do not match", // Custom validation for matching passwords
                }}
                title="passwordConfirm"
                placeholder="Confirm new password"
                error={errors.passwordConfirm}
                type="password"
              />
              <FormBtn
                label={isPending ? "Reseting..." : "Submit"}
                disable={isPending}
              />
            </form>
            <NavLink
              to={"/login"}
              className="text-red-500 text-2 font-semibold cursor-pointer"
            >
              Back to login
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
