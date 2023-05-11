import {Col, Row} from 'antd';
import {IconDefinition, faBullseye, faGlobeEurope, faUser, faWeight } from '@fortawesome/free-solid-svg-icons';
import Number from "../../component/Number/Number";
import './NumbersSection.css';

export interface INumbersDataItem {
    id: number,
    icon: IconDefinition,
    backgroundColor: string,
    number: number,
    unit: JSX.Element | ""
    mainText: string,
    secondaryText?:string 
}

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

function NumbersSection() {
    const numbersData:INumbersDataItem[] =
        [
            {
                id: 0,
                icon: faWeight,
                backgroundColor:"#444eff",
                number: 1800,
                unit: <span>&nbsp;g</span>,
                mainText: "Taki ładunek może unieść HABSat",
                secondaryText: "To aż 18 kremówek!"
            },
            {
                id: 1,
                icon: faUser,
                backgroundColor:"#1167b1",
                number: 35,
                unit: "",
                mainText: "Tyle osób nie dostało za to nawet grosza",
                secondaryText: "Choć i tak nikt się zarobku nie spodziewał"
            },
            {
                id: 2,
                icon: faBullseye,
                backgroundColor:"#03254c",
                number: 4200,
                unit: <span>&nbsp;l</span>,
                mainText: "Jest to objętość balonu który wyniesie naszą sondę do stratosfery",
                secondaryText: ""
            },
            {
                id: 3,
                icon: faGlobeEurope,
                backgroundColor:"#4c67ff",
                number: 33,
                unit: <span>&nbsp;km</span>,
                mainText: "Wysokość jest mocno uzależniona od warunków pogodowych",
                secondaryText: "które lubią przysporzyć problemów"
            }
        ]

    return (
        <div className={`NumbersSection ${isMobile ? "NumbersSection_mobile" : null }`}>
            <Row justify="center">
                {numbersData.map((element, id) => {
                    return (
                        <Col key={id} xs={24} sm={12} md={12} lg={6} xl={6}>
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