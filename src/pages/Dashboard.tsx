import Container from "../features/dashboard/Container";
import { FaCircleUser } from "react-icons/fa6";
import { MdOutlineReport } from "react-icons/md";
import { MdDashboard, MdToday } from "react-icons/md";
import { HiUsers } from "react-icons/hi2";
import { CgViewMonth } from "react-icons/cg";
import Chart from "../features/dashboard/Chart";

const Dashboard = () => {
  return (
    <>
      <div className="flex items-center py-5 gap-2 px-10 ">
        <div className="p-1 bg-blue-100 rounded-lg">
          <MdDashboard size={22} />
        </div>
        <h2 className="text-2xl font-semibold">Dashboard</h2>
      </div>
      <div className="pt-5 pb-24 px-3 flex flex-col items-center w-[100%]">
        <div className="flex flex-wrap justify-between items-center  gap-10">
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
      <Chart />
    </>
  );
};

export default Dashboard;
