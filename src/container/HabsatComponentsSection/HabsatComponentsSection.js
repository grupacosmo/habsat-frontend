import {Col, Row} from 'antd';
import {
    faChartPie,
    faLightbulb,
    faMeteor,
    faRocket,
    faSatellite,
    faSpaceShuttle
} from '@fortawesome/free-solid-svg-icons';
import "./HabsatComponentsSection.css";
import HabsatComponent from "../../component/HabsatComponent/HabsatComponent";

import React from 'react';

const habsatData = [
    {
        title: "Random title1",
        content: "",
        icon: faRocket
    },
    {
        title: "Random title2",
        content: "",
        icon: faLightbulb
    },
    {
        title: "Random title3",
        content: "",
        icon: faChartPie
    },
    {
        title: "Random title4",
        content: "",
        icon: faMeteor
    },
    {
        title: "Random title5",
        content: "",
        icon: faSpaceShuttle
    },
    {
        title: "Random title6",
        content: "",
        icon: faSatellite
    }
]

const habsatComponentsSection = () => {
    return (
        <div className="hComponentsContainer">
            <Row>
                <Col xs={24} style={{margin: "50px 0 30px 0", textAlign: "center"}}>
                    <h1 style={{marginBottom: "25px", fontSize: "45px", color: "rgb(59,59,59)"}}>Komponenty</h1>
                </Col>
            </Row>
            <Row justify="center" align="middle">
                <Col className="panel" xl={{span: 9, order: 1}} lg={{span: 8, order: 1}} sm={{span: 24, order: 2}}
                     xs={{span: 24, order: 2}}>
                    {habsatData.slice(0, 3).map((data, key) => <HabsatComponent data={data} key={key}/>)}
                </Col>
                <Col className="panel" xl={{span: 9, order: 3}} lg={{span: 8, order: 1}} sm={{span: 24, order: 3}}
                     xs={{span: 24, order: 3}}>
                    {habsatData.slice(3, 6).map((data, key) => <HabsatComponent data={data} key={key}/>)}
                </Col>
            </Row>
        </div>
    )
}

export default habsatComponentsSection;