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
                            HABSat jest urządzeniem pomiarowym do przeprowadzania eksperymentów w stratosferze na wysokości, ok. 30 km nad ziemią. Stanowi platformę eksperymentalną do bezpiecznego wysyłania w stratosferę projektów badawczych, które wymagają warunków zbliżonych do tych panujących w przestrzeni kosmicznej. Rozbudowa platformy HABSat pozwoli na zbieranie doświadczenia niezbędnego do budowy bardziej skomplikowanych konstrukcji typu CubeSat.
                        </p>
                        <p>
                            <a href="/#" style={{fontSize: "18px"}}><Link to="/members">Uczestnicy projektu</Link></a>
                        </p>
                        <p style={{textAlign: "center", fontStyle: "italic"}}>
                            <a target="_blank" rel="noreferrer" href="https://www.pk.edu.pl/index.php?option=com_content&view=article&id=4280:studenci-z-pk-wyslali-do-stratosfery-zbudowana-przez-siebie-sonde-misja-zakonczona-sukcesem&catid=49&lang=pl&Itemid=944" style={{fontSize: "24px", color: "rgb(125 125 125)"}}>Dowiedz się więcej o projekcie</a>
                        </p>
                    </Card>
                </Col>
                <Col xs={24} md={12}>
                    <Card style={cardStyle}>
                        <h1 style={{marginBottom: "25px", color: "rgb(3, 37, 76)"}}>Eksperyment</h1>
                        <p style={{textAlign: "justify"}}>
                        Nasza sonda jest zbudowana z trzech głównych modułów. Komputera pokładowego, Zasilania oraz modułu do przetwarzania obrazu, który jest dziełem naszego zespołu od sztucznej inteligencji, czyli AI. Zawiera on kamerę naukową, której zadaniem jest wykonywać zdjęcia terenu w nadirze. Oprórcz obrazowania zaimplementowana sieć neuronowa, będzie klasyfikowała napotkane na trasie przelotu charakterystyczne obiekty takie jak zbiorniki wodne, samochody, duże budynki. Zdjęcia te posłużą nam do udoskonalenia kolejnych projektów związanych z analizą zdjęć satelitarnych oraz lotniczych.
                        </p>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default ProjectDescription