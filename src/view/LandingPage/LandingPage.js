import React from "react";
import './LandingPage.css';
import {Layout} from "antd";
import PartnersSection from '../../container/PartnersSection/PartnersSection';
import ContactSection from "../../container/ContactSection/ContactSection";
import IconsSection from "../../container/IconsSection/IconsSection";
import MapView from "../../container/MapView/MapView";
import AboutUsSection from "../../container/AboutUsSection/AboutUsSection";


const { Content } = Layout;

function LandingPage() {
    return (
        <Layout>
            <Content>        
                <MapView/>
                <IconsSection/>
                <AboutUsSection />
                <PartnersSection />
                <ContactSection/>
            </Content>
        </Layout>
    );
}

export default LandingPage;
