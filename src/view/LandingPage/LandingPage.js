import React from "react";
import './LandingPage.css';
import {Layout} from "antd";
import HeheSection from "../../container/HeheSection/HeheSection";
import IconsSection from "../../container/IconsSection/IconsSection";


const { Content } = Layout;

function LandingPage() {
  return (
      <Layout>
        <Content>
          {/*<HeheSection />*/}
          <IconsSection/>
        </Content>
      </Layout>
  );
}

export default LandingPage;
