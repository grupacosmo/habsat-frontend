import './LandingPage.css';
import {Layout} from "antd";
import HeheSection from "../../container/HeheSection/HeheSection";

const { Content } = Layout;

function LandingPage() {
  return (
      <Layout>
          <Content>
              <HeheSection />
          </Content>
      </Layout>
  );
}

export default LandingPage;
