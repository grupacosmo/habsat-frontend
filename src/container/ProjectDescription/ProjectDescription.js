import {Card, Col, Row} from "antd";
import {useMediaQuery} from "react-responsive";

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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis efficitur felis quis
                            vehicula. Aliquam sapien dolor, elementum a turpis non, consequat euismod ligula. Quisque in
                            tincidunt massa. Morbi porta arcu id ultricies pretium. Praesent tincidunt ac turpis et
                            facilisis. Etiam mollis purus interdum sem suscipit pulvinar. Ut in nisi ultricies,
                            elementum velit in, egestas nisl. Nunc faucibus blandit luctus. Nullam ligula lacus, feugiat
                            vitae feugiat congue, hendrerit at elit. Donec scelerisque ex ac orci rutrum consectetur.
                        </p>
                        <p>
                            <a href="/#" style={{fontSize: "18px"}}>Uczestnicy projektu</a>
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis efficitur felis quis
                            vehicula. Aliquam sapien dolor, elementum a turpis non, consequat euismod ligula. Quisque in
                            tincidunt massa. Morbi porta arcu id ultricies pretium. Praesent tincidunt ac turpis et
                            facilisis. Etiam mollis purus interdum sem suscipit pulvinar. Ut in nisi ultricies,
                            elementum velit in, egestas nisl. Nunc faucibus blandit luctus. Nullam ligula lacus, feugiat
                            vitae feugiat congue, hendrerit at elit. Donec scelerisque ex ac orci rutrum consectetur.
                        </p>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default ProjectDescription