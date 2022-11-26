import React, {useEffect} from 'react';

import MissionState from '../../component/MissionState/MissionState';
import "./HomeSection.css"
// import { WindowsFilled } from '@ant-design/icons';

const resize = () => {
    document.getElementsByClassName("HomeSectionWrapper")[0].style.height = `${window.innerHeight - 48}px`
}

function HomeSection(){
    useEffect(() =>{
        document.getElementsByClassName("HomeSectionWrapper")[0].style.height = `${window.innerHeight - 48}px`
        window.addEventListener("resize", resize);

        return window.removeEventListener("resize", resize);
    })
    
    return(
        <div className="HomeSection">
            <div className="HomeSectionWrapper">
                <div className="HomeSectionText">
                    <div className="HomeSectionTitle">HABSat</div>
                    <div className="HomeSectionDescription">
                        HABSat - projekt sondy stratosferycznej Koła Naukowego COSMO
                    </div>
                    <MissionState />
                </div>
            </div>
            {/* <div className="clouds-background" style={{backgroundImage: `url(${clouds})`}}></div> */}
        </div>
    )
}

export default HomeSection