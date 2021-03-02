import React from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import bxlFacebook from '@iconify-icons/bx/bxl-facebook';
import bxlTwitter from '@iconify-icons/bx/bxl-twitter';
import bxlInstagram from '@iconify-icons/bx/bxl-instagram';
import bxlGithub from '@iconify-icons/bx/bxl-github';
import universityIcon from '@iconify-icons/fa-solid/university';
import telephoneFill from '@iconify-icons/bi/telephone-fill';
import mailIcon from '@iconify-icons/feather/mail';
import emailOutline from '@iconify-icons/eva/email-outline';

import './FooterSection.css';

const FooterSection = () => {
    return(
    <>
    <div id="mediaSection">
        <div className="containerSocial">
            <ul className="list">
                <li><a href="#" target="_blank"><Icon icon={bxlFacebook} /></a></li>
                <li><a href="#" target="_blank"><Icon icon={bxlTwitter} /></a></li>
                <li><a href="#" target="_blank"><Icon icon={bxlInstagram} /></a></li>
                <li><a href="#" target="_blank"><Icon icon={bxlGithub} /></a></li>
                <li><a href="#" target="_blank"><Icon icon={emailOutline} /></a></li>
            </ul>
        </div>
    </div>

    <div className="footer">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-lg-4">
                    <div className="footer-about">
                        <h3>{"<"}HabSat{">"}</h3>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu lectus a leo tristique dictum nec non quam. 
                        Suspendisse convallis, tortor eu placerat rhoncus, lorem quam iaculis felis, sed eleifend lacus neque id eros. Integer convallis volutpat neque
                        </p>
                    </div>
                </div>

                <div className="col-md-6 col-lg-8">
                    <div className="row">
                        <div className="col-md-6 col-lg-4">
                            <div className="footer-link">
                                <h3>Menu 1</h3>
                                <a href>Opcja 1</a>
                                <a href>Opcja 2</a>
                                <a href>Opcja 3</a>
                                <a href>Opcja 4</a>
                                <a href>Opcja 5</a>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="footer-link">
                                <h3>Menu 2</h3>
                                <a href>Opcja 1</a>
                                <a href>Opcja 2</a>
                                <a href>Opcja 3</a>
                                <a href>Opcja 4</a>
                                <a href>Opcja 5</a>
                            </div>
                        </div>
                        
                        <div className="col-md-6 col-lg-4">
                            <div className="footer-contact">
                                <h3>Kontakt</h3>
                                <p><Icon icon={universityIcon} /><a style={{color: "#dddddd"}} href="https://www.google.com/maps/place/Politechnika+Krakowska+im.+Tadeusza+Ko%C5%9Bciuszki/@50.0720447,19.9427642,15z/data=!4m2!3m1!1s0x0:0x41a815e1860a19eb?sa=X&ved=2ahUKEwip3_SWpY3vAhUOGewKHQn1CC0Q_BIwD3oECCMQBQ"> Warszawska 24, Krakow</a></p>
                                <p><Icon icon={telephoneFill} /> (+48) 12 426 420</p>
                                <p><Icon icon={mailIcon} /> habsat@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container footer-menu">
            <div className="f-menu">
                <a href>Link 1</a>
                <a href>Link 2</a>
                <a href>Link 3</a>
                <a href>Pomoc</a>
                <a href>FAQ</a>
            </div>
        </div>

        <div className="container copyright">
            <div className="row">
                <div className="col-md-6">
                    <p>&copy; <a href="https://www.pk.edu.pl/index.php?lang=pl">Politechnika Krakowska</a> 2021</p>
                </div>

                <div className="col-md-6">
                    <p>by <a href="http://cosmo.pk.edu.pl/">COSMO PK</a></p>
                </div>
            </div>
        </div>
    </div>
    </>
    );
}

export default FooterSection;

