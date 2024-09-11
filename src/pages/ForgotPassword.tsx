import { useForm } from "react-hook-form";
import { useForgortPassword } from "../hooks/useForgortPassword";
import { ResetInface } from "../services/apitAuth";
import FormBtn from "../ui/FormBtn";
import TextInput from "../ui/TextInput";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
    },
  });

  const { forgotPasswordFn, isLoading } = useForgortPassword();
  const [message, setMessage] = useState<string | null>(null);
  const [countdown, setCountdown] = useState<number>(60); // Timer state for resend
  const [canResend, setCanResend] = useState<boolean>(false); // Controls resend button

  // Countdown timer effect
  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else {
      setCanResend(true); // Enable resend when countdown ends
    }
  }, [countdown]);

  const sendToken = (value: ResetInface) => {
    forgotPasswordFn(value as ResetInface, {
      onSuccess: () => {
        console.log(value);
        setMessage(
          `Password reset token sent to ${value.email}. Please check your email.`
        ); // Set success message
        setCountdown(30); // Start 30-second countdown
        setCanResend(false); // Disable resend until countdown completes
      },
      onError: () => {
        setMessage("An error occurred. Please try again."); // Set error message
      },
    });
  };

  const resendLink = () => {
    // Resend link handler
    setMessage(null); // Reset message
    setCountdown(30); // Restart countdown
    setCanResend(false); // Disable resend
  };

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="bg-[#f1f1f8] flex gap-5 flex-col justify-center items-center h-[350px] py-14 px-16 rounded-lg shadow">
        <h1 className="text-2xl font-semibold text-blue-950">Password Reset</h1>
        {!message && <p>Provide your email for a password reset link</p>}
        {message ? (
          <p className="text-green-600 text-center text-lg">{message}</p>
        ) : (
          <form className="space-y-5" onSubmit={handleSubmit(sendToken)}>
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
            <FormBtn
              disable={isLoading}
              label={isLoading ? "Please wait" : "Send Reset Link"}
            />
          </form>
        )}

        {canResend && (
          <NavLink to={"/login"} className={"text-red-500"}>
            <div className="font-bold flex items-center justify-center gap-1">
              <FaArrowLeft size={15} />
              <p>Back to login</p>
            </div>
          </NavLink>
        )}

        {message && !isLoading && (
          <div className={"text-red-500 cursor-pointer"}>
            <div className="font-bold flex flex-col items-center justify-center">
              <button
                onClick={resendLink}
                disabled={!canResend}
                className="mt-4 text-blue-950 py-1 px-4 shadow-xl"
              >
                Resend Link
              </button>
              {!canResend && (
                <span className="text-red-400"> {countdown}s</span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
