import React from "react";
import './LandingPage.css';
import {Layout} from "antd";
import HeheSection from "../../container/HeheSection/HeheSection";
import ContactSection from "../../container/ContactSection/ContactSection";
import IconsSection from "../../container/IconsSection/IconsSection";
import MapView from "../../container/MapView/MapView";

const { Content } = Layout;

function LandingPage() {
    return (
        <Layout>
            <Content>
                <MapView/>
                <IconsSection/>
                <ContactSection/>
            </Content>
        </Layout>
    );
}

export default LandingPage;
