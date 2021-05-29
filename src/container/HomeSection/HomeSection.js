import React, { useEffect } from 'react';

import MissionState from '../../component/MissionState/MissionState';
import "./HomeSection.css"

import balloon from "../../assets/images/svg/weather-balloon-epa-cropped.svg";
import clouds from "../../assets/images/clouds-shadow.png";

function HomeSection(){
    useEffect(() =>{
        document.getElementsByClassName("HomeSectionWrapper")[0].style.height = `${window.innerHeight - 48}px`
        window.addEventListener("resize", () => {
            document.getElementsByClassName("HomeSectionWrapper")[0].style.height = `${window.innerHeight - 48}px`
        });
    })
    return(
        <div className="HomeSection" style={{backgroundColor: "#0e3664"}}>
            <img className="balloon-image" src={balloon} alt="balloon" />
            <div className="HomeSectionWrapper">
                <div className="HomeSectionText">
                    <div className="HomeSectionTitle">HabSat</div>
                    <div className="HomeSectionDescription">
                        Projekt balonu stratosferycznego Koła Naukowego COSMO
                    </div>
                    <MissionState />
                </div>
            </div>
            <div className="clouds-background" style={{backgroundImage: `url(${clouds})`}}></div>
        </div>
    )
}

export default HomeSection