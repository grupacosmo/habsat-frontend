import './Navbar.css'

import React, {useState} from "react"

import { Anchor, Drawer, Button} from "antd"
const { Link } = Anchor

const Items = [
        ["home", "#Home", "Home"],
        ["map", "#MapView", "Mapa"],
        ["about", "#AboutUs", "O nas"],
        ["partners", "#Partners", "Partnerzy"],
        ["contact", "#Contact", "Kontakt"]
    ]

function Navbar()
{
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    return(
        <div className="NavbarContainer">
            <div className="logo">
                <span>HabSat</span>
            </div>
            <div className="MobileHidden">
                <Anchor affix="true" offsetTop="0">
                    {Items.map(item => {return(<Link href={item[1]} title={item[2]}/>)})}
                </Anchor>
            </div>
            <div className="MobileShown">
            <Button type="primary" onClick={showDrawer} >
                Menu
            </Button>
            <Drawer
                title="Menu"
                placement="right"
                closable={false}
                onClose={onClose}
                visible={visible}
            >
                <Anchor affix="true" offsetTop="0">
                    {Items.map(item => {return(<div onClick={onClose}><Link href={item[1]} title={item[2]}/></div>)})}
                </Anchor>
            </Drawer>
            </div>
        </div>
    )
}

export default Navbar