import React from 'react';
import { Card } from "antd";
import { Chart } from 'react-charts';
import "./ChartTile.css";


function ChartTile(props) {

  const { title, label, data } = props;
  const chartData = React.useMemo(() => [
    {
      label: label,
      data: data
    }
  ], [label, data]);
  //console.log(data);

  const primaryAxis = React.useMemo(() => ({
    getValue: data => data.date,
    scaleType: 'localTime',
  }), []);

  const secondaryAxes = React.useMemo(() => [{
    getValue: data => data.value,
  },], []);

  return (
    <Card title={title} bordered={true} style={{ width: "100%", height: 250 }}>
      <div style={{ width: "100%", height: 150 }}>
        <Chart options={{ data:chartData, primaryAxis, secondaryAxes }} />
      </div>
    </Card>
  );
}
export default ChartTile;