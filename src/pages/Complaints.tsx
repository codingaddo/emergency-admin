import { NavLink, Outlet, useLocation } from "react-router-dom";
import ComplaintContainer from "../features/complaints/ComplaintContainer";
import ComplaintNav from "../features/complaints/ComplaintNav";
import { useGetReports } from "../hooks/useGetReports";
import AppLoader from "../ui/AppLoader";

const array = [1, 2, 3, 4, 5];

const Complaints = () => {
  const location = useLocation();
  const { reports, isLoading } = useGetReports();
  if (!isLoading) {
    console.log(reports.data);
  }

  if (location.pathname.includes("report-details"))
    return (
      <div>
        <Outlet />
      </div>
    );
  return (
    <div className="px-5 flex flex-col gap-5 pb-24">
      <ComplaintNav />

      {
        isLoading
          ? array.map((item, index) => <Loading key={index} />)
          : // <div className="spinner"></div>
            reports?.data?.map((report) => (
              <NavLink
                key={report._id}
                to={`report-details/${report._id}`}
                className="flex flex-col gap-2 shadow rounded-md px-4 py-5 cursor-pointer hover:bg-slate-200"
                title="preview"
              >
                <ComplaintContainer label="Id#" text={report._id} />
                <ComplaintContainer
                  label="Description"
                  text={report.description || "N/A"}
                />
                <ComplaintContainer
                  label="Sender name"
                  text={report.sender_name || "N/A"}
                />
                <ComplaintContainer
                  label="Location"
                  text={report.location || "N/A"}
                />
                <ComplaintContainer label="Status" text={report.status} />
              </NavLink>
            ))
        // <p>Data has arrived</p>
      }
    </div>
  );
};

export default Complaints;

const Loading = () => {
  return (
    <div className="flex gap-2 items-center bg-slate-200 h-60 rounded  animate-pulse w-full"></div>
  );
};
