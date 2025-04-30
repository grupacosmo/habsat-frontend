import { useMemo } from 'react';
import { Card } from "antd";
import { AxisOptions, AxisTimeOptions, Chart, ChartValue, UserSerie } from 'react-charts';
import "./ChartTile.css";

interface Props {
  title: string,
  label: string,
  data: DataPoint[]
}

interface DataPoint {
  date: Date | string;
  value: number;
}

function ChartTile(props: Props) {

  const { title, label, data } = props;
  const chartData = useMemo<UserSerie<DataPoint>[]>(() => [
    {
      label: label,
      data: data
    }
  ], [label, data]);
  //console.log(data);

  const primaryAxis = useMemo<AxisTimeOptions<DataPoint>>(() => ({
    getValue: data => data.date as ChartValue<Date>,
    scaleType: 'localTime',
  }), []);

  const secondaryAxes = useMemo<AxisOptions<DataPoint>[]>(() => [{
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