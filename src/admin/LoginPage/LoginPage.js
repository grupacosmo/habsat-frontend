import { Button, Checkbox, Form, Input } from "antd";
import React, { useRef, useState } from "react";
import AdminPanel from "../adminPanel/AdminPanel";
import "../adminPanel/AdminPanel.css";


const LoginPage = () => {

    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 17 }}
            initialValues={{ remember: true }}
            onFinish={() => console.log("finishlogin") }
            onFinishFailed={() => console.log("WYPIERDALAJ") }
            autoComplete="off"
            style={{ position: 'absolute', top: '5vw', screenLeft: '15em'}}
        >
            <Form.Item
                label={<label style={{ color: "white" }}>Email</label>}
                name="email"
                rules={[{ requires: true, message: 'KURWO WPISZ TO'}]}
            >
                <Input />

            </Form.Item>

            <Form.Item
                label={<label style={{ color: "white" }}>Password</label>}
                name="password"
                rules={[{ requires: true, message: 'KURWO WPISZ TO'}]}
            >
                <Input.Password />

            </Form.Item>

            <Form.Item 
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset:8, span:16 }}
            >
            <Checkbox style={{ color: "white" }}>Remember me</Checkbox>

            </Form.Item>
            
            <Form.Item wrapperCol={{ labelCol: { span: 8 },
                wrapperCol: { span: 16 }, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                Submit
                </Button>
            </Form.Item>
        </Form>
    )
}


export default LoginPage;