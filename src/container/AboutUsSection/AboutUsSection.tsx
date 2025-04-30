import {Col, Row} from "antd"

import background from "../../assets/images/earth.jpg"
import logo from "../../assets/images/Logo2.png"

import './AboutUsSection.css'

function AboutUs() {
    return(
        <div className="AboutUsSection">
            <Row>
                <Col xs={24} sm={24} md={24} lg={14} xl={14}>
                    <div className="AboutUsContent">
                        <h2>O nas</h2>
                        <p style={{textAlign: "justify"}}>
                            Koło naukowe z Wydziału Informatyki i Telekomunikacji zrzesza osoby chcące realizować własne projekty studenckie związane z technologiami informatycznymi i kosmicznymi. Opiekunem projektu był mgr inż. Paweł Kisielewicz z Katedry Informatyki WIiT – pomysłodawca budowy i wystrzelenia satelity, którego zadaniem byłoby zbadanie możliwości użycia sztucznej inteligencji w przetwarzaniu danych satelitarnych bezpośrednio na pokładzie. Aktualną opiekunką naukową Cosmo PK jest mgr. inż Katarzyna Smelcerz. Członkowie koła aktualnie realizują projekty dotyczące sond stratosferycznych, ale także inne przedsięwzięcia, takie jak: stacja nasłuchowa do odbioru danych satelitarnych czy stacja pogodowa.
                        </p>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={10} xl={10}>
                    <div
                        className="AboutUsLink"
                        style={{
                            backgroundImage: `url(${background})`
                        }}
                    >
                        <img
                            src={logo}
                            alt="logo"
                            style={{position: "absolute", height: "90%", right: "10px", zIndex: 1, top: "5%", mixBlendMode: "color", maxWidth:"100%"}}
                        />
                        <img
                            src={logo}
                            alt="logo"
                            style={{position: "absolute", height: "90%", right: "10px", zIndex: 1, top: "5%", opacity: "0.5", maxWidth:"100%"}}
                        />
                        <a href="https://cosmo.pk.edu.pl/"
                           target="_blank"
                           rel="noreferrer"
                           style={{zIndex: 10}}
                        >
                            Odwiedź stronę Cosmo
                        </a>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default AboutUs