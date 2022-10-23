import React from "react";
import FooterSection from "../../container/FooterSection/FooterSection";
import NavbarSection from "../../container/NavbarSection/NavbarSection";
import SendEmailSection from "../../container/SendEmailSection/SendEmailSection";
import {Layout} from "antd";

const ContactPage = () => { // deklaracja nazwy komponentu
    return (
        <Layout>
            <NavbarSection />
            <SendEmailSection />
            <FooterSection />
        </Layout>
    );
};


 export default ContactPage;

