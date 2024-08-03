import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { transformPieChartDataByMonth } from "../../helpers/transformData";
import { sampleReports } from "../../helpers/sampleData";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#FF6384",
  "#36A2EB",
  "#FFCE56",
];

const MyPieChart = () => {
  const data = transformPieChartDataByMonth(sampleReports);

  return (
    <>
      <ResponsiveContainer width={"100%"} height={300}>
        <PieChart>
          <Pie
            data={data}
            cx={"60%"}
            cy={"50%"}
            innerRadius={70}
            outerRadius={90}
            paddingAngle={5}
            labelLine={false}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            verticalAlign="middle"
            align="right"
            width={90}
            layout="vertical"
            iconSize={12}
            iconType="circle"
          />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
};

export default MyPieChart;
