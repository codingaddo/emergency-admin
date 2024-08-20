interface Props {
  label: string;
  text: string;
}

const ComplaintContainer = ({ text, label }: Props) => {
  return (
    <div className="flex gap-2 items-center">
      <h2 className=" text-lg font-semibold w-32">{label} :</h2>
      <p
        className={`${
          label === "Sender" || label === "Sender name"
            ? "font-normal capitalize"
            : "font-normal"
        }`}
      >
        {text}
      </p>
    </div>
  );
};

export default ComplaintContainer;
