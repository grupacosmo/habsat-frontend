import "../NavbarSection/NavbarSection.css"

import {Layout} from "antd"
import MapNavbar from "../../component/MapNavbar/MapNavbar";

const { Header } = Layout;

function MapNavbarSection() {
    return(
        <div className="Navbar">
            <Header>
                <MapNavbar />
            </Header>
        </div>
    )
}

export default MapNavbarSection