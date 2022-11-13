import '../Navbar/Navbar.css'
import MapHeader from "../FlightSwitch/FlightSwitch"
import React from "react"

function MapNavbar({mode = "default"}) {
    return (
        <div className="NavbarContainer">
            <div className="logo" style={{fontSize: "24px"}}>
                <a href="/"><span>HABSat</span></a>
            </div>
            {
                (mode === "map") ? <MapHeader /> : null
            }
        </div>
    )
}

export default MapNavbar