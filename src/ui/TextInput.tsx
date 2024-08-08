import { FieldError, UseFormRegister } from "react-hook-form";

interface InputProps {
  label?: string;
  value?: string;
  placeholder?: string;
  //   register: UseFormRegister<any>;
  register: UseFormRegister<any>;

  rules: object;
  title: string;
  error?: FieldError;
  type?: string;
}
const TextInput = ({
  label,
  placeholder,
  rules,
  title,
  error,
  type,
  register,
}: InputProps) => {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={title}
        className="text-sm font-semibold  pb-[1px] text-slate-900 px-1"
      >
        {label}
      </label>
      <input
        type={type || "text"}
        id={title}
        placeholder={placeholder}
        {...register(title, rules)}
        className="border border-slate-400 w-80 py-2 px-4 rounded-md text-sm bg-gray-50 placeholder:text-stone-600  transition-all duration-300 focus:outline-none focus:ring focus:ring-blue-950 focus:ring-opacity-60"
      />
      {error && (
        <p className="text-red-500 text-[12px] px-1">
          {error?.message?.toString()}
        </p>
      )}
    </div>
  );
};

export default TextInput;
