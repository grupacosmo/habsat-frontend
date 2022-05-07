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
import StaticGeoData from "../../assets/geoData/data-frame.json"


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
    const [geoData, setGeoData] = useState(StaticGeoData.reverse());
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
            // api disabled
            // setGeoData(points); 
            setSliderValue(1);
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