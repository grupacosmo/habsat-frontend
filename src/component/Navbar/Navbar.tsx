import './Navbar.css'
import balloon from "../../assets/images/svg/weather-balloon-epa-cropped.svg";

import {useState} from "react"
import {Anchor, Drawer} from "antd"
import Items from "./Items"
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
    const handleClick = (e:any) => {
        e.preventDefault();
        window.scrollTo({
            top:0,
            behavior: 'auto'
        })
        history.push(`/${e.target.closest(".data-link").id}`);
      };
    return (
        <div className="NavbarContainer">       
            <div className="logo">
                <img className="balloon-image" src={balloon} alt="balloon" style={{height:"4vh"}}/>
                <a href="/"><span>HABSat</span></a>
            </div>     
            <div className="MobileHidden">
                <Anchor affix={true} offsetTop={0} onClick={handleClick}>
                    {   
                        Items.map(item => (
                            <div className="data-link" id={item.key} key={item.key}>
                                <Link key={item.key} href={item.href} title={item.title}/>
                            </div>
                        ))
                    }
                </Anchor>
            </div>
            <div className="MobileShown">
                <button className="HamburgerButton" data-type="primary" onClick={showDrawer}>
                    <div/>
                    <div/>
                    <div/>
                </button>
                <Drawer
                    title="Menu"
                    placement="right"
                    closable={false}
                    onClose={onClose}
                    open={visible}
                    width="300px"
                >
                    <Anchor affix={true} offsetTop={0} onClick={handleClick}>
                        {
                            Items.map(item =>
                                <div className="data-link" id={item.key}  key={item.key} onClick={onClose}>
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