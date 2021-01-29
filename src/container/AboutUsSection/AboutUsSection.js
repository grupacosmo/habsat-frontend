import React, { Component } from "react"
import { Row, Col } from "antd"

import background from "../../assets/images/earth.jpg"

import './AboutUsSection.css'

function AboutUs()
{
    return(
        <div className="AboutUsSection">
            <Row>
                <Col xs={24} sm={24} md={24} lg={14} xl={14}>
                    <div className="AboutUsContent">
                        <h2>O nas</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Duis aliquam orci at urna imperdiet blandit.In in dictum dui, eu fringilla dui.Donec tristique dapibus rutrum.Nunc a ornare massa.Nam lorem tortor, pharetra at rutrum non, consectetur id arcu.Nulla mattis sit amet odio quis rhoncus.Morbi rhoncus nibh lorem, non eleifend enim dictum accumsan.Sed posuere, ligula ut viverra mollis, lacus turpis posuere sapien, nec commodo metus felis eu nisi.
                        </p>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={10} xl={10}>
                    <div
                        className="AboutUsLink"
                        style={{
                            backgroundImage: `url(${background})`
                        }}
                    >
                        <a href="http://cosmo.pk.edu.pl/" target="_blank" rel="noreferrer">Odwiedź stronę Cosmo</a>
                    </div>
                </Col>
            </Row>
        </div>
    )
}


export default AboutUs