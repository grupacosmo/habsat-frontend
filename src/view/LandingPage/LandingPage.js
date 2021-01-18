import React from "react";
import './LandingPage.css';
import {Layout} from "antd";
import HeheSection from "../../container/HeheSection/HeheSection";
import IconsSection from "../../container/IconsSection/IconsSection";
import MapView from "../../container/MapSection/MapView";


const { Content } = Layout;

function LandingPage() {
  return (
      <Layout>
          <Content>
              {/*<HeheSection />*/}
              <MapView/>
              <IconsSection/>
          </Content>
      </Layout>
  );
}

export default LandingPage;
