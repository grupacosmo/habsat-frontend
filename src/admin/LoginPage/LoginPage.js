import { Button, Checkbox, Form, Input, Layout, Space } from "antd";
import React, { useRef, useState } from "react";
import AdminPanel from "../adminPanel/AdminPanel";
import "../adminPanel/AdminPanel.css";
import "../LoginPage/LoginPage.css";

const LoginPage = () => {

    return (

        <Layout className="Background">

        
            <Form
                className="loginposition"
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 15 }}
                initialValues={{ remember: true }}
                onFinish={() => console.log("finishlogin")}
                onFinishFailed={() => console.log("WYPIERDALAJ")}
                autoComplete="off"
                style={{ position: 'absolute', top: '33%', screenLeft: '15em' }}
            >
                <p>HabSat - Logowanie</p>
                
                <Form.Item
                    label={<label style={{ color: "white" }}>Email</label>}
                    name="email"
                    rules={[{ requires: true, message: 'KURWO WPISZ TO' }]}
                >
                    <Input />

                </Form.Item>

                <Form.Item
                    label={<label style={{ color: "white" }}>Password</label>}
                    name="password"
                    rules={[{ requires: true, message: 'KURWO WPISZ TO' }]}
                >
                    <Input.Password />

                </Form.Item>

                <Form.Item className="checkboxposition"
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{ offset: 8, span: 16 }}
                >
                    <Checkbox style={{ color: "white" }}>Remember me</Checkbox>

                </Form.Item>

                <Form.Item className="buttonposition"
                    wrapperCol={{
                        labelCol: { span: 8 },
                        wrapperCol: { span: 16 }, offset: 8
                    }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>

        </Layout>
    )
}


export default LoginPage;