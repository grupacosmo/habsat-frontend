import Navbar from '../../component/Navbar/Navbar'
import "./NavbarSection.css"

import {Layout} from "antd"

const { Header } = Layout;

function NavbarSection() {
    return(
        <div class="Navbar">
            <Header>
                <Navbar />
            </Header>
        </div>
    )
}

export default NavbarSection