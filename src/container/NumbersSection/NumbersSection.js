import React from 'react';
import {Row, Col} from 'antd';
import {faWeight, faUser, faCube, faGlobeEurope} from '@fortawesome/free-solid-svg-icons';

import Number from "../../component/Number/Number";

import './NumbersSection.css';


function NumbersSection() {
    const numbersData =
        [
            {
                icon: faWeight,
                backgroundColor:"#444eff",
                number: 2137,
                unit: "g",
                mainText: "Tyle kremówek zmieściliśmy w HABsacie",
                secondaryText: "Bo wcześniej nam nigdy nie dawali"
            },
            {
                icon: faUser,
                backgroundColor:"#1167b1",
                number: 100,
                unit: "",
                mainText: "Tyle osób nie dostało za to nawet grosza",
                secondaryText: "Choć i tak nikt się zarobku nie spodziewał"
            },
            {
                icon: faCube,
                backgroundColor:"#03254c",
                number: 999,
                unit: <span>m<sup>2</sup></span>,
                mainText: "Nie wiem jaka miała być objętość balona",
                secondaryText: "Więc powiedzmy że na razie placeholder"
            },
            {
                icon: faGlobeEurope,
                backgroundColor:"#4c67ff",
                number: 222,
                unit: "km",
                mainText: "Poleci gdzieś wysoko",
                secondaryText: "Lorem Ipsum coś tam coś tam"
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