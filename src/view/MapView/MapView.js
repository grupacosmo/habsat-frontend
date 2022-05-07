import React, { useEffect, useState } from "react";
import { Layout, Slider, Table, Row, Col } from "antd";
import "./MapView.css";
import Map from "../../component/Map/Map";
import axios from "axios";
import formatcoords from "formatcoords"
import { geoDataApiPath } from "../../assets/properties"
import SockJsClient from 'react-stomp';
import MapNavbarSection from "../../container/MapNavbarSection/MapNavbarSection";
import ChartTile from "../../component/ChartTile/ChartTile";


const { Content } = Layout


const formatDate = (dateString) => {
    const date = new Date(dateString)
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yyyy = date.getFullYear();
    let hh = date.getHours();
    let mi = date.getMinutes();
    dd = dd < 10 ? `0` + dd : dd;
    mm = mm < 10 ? `0` + mm : mm;
    hh = hh < 10 ? `0` + hh : hh;
    mi = mi < 10 ? `0` + mi : mi;

    return `${dd}/${mm}/${yyyy} ${hh}:${mi}`;
}

const columns = [
    {
        title: 'Time',
        dataIndex: 'time',
        key: 'time',
        render: time => {
            return formatDate(new Date(time))
        }
    },
    {
        title: 'Altitude',
        dataIndex: 'altitude',
        key: 'altitude',
        render: altitude => {
            return altitude
        }
    },
    {
        title: 'Longitude',
        dataIndex: 'longitude',
        key: 'longitude',
        render: longitude => {
            return longitude
        }
    },
    {
        title: 'Latitude',
        dataIndex: 'latitude',
        key: 'latitude',
        render: latitude => {
            return latitude
        }
    },
    {
        title: 'Temperature [°C]',
        dataIndex: 'temperature',
        key: 'temperature',
        render: temperature => {
            return temperature
        }
    }

];

const MapView = () => {
    const dataFramePath = `${geoDataApiPath}/data-frame`;
    const [geoData, setGeoData] = useState([
        {
          id: null,
          speed: 7.4,
          altitude: 3740.1,
          longitude: 19.7946,
          latitude: 50.3771,
          temperature: 17.82,
          time: "2022-05-07T13:05:17.423216",
          rssi: -112
        },
        {
          id: null,
          speed: 6.4,
          altitude: 3389.1,
          longitude: 19.7899,
          latitude: 50.377,
          temperature: 18.72,
          time: "2022-05-07T13:04:17.445379",
          rssi: -116
        },
        {
          id: null,
          speed: 7.51,
          altitude: 3049,
          longitude: 19.7847,
          latitude: 50.3771,
          temperature: 19.68,
          time: "2022-05-07T13:03:17.451264",
          rssi: -117
        },
        {
          id: null,
          speed: 5.52,
          altitude: 2710,
          longitude: 19.7805,
          latitude: 50.3767,
          temperature: 20.48,
          time: "2022-05-07T13:02:17.485761",
          rssi: -117
        },
        {
          id: null,
          speed: 1.43,
          altitude: 2360.4,
          longitude: 19.777,
          latitude: 50.3769,
          temperature: 21.52,
          time: "2022-05-07T13:01:17.52152",
          rssi: -117
        },
        {
          id: null,
          speed: 4.79,
          altitude: 1993.1,
          longitude: 19.7725,
          latitude: 50.3764,
          temperature: 22.57,
          time: "2022-05-07T13:00:17.541732",
          rssi: -120
        },
        {
          id: null,
          speed: 0.75,
          altitude: 1623.4,
          longitude: 19.7702,
          latitude: 50.3771,
          temperature: 23.75,
          time: "2022-05-07T12:59:17.671272",
          rssi: -118
        },
        {
          id: null,
          speed: 4.11,
          altitude: 1334.5,
          longitude: 19.7693,
          latitude: 50.3777,
          temperature: 24.99,
          time: "2022-05-07T12:58:17.744185",
          rssi: -110
        },
        {
          id: null,
          speed: 8.17,
          altitude: 1029.6,
          longitude: 19.7683,
          latitude: 50.3789,
          temperature: 25.88,
          time: "2022-05-07T12:57:17.869555",
          rssi: -119
        },
        {
          id: null,
          speed: 8,
          altitude: 620.1,
          longitude: 19.7667,
          latitude: 50.3797,
          temperature: 26.63,
          time: "2022-05-07T12:56:18.015963",
          rssi: -117
        },
        {
          id: null,
          speed: 0.25,
          altitude: 381.3,
          longitude: 19.7663,
          latitude: 50.3805,
          temperature: 27.16,
          time: "2022-05-07T12:55:18.152254",
          rssi: -85
        },
        {
          id: null,
          speed: 0.11,
          altitude: 383,
          longitude: 19.7662,
          latitude: 50.3805,
          temperature: 26.99,
          time: "2022-05-07T12:54:18.402454",
          rssi: -75
        },
        {
          id: null,
          speed: 0.03,
          altitude: 389.1,
          longitude: 19.7661,
          latitude: 50.3805,
          temperature: 26.81,
          time: "2022-05-07T12:53:18.55826",
          rssi: -87
        },
        {
          id: null,
          speed: 0.78,
          altitude: 380.5,
          longitude: 19.7662,
          latitude: 50.3805,
          temperature: 26.64,
          time: "2022-05-07T12:52:18.161416",
          rssi: -87
        },
        {
          id: 1,
          speed: 0.07,
          altitude: 384.9,
          longitude: 19.7662,
          latitude: 50.3806,
          temperature: 25.3,
          time: "2022-05-07T11:57:21.060202",
          rssi: -52
        }
      ]);
    const [sliderValue, setSliderValue] = useState(0);
    const [startDate, ] = useState(new Date(2022, 4, 7, 12, 0))
    const [currentDate, setCurrentDate] = useState(new Date())
    // const [temperatureData, setTemperatureData] = useState(geoData.map(data => {
    //     return { primary: data.dataTime, secondary: data.temperatureInCelsius };
    // }));

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(new Date())
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        axios.get(dataFramePath).then(resp => {
            let points = resp.data.reverse();
            points = points.filter(point => {
                if(point.latitude === 0) {
                    return false
                } else if (point.longitude === 0) {
                    return false
                } else {
                    return true
                }
            })
            console.log(points)
            setGeoData(points);
            setSliderValue(points.length);
        });

    }, [dataFramePath])

    function onChange(value) {
        setSliderValue(() => value);
    }

    function onAfterChange() {
    }

    return (
        <Layout>
            <MapNavbarSection />
            <Content className="MapViewContainer">
                {
                    currentDate < startDate ?
                        <div>Oczekiwanie. Śledzenie na żywo na mapie będzie dostępne 07.05.2022 12:00.</div>
                    :
                        <></>
                }
                <Map geoData={geoData} sliderValue={sliderValue} pathLength={geoData.length} formatDate={formatDate} />
                <div className="SliderContainer">
                    {
                        geoData.length > 0 ?
                            <Slider
                                reverse
                                min={1}
                                max={geoData.length}
                                onChange={onChange}
                                onAfterChange={onAfterChange}
                                tipFormatter={(value) => `${formatDate(geoData[value - 1].time)}`}
                                value={sliderValue}
                            />
                            :
                            null

                    }
                </div>
                <Row gutter={[16, 16]} style={{ margin: "0 auto" }}>
                    <Col span={14}>
                        <Table
                            rowKey="dateTime"
                            columns={columns}
                            dataSource={geoData}
                            pagination={{
                                pageSize: 20,
                                showSizeChanger: false,
                                simple: (window.matchMedia('(max-width: 600px)').matches)
                            }}
                            scroll={{ x: 400 }}
                        />
                    </Col>

                    <Col span={10}>
                        <Row gutter={[0, 16]} style={{ margin: "0 auto" }}>
                            <Col span={24}>
                                {geoData.length > 0 ?
                                    <ChartTile title="Temperature" label="[°C]" data={geoData.map(data => {
                                        return { date: new Date(data.time), value: data.temperature, key: data };
                                    })} /> : <></>}
                            </Col>
                            <Col span={24}>
                                {geoData.length > 0 ?
                                    <ChartTile title="Height" label="[m]" data={geoData.map(data => {
                                        return { date: new Date(data.time), value: data.altitude, key: data };
                                    }).slice(-20)} /> : <></>}
                            </Col>
                            <Col span={24}>
                                {geoData.length > 0 ?
                                    <ChartTile title="RSSI" label="" data={geoData.map(data => {
                                        return { date: new Date(data.time), value: data.rssi, key: data };
                                    }).slice(-20)} /> : <></>}
                            </Col>
                        </Row>
                    </Col>

                </Row>

            </Content>
            <SockJsClient url={`${geoDataApiPath}/ws`} topics={['/data/ws']}
                onMessage={(dataFrame) => {
                    setGeoData([dataFrame,...geoData,]);
                    // setTemperatureData([...temperatureData], dataFrame.map(data => { return { primary: data.dataTime, secondary: data.temperatureInCelsius }; }));
                    if (sliderValue === geoData.length) {
                        setSliderValue(sliderValue + 1);
                    }
                }}
            />
        </Layout>
    )
}

export default MapView;