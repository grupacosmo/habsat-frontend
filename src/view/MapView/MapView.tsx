import { FC, useEffect, useContext, useState } from "react";
import { Layout, Slider, Table, Row, Col } from "antd";
import "./MapView.css";
import Map from "../../component/Map/Map";
import axios from "axios";
import { geoDataApiPath } from "../../assets/properties";
import SockJsClient from "react-stomp";
import MapNavbarSection from "../../container/MapNavbarSection/MapNavbarSection";
import ChartTile from "../../component/ChartTile/ChartTile";
import { FlightsContext } from "../../Providers/FlightsProvider/FlightsProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import { IDataPoint, flight } from "typings/flights";
import { ColumnsType } from "antd/lib/table";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const { Content } = Layout;

const formatDate = (dateString: string | Date) => {
  const date = new Date(dateString);
  let dd: string | number = date.getDate();
  let mm: string | number = date.getMonth() + 1;
  let yyyy: string | number = date.getFullYear();
  let hh: string | number = date.getHours();
  let mi: string | number = date.getMinutes();
  dd = dd < 10 ? `0` + dd : dd;
  mm = mm < 10 ? `0` + mm : mm;
  hh = hh < 10 ? `0` + hh : hh;
  mi = mi < 10 ? `0` + mi : mi;

  return `${dd}/${mm}/${yyyy} ${hh}:${mi}`;
};

interface IColumns {
  title: string,
  dataIndex: string,
  key: string,
  render: (value: IDataPoint[keyof IDataPoint]) => void
}

const columns:ColumnsType<IDataPoint> = [
  {
    title: "Time",
    dataIndex: "time",
    key: "time",
    render: (time) => {
      return formatDate(new Date(time));
    },
  },
  {
    title: "Altitude",
    dataIndex: "altitude",
    key: "altitude",
    render: (altitude) => {
      return altitude;
    },
  },
  {
    title: "Longitude",
    dataIndex: "longitude",
    key: "longitude",
    render: (longitude) => {
      return longitude;
    },
  },
  {
    title: "Latitude",
    dataIndex: "latitude",
    key: "latitude",
    render: (latitude) => {
      return latitude;
    },
  },
  {
    title: "Temperature [°C]",
    dataIndex: "temperature",
    key: "temperature",
    render: (temperature) => {
      return temperature;
    },
  },
];

const MapView: FC = () => {
  const dataFramePath = `/flight/`;
  const [geoData, setGeoData] = useState<IDataPoint[]>([]);
  const [sliderValue, setSliderValue] = useState<number>(0);
  const [currentDate, setCurrentDate] = useState(new Date());
  const { currentFlight, newest } = useContext(FlightsContext);
  const currentFlightDate = new Date(currentFlight.date);
  // const [temperatureData, setTemperatureData] = useState(geoData.map(data => {
  //     return { primary: data.dataTime, secondary: data.temperatureInCelsius };
  // }));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    axios
      .get(dataFramePath + currentFlight.date?.slice(0, 10))
      .then((resp) => {
        let points:IDataPoint[] = resp.data.flightDataResponseList.reverse();
        points = points.filter((point) => {
          if (point.latitude === 0) {
            return false;
          } else if (point.longitude === 0) {
            return false;
          } else {
            return true;
          }
        });
        console.log(points);
        setGeoData(points);
        setSliderValue(1);
      })
      .catch((err) => console.log(err));
    return () => {
      setGeoData([]);
    };
  }, [dataFramePath, currentFlight]);

  function onChange(value: number) {
    setSliderValue(() => value);
  }

  function onAfterChange() {}

  const responsiveOptionsTable = {
    span: 24,
    order: 2,
  };

  const responsiveOptionsChart = {
    span: 24,
    order: 1,
  };

  const normalOptionsTable = {
    span: 14,
    order: 1,
  };

  const normalOptionsChart = {
    span: 10,
    order: 2,
  };

  return (
    <Layout>
      <MapNavbarSection mode="map" />
      <Content className="MapViewContainer">
        {currentDate < currentFlightDate ? (
          <div className="waiting-container">
            <FontAwesomeIcon icon={faMugHot as IconProp} className="wait-icon" />
            Oczekiwanie
            <p>
              Śledzenie na żywo na mapie będzie dostępne{" "}
              {currentFlightDate.toLocaleString().slice(0, -3)}.
            </p>
          </div>
        ) : (
          <></>
        )}
        <Map
          geoData={geoData}
          sliderValue={sliderValue}
          pathLength={geoData.length}
          formatDate={formatDate}
        />
        <div className="SliderContainer">
          {geoData.length > 0 ? (
            <Slider
              reverse
              min={1}
              max={geoData.length}
              onChange={onChange}
              onAfterChange={onAfterChange}
              tipFormatter={(value = 1) => `${formatDate(geoData[value - 1].time)}`}
              value={sliderValue}
            />
          ) : null}
        </div>
        <Row gutter={[16, 16]} style={{ margin: "0 auto" }}>
          <Col xs={responsiveOptionsTable} lg={normalOptionsTable}>
            <Table
              rowKey="dateTime"
              columns={columns}
              dataSource={geoData}
              pagination={{
                pageSize: 20,
                showSizeChanger: false,
                simple: window.matchMedia("(max-width: 600px)").matches,
              }}
              scroll={{ x: 400 }}
            />
          </Col>

          <Col xs={responsiveOptionsChart} lg={normalOptionsChart}>
            <Row gutter={[0, 16]} style={{ margin: "0 auto" }}>
              <Col span={24}>
                {geoData.length > 0 ? (
                  <ChartTile
                    title="Temperature"
                    label="[°C]"
                    data={geoData.map((data) => {
                      return {
                        date: new Date(data.time),
                        value: data.temperature,
                        key: data,
                      };
                    })}
                  />
                ) : (
                  <></>
                )}
              </Col>
              <Col span={24}>
                {geoData.length > 0 ? (
                  <ChartTile
                    title="Altitude"
                    label="[m]"
                    data={geoData.map((data) => {
                      return {
                        date: new Date(data.time),
                        value: data.altitude,
                        key: data,
                      };
                    })}
                  />
                ) : (
                  <></>
                )}
              </Col>
              <Col span={24}>
                {geoData.length > 0 ? (
                  <ChartTile
                    title="RSSI"
                    label=""
                    data={geoData.map((data) => {
                      return {
                        date: new Date(data.time),
                        value: data.rssi,
                        key: data,
                      };
                    })}
                  />
                ) : (
                  <></>
                )}
              </Col>
            </Row>
          </Col>
        </Row>
      </Content>
      <SockJsClient
        url={`${geoDataApiPath}/ws`}
        topics={["/data/ws"]}
        onMessage={(dataFrame:IDataPoint) => {
          if (currentFlight !== newest) {
            return;
          }

          setGeoData([dataFrame, ...geoData]);
          if (sliderValue === geoData.length) {
            setSliderValue(sliderValue + 1);
          }
        }}
      />
    </Layout>
  );
};

export default MapView;
