import { useContext, useEffect } from 'react';

import MissionState from '../../component/MissionState/MissionState';
import { FlightsContext } from '../../Providers/FlightsProvider/FlightsProvider';
import "./HomeSection.css"

const resize = () => {
    const homeSectionWrapper = document.getElementsByClassName("HomeSectionWrapper")[0]
    if (homeSectionWrapper instanceof HTMLElement) {
        homeSectionWrapper.style.height = `${window.innerHeight - 48}px`
    }
}

function HomeSection() {
    const { currentFlight } = useContext(FlightsContext)

    useEffect(() => {
        const homeSectionWrapper = document.getElementsByClassName("HomeSectionWrapper")[0]
        if (homeSectionWrapper instanceof HTMLElement) {
            homeSectionWrapper.style.height = `${window.innerHeight - 48}px`
        }
        window.addEventListener("resize", resize);

        return () => window.removeEventListener("resize", resize);
    }, [])

    return (
        <div className="HomeSection">
            <div className="HomeSectionWrapper">
                <div className="HomeSectionText">
                    <div className="HomeSectionTitle">HABSat</div>
                    <div className="HomeSectionDescription">
                        HABSat - projekt sondy stratosferycznej Koła Naukowego COSMO
                    </div>
                    {currentFlight.date ? <MissionState /> : null}
                </div>
            </div>
        </div>
    )
}

export default HomeSection