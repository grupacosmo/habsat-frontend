import './LandingPage.css';
import {Layout} from "antd";
// import HeheSection from "../../container/HeheSection/HeheSection";
import PartnersSection from '../../container/PartnersSection/PartnersSection';

const { Content } = Layout;

function LandingPage() {
  return (
      <Layout>
          <Content>
              {/* <HeheSection /> */}
              <PartnersSection />
          </Content>
      </Layout>
  );
}

export default LandingPage;
