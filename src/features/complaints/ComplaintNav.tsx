const ComplaintNav = () => {
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-lg font-semibold text-blue-950">All Reports</h2>
      <div className="flex  gap-2 py-3 ">
        <Button name="All" onclick={() => console.log("hello")} active={true} />
        <Button
          name="Pending"
          onclick={() => console.log("hello")}
          active={false}
        />
        <Button
          name="Resolved"
          onclick={() => console.log("hello")}
          active={false}
        />
      </div>
    </div>
  );
};

export default ComplaintNav;

interface LinkProps {
  name: string;
  onclick: () => void;
  active: boolean;
}
const Button = ({ name, onclick, active }: LinkProps) => {
  return (
    <button
      onClick={onclick}
      className={`text-center text-slate-50 ${
        active === true ? "bg-blue-900" : "bg-blue-950 "
      } bg-blue-950 rounded-lg  hover:bg-[#2e4d64] w-[100px]  p-[8px]`}
    >
      {name}
    </button>
  );
};
