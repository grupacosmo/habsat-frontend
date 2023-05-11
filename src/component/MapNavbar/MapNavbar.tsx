import '../Navbar/Navbar.css'
import balloon from "../../assets/images/svg/weather-balloon-epa-cropped.svg";
import MapHeader from "../MapHeader/MapHeader"

function MapNavbar({mode = "default"}) {
    return (
        <div className="NavbarContainer">
            <div className="logo">
                    <img className="balloon-image" src={balloon} alt="balloon" style={{height:"4vh"}}/>
                    <a className="logo-title" href="/"><span>HABSat</span></a>
                </div>     
            {
                (mode === "map") ? <MapHeader /> : null
            }
        </div>
    )
}

export default MapNavbar