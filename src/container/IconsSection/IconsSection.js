import React from 'react';
import {Col, Row} from 'antd';
import {faChartPie, faLightbulb, faRocket, faSitemap} from '@fortawesome/free-solid-svg-icons';

import './IconsSection.css';
import IconTile from "../../component/IconTile/IconTile";


const tileData = [
    {
        icon: faSitemap,
        title: "Architektura",
        description: "Z czego jest zbudowany?",
    },
    {
        icon: faRocket,
        title: "Lot",
        description: "Trasa i cel lotu",
    },
    {
        icon: faLightbulb,
        title: "Eksperyment",
        description: "Co Zbadaliśmy?",
    },
    {
        icon: faChartPie,
        title: "Pomiary",
        description: "Co zmierzyliśmy?",
    }
]


const IconsSection = () =>{
    return(
      <div className={'IconsSection'}>
          <Row gutter={[40, 32]}>
              <Col xl={{span:8, offset:4}} md={{span:10, offset:2}} sm={{span:22, offset:1}} xs={{span:22, offset:1}}>
                  <IconTile data={tileData[0]}/>
              </Col>
              <Col xl={{span:8, offset:0}} md={{span:10, offset:0}} sm={{span:22, offset:1}} xs={{span:22, offset:1}}>
                  <IconTile data={tileData[1]}/>
              </Col>
              <Col xl={{span:8, offset:4}} md={{span:10, offset:2}} sm={{span:22, offset:1}} xs={{span:22, offset:1}}>
                  <IconTile data={tileData[2]}/>
              </Col>
              <Col xl={{span:8, offset:0}} md={{span:10, offset:0}} sm={{span:22, offset:1}} xs={{span:22, offset:1}}>
                  <IconTile data={tileData[3]}/>
              </Col>
          </Row>
      </div>
    );
}

export default IconsSection;