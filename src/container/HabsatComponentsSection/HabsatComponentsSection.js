import {Col, Row} from 'antd';
import {
    faCloud,
    faGaugeHigh,
    faTowerBroadcast,
    faSdCard,
    faSatellite,
    faTv

} from '@fortawesome/free-solid-svg-icons';
import "./HabsatComponentsSection.css";
import HabsatComponent from "../../component/HabsatComponent/HabsatComponent";

import React from 'react';

const habsatData = [
    {
        title: "Akcelerometr",
        content: "Urządzenie badające przyspieszenie w trzech osiach. Dzięki niemu wiemy w jakiej pozycji znajduje się sonda. Może być przekręcona pod różnymi kątami i nie jest to proste do zbadania, jeśli zamiast stać na stabilnym gruncie, coś unosi się 30 km nad powierzchnią Ziemi.",
        icon: faGaugeHigh
    },
    {
        title: "Czujnik atmosferyczny",
        content: "Zbiera dane meteorologiczne takie jak temperatura, ciśnienie, wilgotność i inne statystyki, które możecie na bieżąco obserwować na naszej stronie.",
        icon: faCloud
    },
    {
        title: "SSTV",
        content: "Dodatkowo na naszej sondzie można znaleźć system SSTV który za pomocą fal radiowych w zakresie krótkim pozwoli na transmisje ciekawych zdjęć z naszym prodziekanem dr inż. Danielem Grzonką",
        icon: faTv
    },
    {
        title: "Radio LoRa",
        content: "Działające w sieci LoRaWAN.  Czyli część protokołu sieciowego za pomocą którego sonda może się łączyć z Internetem. Sieć ta jest nastawiona na inne cele niż ta z której korzystamy na co dzień, jest nam jednak niezbędna do prawidłowego funkcjonowania.",
        icon: faTowerBroadcast
    },
    {
        title: "GPS",
        content: "tu chyba nie trzeba za dużo tłumaczyć, jest nam on potrzebny do nawigacji. Nie chcemy zgubić naszego HABSATa, za długo nad nim pracowaliśmy🙂",
        icon: faSatellite
    },
    {
        title: "Karta SD",
        content: "Słuzy jako logger oraz czarna skrzynka naszego sprzętu który zbiera wszystkie dane.",
        icon: faSdCard
    },
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