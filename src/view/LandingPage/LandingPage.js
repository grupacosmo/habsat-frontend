import './LandingPage.css';
import {Layout} from "antd";
import HeheSection from "../../container/HeheSection/HeheSection";
import ContactSection from "../../container/ContactSection/ContactSection";

const { Content } = Layout;

function LandingPage() {
  return (
      <Layout>
          <Content>
              <ContactSection/>
          </Content>
      </Layout>
  );
}

export default LandingPage;
