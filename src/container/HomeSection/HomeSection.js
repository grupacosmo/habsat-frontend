import React from "react"

import background from "../../assets/images/weather_baloon.jpg"

import "./HomeSection.css"

function HomeSection(){
    return(
        <div className="HomeSection" style={{backgroundImage: `url(${background})`}}>
            <div className="HomeSectionWrapper">
                <div className="HomeSectionText">
                    <div className="HomeSectionTitle">HabSat</div>
                    <div className="HomeSectionDescription">
                        Maecenas in nulla ac sem convallis egestas. Donec porta eget massa in sollicitudin. Mauris magna lacus, condimentum non lectus nec, rutrum suscipit metus. Phasellus pellentesque suscipit erat.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSection