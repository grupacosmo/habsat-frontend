import React from "react";
import {Layout} from "antd";
import {Button, Form, Input, InputNumber, Checkbox} from "antd";

const SendEmailSection = () => {
    return (
        <Layout>
            <div>
                <Form
                    labelCol={{ span: 3 }}
                    wrapperCol={{ span: 8 }}
                    autoComplete="off"
                    >
                    <Form.Item
                        name="EmailAddress"
                        label="Adres email"
                        rules={[
                            {
                                required: true,
                                message: "Wprowadź adres email"
                            },
                            {
                                type: "email",
                                message: "Wprowadź prawidłowy adres email"
                            },

                    ]}hasFeedback>
                        <Input placeholder='Wprowadź swój adres email'/>
                    </Form.Item>
                    <Form.Item wrapperCol={{ span : 8 }}
                        name='EmailContent'
                        label='Twoje zapytanie'
                        rules={[
                            {
                                required: true,
                                message: "Wprowadź treśc zapytania"
                            },
                            {
                                whitespace: true,
                                message: "Pytanie nie może być puste :)"
                            },
                            {
                                // min: 10,
                                // message: "Pytanie musi mieć conajmniej 10 znaków"
                            },
                            ]}hasFeedback>
                        <Input placeholder='O co chciałbyś nas zapytać'/>
                    </Form.Item>
                    <Button block type="primary" htmlType="submit"> Wyślij zapytanie </Button>
                </Form>
            </div>
        </Layout>

    )

};

export default SendEmailSection;