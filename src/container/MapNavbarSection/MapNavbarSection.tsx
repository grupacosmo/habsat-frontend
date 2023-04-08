import "../NavbarSection/NavbarSection.css"

import {Layout} from "antd"
import MapNavbar from "../../component/MapNavbar/MapNavbar";

const { Header } = Layout;

interface Props {
    mode?: string
}

function MapNavbarSection({mode} : Props) {
    return(
        <div className="Navbar">
            <Header>
                <MapNavbar mode={mode} />
            </Header>
        </div>
    )
}

export default MapNavbarSection