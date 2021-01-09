import Partner from "../../component/Partner/Partner";
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
        ["Politechnika Krakowska", pk],
        ["Katedra Informatyki", ki],
        ["FutureLab", fl],
        ["Wydział Informatyki i Telekomunikacji", wiit],
        ["Botland", bl],
        ["Baltic Sat Apps", bsa]
    ]

    return(
        <div 
            className="partnersSection"
            style={{
                backgroundColor: "#f8f8f8",
                marginTop: "50px",
                paddingTop: "50px"
            }}
        >
            <h1
                style={{
                    textAlign: "center",
                    fontSize: "60px",
                    textTransform: "uppercase",
                    letterSpacing: "5px"
            }}>
                Nasi partnerzy
            </h1>

            <div className="partner-wrapper"
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    justifyItems: "center"
            }}>
                {partnersInfo.map((value) => {return <Partner imgPath={value[1]} altText={value[0]}/>})}
            </div>
        </div>
    )    
}

export default PartnersSection