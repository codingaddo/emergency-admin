import Container from "../features/dashboard/Container";
import { FaCircleUser } from "react-icons/fa6";
import { MdOutlineReport } from "react-icons/md";
import { MdDashboard, MdToday } from "react-icons/md";
import { HiUsers } from "react-icons/hi2";
import { CgViewMonth } from "react-icons/cg";
import Chart from "../features/dashboard/Chart";
import Pichart from "../features/dashboard/MyPieChart";
import ChartLayout from "../ui/ChartLayout";

const Dashboard = () => {
  // if ("Notification" in window && Notification.permission === "granted") {
  //   new Notification("Test Notification", {
  //     body: "This is a test notification.",
  //   });
  // } else {
  //   Notification.requestPermission().then((permission) => {
  //     if (permission === "granted") {
  //       new Notification("Test Notification", {
  //         body: "This is a test notification.",
  //       });
  //     }
  //   });
  // }
  return (
    <div className="sm:pb-10">
      <div className="flex items-center pt-5 gap-2 px-10 ">
        <div className="p-1 bg-blue-100 rounded-lg">
          <MdDashboard size={22} />
        </div>
        <h2 className="text-2xl font-semibold uppercase">Dashboard</h2>
      </div>
      <div className="pt-5 md:pb-10 sm:pb-10 px-3 flex flex-col items-center w-[100%]">
        <div className="flex flex-wrap justify-between sm:justify-center w-[100%] lg:items-start sm:items-center  gap-10">
          <Container
            percent={0.02}
            title="Total"
            num={100}
            icon={<MdOutlineReport size={20} color="white" />}
            bgColor=" bg-red-300"
            color="text-red-400"
          />
          <Container
            percent={0.02}
            title="Month"
            num={20}
            icon={<CgViewMonth size={15} color="white" />}
            bgColor="bg-blue-300"
            color="text-blue-400"
          />
          <Container
            percent={0.02}
            title="Today"
            num={50}
            icon={<MdToday size={15} color="white" />}
            bgColor="bg-red-400"
            color="text-red-600"
          />

          <Container
            percent={
              <div className="p-2 bg-blue-950 rounded-full">
                <FaCircleUser size={15} color="white" />
              </div>
            }
            title="Agents"
            num={20}
            icon={<HiUsers size={15} color="white" />}
            bgColor="bg-blue-950"
            color="text-blue-900"
          />
        </div>
      </div>
      <ChartLayout>
        <Chart />
        <Pichart />
      </ChartLayout>
    </div>
  );
};

export default Dashboard;
