import React from "react";
import './LandingPage.css';
import {Layout} from "antd";
import PartnersSection from '../../container/PartnersSection/PartnersSection';
import AboutUsSection from "../../container/AboutUsSection/AboutUsSection";
import HabsatComponentsSection from "../../container/HabsatComponentsSection/HabsatComponentsSection";
import NumbersSection from "../../container/NumbersSection/NumbersSection";
import NavbarSection from "../../container/NavbarSection/NavbarSection";
import HomeSection from "../../container/HomeSection/HomeSection";
import FooterSection from "../../container/FooterSection/FooterSection";
import ProjectDescription from "../../container/ProjectDescription/ProjectDescription";

const { Content } = Layout;

function LandingPage() {
    return (
        <Layout>
            <Content>
                <div class="scroll-to-element" id="Home" />
                <HomeSection />
                <NavbarSection />
                <div className="Content">
                    <div className="scroll-to-element" id="Project"/>
                    <ProjectDescription id="Project"/>
                    <div class="scroll-to-element" id="HabsatComponents" />
                    <HabsatComponentsSection/>
                    <NumbersSection />
                    {/*<div className="scroll-to-element" id="Experiment"/>*/}
                    {/*<IconsSection/>*/}
                    <div class="scroll-to-element" id="AboutUs" />
                    <AboutUsSection id="AboutUs" />
                    <div class="scroll-to-element" id="Partners" />
                    <PartnersSection id="Partners" />
                    <div class="scroll-to-element" id="Contact" />
                    {/*<ContactSection id="Contact" />*/}
                </div>
                <FooterSection />
            </Content>
        </Layout>
    );
}

export default LandingPage;