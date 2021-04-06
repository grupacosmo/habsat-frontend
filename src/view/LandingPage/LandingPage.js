import React from "react";
import './LandingPage.css';
import {Layout} from "antd";
import PartnersSection from '../../container/PartnersSection/PartnersSection';
import ContactSection from "../../container/ContactSection/ContactSection";
// import IconsSection from "../../container/IconsSection/IconsSection";
import MapView from "../../container/MapView/MapView";
import AboutUsSection from "../../container/AboutUsSection/AboutUsSection";
import HabsatComponentsSection from "../../container/HabsatComponentsSection/HabsatComponentsSection";
import NumbersSection from "../../container/NumbersSection/NumbersSection";
import NavbarSection from "../../container/NavbarSection/NavbarSection";
import HomeSection from "../../container/HomeSection/HomeSection";
import FooterSection from "../../container/FooterSection/FooterSection";

const { Content } = Layout;

function LandingPage() {
    return (
        <Layout>
            <Content>    
                <div class="scroll-to-element" id="Home" />   
                <HomeSection />
                <NavbarSection />
                <div class="scroll-to-element" id="MapView" />
                {/* <MapView id="MapView" /> */}
                <div class="scroll-to-element" id="HabsatComponents" />
                <HabsatComponentsSection/>
                <div class="scroll-to-element" id="AboutUs" />
                <AboutUsSection id="AboutUs" />
                {/* <NumbersSection /> */}
                <div class="scroll-to-element" id="Partners" />
                <PartnersSection id="Partners" />
                <div class="scroll-to-element" id="Contact" />
                <ContactSection id="Contact" />
                <FooterSection />
            </Content>
        </Layout>
    );
}

export default LandingPage;
