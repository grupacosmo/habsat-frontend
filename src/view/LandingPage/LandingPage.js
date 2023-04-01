import React from "react";
import './LandingPage.css';
import { Layout } from "antd";
import PartnersSection from '../../container/PartnersSection/PartnersSection';
import AboutUsSection from "../../container/AboutUsSection/AboutUsSection";
import HabsatComponentsSection from "../../container/HabsatComponentsSection/HabsatComponentsSection";
import NumbersSection from "../../container/NumbersSection/NumbersSection";
import NavbarSection from "../../container/NavbarSection/NavbarSection";
import HomeSection from "../../container/HomeSection/HomeSection";
import FooterSection from "../../container/FooterSection/FooterSection";
import ProjectDescription from "../../container/ProjectDescription/ProjectDescription";
import SSTVSection from "../../container/SSTVSection/SSTVSection";
import PostsSection from "../../container/PostsSection/PostsSection";
import { Route, Redirect } from "react-router-dom";

const { Content } = Layout;

function LandingPage() {
    return (
        <Layout>
            <Content>
                <NavbarSection />
                <Route exact path="/"><Redirect to="/home" /></Route>
                <Route exact path="/home">
                    <div className="scroll-to-element" id="Home" />
                    <HomeSection />
                </Route>
                <Route exact path="/project">
                    <div className="scroll-to-element" id="Project" />
                    <div className="Content">
                        <ProjectDescription id="Project" />
                        <div className="scroll-to-element" id="HabsatComponents" />
                        <HabsatComponentsSection />
                        <SSTVSection id="SSTVSection" />
                        <NumbersSection />
                    </div>
                </Route>
                <Route exact path="/about">
                    <div className="scroll-to-element" id="AboutUs" />
                    <div className="Content">
                        <AboutUsSection id="AboutUs" />
                    </div>
                </Route>
                <Route exact path="/posts/:slug?">
                    <div className="scroll-to-element" id="Posts" />
                    <div className="Content">
                        <PostsSection />
                    </div>
                </Route>
                <Route exact path="/partners">
                    <div className="scroll-to-element" id="Partners" />
                    <div className="Content">
                        <PartnersSection id="Partners" />
                    </div>
                </Route>

                {/* <div className="scroll-to-element" id="Experiment"/>
                        <div className="Content">
                            <IconsSection/>
                        </div> */}
                {/* <div className="scroll-to-element" id="Contact" /> */}
                {/* <ContactSection id="Contact" /> */}
                <FooterSection />
            </Content>
        </Layout>
    );
}

export default LandingPage;
