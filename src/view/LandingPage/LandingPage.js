import React from "react";
import './LandingPage.css';
import {Layout} from "antd";
import PartnersSection from '../../container/PartnersSection/PartnersSection';
import ContactSection from "../../container/ContactSection/ContactSection";
// import IconsSection from "../../container/IconsSection/IconsSection";
import AboutUsSection from "../../container/AboutUsSection/AboutUsSection";
import HabsatComponentsSection from "../../container/HabsatComponentsSection/HabsatComponentsSection";
import NumbersSection from "../../container/NumbersSection/NumbersSection";
import NavbarSection from "../../container/NavbarSection/NavbarSection";
import HomeSection from "../../container/HomeSection/HomeSection";
import FooterSection from "../../container/FooterSection/FooterSection";
import IconsSection from "../../container/IconsSection/IconsSection";
import ProjectDescription from "../../container/ProjectDescription/ProjectDescription";

const { Content } = Layout;

function LandingPage() {
    return (
        <Layout>
            <Content>
                <div class="scroll-to-element" id="Home" />
                <HomeSection />
                <NavbarSection />
                <div className="scroll-to-element" id="Project"/>
                <ProjectDescription id="Project"/>
                <div class="scroll-to-element" id="HabsatComponents" />
                <HabsatComponentsSection/>
                <NumbersSection />
                <div className="scroll-to-element" id="Experiment"/>
                <IconsSection/>
                <div class="scroll-to-element" id="AboutUs" />
                <AboutUsSection id="AboutUs" />
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
