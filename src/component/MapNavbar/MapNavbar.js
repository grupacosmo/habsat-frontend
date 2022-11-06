import '../Navbar/Navbar.css'
import MapHeader from "../MapHeader/MapHeader"
import React from "react"

function MapNavbar() {
    return (
        <div className="NavbarContainer">
            <div className="logo" style={{fontSize: "24px"}}>
                <a href="/"><span>HABSat</span></a>
            </div>
            <MapHeader />
        </div>
    )
}

export default MapNavbar