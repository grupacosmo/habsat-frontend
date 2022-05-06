import {Card, Col, Row} from "antd";
import {useMediaQuery} from "react-responsive";
import { Link } from "react-router-dom";

function ProjectDescription() {
    const isXs = useMediaQuery({ maxWidth: 576 });

    const cardStyle = {
        height: "100%",
        paddingLeft: isXs ? "10px" : "50px",
        paddingRight: isXs ? "10px" : "50px",
    }

    return (
        <div>
            <Row>
                <Col xs={24} md={12}>
                    <Card style={cardStyle}>
                        <h1 style={{marginBottom: "25px", color: "rgb(3, 37, 76)"}}>Projekt</h1>
                        <p style={{textAlign: "justify"}}>
                            Nasza sonda jest zbudowana z trzech głównych modułów. Pierwszy z nich zawiera zasilanie natomiast drugi jest dziełem naszego zespołu od sztucznej inteligencji, czyli AI. Zawiera on kamerę naukową, której zadaniem jest rozpoznawać teren, nad którym przelatuje HabSat. Działa to w sposób taki, że jeśli leci on nad lasem, wodą czy miastem to sonda jest w stanie rozpoznać charakterystyczne obiekty i sklasyfikować teren.  Trzeci z modułów jest efektem pracy zespołu OBC oraz jest on najbardziej rozbudowany.
                        </p>
                        <p>
                            <a href="/#" style={{fontSize: "18px"}}><Link to="/members">Uczestnicy projektu</Link></a>
                        </p>
                        <p style={{textAlign: "center", fontStyle: "italic"}}>
                            <a href="/#" style={{fontSize: "24px", color: "rgb(125 125 125)"}}>Dowiedz się więcej o projekcie</a>
                        </p>
                    </Card>
                </Col>
                <Col xs={24} md={12}>
                    <Card style={cardStyle}>
                        <h1 style={{marginBottom: "25px", color: "rgb(3, 37, 76)"}}>Eksperyment</h1>
                        <p style={{textAlign: "justify"}}>
                            Sonda HABSat jest urządzeniem pomiarowym do przeprowadzania eksperymentów w stratosferze na wysokości, ok. 30 km nad ziemią. Stanowi platformę eksperymentalną do bezpiecznego wysyłania w stratosferę projektów badawczych, które wymagają warunków zbliżonych do tych panujących w przestrzeni kosmicznej. Moduły umożliwiają zbieranie informacji meteorologicznych, wykonanie zdjęć Ziemi oraz zdjęć i wideo horyzontalnego stratosfery. Wszystkie informacje związane z lotem, a więc wysokość, prędkość wznoszenia i opadania, kierunek przemieszczenia, lokalizacja, będą rejestrowane i przekazywane przez specjalny nadajnik radiowy. To dzięki niemu młodzi naukowcy namierzą miejsce lądowania obiektu.
                        </p>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default ProjectDescription