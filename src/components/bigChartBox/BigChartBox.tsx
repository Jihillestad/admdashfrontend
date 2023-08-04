import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import "./bigChartBox.scss";

type Props = {
  title: string;
  dataKey0: string;
  dataKey1: string;
  dataKey2: string;
  dataKey3: string;
  chartData: object[];
};

const BigChartBox = (props: Props) => {
  return (
    <div className="bigChartBox">
      <h1>{props.title}</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart
            data={props.chartData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey={props.dataKey0} />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey={props.dataKey1}
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey={props.dataKey2}
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey={props.dataKey3}
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BigChartBox;
