import { Carousel, Row, Col } from "antd"
import { LeftOutlined, RightOutlined } from "@ant-design/icons"
import { ISstvDataItem } from "container/SSTVSection/SSTVSection"
import { FC } from "react"
import "./SSTVTabComponent.css"

interface Props {
    tag?: ISstvDataItem['tag'],
    images: ISstvDataItem['images'],
    description: ISstvDataItem['description']
}

const SSTVTabComponent: FC<Props> = ({tag, images, description}) => {

    console.log(images[0])
    //TODO 2137
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
                                        // TODO fix the typings
                                        // @ts-expect-error
                                        key={image.default} 
                                    >
                                        <img 
                                            // TODO fix the typings
                                            // @ts-expect-error
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