import './Navbar.css'

import React, {useState} from "react"
import {Anchor, Drawer} from "antd"

import Items from "./Items"

const {Link} = Anchor

function Navbar() {
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    return (
        <div className="NavbarContainer">
            <div className="logo" style={{fontSize: "24px"}}>
                <a href="#Home"><span>HABSat</span></a>
            </div>
            <div className="MobileHidden">
                <Anchor affix="true" offsetTop="0">
                    {Items.map(item => {
                        return (<Link key={item.key} href={item.href} title={item.title}/>)
                    })}
                </Anchor>
            </div>
            <div className="MobileShown">
                <div className="HamburgerButton" type="primary" onClick={showDrawer}>
                    <div/>
                    <div/>
                    <div/>
                </div>
                <Drawer
                    title="Menu"
                    placement="right"
                    closable={false}
                    onClose={onClose}
                    visible={visible}
                >
                    <Anchor affix="true" offsetTop="0">
                        {
                            Items.map(item =>
                                <div onClick={onClose}>
                                    <Link key={item.key} href={item.href} title={item.title}/>
                                </div>
                            )
                        }
                    </Anchor>
                </Drawer>
            </div>
        </div>
    )
}

export default Navbar