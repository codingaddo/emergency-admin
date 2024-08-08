import { useForm } from "react-hook-form";
import TextInput from "../ui/TextInput";
import FormBtn from "../ui/FormBtn";
import { useLogin } from "../hooks/useLoginHook";
import { LoginRequest } from "../services/apitAuth";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate: login, isPending } = useLogin();

  const navigate = useNavigate();
  const onSubmit = (values: object) => {
    navigate("/dashboard", { replace: true });
    login(values as LoginRequest, {
      onSuccess: (data) => {
        console.log(data);
        alert("Success");
      },
      onError: (error) => {
        console.error("Error during login:", error);
        alert("Invalid user name or password");
      },

      onSettled: () => {
        console.log("login settled");
      },
    });
  };
  return (
    <div className="bg-img">
      <div className="content px-5">
        <div className="bg-[#f1f1f8]  flex gap-5 flex-col justify-center items-center h-[350px] py-14 px-16 rounded-lg shadow">
          <h1 className="text-blue-950 text-2xl font-semibold">Login</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <TextInput
              register={register}
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Invalid email address",
                },
              }}
              title="email"
              placeholder="email"
              error={errors.email}
              type="email"
            />
            <TextInput
              register={register}
              rules={{ required: "Password is required" }}
              title="password"
              placeholder="password"
              type="password"
              error={errors.password}
            />
            <FormBtn
              label={isPending ? "loading..." : "Login"}
              disable={isPending}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
