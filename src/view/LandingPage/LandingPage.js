import React from "react";
import './LandingPage.css';
import {Layout} from "antd";
import PartnersSection from '../../container/PartnersSection/PartnersSection';
// import HeheSection from "../../container/HeheSection/HeheSection";
import ContactSection from "../../container/ContactSection/ContactSection";
// import IconsSection from "../../container/IconsSection/IconsSection";
import MapView from "../../container/MapView/MapView";
import AboutUsSection from "../../container/AboutUsSection/AboutUsSection";
import HomeSection from "../../container/HomeSection/HomeSection";

const { Content } = Layout;

function LandingPage() {
    return (
        <Layout>
            <Content>        
                <HomeSection />
                <MapView/>
                {/* <IconsSection/> */}
                <AboutUsSection />
                <PartnersSection />
                <ContactSection/>
            </Content>
        </Layout>
    );
}

export default LandingPage;
