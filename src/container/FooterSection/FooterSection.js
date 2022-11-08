import React from 'react';
import {Icon} from '@iconify/react';
import bxlFacebook from '@iconify-icons/bx/bxl-facebook';
import bxlInstagram from '@iconify-icons/bx/bxl-instagram';
import bxlGithub from '@iconify-icons/bx/bxl-github';
import universityIcon from '@iconify-icons/fa-solid/university';
import mailIcon from '@iconify-icons/feather/mail';
import {Link} from "react-router-dom"

import './FooterSection.css';
import Items from "../../component/Navbar/Items";

const FooterSection = () => {

    const handleClick = (e) => {

        window.scrollTo({
            top:0,
            behavior: 'auto'
        })

    };
    return (
        <>
            <div id="mediaSection">
                <div className="containerSocial">
                    <ul className="list">
                        <li>
                            <a href="https://www.facebook.com/cosmopk.kn" target="_blank" rel="noreferrer">
                                <Icon icon={bxlFacebook}/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/cosmopk_kn/" target="_blank" rel="noreferrer">
                                <Icon icon={bxlInstagram}/>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/grupacosmo" target="_blank" rel="noreferrer">
                                <Icon icon={bxlGithub}/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="footer-about">
                                <h3>{"<"}HabSat{">"}</h3>
                                <p>
                                    Projekt sondy stratosferycznej koła naukowego COSMO PK
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="footer-link">
                                        <h3>Linki</h3>
                                        {
                                            Items.map(item => <Link key={item.key} to={`/${item.key}`} onClick={handleClick}>{item.title}</Link>)
                                        }
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="footer-contact">
                                        <h3>Kontakt</h3>
                                        <p>
                                            <Icon icon={universityIcon}/>&nbsp;
                                            <a style={{color: "#dddddd"}}
                                               href="https://www.google.com/maps/place/Politechnika+Krakowska+im.+Tadeusza+Ko%C5%9Bciuszki/@50.0720447,19.9427642,15z/data=!4m2!3m1!1s0x0:0x41a815e1860a19eb?sa=X&ved=2ahUKEwip3_SWpY3vAhUOGewKHQn1CC0Q_BIwD3oECCMQBQ">
                                                Warszawska 24, Krakow
                                            </a>
                                        </p>
                                        <p><Icon icon={mailIcon}/>&nbsp;kolocosmopk@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container copyright">
                    <div className="row">
                        <div className="col-md-6">
                            <p>&copy; <a href="https://www.pk.edu.pl/index.php?lang=pl">Politechnika Krakowska</a> 2022
                            </p>
                        </div>

                        <div className="col-md-6">
                            <p>Created with 🍺 and ❤️ <a href="https://cosmo.pk.edu.pl/">COSMO PK</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FooterSection;

