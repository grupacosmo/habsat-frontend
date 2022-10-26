import React from "react";
import { useState } from "react";
import LoginPage from "../LoginPage/LoginPage";
import {Tabs} from 'antd';
import AdminPosts from "./TabComponents/AdminPosts";


const AdminPanel = () => {

    const [isLoggedIn, setLoggedIn] = useState(true);
    const [activeKey, setActiveKey] = useState("tab1")

    if(!isLoggedIn) {
        return <LoginPage />
    }

    return (
        <Tabs 
            tabPosition="left"
            activeKey={activeKey}
            onChange={(key) => setActiveKey(key)}
        >
            <Tabs.TabPane tab="Posty" key="tab1">
                <AdminPosts />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Loty" key="tab2">
                <div>LOTY</div>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Administratorzy" key="tab3" >
                <div>ADMINISTRATORZY</div>
            </Tabs.TabPane>
        </Tabs>
    )
}


export default AdminPanel;