import { Carousel, Row, Col } from "antd"
import { LeftOutlined, RightOutlined } from "@ant-design/icons"

import "./SSTVTabComponent.css"

const SSTVTabComponent = ({tag, images, description}) => {

    console.log(require.context)
    
    return (
        <div className="SSTVTabComponent">
            <Row>
                <Col 
                    xs={{span: 24, order: 1}}
                    md={{span: 12, order: 1}}
                >
                    <Carousel
                        autoplay
                        arrows
                        prevArrow={<LeftOutlined />}
                        nextArrow={<RightOutlined />}
                    >
                        {
                            images.map(image => {
                                return (
                                    <div 
                                        className="SSTVTabComponent__image"
                                        key={image.default}
                                    >
                                        <img 
                                            src={image.default} 
                                            alt="SSTV image" 
                                            className="SSTVTabComponent__image--image"
                                        />
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </Col>
                <Col
                    xs={{span: 24, order: 2}}
                    md={{span: 12, order: 2}}
                >
                    <div className="SSTVTabComponent__description">
                        {description}
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default SSTVTabComponent