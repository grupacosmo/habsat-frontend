import React, { useEffect } from 'react';

import background from "../../assets/images/weather_baloon.jpg"
import MissionState from '../../component/MissionState/MissionState';

import "./HomeSection.css"

function HomeSection(){
    useEffect(() =>{
        document.getElementsByClassName("HomeSectionWrapper")[0].style.height = `${window.innerHeight - 48}px`
        window.addEventListener("resize", () => {
            document.getElementsByClassName("HomeSectionWrapper")[0].style.height = `${window.innerHeight - 48}px`
        });
    })
    return(
        <div className="HomeSection" style={{backgroundImage: `url(${background})`}}>
            <div className="HomeSectionWrapper">
                <div className="HomeSectionText">
                    <div className="HomeSectionTitle">HabSat</div>
                    <div className="HomeSectionDescription">
                        Projekt balonu stratosferycznego Koła Naukowego COSMO
                    </div>
                    <MissionState />
                </div>
            </div>
        </div>
    )
}

export default HomeSection