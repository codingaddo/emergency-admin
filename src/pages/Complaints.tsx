import { NavLink, Outlet, useLocation } from "react-router-dom";
import ComplaintContainer from "../features/complaints/ComplaintContainer";
import ComplaintNav from "../features/complaints/ComplaintNav";
import { useGetReports } from "../hooks/useGetReports";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { connectSocket, disconnectSocket, socket } from "../services/socket";
// import { requestNotificationPermission } from "../features/complaints/notification";

const array = [1, 2, 3, 4, 5];

const Complaints = () => {
  const location = useLocation();
  const queryClient = useQueryClient();
  const { reports, isLoading, error } = useGetReports();

  // useEffect(() => {
  //   requestNotificationPermission();
  // }, []);

  useEffect(() => {
    connectSocket();

    socket.on("new-report", (newReport) => {
      // Update the React Query cache with the new report
      queryClient.setQueryData(["reports"], (oldReports) => {
        return oldReports ? [newReport, ...oldReports] : [newReport];
      });
      setTimeout(() => {
        if ("Notification" in window && Notification.permission === "granted") {
          console.log("Starting notification");
          new Notification("Test Notification", {
            body: "This is a test notification.",
          });
        }
      }, 500);
    });

    return () => {
      socket.off("new-report");
      disconnectSocket();
    };
  }, [queryClient]);

  if (location.pathname.includes("report-details"))
    return (
      <div>
        <Outlet />
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center py-24">
        <h1 className="text-2xl text-blue-950 font-bold">
          Failed to get reports ☹️
        </h1>
      </div>
    );
  return (
    <div className="px-5 flex flex-col gap-5 pb-24">
      <ComplaintNav />

      {
        isLoading && !error
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
                  text={report.sender.name || "N/A"}
                />
                <ComplaintContainer
                  label="Location"
                  text={report.locationName || "N/A"}
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
    <div className="flex gap-2 items-center bg-slate-400 h-60 rounded  animate-pulse w-full"></div>
  );
};
