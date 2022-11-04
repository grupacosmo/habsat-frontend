import './Navbar.css'

import React, {useState} from "react"
import {Anchor, Drawer} from "antd"
//import {Redirect} from "react-router-dom"
import Items from "./Items"
import { Redirect } from 'react-router'
import {useHistory} from 'react-router-dom'

const {Link} = Anchor

function Navbar() {
    const [visible, setVisible] = useState(false);
    const history = useHistory();

    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    const handleClick = (e, link) => {
        e.preventDefault();
        history.push(e.target.closest(".data-link").id);
      };
    return (
        <div className="NavbarContainer">
            <div className="logo" style={{fontSize: "24px"}}>
                <a href="#Home"><span>HABSat</span></a>
            </div>
            <div className="MobileHidden">
                <Anchor affix="true" offsetTop="0" onClick={handleClick}>
                    {
                        Items.map(item => (
                            <div class="data-link" id={item.key} key={item.key}>
                                <Link key={item.key} href={item.href} title={item.title}/>
                            </div>
                        ))
                    }
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
                    <Anchor affix="true" offsetTop="0" onClick={handleClick}>
                        {
                            Items.map(item =>
                                <div class="data-link" id={item.key}  key={item.key} onClick={onClose}>
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