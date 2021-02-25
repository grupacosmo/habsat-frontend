import {Row, Col} from 'antd';
import {
    faRocket,
    faLightbulb,
    faChartPie,
    faMeteor,
    faSpaceShuttle,
    faSatellite
} from '@fortawesome/free-solid-svg-icons';
import "./HabsatComponentsSection.css";
import habsat from "../../assets/images/habsat.svg";
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
            <Row justify="center" align="middle">
                <Col className="panel" xl={{span: 9, order: 1}} lg={{span: 8, order: 1}} sm={{span: 24, order: 2}}
                     xs={{span: 24, order: 2}}>
                    {habsatData.slice(0, 3).map((data, key) => <HabsatComponent data={data} key={key}/>)}
                </Col>
                <Col xl={{span: 6, order: 2}} lg={{span: 8, order: 1}} sm={{span: 12, order: 1}}
                     xs={{span: 16, order: 1}}>
                    <img id="habsatImg" src={habsat} alt="cubesat"/>
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