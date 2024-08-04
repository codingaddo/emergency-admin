interface BtnForm {
  label: string;
  disable: boolean;
  onClick?: () => void;
  del?: boolean;
}
const FormBtn = ({ label, disable, onClick, del }: BtnForm) => {
  if (onClick) {
    return (
      <button
        onClick={onClick}
        disabled={disable}
        className={`w-32 shadow rounded-md ${
          del ? "bg-red-500 hover:bg-red-700" : "bg-blue-950 hover:bg-[#2e4d64]"
        }  text-white py-2 font-medium  transition-all duration-300`}
      >
        {label}
      </button>
    );
  }

  return (
    <button
      type="submit"
      disabled={disable}
      className="w-80 shadow rounded-md transition-all duration-300 bg-blue-950 text-white py-2 font-medium  hover:bg-[#2e4d64]"
    >
      {label}
    </button>
  );
};

export default FormBtn;
