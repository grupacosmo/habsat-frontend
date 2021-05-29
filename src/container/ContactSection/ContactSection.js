import React from 'react'
import {Button, Col, Divider, Input, Row} from 'antd';
import './ContactSection.css'

const { TextArea } = Input;

function ContactSection() {
	return(      
        <Row justify="center" gutter={[16,16]} className="contactForm">
            <Col span={14}>
                <h1>Masz pytanie? Napisz!</h1>
            </Col>
            <Divider></Divider>
            <Col xs={20} md={9} lg={7}>
                <Input placeholder="Name" />
            </Col>
            <Col xs={20} md={9} lg={7}>
                <Input placeholder="Email" />
            </Col>
            <Col xs={20} md={18} lg={14}>
                <Input placeholder="Subject" />
            </Col>
            <Col xs={20} md={18} lg={14}>
                <TextArea placeholder="Message" rows={4} />
            </Col>   
            <Col xs={20} md={{span:4, offset:14}} lg={{span:3, offset:11}}>
                <Button type="primary" block>Wyślij</Button>
            </Col>    
        </Row>
	)
}

export default ContactSection