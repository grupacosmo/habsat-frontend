import React from 'react';
import {Col, Row} from 'antd';
import {faBullseye, faGlobeEurope, faUser, faWeight } from '@fortawesome/free-solid-svg-icons';
import Number from "../../component/Number/Number";

import './NumbersSection.css';


function NumbersSection() {
    const numbersData =
        [
            {
                icon: faWeight,
                backgroundColor:"#444eff",
                number: 800,
                unit: <span>&nbsp;g</span>,
                mainText: "Taki ładunek może unieść HABSat",
                secondaryText: "To aż 8 kremówek!"
            },
            {
                icon: faUser,
                backgroundColor:"#1167b1",
                number: 35,
                unit: "",
                mainText: "Tyle osób nie dostało za to nawet grosza",
                secondaryText: "Choć i tak nikt się zarobku nie spodziewał"
            },
            {
                icon: faBullseye,
                backgroundColor:"#03254c",
                number: 4200,
                unit: <span>&nbsp;l</span>,
                mainText: "Jest to objętość balonu który wyniesie naszą sondę do stratosfery",
                secondaryText: ""
            },
            {
                icon: faGlobeEurope,
                backgroundColor:"#4c67ff",
                number: 33,
                unit: <span>&nbsp;km</span>,
                mainText: "Wysokość jest mocno uzależniona od warunków pogodowych",
                secondaryText: "które lubią przysporzyć problemów"
            }
        ]

    return (
        <div className="NumbersSection">
            <Row justify="center">
                {numbersData.map((element, key) => {
                    return (
                        <Col key={key} xs={24} sm={12} md={12} lg={6} xl={6}>
                            <Number
                                {...element}
                            />
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}

export default NumbersSection