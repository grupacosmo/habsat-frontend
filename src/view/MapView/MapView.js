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
        title: 'DateTime',
        dataIndex: 'dateTime',
        key: 'dateTime',
        render: dateString => formatDate(dateString)
    },
    {
        title: 'Height [m]',
        dataIndex: 'heightInMeters',
        key: 'height',
        render: height => {
            return height.toFixed(2)
        }
    },
    {
        title: 'Temperature [°C]',
        dataIndex: 'temperatureInCelsius',
        key: 'temp',
        render: height => {
            return height.toFixed(2)
        }
    },
    {
        title: 'Latitude [°]',
        key: 'lat',
        dataIndex: 'latitude',
        render: lat => {
            let [latFormatted] = formatcoords(lat, 0).format({ latLonSeparator: ', ' }).split(",")
            return latFormatted
        }
    },
    {
        title: 'Longitude [°]',
        key: 'lng',
        dataIndex: 'longitude',
        render: lng => {
            let [, lngFormatted] = formatcoords(0, lng).format({ latLonSeparator: ', ' }).split(",")
            return lngFormatted
        }
    },

];

const MapView = () => {
    const dataFramePath = `${geoDataApiPath}/data-frame`;
    const [geoData, setGeoData] = useState([]);
    const [sliderValue, setSliderValue] = useState(0);
    // const [temperatureData, setTemperatureData] = useState(geoData.map(data => {
    //     return { primary: data.dataTime, secondary: data.temperatureInCelsius };
    // }));

    useEffect(() => {
        axios.get(dataFramePath).then(resp => {
            const points = resp.data;
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
                {/*<Map geoData={geoData.slice(0,sliderValue)} pathLength={geoData.length} formatDate={formatDate}/>*/}
                <Map geoData={geoData} sliderValue={sliderValue} pathLength={geoData.length} formatDate={formatDate} />
                <div className="SliderContainer">
                    {
                        geoData.length > 0 ?
                            <Slider
                                min={1}
                                max={geoData.length}
                                onChange={onChange}
                                onAfterChange={onAfterChange}
                                tipFormatter={(value) => `${formatDate(geoData[value - 1].dateTime)}`}
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
                                        return { date: new Date(data.dateTime), value: data.temperatureInCelsius };
                                    }).slice(-20)} /> : <></>}
                            </Col>
                            <Col span={24}>
                                {geoData.length > 0 ?
                                    <ChartTile title="Height" label="[m]" data={geoData.map(data => {
                                        return { date: new Date(data.dateTime), value: data.heightInMeters };
                                    }).slice(-20)} /> : <></>}
                            </Col>
                        </Row>
                    </Col>

                </Row>

            </Content>
            <SockJsClient url={`${geoDataApiPath}/ws`} topics={['/data/ws']}
                onMessage={(dataFrame) => {
                    setGeoData([...geoData, dataFrame]);
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