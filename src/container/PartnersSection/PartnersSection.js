import Partner from "../../component/Partner/Partner";
import {Row, Col} from 'antd';

import './PartnersSection.css';

import pk from "../../assets/images/partners/pk.png"
import ki from "../../assets/images/partners/ki.png"
import fl from "../../assets/images/partners/fl.png"
import wiit from "../../assets/images/partners/wiit.png"
import bl from "../../assets/images/partners/bl.png"
import bsa from "../../assets/images/partners/bsa.png"

function PartnersSection() 
{
    const partnersInfo =
    [
        ["Politechnika Krakowska", pk, "https://www.pk.edu.pl/"],
        ["Katedra Informatyki", ki, "https://ii.pk.edu.pl/"],
        ["FutureLab", fl, "http://futurelab.pk.edu.pl/"],
        ["Wydział Informatyki i Telekomunikacji", wiit, "https://it.pk.edu.pl/"],
        ["Botland", bl, "https://botland.com.pl/"],
        ["Baltic Sat Apps", bsa, "https://balticsatapps.pl/"]
    ]

    return(
        <div className="ParentsSection">
            <div className="PartnersWrapper">
                <h1>Nasi partnerzy</h1>
                <Row justify="center" align="top">
                    {partnersInfo.map((value) => {
                        return(
                            <Col xs={24} sm={12} md={12} lg={8} xl={8}>
                                <Partner imgPath={value[1]} altText={value[0]} partnerSite={value[2]}/>
                            </Col>
                    )})}   
                </Row>
            </div>
        </div>
    )    
}

export default PartnersSection