import React from "react";
import './LandingPage.css';
import {Layout} from "antd";
import PartnersSection from '../../container/PartnersSection/PartnersSection';
import ContactSection from "../../container/ContactSection/ContactSection";
// import IconsSection from "../../container/IconsSection/IconsSection";
import MapView from "../../container/MapView/MapView";
import AboutUsSection from "../../container/AboutUsSection/AboutUsSection";
import NumbersSection from "../../container/NumbersSection/NumbersSection";
import NavbarSection from "../../container/NavbarSection/NavbarSection";
import HomeSection from "../../container/HomeSection/HomeSection";

const { Content } = Layout;

function LandingPage() {
    return (
        <Layout>
            <Content>   
                <NavbarSection />
                <div class="scroll-to-element" id="Home" />    
                <HomeSection />
                <div class="scroll-to-element" id="MapView" />
                <MapView id="MapView" />
                {/* <IconsSection/> */}
                <div class="scroll-to-element" id="AboutUs" />
                <AboutUsSection id="AboutUs" />
                <NumbersSection />
                <div class="scroll-to-element" id="Partners" />
                <PartnersSection id="Partners" />
                <div class="scroll-to-element" id="Contact" />
                <ContactSection id="Contact" />
            </Content>
        </Layout>
    );
}

export default LandingPage;
