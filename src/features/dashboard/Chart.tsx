import {
  ResponsiveContainer,
  Tooltip,
  Area,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { sampleReports } from "../../helpers/sampleData";
import { transformAreaChartDataByMonth } from "../../helpers/transformData";
import MyPieChart from "./MyPieChart";
const Chart = () => {
  const reports = transformAreaChartDataByMonth(sampleReports);
  return (
    <div className="sm:pb-24 pb-5">
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={reports}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="count"
            stroke="#87d1f8"
            fill="#87d1f8"
          />
        </AreaChart>
      </ResponsiveContainer>
      <MyPieChart />
    </div>
  );
};

export default Chart;
