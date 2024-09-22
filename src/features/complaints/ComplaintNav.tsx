import { useGetReports } from "../../hooks/useGetReports";

const ComplaintNav = () => {
  const { reports, isLoading, error } = useGetReports();

  return (
    <div className="flex py-3 sm:flex-col  md:flex-row justify-between items-center">
      <h2 className="md:text-lg sm:text-2xl font-semibold text-blue-950">
        Total Reports
        <span className="px-4 text-2xl">
          {isLoading || error ? "" : reports?.data?.length}
        </span>
      </h2>
      <div className="hidden  gap-2 py-3 ">
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
        active === true ? " bg-slate-500 " : "bg-blue-950 "
      } bg-blue-950 rounded-lg  hover:bg-[#2e4d64] w-[100px]  p-[8px]`}
    >
      {name}
    </button>
  );
};
