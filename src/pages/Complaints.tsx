import { NavLink, Outlet, useLocation } from "react-router-dom";
import ComplaintContainer from "../features/complaints/ComplaintContainer";
import ComplaintNav from "../features/complaints/ComplaintNav";

const Complaints = () => {
  const location = useLocation();

  if (location.pathname.includes("report-details"))
    return (
      <div>
        <Outlet />
      </div>
    );
  return (
    <div className="px-5 flex flex-col gap-5">
      <ComplaintNav />
      <NavLink
        to={"report-details/:12"}
        className="flex flex-col gap-2 shadow rounded-md px-4 py-5 cursor-pointer hover:bg-slate-200"
        title="preview"
      >
        <ComplaintContainer label="Description" text="They stole my car" />
        <ComplaintContainer label="Sender name" text="Addo Michael" />
        <ComplaintContainer label="Location" text="Sunyani Fiapre" />
        <ComplaintContainer label="Status" text="Pending" />
      </NavLink>
      <NavLink
        to={"report-details/13"}
        className="flex flex-col gap-2 shadow rounded-md px-4 py-5 cursor-pointer hover:bg-slate-200"
        title="preview"
      >
        <ComplaintContainer label="Description" text="They stole my car" />
        <ComplaintContainer label="Sender name" text="Addo Michael" />
        <ComplaintContainer label="Location" text="Sunyani Fiapre" />
        <ComplaintContainer label="Status" text="Pending" />
      </NavLink>
    </div>
  );
};

export default Complaints;
