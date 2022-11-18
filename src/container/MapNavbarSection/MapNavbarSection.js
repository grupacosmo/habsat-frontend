import "../NavbarSection/NavbarSection.css"

import {Layout} from "antd"
import MapNavbar from "../../component/MapNavbar/MapNavbar";

const { Header } = Layout;

function MapNavbarSection({mode}) {
    return(
        <div className="Navbar">
            <Header>
                <MapNavbar mode={mode} />
            </Header>
        </div>
    )
}

export default MapNavbarSection