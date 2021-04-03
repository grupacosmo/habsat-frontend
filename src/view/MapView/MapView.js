import React, {useEffect, useState} from "react";
import {Layout, Slider, Table} from "antd";
import "./MapView.css";
import Map from "../../component/Map/Map";
import axios from "axios";
import formatcoords from "formatcoords"
import {geoDataApiPath} from "../../assets/properties"


const {Content} = Layout


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

    return hh + ":" + mi + ", " + dd + '-' + mm + '-' + yyyy;
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
            let [latFormatted] = formatcoords(lat, 0).format({latLonSeparator: ', '}).split(",")
            return latFormatted
        }
    },
    {
        title: 'Longitude [°]',
        key: 'lng',
        dataIndex: 'longitude',
        render: lng => {
            let [, lngFormatted] = formatcoords(0, lng).format({latLonSeparator: ', '}).split(",")
            return lngFormatted
        }
    },

];

const MapView = () => {
    const dataFramePath = `${geoDataApiPath}/data-frame`;
    const [geoData, setGeoData] = useState([]);
    const [sliderValue, setSliderValue] = useState(0);

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
            <Content className="MapViewContainer">
                <Map geoData={geoData.slice(0,sliderValue)} pathLength={geoData.length} formatDate={formatDate}/>
                {/*<div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a*/}
                {/*    href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>*/}
                <div className="SliderContainer">
                    {
                        geoData.length > 0 ?
                            <Slider
                                min={1}
                                max={geoData.length}
                                onChange={onChange}
                                onAfterChange={onAfterChange}
                                tipFormatter={(value) => {
                                    const element = geoData[value - 1]
                                    return `Time${value} ${formatDate(element.dateTime)}`;
                                }}
                                value={sliderValue}
                            />
                            :
                            null

                    }
                </div>
                <Table
                    rowKey="dateTime"
                    columns={columns}
                    dataSource={geoData}
                    pagination={{
                        pageSize: 5,
                        showSizeChanger: false,
                        simple: (window.matchMedia('(max-width: 600px)').matches)
                    }}
                    scroll={{ x: 400 }}
                />
            </Content>
        </Layout>
    )
}

export default MapView;